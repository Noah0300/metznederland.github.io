import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { siteData } from '../data/siteData';
import FinalCtaBanner from '../components/FinalCtaBanner';
import Seo from '../components/Seo';
import './VacatureDetail.css';

const getVacancySlug = (vacancy) =>
  vacancy.slug || String(vacancy.id);

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

export default function VacatureDetail() {
  const { vacatureSlug } = useParams();
  const vacancy = (siteData.vacancies || []).find(
    (item) => getVacancySlug(item) === vacatureSlug
  );

  if (!vacancy) {
    return (
      <div className="vacature-detail-page">
        <Seo
          title="Vacature niet gevonden"
          description="Deze vacature bestaat niet of is inmiddels vervuld. Bekijk alle vacatures van Metz Nederland."
          noIndex={true}
        />
        <section className="vd-notfound">
          <div className="container">
            <h1>Vacature niet gevonden</h1>
            <p>Deze vacature bestaat niet meer of is inmiddels vervuld.</p>
            <Link to="/werken-bij" className="vd-btn vd-btn-primary">
              Bekijk alle vacatures
              <span className="vd-btn-arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </section>
      </div>
    );
  }

  const solliciteerUrl = `/solliciteren?functie=${encodeURIComponent(vacancy.title)}`;

  return (
    <div className="vacature-detail-page">
      <Seo
        title={`${vacancy.title} | Vacature Metz Nederland`}
        description={vacancy.intro || `Vacature ${vacancy.title} bij Metz Nederland B.V.`}
        keywords={`vacature ${vacancy.title.toLowerCase()}, werken bij Metz, baan bouw, renovatie, onderhoud`}
        type="article"
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Werken bij', path: '/werken-bij' },
          { name: vacancy.title, path: `/werken-bij/${vacatureSlug}` }
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'JobPosting',
          title: vacancy.title,
          description: vacancy.intro || `Vacature ${vacancy.title} bij Metz Nederland B.V.`,
          employmentType: vacancy.type || 'FULL_TIME',
          hiringOrganization: {
            '@type': 'Organization',
            name: 'Metz Nederland B.V.',
            sameAs: 'https://www.metz-nederland.nl'
          },
          jobLocation: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Schiedam',
              addressCountry: 'NL'
            }
          },
          url: `https://www.metz-nederland.nl/werken-bij/${vacatureSlug}`
        }}
      />

      {/* Hero */}
      <section className="vd-hero">
        {vacancy.image && (
          <div
            className="vd-hero-bg"
            style={{ backgroundImage: `url(${vacancy.image})` }}
            aria-hidden="true"
          />
        )}
        <div className="vd-hero-overlay" aria-hidden="true" />
        <div className="container vd-hero-inner">
          <Link to="/werken-bij" className="vd-breadcrumb">
            <span aria-hidden="true">&larr;</span> Alle vacatures
          </Link>
          <span className="vd-eyebrow">Vacature</span>
          <h1 className="vd-title">{vacancy.title}</h1>

          {vacancy.type && (
            <div className="vd-meta">
              <span className="vd-meta-item">
                <span className="vd-meta-icon" aria-hidden="true">{CLOCK_ICON}</span>
                {vacancy.type}
              </span>
            </div>
          )}

          <a href={solliciteerUrl} className="vd-btn vd-btn-primary vd-hero-btn">
            Solliciteer direct
            <span className="vd-btn-arrow" aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </section>

      {/* Body */}
      <section className="vd-body-section">
        <div className="container vd-layout">
          <article className="vd-main">
            {vacancy.intro && <p className="vd-lead">{vacancy.intro}</p>}

            {vacancy.sections.map((section, index) => (
              <div key={index} className="vd-section">
                <h2 className="vd-section-heading">{section.heading}</h2>
                {section.subheading && (
                  <p className="vd-section-subheading">{section.subheading}</p>
                )}
                {section.paragraphs &&
                  section.paragraphs.map((paragraph, pIndex) => (
                    <p key={pIndex} className="vd-section-text">{paragraph}</p>
                  ))}
                {section.list && (
                  <ul className="vd-section-list">
                    {section.list.map((item, iIndex) => (
                      <li key={iIndex}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </article>

          {/* Sticky apply sidebar */}
          <aside className="vd-aside">
            <div className="vd-apply-card">
              <span className="vd-apply-kicker">Interesse?</span>
              <h2 className="vd-apply-title">Solliciteer op deze functie</h2>
              <p className="vd-apply-text">
                Stuur je cv en eventueel een motivatiebrief. Wij nemen zo snel mogelijk contact met je op.
              </p>
              <a href={solliciteerUrl} className="vd-btn vd-btn-primary vd-apply-btn">
                Solliciteer direct
                <span className="vd-btn-arrow" aria-hidden="true">&rarr;</span>
              </a>

              {vacancy.contact && (
                <div className="vd-contact-block">
                  <span className="vd-contact-label">Vragen over deze vacature?</span>
                  <p className="vd-contact-person">
                    {vacancy.contact.name}
                    {vacancy.contact.role && <span className="vd-contact-role">{vacancy.contact.role}</span>}
                  </p>
                  <a href={`mailto:${vacancy.contact.email}`} className="vd-contact-row">
                    <span className="vd-contact-icon" aria-hidden="true">{MAIL_ICON}</span>
                    {vacancy.contact.email}
                  </a>
                  <a href="tel:+31104718110" className="vd-contact-row">
                    <span className="vd-contact-icon" aria-hidden="true">{PHONE_ICON}</span>
                    010 471 81 10
                  </a>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      <FinalCtaBanner />
    </div>
  );
}
