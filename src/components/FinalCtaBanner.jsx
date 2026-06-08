import React from 'react';
import { Link } from 'react-router-dom';
import './FinalCtaBanner.css';

export default function FinalCtaBanner() {
  return (
    <section
      className="final-cta-banner"
      style={{
        backgroundImage: `url('${process.env.PUBLIC_URL}/images/220330-Metz-header7-1-e1656683080782.jpg')`
      }}
    >
      <div className="final-cta-banner-overlay"></div>
      <div className="container final-cta-banner-content">
        <Link to="/contact" className="final-cta-banner-button">
          Neem contact op
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
