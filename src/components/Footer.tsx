
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';

const Footer: React.FC = () => {
  const { language } = useLanguage();
  const t = content[language].footer;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 mt-12 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          &copy; {currentYear} Mohamed Refaay. {t.rights}.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#home" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {language === 'en' ? 'Home' : 'الرئيسية'}
          </a>
          <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {language === 'en' ? 'About' : 'عنّي'}
          </a>
          <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {language === 'en' ? 'Skills' : 'المهارات'}
          </a>
          <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {language === 'en' ? 'Projects' : 'المشاريع'}
          </a>
          <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
            {language === 'en' ? 'Contact' : 'اتصل بي'}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
