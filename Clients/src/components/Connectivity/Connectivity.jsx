import React from 'react';
import { BirdFlock, BirdDivider } from '../../design-system/Birds';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  IconHome, IconNavigation, IconPlane, IconBuilding,
  IconMonitor, IconGlobe, IconSettings, IconBriefcase,
  IconCross, IconStar, IconLeaf, IconCompass,
} from '../../design-system/LineIcons';
import './Connectivity.css';

const ROUTES = [
  { dest: 'Mansanpally',           time: '10', unit: 'min', Icon: IconHome,       via: 'Drive' },
  { dest: 'Outer Ring Road',       time: '25', unit: 'min', Icon: IconNavigation, via: 'Drive' },
  { dest: 'International Airport', time: '30', unit: 'min', Icon: IconPlane,      via: 'Drive' },
  { dest: 'Financial District',    time: '50', unit: 'min', Icon: IconBuilding,   via: 'Drive' },
  { dest: 'Gachibowli',            time: '50', unit: 'min', Icon: IconMonitor,    via: 'Drive' },
  { dest: 'Hitech City',           time: '55', unit: 'min', Icon: IconGlobe,      via: 'Drive' },
];

const NEARBY = [
  { name: 'Electronic Manufacture Cluster', Icon: IconSettings  },
  { name: 'WIPRO Manufacturing Unit',        Icon: IconBriefcase },
  { name: 'LV Prasad Eye Hospital',          Icon: IconCross     },
  { name: 'Statue of Equality',              Icon: IconStar      },
  { name: 'Ramachandra Mission, Kanha',      Icon: IconLeaf      },
  { name: 'JIMS Hospital',                   Icon: IconCross     },
];

export default function Connectivity() {
  const sectionRef = useScrollReveal();

  return (
    <section id="connectivity" className="connectivity section section--green" ref={sectionRef}>
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
            Wood Breeze sits at the nexus of tranquillity and connectivity. The Mansanpally corridor
            places you within easy reach of Hyderabad's major hubs while keeping urban noise at arm's length.
          </p>
        </div>

        <BirdDivider color="rgba(201,168,76,0.5)" />

        {/* Route cards */}
        <div className="connectivity__routes">
          {ROUTES.map(({ dest, time, unit, Icon, via }, i) => (
            <div
              key={dest}
              className={`connectivity__route reveal reveal--delay-${(i % 3) + 1}`}
            >
              <div className="connectivity__route-icon" aria-hidden="true">
                <Icon size={22} />
              </div>
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
            {NEARBY.map(({ name, Icon }, i) => (
              <div
                key={name}
                className={`connectivity__nearby-item reveal reveal--delay-${(i % 3) + 1}`}
              >
                <span className="connectivity__nearby-icon" aria-hidden="true">
                  <Icon size={16} />
                </span>
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
