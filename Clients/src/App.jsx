import React, { useEffect } from 'react';
import './styles/globals.css';

import Navbar        from './components/Navbar/Navbar';
import Hero          from './components/Hero/Hero';
import About         from './components/About/About';
import Stats         from './components/Stats/Stats';
import Amenities     from './components/Amenities/Amenities';
import Connectivity  from './components/Connectivity/Connectivity';
import Gallery       from './components/Gallery/Gallery';
import Testimonials  from './components/Testimonials/Testimonials';
import GoldenYears   from './components/GoldenYears/GoldenYears';
import Contact       from './components/Contact/Contact';
import Footer        from './components/Footer/Footer';

/* ── Back-to-top button ─────────────────────────────────────── */
function BackToTop() {
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <button
      className={`back-to-top ${visible ? 'back-to-top--visible' : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path d="M10 16V4M10 4L5 9M10 4L15 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <style>{`
        .back-to-top {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          z-index: 50;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: var(--color-forest-deep);
          border: 1.5px solid rgba(201,168,76,0.3);
          color: var(--color-gold-light);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          opacity: 0;
          transform: translateY(16px);
          transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s ease;
          pointer-events: none;
          box-shadow: 0 4px 16px rgba(0,0,0,0.3);
        }
        .back-to-top--visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .back-to-top:hover {
          background: var(--color-forest);
          border-color: var(--color-gold);
        }
      `}</style>
    </button>
  );
}

/* ── App ─────────────────────────────────────────────────────── */
export default function App() {
  return (
    <>
      <a href="#hero" className="sr-only" style={{ position:'absolute', top:0, left:0 }}>
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Stats />
        <Amenities />
        <Connectivity />
        <Gallery />
        <Testimonials />
        <GoldenYears />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </>
  );
}
