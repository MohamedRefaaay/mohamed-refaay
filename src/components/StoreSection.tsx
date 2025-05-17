
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { ShoppingCart, ShoppingBag, Filter, Search } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const StoreSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = content[language].store;
  
  const [cartItems, setCartItems] = useState<Array<{id: number, title: string, price: string, quantity: number}>>([]);
  
  const products = t.products;

  const handleAddToCart = (product: any) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    
    toast({
      title: language === 'en' ? 'Added to cart' : 'تمت الإضافة إلى السلة',
      description: `${product.title} (${product.price})`,
      duration: 2000,
    });
  };

  return (
    <section id="store" className="py-16 bg-accent/5">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">{t.title}</h2>
          <p className="text-lg text-muted-foreground">{t.description}</p>
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
          <div className="relative w-full md:w-64">
            <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4`} />
            <input 
              type="text" 
              className={`w-full rounded-md border border-border bg-background px-9 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary ${isRTL ? 'pr-10' : 'pl-10'}`}
              placeholder={language === 'en' ? 'Search products...' : 'البحث عن منتجات...'}
            />
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            {language === 'en' ? 'Filter' : 'تصفية'}
          </Button>
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <Card key={index} className="bg-background border border-border overflow-hidden transition-all hover:shadow-lg">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {/* Using dynamic icon rendering */}
                  {React.createElement(product.icon, { className: "h-12 w-12 text-primary" })}
                </div>
                <CardTitle className="text-xl">{product.title}</CardTitle>
                <CardDescription>{product.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mt-2">
                  <span className="text-2xl font-bold text-primary">{product.price}</span>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button 
                  variant="outline" 
                  className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
                  onClick={() => handleAddToCart({id: index, title: product.title, price: product.price})}
                >
                  <ShoppingCart className="h-4 w-4" />
                  {language === 'en' ? 'Add to Cart' : 'أضف للسلة'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="mt-10 p-4 border border-border rounded-lg bg-background/50 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">
                  {language === 'en' ? 'Shopping Cart' : 'عربة التسوق'} 
                  ({cartItems.reduce((total, item) => total + item.quantity, 0)})
                </h3>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setCartItems([])}
              >
                {language === 'en' ? 'Clear' : 'مسح'}
              </Button>
            </div>
            
            <div className="space-y-2">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {language === 'en' ? `Quantity: ${item.quantity}` : `الكمية: ${item.quantity}`}
                    </p>
                  </div>
                  <p className="font-semibold">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* CTA Button */}
        <div className="mt-10 text-center">
          <Button size="lg" className="px-8 bg-primary hover:bg-primary/90">
            {t.cta}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
