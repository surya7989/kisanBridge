import React from 'react';
import './StorageSection.css';

function StorageSection() {
  return (
    <section id="for-storages" className="storage-section">
      <div className="container">
        <div className="storage-section__grid">
          <div>
            <span className="section-tag">For Storages</span>
            <h2 className="section-heading">Optimize Your <span>Warehouse</span> Operations</h2>
            <p className="section-sub storage-section__desc">
              Connect directly with farmers looking for safe storage. Track inventory, manage digital receipts, and maximize your storage capacity occupancy effortlessly.
            </p>
            <ul className="storage-section__list">
              <li className="storage-section__list-item">
                <div className="storage-section__check">✓</div>
                Real-time stock tracking
              </li>
              <li className="storage-section__list-item">
                <div className="storage-section__check">✓</div>
                Automated digital weight receipts
              </li>
            </ul>
          </div>
          <div className="storage-section__card">
             <h3 className="storage-section__card-title">Storage Management System</h3>
             <p className="storage-section__card-sub">Full suite of tools available on our platform.</p>
             <button className="storage-section__btn">Access Portal</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StorageSection;
