import React from 'react';
import { CheckCircle2, Trophy, Users, Star, Check } from 'lucide-react';
import './TrustSection.css';

const statItems = [
  { icon: Trophy, value: '12,000+', label: 'Farmers', color: 'inherit' },
  { icon: Users, value: '3,500+', label: 'Traders', color: '#1a7a4a' },
  { icon: Star, value: '98%', label: 'Satisfaction Rate', color: '#e8a020', filled: true }
];

const trustFeatures = [
  {
    title: 'No middlemen, better profits!',
    desc: 'Trade directly with buyers. Keep more of your earnings every harvest.'
  },
  {
    title: 'Easy & transparent deals!',
    desc: 'Every transaction is recorded, clear and accountable from start to finish.'
  },
  {
    title: 'Built on trust & transparency',
    desc: 'KisanBridge has earned the trust of thousands of farmers & traders across Andhra Pradesh.'
  }
];

const farmerAvatars = [
  { img: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=150&h=150', location: 'Kurnool' },
  { img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150', location: 'Guntur' },
  { img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150', location: 'Anantapur' }
];

const TrustSection = () => {
  return (
    <section className="trust-section" id="about">
      <div className="container trust-container">
        
        <div className="trust-content">
          <h2 className="trust-title">Trusted by 12,000+ Farmers Across Andhra Pradesh</h2>
          <p className="trust-subtitle">Join 12,000+ farmers and traders who trust KisanBridge for fair, direct trade.</p>
          
          <div className="trust-features">
            {trustFeatures.map((item, idx) => (
              <div key={idx} className="feature-item">
                <div className="feature-icon-wrap">
                  <CheckCircle2 size={24} />
                </div>
                <div className="feature-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
            
            <div style={{ marginTop: '16px' }}>
              <button className="btn btn-primary">Join Now</button>
            </div>
          </div>
        </div>
        
        <div className="trust-visual">
          <div className="stats-card">
            {statItems.map((stat, idx) => (
              <div key={idx} className="stat-row" style={{ color: stat.color }}>
                <stat.icon 
                  className="stat-icon" 
                  size={28} 
                  fill={stat.filled ? stat.color : 'none'} 
                />
                <div>
                  <span className="stat-value" style={{ color: stat.color }}>{stat.value}</span>{' '}
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            ))}
            
            <div className="divider"></div>
            
            <div className="farmers-avatars">
              {farmerAvatars.map((farmer, idx) => (
                <div key={idx} className="avatar-item">
                  <img src={farmer.img} alt={`Farmer in ${farmer.location}`} className="avatar-img" />
                  <span className="avatar-location">
                    <span className="location-dot"></span> {farmer.location}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="trust-footer-badge">
              <Check size={18} /> Trusted by Farmers & Traders
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TrustSection;
