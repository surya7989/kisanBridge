import React from 'react';
import './AudienceStrip.css';

const cards = [
  {
    icon: '🌾',
    title: 'For Farmers',
    bullet: 'List your produce & get best offers',
    colorClass: 'aud--green',
  },
  {
    icon: '🧺',
    title: 'For Traders',
    bullet: 'Discover and buy crops nearby',
    colorClass: 'aud--amber',
  },
  {
    icon: '🏭',
    title: 'For Storages',
    bullet: 'Manage inventory & track in/out',
    colorClass: 'aud--blue',
  },
];

function AudienceStrip() {
  return (
    <section className="audience">
      <div className="container audience__grid">
        {cards.map((card, i) => (
          <div className={`audience__card ${card.colorClass}`} key={i}>
            <div className="audience__icon-wrap">
              <span className="audience__icon" role="img" aria-label={card.title}>
                {card.icon}
              </span>
            </div>
            <div className="audience__body">
              <h3 className="audience__title">{card.title}</h3>
              <p className="audience__bullet">
                <span className="audience__dot" aria-hidden="true"></span>
                {card.bullet}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AudienceStrip;
