
import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ShoppingBag, Filter, Search, Star } from 'lucide-react';
import { toast } from "@/hooks/use-toast";
import { Link } from 'react-router-dom';

const StoreSection: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = content[language].store;
  
  const [cartItems, setCartItems] = useState<Array<{id: string, title: string, price: string, quantity: number}>>([]);
  
  // Only show featured products in this section
  const featuredProducts = t.products.filter(product => product.featured);

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

        {/* Featured Products */}
        <div className="mb-10">
          <h3 className="text-2xl font-semibold mb-6">{t.featuredTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProducts.map((product, index) => (
              <Card key={index} className="bg-background border border-border overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <Badge variant="outline" className="bg-primary/10 text-primary">
                      {t.categories.find(cat => cat.id === product.category)?.name || product.category}
                    </Badge>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="ml-1 text-sm font-medium">{product.rating}</span>
                    </div>
                  </div>
                  <div className="flex justify-center my-4">
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
                    onClick={() => handleAddToCart({id: product.id, title: product.title, price: product.price})}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    {t.addToCart}
                  </Button>
                  <Link to={`/products/${product.id}`}>
                    <Button variant="ghost">
                      {t.productDetails}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
        
        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <div className="mt-10 p-4 border border-border rounded-lg bg-background/50 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <ShoppingBag className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">
                  {t.cartTitle} ({cartItems.reduce((total, item) => total + item.quantity, 0)})
                </h3>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setCartItems([])}
              >
                {t.emptyCart}
              </Button>
            </div>
            
            <div className="space-y-2">
              {cartItems.map((item, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                  <div>
                    <p className="font-medium">{item.title}</p>
                    <p className="text-sm text-muted-foreground">
                      {t.quantity}: {item.quantity}
                    </p>
                  </div>
                  <p className="font-semibold">{item.price}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-4 flex justify-end">
              <Link to="/checkout">
                <Button className="bg-primary hover:bg-primary/90">
                  {t.checkout}
                </Button>
              </Link>
            </div>
          </div>
        )}
        
        {/* CTA Button */}
        <div className="mt-10 text-center">
          <Link to="/products">
            <Button size="lg" className="px-8 bg-primary hover:bg-primary/90">
              {t.viewAllProducts}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StoreSection;
