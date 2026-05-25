import React from 'react';
import { BirdFlock, BirdDivider } from '../../design-system/Birds';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Connectivity.css';

const ROUTES = [
  { dest: 'Mansanpally',             time: '10',    unit: 'min',  icon: '🏘️', via: 'Drive' },
  { dest: 'Outer Ring Road',         time: '25',    unit: 'min',  icon: '🛣️', via: 'Drive' },
  { dest: 'International Airport',   time: '30',    unit: 'min',  icon: '✈️', via: 'Drive' },
  { dest: 'Financial District',      time: '50',    unit: 'min',  icon: '🏦', via: 'Drive' },
  { dest: 'Gachibowli',              time: '50',    unit: 'min',  icon: '💻', via: 'Drive' },
  { dest: 'Hitech City',             time: '55',    unit: 'min',  icon: '🌐', via: 'Drive' },
];

const NEARBY = [
  { name: 'Electronic Manufacture Cluster', icon: '⚙️' },
  { name: 'WIPRO Manufacturing Unit',        icon: '💼' },
  { name: 'LV Prasad Eye Hospital',          icon: '🏥' },
  { name: 'Statue of Equality',              icon: '🗿' },
  { name: 'Ramachandra Mission, Kanha',      icon: '🌸' },
  { name: 'JIMS Hospital',                   icon: '🏨' },
];

export default function Connectivity() {
  const sectionRef = useScrollReveal();

  return (
    <section id="connectivity" className="connectivity section section--green" ref={sectionRef}>
      {/* Decorative bird flock */}
      <div className="connectivity__birds" aria-hidden="true">
        <BirdFlock color="rgba(250,247,240,0.12)" />
      </div>

      <div className="container">
        {/* Header */}
        <div className="connectivity__header reveal">
          <p className="section__eyebrow">Strategic Connectivity</p>
          <span className="gold-line" />
          <h2 className="connectivity__title">
            Nature's Address,<br /><em>City's Convenience</em>
          </h2>
          <p className="connectivity__subtitle">
            Wood Breeze sits at the nexus of tranquillity and connectivity. The Mansanpally corridor places you within easy reach of Hyderabad's major hubs while keeping urban noise at arm's length.
          </p>
        </div>

        <BirdDivider color="rgba(201,168,76,0.5)" />

        {/* Route cards */}
        <div className="connectivity__routes">
          {ROUTES.map(({ dest, time, unit, icon, via }, i) => (
            <div
              key={dest}
              className={`connectivity__route reveal reveal--delay-${(i % 3) + 1}`}
            >
              <div className="connectivity__route-icon" aria-hidden="true">{icon}</div>
              <div className="connectivity__route-info">
                <div className="connectivity__route-dest">{dest}</div>
                <div className="connectivity__route-via">{via}</div>
              </div>
              <div className="connectivity__route-time">
                <span className="connectivity__route-number">{time}</span>
                <span className="connectivity__route-unit">{unit}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Nearby developments */}
        <div className="connectivity__nearby">
          <h3 className="connectivity__nearby-title reveal">
            <span className="gold-line" />
            Nearby Developments
          </h3>
          <div className="connectivity__nearby-grid">
            {NEARBY.map(({ name, icon }, i) => (
              <div
                key={name}
                className={`connectivity__nearby-item reveal reveal--delay-${(i % 3) + 1}`}
              >
                <span className="connectivity__nearby-icon" aria-hidden="true">{icon}</span>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
