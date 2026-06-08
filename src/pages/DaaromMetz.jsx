import React from 'react';
import FinalCtaBanner from '../components/FinalCtaBanner';
import MetzFeatures from '../components/MetzFeatures';
import Seo from '../components/Seo';
import './DaaromMetz.css';

export default function DaaromMetz() {
  const heroBg = `${process.env.PUBLIC_URL}/images/werkzaamheden-emc.jpeg`;
  const photoOne = `${process.env.PUBLIC_URL}/images/toolbox-meeting.jpg`;
  const photoTwo = `${process.env.PUBLIC_URL}/images/werkzaamheden-emc.jpeg`;

  const sectors = [
    'Overheden',
    'Medische instellingen',
    'Zorgorganisaties',
    'Investeerders',
    'Woningcorporaties',
    'VvE’s'
  ];

  const projectTypes = [
    'Verbouwingen',
    'Renovaties',
    'Verduurzamingsprojecten',
    'Vloerenrenovaties',
    'Planmatig onderhoud'
  ];

  return (
    <div className="veiligheid-page">
      <Seo
        title="Daarom Metz"
        description="Daarom Metz: zorgvuldig voortraject, persoonlijke aandacht en minimale overlast. Vaste partner van onder andere het Erasmus MC voor verbouwings- en onderhoudswerkzaamheden."
        keywords="Daarom Metz, aannemer, voortraject, voorbereiding, Erasmus MC, onderhoud, renovatie"
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Daarom Metz', path: '/daarom-metz' }
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Daarom Metz',
          serviceType: 'Bouw- en aannemerswerk met zorg en aandacht',
          provider: { '@type': 'Organization', name: 'Metz Nederland B.V.' },
          areaServed: 'Nederland',
          url: 'https://www.metz-nederland.nl/daarom-metz',
          description: 'Zorgvuldig voortraject, persoonlijke aandacht en samenwerking als één team.'
        }}
      />

      {/* Hero */}
      <section className="vh-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="vh-hero-overlay" aria-hidden="true" />
        <div className="container vh-hero-inner">
          <span className="vh-eyebrow">Daarom Metz</span>
          <h1 className="vh-title">Daarom Metz</h1>
          <p className="vh-lead">
            Zorgvuldig voortraject, persoonlijke aandacht en samenwerking als één team. Zo bouwen wij altijd METZorg.
          </p>
        </div>
      </section>

      {/* Section 1 — Daarom: met zorg en aandacht */}
      <section className="vh-section">
        <div className="container">
          <div className="vh-section-grid">
            <div className="vh-section-content">
              <span className="vh-section-eyebrow">Daarom Metz</span>
              <h2 className="vh-section-title">Daarom: met zorg en aandacht</h2>
              <p>
                Jouw opdracht voeren wij nooit zomaar uit. Voordat we starten, investeren we veel tijd en energie in het voortraject. Een zorgvuldige inventarisatie van jouw wensen en eisen, gecombineerd met een goede voorbereiding, vormt de basis voor een optimaal resultaat. En daar draait het voor ons om.
              </p>
              <p>
                Juist in projecten in en rond bestaande gebouwen en omgevingen die geheel of gedeeltelijk in gebruik zijn, ligt onze kracht. Wij houden daarbij zoveel mogelijk rekening met de klant van onze klant. Zo voorkomen we overlast waar mogelijk en beperken we die waar nodig.
              </p>
            </div>
            <div className="vh-section-photo">
              <img src={photoOne} alt="Metz aan het werk in bestaande omgevingen" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats strip (light) */}
      <section className="vh-stats">
        <div className="container">
          <div className="vh-stats-grid">
            <div className="vh-stat">
              <span className="vh-stat-value">500–600</span>
              <span className="vh-stat-label">Projecten per jaar</span>
            </div>
            <div className="vh-stat">
              <span className="vh-stat-value">±10.000</span>
              <span className="vh-stat-label">Storingsmeldingen per jaar</span>
            </div>
            <div className="vh-stat">
              <span className="vh-stat-value">Sinds 1999</span>
              <span className="vh-stat-label">Vakkundig aan het werk</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Bewezen meerwaarde */}
      <section className="vh-section vh-section-alt">
        <div className="container">
          <div className="vh-section-narrow">
            <span className="vh-section-eyebrow">Meerwaarde</span>
            <h2 className="vh-section-title">Bewezen meerwaarde</h2>
            <p>
              Jaarlijks voeren wij circa 500 tot 600 projecten uit en lossen we ongeveer 10.000 storingsmeldingen op. Wij werken vooral voor:
            </p>

            <ul className="vh-chip-list" aria-label="Onze opdrachtgevers">
              {sectors.map((sector) => (
                <li key={sector} className="vh-chip">{sector}</li>
              ))}
            </ul>

            <p>
              Dat is niet zonder reden. Onze toegevoegde waarde zit niet alleen in de uitvoering van het werk, maar vooral in het meedenken met de opdrachtgever en het voorkomen of zoveel mogelijk beperken van overlast. Daarbij verliezen we de eindgebruiker nooit uit het oog, zoals bewoners, bezoekers, cliënten en patiënten.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3 — Vaste partner, brede expertise */}
      <section className="vh-section">
        <div className="container">
          <div className="vh-section-grid vh-section-grid-reverse">
            <div className="vh-section-content">
              <span className="vh-section-eyebrow">Expertise</span>
              <h2 className="vh-section-title">Vaste partner, brede expertise</h2>

              <div className="vh-partner-badge">
                <span className="vh-partner-badge-tag">Vaste partner</span>
                <span className="vh-partner-badge-text">Erasmus MC, Rotterdam</span>
              </div>

              <p>
                Zo zijn wij vaste partner van het Erasmus MC in Rotterdam voor uiteenlopende verbouwings- en onderhoudswerkzaamheden. Daarnaast voeren wij voor diverse opdrachtgevers onderhoudswerkzaamheden uit. Ook duurzaamheidsprojecten en vloerenrenovaties behoren tot onze expertise.
              </p>
              <p>
                Of het nu gaat om kleine of grote verbouwingen, totale renovaties, verduurzamingsprojecten, planmatig onderhoud of een bijzondere klus: wij regelen het met zorg en aandacht. Samenwerken als één team met de opdrachtgever, leveranciers en andere (onder)aannemers is daarbij de sleutel tot succes. Zo voorkomen we fouten, onnodige kosten en daarmee ook onnodige overlast.
              </p>

              <ul className="vh-chip-list vh-chip-list-subtle" aria-label="Soorten projecten">
                {projectTypes.map((type) => (
                  <li key={type} className="vh-chip vh-chip-subtle">{type}</li>
                ))}
              </ul>
            </div>
            <div className="vh-section-photo">
              <img src={photoTwo} alt="Metz partner van het Erasmus MC" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <MetzFeatures />
      <FinalCtaBanner />
    </div>
  );
}
