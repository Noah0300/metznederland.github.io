import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import FinalCtaBanner from '../components/FinalCtaBanner';
import Seo from '../components/Seo';
import '../pages/Home.css';

export default function Home() {
  const homeStructuredData = useMemo(() => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Metz Nederland B.V.',
    url: 'https://www.metz-nederland.nl',
    description:
      'Metz Nederland is een flexibel aannemersbedrijf dat met zorg en aandacht werkt voor woningcorporaties, zorginstellingen, ziekenhuizen, VvE’s, gemeenten en particulieren.',
    areaServed: 'Nederland'
  }), []);

  const homeBreadcrumbs = useMemo(() => [{ name: 'Home', path: '/' }], []);

  const promises = [
    {
      img: '220701-Metz-website-home-visual-offerte-1-1.png',
      eyebrow: 'Vooraf',
      title: 'Heldere offerte, doordachte planning',
      text:
        'Vooraf ontvang je een duidelijke en onderbouwde offerte met realistische planning. Zo voorkomen we onnodig meerwerk, extra kosten en fouten.'
    },
    {
      img: '220701-Metz-website-home-visual-overlast-arm-1.png',
      eyebrow: 'Tijdens',
      title: 'Met zorg en aandacht uitgevoerd',
      text:
        'Onze VCA-gecertificeerde vakmensen voeren elke klus uit met aandacht voor de omgeving. Heldere communicatie, korte lijnen en minimale overlast voor bewoners, cliënten of patiënten.'
    }
  ];

  const certificates = [
    { img: 'Gecertificeerd-ISO-9001-Kleur.png', alt: 'ISO 9001 gecertificeerd' },
    { img: 'Gecertificeerd-ISO-14001-Kleur.png', alt: 'ISO 14001 gecertificeerd' },
    { img: 'Gecertificeerd-VCA2-Kleur.jpg', alt: 'VCA** gecertificeerd' },
    { img: 'SCL_original_Trede_2.jpeg', alt: 'Safety Culture Ladder Trede 2' }
  ];

  const workflow = [
    {
      icon: '220701-Metz-icon-Onderzoek-en-advies.png',
      title: 'Zorgvuldige voorbereiding',
      text:
        'Omdat wij gespecialiseerd zijn in omgevingen die in gebruik zijn investeren we veel tijd aan een goede voorbereiding.'
    },
    {
      icon: '220701-Metz-icon-Planning.png',
      title: 'De doordachte planning',
      text:
        'Je ontvangt vooraf een duidelijke en onderbouwde offerte en een werkplanning.'
    },
    {
      icon: '220701-Metz-icon-Geluids-arm.png',
      title: 'Overlast-arme uitvoering',
      text:
        'Wij communiceren zowel naar jou als naar jouw klant, cliënt of patiënt wat, wanneer en hoe we werkzaamheden uitvoeren.'
    }
  ];

  return (
    <div className="home-page">
      <Seo
        title="Home"
        description="Metz Nederland B.V. is een flexibel aannemersbedrijf uit Schiedam. Wij werken met zorg en aandacht voor woningcorporaties, zorginstellingen, ziekenhuizen, VvE’s, gemeenten en particulieren."
        keywords="Metz Nederland, aannemer Schiedam, bouwbedrijf, renovatie, onderhoud, verduurzaming, VvE, woningcorporatie"
        breadcrumbItems={homeBreadcrumbs}
        structuredData={homeStructuredData}
      />

      {/* ============== HERO ============== */}
      <section
        className="home-hero"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/metz-home-hero.jpg')`
        }}
      >
        <div className="home-hero-overlay" aria-hidden="true" />
        <div className="home-hero-glow" aria-hidden="true" />

        <div className="container home-hero-content">
          <span className="home-hero-eyebrow">Metz Nederland · Sinds 1999</span>
          <h1 className="home-hero-title">
            Bouwen <span>en mensen</span><br />verbinden.
          </h1>
          <p className="home-hero-lead">
            Een flexibel aannemersbedrijf dat met zorg en aandacht werkt voor woningcorporaties, zorginstellingen, ziekenhuizen, VvE’s, gemeenten en particulieren.
          </p>
          <div className="home-hero-actions">
            <Link to="/over-ons" className="home-btn home-btn-primary">
              Maak kennis met Metz
              <span aria-hidden="true">→</span>
            </Link>
            <Link to="/werkwijze" className="home-btn home-btn-ghost">
              Onze werkwijze
            </Link>
          </div>
        </div>

        <div className="home-hero-scroll" aria-hidden="true">
          <span className="home-hero-scroll-label">Scroll</span>
          <span className="home-hero-scroll-line" />
        </div>
      </section>

      {/* ============== INTRO ============== */}
      <section className="home-intro">
        <div className="container">
          <div className="home-intro-grid">
            <div className="home-intro-text">
              <span className="home-eyebrow">Wie wij zijn</span>
              <h2 className="home-intro-title">
                Met zorg en aandacht <em>aan het werk.</em>
              </h2>
              <p className="home-intro-lead">
                <strong>Metz Nederland</strong> streeft naar duurzame en sociale relaties met haar klanten. Wij werken vanuit een integrale aanpak, waarin proactiviteit, kwaliteit en communicatie centraal staan.
              </p>
              <p>
                Om dit waar te maken, werken wij samen met vaste, betrokken en betrouwbare partners die aansluiten bij onze werkwijze en staan voor kwaliteit en zorgvuldigheid.
              </p>
              <Link to="/over-ons" className="home-link-arrow">
                Lees ons verhaal
                <span aria-hidden="true">→</span>
              </Link>
            </div>

            <div className="home-intro-media">
              <img
                src={`${process.env.PUBLIC_URL}/images/vakmanschap-expertise.jpg`}
                alt="Metz aan het werk"
                className="home-intro-photo home-intro-photo-1"
                loading="lazy"
              />
              <img
                src={`${process.env.PUBLIC_URL}/images/220630-Metz-website-visual-Onze-werkwijze-2.jpg`}
                alt="Vakmensen van Metz"
                className="home-intro-photo home-intro-photo-2"
                loading="lazy"
              />
              <div className="home-intro-accent" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* ============== STATS ============== */}
      <section className="home-stats">
        <div className="container">
          <div className="home-stats-grid">
            <div className="home-stat">
              <span className="home-stat-value">1999</span>
              <span className="home-stat-label">Opgericht in Schiedam</span>
            </div>
            <div className="home-stat">
              <span className="home-stat-value">500–600</span>
              <span className="home-stat-label">Projecten per jaar</span>
            </div>
            <div className="home-stat">
              <span className="home-stat-value">±10.000</span>
              <span className="home-stat-label">Storingsmeldingen per jaar</span>
            </div>
            <div className="home-stat">
              <span className="home-stat-value">VCA</span>
              <span className="home-stat-label">Gecertificeerde vakmensen</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============== PROMISES ============== */}
      <section className="home-promises">
        <div className="container">
          <div className="home-section-header home-section-header-center">
            <span className="home-eyebrow">Wat je van ons mag verwachten</span>
            <h2 className="home-section-title">
              Van offerte tot oplevering — <em>met aandacht.</em>
            </h2>
          </div>

          <div className="home-promises-grid">
            {promises.map((item) => (
              <article key={item.title} className="home-promise">
                <div className="home-promise-visual">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${item.img}`}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <div className="home-promise-text">
                  <span className="home-promise-eyebrow">{item.eyebrow}</span>
                  <h3 className="home-promise-title">{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============== CERTIFICATIES ============== */}
      <section className="home-certificates">
        <div className="container">
          <div className="home-certificates-header">
            <span className="home-eyebrow">Gecertificeerd</span>
            <h2 className="home-certificates-title">
              Kwaliteit, veiligheid en duurzaamheid — aantoonbaar geborgd.
            </h2>
          </div>
          <div className="home-certificates-grid">
            {certificates.map((cert) => (
              <div key={cert.alt} className="home-certificate">
                <img
                  src={`${process.env.PUBLIC_URL}/images/${cert.img}`}
                  alt={cert.alt}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============== QUOTE ============== */}
      <section className="home-quote">
        <div
          className="home-quote-bg"
          style={{
            backgroundImage: `url('${process.env.PUBLIC_URL}/images/220705-Metz-website-visual-Onze-werkwijze-1.jpg')`
          }}
          aria-hidden="true"
        />
        <div className="home-quote-overlay" aria-hidden="true" />
        <div className="container home-quote-inner">
          <span className="home-quote-mark" aria-hidden="true">“</span>
          <p className="home-quote-text">
            Er is er maar één die jouw opdracht oprecht{' '}
            <strong>met zorg en aandacht</strong> uitvoert.
          </p>
          <span className="home-quote-sign">— Metz Nederland</span>
        </div>
      </section>

      {/* ============== PARTNER HIGHLIGHT ============== */}
      <section className="home-partner">
        <div className="container">
          <div className="home-partner-grid">
            <div className="home-partner-photo">
              <img
                src={`${process.env.PUBLIC_URL}/images/220728-Metz-Daarom-Metz-Daarom-Metz.jpg`}
                alt="Metz partner van het Erasmus MC"
                loading="lazy"
              />
            </div>
            <div className="home-partner-text">
              <span className="home-eyebrow">Vaste partner</span>
              <h2 className="home-section-title">
                Erasmus MC vertrouwt op Metz.
              </h2>
              <p>
                Wij zijn vaste partner van het Erasmus MC in Rotterdam voor uiteenlopende verbouwings- en onderhoudswerkzaamheden. Een samenwerking gebaseerd op vertrouwen, vakmanschap en minimale overlast voor patiënten en personeel.
              </p>
              <Link to="/daarom-metz" className="home-link-arrow">
                Daarom Metz
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============== WERKWIJZE ============== */}
      <section className="home-workflow">
        <div className="container">
          <div className="home-section-header home-section-header-center">
            <span className="home-eyebrow">Onze werkwijze</span>
            <h2 className="home-section-title">Drie pijlers, één belofte.</h2>
          </div>

          <div className="home-workflow-grid">
            {workflow.map((step) => (
              <article key={step.title} className="home-workflow-card">
                <div className="home-workflow-icon">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${step.icon}`}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <h3 className="home-workflow-title">{step.title}</h3>
                <p className="home-workflow-text">{step.text}</p>
              </article>
            ))}
          </div>

          <div className="home-workflow-cta">
            <Link to="/werkwijze" className="home-link-arrow">
              Bekijk onze volledige werkwijze
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCtaBanner />
    </div>
  );
}
