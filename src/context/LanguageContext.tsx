
import React, { createContext, useContext, useState, useEffect } from 'react';

type LanguageContextType = {
  language: 'en' | 'ar';
  setLanguage: (language: 'en' | 'ar') => void;
  isRTL: boolean;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'ar'>('en');
  const isRTL = language === 'ar';

  useEffect(() => {
    // Set dir attribute on html element for RTL support
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
    
    // Save language preference
    localStorage.setItem('language', language);
  }, [language, isRTL]);

  // Load saved language preference on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage === 'ar' || savedLanguage === 'en') {
      setLanguage(savedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, isRTL }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
