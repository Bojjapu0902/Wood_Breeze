import React, { useState } from 'react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  IconTree, IconLeaf, IconSeedling,
  IconDroplet, IconZap, IconWaves, IconRecycle, IconFilter,
  IconShield, IconCamera, IconGate,
  IconUtensils, IconCar, IconBus, IconKey, IconHome,
} from '../../design-system/LineIcons';
import './Amenities.css';

const AMENITY_TABS = [
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    description: 'Underground utilities, green cover, and modern drainage systems create a clean, well-planned neighbourhood from day one.',
    items: [
      { Icon: IconTree,    title: 'Parks & Open Spaces',       desc: 'Landscaped parks and open play areas for all age groups.' },
      { Icon: IconLeaf,    title: 'Avenue Plantation',         desc: 'Tree-lined avenues creating a lush, green neighbourhood aesthetic.' },
      { Icon: IconDroplet, title: 'Underground Water Lines',   desc: 'Concealed water distribution ensuring a clean, uncluttered streetscape.' },
      { Icon: IconZap,     title: 'Underground Cabling',       desc: 'All electrical and utility lines buried underground for safety and aesthetics.' },
      { Icon: IconWaves,   title: 'Underground Drainage',      desc: 'Modern storm-water drainage system preventing waterlogging.' },
      { Icon: IconRecycle, title: 'Sewerage Treatment Plant',  desc: 'On-site STP ensuring responsible waste management and clean surroundings.' },
    ],
  },
  {
    id: 'security',
    label: 'Security',
    description: 'From a grand entrance arch to perimeter CCTV, every layer of security is considered so you live with complete peace of mind.',
    items: [
      { Icon: IconGate,    title: 'Grand Entrance Arch',       desc: 'Monumental entrance with 24/7 security personnel stationed at the gate.' },
      { Icon: IconCamera,  title: 'CCTV Surveillance',         desc: 'Comprehensive camera coverage across all common areas and entry points.' },
      { Icon: IconFilter,  title: 'Water Treatment Plant',     desc: 'In-community water treatment ensuring pure, safe drinking water.' },
      { Icon: IconShield,  title: 'Gated Community',           desc: 'Fully secured and gated development with controlled vehicular access.' },
    ],
  },
  {
    id: 'services',
    label: 'Premium Services',
    description: 'Concierge-grade services designed to elevate everyday life — from dining and transport to housekeeping and plot maintenance.',
    items: [
      { Icon: IconUtensils, title: 'Restaurant',               desc: 'On-call restaurant services for dining within your community.' },
      { Icon: IconCar,      title: 'Pool Drivers',             desc: 'Convenient pool car services for daily commuting needs.' },
      { Icon: IconBus,      title: 'On-Call Conveyance',       desc: 'Dedicated transport services available on demand for residents.' },
      { Icon: IconKey,      title: 'Club Membership',          desc: 'Exclusive club access with recreational and fitness facilities.' },
      { Icon: IconHome,     title: 'Housekeeping Service',     desc: 'Professional housekeeping and concierge services at your disposal.' },
      { Icon: IconSeedling, title: 'Plot Maintenance',         desc: 'Expert plot maintenance with regular plant care and landscaping.' },
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

        {/* ── Header (image03 style) ────────────────────────── */}
        <p className="amenities__category-label label-caps reveal">What Awaits You</p>
        <div className="amenities__header-row reveal reveal--delay-1">
          <h2 className="amenities__title">
            20+ Thoughtfully Curated<br />
            <em>Premium Amenities</em>
          </h2>
          <p className="amenities__subtitle">
            Every element of Wood Breeze has been designed to elevate your daily
            life — from the moment you enter through the grand arch to the quietude
            of your own plot.
          </p>
        </div>

        {/* ── Tab navigation ────────────────────────────────── */}
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

        {/* ── Tab panel ─────────────────────────────────────── */}
        <div
          id={`tabpanel-${activeTab}`}
          role="tabpanel"
          aria-label={currentTab?.label}
          className="amenities__panel"
          key={activeTab}
        >
          {/* Tab description (image03 two-col intro text) */}
          <p className="amenities__panel-desc">{currentTab?.description}</p>

          {/* Horizontal icon strip (image02/03 style) */}
          <div className="amenities__icon-strip">
            {currentTab?.items.map(({ Icon, title }) => (
              <div key={title} className="amenities__icon-item">
                <div className="amenities__icon-box">
                  <Icon size={30} />
                </div>
                <span className="amenities__icon-label">{title}</span>
              </div>
            ))}
          </div>

          {/* Detail cards grid below the strip */}
          <div className="amenities__grid">
            {currentTab?.items.map(({ Icon, title, desc }, i) => (
              <div
                key={title}
                className="amenities__card reveal"
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className="amenities__card-icon">
                  <Icon size={28} />
                </div>
                <h3 className="amenities__card-title">{title}</h3>
                <p className="amenities__card-desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
