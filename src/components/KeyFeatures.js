import React from 'react';
import { MapPin, TrendingUp, QrCode, Building } from 'lucide-react';
import './KeyFeatures.css';

const features = [
  {
    icon: (
      <MapPin size={28} strokeWidth={1.8} />
    ),
    title: 'Local Crop Search',
    desc: 'Find crops available near you. Search by location, crop type, or price range instantly.',
    color: 'feat--green',
  },
  {
    icon: (
      <TrendingUp size={28} strokeWidth={2} />
    ),
    title: 'Live Market Prices',
    desc: 'Real-time mandi prices updated daily so you always know the fair market rate.',
    color: 'feat--amber',
  },
  {
    icon: (
      <QrCode size={28} strokeWidth={1.8} />
    ),
    title: 'QR Code Sample Access',
    desc: 'Each crop sample is secured with a unique QR code for verified, tamper-proof access.',
    color: 'feat--blue',
  },
  {
    icon: (
      <Building size={28} strokeWidth={1.8} />
    ),
    title: 'Storage Management',
    desc: 'Manage your storage facility inventory, track goods in and out with full visibility.',
    color: 'feat--coral',
  },
];

function KeyFeatures() {
  return (
    <section className="key-features" id="features">
      <div className="container">
        <div className="key-features__header">
          <span className="section-tag">Features</span>
          <h2 className="section-heading">Key Features</h2>
          <p className="section-sub">
            Everything you need to buy, sell and store crops — all in one platform.
          </p>
        </div>

        <div className="key-features__grid">
          {features.map((feat, i) => (
            <div className={`feat-card ${feat.color}`} key={i}>
              <div className="feat-card__icon">{feat.icon}</div>
              <h4 className="feat-card__title">{feat.title}</h4>
              <p className="feat-card__desc">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default KeyFeatures;
