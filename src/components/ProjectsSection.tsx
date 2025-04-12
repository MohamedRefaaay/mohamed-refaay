
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { Rocket } from 'lucide-react';

const ProjectsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language].projects;

  return (
    <section id="projects" className="section-container">
      <h2 className="section-title text-center">{t.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.list.map((project, index) => (
          <Card key={index} className="cosmic-card hover:translate-y-[-5px] transition-transform duration-300">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 rounded-full bg-primary/20 flex items-center justify-center">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gradient">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-6 text-center text-gradient">
          {language === 'en' ? 'Certificates & Achievements' : 'الشهادات والإنجازات'}
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content[language].certificates.list.map((cert, index) => (
            <div 
              key={index} 
              className="bg-primary/10 border border-primary/20 rounded-lg p-4 flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">{index + 1}</span>
              </div>
              <span>{cert.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
