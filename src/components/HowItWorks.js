import React from 'react';
import { FileText, Search, QrCode, Truck, ArrowRight } from 'lucide-react';
import './HowItWorks.css';

const steps = [
  {
    number: '01',
    icon: (
      <FileText size={32} strokeWidth={1.8} />
    ),
    label: 'List Your Crop',
    desc: 'Add your crop details, quantity and expected price in minutes.',
  },
  {
    number: '02',
    icon: (
      <Search size={32} strokeWidth={1.8} />
    ),
    label: 'Traders Find & Request Sample',
    desc: 'Local traders discover your listing and request a crop sample.',
  },
  {
    number: '03',
    icon: (
      <QrCode size={32} strokeWidth={1.8} />
    ),
    label: 'QR Code Verification',
    desc: 'Verify the sample authenticity using our secure QR code system.',
  },
  {
    number: '04',
    icon: (
      <Truck size={32} strokeWidth={1.8} />
    ),
    label: 'Deal & Deliver',
    desc: 'Finalize the deal at the agreed price and arrange delivery.',
  },
];

function HowItWorks() {
  return (
    <section className="how-it-works">
      <div className="container">
        <div className="how-it-works__header">
          <span className="section-tag">Process</span>
          <h2 className="section-heading">
            How <span>KisanBridge</span> Works
          </h2>
          <p className="section-sub">
            Four simple steps to connect farmers with traders and get the best prices for your harvest.
          </p>
        </div>

        <div className="how-it-works__steps">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              <div className="step-card">
                <div className="step-card__num">{step.number}</div>
                <div className="step-card__icon">{step.icon}</div>
                <h4 className="step-card__label">{step.label}</h4>
                <p className="step-card__desc">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="step-arrow" aria-hidden="true">
                  <ArrowRight size={20} color="#1a7a4a" strokeWidth={1.8} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
