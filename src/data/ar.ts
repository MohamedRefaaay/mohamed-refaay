
import type { LanguageContent } from './types';
import { Camera, Laptop, Smartphone } from 'lucide-react';

export const arContent: LanguageContent = {
  navbar: {
    home: "الرئيسية",
    about: "عنّي",
    skills: "المهارات",
    projects: "المشاريع",
    store: "المتجر",
    contact: "اتصل بي",
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
    products: [
      {
        title: "مونتاج فيديو",
        description: "خدمات مونتاج فيديو احترافية باستخدام CapCut لوسائل التواصل",
        price: "٩٩$",
        icon: Camera
      },
      {
        title: "تسويق رقمي",
        description: "استراتيجيات تسويق شاملة لنمو نشاطك التجاري",
        price: "١٤٩$",
        icon: Laptop
      },
      {
        title: "تصميم تطبيقات",
        description: "خدمات تصميم واستشارات تطبيقات جوال مخصصة",
        price: "١٩٩$",
        icon: Smartphone
      }
    ]
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
