
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language].hero;

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-galaxy-dark via-galaxy-purple/20 to-galaxy-blue/20 opacity-60" />
      </div>

      <div className="max-w-5xl mx-auto px-4 z-10 text-center">
        <div className="mb-10">
          <div className="relative inline-block animate-float mb-8">
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full border-4 border-primary/50 glow overflow-hidden">
              <img 
                src="/lovable-uploads/aac9526e-a473-49b8-9c8d-c866e1e30555.png" 
                alt="Mohamed Refaay" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          
          <h2 className="text-lg md:text-xl mb-2 animate-fade-in opacity-80">
            {t.greeting}
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gradient glow-text animate-pulse-slow">
            {t.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto animate-fade-in">
            {t.tagline}
          </p>
          
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground glow"
            onClick={() => {
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            {t.ctaButton}
          </Button>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
