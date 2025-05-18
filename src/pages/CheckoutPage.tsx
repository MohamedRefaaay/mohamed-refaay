
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/context/LanguageContext';
import { content } from '@/data/content';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  CreditCard, 
  Truck, 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus,
  ArrowLeft
} from 'lucide-react';
import { toast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

type CartItem = {
  id: string;
  title: string;
  price: string;
  quantity: number;
};

const CheckoutPage: React.FC = () => {
  const { language, isRTL } = useLanguage();
  const t = content[language].store;
  const navigate = useNavigate();
  
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  const [whatsappNotifications, setWhatsappNotifications] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('01551530170');
  
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
  
  const handleUpdateQuantity = (id: string, change: number) => {
    setCartItems(prevItems => 
      prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + change);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };
  
  const handleRemoveItem = (id: string) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };
  
  // Calculate subtotal
  const subtotal = cartItems.reduce((total, item) => {
    // Extract numeric value from price (remove currency symbol)
    const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
    return total + (price * item.quantity);
  }, 0);
  
  // Apply fixed shipping fee
  const shippingFee = 10;
  
  // Calculate total
  const total = subtotal + shippingFee;
  
  const handlePlaceOrder = () => {
    // Show notification about WhatsApp updates if enabled
    if (whatsappNotifications) {
      toast({
        title: language === 'en' ? 
          'WhatsApp Notifications Enabled!' : 
          'تم تفعيل إشعارات واتساب!',
        description: language === 'en' ? 
          `You'll receive order updates on WhatsApp at ${phoneNumber}` : 
          `سوف تتلقى تحديثات الطلب على واتساب على الرقم ${phoneNumber}`,
        duration: 5000,
      });
    }
    
    toast({
      title: language === 'en' ? 'Order Placed Successfully!' : 'تم تقديم الطلب بنجاح!',
      description: language === 'en' ? 
        'Thank you for your order. You will receive a confirmation email shortly.' : 
        'شكراً لطلبك. سوف تتلقى رسالة تأكيد قريباً.',
      duration: 5000,
    });
    
    // Clear cart
    setCartItems([]);
    localStorage.removeItem('cart');
    
    // Redirect to home after a short delay
    setTimeout(() => {
      navigate('/');
    }, 3000);
  };
  
  // If cart is empty, show message and link back to products
  if (cartItems.length === 0) {
    return (
      <>
        <Navbar />
        <div className="pt-24 pb-16 min-h-screen">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-6">{t.cartTitle}</h1>
            <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground opacity-50 mb-4" />
            <p className="text-lg mb-6">
              {language === 'en' ? 'Your cart is empty' : 'سلة التسوق فارغة'}
            </p>
            <Button 
              onClick={() => navigate('/products')}
              className="bg-primary hover:bg-primary/90"
            >
              {t.continueShopping}
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
  
  return (
    <>
      <Navbar />
      <div className="pt-24 pb-16 min-h-screen">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">{t.checkoutTitle}</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left column - Cart items */}
            <div className="lg:col-span-2">
              <Button 
                variant="ghost" 
                className="flex items-center gap-1 text-muted-foreground mb-4"
                onClick={() => navigate('/products')}
              >
                <ArrowLeft className="h-4 w-4" />
                {t.continueShopping}
              </Button>
              
              {/* Cart Items */}
              <div className="bg-background border border-border rounded-md p-4 mb-8">
                <h2 className="text-xl font-semibold mb-4">
                  {t.cartTitle} ({cartItems.reduce((total, item) => total + item.quantity, 0)} {language === 'en' ? 'items' : 'عنصر'})
                </h2>
                
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between py-4 border-b border-border last:border-0">
                    <div className="flex-1">
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-primary font-semibold">{item.price}</p>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-border rounded-md">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-8 w-8"
                          onClick={() => handleUpdateQuantity(item.id, -1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button 
                          variant="ghost" 
                          size="icon"
                          className="h-8 w-8"
                          onClick={() => handleUpdateQuantity(item.id, 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="icon"
                        className="text-destructive hover:text-destructive"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Shipping Information */}
              <div className="bg-background border border-border rounded-md p-4 mb-8">
                <h2 className="text-xl font-semibold mb-4">{t.shipping}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="fullName">{language === 'en' ? 'Full Name' : 'الاسم الكامل'}</Label>
                    <Input id="fullName" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">{language === 'en' ? 'Email' : 'البريد الإلكتروني'}</Label>
                    <Input id="email" type="email" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="phone">{language === 'en' ? 'Phone Number' : 'رقم الهاتف'}</Label>
                    <Input 
                      id="phone" 
                      className="mt-1" 
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="country">{language === 'en' ? 'Country' : 'الدولة'}</Label>
                    <Input id="country" className="mt-1" />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">{language === 'en' ? 'Address' : 'العنوان'}</Label>
                    <Input id="address" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="city">{language === 'en' ? 'City' : 'المدينة'}</Label>
                    <Input id="city" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="postal">{language === 'en' ? 'Postal Code' : 'الرمز البريدي'}</Label>
                    <Input id="postal" className="mt-1" />
                  </div>
                </div>

                {/* WhatsApp Notifications */}
                <div className="mt-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="whatsapp-notifications" 
                      checked={whatsappNotifications}
                      onCheckedChange={(checked) => setWhatsappNotifications(checked as boolean)}
                    />
                    <label
                      htmlFor="whatsapp-notifications"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      {language === 'en' 
                        ? 'Receive order updates via WhatsApp' 
                        : 'استلام تحديثات الطلب عبر واتساب'}
                    </label>
                  </div>
                </div>
              </div>
              
              {/* Payment Method */}
              <div className="bg-background border border-border rounded-md p-4">
                <h2 className="text-xl font-semibold mb-4">{t.payment}</h2>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                  <div className="flex items-center gap-2 mb-4">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex items-center gap-2 cursor-pointer">
                      <CreditCard className="h-4 w-4" />
                      {language === 'en' ? 'Credit Card' : 'بطاقة ائتمانية'}
                    </Label>
                  </div>
                  <div className="flex items-center gap-2">
                    <RadioGroupItem value="cash" id="cash" />
                    <Label htmlFor="cash" className="flex items-center gap-2 cursor-pointer">
                      <Truck className="h-4 w-4" />
                      {language === 'en' ? 'Cash on Delivery' : 'الدفع عند الاستلام'}
                    </Label>
                  </div>
                </RadioGroup>
                
                {paymentMethod === 'credit-card' && (
                  <div className="mt-4 p-4 border border-border rounded-md">
                    <div className="mb-4">
                      <Label htmlFor="card-number">{language === 'en' ? 'Card Number' : 'رقم البطاقة'}</Label>
                      <Input id="card-number" className="mt-1" placeholder="1234 5678 9012 3456" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry">{language === 'en' ? 'Expiry Date' : 'تاريخ الانتهاء'}</Label>
                        <Input id="expiry" className="mt-1" placeholder="MM/YY" />
                      </div>
                      <div>
                        <Label htmlFor="cvv">{language === 'en' ? 'CVV' : 'رمز الأمان'}</Label>
                        <Input id="cvv" className="mt-1" placeholder="123" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right column - Order Summary */}
            <div>
              <div className="bg-background border border-border rounded-md p-4 sticky top-24">
                <h2 className="text-xl font-semibold mb-4">{t.orderSummary}</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {language === 'en' ? 'Subtotal' : 'المجموع الفرعي'}:
                    </span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">
                      {language === 'en' ? 'Shipping' : 'الشحن'}:
                    </span>
                    <span>${shippingFee.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-bold">
                    <span>{language === 'en' ? 'Total' : 'المجموع الكلي'}:</span>
                    <span className="text-primary">${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full bg-primary hover:bg-primary/90 mb-4"
                  onClick={handlePlaceOrder}
                >
                  {t.placeOrder}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  {language === 'en' 
                    ? 'By placing your order, you agree to our Terms of Service and Privacy Policy' 
                    : 'بوضع طلبك، فإنك توافق على شروط الخدمة وسياسة الخصوصية الخاصة بنا'
                  }
                </p>
                
                <div className="mt-6 text-sm text-muted-foreground">
                  <h3 className="font-medium mb-2">
                    {t.customerService}
                  </h3>
                  <p>
                    {language === 'en' 
                      ? 'Need help? Contact our support team.' 
                      : 'تحتاج مساعدة؟ اتصل بفريق الدعم لدينا.'
                    }
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
