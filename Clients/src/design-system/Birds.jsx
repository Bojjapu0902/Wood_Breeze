/**
 * WOOD BREEZE — BIRD DESIGN SYSTEM
 * Signature bird SVG components used as decorative motifs throughout the site.
 * Birds symbolise freedom, nature harmony, and the elevated lifestyle of Wood Breeze.
 */

import React from 'react';

/* ── Single Bird Silhouette ────────────────────────────────── */
export const BirdSilhouette = ({ size = 32, color = 'currentColor', style = {}, className = '' }) => (
  <svg
    width={size}
    height={size * 0.55}
    viewBox="0 0 60 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={style}
    aria-hidden="true"
  >
    <path
      d="M30 16.5C26 10 18 5 8 6C14 9 18 13 20 16.5C18 20 14 24 8 27C18 28 26 23 30 16.5Z"
      fill={color}
    />
    <path
      d="M30 16.5C34 10 42 5 52 6C46 9 42 13 40 16.5C42 20 46 24 52 27C42 28 34 23 30 16.5Z"
      fill={color}
    />
  </svg>
);

/* ── Flying Flock (multiple birds in formation) ────────────── */
export const BirdFlock = ({ color = 'currentColor', className = '', style = {} }) => (
  <svg
    viewBox="0 0 600 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ width: '100%', height: 'auto', ...style }}
    aria-hidden="true"
    preserveAspectRatio="xMidYMid meet"
  >
    {/* Lead bird — largest */}
    <path d="M300 80C292 66 278 57 260 59C268 64 274 70 278 77C274 84 268 90 260 95C278 97 292 88 300 80Z" fill={color} fillOpacity="0.9"/>
    <path d="M300 80C308 66 322 57 340 59C332 64 326 70 322 77C326 84 332 90 340 95C322 97 308 88 300 80Z" fill={color} fillOpacity="0.9"/>

    {/* Mid-left bird */}
    <path d="M230 55C224 44 213 38 200 40C206 44 210 49 213 54C210 59 206 64 200 68C213 69 224 62 230 55Z" fill={color} fillOpacity="0.75"/>
    <path d="M230 55C236 44 247 38 260 40C254 44 250 49 247 54C250 59 254 64 260 68C247 69 236 62 230 55Z" fill={color} fillOpacity="0.75"/>

    {/* Mid-right bird */}
    <path d="M370 55C364 44 353 38 340 40C346 44 350 49 353 54C350 59 346 64 340 68C353 69 364 62 370 55Z" fill={color} fillOpacity="0.75"/>
    <path d="M370 55C376 44 387 38 400 40C394 44 390 49 387 54C390 59 394 64 400 68C387 69 376 62 370 55Z" fill={color} fillOpacity="0.75"/>

    {/* Far-left small */}
    <path d="M160 35C156 27 148 22 138 24C142 27 145 31 147 35C145 39 142 43 138 46C148 47 156 43 160 35Z" fill={color} fillOpacity="0.5"/>
    <path d="M160 35C164 27 172 22 182 24C178 27 175 31 173 35C175 39 178 43 182 46C172 47 164 43 160 35Z" fill={color} fillOpacity="0.5"/>

    {/* Far-right small */}
    <path d="M440 35C436 27 428 22 418 24C422 27 425 31 427 35C425 39 422 43 418 46C428 47 436 43 440 35Z" fill={color} fillOpacity="0.5"/>
    <path d="M440 35C444 27 452 22 462 24C458 27 455 31 453 35C455 39 458 43 462 46C452 47 444 43 440 35Z" fill={color} fillOpacity="0.5"/>

    {/* Tiny trailing birds */}
    <path d="M110 20C107 14 102 10 95 11C98 13 100 16 102 19C100 22 98 25 95 27C102 28 107 25 110 20Z" fill={color} fillOpacity="0.3"/>
    <path d="M110 20C113 14 118 10 125 11C122 13 120 16 118 19C120 22 122 25 125 27C118 28 113 25 110 20Z" fill={color} fillOpacity="0.3"/>

    <path d="M490 20C487 14 482 10 475 11C478 13 480 16 482 19C480 22 478 25 475 27C482 28 487 25 490 20Z" fill={color} fillOpacity="0.3"/>
    <path d="M490 20C493 14 498 10 505 11C502 13 500 16 498 19C500 22 502 25 505 27C498 28 493 25 490 20Z" fill={color} fillOpacity="0.3"/>
  </svg>
);

