import React from 'react';
import FinalCtaBanner from '../components/FinalCtaBanner';
import MetzFeatures from '../components/MetzFeatures';
import Seo from '../components/Seo';
import './Werkwijze.css';

export default function Werkwijze() {
  const heroBg = `${process.env.PUBLIC_URL}/images/220704-Metz-website-header-Werkwijze-1.jpg`;
  const photoOne = `${process.env.PUBLIC_URL}/images/220630-Metz-website-visual-Onze-werkwijze-2.jpg`;
  const photoTwo = `${process.env.PUBLIC_URL}/images/220705-Metz-website-visual-Onze-werkwijze-1.jpg`;

  return (
    <div className="werkwijze-page">
      <Seo
        title="Onze werkwijze"
        description="De werkwijze van Metz Nederland: zorgvuldige voorbereiding, proactief meedenken en samenwerken vanuit persoonlijke betrokkenheid. MetSMART als kompas."
        keywords="werkwijze Metz, voorbereiding, MetSMART, proactief, aannemer, renovatie, onderhoud"
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Onze werkwijze', path: '/werkwijze' }
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: 'Werkwijze Metz Nederland',
          serviceType: 'Voorbereiding en uitvoering van bouwprojecten',
          provider: { '@type': 'Organization', name: 'Metz Nederland B.V.' },
          areaServed: 'Nederland'
        }}
      />

      {/* Hero */}
      <section className="ww-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="ww-hero-overlay" aria-hidden="true" />
        <div className="container ww-hero-inner">
          <span className="ww-eyebrow">Onze werkwijze</span>
          <h1 className="ww-title">Onze werkwijze</h1>
          <p className="ww-lead">
            Zorgvuldige voorbereiding, proactief meedenken en samenwerken vanuit persoonlijke betrokkenheid. Wij noemen dat MetSMART.
          </p>
        </div>
      </section>

      {/* Voorbereiding */}
      <section className="ww-section ww-section-alt">
        <div className="container">
          <div className="ww-section-grid">
            <div className="ww-section-media">
              <div className="ww-section-photo">
                <img src={photoOne} alt="Voorbereiding bij Metz Nederland" loading="lazy" />
              </div>
            </div>

            <div className="ww-section-content">
              <span className="ww-section-eyebrow">Voorbereiding</span>
              <h2 className="ww-section-title">Voorbereiding en uitvoering met aandacht</h2>
              <p>
                Wij zijn gespecialiseerd in werkzaamheden in gebouwen en omgevingen die volledig of grotendeels in gebruik zijn, zoals wooncomplexen, kantoren, zorginstellingen en ziekenhuizen. Daarom besteden wij veel aandacht aan een goede voorbereiding.
              </p>
              <p>
                Samen met jou stemmen we de uitvoering zorgvuldig af, beheersen we de kosten en werken we gericht naar het gewenste resultaat. Daarbij houden we altijd rekening met de omgeving en beperken we overlast tot een minimum. Heldere communicatie met opdrachtgever, bewoners, cliënten, patiënten en andere betrokkenen is daarbij vanzelfsprekend.
              </p>
              <p>
                Vooraf ontvang je een duidelijke offerte en een realistische planning. Zo voorkomen we onnodig meerwerk, extra kosten en fouten.
              </p>

              <div className="ww-callout">
                <span className="ww-callout-icon" aria-hidden="true">✓</span>
                <p className="ww-callout-text">
                  Jouw belang is ons belang. Zo bouwen wij altijd <strong>METZorg</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voordenken */}
      <section className="ww-section">
        <div className="container">
          <div className="ww-section-grid ww-section-grid-reverse">
            <div className="ww-section-content">
              <span className="ww-section-eyebrow">Samenwerking</span>
              <h2 className="ww-section-title">Voordenken en samenwerken</h2>
              <p>
                Wij denken vooruit en handelen proactief. Dat betekent dat we problemen proberen te voorkomen, kansen tijdig signaleren en meebewegen als de situatie daarom vraagt.
              </p>
              <p>
                Samenwerken vanuit persoonlijke betrokkenheid staat daarbij centraal. Met duidelijke afspraken, korte lijnen en concrete actiepunten creëren we vertrouwen en beperken we zorgen voor de opdrachtgever.
              </p>

              <div className="ww-callout">
                <span className="ww-callout-icon" aria-hidden="true">✓</span>
                <p className="ww-callout-text">
                  Dat noemen wij <strong>MetSMART</strong>: proactief, duidelijk en samen verantwoordelijk.
                </p>
              </div>
            </div>

            <div className="ww-section-media">
              <div className="ww-section-photo">
                <img src={photoTwo} alt="Voordenken en samenwerken" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MetzFeatures />
      <FinalCtaBanner />
    </div>
  );
}
