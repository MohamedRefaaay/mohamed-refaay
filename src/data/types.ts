
export type NavbarContent = {
  home: string;
  about: string;
  skills: string;
  projects: string;
  store: string;
  contact: string;
  products: string;
  cart: string;
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
  id: string;
  title: string;
  description: string;
  price: string;
  priceValue: number;
  category: string;
  image?: string;
  icon: any;
  featured: boolean;
  rating?: number;
  reviews?: number;
};

export type StoreCategory = {
  id: string;
  name: string;
};

export type StoreContent = {
  title: string;
  description: string;
  cta: string;
  viewAllProducts: string;
  featuredTitle: string;
  categories: Array<StoreCategory>;
  products: Array<StoreProduct>;
  addToCart: string;
  emptyCart: string;
  cartTitle: string;
  quantity: string;
  checkout: string;
  continueShopping: string;
  productDetails: string;
  relatedProducts: string;
  searchPlaceholder: string;
  filterBy: string;
  sortBy: string;
  reviews: string;
  checkoutTitle: string;
  shipping: string;
  payment: string;
  orderSummary: string;
  placeOrder: string;
  customerService: string;
  faq: string;
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
