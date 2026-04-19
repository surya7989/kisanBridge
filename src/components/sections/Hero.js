import React from 'react';
import { Leaf } from 'lucide-react';
import './Hero.css';

const audiences = [
  {
    title: 'For Farmers',
    icon: '🌾',
    color: 'green',
    features: ['List your produce & get best offers']
  },
  {
    title: 'For Traders',
    icon: '🧺',
    color: 'amber',
    features: ['Discover and buy crops nearby']
  },
  {
    title: 'For Storages',
    icon: '🏭',
    color: 'blue',
    features: ['Manage inventory & track in/out']
  }
];

const Hero = () => {
  return (
    <section className="hero-section" id="home">
      <div className="container">
        <h1 className="hero-title">Built for Farmers, Traders & Storages</h1>
        
        <div className="hero-divider">
          <div className="divider-line"></div>
          <Leaf className="divider-icon" size={20} />
          <div className="divider-line"></div>
        </div>

        <div className="audience-cards">
          {audiences.map((aud, index) => (
            <div key={index} className={`aud-card aud-card--${aud.color}`}>
              <div className="aud-card-header">
                <div className="aud-icon-wrap">
                  {aud.icon}
                </div>
                <h3>{aud.title}</h3>
              </div>
              <ul className="aud-features">
                {aud.features.map((feat, i) => (
                  <li key={i}>
                    <span className="feature-dot"></span>
                    {feat}
                  </li>
                ))}
              </ul>
              <div className="aud-card-body">
                <div className="aud-card-decor"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
