import React from 'react';
import { Check } from 'lucide-react';
import './StorageSection.css';

const StorageSection = () => {
  return (
    <section className="storage-section" id="storages">
      <div className="container storage-container">
        
        <div className="storage-content">
          <span className="storage-tag">FOR STORAGES</span>
          <h2 className="storage-title">Optimize Your <span>Warehouse</span> Operations</h2>
          <p className="storage-desc">
            Connect directly with farmers looking for safe storage. Track inventory, manage digital receipts, and maximize your storage capacity occupancy effortlessly.
          </p>
          
          <div className="storage-features">
            <div className="s-feature">
              <Check size={18} className="s-feature-icon" strokeWidth={3} />
              Real-time stock tracking
            </div>
            <div className="s-feature">
              <Check size={18} className="s-feature-icon" strokeWidth={3} />
              Automated digital weight receipts
            </div>
          </div>
        </div>

        <div className="storage-visual">
          <div className="portal-card">
            <h3>Storage Management System</h3>
            <p>Full suite of tools available on our platform.</p>
            <button className="btn btn-primary">
              Access Portal
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StorageSection;