/* ── Perched Bird (for decorative dividers) ─────────────────── */
export const PerchedBird = ({ size = 48, color = 'currentColor', className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/* Body */}
    <ellipse cx="24" cy="22" rx="10" ry="8" fill={color} fillOpacity="0.9"/>
    {/* Head */}
    <circle cx="32" cy="16" r="5" fill={color} fillOpacity="0.9"/>
    {/* Beak */}
    <path d="M37 15L41 16L37 17Z" fill={color}/>
    {/* Eye */}
    <circle cx="33" cy="15" r="1" fill="white"/>
    {/* Tail */}
    <path d="M14 22C10 20 6 24 8 28L14 26Z" fill={color} fillOpacity="0.8"/>
    {/* Wing detail */}
    <path d="M18 20C20 16 26 15 30 18" stroke="white" strokeWidth="0.8" strokeLinecap="round"/>
    {/* Legs */}
    <line x1="22" y1="30" x2="20" y2="36" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="26" y1="30" x2="24" y2="36" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    {/* Feet */}
    <line x1="20" y1="36" x2="17" y2="38" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="20" y1="36" x2="20" y2="39" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="20" y1="36" x2="23" y2="38" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="24" y1="36" x2="21" y2="38" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="24" y1="36" x2="24" y2="39" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
    <line x1="24" y1="36" x2="27" y2="38" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

/* ── Animated Flying Birds Banner (CSS-driven) ──────────────── */
export const AnimatedBirds = ({ color = 'rgba(201,168,76,0.6)', className = '' }) => (
  <div
    className={`animated-birds ${className}`}
    aria-hidden="true"
    style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}
  >
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        style={{
          position: 'absolute',
          top: `${10 + i * 12}%`,
          left: '-80px',
          animation: `birdFly ${14 + i * 3}s linear ${i * 2.5}s infinite`,
          opacity: 0.6 - i * 0.08,
          transform: `scale(${1 - i * 0.1})`,
        }}
      >
        <BirdSilhouette size={28 - i * 2} color={color} />
      </div>
    ))}
    <style>{`
      @keyframes birdFly {
        0%   { transform: translateX(0)   translateY(0) scale(1); }
        25%  { transform: translateX(25vw) translateY(-20px) scale(1); }
        50%  { transform: translateX(55vw) translateY(10px) scale(0.95); }
        75%  { transform: translateX(80vw) translateY(-15px) scale(0.9); }
        100% { transform: translateX(110vw) translateY(0) scale(0.85); }
      }
    `}</style>
  </div>
);

/* ── Section Divider with Birds ─────────────────────────────── */
export const BirdDivider = ({ color = '#C9A84C' }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '0.5rem 0' }} aria-hidden="true">
    <div style={{ flex: 1, height: '1px', background: `linear-gradient(to right, transparent, ${color}40, ${color}80)` }} />
    <PerchedBird size={24} color={color} />
    <BirdSilhouette size={20} color={color} style={{ opacity: 0.7 }} />
    <PerchedBird size={20} color={color} />
    <div style={{ flex: 1, height: '1px', background: `linear-gradient(to left, transparent, ${color}40, ${color}80)` }} />
  </div>
);

/* ── Leaf + Bird Monogram ────────────────────────────────────── */
export const BrandMark = ({ size = 64, className = '' }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Wood Breeze brand mark"
  >
    {/* Leaf */}
    <path d="M40 70C40 70 10 55 10 30C10 15 25 5 40 10C55 5 70 15 70 30C70 55 40 70 40 70Z"
          fill="#2D5A1B" fillOpacity="0.15" stroke="#2D5A1B" strokeWidth="1.5"/>
    {/* Stem */}
    <line x1="40" y1="70" x2="40" y2="35" stroke="#4A7C2F" strokeWidth="1.5" strokeLinecap="round"/>
    {/* Bird on branch */}
    <path d="M40 32C36 26 30 23 22 24C26 27 29 30 31 33C29 36 26 39 22 42C30 43 36 39 40 32Z" fill="#C9A84C" fillOpacity="0.9"/>
    <path d="M40 32C44 26 50 23 58 24C54 27 51 30 49 33C51 36 54 39 58 42C50 43 44 39 40 32Z" fill="#C9A84C" fillOpacity="0.9"/>
    {/* Small dots — nature detail */}
    <circle cx="32" cy="20" r="2" fill="#7A9E5C" fillOpacity="0.5"/>
    <circle cx="48" cy="18" r="1.5" fill="#7A9E5C" fillOpacity="0.4"/>
    <circle cx="25" cy="35" r="1.5" fill="#7A9E5C" fillOpacity="0.3"/>
  </svg>
);
