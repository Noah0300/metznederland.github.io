<?php
/**
 * Sollicitatie-endpoint voor metz-nederland.nl
 * ---------------------------------------------------------------
 * Ontvangt het sollicitatieformulier (multipart/form-data), valideert
 * de invoer, mailt de sollicitatie + bijlagen naar Metz Nederland en
 * stuurt de sollicitant een automatische ontvangstbevestiging.
 *
 * Geen externe diensten — gebruikt de PHP mail() van de webserver.
 * Vereist PHP 7.1 of hoger.
 *
 * Plaats dit bestand op de webserver in: /api/solliciteren.php
 * (Na `npm run build` staat het automatisch in build/api/.)
 */

// ---------------------------------------------------------------
// Configuratie — pas deze waarden aan indien nodig
// ---------------------------------------------------------------
$ONTVANGER_EMAIL   = 'info@metz-nederland.nl';                 // Waar sollicitaties heen gaan
$ONTVANGER_NAAM    = 'Metz Nederland B.V.';
$AFZENDER_EMAIL    = 'website@metz-nederland.nl';              // MOET een adres op het eigen domein zijn (SPF/DKIM)
$AFZENDER_NAAM     = 'Metz Nederland website';
$TELEFOON_METZ     = '010 471 81 10';
$MAX_BESTAND_BYTES = 5 * 1024 * 1024;                          // 5 MB per bestand
$TOEGESTANE_EXT    = array('pdf', 'doc', 'docx');

header('Content-Type: application/json; charset=utf-8');

function respond($ok, $message, $code = 200) {
    http_response_code($code);
    echo json_encode(array('success' => $ok, 'message' => $message));
    exit;
}

function esc($v) {
    return htmlspecialchars((string) $v, ENT_QUOTES, 'UTF-8');
}

// ---------------------------------------------------------------
// Basiscontroles
// ---------------------------------------------------------------
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    respond(false, 'Methode niet toegestaan.', 405);
}

// POST groter dan post_max_size → $_POST en $_FILES komen leeg binnen
$contentLength = isset($_SERVER['CONTENT_LENGTH']) ? (int) $_SERVER['CONTENT_LENGTH'] : 0;
if (empty($_POST) && empty($_FILES) && $contentLength > 0) {
    respond(false, 'De bijlagen zijn te groot voor de server. Verklein de bestanden en probeer het opnieuw.', 413);
}

// Honeypot — bots vullen dit verborgen veld in
if (!empty($_POST['_honey'])) {
    respond(true, 'Bedankt voor je sollicitatie!');
}

// ---------------------------------------------------------------
// Velden ophalen en valideren
// ---------------------------------------------------------------
$functie     = isset($_POST['functie'])     ? trim($_POST['functie'])     : '';
$naam        = isset($_POST['naam'])        ? trim($_POST['naam'])        : '';
$telefoon    = isset($_POST['telefoon'])    ? trim($_POST['telefoon'])    : '';
$email       = isset($_POST['email'])       ? trim($_POST['email'])       : '';
$toelichting = isset($_POST['toelichting']) ? trim($_POST['toelichting']) : '';

if ($functie === '' || $naam === '' || $telefoon === '' || $email === '') {
    respond(false, 'Vul alstublieft alle verplichte velden in.', 422);
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond(false, 'Voer een geldig e-mailadres in.', 422);
}

