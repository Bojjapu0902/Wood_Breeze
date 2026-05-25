import React, { useState, useEffect } from 'react';
import './Loader.css';

const LOGO = '/Asserts/images/Logo.webp';

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hide = () => setHidden(true);

    if (document.readyState === 'complete') {
      // Page already loaded (e.g. hot-reload)
      const t = setTimeout(hide, 500);
      return () => clearTimeout(t);
    }

    window.addEventListener('load', hide);
    return () => window.removeEventListener('load', hide);
  }, []);

  return (
    <div className={`loader-overlay${hidden ? ' loader--hidden' : ''}`} aria-hidden={hidden}>
      <img src={LOGO} alt="Wood Breeze" className="loader__logo" />
      <div className="loader__dots" aria-hidden="true">
        <span className="loader__dot" />
        <span className="loader__dot" />
        <span className="loader__dot" />
      </div>
      <p className="loader__tagline">Mansanpally · Hyderabad</p>
    </div>
  );
}
