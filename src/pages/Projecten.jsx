import React from 'react';
import { Link } from 'react-router-dom';
import { siteData } from '../data/siteData';
import FinalCtaBanner from '../components/FinalCtaBanner';
import Seo from '../components/Seo';
import './Projecten.css';

export default function Projecten() {
  const { projects } = siteData;
  const hasProjects = Array.isArray(projects) && projects.length > 0;

  const getProjectSlug = (project) => {
    if (project.slug) return project.slug;
    if (project.link && project.link.startsWith('/projecten/')) {
      return project.link.replace('/projecten/', '');
    }
    return String(project.id);
  };

  const heroBg = `${process.env.PUBLIC_URL}/images/220704-Metz-website-header-Projecten-1.jpg`;

  return (
    <div className="projecten-page">
      <Seo
        title="Projecten"
        description="Bekijk projecten van Metz Nederland voor woningcorporaties, zorginstellingen, ziekenhuizen, VvE’s, gemeenten en particulieren. Circa 500 tot 600 projecten per jaar, met zorg en aandacht uitgevoerd."
        keywords="projecten Metz Nederland, referenties aannemer, renovatie, onderhoud, zorginstellingen, woningcorporatie, VvE"
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Projecten', path: '/projecten' }
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Projecten Metz Nederland',
          serviceType: 'Bouw- en renovatieprojecten',
          provider: { '@type': 'Organization', name: 'Metz Nederland B.V.' },
          areaServed: 'Nederland',
          url: 'https://www.metz-nederland.nl/projecten',
          description: 'Referentieprojecten van Metz Nederland voor woningcorporaties, zorginstellingen, VvE’s, gemeenten en particulieren.'
        }}
      />

      {/* Hero */}
      <section className="pj-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="pj-hero-overlay" aria-hidden="true" />
        <div className="container pj-hero-inner">
          <span className="pj-eyebrow">Projecten</span>
          <h1 className="pj-title">Bekijk onze projecten</h1>
          <p className="pj-lead">
            Jaarlijks realiseren wij circa 500 tot 600 projecten, variërend in omvang en complexiteit. Onze opdrachtgevers zijn particulieren, maar vooral ook woningcorporaties, zorginstellingen, ziekenhuizen, VvE&rsquo;s, gemeenten en waterschappen.
          </p>
        </div>
      </section>

      {hasProjects ? (
        /* Project tiles */
        <section className="pj-grid-section">
          <div className="container">
            <div className="pj-grid">
              {projects.map((project) => {
                const slug = getProjectSlug(project);
                return (
                  <Link
                    key={project.id}
                    to={`/projecten/${slug}`}
                    className="pj-tile"
                    aria-label={`Project: ${project.title}`}
                  >
                    <div className="pj-tile-media">
                      <img src={project.image} alt="" loading="lazy" />
                      <div className="pj-tile-overlay" aria-hidden="true">
                        <span className="pj-tile-cta">
                          Bekijk project
                          <span className="pj-tile-arrow">&rarr;</span>
                        </span>
                      </div>
                    </div>
                    <div className="pj-tile-body">
                      <h2 className="pj-tile-title">{project.title}</h2>
                      <p className="pj-tile-excerpt">{project.excerpt}</p>
                      <span className="pj-tile-link">
                        Lees meer
                        <span className="pj-tile-link-arrow" aria-hidden="true">&rarr;</span>
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ) : (
        /* Empty state — geen actuele projecten */
        <section className="pj-empty-section">
          <div className="container">
            <div className="pj-empty-card">
              <div className="pj-empty-main">
                <span className="pj-empty-label">Projecten</span>
                <h2 className="pj-empty-title">Op dit moment zijn er geen projecten beschikbaar</h2>
                <p className="pj-empty-text">
                  Wij zijn bezig met het bijwerken van onze referenties. Neem voor meer
                  informatie over recent uitgevoerde projecten gerust contact met ons op.
                </p>
                <div className="pj-empty-actions">
                  <Link to="/contact" className="pj-empty-btn">
                    Neem contact op
                    <span className="pj-empty-btn-arrow" aria-hidden="true">&rarr;</span>
                  </Link>
                </div>
              </div>

              <aside className="pj-empty-aside">
                <span className="pj-empty-aside-kicker">Vragen over een project?</span>
                <h3 className="pj-empty-aside-title">Direct contact</h3>
                <p className="pj-empty-aside-text">
                  Bel of mail ons gerust voor een toelichting op onze werkwijze en eerdere projecten.
                </p>
                <div className="pj-empty-aside-contacts">
                  <a href="tel:+31104718110" className="pj-empty-aside-contact">
                    <span className="pj-empty-aside-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </span>
                    010 471 81 10
                  </a>
                  <a href="mailto:info@metz-nederland.nl" className="pj-empty-aside-contact">
                    <span className="pj-empty-aside-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    </span>
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
