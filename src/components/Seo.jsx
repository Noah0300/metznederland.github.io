import React, { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const SITE_NAME = 'Metz Nederland';
const SITE_URL = (process.env.REACT_APP_SITE_URL || 'https://www.metz-nederland.nl').replace(/\/$/, '');
const DEFAULT_IMAGE = `${SITE_URL}/images/220602-Metz-Nederland-beeldlogo-color-DEF.png`;
const DEFAULT_KEYWORDS = 'Metz Nederland, aannemer Schiedam, bouwbedrijf, renovatie, onderhoud, verduurzaming';

function normalizePath(pathname) {
  if (!pathname || pathname === '/') return '/';
  return pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
}

function toArray(value) {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function buildBreadcrumbSchema(items) {
  if (!items || items.length === 0) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`
    }))
  };
}

function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Metz Nederland B.V.',
    url: SITE_URL,
    logo: `${SITE_URL}/images/220602-Metz-Nederland-beeldlogo-color-DEF.png`,
    email: 'info@metz-nederland.nl',
    telephone: '+31-10-4718110',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Cornelis Houtmanstraat 9',
      postalCode: '3124 LB',
      addressLocality: 'Schiedam',
      addressCountry: 'NL'
    },
    sameAs: ['https://nl.linkedin.com/company/metz-nederland-b.v.']
  };
}

function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'nl-NL'
  };
}

export default function Seo({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  type = 'website',
  noIndex = false,
  structuredData,
  breadcrumbItems
}) {
  const location = useLocation();

  const pageTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonical = `${SITE_URL}${normalizePath(location.pathname)}`;
  const robots = noIndex ? 'noindex, nofollow' : 'index, follow';
  const metaKeywords = keywords || DEFAULT_KEYWORDS;

  const jsonLd = useMemo(() => {
    const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbItems);
    const pageSchemas = toArray(structuredData);
    const schemas = [
      ...(noIndex ? [] : [buildOrganizationSchema(), buildWebsiteSchema()]),
      ...pageSchemas,
      ...(breadcrumbSchema ? [breadcrumbSchema] : [])
    ];
    if (schemas.length === 0) return null;
    return JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
  }, [structuredData, breadcrumbItems, noIndex]);

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <link rel="canonical" href={canonical} />
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="robots" content={robots} />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{jsonLd}</script>
      )}
    </Helmet>
  );
}
