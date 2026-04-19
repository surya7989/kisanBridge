import React from 'react';
import { Apple, Play, Check, Star } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container hero-container">
        
        <div className="hero-content">
          <h1 className="hero-title">Connecting Farmers, Traders & Storage Owners</h1>
          <p className="hero-subtitle">
            Sell your crops at the best market price. Connect with verified buyers and manage storage easily.
          </p>
          
          <a href="#register" className="hero-btn">
            Register Now
          </a>
          
          <div className="app-buttons">
            <a href="#appstore" className="store-btn">
              <Apple size={24} />
              <div className="store-text">
                <small>Download on the</small>
                <span>App Store</span>
              </div>
            </a>
            <a href="#playstore" className="store-btn">
              <Play size={24} />
              <div className="store-text">
                <small>Get it on</small>
                <span>Google Play</span>
              </div>
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="float-badge badge-left">
            <Check className="badge-icon" size={18} /> Verified Traders
          </div>
          <div className="float-badge badge-right">
            <Star className="badge-icon star" size={18} fill="#fbbf24" /> Best Prices
          </div>

          <div className="phone-mockup">
            <div className="phone-header">
              <div className="profile-icon"></div>
              <div className="header-lines">
                <div className="h-line" style={{ width: '40%' }}></div>
                <div className="h-line" style={{ width: '80%' }}></div>
              </div>
            </div>
            
            <div className="phone-body">
              <div className="mockup-card card-green">
                <span className="mc-label">TODAY'S PRICE</span>
                <span className="mc-value">₹ 2,400 / qtl</span>
                <span className="mc-sub">Wheat — Kurnool Mandi</span>
              </div>
              
              <div className="mockup-card card-amber">
                <span className="mc-label">NEW OFFER</span>
                <span className="mc-value">₹ 2,650 / qtl</span>
                <span className="mc-sub">Rice — 3 traders</span>
              </div>
              
              <div className="mockup-card card-gray">
                <div className="qr-grid">
                  <div className="qr-cell"></div><div className="qr-cell"></div><div className="qr-cell"></div><div className="qr-cell empty"></div>
                  <div className="qr-cell"></div><div className="qr-cell empty"></div><div className="qr-cell"></div><div className="qr-cell"></div>
                  <div className="qr-cell"></div><div className="qr-cell"></div><div className="qr-cell empty"></div><div className="qr-cell"></div>
                  <div className="qr-cell"></div><div className="qr-cell empty"></div><div className="qr-cell"></div><div className="qr-cell"></div>
                </div>
                <span className="mc-sub">Scan to Verify</span>
              </div>
            </div>
            
            <div className="phone-footer">
              <div className="m-btn m-btn-primary">List Crop</div>
              <div className="m-btn m-btn-outline">View Offers</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
