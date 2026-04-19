import React from 'react';
import './styles/global.css';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import Hero from './components/sections/Hero';
import TrustSection from './components/sections/TrustSection';
import HowItWorks from './components/sections/HowItWorks';
import StorageSection from './components/sections/StorageSection';
import CallToAction from './components/sections/CallToAction';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <HowItWorks />
        <StorageSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

export default App;
