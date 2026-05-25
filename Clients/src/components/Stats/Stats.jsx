import React, { useEffect, useRef, useState } from 'react';
import { BirdSilhouette } from '../../design-system/Birds';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Stats.css';

const STATS = [
  { value: 100, suffix: '', label: 'Premium Villa Plots', description: 'Thoughtfully demarcated for privacy & sunlight' },
  { value: 100, suffix: '%', label: 'Vaastu Compliant', description: 'Every plot aligned with ancient wisdom' },
  { value: 20,  suffix: '+', label: 'Premium Amenities', description: 'Curated for a complete lifestyle experience' },
  { value: 10,  suffix: ' min', label: 'to Mansanpally', description: 'Connected yet tranquil — nature at your doorstep' },
];

function CountUp({ target, suffix, duration = 2000, shouldStart }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!shouldStart) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [shouldStart, target, duration]);

  return <>{count}{suffix}</>;
}

export default function Stats() {
  const sectionRef = useScrollReveal();
  const [started, setStarted] = useState(false);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observerRef.current?.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    const el = document.getElementById('stats-section');
    if (el) observerRef.current.observe(el);
    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section
      id="stats-section"
      className="stats section section--dark"
      ref={sectionRef}
      aria-label="Key project statistics"
    >
      {/* Decorative birds */}
      <div className="stats__birds" aria-hidden="true">
        {[...Array(5)].map((_, i) => (
          <BirdSilhouette
            key={i}
            size={16 + i * 4}
            color="rgba(201,168,76,0.2)"
            style={{ position: 'absolute', top: `${20 + i * 12}%`, left: `${5 + i * 18}%` }}
          />
        ))}
      </div>

      <div className="container">
        <div className="stats__header reveal">
          <p className="section__eyebrow">By the Numbers</p>
          <h2 className="stats__title">A Project Built on<br /><em>Substance & Trust</em></h2>
        </div>

        <div className="stats__grid">
          {STATS.map(({ value, suffix, label, description }, i) => (
            <div
              key={label}
              className={`stats__item reveal reveal--delay-${i + 1}`}
            >
              <div className="stats__divider" aria-hidden="true" />
              <div className="stats__value">
                <CountUp target={value} suffix={suffix} shouldStart={started} />
              </div>
              <div className="stats__label">{label}</div>
              <p className="stats__desc">{description}</p>
            </div>
          ))}
        </div>

        {/* RERA badge strip */}
        <div className="stats__badges reveal reveal--delay-5">
          {['DTCP Approved', 'RERA Registered', '100% Vaastu', 'Clear Title Deeds', 'Gated Community'].map((b) => (
            <span key={b} className="stats__badge">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 6L5 9L10 3" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
