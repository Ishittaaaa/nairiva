import React from 'react';

import cardApproach from './assets/card-approach.png';
import cardImpact from './assets/card-impact.png';
import cardNatureSolutions from './assets/card-nature-solutions.jpg';
import cardWhatWeDo from './assets/card-what-we-do.png';
import heroPositiveWater from './assets/hero-positive-water.jpeg';
import waterRiskMap from './assets/water-risk-map.jpeg';
import aquaForAllLogo from './assets/funder-logos/aqua-for-all-logo.svg';
import ceoWaterMandateLogo from './assets/funder-logos/ceo-water-mandate-logo.png';
import luxembourgLogo from './assets/funder-logos/image33.jpeg';
import ministryLogo from './assets/funder-logos/image34.jpeg';
import sdg6Icon from './assets/sdg6icon.png';
import sdg13Icon from './assets/sdg13icon.png';
import sdg17Icon from './assets/sdg17icon.png';

function scrollToSection(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

function SdgGoalIcon({ goal, className = '', alt }) {
  const defaultLabel =
    goal === 6 ? 'SDG 6: Clean and sustainable water management' : goal === 13 ? 'SDG 13: Climate action' : 'SDG 17: Partnerships';
  const label = alt ?? defaultLabel;

  if (goal === 6) {
    return <img src={sdg6Icon} alt={label} className={className} />;
  }

  if (goal === 13) {
    return <img src={sdg13Icon} alt={label} className={className} />;
  }

  return <img src={sdg17Icon} alt={label} className={className} />;
}

const serviceCards = [
  {
    title: 'Water infrastructure',
    body: 'Water systems and services that strengthen reliable access, delivery, and long-term resilience.',
    image: cardApproach,
  },
  {
    title: 'Nature based solutions',
    body: 'Water systems and services rooted in natural capital, watershed health, and climate adaptation.',
    image: cardNatureSolutions,
    imageAlt: 'Mangrove forest with exposed root systems along a calm shoreline',
  },
  {
    title: 'New business models',
    body: 'Water tech and innovation opportunities that scale new models, enterprises, and market solutions.',
    image: cardImpact,
  },
  {
    title: 'Financial institutions',
    body: 'Access and resilience finance that help households, enterprises, and communities invest in water solutions.',
    image: cardWhatWeDo,
  },
];

const waterContextStats = [
  {
    value: '> US$1T',
    label: 'needed each year to deliver sustainable water management globally and meet 2030 SDGs.',
  },
  {
    value: '5x higher',
    label: 'cost of inaction on water risk compared to the cost of investment.',
  },
  {
    value: '$300B+',
    label: 'in potential business losses from unmitigated water risks.',
  },
  {
    value: '$200B',
    label: 'annual insurance losses from water-driven events projected by 2034.',
  },
];

const sdgImpactObjectives = [
  { label: 'SDG 6 - Clean and sustainable water management', goal: 6 },
  { label: 'SDG 13 - Climate action', goal: 13 },
  { label: 'SDG 17 - Partnerships for the goals', goal: 17 },
];

const impactVision =
  'We deliver measurable water resilience and long-term value creation through metrics aligned with the Volumetric Water Benefit framework (VWB).';

const impactIndicatorGroups = [
  { title: 'Water Quantity' },
  { title: 'Water Quality' },
  { title: 'Ecosystem & Resilience' },
  { title: 'Socio-economic Impact' },
];

const teamMembers = [
  {
    name: 'Aarno Keijzer',
    role: 'Investment Director',
    bio: 'Private-markets specialist who has raised USD 5B+ across equity-linked and capital-structuring deals.',
  },
  {
    name: 'Mark van Doesburgh',
    role: 'Fund Investments Advisor',
    bio: 'Frontier-market fund structuring expert with 30+ years across investment management and banking.',
  },
  {
    name: 'Ingwell Kuil',
    role: 'Climate, Impact, ESG Advisor for Investable Solutions',
    bio: 'Climate, impact, and ESG advisor with 20 years across DFIs, MDBs, World Bank, and GuarantCo; leads investable solutions from Nairobi.',
  },
];

const committedFunders = [
  { name: 'Aqua for All', logo: aquaForAllLogo, cardClass: 'funder-logo-card--portrait' },
  { name: 'Ministry of Foreign Affairs', logo: ministryLogo, cardClass: 'funder-logo-card--landscape' },
  {
    name: 'Government of Luxembourg',
    logo: luxembourgLogo,
    cardClass: 'funder-logo-card--landscape funder-logo-card--zoom-luxembourg',
  },
  {
    name: 'CEO Water Mandate and Water Resilience Coalition',
    logo: ceoWaterMandateLogo,
    cardClass: 'funder-logo-card--landscape funder-logo-card--zoom-wide',
  },
];

const navLinks = [
  { label: 'Our ambition', sectionId: 'our-ambition' },
  { label: 'Our approach', sectionId: 'services' },
  { label: 'About', sectionId: 'team-contact' },
];

function BrandMark() {
  return (
    <button className="brand" type="button" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Nairiva home">
      <span className="brand-drop" />
      <span>Nairiva Invest</span>
    </button>
  );
}

function Button({ children, variant = 'primary' }) {
  return (
    <button className={`button button-${variant}`} type="button" onClick={() => scrollToSection('services')}>
      {children}
    </button>
  );
}

function SiteHeader() {
  return (
    <header className="site-header">
      <BrandMark />
      <nav className="nav" aria-label="Main navigation">
        {navLinks.map((link) => (
          <button key={link.sectionId} type="button" onClick={() => scrollToSection(link.sectionId)}>
            {link.label}
          </button>
        ))}
      </nav>
      <button className="involved-button" type="button" onClick={() => scrollToSection('team-contact')}>
        Contact Details
      </button>
    </header>
  );
}

function HomePage() {
  return (
    <>
      <section id="our-ambition" className="hero" aria-labelledby="hero-title">
        <h1 id="hero-title">
          <span className="hero-title-line">We unlock finance for</span>
          <span className="hero-title-line">
            <strong>positive water impact</strong>
          </span>
          <span className="hero-title-line">along value chains.</span>
        </h1>
        <p>
          By reducing risk and creating investment-ready opportunities, we enable capital to flow where it is needed most.
        </p>
        <div className="hero-actions">
          <Button variant="outline">Invest</Button>
          <Button>Impact</Button>
        </div>
      </section>

      <img
        className="hero-image"
        src={heroPositiveWater}
        alt="Aerial view of winding river channels through a lush wetland ecosystem"
      />

      <section className="market-section" aria-labelledby="market-title">
        <div className="market-copy">
          <h2 id="market-title">Water stress is a global challenge.</h2>
          <p>
            Physical water stress is uneven—the map shows where scarcity, quality, and volatility matter most.
            <br />
            <br />
            Reaching <strong>2030</strong> water and SDG goals requires more than <strong>US$1T</strong> a year in
            sustainable management worldwide, yet the cost of inaction remains even higher. The{' '}
            <a href="https://gipwater.org/" target="_blank" rel="noopener noreferrer">
              Global Water Investment Facility
            </a>{' '}
            directs capital toward water‑resilient opportunities.
          </p>
          <button className="market-cta" type="button" onClick={() => scrollToSection('why-it-matters')}>
            <span>Why It Matters</span>
            <span aria-hidden="true">→</span>
          </button>
        </div>
        <div className="market-map-stack">
          <h3 className="market-map-heading">Targeted Geographies</h3>
          <p className="market-map-intro">
            An index of publicly reported water stress, corporate water risk, and resilience indicators. It helps inform sourcing priorities and portfolio construction decisions for the investment facility.
          </p>
          <div className="market-map-panel">
            <img
              className="market-map"
              src={waterRiskMap}
              alt="Slide 9 global water stress map showing water-risk intensity across regions"
            />
            <p className="market-map-source">
              <strong>Source:</strong>{' '}
              <a href="https://www.wri.org/aqueduct" target="_blank" rel="noopener noreferrer">
                WRI Aqueduct
              </a>
              
            </p>
          </div>
        </div>
      </section>

      <section id="why-it-matters" className="why-it-matters-section" aria-labelledby="why-it-matters-title">
        <div className="why-it-matters-inner">
          <header className="why-it-matters-header">
            <h2 id="why-it-matters-title">Why it matters?</h2>
            <p className="why-it-matters-lede">
              In stressed basins, water risk extends beyond ESG concerns to operational disruption, rising costs, and lost output. As investors and insurers increasingly factor in that risk, the case for action becomes financial and economic, as well as environmental.
            </p>
          </header>
          <div className="why-it-matters-stat-grid" aria-label="Key water investment statistics">
            {waterContextStats.map((stat) => (
              <article className="why-it-matters-stat-card" key={stat.value}>
                <strong>{stat.value}</strong>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="services-section" aria-labelledby="services-title">
        <div className="services-intro">
          <div>
            <p className="section-kicker">Investment Portfolio</p>
            <h2 id="services-title">We create key benefits for water investment at scale.</h2>
          </div>
          <span className="services-rule" />
          <div className="services-summary">
            <p>
              The investment facility combines impact opportunities, diversified portfolios, strategic partner networks, blended
              finance, predictable returns, and public sector support to scale water financing.
            </p>
            
          </div>
        </div>

        <div className="service-grid">
          {serviceCards.map((card) => (
            <article className="service-card" key={card.title}>
              <img src={card.image} alt={card.imageAlt ?? ''} />
              <div>
                <h3>{card.title}</h3>
                <p>{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="targeted-impact" className="water-context-section" aria-labelledby="water-context-title">
        <div className="water-context-intro">
          <h2 id="water-context-title">Targeted Impact</h2>
        </div>

        <div className="targeted-impact-split">
          <div className="targeted-impact-column">
            <h3 className="targeted-impact-column-title">SDG Impact Objectives</h3>
            <ul className="targeted-impact-sdg-list">
              {sdgImpactObjectives.map((item) => (
                <li key={item.label}>
                  <SdgGoalIcon goal={item.goal} alt={item.label} className="targeted-impact-sdg-icon" />
                  <span className="targeted-impact-sdg-label">{item.label}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="targeted-impact-divider" aria-hidden="true" />
          <div className="targeted-impact-column targeted-impact-column--right">
            <div className="impact-vision-block">
              <h3 className="targeted-impact-column-title">Our impact vision</h3>
              <p className="impact-vision-text">{impactVision}</p>
            </div>
            <div className="impact-indicators-block">
              <h3 className="targeted-impact-column-title">Impact Indicators</h3>
              {impactIndicatorGroups.map((group) => (
                <div key={group.title} className="impact-indicator-group">
                  <h4>{group.title}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function Footer() {
  return (
    <footer id="team-contact" className="site-footer" aria-labelledby="team-title">
      <div className="footer-team">
        <p className="section-kicker">Team & bios</p>
        <h2 id="team-title">Board members and Experts</h2>
        <div className="footer-team-list">
          {teamMembers.map((member) => (
            <article className="footer-team-member" key={member.name}>
              <h3>{member.name}</h3>
              <p>
                <strong>{member.role}</strong> — {member.bio}
              </p>
            </article>
          ))}
        </div>
        <div className="committed-funders" aria-labelledby="committed-funders-title">
          <h3 id="committed-funders-title">Committed funders</h3>
          <div className="funder-logo-grid">
            {committedFunders.map((funder) => (
              <div
                className={['funder-logo-card', funder.cardClass].filter(Boolean).join(' ')}
                key={funder.name}
              >
                <img src={funder.logo} alt={funder.name} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-contact">
        <p className="section-kicker">Contact details</p>
        <h2>
          <a href="https://www.nairiva-invest.world/" target="_blank" rel="noopener noreferrer">
            www.nairiva-invest.world
          </a>
        </h2>
        <p>For investor and partnership conversations around the Global Water Investment Facility.</p>
        <div className="contact-list">
          <a href="mailto:contact@nairiva.com">contact@nairiva.com</a>
          <a href="https://gipwater.org/" target="_blank" rel="noopener noreferrer">
            Global Water Investment Facility
          </a>
          <a href="mailto:a.keijzer@aquaforall.org">Investor & partnership enquiries</a>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <main id="top" className="page">
      <SiteHeader />
      <HomePage />
      <Footer />
    </main>
  );
}

export default App;


