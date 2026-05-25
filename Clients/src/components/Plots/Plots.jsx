import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Plots.css';

/* ── SVG Plot Layout ──────────────────────────────────────────── */
function PlotLayout({ width, depth, facing }) {
  const arrowAngle = {
    'East': 90, 'West': 270, 'North': 0, 'South': 180,
    'North-East': 45, 'South-East': 135,
    'North-West': 315, 'South-West': 225,
  }[facing] ?? 0;

  return (
    <svg viewBox="0 0 220 190" fill="none" className="plots__svg" aria-hidden="true">
      {/* Plot boundary */}
      <rect x="36" y="20" width="140" height="118" rx="1"
        stroke="#8B6F47" strokeWidth="1.4" strokeDasharray="5 3"
        fill="#FAF7F0"
      />
      {/* Inner setback */}
      <rect x="46" y="30" width="120" height="98" rx="1"
        stroke="#C9A84C" strokeWidth="0.75"
        fill="rgba(201,168,76,0.04)"
      />

      {/* Width dimension — top */}
      <line x1="36" y1="13" x2="176" y2="13" stroke="#8B6F47" strokeWidth="0.7"/>
      <line x1="36" y1="10" x2="36" y2="16" stroke="#8B6F47" strokeWidth="0.7"/>
      <line x1="176" y1="10" x2="176" y2="16" stroke="#8B6F47" strokeWidth="0.7"/>
      <text x="106" y="10" textAnchor="middle" fontSize="8.5" fill="#6B5240" fontFamily="monospace">{width} ft</text>

      {/* Depth dimension — right */}
      <line x1="184" y1="20" x2="184" y2="138" stroke="#8B6F47" strokeWidth="0.7"/>
      <line x1="180" y1="20" x2="188" y2="20" stroke="#8B6F47" strokeWidth="0.7"/>
      <line x1="180" y1="138" x2="188" y2="138" stroke="#8B6F47" strokeWidth="0.7"/>
      <text x="196" y="83" textAnchor="middle" fontSize="8.5" fill="#6B5240" fontFamily="monospace"
        transform="rotate(90, 196, 83)">{depth} ft</text>

      {/* Road band — bottom */}
      <rect x="36" y="142" width="140" height="8" rx="1" fill="rgba(100,80,60,0.1)"/>
      <text x="106" y="149" textAnchor="middle" fontSize="6.5" fill="#8B6F47" fontFamily="monospace" letterSpacing="2">ROAD</text>

      {/* Facing direction arrow */}
      <g transform={`translate(106, 79) rotate(${arrowAngle})`}>
        <line x1="0" y1="20" x2="0" y2="-20" stroke="#C9A84C" strokeWidth="1.2"/>
        <polygon points="0,-25 -4,-17 4,-17" fill="#C9A84C"/>
      </g>

      {/* Compass marker */}
      <g transform="translate(54, 38)">
        <circle r="7" stroke="#C9A84C" strokeWidth="0.75" fill="rgba(201,168,76,0.06)"/>
        <text x="0" y="-10" textAnchor="middle" fontSize="7" fill="#8B6F47">N</text>
        <line x1="0" y1="-4" x2="0" y2="-12" stroke="#C9A84C" strokeWidth="0.8"/>
      </g>

      {/* Facing label */}
      <text x="106" y="168" textAnchor="middle" fontSize="8" fill="#C9A84C" fontFamily="monospace" letterSpacing="1.5">
        {facing.toUpperCase()} FACING
      </text>
    </svg>
  );
}

/* ── Plot data ─────────────────────────────────────────────────── */
const PLOTS = [
  {
    id: 1, number: 'NR 01', status: 'available',
    type: 'Villa Plot', area: '267', width: '30', depth: '40',
    facing: 'East', phase: 'Phase I', price: '₹ 42,72,000',
    rate: '₹ 16,000 / sq.yd', vaastu: 'Compliant',
  },
  {
    id: 2, number: 'NR 02', status: 'available',
    type: 'Corner Plot', area: '300', width: '30', depth: '45',
    facing: 'North-East', phase: 'Phase I', price: '₹ 51,00,000',
    rate: '₹ 17,000 / sq.yd', vaastu: 'Compliant',
  },
  {
    id: 3, number: 'NR 03', status: 'reserved',
    type: 'Villa Plot', area: '233', width: '27', depth: '39',
    facing: 'North', phase: 'Phase I', price: '₹ 37,28,000',
    rate: '₹ 16,000 / sq.yd', vaastu: 'Compliant',
  },
  {
    id: 4, number: 'NR 04', status: 'available',
    type: 'Premium Plot', area: '320', width: '32', depth: '45',
    facing: 'East', phase: 'Phase II', price: '₹ 54,40,000',
    rate: '₹ 17,000 / sq.yd', vaastu: 'Compliant',
  },
  {
    id: 5, number: 'NR 05', status: 'available',
    type: 'Villa Plot', area: '250', width: '25', depth: '45',
    facing: 'South-East', phase: 'Phase II', price: '₹ 40,00,000',
    rate: '₹ 16,000 / sq.yd', vaastu: 'Compliant',
  },
  {
    id: 6, number: 'NR 06', status: 'sold',
    type: 'Corner Plot', area: '280', width: '28', depth: '45',
    facing: 'North-East', phase: 'Phase I', price: '₹ 47,60,000',
    rate: '₹ 17,000 / sq.yd', vaastu: 'Compliant',
  },
];

