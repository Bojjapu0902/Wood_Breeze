import React, { useState, useEffect, useCallback } from 'react';
import { PerchedBird } from '../../design-system/Birds';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    id: 1,
    quote: 'I am very happy to be associated with this project with many unique features to have a blissful life. The natural surroundings and the quality of infrastructure are truly outstanding.',
    name: 'K. Durga Prasad',
    location: 'Hyderabad',
    initials: 'KD',
  },
  {
    id: 2,
    quote: 'Very quiet, peaceful and private. Wood Breeze is the kind of development I had always dreamed of — away from the city chaos, yet connected to everything that matters.',
    name: 'M. Sivarami Reddy',
    location: 'Guntur',
    initials: 'MS',
  },
  {
    id: 3,
    quote: 'I joined this project and I am very happy to see the best quality development works in progress at the site. Eagerly waiting to move to this peaceful location.',
    name: 'C. Sudhakar',
    location: 'Kakinada',
    initials: 'CS',
  },
];

export default function Testimonials() {
  const [current, setCurrent]   = useState(0);
  const [paused, setPaused]     = useState(false);
  const sectionRef = useScrollReveal();

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % TESTIMONIALS.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next, paused]);

  return (
    <section className="testimonials section section--alt" ref={sectionRef} aria-label="Customer testimonials">
      <div className="container container--narrow">
        {/* Header */}
        <div className="testimonials__header reveal">
          <p className="section__eyebrow">Resident Voices</p>
          <span className="gold-line gold-line--center" />
          <h2 className="testimonials__title">
            Those Who Found Their<br /><em>Peace Here</em>
          </h2>
        </div>

        {/* Carousel */}
        <div
          className="testimonials__carousel reveal reveal--delay-2"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="testimonials__quote-mark" aria-hidden="true">"</div>

          <div className="testimonials__slide" key={current}>
            <blockquote className="testimonials__text">
              {TESTIMONIALS[current].quote}
            </blockquote>

            <div className="testimonials__author">
              <div className="testimonials__avatar" aria-hidden="true">
                <PerchedBird size={28} color="#C9A84C" />
              </div>
              <div>
                <div className="testimonials__name">{TESTIMONIALS[current].name}</div>
                <div className="testimonials__location">{TESTIMONIALS[current].location}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="testimonials__nav" role="group" aria-label="Testimonial navigation">
            <button
              className="testimonials__nav-btn"
              onClick={prev}
              aria-label="Previous testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M13 4L7 10L13 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            <div className="testimonials__indicators" role="list">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  className={`testimonials__dot ${i === current ? 'testimonials__dot--active' : ''}`}
                  onClick={() => setCurrent(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  role="listitem"
                />
              ))}
            </div>

            <button
              className="testimonials__nav-btn"
              onClick={next}
              aria-label="Next testimonial"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                <path d="M7 4L13 10L7 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
