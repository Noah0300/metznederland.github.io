import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Left Section - Company Info */}
            <div className="footer-section footer-about">
              <div className="company-logo-text">
                <Link to="/">
                  <img src={`${process.env.PUBLIC_URL}/images/220715-METZ-Nederland-pay-off-combo-DEF-light.png`} alt="Metz Nederland Logo" className="footer-logo" />
                </Link>
              </div>
            </div>

            {/* Locatie Section */}
            <div className="footer-section footer-juridisch">
              <h4>Locatie</h4>
              <p>
                <strong>Metz Nederland B.V.</strong><br />
                Cornelis Houtmanstraat 9<br />
                3124 LB Schiedam
              </p>
              <p>
                <a href="https://www.google.com/maps/search/?api=1&query=Cornelis+Houtmanstraat+9,+3124+LB+Schiedam" target="_blank" rel="noopener noreferrer">Bekijk op Google Maps</a>
              </p>
            </div>

            {/* Contact Section */}
            <div className="footer-section footer-contact">
              <h4>Contact</h4>
              <p>
                <strong>T:</strong> <a href="tel:+31104718110">010 471 81 10</a>
              </p>
              <p>
                <strong>M:</strong> <a href="mailto:info@metz-nederland.nl">info@metz-nederland.nl</a>
              </p>
              <p>
                <strong>K:</strong> 24294561
              </p>
            </div>

            {/* Right Section - Partnership */}
            <div className="footer-section footer-partnership">
              <p className="partnership-text">
                Metz Nederland B.V. is een zusteronderneming van
              </p>
              <a href="https://secuurbv.nl/" target="_blank" rel="noopener noreferrer">
                <img src={`${process.env.PUBLIC_URL}/images/200203-Secuur-BV-logo-light-DEF-300x85-1.png`} alt="Secuur BV" className="metz-logo" />
              </a>
            </div>

            {/* Social Media Section */}
            <div className="footer-section footer-social">
              <h4>Volg Ons</h4>
              <div className="social-icons">
                <a href="https://nl.linkedin.com/company/metz-nederland-b.v." target="_blank" rel="noopener noreferrer" title="LinkedIn">
                  <img src={`${process.env.PUBLIC_URL}/images/metz-linkedin.png`} alt="LinkedIn" className="social-icon" />
                </a>
                <a href="https://www.facebook.com/MetzNederlandBv/" target="_blank" rel="noopener noreferrer" title="Facebook">
                  <img src={`${process.env.PUBLIC_URL}/images/metz-facebook.png`} alt="Facebook" className="social-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            © 2026 Metz Nederland B.V. | Alle rechten voorbehouden | <Link to="/privacy-policy">Privacy Policy</Link> | Website by <a href="https://deusdigitus.nl/" target="_blank" rel="noopener noreferrer">DeusDigitus</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
