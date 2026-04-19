import React from 'react';
import { Plus, MessageSquare } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container">
        <a href="#home" className="navbar__brand">
          Kisan<span>Bridge</span>
        </a>

        <nav className="navbar__nav">
          <a href="#home" className="nav-item active">Home</a>
          <a href="#about" className="nav-item">About</a>
          <a href="#features" className="nav-item">Features</a>
          <a href="#storages" className="nav-item">For Storages</a>
          <a href="#contact" className="nav-item">Contact Us</a>
        </nav>

        <div className="navbar__actions">
          <button className="action-btn action-btn--light" aria-label="Add Listing">
            <Plus size={20} />
          </button>
          <button className="action-btn action-btn--dark" aria-label="Messages">
            <MessageSquare size={18} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
