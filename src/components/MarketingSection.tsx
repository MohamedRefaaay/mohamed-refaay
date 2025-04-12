
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Rocket, Globe, Zap } from 'lucide-react';

const MarketingSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language].marketing;

  return (
    <section id="marketing" className="section-container">
      <h2 className="section-title text-center">{t.title}</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="cosmic-card p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <Globe className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gradient">{t.globalTitle}</h3>
          <p className="text-muted-foreground">{t.globalDescription}</p>
        </div>
        
        <div className="cosmic-card p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <Rocket className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gradient">{t.growthTitle}</h3>
          <p className="text-muted-foreground">{t.growthDescription}</p>
        </div>
        
        <div className="cosmic-card p-6 flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <Zap className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-3 text-gradient">{t.innovationTitle}</h3>
          <p className="text-muted-foreground">{t.innovationDescription}</p>
        </div>
      </div>
      
      <div className="cosmic-card p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h3 className="text-2xl font-bold mb-4 text-gradient">{t.ctaTitle}</h3>
          <p className="text-lg mb-6">{t.ctaDescription}</p>
          <Button size="lg" className="glow">
            {t.ctaButton}
          </Button>
        </div>
        <div className="md:w-1/2 bg-primary/10 p-6 rounded-lg">
          <h4 className="text-xl font-semibold mb-4">{t.featuresTitle}</h4>
          <ul className="space-y-3">
            {t.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center">
                  <span className="text-xs">✓</span>
                </div>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MarketingSection;