const FILTERS = [
  { key: 'all',       label: 'All Plots'  },
  { key: 'available', label: 'Available'  },
  { key: 'reserved',  label: 'Reserved'   },
];

const STATUS_LABEL = {
  available: 'Available',
  reserved:  'Reserved',
  sold:      'Sold',
};

/* ── Download icon ─────────────────────────────────────────────── */
function IconDownload() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" strokeWidth="1.5"
      stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 11l5 5 5-5M12 4v12"/>
    </svg>
  );
}

/* ── Component ────────────────────────────────────────────────── */
export default function Plots() {
  const [filter, setFilter] = useState('all');
  const sectionRef = useScrollReveal();

  const visible = PLOTS.filter(p =>
    filter === 'all' ? true : p.status === filter
  );

  return (
    <section id="plots" className="plots" ref={sectionRef}>

      {/* ── Photo band ─────────────────────────────────────────── */}
      <div className="plots__photo-band" aria-hidden="true">
        <img
          src="/Asserts/images/WoodBreeze_Home.webp"
          alt=""
          className="plots__photo-img"
        />
        <div className="plots__photo-overlay" />
      </div>

      {/* ── Section intro ─────────────────────────────────────── */}
      <div className="section--cream">
        <div className="container">

          <div className="plots__intro reveal">
            <p className="label-caps plots__eyebrow">Plot Inventory</p>
            <h2 className="plots__heading">Available Plots</h2>
            <p className="plots__subhead">
              100 DTCP &amp; RERA approved villa plots — select your ideal facing,
              dimension, and phase.
            </p>
          </div>

          {/* ── Filter tabs ──────────────────────────────────── */}
          <div className="plots__filters reveal reveal--delay-1" role="group" aria-label="Filter plots by status">
            {FILTERS.map(f => (
              <button
                key={f.key}
                className={`plots__filter-btn ${filter === f.key ? 'plots__filter-btn--active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
                {f.key !== 'all' && (
                  <span className="plots__filter-count">
                    {PLOTS.filter(p => p.status === f.key).length}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* ── Cards grid ───────────────────────────────────── */}
          <div className="plots__grid">
            {visible.map((plot, i) => (
              <article
                key={plot.id}
                className={`plots__card reveal reveal--delay-${(i % 2) + 1} plots__card--${plot.status}`}
              >
                {/* Card header */}
                <div className="plots__card-header">
                  <div className="plots__card-number">{plot.number}</div>
                  <span className={`plots__badge plots__badge--${plot.status}`}>
                    <span className="plots__badge-dot" />
                    {STATUS_LABEL[plot.status]}
                  </span>
                  <button className="plots__download" aria-label={`Download brochure for ${plot.number}`}>
                    <IconDownload />
                  </button>
                </div>

                {/* SVG plot layout */}
                <div className="plots__plan">
                  <PlotLayout width={plot.width} depth={plot.depth} facing={plot.facing} />
                </div>

                {/* Specs grid */}
                <div className="plots__specs">
                  <div className="plots__spec">
                    <span className="plots__spec-label">Type</span>
                    <span className="plots__spec-value">{plot.type}</span>
                  </div>
                  <div className="plots__spec">
                    <span className="plots__spec-label">Area</span>
                    <span className="plots__spec-value">{plot.area} sq.yd</span>
                  </div>
                  <div className="plots__spec">
                    <span className="plots__spec-label">Facing</span>
                    <span className="plots__spec-value">{plot.facing}</span>
                  </div>
                  <div className="plots__spec">
                    <span className="plots__spec-label">Dimensions</span>
                    <span className="plots__spec-value">{plot.width} × {plot.depth} ft</span>
                  </div>
                  <div className="plots__spec">
                    <span className="plots__spec-label">Phase</span>
                    <span className="plots__spec-value">{plot.phase}</span>
                  </div>
                  <div className="plots__spec">
                    <span className="plots__spec-label">Vaastu</span>
                    <span className="plots__spec-value plots__spec-value--green">{plot.vaastu}</span>
                  </div>
                </div>

                {/* Price row */}
                <div className="plots__price-row">
                  <div className="plots__price-block">
                    <span className="plots__price-label">Total Price</span>
                    <strong className="plots__price">{plot.price}</strong>
                    <span className="plots__rate">{plot.rate}</span>
                  </div>
                  <a href="#contact" className="plots__more-link">
                    More
                    <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* ── Bottom CTA ───────────────────────────────────── */}
          <div className="plots__cta-row reveal">
            <p className="plots__cta-note">
              All plots are DTCP &amp; RERA approved · 100% Vaastu compliant · Clear title
            </p>
            <a href="#contact" className="btn btn--primary">
              Enquire About Plots
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
