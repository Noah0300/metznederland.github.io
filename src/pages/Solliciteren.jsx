import React from 'react';
import { Link } from 'react-router-dom';
import SollicitatieForm from '../components/SollicitatieForm';
import Seo from '../components/Seo';
import './Solliciteren.css';

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

export default function Solliciteren() {
  const heroBg = `${process.env.PUBLIC_URL}/images/220704-Metz-website-header-Werken-bij-1.jpg`;

  return (
    <div className="sol-page">
      <Seo
        title="Solliciteren"
        description="Solliciteer bij Metz Nederland B.V. Vul het formulier in, voeg je cv en eventueel een motivatiebrief toe. Wij nemen zo spoedig mogelijk contact met je op."
        keywords="solliciteren Metz Nederland, sollicitatie aannemer, open sollicitatie, vacature reageren"
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Werken bij', path: '/werken-bij' },
          { name: 'Solliciteren', path: '/solliciteren' }
        ]}
      />

      {/* Hero */}
      <section className="sol-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="sol-hero-overlay" aria-hidden="true" />
        <div className="container sol-hero-inner">
          <span className="sol-eyebrow">Werken bij Metz</span>
          <h1 className="sol-page-title">Solliciteren bij Metz Nederland</h1>
          <p className="sol-page-lead">
            Leuk dat je bij ons wilt komen werken! Vul het formulier in, voeg je cv toe
            (en eventueel een motivatiebrief) en wij nemen zo spoedig mogelijk contact met je op.
          </p>
        </div>
      </section>

      {/* Formulier + info */}
      <section className="sol-main">
        <div className="container">
          <div className="sol-grid">
            <div className="sol-form-col">
              <SollicitatieForm />
            </div>

            <aside className="sol-info-card">
              <span className="sol-info-eyebrow">Vragen over je sollicitatie?</span>
              <h2 className="sol-info-title">We helpen je graag</h2>
              <p className="sol-info-text">
                Loop je vast bij het invullen of heb je een vraag? Neem gerust contact
                met ons op — we denken graag met je mee.
              </p>

              <a href="tel:+31104718110" className="sol-info-row">
                <span className="sol-info-icon">{PHONE_ICON}</span>
                <span className="sol-info-text-block">
                  <span className="sol-info-label">Telefoon</span>
                  <span className="sol-info-value">010 471 81 10</span>
                </span>
              </a>

              <a href="mailto:info@metz-nederland.nl" className="sol-info-row">
                <span className="sol-info-icon">{MAIL_ICON}</span>
                <span className="sol-info-text-block">
                  <span className="sol-info-label">E-mail</span>
                  <span className="sol-info-value">info@metz-nederland.nl</span>
                </span>
              </a>

              <p className="sol-info-note">
                We gaan zorgvuldig om met je gegevens. Lees hoe in onze{' '}
                <Link to="/privacy-policy">privacyverklaring</Link>.
              </p>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
