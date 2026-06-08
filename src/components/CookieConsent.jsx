import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

const STORAGE_KEY = 'metz-cookie-consent';
const CookieConsentContext = createContext(null);

function readStoredConsent() {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    if (value === 'accepted' || value === 'declined') return value;
  } catch (e) {
    /* localStorage may be unavailable */
  }
  return 'pending';
}

export function CookieConsentProvider({ children }) {
  const [consent, setConsent] = useState('pending');

  useEffect(() => {
    setConsent(readStoredConsent());
  }, []);

  const setAndStore = useCallback((value) => {
    setConsent(value);
    try {
      window.localStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      /* localStorage may be unavailable */
    }
  }, []);

  const accept = useCallback(() => setAndStore('accepted'), [setAndStore]);
  const decline = useCallback(() => setAndStore('declined'), [setAndStore]);

  return (
    <CookieConsentContext.Provider value={{ consent, accept, decline }}>
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent() {
  const ctx = useContext(CookieConsentContext);
  if (!ctx) {
    return { consent: 'pending', accept: () => {}, decline: () => {} };
  }
  return ctx;
}
