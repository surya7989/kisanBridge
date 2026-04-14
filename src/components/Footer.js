import React from 'react';
import { FaFacebookF, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const footerLinks = ['About', 'Features', 'For Storages', 'Contact Us'];

const socialLinks = [
  {
    label: 'Facebook',
    color: '#1877F2',
    icon: <FaFacebookF size={14} />,
  },
  {
    label: 'WhatsApp',
    color: '#25D366',
    icon: <FaWhatsapp size={14} />,
  },
  {
    label: 'YouTube',
    color: '#FF0000',
    icon: <FaYoutube size={14} />,
  },
];

function Footer() {
  return (
    <footer className="footer" id="contact-us">
      <div className="footer__top">
        <div className="container footer__top-inner">
          <div className="footer__brand">
            <span className="footer__logo">Kisan<span>Bridge</span></span>
            <p className="footer__tagline">Connecting Farmers, Traders &amp; Storages across Andhra Pradesh.</p>
          </div>

          <div className="footer__contact-row">
            <div className="footer__contact-item">
              <MapPin size={14} strokeWidth={1.4} />
              Serving Farmers in Andhra Pradesh
            </div>
            <div className="footer__contact-item">
              <Phone size={14} strokeWidth={1.4} />
              Call Us: +91 9876543210
            </div>
            <div className="footer__contact-item">
              <Mail size={14} strokeWidth={1.4} />
              Email: info@kisanbridge.com
            </div>
          </div>
        </div>
      </div>

      <div className="footer__divider"></div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <nav className="footer__links" aria-label="Footer navigation">
            {footerLinks.map((link, i) => (
              <a href={`#${link.toLowerCase().replace(/\s+/g, '-')}`} className="footer__link" key={i}>
                {link}
              </a>
            ))}
          </nav>

          <div className="footer__social" aria-label="Social media links">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href="#social"
                className="footer__social-icon"
                style={{ background: s.color }}
                aria-label={s.label}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer__copy">
        <div className="container">
          <p>© {new Date().getFullYear()} KisanBridge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
