import React, { useState, useEffect } from 'react';
import { AnimatedBirds, BirdFlock } from '../../design-system/Birds';
import './Hero.css';

const SLIDES = [
  {
    id: 1,
    eyebrow: 'Premium Villa Plots',
    headline: 'Where Dreams\nTake Root',
    sub: 'and Peace Blossoms',
    description: 'DTCP & RERA approved villa plots nestled in the serene Mansanpally corridor — a sanctuary where nature and luxury coexist.',
    cta: { label: 'Explore the Project', href: '#about' },
    ctaSecondary: { label: 'Book a Site Visit', href: '#contact' },
    badge: 'RERA Approved',
    bgGradient: 'linear-gradient(160deg, #0D2610 0%, #1C3A1C 45%, #243D20 100%)',
  },
  {
    id: 2,
    eyebrow: 'Strategic Connectivity',
    headline: '10 Minutes\nfrom the City',
    sub: 'Infinity of Nature',
    description: 'Seamless access to Mansanpally, ORR, and the International Airport — yet immersed in tranquil natural surroundings.',
    cta: { label: 'View Connectivity', href: '#connectivity' },
    ctaSecondary: { label: 'See Gallery', href: '#gallery' },
    badge: '100 Premium Plots',
    bgGradient: 'linear-gradient(160deg, #1A2E0D 0%, #243D20 50%, #1C3A1C 100%)',
  },
  {
    id: 3,
    eyebrow: '20+ Premium Amenities',
    headline: 'Your Canvas of\nModern Elegance',
    sub: 'Thoughtfully Crafted',
    description: 'Parks, avenue plantations, underground utilities, club memberships and exclusive concierge services — all within your community.',
    cta: { label: 'View Amenities', href: '#amenities' },
    ctaSecondary: { label: 'Contact Us', href: '#contact' },
    badge: '100% Vaastu Compliant',
    bgGradient: 'linear-gradient(160deg, #132115 0%, #1E3818 50%, #27421E 100%)',
  },
];

export default function Hero() {
  const [current, setCurrent]       = useState(0);
  const [isAnimating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current]);

  const goTo = (idx) => {
    if (isAnimating || idx === current) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setAnimating(false);
    }, 500);
  };

  const handleCtaClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const slide = SLIDES[current];

  return (
    <section
      id="hero"
      className={`hero ${isAnimating ? 'hero--transitioning' : ''}`}
      style={{ background: slide.bgGradient }}
      aria-label="Hero section"
    >
      {/* Animated birds layer */}
      <AnimatedBirds color="rgba(201,168,76,0.4)" />

      {/* Forest texture overlay */}
      <div className="hero__texture" aria-hidden="true" />

      {/* Large decorative bird flock — bottom area */}
      <div className="hero__bird-flock" aria-hidden="true">
        <BirdFlock color="rgba(201,168,76,0.18)" />
      </div>

      {/* Content */}
      <div className="hero__content container">
        <div className={`hero__text ${isAnimating ? 'hero__text--exit' : 'hero__text--enter'}`}>
          {/* Eyebrow */}
          <p className="hero__eyebrow label-caps">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            {slide.eyebrow}
          </p>

          {/* Headline */}
          <h1 className="hero__headline">
            {slide.headline.split('\n').map((line, i) => (
              <span key={i} className="hero__headline-line" style={{ transitionDelay: `${i * 0.1}s` }}>
                {line}
              </span>
            ))}
            <em className="hero__headline-em">{slide.sub}</em>
          </h1>

          {/* Description */}
          <p className="hero__description">{slide.description}</p>

          {/* CTAs */}
          <div className="hero__actions">
            <a
              href={slide.cta.href}
              className="btn btn--primary hero__cta"
              onClick={(e) => handleCtaClick(e, slide.cta.href)}
            >
              {slide.cta.label}
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href={slide.ctaSecondary.href}
              className="btn btn--ghost hero__cta-secondary"
              onClick={(e) => handleCtaClick(e, slide.ctaSecondary.href)}
            >
              {slide.ctaSecondary.label}
            </a>
          </div>

          {/* Badge */}
          <div className="hero__badge">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 1L8.5 5H13L9.5 7.5L11 11.5L7 9L3 11.5L4.5 7.5L1 5H5.5L7 1Z" fill="#C9A84C"/>
            </svg>
            {slide.badge}
          </div>
        </div>

        {/* Right: Stats panel */}
        <div className="hero__stats-panel reveal reveal--right">
          {[
            { value: '10', unit: 'min', label: 'to Mansanpally' },
            { value: '100', unit: '', label: 'Premium Plots' },
            { value: '20+', unit: '', label: 'Amenities' },
            { value: 'RERA', unit: '', label: '& DTCP Approved' },
          ].map(({ value, unit, label }, i) => (
            <div key={label} className="hero__stat" style={{ animationDelay: `${i * 0.15}s` }}>
              <div className="hero__stat-value">
                {value}<span className="hero__stat-unit">{unit}</span>
              </div>
              <div className="hero__stat-label">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Slide controls */}
      <div className="hero__controls" role="group" aria-label="Slide navigation">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === current ? 'true' : undefined}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll to explore</span>
      </div>
    </section>
  );
}
