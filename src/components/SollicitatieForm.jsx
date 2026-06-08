import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { siteData } from '../data/siteData';
import './SollicitatieForm.css';

const FORM_ENDPOINT =
  process.env.REACT_APP_SOLLICITATIE_ENDPOINT || '/api/solliciteren.php';

const MAX_BYTES = 5 * 1024 * 1024; // 5 MB
const TOEGESTANE_EXT = ['pdf', 'doc', 'docx'];
const OPEN_SOLLICITATIE = 'Open sollicitatie';

const CHECK_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20,6 9,17 4,12" />
  </svg>
);

export default function SollicitatieForm() {
  const [searchParams] = useSearchParams();

  // Vacatures + open sollicitatie vormen samen de keuzelijst
  const vacatures = (siteData.vacancies || []).map((v) => v.title);
  const functieOpties = [...vacatures, OPEN_SOLLICITATIE];

  const functieUitUrl = searchParams.get('functie');
  const startFunctie = functieOpties.includes(functieUitUrl) ? functieUitUrl : '';

  const [formData, setFormData] = useState({
    functie: startFunctie,
    naam: '',
    telefoon: '',
    email: '',
    toelichting: '',
    _honey: ''
  });
  const [cv, setCv] = useState(null);
  const [motivatie, setMotivatie] = useState(null);
  const [akkoord, setAkkoord] = useState(false);
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const bestandFout = (file, label) => {
    if (!file) return null;
    const ext = file.name.split('.').pop().toLowerCase();
    if (!TOEGESTANE_EXT.includes(ext)) {
      return `De ${label} moet een PDF- of Word-bestand zijn.`;
    }
    if (file.size > MAX_BYTES) {
      return `De ${label} is te groot (max. 5 MB).`;
    }
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    if (formData._honey) {
      // honeypot getriggerd — doe alsof het werkte, maar verstuur niets
      setStatus({ type: 'success', message: 'Bedankt voor je sollicitatie!' });
      return;
    }

    if (!formData.functie) {
      setStatus({ type: 'error', message: 'Kies de functie waarvoor je solliciteert.' });
      return;
    }
    if (!formData.naam.trim()) {
      setStatus({ type: 'error', message: 'Vul je naam in.' });
      return;
    }
    if (!formData.telefoon.trim()) {
      setStatus({ type: 'error', message: 'Vul je telefoonnummer in.' });
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Voer een geldig e-mailadres in.' });
      return;
    }
    if (!cv) {
      setStatus({ type: 'error', message: 'Voeg je cv toe.' });
      return;
    }
    const cvFout = bestandFout(cv, 'cv');
    if (cvFout) {
      setStatus({ type: 'error', message: cvFout });
      return;
    }
    const motivatieFout = bestandFout(motivatie, 'motivatiebrief');
    if (motivatieFout) {
      setStatus({ type: 'error', message: motivatieFout });
      return;
    }
    if (!akkoord) {
      setStatus({ type: 'error', message: 'Ga akkoord met de privacyverklaring om je sollicitatie te versturen.' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const payload = new FormData();
      payload.append('functie', formData.functie);
      payload.append('naam', formData.naam);
      payload.append('telefoon', formData.telefoon);
      payload.append('email', formData.email);
      payload.append('toelichting', formData.toelichting);
      payload.append('_honey', formData._honey);
      payload.append('cv', cv);
      if (motivatie) {
        payload.append('motivatie', motivatie);
      }

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        body: payload
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.success !== true) {
        throw new Error(
          data.message || 'Er ging iets mis bij het verzenden. Probeer het later opnieuw.'
        );
      }

      setStatus({
        type: 'success',
        message:
          data.message ||
          'Bedankt voor je sollicitatie! Je ontvangt een bevestiging per e-mail.'
      });
      setFormData({
        functie: '',
        naam: '',
        telefoon: '',
        email: '',
        toelichting: '',
        _honey: ''
      });
      setCv(null);
      setMotivatie(null);
      setAkkoord(false);
      if (form && typeof form.reset === 'function') {
        form.reset();
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          error.message && error.message !== 'Failed to fetch'
            ? error.message
            : 'Er ging iets mis bij het verzenden. Probeer het later opnieuw of mail je sollicitatie naar info@metz-nederland.nl.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Succesvol verzonden — toon bevestigingspaneel in plaats van het formulier
  if (status && status.type === 'success') {
    return (
      <div className="sol-success">
        <div className="sol-success-icon" aria-hidden="true">{CHECK_ICON}</div>
        <h3>Sollicitatie verzonden</h3>
        <p>{status.message}</p>
      </div>
    );
  }

  return (
    <form className="sollicitatie-form" onSubmit={handleSubmit} noValidate>
      <h3>Sollicitatieformulier</h3>
      <p className="form-intro">
        Vul je gegevens in en voeg je cv toe. Een motivatiebrief is welkom, maar niet verplicht.
        Velden met een <span aria-hidden="true">*</span> zijn verplicht.
      </p>

      {status && status.type === 'error' && (
        <div className="form-message form-error">{status.message}</div>
      )}

      {/* Honeypot — verborgen voor echte gebruikers, bots vullen het in */}
      <input
        type="text"
        name="_honey"
        value={formData._honey}
        onChange={handleChange}
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
      />

      <div className="form-group">
        <label htmlFor="functie">Functie *</label>
        <select
          id="functie"
          name="functie"
          value={formData.functie}
          onChange={handleChange}
          required
          className="form-control"
        >
          <option value="" disabled>
            Selecteer een functie
          </option>
          {functieOpties.map((optie) => (
            <option key={optie} value={optie}>
              {optie}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="naam">Naam *</label>
        <input
          type="text"
          id="naam"
          name="naam"
          value={formData.naam}
          onChange={handleChange}
          required
          autoComplete="name"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="telefoon">Telefoonnummer *</label>
        <input
          type="tel"
          id="telefoon"
          name="telefoon"
          value={formData.telefoon}
          onChange={handleChange}
          required
          autoComplete="tel"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mailadres *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
          className="form-control"
        />
      </div>

      <div className="form-group sol-file">
        <label htmlFor="cv">CV (PDF of Word) *</label>
        <input
          type="file"
          id="cv"
          name="cv"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setCv(e.target.files[0] || null)}
          required
        />
        <span className="sol-file-hint">Maximaal 5 MB — PDF, DOC of DOCX.</span>
      </div>

      <div className="form-group sol-file">
        <label htmlFor="motivatie">Motivatiebrief (PDF of Word)</label>
        <input
          type="file"
          id="motivatie"
          name="motivatie"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setMotivatie(e.target.files[0] || null)}
        />
        <span className="sol-file-hint">Optioneel — maximaal 5 MB.</span>
      </div>

      <div className="form-group">
        <label htmlFor="toelichting">Korte toelichting</label>
        <textarea
          id="toelichting"
          name="toelichting"
          value={formData.toelichting}
          onChange={handleChange}
          rows="4"
          className="form-control"
          placeholder="Optioneel — vertel ons kort waarom je bij Metz wilt werken."
        ></textarea>
      </div>

      <label className="sol-consent">
        <input
          type="checkbox"
          checked={akkoord}
          onChange={(e) => setAkkoord(e.target.checked)}
        />
        <span>
          Ik ga ermee akkoord dat Metz Nederland mijn gegevens gebruikt om mijn
          sollicitatie te behandelen, zoals beschreven in de{' '}
          <Link to="/privacy-policy">privacyverklaring</Link>.
        </span>
      </label>

      <button type="submit" disabled={isSubmitting} className="btn btn-primary">
        {isSubmitting ? 'Verzenden...' : 'Sollicitatie versturen'}
      </button>
    </form>
  );
}
