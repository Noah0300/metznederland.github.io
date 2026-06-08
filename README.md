# Metz Nederland B.V. — Website (React)

Productiewebsite voor Metz Nederland B.V., gebouwd met Create React App + React Router.

## Lokaal draaien

```bash
npm install
npm start
```

De dev-server draait op http://localhost:3000.

## Productiebuild maken

```bash
npm run build
```

De output staat in `build/`. **Alleen de inhoud van die map** moet naar de webserver geupload worden (root van het webhosting-account, meestal `public_html/`).

## Deployment naar metz-nederland.nl

1. `npm run build`
2. Upload de **inhoud** van `build/` via SFTP (FileZilla) naar de webroot
3. Zorg dat `.htaccess` ook geupload wordt (verborgen bestanden tonen in FileZilla)
4. Eerste keer: bevestig de activatiemail van [formsubmit.co](https://formsubmit.co) die naar `info@metz-nederland.nl` wordt gestuurd. Zonder dat werkt het contactformulier niet.

## Project structuur

```
public/         Statische assets, .htaccess, sitemap.xml, robots.txt, favicon
src/
  components/   Herbruikbare componenten (Navigation, Footer, ContactForm, MetzFeatures, FinalCtaBanner, Seo, ...)
  pages/        Route pagina's (Home, OverOns, Werkwijze, DaaromMetz, Projecten, WerkenBij, Contact, PrivacyPolicy)
  data/         siteData.js — alleen company info + projects array
  App.jsx       Routing
  index.jsx     Entry point
```

## Routes

| URL              | Pagina         | Opmerking                          |
|------------------|----------------|------------------------------------|
| `/`              | Home           |                                    |
| `/over-ons`      | Over ons       |                                    |
| `/werkwijze`     | Onze werkwijze |                                    |
| `/daarom-metz`   | Daarom Metz    | `/veiligheid` redirect naar hier   |
| `/projecten`     | Projecten      |                                    |
| `/werken-bij`    | Werken bij     | `/vacatures` redirect naar hier    |
| `/solliciteren`  | Solliciteren   | Niet in navigatie; `/sollicitatie` redirect naar hier |
| `/contact`       | Contact        |                                    |
| `/privacy-policy`| Privacy policy |                                    |

## Contactformulier

Gebruikt [formsubmit.co](https://formsubmit.co) — geen backend nodig.
Endpoint instelbaar via env-variabele `REACT_APP_CONTACT_FORM_ENDPOINT` (zie `.env`).

## Sollicitatieformulier

De pagina `/solliciteren` is bewust **niet** in de navigatie opgenomen — je linkt
er vanuit een vacature naartoe. De functie kan worden voorgevuld via een
query-parameter: `/solliciteren?functie=Allround%20timmerman`. De keuzelijst
wordt gevuld vanuit `siteData.vacancies` (in `src/data/siteData.js`), aangevuld
met "Open sollicitatie".

Het formulier verstuurt — inclusief CV en optionele motivatiebrief — naar een
**eigen PHP-endpoint** op dezelfde webserver: `public/api/solliciteren.php`.
Na `npm run build` staat dit automatisch in `build/api/solliciteren.php` en gaat
het mee via SFTP. Het endpoint mailt de sollicitatie met bijlagen naar Metz én
stuurt de sollicitant een automatische ontvangstbevestiging. Geen externe dienst.

**Belangrijk na het uploaden:**
- De host moet **PHP 7.1+** ondersteunen (geldt voor vrijwel alle cPanel-hosting).
- Pas bovenin `solliciteren.php` zo nodig `$ONTVANGER_EMAIL` en `$AFZENDER_EMAIL`
  aan. `$AFZENDER_EMAIL` moet een adres op het eigen domein zijn (`@metz-nederland.nl`),
  anders worden mails als spam gemarkeerd of geweigerd.
- Endpoint-URL is instelbaar via env-variabele `REACT_APP_SOLLICITATIE_ENDPOINT`
  (standaard `/api/solliciteren.php`). Lokaal (`npm start`) draait er geen PHP,
  dus het formulier kan alleen op de host getest worden.

## Environment variabelen

| Variabele                          | Doel                                  |
|------------------------------------|---------------------------------------|
| `REACT_APP_SITE_URL`               | Basis-URL voor SEO + canonicals       |
| `REACT_APP_CONTACT_FORM_ENDPOINT`  | FormSubmit endpoint (mailadres)       |
| `REACT_APP_SOLLICITATIE_ENDPOINT`  | PHP-endpoint sollicitatieformulier    |

## Huisstijl

- **Primair**: `#13A0C0` (Metz cyaan)
- **Donker accent**: `#454647` (footer)
- **Tekst/lichaam**: `#58595B`

Beheerd via CSS custom properties in `src/index.css`.
