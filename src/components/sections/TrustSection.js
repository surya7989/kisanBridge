import React from 'react';
import { CheckCircle2, Trophy, Users, Star, Check } from 'lucide-react';
import './TrustSection.css';

const TrustSection = () => {
  return (
    <section className="trust-section" id="about">
      <div className="container trust-container">
        
        <div className="trust-content">
          <h2 className="trust-title">Trusted by 12,000+ Farmers Across Andhra Pradesh</h2>
          <p className="trust-subtitle">Join 12,000+ farmers and traders who trust KisanBridge for fair, direct trade.</p>
          
          <div className="trust-features">
            <div className="feature-item">
              <div className="feature-icon-wrap">
                <CheckCircle2 size={24} />
              </div>
              <div className="feature-text">
                <h4>No middlemen, better profits!</h4>
                <p>Trade directly with buyers. Keep more of your earnings every harvest.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-wrap">
                <CheckCircle2 size={24} />
              </div>
              <div className="feature-text">
                <h4>Easy & transparent deals!</h4>
                <p>Every transaction is recorded, clear and accountable from start to finish.</p>
              </div>
            </div>
            
            <div className="feature-item">
              <div className="feature-icon-wrap">
                <CheckCircle2 size={24} />
              </div>
              <div className="feature-text">
                <h4>Built on trust & transparency</h4>
                <p>KisanBridge has earned the trust of thousands of farmers & traders across Andhra Pradesh.</p>
              </div>
            </div>
            
            <div style={{ marginTop: '16px' }}>
              <button className="btn btn-primary">Join Now</button>
            </div>
          </div>
        </div>
        
        <div className="trust-visual">
          <div className="stats-card">
            <div className="stat-row">
              <Trophy className="stat-icon" size={28} />
              <div><span className="stat-value">12,000+</span> <span className="stat-label">Farmers</span></div>
            </div>
            <div className="stat-row" style={{ color: '#1a7a4a' }}>
              <Users className="stat-icon" size={28} />
              <div><span className="stat-value" style={{ color: '#1a7a4a' }}>3,500+</span> <span className="stat-label">Traders</span></div>
            </div>
            <div className="stat-row" style={{ color: '#e8a020' }}>
              <Star fill="#e8a020" className="stat-icon" size={28} />
              <div><span className="stat-value" style={{ color: '#e8a020' }}>98%</span> <span className="stat-label">Satisfaction Rate</span></div>
            </div>
            
            <div className="divider"></div>
            
            <div className="farmers-avatars">
              <div className="avatar-item">
                <img src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&q=80&w=150&h=150" alt="Farmer" className="avatar-img" />
                <span className="avatar-location"><span className="location-dot"></span> Kurnool</span>
              </div>
              <div className="avatar-item">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150" alt="Farmer" className="avatar-img" />
                <span className="avatar-location"><span className="location-dot"></span> Guntur</span>
              </div>
              <div className="avatar-item">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150" alt="Farmer" className="avatar-img" />
                <span className="avatar-location"><span className="location-dot" style={{ background: 'transparent' }}></span> Anantapur</span>
              </div>
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
