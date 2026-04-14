import React from 'react';
import { Download, Smartphone, Play, Star, Check } from 'lucide-react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg-pattern" aria-hidden="true">
        <div className="hero__circle hero__circle--1"></div>
        <div className="hero__circle hero__circle--2"></div>
        <div className="hero__circle hero__circle--3"></div>
      </div>

      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-dot"></span>
            Serving Andhra Pradesh Farmers
          </div>

          <h1 className="hero__title">
            Connecting Farmers,<br />
            Traders &amp; Storages
          </h1>

          <p className="hero__subtitle">
            Sell your crops at the best price. Find local buyers.<br />
            Manage your storage efficiently.
          </p>

          <div className="hero__actions">
            <button className="hero__btn hero__btn--primary">
              <Download size={18} strokeWidth={2} />
              Download App
            </button>
            <button className="hero__btn hero__btn--outline">
              Register Now
            </button>
          </div>

          <div className="hero__stores">
            <div className="hero__store-badge">
              <Smartphone size={18} strokeWidth={2} />
              <div>
                <span className="store-label">Download on the</span>
                <span className="store-name">App Store</span>
              </div>
            </div>
            <div className="hero__store-badge">
              <Play size={18} strokeWidth={2} />
              <div>
                <span className="store-label">Get it on</span>
                <span className="store-name">Google Play</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__phone-frame">
            <div className="hero__phone-screen">
              <div className="phone-header">
                <div className="phone-avatar"></div>
                <div className="phone-header-text">
                  <div className="phone-line phone-line--name"></div>
                  <div className="phone-line phone-line--sub"></div>
                </div>
              </div>
              <div className="phone-card phone-card--green">
                <span className="phone-card-label">Today's Price</span>
                <span className="phone-card-value">₹ 2,400 / qtl</span>
                <span className="phone-card-crop">Wheat — Kurnool Mandi</span>
              </div>
              <div className="phone-card phone-card--amber">
                <span className="phone-card-label">New Offer</span>
                <span className="phone-card-value">₹ 2,650 / qtl</span>
                <span className="phone-card-crop">Rice — 3 traders</span>
              </div>
              <div className="phone-qr">
                <div className="qr-grid">
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div
                      key={i}
                      className={`qr-cell ${[0,1,2,3,4,5,6,7,14,21,22,23,24,18,12,6,8,16,20].includes(i) ? 'qr-cell--dark' : ''}`}
                    ></div>
                  ))}
                </div>
                <span className="qr-label">Scan to Verify</span>
              </div>
              <div className="phone-actions">
                <div className="phone-action-btn phone-action-btn--green">List Crop</div>
                <div className="phone-action-btn phone-action-btn--outline">View Offers</div>
              </div>
            </div>
            <div className="hero__phone-notch"></div>
          </div>

          <div className="hero__float hero__float--1">
            <Star size={16} fill="#e8a020" color="#e8a020" />
            <span>Best Prices</span>
          </div>

          <div className="hero__float hero__float--2">
            <Check size={14} color="#1a7a4a" strokeWidth={3} />
            <span>Verified Traders</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
