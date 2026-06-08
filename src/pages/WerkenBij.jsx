import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import FinalCtaBanner from '../components/FinalCtaBanner';
import Seo from '../components/Seo';
import './WerkenBij.css';

const getVacancySlug = (vacancy) => vacancy.slug || String(vacancy.id);

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

const CLOCK_ICON = (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <polyline points="12,7 12,12 15,14" />
  </svg>
);

export default function WerkenBij() {
  const heroBg = `${process.env.PUBLIC_URL}/images/220704-Metz-website-header-Werken-bij-1.jpg`;
  const vacancies = siteData.vacancies || [];
  const hasVacancies = vacancies.length > 0;

  return (
    <div className="vacatures-page">
      <Seo
        title="Werken bij"
        description="Bekijk de actuele vacatures bij Metz Nederland of stuur een open sollicitatie. Wij zoeken vakmensen voor renovatie, onderhoud en bouwprojecten."
        keywords="werken bij Metz Nederland, vacatures aannemer, open sollicitatie, timmerman, werkvoorbereider"
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Werken bij', path: '/werken-bij' }
        ]}
      />

      {/* Hero */}
      <section className="vac-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="vac-hero-overlay" aria-hidden="true" />
        <div className="container vac-hero-inner">
          <span className="vac-eyebrow">Werken bij</span>
          <h1 className="vac-title">Neem een kijkje tussen onze vacatures</h1>
          <p className="vac-lead">
            Wij werken voornamelijk voor gemeenten, zorginstellingen, verenigingen van eigenaren (VvE&rsquo;s), woningcorporaties en aannemers. Ook andere opdrachtgevers helpen wij graag om veiligheid de aandacht te geven die het verdient.
          </p>
        </div>
      </section>

      {hasVacancies ? (
        <>
          {/* Vacaturetegels */}
          <section className="vac-list-section">
            <div className="container">
              <span className="vac-list-eyebrow">Openstaande vacatures</span>
              <h2 className="vac-list-title">Kom ons team versterken</h2>

              <div className="vac-grid">
                {vacancies.map((vacancy) => {
                  const slug = getVacancySlug(vacancy);
                  return (
                    <Link
                      key={vacancy.id}
                      to={`/werken-bij/${slug}`}
                      className="vac-tile"
                      aria-label={`Bekijk vacature ${vacancy.title}`}
                    >
                      <div className="vac-tile-media">
                        {vacancy.image && <img src={vacancy.image} alt="" loading="lazy" />}
                        <span className="vac-tile-badge">Vacature</span>
                      </div>
                      <div className="vac-tile-body">
                        <h3 className="vac-tile-title">{vacancy.title}</h3>

                        {vacancy.type && (
                          <div className="vac-tile-meta">
                            <span className="vac-tile-meta-item">
                              <span className="vac-tile-meta-icon" aria-hidden="true">{CLOCK_ICON}</span>
                              {vacancy.type}
                            </span>
                          </div>
                        )}

                        {vacancy.intro && (
                          <p className="vac-tile-excerpt">{vacancy.intro}</p>
                        )}

                        <span className="vac-tile-link">
                          Bekijk vacature
                          <span className="vac-tile-link-arrow" aria-hidden="true">&rarr;</span>
                        </span>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Open sollicitatie — blijft altijd mogelijk (donkere band, leesbaar) */}
          <section className="vac-open-section">
            <div className="container">
              <div className="vac-open-card">
                <div className="vac-open-main">
                  <span className="vac-aside-kicker">Niets voor jou?</span>
                  <h2 className="vac-open-title">Stuur een open sollicitatie</h2>
                  <p className="vac-open-text">
                    Zit jouw functie er niet tussen, maar denk je dat je goed bij Metz past?
                    Ook zonder passende vacature staan we open voor gemotiveerde vakmensen.
                  </p>
                  <Link to="/solliciteren?functie=Open%20sollicitatie" className="vac-empty-btn">
                    Open solliciteren
                    <span className="vac-empty-btn-arrow" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
                <div className="vac-open-contacts">
                  <a href="tel:+31104718110" className="vac-aside-contact">
                    <span className="vac-aside-contact-icon" aria-hidden="true">{PHONE_ICON}</span>
                    010 471 81 10
                  </a>
                  <a href="mailto:info@metz-nederland.nl" className="vac-aside-contact">
                    <span className="vac-aside-contact-icon" aria-hidden="true">{MAIL_ICON}</span>
                    info@metz-nederland.nl
                  </a>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* Empty state — geen openstaande vacatures */
        <section className="vac-empty-section">
          <div className="container">
            <div className="vac-empty-card">
              <div className="vac-empty-main">
                <span className="vac-empty-label">Vacatures</span>
                <h2 className="vac-empty-title">Op dit moment hebben wij geen openstaande vacatures</h2>
                <p className="vac-empty-text">
                  Denk je dat je goed bij Metz Nederland past? Neem gerust contact met ons op.
                  We maken graag kennis en bekijken samen de mogelijkheden.
                </p>
                <div className="vac-empty-actions">
                  <Link to="/contact" className="vac-empty-btn">
                    Neem contact op
                    <span className="vac-empty-btn-arrow" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>

              <aside className="vac-empty-aside">
                <span className="vac-aside-kicker">Wij denken graag mee</span>
                <h3 className="vac-aside-title">Open sollicitatie</h3>
                <p className="vac-aside-text">
                  Ook zonder openstaande vacature staan we open voor gemotiveerde vakmensen.
                </p>
                <Link to="/solliciteren?functie=Open%20sollicitatie" className="vac-empty-btn vac-aside-btn">
                  Direct solliciteren
                  <span className="vac-empty-btn-arrow" aria-hidden="true">&rarr;</span>
                </Link>
                <div className="vac-aside-contacts">
                  <a href="tel:+31104718110" className="vac-aside-contact">
                    <span className="vac-aside-contact-icon" aria-hidden="true">{PHONE_ICON}</span>
                    010 471 81 10
                  </a>
                  <a href="mailto:info@metz-nederland.nl" className="vac-aside-contact">
                    <span className="vac-aside-contact-icon" aria-hidden="true">{MAIL_ICON}</span>
                    info@metz-nederland.nl
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>
      )}

      <FinalCtaBanner />
    </div>
  );
}
