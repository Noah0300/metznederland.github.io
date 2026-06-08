import React, { useState } from 'react';
import './ContactForm.css';

const FORM_ENDPOINT =
  process.env.REACT_APP_CONTACT_FORM_ENDPOINT ||
  'https://formsubmit.co/ajax/info@metz-nederland.nl';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    _honey: ''
  });

  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData._honey) {
      // honeypot triggered — pretend it worked, but don't send
      setStatus({ type: 'success', message: 'Bedankt! We nemen zo snel mogelijk contact op.' });
      return;
    }

    if (!formData.name.trim()) {
      setStatus({ type: 'error', message: 'Vul uw naam in alstublieft.' });
      return;
    }
    if (!validateEmail(formData.email)) {
      setStatus({ type: 'error', message: 'Voer een geldig e-mailadres in.' });
      return;
    }
    if (!formData.message.trim()) {
      setStatus({ type: 'error', message: 'Vul uw bericht in alstublieft.' });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        subject: formData.subject || 'Nieuw bericht via metz-nederland.nl',
        message: formData.message,
        _subject: formData.subject
          ? `Contactformulier: ${formData.subject}`
          : 'Nieuw bericht via metz-nederland.nl',
        _template: 'table',
        _captcha: 'false'
      };

      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Server returned ${response.status}`);
      }

      const data = await response.json().catch(() => ({}));
      if (data && data.success === 'false') {
        throw new Error(data.message || 'Verzenden mislukt');
      }

      setStatus({
        type: 'success',
        message: 'Bedankt! We nemen zo snel mogelijk contact op.'
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        _honey: ''
      });
      setTimeout(() => setStatus(null), 6000);
    } catch (error) {
      setStatus({
        type: 'error',
        message:
          'Er ging iets mis bij het verzenden. Probeer het later opnieuw of mail rechtstreeks naar info@metz-nederland.nl.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <h3>Contactformulier</h3>

      {status && (
        <div className={`form-message form-${status.type}`}>{status.message}</div>
      )}

      {/* Honeypot — hidden from real users, bots fill it */}
      <input
        type="text"
        name="_honey"
        value={formData._honey}
        onChange={handleChange}
        tabIndex="-1"
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
      />

      <div className="form-group">
        <label htmlFor="name">Naam *</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          autoComplete="name"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">E-mailadres *</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          autoComplete="email"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Telefoonnummer</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          autoComplete="tel"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="company">Bedrijf</label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          autoComplete="organization"
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="subject">Onderwerp</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Bericht *</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className="form-control"
        ></textarea>
      </div>

      <button type="submit" disabled={isSubmitting} className="btn btn-primary">
        {isSubmitting ? 'Verzenden...' : 'Verzenden'}
      </button>
    </form>
  );
}
