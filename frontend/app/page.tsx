import React from 'react';
import Navigation from '@/src/widgets/Navigation/Navigation';
import HeroSection from '@/src/widgets/HeroSection/HeroSection';
import StatsBanner from '@/src/widgets/StatsBanner/StatsBanner';
import AboutSection from '@/src/widgets/AboutSection/AboutSection';
import ServicesSection from '@/src/widgets/ServicesSection/ServicesSection';
import PortfolioSection from '@/src/widgets/PortfolioSection/PortfolioSection';
import ContactSection from '@/src/widgets/ContactSection/ContactSection';
import Footer from '@/src/widgets/Footer/Footer';

export default function HomePage() {
  return (
    <main className="min-h-screen w-full bg-surface overflow-hidden">
      <Navigation />
      <HeroSection />
      <StatsBanner />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <Footer />
    </main>
  );
}