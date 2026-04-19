import React from 'react';
import { Leaf } from 'lucide-react';
import './AudienceStrip.css';

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

const AudienceStrip = () => {
  return (
    <section className="audience-section" id="audience">
      <div className="container">
        <h2 className="audience-title">Built for Farmers, Traders & Storages</h2>
        
        <div className="audience-divider">
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

export default AudienceStrip;
