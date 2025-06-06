
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, Mail, Instagram } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language].contact;

  // Extract the phone number from WhatsApp text
  const getWhatsAppNumber = () => {
    const numberMatch = t.whatsapp.match(/\d+/);
    return numberMatch ? numberMatch[0] : '';
  };
  
  // Extract email from email text
  const getEmailAddress = () => {
    const emailMatch = t.email.match(/[\w.-]+@[\w.-]+\.\w+/);
    return emailMatch ? emailMatch[0] : '';
  };
  
  // Extract Telegram username from Telegram text
  const getTelegramUsername = () => {
    const usernameMatch = t.telegram.match(/@[\w_]+/);
    return usernameMatch ? usernameMatch[0].substring(1) : '';
  };

  const socialLinks = [
    { 
      name: 'Instagram', 
      url: 'https://www.instagram.com/kalo_4ha?igsh=cDY0ZzM1bGk4eWIx', 
      icon: Instagram 
    },
    { 
      name: 'TikTok (@mohamed__refaay)', 
      url: 'https://www.tiktok.com/@mohamed__refaay?_t=ZS-8vTSCvbEDnr&_r=1', 
      iconComponent: () => (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="h-5 w-5 text-white"
        >
          <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"/>
          <path d="M15 8h.01"/>
          <path d="M11 8a7 7 0 0 0-7 7v4a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-4a7 7 0 0 0-7-7z"/>
          <path d="M15 6a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v2h6V6z"/>
          <path d="M15 9v3a5 5 0 0 1-10 0v-3"/>
          <path d="M19 9v3a5 5 0 0 1-5 5"/>
        </svg>
      )
    },
  ];

  const contactLinks = [
    { 
      name: t.whatsapp, 
      url: `https://wa.me/${getWhatsAppNumber()}`,
      iconComponent: () => (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-5 w-5 text-primary"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/>
          <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/>
          <path d="M14 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1Z"/>
          <path d="M9.5 13.5c.5 1 1.5 1 2 1s1.5 0 2-1"/>
        </svg>
      )
    },
    { 
      name: t.telegram, 
      url: `https://t.me/${getTelegramUsername()}`,
      iconComponent: () => (
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          width="24" 
          height="24" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          className="h-5 w-5 text-primary"
        >
          <path d="m15 10-4 4 6 6 4-16-18 7 4 2 2 6 3-4"/>
        </svg>
      )
    },
    { 
      name: t.email, 
      url: `mailto:${getEmailAddress()}`,
      icon: Mail
    },
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
              {contactLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-primary transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    {link.iconComponent ? (
                      <link.iconComponent />
                    ) : (
                      link.icon && React.createElement(link.icon, { className: "h-5 w-5 text-primary" })
                    )}
                  </div>
                  <p>{link.name}</p>
                </a>
              ))}
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
                    {link.iconComponent ? (
                      <link.iconComponent />
                    ) : (
                      link.icon && React.createElement(link.icon, { className: "h-5 w-5 text-white" })
                    )}
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
