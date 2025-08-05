// src/components/LandingPage.js
import React from 'react';
import Fonts from './Fonts';
import Header from './Header';
import NavBar from './NavBar';
import HeroSection from './HeroSection';
import ProductsSection from './ProductsSection';
import FeaturesSection from './FeaturesSection';
import Footer from './Footer';

const LandingPage = () => (
  <>
    <Fonts />
    <Header />
    <NavBar />
    <main>
      <HeroSection />
      <ProductsSection />
      <FeaturesSection />
    </main>
    <Footer />
  </>
);

export default LandingPage;
