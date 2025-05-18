
import type { LanguageContent } from './types';
import { Camera, Laptop, Smartphone, BookOpen, Headphones, PenTool } from 'lucide-react';

export const arContent: LanguageContent = {
  navbar: {
    home: "الرئيسية",
    about: "عنّي",
    skills: "المهارات",
    projects: "المشاريع",
    store: "المتجر",
    contact: "اتصل بي",
    products: "المنتجات",
    cart: "السلة",
  },
  hero: {
    greeting: "مرحباً، أنا",
    name: "محمد رفاعي",
    tagline: "مستنى اية عشان توصل المنتج بتاعك للعالمية 👨‍🚀🚀",
    ctaButton: "اكتشف المزيد",
  },
  about: {
    title: "عنّي",
    name: "محمد رفاعي",
    age: "٢٠ سنة",
    college: "كلية التجارة - جامعة عين شمس",
    bio: "أنا محمد رفاعي، شغوف بمجال التسويق الإلكتروني وصناعة الفيديوهات الاحترافية باستخدام CapCut، بالإضافة لتصميم تطبيقات ذكية مثل تطبيق مثاني. أمتلك خبرة كمصور محترف، وأسعى دومًا للدمج بين الإبداع والتكنولوجيا في مشاريعي.",
  },
  skills: {
    title: "المهارات",
    list: [
      { name: "CapCut", level: "ممتاز" },
      { name: "التسويق الإلكتروني", level: "جيد جداً" },
      { name: "التصوير الفوتوغرافي", level: "محترف" },
      { name: "تصميم التطبيقات (مثاني)", level: "جيد جداً" },
      { name: "التواصل والعمل الجماعي", level: "ممتاز" },
      { name: "اللغتين (عربي / إنجليزي)", level: "ممتاز" },
    ],
  },
  projects: {
    title: "المشاريع",
    list: [
      {
        title: "تطبيق مثاني – فيديوهات قرآنية ذكية",
        description: "تطوير تطبيق يقدم فيديوهات قرآنية ذكية"
      },
      {
        title: "فيديوهات Instagram / TikTok",
        description: "ريلز ومونتاج احترافي"
      },
      {
        title: "صور فوتوغرافية",
        description: "بورتريه ومنتجات"
      },
      {
        title: "حملة تسويق افتراضية",
        description: "لجامعة عين شمس"
      },
    ],
  },
  certificates: {
    title: "الشهادات والإنجازات",
    list: [
      { name: "شهادة CapCut (تصميم فيديو)" },
      { name: "كورسات تصوير احترافي" },
      { name: "كورسات تسويق رقمي (عربي وأجنبي)" },
      { name: "مشاركات في أنشطة طلابية داخل الجامعة" },
    ],
  },
  store: {
    title: "متجر الخدمات الرقمية",
    description: "استكشف منتجاتنا وخدماتنا الرقمية الاحترافية",
    cta: "استعرض جميع الخدمات",
    viewAllProducts: "عرض جميع المنتجات",
    featuredTitle: "منتجات مميزة",
    categories: [
      { id: "video", name: "خدمات الفيديو" },
      { id: "marketing", name: "التسويق" },
      { id: "design", name: "التصميم" },
      { id: "education", name: "التعليم" },
    ],
    products: [
      {
        id: "prod-1",
        title: "مونتاج فيديو",
        description: "خدمات مونتاج فيديو احترافية باستخدام CapCut لوسائل التواصل",
        price: "٩٩$",
        priceValue: 99,
        category: "video",
        icon: Camera,
        featured: true,
        rating: 4.8,
        reviews: 24
      },
      {
        id: "prod-2",
        title: "تسويق رقمي",
        description: "استراتيجيات تسويق شاملة لنمو نشاطك التجاري",
        price: "١٤٩$",
        priceValue: 149,
        category: "marketing",
        icon: Laptop,
        featured: true,
        rating: 4.9,
        reviews: 32
      },
      {
        id: "prod-3",
        title: "تصميم تطبيقات",
        description: "خدمات تصميم واستشارات تطبيقات جوال مخصصة",
        price: "١٩٩$",
        priceValue: 199,
        category: "design",
        icon: Smartphone,
        featured: true,
        rating: 4.7,
        reviews: 18
      },
      {
        id: "prod-4",
        title: "استراتيجية المحتوى",
        description: "تخطيط وإنشاء محتوى استراتيجي لعلامتك التجارية",
        price: "١٢٩$",
        priceValue: 129,
        category: "marketing",
        icon: BookOpen,
        featured: false,
        rating: 4.6,
        reviews: 14
      },
      {
        id: "prod-5",
        title: "تحرير الصوت",
        description: "خدمات تحرير وإنتاج صوتي احترافي",
        price: "٧٩$",
        priceValue: 79,
        category: "video",
        icon: Headphones,
        featured: false,
        rating: 4.5,
        reviews: 11
      },
      {
        id: "prod-6",
        title: "تصميم جرافيك",
        description: "تصميم جرافيك جذاب لعلامتك التجارية ومواد التسويق",
        price: "٨٩$",
        priceValue: 89,
        category: "design",
        icon: PenTool,
        featured: false,
        rating: 4.8,
        reviews: 21
      }
    ],
    addToCart: "أضف للسلة",
    emptyCart: "مسح",
    cartTitle: "عربة التسوق",
    quantity: "الكمية",
    checkout: "إتمام الشراء",
    continueShopping: "مواصلة التسوق",
    productDetails: "تفاصيل المنتج",
    relatedProducts: "منتجات ذات صلة",
    searchPlaceholder: "البحث عن منتجات...",
    filterBy: "تصفية حسب",
    sortBy: "ترتيب حسب",
    reviews: "المراجعات",
    checkoutTitle: "إتمام الطلب",
    shipping: "معلومات الشحن",
    payment: "طريقة الدفع",
    orderSummary: "ملخص الطلب",
    placeOrder: "تأكيد الطلب",
    customerService: "خدمة العملاء",
    faq: "الأسئلة الشائعة"
  },
  marketing: {
    title: "حلول تسويق المنتجات",
    globalTitle: "وصول عالمي",
    globalDescription: "وسع نطاق عملك خارج الحدود باستراتيجيات مخصصة للأسواق العالمية",
    growthTitle: "نمو متسارع",
    growthDescription: "سرّع من انتشار منتجك بحملات تسويقية مبنية على البيانات",
    innovationTitle: "نهج مبتكر",
    innovationDescription: "تميز بتقنيات تسويقية متطورة تجذب الانتباه",
    ctaTitle: "جاهز للانطلاق عالمياً؟",
    ctaDescription: "لنعمل معاً لنقل منتجك إلى الأسواق العالمية بحلول تسويقية استراتيجية",
    ctaButton: "ابدأ رحلتك",
    featuresTitle: "ما نقدمه",
    features: [
      "تسويق وسائل التواصل الاجتماعي",
      "إنشاء محتوى فيديو",
      "تحسين متجر التطبيقات",
      "الإعلان الرقمي",
      "تطوير هوية العلامة التجارية"
    ]
  },
  contact: {
    title: "اتصل بي",
    whatsapp: "واتساب: ٠١٥٥١٥٣٠١٧٠",
    telegram: "تيليجرام: @mohamed_bn_refaay",
    email: "إيميل: mohamed_refaay@outlook.com",
    downloadCV: "تحميل السيرة الذاتية",
  },
  footer: {
    rights: "جميع الحقوق محفوظة",
  },
};
