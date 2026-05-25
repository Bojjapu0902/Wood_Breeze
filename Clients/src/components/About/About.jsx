import React, { useState, useEffect, useRef, useCallback } from 'react';
import { BirdFlock } from '../../design-system/Birds';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  IconTree, IconLeaf, IconSeedling,
  IconShield, IconGate, IconZap,
  IconAward, IconCompass, IconLayout,
} from '../../design-system/LineIcons';
import './About.css';

/* ── Carousel slides ───────────────────────────────────────────── */
const GALLERY = [
  {
    src: '/Asserts/images/WoodBreeze_Home.webp',
    pos: 'center 62%',
    tag: 'Exterior',
    label: 'Natural Surroundings',
    sub: 'Lush forest greenery envelops every home',
  },
  {
    src: 'https://woodbreeze.in/wp-content/uploads/2023/09/cd24b0db-a670-4f01-a59a-231cd3fda006-1.webp',
    pos: 'center 55%',
    tag: 'The Villa',
    label: 'Contemporary Architecture',
    sub: 'Modern design in harmony with nature',
  },
  {
    src: '/Asserts/images/WoodBreeze_Home.webp',
    pos: 'center 12%',
    tag: 'Detail',
    label: 'Crafted Rooflines',
    sub: 'Premium craftsmanship in every detail',
  },
  {
    src: '/Asserts/images/WoodBreeze_Home.png',
    pos: 'center 40%',
    tag: 'Entrance',
    label: 'Grand Entrance',
    sub: 'Mansanpally Corridor · Hyderabad',
  },
];

