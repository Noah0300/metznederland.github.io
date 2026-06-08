import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { CookieConsentProvider } from './components/CookieConsent';
import App from './App';
import './index.css';

const rawBasename = process.env.PUBLIC_URL || '/';
const basename = rawBasename === '.' || rawBasename === '' ? '/' : rawBasename;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider>
      <CookieConsentProvider>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </CookieConsentProvider>
    </HelmetProvider>
  </React.StrictMode>
);
