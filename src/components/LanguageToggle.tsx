
import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-1 px-3"
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4" />
      <span>{language === 'en' ? 'عربي' : 'English'}</span>
    </Button>
  );
};

export default LanguageToggle;
