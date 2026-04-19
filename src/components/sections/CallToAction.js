import React from 'react';
import { Download, Phone } from 'lucide-react';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section" id="contact">
      <div className="cta-decor cta-decor-1"></div>
      <div className="cta-decor cta-decor-2"></div>
      
      <div className="container cta-container">
        <h2 className="cta-title">Get Started with <span>KisanBridge</span> Today!</h2>
        <p className="cta-desc">
          Join thousands of farmers and traders in Andhra Pradesh. Start listing your crops or finding the best deals in just minutes.
        </p>
        
        <div className="cta-actions">
          <button className="btn-cta btn-cta-light">
            <Download size={20} />
            Download App
          </button>
          
          <button className="btn-cta btn-cta-outline">
            <Phone size={20} />
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
