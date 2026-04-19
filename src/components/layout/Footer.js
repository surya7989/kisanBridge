import React from 'react';
import { Phone, Mail } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css';

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
            <a href="tel:+919876543210" className="contact-item">
              <Phone size={16} />
              <span>Call Us: +91 9876543210</span>
            </a>
            <a href="mailto:info@kisanbridge.com" className="contact-item">
              <Mail size={16} />
              <span>Email: info@kisanbridge.com</span>
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="copyright">
            &copy; 2026 KisanBridge. All rights reserved.
          </div>
          <div className="social-links">
            <a href="#" className="social-icon" aria-label="Facebook">
              <FaFacebook size={16} />
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <FaTwitter size={16} />
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <FaInstagram size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
