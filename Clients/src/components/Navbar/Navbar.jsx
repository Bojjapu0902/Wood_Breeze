import React, { useState, useEffect, useCallback } from 'react';
import { BrandMark } from '../../design-system/Birds';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'Home',        href: '#hero' },
  { label: 'About',       href: '#about' },
  { label: 'Amenities',   href: '#amenities' },
  { label: 'Connectivity',href: '#connectivity' },
  { label: 'Gallery',     href: '#gallery' },
  { label: 'Contact',     href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeLink, setActive]   = useState('');

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 60);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close menu on ESC
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    setActive(href);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">
        {/* Logo */}
        <a
          href="#hero"
          className="navbar__logo"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          aria-label="Wood Breeze Home"
        >
          <BrandMark size={48} />
          <div className="navbar__logo-text">
            <span className="navbar__logo-name">Wood Breeze</span>
            <span className="navbar__logo-tagline">Mansanpally, Hyderabad</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="navbar__nav" aria-label="Main navigation">
          <ul className="navbar__links" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`navbar__link ${activeLink === href ? 'navbar__link--active' : ''}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="navbar__cta btn btn--primary"
          onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
        >
          Book Site Visit
        </a>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger ${menuOpen ? 'navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`navbar__mobile-menu ${menuOpen ? 'navbar__mobile-menu--open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav aria-label="Mobile navigation">
          <ul className="navbar__mobile-links" role="list">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  className="navbar__mobile-link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                  tabIndex={menuOpen ? 0 : -1}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="btn btn--primary navbar__mobile-cta"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                tabIndex={menuOpen ? 0 : -1}
              >
                Book Site Visit
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
