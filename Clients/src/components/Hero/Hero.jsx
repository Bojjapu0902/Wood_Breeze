import React, { useState, useEffect, useCallback, useRef } from 'react';
import { AnimatedBirds } from '../../design-system/Birds';
import './Hero.css';

const VILLA_IMG = '/Asserts/images/WoodBreeze_Home.png';

const SLIDES = [
  {
    id: 1,
    eyebrow: 'Mansanpally Corridor · Hyderabad',
    lines: ['Where Dreams', 'Take Root'],
    accent: 'and Peace Blossoms',
    body: 'DTCP & RERA approved villa plots in a serene gated community — a sanctuary where pristine natural greenery and contemporary luxury coexist in perfect harmony.',
    cta:   { label: 'Book a Site Visit',   href: '#contact' },
    ghost: { label: 'Explore the Project', href: '#about'   },
  },
  {
    id: 2,
    eyebrow: 'Strategic Connectivity',
    lines: ["Nature's Address,", "City's Reach"],
    accent: '10 minutes from Mansanpally',
    body: 'Connected to the ORR in 25 min, International Airport in 30 min and Financial District in 50 min — yet immersed in clean forest air and natural greenery.',
    cta:   { label: 'View Connectivity',  href: '#connectivity' },
    ghost: { label: 'Explore Amenities', href: '#amenities'    },
  },
  {
    id: 3,
    eyebrow: '20+ Premium Amenities',
    lines: ['Crafted for', 'Elegant Living'],
    accent: 'Thoughtfully Curated',
    body: 'Parks, avenue plantations, underground utilities, club membership and bespoke concierge services — every detail designed for an elevated, pollution-free life.',
    cta:   { label: 'View Amenities', href: '#amenities' },
    ghost: { label: 'Contact Us',     href: '#contact'   },
  },
];

const TRUST = [
  'RERA Approved',
  'DTCP Approved',
  '100% Vaastu',
  'Gated Community',
  'Pollution Free',
];

export default function Hero() {
  const [current, setCurrent]   = useState(0);
  const [isExiting, setExiting] = useState(false);
  const currentRef              = useRef(0);
  const animRef                 = useRef(false);

  const goTo = useCallback((idx) => {
    if (animRef.current || idx === currentRef.current) return;
    animRef.current = true;
    setExiting(true);
    setTimeout(() => {
      setCurrent(idx);
      currentRef.current = idx;
      setExiting(false);
      animRef.current = false;
    }, 420);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      goTo((currentRef.current + 1) % SLIDES.length);
    }, 7000);
    return () => clearInterval(id);
  }, [goTo]);

  const scrollTo = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const slide = SLIDES[current];

  return (
    <section id="hero" className="hero" aria-label="Hero — Wood Breeze premium villa plots">

      {/* ── Full-screen background image ──────────────────────── */}
      <img
        src={VILLA_IMG}
        alt=""
        className="hero__bg-img"
        loading="eager"
        fetchpriority="high"
      />

      {/* Multi-layer gradient overlay for text readability */}
      <div className="hero__overlay" aria-hidden="true" />

      {/* Subtle animated birds floating over image */}
      <AnimatedBirds color="rgba(201,168,76,0.18)" />

      {/* ── Content — left editorial panel ───────────────────── */}
      <div className="hero__content">

        <div
          className={`hero__text ${isExiting ? 'hero__text--exit' : 'hero__text--enter'}`}
          aria-live="polite"
          aria-atomic="true"
        >
          <p className="hero__eyebrow label-caps">
            <span className="hero__eyebrow-dot" aria-hidden="true" />
            {slide.eyebrow}
          </p>

          <h1 className="hero__headline">
            {slide.lines.map((line, i) => (
              <span key={i} className="hero__headline-line">{line}</span>
            ))}
            <em className="hero__headline-em">{slide.accent}</em>
          </h1>

          <p className="hero__body">{slide.body}</p>

          <div className="hero__actions">
            <a
              href={slide.cta.href}
              className="btn btn--primary hero__btn-primary"
              onClick={(e) => scrollTo(e, slide.cta.href)}
            >
              {slide.cta.label}
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href={slide.ghost.href}
              className="btn btn--ghost hero__btn-ghost"
              onClick={(e) => scrollTo(e, slide.ghost.href)}
            >
              {slide.ghost.label}
            </a>
          </div>
        </div>

        {/* Trust badges + slide dots */}
        <div className="hero__footer">
          <div className="hero__trust" role="list" aria-label="Project certifications">
            {TRUST.map((label) => (
              <span key={label} className="hero__trust-item" role="listitem">
                <svg width="9" height="9" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                  <path d="M1.5 5L4 7.5L8.5 2.5" stroke="#C9A84C" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                {label}
              </span>
            ))}
          </div>

          <div className="hero__dots" role="group" aria-label="Slide navigation">
            {SLIDES.map((s, i) => (
              <button
                key={s.id}
                className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
                aria-current={i === current ? 'true' : undefined}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ── Floating project card — bottom right ──────────────── */}
      <div className="hero__float-card">
        <div className="hero__float-card-heading">Your Sanctuary</div>
        <div className="hero__float-card-sub">
          Where the essence of life is truly lived
        </div>
        <div className="hero__float-card-stats">
          {[
            { value: '100',    label: 'Villa Plots' },
            { value: '20+',    label: 'Amenities'   },
            { value: '10 min', label: 'Mansanpally' },
          ].map(({ value, label }, i) => (
            <React.Fragment key={label}>
              {i > 0 && <div className="hero__float-card-rule" />}
              <div className="hero__float-stat">
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── Scroll cue — centered bottom ─────────────────────── */}
      <div className="hero__scroll-cue" aria-hidden="true">
        <div className="hero__scroll-line" />
        <span>Scroll</span>
      </div>

    </section>
  );
}
