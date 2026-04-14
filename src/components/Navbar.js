import React, { useState, useEffect } from 'react';
import { Plus, MessageSquare } from 'lucide-react';
import './Navbar.css';

const navLinks = ['Home', 'About', 'Features', 'For Storages', 'Contact Us'];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [showAddModal, setShowAddModal] = useState(false);
  const [showMessages, setShowMessages] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);

    // Scroll Spy
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = ['home', 'about', 'features', 'for-storages', 'contact-us']
      .map(id => document.getElementById(id))
      .filter(el => el !== null);

    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__inner container">
          <a href="#home" className="navbar__logo">
            Kisan<span>Bridge</span>
          </a>

          <nav className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
            {navLinks.map((link, i) => {
              const id = link.toLowerCase().replace(/\s+/g, '-');
              return (
                <a
                  key={i}
                  href={`#${id}`}
                  className={`navbar__link ${activeSection === id ? 'navbar__link--active' : ''}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              );
            })}
          </nav>

          <div className="navbar__actions">
            <button className="navbar__btn navbar__btn--icon" aria-label="Add" onClick={() => setShowAddModal(true)}>
              <Plus size={16} strokeWidth={2} />
            </button>
            <button className="navbar__btn navbar__btn--msg" aria-label="Messages" onClick={() => setShowMessages(true)}>
              <MessageSquare size={16} strokeWidth={1.5} />
            </button>
          </div>

          <button
            className={`navbar__toggle ${menuOpen ? 'navbar__toggle--active' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      {/* Add Crop Modal */}
      {showAddModal && (
        <div className="modal-overlay">
          <div className="modal-card">
            <h3 className="modal-card__title">List New Crop</h3>
            <input className="modal-card__input" type="text" placeholder="Crop Name (e.g. Wheat, Rice)" />
            <input className="modal-card__input" type="number" placeholder="Quantity (in Quintals)" />
            <div className="modal-card__actions">
              <button className="modal-card__btn modal-card__btn--submit" onClick={() => setShowAddModal(false)}>Submit Listing</button>
              <button className="modal-card__btn modal-card__btn--cancel" onClick={() => setShowAddModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* Messages Sidebar */}
      {showMessages && (
        <div className="msg-overlay">
          <div className="msg-panel">
            <div className="msg-panel__header">
              <h3>Messages</h3>
              <button className="msg-panel__close" onClick={() => setShowMessages(false)}>&times;</button>
            </div>
            <div className="msg-panel__body">
              <p className="msg-panel__empty">No new messages today.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
