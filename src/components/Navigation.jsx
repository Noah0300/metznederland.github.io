import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef(null);

  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/over-ons', label: 'Over ons' },
    { path: '/werkwijze', label: 'Onze werkwijze' },
    { path: '/daarom-metz', label: 'Daarom Metz' },
    { path: '/projecten', label: 'Projecten' },
    { path: '/werken-bij', label: 'Werken bij' }
  ];

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return undefined;
    const handleKey = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    const handleClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setIsOpen(false);
    };
    document.addEventListener('keydown', handleKey);
    document.addEventListener('mousedown', handleClick);
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.removeEventListener('mousedown', handleClick);
    };
  }, [isOpen]);

  return (
    <nav className="navbar navbar-default" ref={navRef}>
      <div className="container navbar-container">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/" onClick={closeMenu}>
            <img
              src={`${process.env.PUBLIC_URL}/images/220602-Metz-Nederland-hoofdlogo-def-1.png`}
              alt="Metz Nederland Logo"
              className="logo-image"
            />
          </Link>
        </div>

        <button
          className="navbar-toggle"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Sluit menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="primary-navigation"
        >
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>

        <div id="primary-navigation" className={`navbar-collapse ${isOpen ? 'in' : ''}`}>
          <ul className="nav navbar-nav">
            {menuItems.map((item, idx) => (
              <li
                key={idx}
                className={`menu-item ${item.path && isActive(item.path) ? 'active' : ''}`}
              >
                <Link to={item.path} onClick={closeMenu}>{item.label}</Link>
              </li>
            ))}
          </ul>

          <div className="header-contact-button">
            <Link to="/contact" className="btn btn-primary" onClick={closeMenu}>
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
