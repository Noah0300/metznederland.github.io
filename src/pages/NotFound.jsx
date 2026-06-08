import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import './NotFound.css';

export default function NotFound() {
  return (
    <section className="section not-found-section">
      <Seo
        title="Pagina niet gevonden"
        description="De opgevraagde pagina bestaat niet of is verplaatst."
        noIndex={true}
      />

      <div className="container not-found-content">
        <p className="not-found-code">404</p>
        <h1>Pagina niet gevonden</h1>
        <p className="not-found-text">
          De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <div className="not-found-actions">
          <Link to="/" className="btn btn-primary">
            Naar home
          </Link>
          <Link to="/contact" className="btn btn-secondary">
            Contact opnemen
          </Link>
        </div>
      </div>
    </section>
  );
}