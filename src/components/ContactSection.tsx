
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Phone, Mail, MessageSquare } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language].contact;

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com' },
    { name: 'TikTok', url: 'https://tiktok.com' },
    { name: 'YouTube', url: 'https://youtube.com' },
  ];

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title text-center">{t.title}</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="cosmic-card">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6 text-gradient">
              {language === 'en' ? 'Get In Touch' : 'تواصل معي'}
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <p>{t.whatsapp}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <p>{t.telegram}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <p>{t.email}</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Button className="w-full bg-primary hover:bg-primary/90 glow">
                <Download className="mr-2 h-4 w-4" />
                {t.downloadCV}
              </Button>
            </div>
          </CardContent>
        </Card>
        
        <Card className="cosmic-card">
          <CardContent className="p-6">
            <h3 className="text-xl font-semibold mb-6 text-gradient">
              {language === 'en' ? 'Social Media' : 'وسائل التواصل الاجتماعي'}
            </h3>
            
            <div className="grid grid-cols-1 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-primary/10 hover:bg-primary/20 rounded-lg transition-colors"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{link.name.charAt(0)}</span>
                  </div>
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-muted-foreground text-sm">
                {language === 'en' 
                  ? 'Let\'s connect and create together!' 
                  : 'دعنا نتواصل ونبدع معًا!'}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
