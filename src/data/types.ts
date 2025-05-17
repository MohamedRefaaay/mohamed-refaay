
export type NavbarContent = {
  home: string;
  about: string;
  skills: string;
  projects: string;
  store: string;
  contact: string;
};

export type HeroContent = {
  greeting: string;
  name: string;
  tagline: string;
  ctaButton: string;
};

export type AboutContent = {
  title: string;
  name: string;
  age: string;
  college: string;
  bio: string;
};

export type SkillContent = {
  name: string;
  level: string;
};

export type SkillsContent = {
  title: string;
  list: Array<SkillContent>;
};

export type ProjectContent = {
  title: string;
  description: string;
  image?: string;
};

export type ProjectsContent = {
  title: string;
  list: Array<ProjectContent>;
};

export type CertificatesContent = {
  title: string;
  list: Array<{
    name: string;
  }>;
};

export type StoreProduct = {
  title: string;
  description: string;
  price: string;
  icon: any;
};

export type StoreContent = {
  title: string;
  description: string;
  cta: string;
  products: Array<StoreProduct>;
};

export type MarketingContent = {
  title: string;
  globalTitle: string;
  globalDescription: string;
  growthTitle: string;
  growthDescription: string;
  innovationTitle: string;
  innovationDescription: string;
  ctaTitle: string;
  ctaDescription: string;
  ctaButton: string;
  featuresTitle: string;
  features: string[];
};

export type ContactContent = {
  title: string;
  whatsapp: string;
  telegram: string;
  email: string;
  downloadCV: string;
};

export type FooterContent = {
  rights: string;
};

export type LanguageContent = {
  navbar: NavbarContent;
  hero: HeroContent;
  about: AboutContent;
  skills: SkillsContent;
  projects: ProjectsContent;
  certificates: CertificatesContent;
  store: StoreContent;
  marketing: MarketingContent;
  contact: ContactContent;
  footer: FooterContent;
};

export type ContentType = {
  [key: string]: LanguageContent;
};
