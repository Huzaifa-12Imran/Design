"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <svg width="32" height="24" viewBox="0 0 32 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="4" width="20" height="16" rx="3.5" fill="#3B82F6" />
            <path d="M10 8L20 14L30 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <rect x="2" y="8" width="6" height="2" rx="1" fill="#3B82F6" />
            <rect x="0" y="12" width="8" height="2" rx="1" fill="#3B82F6" />
            <rect x="4" y="16" width="4" height="2" rx="1" fill="#3B82F6" />
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
          <Link href="#" className="btn btn-dark">Get started</Link>
        </div>
      </nav>

      <main className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="badge">
            <span className="badge-new">New</span>
            <span className="badge-text">Insurance Agency Management</span>
          </div>
          <h1 className="headline">The modern insurance agency<br />management platform.</h1>
          <p className="subheadline">Streamline quoting, client management, commissions,<br />and carrier workflows for your insurance agency.</p>
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
          <img src="/assets/why-to-incorporate-in-delaware.jpg" alt="Why to Incorporate Interface" className="dashboard-mockup" />
        </motion.div>
      </main>

      <section className="feature-section">
        <div className="tabs-container">
          <div className="tabs">
            <button className="tab">Trigger</button>
            <button className="tab">Check</button>
            <button className="tab active">Ai Action</button>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-content">
            <span className="step-label">STEP 03</span>
            <h2 className="feature-heading">Classify & label</h2>
            <p className="feature-description">
              The request is tagged by intent &mdash;<br />quote, claim, policy update, or urgent &mdash;<br />so the right agency action follows.
            </p>
            <button className="btn btn-dark feature-btn">Get started</button>
          </div>
          
          <div className="feature-visual">
             <div className="visual-beam"></div>
             
             {/* Decorative dashed orbit */}
             <svg className="orbital-lines" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M -50 150 Q 200 250 450 150" stroke="white" strokeWidth="2" strokeDasharray="6 6" opacity="0.6" />
               <path d="M 50 100 C 150 50 250 50 350 100" stroke="white" strokeWidth="2" strokeDasharray="6 6" opacity="0.3" />
             </svg>

             {/* Pills */}
             <div className="pill pill-urgent">
                <span className="icon">🔔</span> Urgent
             </div>
             
             <div className="pill pill-support">
                <span className="icon">🎧</span> Claim
             </div>
             
             <div className="pill pill-sales">
                <span className="icon">📊</span> Quote
             </div>

             {/* Central Icon */}
             <div className="center-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="6" width="16" height="12" rx="2" fill="#3B82F6"/>
                  <path d="M4 8L12 13L20 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M0 8H2M0 12H2M0 16H2" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round"/>
                </svg>
             </div>
             
             {/* Paper Plane */}
             <svg className="paper-plane" width="48" height="48" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
               <path d="M2 12l20-9-9 20-3-8-8-3z" fill="white"/>
             </svg>

             {/* Bottom Clouds Simulation */}
             <div className="visual-clouds">
               <div className="cloud-bubble cb-1"></div>
               <div className="cloud-bubble cb-2"></div>
               <div className="cloud-bubble cb-3"></div>
               <div className="cloud-bubble cb-4"></div>
             </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="cloud-bubble sc-1"></div>
        <div className="cloud-bubble sc-2"></div>
        <div className="cloud-bubble sc-3"></div>
        <div className="cloud-bubble sc-4"></div>

        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">Our services</span>
          <h2 className="services-title">Everything an independent agency<br />needs &mdash; under one roof.</h2>
        </motion.div>

        <div className="services-grid">
          {[
            {
              img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&h=300&q=80',
              name: 'Maya',
              role: 'Growth Strategist',
              title: 'Marketing',
              desc: 'Insurance-specific campaigns, content, and lead funnels – built by humans, optimized by AI.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 11v2a1 1 0 0 0 1 1h2l4.5 3V7L6 10H4a1 1 0 0 0-1 1z" />
                  <path d="M14 8a3 3 0 0 1 0 8" />
                  <path d="M17 5a7 7 0 0 1 0 14" />
                </svg>
              ),
            },
            {
              img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&h=300&q=80',
              name: 'Priya',
              role: 'AgencyDesk staff',
              title: 'AgencyDesk',
              desc: 'Insurance-trained staff who handle service work so your producers sell. $975 / VA / mo.',
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
              img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&h=300&q=80',
              name: 'Jordan',
              role: 'IT Lead',
              title: 'Managed IT',
              desc: "24/7 monitoring, security, and helpdesk for agencies that can't afford downtime.",
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
              img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&h=300&q=80',
              name: 'Sam',
              role: 'AI Engineer',
              title: 'Automation & AI',
              desc: 'Custom agents, RAG assistants, and workflow automation tuned to your book of business.',
              icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="7" y="7" width="10" height="10" rx="2" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.5 4.5l2 2M17.5 17.5l2 2M19.5 4.5l-2 2M6.5 17.5l-2 2" />
                </svg>
              ),
            },
          ].map((service, i) => (
            <motion.div
              className="service-card"
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="service-visual">
                <svg className="service-orbit" viewBox="0 0 300 120" fill="none">
                  <path d="M -20 90 Q 150 150 320 70" stroke="white" strokeWidth="2" strokeDasharray="5 5" opacity="0.35" />
                </svg>
                <div className="service-cloud service-cloud-1"></div>
                <div className="service-cloud service-cloud-2"></div>
                <div className="service-cloud service-cloud-3"></div>

                <div className="service-avatar">
                  <img src={service.img} alt={service.name} />
                  <span className="service-avatar-badge">{service.icon}</span>
                </div>
                <div className="service-person">
                  <strong>{service.name}</strong>
                  <span>{service.role}</span>
                </div>
              </div>
              <div className="service-info">
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-desc">{service.desc}</p>
                <Link href="#" className="service-link">Explore &rarr;</Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="comparison-section">
        <svg className="orbital-lines comparison-orbit" viewBox="0 0 800 300" fill="none">
          <path d="M -50 220 Q 400 320 850 180" stroke="#3B82F6" strokeWidth="2" strokeDasharray="6 6" opacity="0.3" />
        </svg>
        <svg className="paper-plane comparison-plane" width="44" height="44" viewBox="0 0 24 24" fill="#3B82F6" style={{ opacity: 0.18 }}>
          <path d="M2 12l20-9-9 20-3-8-8-3z" />
        </svg>
        <div className="cloud-bubble sc-1"></div>
        <div className="cloud-bubble sc-2"></div>
        <div className="cloud-bubble sc-3"></div>
        <div className="cloud-bubble sc-4"></div>

        <motion.div
          className="comparison-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="overline">The old way vs. the new</span>
          <h2 className="comparison-title">You don&apos;t need more tools. You need<br /><em>one operating system.</em></h2>
        </motion.div>

        <div className="comparison-columns-label">
          <span className="comparison-columns-spacer"></span>
          <span className="comparison-columns-old">Traditional</span>
          <span className="comparison-columns-arrow-spacer"></span>
          <span className="comparison-columns-new">InsureTechOS</span>
        </div>

        <div className="comparison-table-wrapper">
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
              className="compare-row-card"
              key={row.area}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className="compare-row-head">
                <div className="compare-row-icon">{row.icon}</div>
                <span className="compare-row-label">{row.area}</span>
              </div>

              <div className="compare-row-body">
                <div className="compare-pill compare-pill-old">
                  <svg className="compare-x-icon" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#CBD5E1" /><path d="M9 9l6 6M15 9l-6 6" stroke="white" strokeWidth="2" strokeLinecap="round" /></svg>
                  <span>{row.trad}</span>
                </div>

                <svg className="compare-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>

                <div className="compare-pill compare-pill-new">
                  <svg className="check-icon check-icon-sm" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#3B82F6" /><path d="M7 12L10.5 15.5L17 9" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  <span>{row.neu}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
