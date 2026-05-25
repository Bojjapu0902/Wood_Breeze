import React, { useState } from 'react';
import { BirdSilhouette } from '../../design-system/Birds';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Gallery.css';

// Gallery items — nature + luxury photography grid (placeholder gradients with labels)
const GALLERY_ITEMS = [
  { id: 1, label: 'Entrance Arch',       size: 'large',  gradient: 'linear-gradient(135deg, #1C3A1C 0%, #2D5A1B 100%)', tag: 'Architecture' },
  { id: 2, label: 'Avenue Plantation',   size: 'small',  gradient: 'linear-gradient(135deg, #243D20 0%, #4A7C2F 100%)', tag: 'Nature' },
  { id: 3, label: 'Open Green Spaces',   size: 'small',  gradient: 'linear-gradient(135deg, #27421E 0%, #556B2F 100%)', tag: 'Landscape' },
  { id: 4, label: 'Plot Layout',         size: 'medium', gradient: 'linear-gradient(135deg, #2C1810 0%, #4A3728 100%)', tag: 'Master Plan' },
  { id: 5, label: 'Natural Forest View', size: 'medium', gradient: 'linear-gradient(135deg, #1A2E0D 0%, #3A6B1F 100%)', tag: 'Nature' },
  { id: 6, label: 'Club Facilities',     size: 'small',  gradient: 'linear-gradient(135deg, #1E3818 0%, #7A9E5C 100%)', tag: 'Amenities' },
  { id: 7, label: 'Sunrise Views',       size: 'small',  gradient: 'linear-gradient(135deg, #8B4513 0%, #C9A84C 100%)', tag: 'Scenery' },
  { id: 8, label: 'Community Parks',     size: 'large',  gradient: 'linear-gradient(135deg, #0D2610 0%, #2D5A1B 70%, #4A7C2F 100%)', tag: 'Lifestyle' },
];

export default function Gallery() {
  const [activeFilter, setFilter] = useState('All');
  const [lightbox, setLightbox]   = useState(null);
  const sectionRef = useScrollReveal();

  const filters = ['All', ...new Set(GALLERY_ITEMS.map((i) => i.tag))];

  const filtered = activeFilter === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter((i) => i.tag === activeFilter);

  return (
    <section id="gallery" className="gallery section section--cream" ref={sectionRef}>
      <div className="container container--wide">
        {/* Header */}
        <div className="gallery__header reveal">
          <p className="section__eyebrow">Visual Journey</p>
          <span className="gold-line" />
          <h2 className="gallery__title">
            A Glimpse of<br /><em>Wood Breeze</em>
          </h2>
          <p className="gallery__subtitle">
            Experience the natural luxury and thoughtful design that awaits you in this unique community.
          </p>
        </div>

        {/* Filter pills */}
        <div className="gallery__filters reveal reveal--delay-1" role="group" aria-label="Gallery filters">
          {filters.map((f) => (
            <button
              key={f}
              className={`gallery__filter ${activeFilter === f ? 'gallery__filter--active' : ''}`}
              onClick={() => setFilter(f)}
              aria-pressed={activeFilter === f}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Masonry/bento grid */}
        <div className="gallery__grid" role="list">
          {filtered.map(({ id, label, size, gradient, tag }, i) => (
            <div
              key={id}
              className={`gallery__item gallery__item--${size} reveal`}
              style={{ transitionDelay: `${i * 0.08}s` }}
              role="listitem"
            >
              <button
                className="gallery__thumb"
                style={{ background: gradient }}
                onClick={() => setLightbox({ id, label, gradient, tag })}
                aria-label={`View ${label}`}
              >
                {/* Decorative bird overlay */}
                <BirdSilhouette
                  size={24}
                  color="rgba(250,247,240,0.2)"
                  style={{ position: 'absolute', top: '1rem', right: '1rem' }}
                />
                {/* Placeholder art */}
                <div className="gallery__thumb-art" aria-hidden="true">
                  <div className="gallery__thumb-horizon" />
                  {[...Array(3)].map((_, ti) => (
                    <div key={ti} className="gallery__thumb-tree" style={{ left: `${20 + ti * 28}%`, height: `${40 + ti * 10}%` }} />
                  ))}
                </div>
                <div className="gallery__thumb-overlay">
                  <span className="gallery__thumb-tag">{tag}</span>
                  <h3 className="gallery__thumb-label">{label}</h3>
                  <span className="gallery__thumb-icon" aria-hidden="true">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M4 16L16 4M16 4H8M16 4V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="gallery__lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Viewing ${lightbox.label}`}
          onClick={() => setLightbox(null)}
        >
          <button
            className="gallery__lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Close"
          >×</button>
          <div
            className="gallery__lightbox-content"
            style={{ background: lightbox.gradient }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gallery__lightbox-art" aria-hidden="true">
              <div className="gallery__thumb-horizon" />
              {[...Array(5)].map((_, i) => (
                <div key={i} className="gallery__thumb-tree" style={{ left: `${10 + i * 18}%`, height: `${35 + i * 8}%` }} />
              ))}
            </div>
            <div className="gallery__lightbox-info">
              <span className="gallery__thumb-tag">{lightbox.tag}</span>
              <h3>{lightbox.label}</h3>
              <p>Wood Breeze, Mansanpally Corridor, Hyderabad</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
