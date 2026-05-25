import React from 'react';
import { BirdDivider, BirdFlock, PerchedBird } from '../../design-system/Birds';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './About.css';

const PILLARS = [
  {
    icon: '🌿',
    title: 'Nature-Centric Living',
    description: 'Wood Breeze is enveloped by pristine natural forest greenery, offering a pollution-free environment while maintaining seamless urban connectivity.',
  },
  {
    icon: '🏛️',
    title: 'DTCP & RERA Approved',
    description: 'A secure investment with all regulatory approvals in place — 100% Vaastu compliant plots ensuring peace of mind for every buyer.',
  },
  {
    icon: '🏡',
    title: 'Dual Offering',
    description: 'Choose between premium customised villas for immediate lifestyle acquisition, or demarcated villa plots for long-term land banking.',
  },
];

export default function About() {
  const sectionRef = useScrollReveal();

  return (
    <section id="about" className="about section section--cream" ref={sectionRef}>
      <div className="container">
        {/* Top narrative — kameralnie style storytelling */}
        <div className="about__intro">
          <div className="about__intro-text reveal reveal--left">
            <p className="section__eyebrow">The Story</p>
            <span className="gold-line" />
            <h2 className="about__headline section__title">
              A Sanctuary Where<br />
              <em>Peace Blossoms</em>
            </h2>
            <p className="about__body">
              Nestled in the rapidly appreciating Mansanpally corridor, Wood Breeze is more than a real estate development — it is a vision. Operating under the philosophy <em>"Where Dreams Take Root and Peace Blossoms,"</em> it offers a sophisticated hybrid model where nature and contemporary luxury coexist in perfect harmony.
            </p>
            <p className="about__body">
              Every plot at Wood Breeze has been thoughtfully demarcated to ensure privacy, natural light, and Vaastu compliance. The surrounding landscape — with avenue plantations, open green spaces, and natural forest — becomes an extension of your home.
            </p>
            <BirdDivider color="#C9A84C" />
            <p className="about__quote">
              <span className="about__quote-mark">"</span>
              Live in harmony with nature, without sacrificing the conveniences of modern life.
              <span className="about__quote-mark">"</span>
            </p>
          </div>

          <div className="about__intro-visual reveal reveal--right reveal--delay-2">
            {/* Nature illustration panel */}
            <div className="about__visual-card">
              <div className="about__visual-bg" aria-hidden="true">
                <BirdFlock color="rgba(45,90,27,0.25)" />
              </div>
              <div className="about__visual-content">
                <PerchedBird size={56} color="#C9A84C" />
                <h3 className="about__visual-title">Wood Breeze</h3>
                <p className="about__visual-sub">Mansanpally Corridor, Hyderabad</p>
                <div className="about__visual-stats">
                  <div>
                    <strong>100</strong>
                    <span>Villa Plots</span>
                  </div>
                  <div>
                    <strong>RERA</strong>
                    <span>Approved</span>
                  </div>
                  <div>
                    <strong>20+</strong>
                    <span>Amenities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Three pillars */}
        <div className="about__pillars">
          {PILLARS.map(({ icon, title, description }, i) => (
            <div
              key={title}
              className={`about__pillar reveal reveal--delay-${i + 1}`}
            >
              <div className="about__pillar-icon" aria-hidden="true">{icon}</div>
              <h3 className="about__pillar-title">{title}</h3>
              <p className="about__pillar-desc">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