/* ── Visual Carousel ───────────────────────────────────────────── */
function VisualCarousel() {
  const [active, setActive]   = useState(0);
  const [prevIdx, setPrevIdx] = useState(null);
  const timerRef              = useRef(null);

  const startTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive(i => {
        setPrevIdx(i);
        return (i + 1) % GALLERY.length;
      });
    }, 5500);
  }, []);

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, [startTimer]);

  const goTo = useCallback((i) => {
    if (i === active) return;
    setPrevIdx(active);
    setActive(i);
    startTimer();
  }, [active, startTimer]);

  const goPrev = () => goTo((active - 1 + GALLERY.length) % GALLERY.length);
  const goNext = () => goTo((active + 1) % GALLERY.length);

  return (
    <div className="about__carousel" aria-label="Project gallery">

      {/* ── Slides (stacked, cross-fade via opacity) ── */}
      {GALLERY.map((slide, i) => (
        <div
          key={i}
          className={`about__carousel-slide ${
            i === active  ? 'about__carousel-slide--active'  : ''
          } ${
            i === prevIdx ? 'about__carousel-slide--leaving' : ''
          }`}
        >
          <img
            src={slide.src}
            alt={slide.label}
            className="about__carousel-img"
            style={{ objectPosition: slide.pos }}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* ── Multi-layer overlay ── */}
      <div className="about__carousel-overlay" />

      {/* ── Progress bar ── */}
      <div className="about__carousel-progress">
        <div key={active} className="about__carousel-progress-bar" />
      </div>

      {/* ── Caption — bottom left ── */}
      <div className="about__carousel-caption" key={active}>
        <span className="about__carousel-cap-tag">{GALLERY[active].tag}</span>
        <h3 className="about__carousel-cap-title">{GALLERY[active].label}</h3>
        <p className="about__carousel-cap-sub">{GALLERY[active].sub}</p>
      </div>

      {/* ── Slide counter — top right ── */}
      <div className="about__carousel-counter">
        <strong>{String(active + 1).padStart(2, '0')}</strong>
        <span> / {String(GALLERY.length).padStart(2, '0')}</span>
      </div>

      {/* ── Thumbnail strip — bottom right ── */}
      <div className="about__carousel-thumbs" role="group" aria-label="Gallery thumbnails">
        {GALLERY.map((slide, i) => (
          <button
            key={i}
            className={`about__carousel-thumb ${i === active ? 'about__carousel-thumb--active' : ''}`}
            onClick={() => goTo(i)}
            aria-label={`View ${slide.label}`}
            aria-current={i === active ? 'true' : undefined}
          >
            <img src={slide.src} alt="" style={{ objectPosition: slide.pos }} />
            <div className="about__carousel-thumb-shine" />
          </button>
        ))}
      </div>

      {/* ── Prev / Next arrows ── */}
      <button className="about__carousel-arrow about__carousel-arrow--prev" onClick={goPrev} aria-label="Previous image">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 4L7 10L13 16"/>
        </svg>
      </button>
      <button className="about__carousel-arrow about__carousel-arrow--next" onClick={goNext} aria-label="Next image">
        <svg width="18" height="18" viewBox="0 0 20 20" fill="none" strokeWidth="1.8" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 4L13 10L7 16"/>
        </svg>
      </button>

      {/* ── Location label ── */}
      <div className="about__carousel-loc">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
          <circle cx="12" cy="9" r="2.5"/>
        </svg>
        Mansanpally Corridor · Hyderabad
      </div>

    </div>
  );
}

/* ── Feature icon strip data ───────────────────────────────────── */
const FEATURE_ICONS = [
  { Icon: IconTree,    label: 'Open Green Spaces' },
  { Icon: IconGate,    label: 'Grand Entrance' },
  { Icon: IconShield,  label: 'Gated Security' },
  { Icon: IconZap,     label: 'Underground Utilities' },
  { Icon: IconAward,   label: 'RERA Approved' },
  { Icon: IconCompass, label: 'Vaastu Compliant' },
];

/* ── Three pillars ─────────────────────────────────────────────── */
const PILLARS = [
  {
    Icon: IconLeaf,
    title: 'Nature-Centric Living',
    description: 'Wood Breeze is enveloped by pristine natural forest greenery, offering a pollution-free environment while maintaining seamless urban connectivity.',
  },
  {
    Icon: IconAward,
    title: 'DTCP & RERA Approved',
    description: 'A secure investment with all regulatory approvals in place — 100% Vaastu compliant plots ensuring peace of mind for every buyer.',
  },
  {
    Icon: IconLayout,
    title: 'Dual Offering',
    description: 'Choose between premium customised villas for immediate lifestyle acquisition, or demarcated villa plots for long-term land banking.',
  },
];

/* ── About section ─────────────────────────────────────────────── */
export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="about" ref={sectionRef}>

      {/* ── Part 1: Centered narrative intro ──────────────────── */}
      <div className="about__narrative section--cream">
        <div className="container container--narrow">
          <div className="about__narrative-body reveal">
            <p className="about__narrative-para">
              Nestled in the rapidly appreciating Mansanpally corridor, Wood Breeze
              offers more than a real estate opportunity — it is a sanctuary where
              nature and luxury coexist in perfect harmony.
            </p>
            <p className="about__narrative-para">
              Surrounded by pristine forest greenery and connected to the city,
              each thoughtfully demarcated plot promises privacy, natural light,
              and 100% Vaastu compliance.
            </p>
            <p className="about__narrative-para">
              A home that breathes with nature. A legacy built for generations.
              <span className="about__brand-name">WOOD BREEZE</span>
            </p>
          </div>

          <h2 className="about__discover-heading reveal reveal--delay-2">
            Discover the Project
          </h2>
        </div>
      </div>

      {/* ── Full-width carousel ────────────────────────────────── */}
      <VisualCarousel />

      {/* ── Part 2: Features section ──────────────────────────── */}
      <div className="about__features section--cream">
        <div className="container">

          <p className="about__category-label label-caps reveal">The Community</p>
          <h2 className="about__features-heading reveal reveal--delay-1">
            Crafted With Nature,<br />
            Built for Generations
          </h2>

          {/* Feature video band */}
          <div className="about__feature-photo reveal reveal--delay-2">
            <video
              className="about__feature-photo-video"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            >
              <source src="/Asserts/videos/WoodBreeze.webm" type="video/webm" />
              <source src="/Asserts/videos/WoodBreeze.mp4"  type="video/mp4"  />
            </video>
            <div className="about__feature-photo-overlay" />
            <div className="about__feature-photo-birds" aria-hidden="true">
              <BirdFlock color="rgba(201,168,76,0.15)" />
            </div>
            <div className="about__feature-photo-badge">
              <IconSeedling size={20} />
              <span>100 Villa Plots · Mansanpally</span>
            </div>
          </div>

          {/* 6-icon strip */}
          <div className="about__icon-strip reveal reveal--delay-3">
            {FEATURE_ICONS.map(({ Icon, label }) => (
              <div key={label} className="about__icon-item">
                <div className="about__icon-box">
                  <Icon size={32} />
                </div>
                <span className="about__icon-label">{label}</span>
              </div>
            ))}
          </div>

          {/* Two-column body text */}
          <div className="about__body-cols reveal reveal--delay-4">
            <p className="about__body-text">
              Every plot at Wood Breeze has been thoughtfully demarcated to ensure
              privacy, natural light, and Vaastu compliance. The surrounding landscape
              — with avenue plantations, open green spaces, and natural forest —
              becomes an extension of your home.
            </p>
            <p className="about__body-text">
              Strategically located on the Mansanpally corridor with seamless access
              to the ORR and International Airport, Wood Breeze combines the tranquility
              of nature with the convenience of urban connectivity.
            </p>
          </div>

        </div>
      </div>

      {/* ── Part 3: Three pillars ─────────────────────────────── */}
      <div className="about__pillars-section section--alt">
        <div className="container">
          <div className="about__pillars">
            {PILLARS.map(({ Icon, title, description }, i) => (
              <div
                key={title}
                className={`about__pillar reveal reveal--delay-${i + 1}`}
              >
                <div className="about__pillar-icon">
                  <Icon size={36} />
                </div>
                <h3 className="about__pillar-title">{title}</h3>
                <p className="about__pillar-desc">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
