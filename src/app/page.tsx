"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const HOW_IT_WORKS_STEPS = [
  {
    tab: 'Trigger',
    heading: 'A request lands',
    description: 'Email, a call transcript, or a portal submission all arrive as one structured record, tagged with sender and channel.',
    highlight: { top: '39%', left: '31%', width: '22%', height: '15%' },
  },
  {
    tab: 'Check',
    heading: 'Matched against the policy',
    description: 'Coverage, eligibility, and account history are pulled and verified before anything moves forward, so nothing gets missed.',
    highlight: { top: '46%', left: '54%', width: '37%', height: '15%' },
  },
  {
    tab: 'Ai Action',
    heading: 'Classify and label',
    description: 'The request is tagged by intent, quote, claim, policy update, or urgent, so the right agency action follows.',
    highlight: { top: '66%', left: '54%', width: '32%', height: '13%' },
  },
];

const SAMPLE_REVIEWS = [
  {
    initials: 'MF',
    name: 'Marisol Fenn',
    role: 'Owner, Fenn Insurance Group',
    rating: 5,
    quote: 'Quote turnaround went from a full day to under an hour. Clients notice the difference.',
    color: '#3B82F6',
  },
  {
    initials: 'DO',
    name: 'Derek Okafor',
    role: 'Principal, Okafor & Associates',
    rating: 5,
    quote: 'Commission reconciliation used to eat a whole Friday every month. Now it just matches itself.',
    color: '#6366F1',
  },
  {
    initials: 'PA',
    name: 'Priya Anand',
    role: 'Agency Manager, Anand Coverage Partners',
    rating: 4,
    quote: 'The AI routing on inbound claims is genuinely useful. Onboarding ran a little long, but support stuck with us.',
    color: '#0EA5E9',
  },
];

const FAQ_ITEMS = [
  {
    question: 'Do we have to use every product?',
    answer: "No. Start with the one that hurts most, VAs, AI, IT, or marketing. Add the rest when you're ready. Everything is modular.",
  },
  {
    question: 'How long does onboarding take?',
    answer: 'Most agencies go live in 5-7 days. We import your data, configure integrations, and train your staff. White-glove, not self-serve.',
  },
  {
    question: 'Are your VAs insurance-trained?',
    answer: 'Every VA completes a six-week insurance curriculum (P&C and L&H) before joining your account. Most have prior agency experience.',
  },
  {
    question: 'What about data security?',
    answer: "SOC 2 controls, row-level security on every tenant table, encrypted backups, and SSO. Built for agencies who can't afford a breach.",
  },
];

const FOOTER_COLUMNS = [
  {
    heading: 'Product',
    links: ['ProSuite', 'Catalog', 'Marketing', 'AgencyDesk', 'Managed services', 'Automation'],
  },
  {
    heading: 'Company',
    links: ['About', 'Pricing', 'News', 'Request a demo', 'Contact'],
  },
  {
    heading: 'Resources',
    links: ['Blog', 'Support', 'Sign in', 'Create account'],
  },
];

const TEAM_MEMBERS = [
  {
    img: '/assets/team/member-daniel.png',
    name: 'Maya Reyes',
    role: 'Growth Strategist',
  },
  {
    img: '/assets/team/member-daniel.png',
    name: 'Priya Nair',
    role: 'AgencyDesk Lead',
  },
  {
    img: '/assets/team/member-daniel.png',
    name: 'Jordan Blake',
    role: 'IT Lead',
  },
  {
    img: '/assets/team/member-daniel.png',
    name: 'Sam Whitfield',
    role: 'AI Engineer',
  },
  {
    img: '/assets/team/member-daniel.png',
    name: 'Elena Voss',
    role: 'Head of Claims',
  },
  {
    img: '/assets/team/member-daniel.png',
    name: 'Marcus Chen',
    role: 'Data Scientist',
  },
  {
    img: '/assets/team/member-daniel.png',
    name: 'Aisha Rahman',
    role: 'Client Success Lead',
  },
  {
    img: '/assets/team/member-daniel.png',
    name: 'Daniel Ortiz',
    role: 'Compliance Officer',
  },
  {
    img: '/assets/team/member-daniel.png',
    name: 'Naomi Park',
    role: 'Product Designer',
  },
];

