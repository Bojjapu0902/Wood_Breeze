import React, { useState } from 'react';
import { BirdDivider } from '../../design-system/Birds';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import './Amenities.css';

const AMENITY_TABS = [
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    items: [
      { icon: '🌳', title: 'Parks & Open Spaces', desc: 'Landscaped parks and open play areas for all age groups.' },
      { icon: '🌿', title: 'Avenue Plantation', desc: 'Tree-lined avenues creating a lush, green neighbourhood aesthetic.' },
      { icon: '💧', title: 'Underground Water Lines', desc: 'Concealed water distribution ensuring a clean, uncluttered streetscape.' },
      { icon: '⚡', title: 'Underground Cabling', desc: 'All electrical and utility lines buried underground for safety and aesthetics.' },
      { icon: '🏗️', title: 'Underground Drainage', desc: 'Modern storm-water drainage system preventing waterlogging.' },
      { icon: '♻️', title: 'Sewerage Treatment Plant', desc: 'On-site STP ensuring responsible waste management and clean surroundings.' },
    ],
  },
  {
    id: 'security',
    label: 'Security',
    items: [
      { icon: '🚪', title: 'Grand Entrance Arch', desc: 'Monumental entrance with 24/7 security personnel stationed at the gate.' },
      { icon: '📹', title: 'CCTV Surveillance', desc: 'Comprehensive camera coverage across all common areas and entry points.' },
      { icon: '💦', title: 'Water Treatment Plant', desc: 'In-community water treatment ensuring pure, safe drinking water.' },
      { icon: '🏘️', title: 'Gated Community', desc: 'Fully secured and gated development with controlled vehicular access.' },
    ],
  },
  {
    id: 'services',
    label: 'Premium Services',
    items: [
      { icon: '🍽️', title: 'Restaurant', desc: 'On-call restaurant services for dining within your community.' },
      { icon: '🚗', title: 'Pool Drivers', desc: 'Convenient pool car services for daily commuting needs.' },
      { icon: '🚐', title: 'On-Call Conveyance', desc: 'Dedicated transport services available on demand for residents.' },
      { icon: '🏊', title: 'Club Membership', desc: 'Exclusive club access with recreational and fitness facilities.' },
      { icon: '🏠', title: 'Housekeeping Service', desc: 'Professional housekeeping and concierge services at your disposal.' },
      { icon: '🌱', title: 'Plot Maintenance', desc: 'Expert plot maintenance with regular plant care and landscaping.' },
    ],
  },
];

export default function Amenities() {
  const [activeTab, setActiveTab] = useState('infrastructure');
  const sectionRef = useScrollReveal();

  const currentTab = AMENITY_TABS.find((t) => t.id === activeTab);

  return (
    <section id="amenities" className="amenities section section--alt" ref={sectionRef}>
      <div className="container">
        {/* Header */}
        <div className="amenities__header reveal">
          <p className="section__eyebrow">What Awaits You</p>
          <span className="gold-line" />
          <h2 className="amenities__title">20+ Thoughtfully Curated<br /><em>Premium Amenities</em></h2>
          <p className="amenities__subtitle section__subtitle">
            Every element of Wood Breeze has been designed to elevate your daily life — from the moment you enter through the grand arch to the quietude of your own plot.
          </p>
        </div>

        <BirdDivider color="#C9A84C" />

        {/* Tab navigation */}
        <div className="amenities__tabs" role="tablist" aria-label="Amenity categories">
          {AMENITY_TABS.map(({ id, label }) => (
            <button
              key={id}
              role="tab"
              aria-selected={activeTab === id}
              aria-controls={`tabpanel-${id}`}
              className={`amenities__tab ${activeTab === id ? 'amenities__tab--active' : ''}`}
              onClick={() => setActiveTab(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div
          id={`tabpanel-${activeTab}`}
          role="tabpanel"
          aria-label={currentTab?.label}
          className="amenities__grid"
          key={activeTab}
        >
          {currentTab?.items.map(({ icon, title, desc }, i) => (
            <div
              key={title}
              className="amenities__card reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="amenities__card-icon" aria-hidden="true">{icon}</div>
              <h3 className="amenities__card-title">{title}</h3>
              <p className="amenities__card-desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
