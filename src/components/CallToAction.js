import React from 'react';
import { Download, Phone } from 'lucide-react';
import './CallToAction.css';

function CallToAction() {
  return (
    <section className="cta">
      <div className="cta__bg-pattern" aria-hidden="true">
        <div className="cta__ring cta__ring--1"></div>
        <div className="cta__ring cta__ring--2"></div>
      </div>

      <div className="container cta__inner">
        <h2 className="cta__heading">
          Get Started with <span>KisanBridge</span> Today!
        </h2>
        <p className="cta__sub">
          Join thousands of farmers and traders in Andhra Pradesh. Start listing your crops or finding the best deals in just minutes.
        </p>
        <div className="cta__actions">
          <button className="cta__btn cta__btn--primary">
            <Download size={18} strokeWidth={2} />
            Download App
          </button>
          <button className="cta__btn cta__btn--outline">
            <Phone size={18} strokeWidth={1.5} />
            Contact Us
          </button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
