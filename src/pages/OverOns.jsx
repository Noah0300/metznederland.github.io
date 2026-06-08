import React from 'react';
import FinalCtaBanner from '../components/FinalCtaBanner';
import MetzFeatures from '../components/MetzFeatures';
import Seo from '../components/Seo';
import './OverOns.css';

export default function OverOns() {
  const heroBg = `${process.env.PUBLIC_URL}/images/metz-team-op-locatie.jpg`;
  const introPhoto = `${process.env.PUBLIC_URL}/images/metz-team-op-locatie.jpg`;
  const workshopPhoto = `${process.env.PUBLIC_URL}/images/vakmanschap-expertise.jpg`;

  return (
    <div className="over-ons-page">
      <Seo
        title="Over ons"
        description="Metz Nederland is sinds 1999 een flexibel aannemersbedrijf met een persoonlijke en betrokken aanpak. Wij werken voor woningcorporaties, zorginstellingen, ziekenhuizen, VvE’s, gemeenten en particulieren."
        keywords="Metz Nederland, aannemer Schiedam, over ons, VCA, duurzaam, circulair, Suzanne de Deugd, Marco de Deugd"
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Over ons', path: '/over-ons' }
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Metz Nederland B.V.',
          foundingDate: '1999',
          url: 'https://www.metz-nederland.nl/over-ons',
          areaServed: 'Nederland',
          description: 'Flexibel aannemersbedrijf met een persoonlijke en betrokken aanpak.'
        }}
      />

      {/* Hero */}
      <section className="oo-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="oo-hero-overlay" aria-hidden="true" />
        <div className="container oo-hero-inner">
          <span className="oo-eyebrow">Over ons</span>
          <h1 className="oo-title">Metz Nederland</h1>
        </div>
      </section>

      {/* Intro section — two columns */}
      <section className="oo-intro">
        <div className="container">
          <div className="oo-intro-grid">
            <div className="oo-intro-text">
              <span className="oo-section-eyebrow">Wie zijn wij</span>
              <h2 className="oo-section-title">
                Een persoonlijk en betrokken aannemersbedrijf
              </h2>
              <p className="oo-section-lead">
                <strong>Metz Nederland</strong> is een flexibel aannemersbedrijf met een persoonlijke en betrokken aanpak, onder leiding van Suzanne de Deugd en haar broer Marco de Deugd.
              </p>
              <p>
                Sinds 1999 werken wij voor onder meer woningcorporaties, zorginstellingen, ziekenhuizen, VvE’s, gemeenten en waterschappen. Ook particulieren en collega-aannemers weten ons te vinden.
              </p>
            </div>
            <div className="oo-intro-photo">
              <img src={introPhoto} alt="Metz Nederland aan het werk" loading="lazy" />
              <div className="oo-intro-photo-badge">
                <span className="oo-intro-photo-badge-num">25+</span>
                <span className="oo-intro-photo-badge-label">jaar ervaring</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip */}
      <section className="oo-stats">
        <div className="container">
          <div className="oo-stats-grid">
            <div className="oo-stat">
              <span className="oo-stat-value">1999</span>
              <span className="oo-stat-label">Opgericht</span>
            </div>
            <div className="oo-stat">
              <span className="oo-stat-value">500–600</span>
              <span className="oo-stat-label">Projecten per jaar</span>
            </div>
            <div className="oo-stat">
              <span className="oo-stat-value">VCA</span>
              <span className="oo-stat-label">Gecertificeerde vakmensen</span>
            </div>
            <div className="oo-stat">
              <span className="oo-stat-value">Circulair</span>
              <span className="oo-stat-label">Waar mogelijk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop section — reversed two columns */}
      <section className="oo-workshop">
        <div className="container">
          <div className="oo-workshop-grid">
            <div className="oo-workshop-photo">
              <img src={workshopPhoto} alt="De werkplaats van Metz Nederland" loading="lazy" />
            </div>
            <div className="oo-workshop-text">
              <span className="oo-section-eyebrow">Vakmanschap & expertise</span>
              <h2 className="oo-section-title">Alle disciplines in huis</h2>
              <p>
                Met ervaren, VCA-gecertificeerde medewerkers voeren wij iedere klus uit met zorg en aandacht. Duurzaamheid staat daarbij centraal: waar mogelijk werken wij circulair en maken wij gebruik van herbruikbare materialen.
              </p>
              <p>
                Dankzij onze volledig ingerichte werkplaats en brede expertise hebben wij alle disciplines in huis om opdrachten goed, zorgvuldig en op tijd uit te voeren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote / tagline section */}
      <section className="oo-quote">
        <div className="container">
          <div className="oo-quote-inner">
            <span className="oo-quote-mark" aria-hidden="true">“</span>
            <p className="oo-quote-text">
              Er is er maar één die jouw opdracht oprecht{' '}
              <strong>met zorg en aandacht</strong> uitvoert.
            </p>
          </div>
        </div>
      </section>

      <MetzFeatures />
      <FinalCtaBanner />
    </div>
  );
}
