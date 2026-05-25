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

    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { ...defaultOptions, ...options });

    // Observe all .reveal elements not yet visible
    const observePending = () => {
      el.querySelectorAll('.reveal:not(.is-visible)').forEach((t) => io.observe(t));
      if (el.classList.contains('reveal') && !el.classList.contains('is-visible')) {
        io.observe(el);
      }
    };

    observePending();

    // Re-observe whenever new .reveal nodes are added (tab/filter switches)
    const mo = new MutationObserver(observePending);
    mo.observe(el, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
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