export default function Home() {
  return (
    <>
      <main className="hero">
        <nav className="navbar">
          <div className="logo">
            <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="10" y="4" width="20" height="16" rx="3.5" fill="white" />
              <path d="M10 8L20 14L30 8" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="2" y="8" width="6" height="2" rx="1" fill="white" />
              <rect x="0" y="12" width="8" height="2" rx="1" fill="white" />
              <rect x="4" y="16" width="4" height="2" rx="1" fill="white" />
            </svg>
            <span className="logo-text">InsureTechOS</span>
          </div>
          <ul className="nav-links">
            <li><Link href="#">Features</Link></li>
            <li><Link href="#">Pricing</Link></li>
            <li><Link href="#">Integrations</Link></li>
            <li><Link href="#">Resources</Link></li>
            <li><Link href="#">Company</Link></li>
            <li><Link href="#">Contact</Link></li>
          </ul>
          <div className="nav-cta">
            <Link href="#" className="btn btn-light">Get started</Link>
          </div>
        </nav>

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge">
            <p className="badge-text"><span className="badge-tag">New</span> Insurance Agency Management</p>
          </div>
          <h1 className="headline">The modern insurance agency management platform.</h1>
          <p className="subheadline">Streamline quoting, client management, commissions, and carrier workflows for your insurance agency.</p>
          <div className="hero-actions">
            <Link href="#" className="btn btn-dark btn-lg">Get started &rarr;</Link>
            <Link href="#" className="btn btn-light btn-lg">Know more</Link>
          </div>
        </motion.div>

        <motion.div
          className="dashboard-wrapper"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="dashboard-glass">
            <img src="/assets/hero-dashboard.jpeg" alt="Product dashboard" className="dashboard-mockup" />
          </div>
        </motion.div>
      </main>

      <HowItWorksSection />

      <section className="team-section">
        <motion.div
          className="team-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="team-title">The people behind the platform &mdash; insurance operators, engineers, and strategists working as an extension of your agency.</h2>
        </motion.div>

        <div className="team-strip">
          <div className="team-track">
            {[...TEAM_MEMBERS, ...TEAM_MEMBERS].map((person, i) => (
              <div className="team-card" key={`${person.name}-${i}`}>
                <img src={person.img} alt={`${person.name}, ${person.role}`} className="team-card-img" />
                <div className="team-card-overlay">
                  <span className="team-card-role">{person.role}</span>
                  <span className="team-card-name">{person.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="comparison-section">
        <motion.div
          className="comparison-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="comparison-title">You don&apos;t need more tools. You need<br />one operating system.</h2>
        </motion.div>

        <div className="compare-legend">
          <span className="compare-legend-old">Traditional</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
          <span className="compare-legend-new">InsureTechOS</span>
        </div>

        <div className="compare-list">
          {[
            {
              area: 'Staffing',
              trad: 'Hire full-time, train for months',
              neu: 'Insurance-trained VAs in days',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="8" r="3" />
                  <path d="M3 20c0-3.3 2.7-5 6-5s6 1.7 6 5" />
                  <circle cx="17.5" cy="9" r="2.3" />
                  <path d="M16 14.2c2.6.3 4.5 1.7 4.5 4.3" />
                </svg>
              ),
            },
            {
              area: 'IT',
              trad: 'Break-fix or in-house team',
              neu: '24/7 managed services & helpdesk',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="6" rx="1.5" />
                  <rect x="3" y="14" width="18" height="6" rx="1.5" />
                  <circle cx="7" cy="7" r="0.8" fill="currentColor" stroke="none" />
                  <circle cx="7" cy="17" r="0.8" fill="currentColor" stroke="none" />
                </svg>
              ),
            },
            {
              area: 'Quoting',
              trad: 'Manual forms, 45-90 min each',
              neu: 'AI autofill, submit in clicks',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8z" />
                </svg>
              ),
            },
            {
              area: 'Commissions',
              trad: 'CSV reconciliation by hand',
              neu: 'Auto-imported, auto-matched',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="3" width="14" height="18" rx="2" />
                  <path d="M9 8h6M9 12h6M9 16h3" />
                </svg>
              ),
            },
            {
              area: 'Marketing',
              trad: 'Generic agency or DIY',
              neu: 'Insurance-specific strategy & creative',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11v2a1 1 0 0 0 1 1h2l4.5 3V7L6 10H4a1 1 0 0 0-1 1z" />
                  <path d="M14 8a3 3 0 0 1 0 8" />
                  <path d="M17 5a7 7 0 0 1 0 14" />
                </svg>
              ),
            },
          ].map((row, i) => (
            <motion.div
              className="compare-row"
              key={row.area}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <div className="compare-row-label">
                <span className="compare-row-icon">{row.icon}</span>
                {row.area}
              </div>
              <div className="compare-row-shift">
                <span className="compare-old">{row.trad}</span>
                <svg className="compare-row-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
                <span className="compare-new">{row.neu}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="reviews-section">
        <motion.div
          className="reviews-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="reviews-badge">
            <GoogleMark className="reviews-badge-mark" />
            Google Reviews
          </span>
          <h2 className="reviews-title">Verified reviews from our customers.</h2>
          <p className="reviews-subtext">
            Real feedback from agency owners and managers running their day-to-day on InsureTechOS.
          </p>
        </motion.div>

        <div className="reviews-grid">
          {SAMPLE_REVIEWS.map((review, i) => (
            <motion.div
              className={i === 0 ? 'review-card review-card-featured' : 'review-card'}
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {i === 0 && (
                <svg className="review-quote-mark" viewBox="0 0 32 24" fill="currentColor" aria-hidden="true">
                  <path d="M9.3 0C4.1 2.9 0 8.4 0 14.6 0 19.9 3.4 24 8.4 24c4.2 0 7.3-3.3 7.3-7.4 0-3.8-2.7-6.6-6.2-6.6-.7 0-1.3.1-1.7.3C8.3 6.6 10.9 3 15 .8L9.3 0zm17.4 0C21.5 2.9 17.4 8.4 17.4 14.6c0 5.3 3.4 9.4 8.4 9.4 4.2 0 7.3-3.3 7.3-7.4 0-3.8-2.7-6.6-6.2-6.6-.7 0-1.3.1-1.7.3.6-3.7 3.2-7.3 7.3-9.5L26.7 0z" />
                </svg>
              )}

              <div className="review-card-top">
                <span className="review-avatar" style={{ background: review.color }}>{review.initials}</span>
                <div className="review-card-meta">
                  <span className="review-card-name">{review.name}</span>
                  <span className="review-card-role">{review.role}</span>
                </div>
                <GoogleMark className="review-card-mark" />
              </div>

              <div className="review-stars" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, s) => (
                  <svg key={s} viewBox="0 0 24 24" fill={s < review.rating ? '#F5B400' : 'none'} stroke="#F5B400" strokeWidth="1.6" strokeLinejoin="round">
                    <path d="M12 3.5l2.47 5.18 5.53.71-4.06 3.99 1 5.62L12 16.2l-4.94 2.8 1-5.62-4.06-3.99 5.53-.71z" />
                  </svg>
                ))}
              </div>

              <p className="review-card-quote">{review.quote}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="reviews-cta"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span>Already work with us?</span>
          <Link href="#" className="reviews-cta-btn">
            <GoogleMark className="reviews-cta-mark" />
            Leave us a review
          </Link>
        </motion.div>
      </section>

      <FaqSection />
      <FinalCtaSection />
      <SiteFooter />
    </>
  );
}

function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  const current = HOW_IT_WORKS_STEPS[activeStep];

  return (
    <section className="feature-section">
      <motion.div
        className="feature-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="feature-section-title">Every request, routed the moment it lands.</h2>
        <p className="feature-section-subtitle">Trigger, verification, and classification happen automatically, so the right person already has full context.</p>
      </motion.div>

      <div className="step-tabs" role="tablist" aria-label="How it works">
        {HOW_IT_WORKS_STEPS.map((step, i) => (
          <button
            key={step.tab}
            role="tab"
            aria-selected={activeStep === i}
            className={`step-tab ${activeStep === i ? 'active' : ''}`}
            onClick={() => setActiveStep(i)}
          >
            {activeStep === i && (
              <motion.span className="step-tab-pill" layoutId="step-tab-pill" transition={{ type: 'spring', stiffness: 500, damping: 40 }} />
            )}
            {step.tab}
          </button>
        ))}
      </div>

      <div className="feature-card">
        <div className="feature-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            >
              <h3 className="feature-heading">{current.heading}</h3>
              <p className="feature-description">{current.description}</p>
            </motion.div>
          </AnimatePresence>
          <button className="btn btn-dark feature-btn">Get started</button>
        </div>

        <div className="feature-visual">
          <img src="/assets/team_sec_bg.jpeg" className="visual-backdrop" alt="" />
          <div className="visual-tint"></div>

          <div className="screenshot-frame">
            <img src="/assets/dashboard.png" alt="Automation workflow classifying and routing an inbound request" className="screenshot-img" />
            <motion.div
              className="screenshot-highlight"
              animate={current.highlight}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function FaqSection() {
  const [openIndex, setOpenIndex] = useState(-1);
  const [answerReady, setAnswerReady] = useState(false);

  useEffect(() => {
    setAnswerReady(false);
    if (openIndex === -1) return;
    const t = setTimeout(() => setAnswerReady(true), 550);
    return () => clearTimeout(t);
  }, [openIndex]);

  return (
    <section className="faq-section">
      <motion.div
        className="faq-header"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="faq-title">Answers, before you have to ask.</h2>
      </motion.div>

      <div className="faq-thread">
        {FAQ_ITEMS.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <motion.div
              className="faq-pair"
              key={item.question}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="faq-q-row">
                {isOpen && (
                  <span className="faq-q-avatar" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="3.2" />
                      <path d="M5 20c0-3.6 3-6 7-6s7 2.4 7 6" />
                    </svg>
                  </span>
                )}
                <button
                  type="button"
                  className={`faq-q-bubble${isOpen ? ' is-active' : ''}`}
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                >
                  {item.question}
                </button>
              </div>

              <AnimatePresence initial={false} mode="wait">
                {isOpen && (
                  <motion.div
                    className="faq-a-wrap"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="faq-a-row">
                      {answerReady ? (
                        <motion.span
                          className="faq-a-bubble"
                          initial={{ opacity: 0, scale: 0.94 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        >
                          {item.answer}
                        </motion.span>
                      ) : (
                        <span className="faq-typing" aria-label="Typing">
                          <span />
                          <span />
                          <span />
                        </span>
                      )}
                      <span className="faq-a-avatar" aria-hidden="true">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="5" y="9" width="14" height="10" rx="3" />
                          <path d="M12 9V6" />
                          <circle cx="12" cy="4.7" r="1.1" fill="currentColor" stroke="none" />
                          <circle cx="9.3" cy="14" r="1.1" fill="currentColor" stroke="none" />
                          <circle cx="14.7" cy="14" r="1.1" fill="currentColor" stroke="none" />
                          <path d="M9.3 17.3h5.4" />
                        </svg>
                      </span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function FinalCtaSection() {
  return (
    <section className="cta-section">
      <motion.div
        className="cta-copy"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="cta-title">
          Stop stitching tools together. <em>Start running your agency.</em>
        </h2>
        <p className="cta-subtext">14-day free trial. Talk to a real human in under 24 hours. No credit card to start.</p>

        <div className="cta-actions">
          <Link href="#" className="btn btn-dark btn-lg">
            Start free trial &rarr;
          </Link>
          <Link href="#" className="btn btn-light btn-lg">
            See pricing
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <motion.div
          className="footer-banner"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="footer-banner-copy">
            <span className="footer-banner-label">Stay in the loop</span>
            <p className="footer-banner-hint">Product updates, release notes, and agency growth playbooks, straight to your inbox.</p>
          </div>
          <form className="footer-subscribe-row" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="you@agency.com" className="footer-input" aria-label="Email address" />
            <button type="submit" className="footer-subscribe-btn">Subscribe</button>
          </form>
        </motion.div>

        <nav className="footer-nav-row" aria-label="Footer">
          {FOOTER_COLUMNS.map((col) => (
            <div className="footer-nav-group" key={col.heading}>
              <span className="footer-nav-heading">{col.heading}</span>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <Link href="#" className="footer-nav-link">
                      <span className="footer-nav-link-text">{link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="footer-nav-group footer-connect">
            <span className="footer-nav-heading">Connect</span>
            <p className="footer-connect-text">Questions about a plan? Our team replies within one business day.</p>
            <a href="mailto:hello@insuretechos.com" className="footer-connect-email">hello@insuretechos.com</a>
            <div className="footer-social-row">
              <a href="#" className="footer-social-btn" aria-label="X (Twitter)">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4l16 16M20 4L4 20" />
                </svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
                  <path d="M7.5 10.5v6M7.5 7.75v.01M12 16.5v-3.5c0-1.4 1-2.5 2.3-2.5s2.2 1 2.2 2.5v3.5" />
                </svg>
              </a>
              <a href="#" className="footer-social-btn" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <path d="M16.8 7.2h.01" />
                </svg>
              </a>
            </div>
          </div>
        </nav>

        <div className="footer-bottom">
          <div className="footer-brand-mark">
            <svg width="26" height="20" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="10" y="4" width="20" height="16" rx="3.5" fill="#0F172A" />
              <path d="M10 8L20 14L30 8" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="2" y="8" width="6" height="2" rx="1" fill="#0F172A" />
              <rect x="0" y="12" width="8" height="2" rx="1" fill="#0F172A" />
              <rect x="4" y="16" width="4" height="2" rx="1" fill="#0F172A" />
            </svg>
            <div className="footer-legalese">
              <span>&copy; 2026 InsureTechOS, LLC. All rights reserved.</span>
              <span>2655 N Ocean Dr, Ste 405, Riviera Beach, FL 33404</span>
            </div>
          </div>
          <div className="footer-legal-links">
            <Link href="#">Terms</Link>
            <Link href="#">Privacy</Link>
            <Link href="#">Cookies</Link>
            <Link href="#">Acceptable use</Link>
            <Link href="#">DMCA</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function GoogleMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFC107" d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20c11.045 0 20-8.955 20-20 0-1.341-.138-2.65-.389-3.917z" />
      <path fill="#FF3D00" d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z" />
      <path fill="#4CAF50" d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z" />
      <path fill="#1976D2" d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917z" />
    </svg>
  );
}
