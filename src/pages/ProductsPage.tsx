
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Star, Search, Filter, SlidersHorizontal } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { StoreProduct } from '@/data/types';

const ProductsPage: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = content[language].store;
  
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'price-asc' | 'price-desc' | 'rating'>('rating');
  const [cartItems, setCartItems] = useState<Array<{id: string, title: string, price: string, quantity: number}>>([]);
  
  // Get cart from localStorage on component mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);
  
  // Filter products based on search and category
  const filteredProducts = t.products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.category === selectedCategory : true;
    return matchesSearch && matchesCategory;
  });
  
  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') {
      return a.priceValue - b.priceValue;
    } else if (sortBy === 'price-desc') {
      return b.priceValue - a.priceValue;
    } else {
      // Default sort by rating
      return (b.rating || 0) - (a.rating || 0);
    }
  });
  
  const handleAddToCart = (product: StoreProduct) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { id: product.id, title: product.title, price: product.price, quantity: 1 }]);
    }
    
    toast({
      title: language === 'en' ? 'Added to cart' : 'تمت الإضافة إلى السلة',
      description: `${product.title} (${product.price})`,
      duration: 2000,
    });
  };
  
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">{t.title}</h1>

          {/* Search and Filter Bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-8 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4`} />
              <Input 
                type="text" 
                className={`w-full ${isRTL ? 'pr-10' : 'pl-10'}`}
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    {t.filterBy}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSelectedCategory(null)}>
                    {language === 'en' ? 'All Categories' : 'جميع الفئات'}
                  </DropdownMenuItem>
                  {t.categories.map((category) => (
                    <DropdownMenuItem 
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                    >
                      {category.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="flex items-center gap-2">
                    <SlidersHorizontal className="h-4 w-4" />
                    {t.sortBy}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setSortBy('rating')}>
                    {language === 'en' ? 'Top Rated' : 'الأعلى تقييماً'}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy('price-asc')}>
                    {language === 'en' ? 'Price: Low to High' : 'السعر: من الأقل للأعلى'}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setSortBy('price-desc')}>
                    {language === 'en' ? 'Price: High to Low' : 'السعر: من الأعلى للأقل'}
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          
          {/* Category Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge 
              variant={selectedCategory === null ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => setSelectedCategory(null)}
            >
              {language === 'en' ? 'All' : 'الكل'}
            </Badge>
            {t.categories.map((category) => (
              <Badge
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Badge>
            ))}
          </div>

          {/* Products Grid */}
          {sortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <Card key={product.id} className="bg-background border border-border overflow-hidden transition-all hover:shadow-lg">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <Badge variant="outline" className="bg-primary/10 text-primary">
                        {t.categories.find(cat => cat.id === product.category)?.name || product.category}
                      </Badge>
                      {product.rating && (
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                          <span className="ml-1 text-sm font-medium">{product.rating}</span>
                        </div>
                      )}
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
                      {product.reviews && (
                        <p className="text-sm text-muted-foreground mt-1">
                          {product.reviews} {t.reviews}
                        </p>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <Button 
                      variant="outline" 
                      className="flex items-center gap-2 hover:bg-primary hover:text-primary-foreground"
                      onClick={() => handleAddToCart(product)}
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
          ) : (
            <div className="text-center py-10">
              <p className="text-lg text-muted-foreground">
                {language === 'en' ? 'No products found matching your criteria.' : 'لا توجد منتجات تطابق معايير البحث.'}
              </p>
            </div>
          )}
          
          {/* Cart Link */}
          {cartItems.length > 0 && (
            <div className="fixed bottom-6 right-6">
              <Link to="/checkout">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {cartItems.reduce((total, item) => total + item.quantity, 0)}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductsPage;
