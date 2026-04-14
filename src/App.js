import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AudienceStrip from './components/AudienceStrip';
import TrustSection from './components/TrustSection';
import HowItWorks from './components/HowItWorks';
import KeyFeatures from './components/KeyFeatures';
import StorageSection from './components/StorageSection';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <AudienceStrip />
      <TrustSection />
      <HowItWorks />
      <KeyFeatures />
      <StorageSection />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
