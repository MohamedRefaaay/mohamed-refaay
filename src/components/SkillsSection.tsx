
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const SkillsSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language].skills;

  // Map skill levels to percentage values
  const getSkillLevel = (level: string) => {
    if (level === 'Excellent' || level === 'ممتاز') return 95;
    if (level === 'Professional' || level === 'محترف') return 90;
    if (level === 'Very Good' || level === 'جيد جداً') return 80;
    if (level === 'Good' || level === 'جيد') return 70;
    return 60; // Default
  };

  // Planet colors
  const planetColors = [
    'from-purple-500 to-blue-500',
    'from-pink-500 to-purple-500',
    'from-blue-500 to-cyan-500',
    'from-indigo-500 to-purple-500',
    'from-violet-500 to-fuchsia-500',
    'from-cyan-500 to-blue-500',
  ];

  return (
    <section id="skills" className="section-container">
      <h2 className="section-title text-center">{t.title}</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {t.list.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className={`planet w-24 h-24 mb-4 bg-gradient-to-br ${planetColors[index % planetColors.length]}`}>
              <span className="relative z-10 text-white font-bold">{skill.name}</span>
            </div>
            
            <Card className="w-full cosmic-card">
              <CardContent className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="text-sm text-muted-foreground">{skill.level}</span>
                </div>
                <Progress value={getSkillLevel(skill.level)} className="h-2 bg-primary/20" />
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
