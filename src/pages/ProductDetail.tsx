
import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ShoppingCart, 
  Star, 
  ArrowLeft,
  Plus,
  Minus,
  MessageCircle
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { StoreProduct } from '@/data/types';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const { language, isRTL } = useLanguage();
  const t = content[language].store;
  const navigate = useNavigate();
  
  const [quantity, setQuantity] = useState(1);
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
  
  // Find the product
  const product = t.products.find(p => p.id === productId);
  
  // Find related products (same category)
  const relatedProducts = product 
    ? t.products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3)
    : [];
  
  if (!product) {
    // Handle product not found
    return (
      <>
        <Navbar />
        <div className="pt-24 pb-16 min-h-screen">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {language === 'en' ? 'Product not found' : 'المنتج غير موجود'}
            </h2>
            <Button onClick={() => navigate('/products')}>
              {language === 'en' ? 'Back to Products' : 'العودة إلى المنتجات'}
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  const handleQuantityChange = (change: number) => {
    const newQuantity = Math.max(1, quantity + change);
    setQuantity(newQuantity);
  };
  
  const handleAddToCart = () => {
    const existingItem = cartItems.find(item => item.id === product.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      ));
    } else {
      setCartItems([...cartItems, { 
        id: product.id, 
        title: product.title, 
        price: product.price, 
        quantity: quantity 
      }]);
    }
    
    toast({
      title: language === 'en' ? 'Added to cart' : 'تمت الإضافة إلى السلة',
      description: `${product.title} x${quantity} (${product.price})`,
      duration: 2000,
    });
  };
  
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Button 
              variant="ghost" 
              className="flex items-center gap-1 text-muted-foreground"
              onClick={() => navigate('/products')}
            >
              <ArrowLeft className="h-4 w-4" />
              {language === 'en' ? 'Back to Products' : 'العودة إلى المنتجات'}
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Product Image/Icon */}
            <div className="flex justify-center items-center bg-accent/10 rounded-lg p-10">
              {React.createElement(product.icon, { className: "h-32 w-32 text-primary" })}
            </div>
            
            {/* Product Info */}
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-primary/10 text-primary">
                  {t.categories.find(cat => cat.id === product.category)?.name || product.category}
                </Badge>
                {product.featured && (
                  <Badge variant="outline" className="bg-yellow-500/10 text-yellow-700 border-yellow-500">
                    {language === 'en' ? 'Featured' : 'مميز'}
                  </Badge>
                )}
              </div>
              
              <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
              
              {product.rating && (
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor(product.rating || 0) ? 'text-yellow-500 fill-yellow-500' : 'text-muted-foreground'}`} 
                      />
                    ))}
                  </div>
                  <span className="text-sm">
                    {product.rating} ({product.reviews} {t.reviews})
                  </span>
                </div>
              )}
              
              <p className="text-3xl font-bold text-primary mb-4">{product.price}</p>
              
              <p className="text-muted-foreground mb-6">{product.description}</p>
              
              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-medium">{t.quantity}:</span>
                <div className="flex items-center">
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => handleQuantityChange(-1)}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="w-10 text-center">{quantity}</span>
                  <Button 
                    variant="outline" 
                    size="icon" 
                    onClick={() => handleQuantityChange(1)}
                  >
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  className="bg-primary hover:bg-primary/90 flex-1"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {t.addToCart}
                </Button>
                
                <Link to="/checkout" className="flex-1">
                  <Button 
                    variant="outline" 
                    className="w-full"
                  >
                    {t.checkout}
                  </Button>
                </Link>
              </div>
              
              {/* Customer Service */}
              <div className="mt-8 border-t border-border pt-4">
                <div className="flex items-center gap-2 text-muted-foreground">
                  <MessageCircle className="h-5 w-5" />
                  <span>
                    {language === 'en' ? 'Need help with this product?' : 'تحتاج مساعدة بخصوص هذا المنتج؟'}
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">{t.relatedProducts}</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((relatedProduct: StoreProduct) => (
                  <Card key={relatedProduct.id} className="bg-background border border-border overflow-hidden transition-all hover:shadow-lg p-4">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="bg-accent/10 p-3 rounded-md">
                        {React.createElement(relatedProduct.icon, { className: "h-8 w-8 text-primary" })}
                      </div>
                      <div>
                        <h3 className="font-semibold">{relatedProduct.title}</h3>
                        <p className="text-primary font-bold">{relatedProduct.price}</p>
                      </div>
                    </div>
                    <Link to={`/products/${relatedProduct.id}`}>
                      <Button variant="ghost" className="w-full">
                        {t.productDetails}
                      </Button>
                    </Link>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
