
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { User, GraduationCap, Calendar } from 'lucide-react';

const AboutSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language].about;

  return (
    <section id="about" className="section-container">
      <h2 className="section-title text-center">{t.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Info Cards */}
        <div className="space-y-6">
          <Card className="cosmic-card">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{t.name}</h3>
                <p className="text-muted-foreground">{t.age}</p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="cosmic-card">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{language === 'en' ? 'Education' : 'التعليم'}</h3>
                <p className="text-muted-foreground">{t.college}</p>
              </div>
            </CardContent>
          </Card>

          <Card className="cosmic-card">
            <CardContent className="p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <Calendar className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">{language === 'en' ? 'Student at' : 'طالب في'}</h3>
                <p className="text-muted-foreground">{language === 'en' ? 'Ain Shams University' : 'جامعة عين شمس'}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bio */}
        <div className="md:col-span-2">
          <Card className="h-full cosmic-card">
            <CardContent className="p-6 flex flex-col justify-center h-full">
              <h3 className="text-xl font-semibold mb-4 text-gradient">
                {language === 'en' ? 'Biography' : 'السيرة الذاتية'}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t.bio}
              </p>
              
              <div className="mt-6">
                <h4 className="font-semibold mb-2">
                  {language === 'en' ? 'Occupation' : 'المهنة'}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    language === 'en' ? 'Commerce Student' : 'طالب تجارة',
                    language === 'en' ? 'Video Designer' : 'مصمم فيديو',
                    language === 'en' ? 'Digital Marketer' : 'مسوق إلكتروني',
                    language === 'en' ? 'App Developer' : 'مطور تطبيقات'
                  ].map((item, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 bg-primary/20 rounded-full text-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
