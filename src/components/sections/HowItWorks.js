import { ArrowRight } from 'lucide-react';
import processIconsImage from '../../assets/images/process_icons.png';
import './HowItWorks.css';

const processData = [
  {
    num: '01',
    title: 'List Your Crop',
    desc: 'Add your crop details, quantity and expected price in minutes.',
  },
  {
    num: '02',
    title: 'Traders Find & Request Sample',
    desc: 'Local traders discover your listing and request a crop sample.',
  },
  {
    num: '03',
    title: 'QR Code Verification',
    desc: 'Verify the sample authenticity using our secure QR code system.',
  },
  {
    num: '04',
    title: 'Deal & Deliver',
    desc: 'Finalize the deal at the agreed price and arrange delivery.',
  }
];

const HowItWorks = () => {
  return (
    <section className="process-section" id="features">
      <div className="container">
        
        <div className="process-header">
          <span className="process-tag">PROCESS</span>
          <h2 className="process-title">How <span>KisanBridge</span> Works</h2>
          <p className="process-subtitle">Four simple steps to connect farmers with traders and get the best prices for your harvest.</p>
        </div>

        <div className="process-grid">
          
          <div className="process-arrow process-arrow-1"><ArrowRight size={20} /></div>
          <div className="process-arrow process-arrow-2"><ArrowRight size={20} /></div>
          <div className="process-arrow process-arrow-3"><ArrowRight size={20} /></div>

          {processData.map((step, idx) => (
            <div key={idx} className="process-card">
              <div className="process-num">{step.num}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
              
              <div className="process-img-wrap">
                <div 
                  className="process-icon-sprite" 
                  style={{ 
                    backgroundImage: `url(${processIconsImage})`,
                    backgroundPosition: `${(idx * 100) / 3}% 0`
                  }} 
                />
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;