// ---------------------------------------------------------------
// Bijlagen valideren
// ---------------------------------------------------------------
function valideerBestand($file, $verplicht, $label) {
    global $MAX_BESTAND_BYTES, $TOEGESTANE_EXT;

    if (!$file || !isset($file['error']) || $file['error'] === UPLOAD_ERR_NO_FILE) {
        if ($verplicht) {
            respond(false, 'Voeg alstublieft een ' . $label . ' toe.', 422);
        }
        return null;
    }
    if ($file['error'] !== UPLOAD_ERR_OK) {
        respond(false, 'Het uploaden van de ' . $label . ' is mislukt. Probeer het opnieuw.', 422);
    }
    if ($file['size'] > $MAX_BESTAND_BYTES) {
        respond(false, 'De ' . $label . ' is te groot (max. 5 MB).', 422);
    }
    if (!is_uploaded_file($file['tmp_name'])) {
        respond(false, 'Ongeldige upload.', 422);
    }
    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    if (!in_array($ext, $TOEGESTANE_EXT, true)) {
        respond(false, 'De ' . $label . ' moet een PDF- of Word-bestand zijn.', 422);
    }

    $mimes = array(
        'pdf'  => 'application/pdf',
        'doc'  => 'application/msword',
        'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    );
    $veiligeNaam = preg_replace('/[^\w.\- ]/u', '_', $file['name']);

    return array(
        'naam' => $veiligeNaam,
        'data' => file_get_contents($file['tmp_name']),
        'mime' => $mimes[$ext],
    );
}

$cv        = valideerBestand(isset($_FILES['cv']) ? $_FILES['cv'] : null, true, 'cv');
$motivatie = valideerBestand(isset($_FILES['motivatie']) ? $_FILES['motivatie'] : null, false, 'motivatiebrief');

// ---------------------------------------------------------------
// Mailfunctie — HTML-bericht met optionele bijlagen
// ---------------------------------------------------------------
function verstuurMail($naar, $onderwerp, $html, $replyTo, $bijlagen) {
    global $AFZENDER_EMAIL, $AFZENDER_NAAM;

    $boundary = 'mtz_' . bin2hex(random_bytes(12));

    $headers  = 'From: ' . $AFZENDER_NAAM . ' <' . $AFZENDER_EMAIL . '>' . "\r\n";
    $headers .= 'Reply-To: ' . $replyTo . "\r\n";
    $headers .= 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-Type: multipart/mixed; boundary="' . $boundary . '"' . "\r\n";

    $body  = '--' . $boundary . "\r\n";
    $body .= 'Content-Type: text/html; charset=UTF-8' . "\r\n";
    $body .= 'Content-Transfer-Encoding: base64' . "\r\n\r\n";
    $body .= chunk_split(base64_encode($html)) . "\r\n";

    foreach ($bijlagen as $b) {
        $body .= '--' . $boundary . "\r\n";
        $body .= 'Content-Type: ' . $b['mime'] . '; name="' . $b['naam'] . '"' . "\r\n";
        $body .= 'Content-Transfer-Encoding: base64' . "\r\n";
        $body .= 'Content-Disposition: attachment; filename="' . $b['naam'] . '"' . "\r\n\r\n";
        $body .= chunk_split(base64_encode($b['data'])) . "\r\n";
    }
    $body .= '--' . $boundary . '--';

    $onderwerpEnc = '=?UTF-8?B?' . base64_encode($onderwerp) . '?=';

    return mail($naar, $onderwerpEnc, $body, $headers, '-f' . $AFZENDER_EMAIL);
}

// ---------------------------------------------------------------
// 1. Sollicitatie mailen naar Metz Nederland
// ---------------------------------------------------------------
$toelichtingHtml = $toelichting !== '' ? nl2br(esc($toelichting)) : '<em>—</em>';

$metzHtml =
    '<div style="font-family:Arial,Helvetica,sans-serif;color:#454647;font-size:15px;line-height:1.6">'
    . '<h2 style="color:#13A0C0;margin:0 0 16px">Nieuwe sollicitatie via de website</h2>'
    . '<table style="border-collapse:collapse">'
    . '<tr><td style="padding:4px 16px 4px 0;vertical-align:top"><strong>Functie</strong></td><td>' . esc($functie) . '</td></tr>'
    . '<tr><td style="padding:4px 16px 4px 0;vertical-align:top"><strong>Naam</strong></td><td>' . esc($naam) . '</td></tr>'
    . '<tr><td style="padding:4px 16px 4px 0;vertical-align:top"><strong>Telefoon</strong></td><td>' . esc($telefoon) . '</td></tr>'
    . '<tr><td style="padding:4px 16px 4px 0;vertical-align:top"><strong>E-mail</strong></td><td>' . esc($email) . '</td></tr>'
    . '</table>'
    . '<p style="margin:16px 0 4px"><strong>Toelichting</strong></p>'
    . '<p style="margin:0">' . $toelichtingHtml . '</p>'
    . '<p style="margin-top:20px;color:#888;font-size:13px">'
    . ($motivatie ? 'CV en motivatiebrief zijn als bijlage toegevoegd.' : 'CV is als bijlage toegevoegd.')
    . '</p></div>';

$bijlagen = array($cv);
if ($motivatie) {
    $bijlagen[] = $motivatie;
}

$verstuurd = verstuurMail(
    $ONTVANGER_EMAIL,
    'Sollicitatie: ' . $functie . ' — ' . $naam,
    $metzHtml,
    $naam . ' <' . $email . '>',
    $bijlagen
);

if (!$verstuurd) {
    respond(false, 'Er ging iets mis bij het verzenden. Probeer het later opnieuw of mail je sollicitatie rechtstreeks naar ' . $ONTVANGER_EMAIL . '.', 500);
}

// ---------------------------------------------------------------
// 2. Automatische ontvangstbevestiging naar de sollicitant
// ---------------------------------------------------------------
$bevestiging =
    '<div style="font-family:Arial,Helvetica,sans-serif;color:#454647;font-size:15px;line-height:1.6">'
    . '<h2 style="color:#13A0C0;margin:0 0 16px">Bedankt voor je sollicitatie</h2>'
    . '<p>Beste ' . esc($naam) . ',</p>'
    . '<p>Je sollicitatie voor <strong>' . esc($functie) . '</strong> is bij ons aangekomen. '
    . 'Alles is netjes en in goede orde ontvangen, inclusief de door jou meegestuurde bijlage(n) — '
    . 'je hoeft verder niets te doen.</p>'
    . '<p>We bekijken je sollicitatie zorgvuldig en je krijgt zo spoedig mogelijk een reactie van ons.</p>'
    . '<p>Heb je in de tussentijd vragen? Neem dan gerust contact met ons op via '
    . '<a href="tel:+31104718110" style="color:#13A0C0;text-decoration:none">' . esc($TELEFOON_METZ) . '</a> of '
    . '<a href="mailto:' . esc($ONTVANGER_EMAIL) . '" style="color:#13A0C0;text-decoration:none">' . esc($ONTVANGER_EMAIL) . '</a>.</p>'
    . '<p style="margin-top:20px">Met vriendelijke groet,<br><strong>' . esc($ONTVANGER_NAAM) . '</strong></p>'
    . '</div>';

// Bevestiging is "best effort" — als dit faalt blijft de sollicitatie zelf wel staan
verstuurMail(
    $email,
    'Bevestiging van je sollicitatie — ' . $ONTVANGER_NAAM,
    $bevestiging,
    $ONTVANGER_EMAIL,
    array()
);

respond(true, 'Bedankt voor je sollicitatie! Je ontvangt een bevestiging per e-mail.');
