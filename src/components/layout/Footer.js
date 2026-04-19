import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

const contactInfo = [
  { icon: Phone, text: 'Call Us: +91 9876543210', href: 'tel:+919876543210' },
  { icon: Mail, text: 'Email: info@kisanbridge.com', href: 'mailto:info@kisanbridge.com' }
];

const socialLinks = [
  { icon: FaFacebook, label: 'Facebook', href: '#' },
  { icon: FaTwitter, label: 'Twitter', href: '#' },
  { icon: FaInstagram, label: 'Instagram', href: '#' }
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <a href="#home" className="brand-logo">KisanBridge</a>
            <p>Connecting Farmers, Traders & Storages across Andhra Pradesh.</p>
          </div>
          
          <div className="footer__contact">
            {contactInfo.map((item, idx) => (
              <a key={idx} href={item.href} className="contact-item">
                <item.icon size={16} />
                <span>{item.text}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <div className="copyright">
            &copy; {new Date().getFullYear()} KisanBridge. All rights reserved.
          </div>
          <div className="social-links">
            {socialLinks.map((social, idx) => (
              <a key={idx} href={social.href} className="social-icon" aria-label={social.label}>
                <social.icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
