import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { siteData } from '../data/siteData';
import FinalCtaBanner from '../components/FinalCtaBanner';
import Seo from '../components/Seo';
import './Projecten.css';

const getProjectSlug = (project) => {
  if (project.slug) {
    return project.slug;
  }

  if (project.link && project.link.startsWith('/projecten/')) {
    return project.link.replace('/projecten/', '');
  }

  return String(project.id);
};

export default function ProjectDetail() {
  const { projectSlug } = useParams();
  const project = siteData.projects.find(
    (item) => getProjectSlug(item) === projectSlug
  );

  if (!project) {
    return (
      <section className="section project-detail-section">
        <Seo
          title="Project niet gevonden"
          description="Het opgevraagde project bestaat niet of is verplaatst. Bekijk alle projecten van Metz Nederland."
          noIndex={true}
        />
        <div className="container project-detail-container">
          <h1>Project niet gevonden</h1>
          <p>Dit project bestaat niet of is verplaatst.</p>
          <Link to="/projecten" className="btn btn-primary">
            Terug naar projecten
          </Link>
        </div>
      </section>
    );
  }

  // Galerij: gebruik project.gallery indien aanwezig, anders de losse hoofdfoto.
  const gallery =
    Array.isArray(project.gallery) && project.gallery.length > 0
      ? project.gallery
      : project.image
        ? [project.image]
        : [];
  const heroBg = gallery[0] || project.image;
  const paragraphs = (project.content || '')
    .split('\n\n')
    .map((p) => p.trim())
    .filter(Boolean);

  return (
    <div className="projecten-page">
      <Seo
        title={`${project.title} | Project Metz Nederland`}
        description={project.excerpt || 'Project van Metz Nederland op het gebied van bouw, renovatie en onderhoud.'}
        keywords={`projectdetail Metz, ${project.title.toLowerCase()}, referentie aannemer, renovatie`}
        type="article"
        breadcrumbItems={[
          { name: 'Home', path: '/' },
          { name: 'Projecten', path: '/projecten' },
          { name: project.title, path: `/projecten/${projectSlug}` }
        ]}
        structuredData={{
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: project.title,
          serviceType: 'Bouw- en renovatieproject',
          provider: {
            '@type': 'Organization',
            name: 'Metz Nederland B.V.'
          },
          areaServed: 'Nederland',
          url: `https://www.metz-nederland.nl/projecten/${projectSlug}`,
          description: project.excerpt || 'Project van Metz Nederland op het gebied van bouw, renovatie en onderhoud.'
        }}
      />

      {/* Hero */}
      <section
        className="pj-hero pd-hero"
        style={heroBg ? { backgroundImage: `url(${heroBg})` } : undefined}
      >
        <div className="pj-hero-overlay" aria-hidden="true" />
        <div className="container pj-hero-inner">
          <span className="pj-eyebrow">Project</span>
          <h1 className="pj-title">{project.title}</h1>
          {project.excerpt && <p className="pj-lead">{project.excerpt}</p>}
        </div>
      </section>

      {/* Inhoud */}
      <section className="pd-section">
        <div className="container pd-container">
          <div className="pd-body">
            {paragraphs.length > 0 ? (
              paragraphs.map((paragraph, index) => (
                <p key={index} className="pd-paragraph">{paragraph}</p>
              ))
            ) : (
              <p className="pd-paragraph">{project.content}</p>
            )}
          </div>

          {gallery.length > 0 && (
            <div
              className={`pd-gallery${gallery.length === 1 ? ' pd-gallery-single' : ''}`}
            >
              {gallery.map((src, index) => (
                <figure key={src} className="pd-gallery-item">
                  <img
                    src={src}
                    alt={`${project.title} — foto ${index + 1}`}
                    loading="lazy"
                  />
                </figure>
              ))}
            </div>
          )}

          <div className="pd-back">
            <Link to="/projecten" className="pj-empty-btn">
              Terug naar projecten
              <span className="pj-empty-btn-arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      <FinalCtaBanner />
    </div>
  );
}
