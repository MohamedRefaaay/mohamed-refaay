
import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Laptop, Camera, Smartphone } from 'lucide-react';

const StoreSection: React.FC = () => {
  const { language } = useLanguage();
  
  // نص محتوى المتجر بالعربية والإنجليزية
  const content = {
    en: {
      title: "Store",
      description: "Explore our digital products and services",
      cta: "Browse Products",
      products: [
        {
          title: "Video Editing",
          description: "Professional video editing services using CapCut",
          price: "$99",
          icon: Camera
        },
        {
          title: "Digital Marketing",
          description: "Comprehensive marketing strategies for your business",
          price: "$149",
          icon: Laptop
        },
        {
          title: "App Design",
          description: "Custom mobile application design and consultation",
          price: "$199",
          icon: Smartphone
        }
      ]
    },
    ar: {
      title: "المتجر",
      description: "استكشف منتجاتنا وخدماتنا الرقمية",
      cta: "تصفح المنتجات",
      products: [
        {
          title: "مونتاج فيديو",
          description: "خدمات مونتاج فيديو احترافية باستخدام CapCut",
          price: "٩٩$",
          icon: Camera
        },
        {
          title: "تسويق رقمي",
          description: "استراتيجيات تسويق شاملة لنشاطك التجاري",
          price: "١٤٩$",
          icon: Laptop
        },
        {
          title: "تصميم تطبيقات",
          description: "تصميم تطبيقات جوال مخصصة واستشارات",
          price: "١٩٩$",
          icon: Smartphone
        }
      ]
    }
  };

  const t = content[language];
  
  return (
    <section id="store" className="py-16 bg-accent/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">{t.title}</h2>
          <p className="text-lg text-muted-foreground">{t.description}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.products.map((product, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg border border-border"
            >
              <div className="p-6">
                <div className="flex justify-center mb-4">
                  <product.icon className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                  <Button variant="outline" className="flex items-center">
                    <ShoppingCart className="mr-2 h-4 w-4" />
                    {language === 'en' ? 'Add to Cart' : 'أضف للسلة'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-10 text-center">
          <Button size="lg" className="px-8">
            {t.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
