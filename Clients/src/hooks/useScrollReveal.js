/**
 * useScrollReveal — Intersection Observer hook for scroll-triggered animations.
 * Adds/removes `.is-visible` class on elements with `.reveal`.
 */

import { useEffect, useRef } from 'react';

const defaultOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -60px 0px',
};

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { ...defaultOptions, ...options });

    // Observe all .reveal children
    const targets = el.querySelectorAll('.reveal');
    if (targets.length > 0) {
      targets.forEach((t) => observer.observe(t));
    } else {
      // If the element itself has .reveal
      if (el.classList.contains('reveal')) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * useScrollRevealSingle — For a single element reference.
 */
export function useScrollRevealSingle(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('is-visible');
        observer.disconnect();
      }
    }, { ...defaultOptions, ...options });

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
