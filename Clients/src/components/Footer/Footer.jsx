import React from 'react';
import { BrandMark, BirdSilhouette } from '../../design-system/Birds';
import './Footer.css';

const QUICK_LINKS = [
  { label: 'About the Project', href: '#about' },
  { label: 'Amenities',         href: '#amenities' },
  { label: 'Connectivity',      href: '#connectivity' },
  { label: 'Gallery',           href: '#gallery' },
  { label: 'Testimonials',      href: '#testimonials' },
  { label: 'Contact Us',        href: '#contact' },
];

const SOCIAL_LINKS = [
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/woodbreezeliving/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07z"/>
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/woodbreezeliving/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07-3.2 0-3.58-.01-4.85-.07-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12c0-3.2.01-3.58.07-4.85C2.38 3.86 3.9 2.31 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.7.07 7.05.01 8.33 0 8.74 0 12c0 3.26.01 3.67.07 4.95.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24c3.26 0 3.67-.01 4.95-.07 4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95 0-3.26-.01-3.67-.07-4.95C23.73 2.71 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32A6.16 6.16 0 0 0 12 5.84zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-11.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/100467133/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55V14.88c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.23 0z"/>
      </svg>
    ),
  },
];

const scrollTo = (href) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      {/* Decorative birds */}
      <div className="footer__birds" aria-hidden="true">
        {[...Array(4)].map((_, i) => (
          <BirdSilhouette
            key={i}
            size={20 - i * 3}
            color="rgba(201,168,76,0.15)"
            style={{ position: 'absolute', top: `${15 + i * 20}%`, left: `${8 + i * 22}%` }}
          />
        ))}
      </div>

      <div className="container">
        <div className="footer__main">
          {/* Brand column */}
          <div className="footer__brand">
            <div className="footer__logo">
              <BrandMark size={56} />
              <div>
                <div className="footer__brand-name">Wood Breeze</div>
                <div className="footer__brand-tagline">Where Dreams Take Root</div>
              </div>
            </div>
            <p className="footer__brand-desc">
              Premium villa plots and customised villas in the Mansanpally corridor, Hyderabad. A nature-centric gated community offering contemporary luxury and lasting peace.
            </p>
            <div className="footer__social" role="list" aria-label="Social media links">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-link"
                  aria-label={label}
                  role="listitem"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="footer__col">
            <h3 className="footer__col-heading">Quick Links</h3>
            <ul role="list">
              {QUICK_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="footer__link"
                    onClick={(e) => { e.preventDefault(); scrollTo(href); }}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer__col">
            <h3 className="footer__col-heading">Contact</h3>
            <ul role="list" className="footer__contact-list">
              <li>
                <span aria-hidden="true">📞</span>
                <a href="tel:+917661955553" className="footer__link">+91 76619 55553</a>
              </li>
              <li>
                <span aria-hidden="true">✉️</span>
                <a href="mailto:info@woodbreeze.in" className="footer__link">info@woodbreeze.in</a>
              </li>
              <li>
                <span aria-hidden="true">📍</span>
                <address style={{ fontStyle: 'normal' }} className="footer__address">
                  Blisscorp, The Executive Centre,<br />
                  Level 7, Unit 3B, Sattva Knowledge City,<br />
                  Raidurg, Hyderabad — 500 081, TS
                </address>
              </li>
            </ul>
          </div>

          {/* Approvals */}
          <div className="footer__col">
            <h3 className="footer__col-heading">Approvals</h3>
            <div className="footer__badges">
              {['DTCP Approved', 'RERA Registered', '100% Vaastu', 'Clear Titles', 'Gated Community'].map((b) => (
                <span key={b} className="footer__badge">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                    <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {b}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer__bottom">
          <p className="footer__legal">
            © {new Date().getFullYear()} Wood Breeze. All rights reserved.
            <span aria-hidden="true"> · </span>
            Images are for illustrative purposes only and may not accurately represent the subject matter.
          </p>
          <div className="footer__links-row">
            <a href="#hero" className="footer__bottom-link" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}>Privacy Policy</a>
            <a href="#hero" className="footer__bottom-link" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}>Terms of Use</a>
            <a href="#hero" className="footer__bottom-link" onClick={(e) => { e.preventDefault(); scrollTo('#hero'); }}>Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
