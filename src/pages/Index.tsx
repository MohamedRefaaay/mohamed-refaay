
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import StoreSection from '@/components/StoreSection';
import MarketingSection from '@/components/MarketingSection';
import ContactSection from '@/components/ContactSection';
import ParticleBackground from '@/components/ParticleBackground';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <ParticleBackground />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <StoreSection />
        <MarketingSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
