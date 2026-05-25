import React, { useState } from 'react';
import { PerchedBird, BirdDivider, BirdSilhouette } from '../../design-system/Birds';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  IconSun, IconUsers, IconWind, IconMoon, IconHome, IconHeart,
} from '../../design-system/LineIcons';
import './GoldenYears.css';

const MOMENTS = [
  { Icon: IconSun,   label: 'Morning walks',           desc: 'Greet every sunrise on dew-kissed pathways lined with trees.' },
  { Icon: IconUsers, label: "Grandchildren's laughter", desc: 'Open spaces where their joy echoes through clean, fresh air.' },
  { Icon: IconWind,  label: 'Breathing free',           desc: "Away from city dust — only nature's scent and birdsong." },
  { Icon: IconMoon,  label: 'Quiet evenings',           desc: 'Sit on your own terrace watching birds come home to roost.' },
  { Icon: IconHome,  label: 'Your own home',            desc: 'A space built to your taste — no compromises, finally.' },
  { Icon: IconHeart, label: 'Health & wellbeing',       desc: 'Vaastu-aligned plots, green surroundings — body and soul at rest.' },
];

export default function GoldenYears() {
  const sectionRef = useScrollReveal();
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="golden-years"
      className="golden section"
      ref={sectionRef}
      aria-label="For elders — peaceful golden years at Wood Breeze"
    >
      <div className="golden__grid">

        {/* ── LEFT: Photograph panel ─────────────────────────── */}
        <div className="golden__photo-side reveal reveal--left">
          <div className="golden__photo-wrap">

            {/* Real photograph — elderly couple in peaceful nature */}
            {!imgError ? (
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=900&q=85&auto=format&fit=crop"
                alt="An elderly couple holding hands, walking peacefully through a lush green garden at golden hour"
                className="golden__photo"
                onError={() => setImgError(true)}
                loading="lazy"
              />
            ) : (
              /* Fallback illustrated scene if image fails to load */
              <div className="golden__photo golden__photo--fallback" aria-hidden="true">
                <div className="golden__fallback-sky" />
                <div className="golden__fallback-sun" />
                <div className="golden__fallback-ground" />
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="golden__fallback-tree" style={{ left: `${15 + i * 22}%` }} />
                ))}
                <div className="golden__fallback-figures">
                  <div className="golden__fallback-elder golden__fallback-elder--1" />
                  <div className="golden__fallback-elder golden__fallback-elder--2" />
                </div>
              </div>
            )}

            {/* Warm amber overlay for emotional warmth */}
            <div className="golden__photo-overlay" aria-hidden="true" />

            {/* Floating quote card pinned bottom-left */}
            <div className="golden__photo-quote" aria-label="Elder resident testimonial">
              <PerchedBird size={28} color="#C9A84C" />
              <blockquote className="golden__photo-quote-text">
                "The morning air here reminds me of my village.
                I found my peace again."
              </blockquote>
              <cite className="golden__photo-quote-author">
                — Ramamurthy Garu, 68 · Plot Owner
              </cite>
            </div>

            {/* Floating trust chip top-right */}
            <div className="golden__photo-chip" aria-hidden="true">
              <span className="golden__photo-chip-icon"><IconHome size={18} /></span>
              <div>
                <div className="golden__photo-chip-value">100%</div>
                <div className="golden__photo-chip-label">Vaastu Compliant</div>
              </div>
            </div>

            {/* Decorative birds on the photo */}
            <div className="golden__photo-birds" aria-hidden="true">
              {[...Array(3)].map((_, i) => (
                <BirdSilhouette
                  key={i}
                  size={16 + i * 4}
                  color="rgba(250,247,240,0.6)"
                  style={{ position: 'absolute', top: `${12 + i * 8}%`, left: `${10 + i * 25}%` }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT: Emotional content ───────────────────────── */}
        <div className="golden__content reveal reveal--right">

          <p className="section__eyebrow golden__eyebrow">For Those Who've Earned It</p>
          <span className="gold-line" />

          <h2 className="golden__headline">
            Your Golden Chapter<br />
            <em>Deserves a Perfect</em><br />
            Setting
          </h2>

          <p className="golden__lead">
            You gave everything — your years, your energy, your love — to your family and your work.
            Now it is your time. Wood Breeze was crafted for those who understand that
            <strong> true luxury is not noise, but quietude.</strong>
          </p>

          <BirdDivider color="#C9A84C" />

          <p className="golden__body">
            Wake to birdsong, not traffic. Walk on soft pathways through avenue plantations
            instead of crowded pavements. Watch your grandchildren run freely across open green
            spaces — the way childhood was always meant to be lived. And in the evenings,
            simply sit and breathe.
          </p>

          {/* Moments grid */}
          <div className="golden__moments" role="list">
            {MOMENTS.map(({ Icon, label, desc }, i) => (
              <div
                key={label}
                className={`golden__moment reveal reveal--delay-${(i % 3) + 1}`}
                role="listitem"
              >
                <span className="golden__moment-icon" aria-hidden="true"><Icon size={22} /></span>
                <div>
                  <div className="golden__moment-label">{label}</div>
                  <div className="golden__moment-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="golden__cta-wrap reveal reveal--delay-4">
            <a
              href="#contact"
              className="btn btn--primary golden__cta"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Plan Your Peaceful Life
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <p className="golden__cta-note">
              Free guided site visit — bring the family
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
