import React from 'react';
import './MetzFeatures.css';

const FEATURES = [
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

export default function MetzFeatures() {
  return (
    <section className="metz-features">
      <div className="container">
        <div className="metz-features-grid">
          {FEATURES.map((feature) => (
            <article key={feature.title} className="metz-feature">
              <div className="metz-feature-icon">
                <img
                  src={`${process.env.PUBLIC_URL}/images/${feature.icon}`}
                  alt=""
                  loading="lazy"
                />
              </div>
              <h3 className="metz-feature-title">{feature.title}</h3>
              <p className="metz-feature-text">{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
