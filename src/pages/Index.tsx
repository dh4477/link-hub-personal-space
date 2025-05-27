
import React from 'react';
import Hero from '../components/Hero';
import LinksDirectory from '../components/LinksDirectory';
import Services from '../components/Services';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LinksDirectory />
      <Services />
      <Footer />
    </div>
  );
};

export default Index;
