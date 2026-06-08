import React from 'react';
import { Link } from 'react-router-dom';
import { useCookieConsent } from './CookieConsent';
import './CookieBanner.css';

export default function CookieBanner() {
  const { consent, accept, decline } = useCookieConsent();

  if (consent !== 'pending') return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookietoestemming">
      <div className="cookie-banner-inner">
        <div className="cookie-banner-text">
          <strong>Wij gebruiken cookies</strong>
          <p>
            Voor het tonen van LinkedIn-berichten en Google Maps plaatsen wij cookies
            van derden. Lees meer in onze{' '}
            <Link to="/privacy-policy" className="cookie-banner-link">privacyverklaring</Link>.
          </p>
        </div>
        <div className="cookie-banner-actions">
          <button type="button" className="cookie-btn cookie-btn-decline" onClick={decline}>
            Weigeren
          </button>
          <button type="button" className="cookie-btn cookie-btn-accept" onClick={accept}>
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
}
