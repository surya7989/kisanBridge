import React from 'react';
import { CheckCircle2, ShieldCheck } from 'lucide-react';
import './TrustSection.css';

const trustPoints = [
  {
    title: 'No middlemen, better profits!',
    desc: 'Trade directly with buyers. Keep more of your earnings every harvest.',
    icon: (
      <CheckCircle2 size={22} strokeWidth={1.5} />
    ),
  },
  {
    title: 'Easy & transparent deals!',
    desc: 'Every transaction is recorded, clear and accountable from start to finish.',
    icon: (
      <CheckCircle2 size={22} strokeWidth={1.5} />
    ),
  },
];

function TrustSection() {
  return (
    <section className="trust" id="about">
      <div className="container trust__inner">
        <div className="trust__visual-side">
          <div className="trust__image-card">
            <div className="trust__handshake-icon">
              <ShieldCheck size={48} color="#1a7a4a" strokeWidth={1.5} />
            </div>
            <p className="trust__image-caption">
              Farmers and Traders across Andhra Pradesh trust KisanBridge for fair, direct trade
            </p>

            <div className="trust__stats">
              <div className="trust__stat">
                <span className="trust__stat-num">12,000+</span>
                <span className="trust__stat-label">Active Farmers</span>
              </div>
              <div className="trust__stat-divider"></div>
              <div className="trust__stat">
                <span className="trust__stat-num">3,500+</span>
                <span className="trust__stat-label">Verified Traders</span>
              </div>
              <div className="trust__stat-divider"></div>
              <div className="trust__stat">
                <span className="trust__stat-num">98%</span>
                <span className="trust__stat-label">Satisfaction Rate</span>
              </div>
            </div>
          </div>
        </div>

        <div className="trust__content-side">
          <span className="section-tag">Why Us</span>
          <h2 className="section-heading">
            <span>Trusted</span> by Farmers &amp; Traders
          </h2>
          <p className="trust__intro">
            KisanBridge removes barriers between farmers and traders, creating a direct, fair marketplace built on trust and transparency.
          </p>

          <div className="trust__points">
            {trustPoints.map((point, i) => (
              <div className="trust__point" key={i}>
                <div className="trust__point-icon">{point.icon}</div>
                <div className="trust__point-body">
                  <h4 className="trust__point-title">{point.title}</h4>
                  <p className="trust__point-desc">{point.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustSection;
