import React from 'react';
import ContactForm from '../components/ContactForm';
import Seo from '../components/Seo';
import { useCookieConsent } from '../components/CookieConsent';
import './Contact.css';

const PHONE_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MAIL_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const MAP_PIN_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ID_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="M7 9h4M7 13h6M7 17h3" />
  </svg>
);

const CLOCK_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12,6 12,12 16,14" />
  </svg>
);

export default function Contact() {
  const heroBg = `${process.env.PUBLIC_URL}/images/220704-Metz-website-header-Updates-1.jpg`;
  const { consent, accept } = useCookieConsent();
  const cookiesAccepted = consent === 'accepted';

  return (
    <div className="contact-page">
      <Seo
        title="Contact"
        description="Neem contact op met Metz Nederland B.V. in Schiedam voor bouw- en aannemerswerk. We helpen particulieren, bedrijven en instellingen met vakkundige uitvoering."
        keywords="contact Metz Nederland, bouwbedrijf Schiedam, aannemer Schiedam, contact aannemer"
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' }
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Contact Metz Nederland',
          serviceType: 'Contact bouw- en aannemersbedrijf',
          provider: { '@type': 'Organization', name: 'Metz Nederland B.V.' },
          areaServed: 'Nederland',
          url: 'https://www.metz-nederland.nl/contact',
          description: 'Contact opnemen met Metz Nederland B.V. voor bouw- en aannemerswerk.'
        }}
      />

      {/* Hero */}
      <section className="ct-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="ct-hero-overlay" aria-hidden="true" />
        <div className="container ct-hero-inner">
          <span className="ct-eyebrow">Contact</span>
          <h1 className="ct-title">Neem contact op met Metz Nederland</h1>
          <p className="ct-lead">
            Verdient jouw project een zorgvuldige aanpak, met minimale overlast en maximale aandacht voor de gebruikers van het pand? Neem dan contact met ons op.
          </p>
        </div>
      </section>

      {/* Form + info */}
      <section className="ct-main">
        <div className="container">
          <div className="ct-grid">
            <div className="ct-form-card">
              <ContactForm />
            </div>

            <aside className="ct-info-card">
              <span className="ct-info-eyebrow">Contact informatie</span>
              <h2 className="ct-info-title">Direct in contact</h2>

              <a href="tel:+31104718110" className="ct-info-row ct-info-row-link">
                <span className="ct-info-icon">{PHONE_ICON}</span>
                <span className="ct-info-text">
                  <span className="ct-info-label">Telefoon</span>
                  <span className="ct-info-value">010 471 81 10</span>
                </span>
              </a>

              <a href="mailto:info@metz-nederland.nl" className="ct-info-row ct-info-row-link">
                <span className="ct-info-icon">{MAIL_ICON}</span>
                <span className="ct-info-text">
                  <span className="ct-info-label">E-mail</span>
                  <span className="ct-info-value">info@metz-nederland.nl</span>
                </span>
              </a>

              <div className="ct-info-row">
                <span className="ct-info-icon">{MAP_PIN_ICON}</span>
                <span className="ct-info-text">
                  <span className="ct-info-label">Adres</span>
                  <span className="ct-info-value">
                    Cornelis Houtmanstraat 9<br />
                    3124 LB Schiedam<br />
                    Nederland
                  </span>
                </span>
              </div>

              <div className="ct-info-row">
                <span className="ct-info-icon">{ID_ICON}</span>
                <span className="ct-info-text">
                  <span className="ct-info-label">KvK</span>
                  <span className="ct-info-value">24294561</span>
                </span>
              </div>

              <div className="ct-info-row">
                <span className="ct-info-icon">{CLOCK_ICON}</span>
                <span className="ct-info-text">
                  <span className="ct-info-label">Openingstijden</span>
                  <span className="ct-info-value">
                    Maandag t/m vrijdag: 08:00 - 17:00 uur<br />
                    Zaterdag en zondag: gesloten
                  </span>
                </span>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="ct-map-section">
        <div className="container">
          <div className="ct-map-wrapper">
            {cookiesAccepted ? (
              <iframe
                src="https://maps.google.com/maps?q=Cornelis+Houtmanstraat+9+3124+LB+Schiedam&output=embed"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                className="ct-map-iframe"
                title="Metz Nederland Locatie"
              ></iframe>
            ) : (
              <div className="ct-map-placeholder">
                <p>
                  Om de kaart van Google Maps te tonen plaatst Google cookies. Accepteer
                  de cookies om de locatie te bekijken.
                </p>
                <div className="ct-map-placeholder-actions">
                  <button type="button" onClick={accept} className="vac-empty-btn">
                    Cookies accepteren
                  </button>
                  <a
                    href="https://www.google.com/maps/place/Cornelis+Houtmanstraat+9,+3124+LB+Schiedam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ct-map-placeholder-link"
                  >
                    Open op Google Maps &rarr;
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
