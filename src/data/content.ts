
type ContentType = {
  [key: string]: {
    navbar: {
      home: string;
      about: string;
      skills: string;
      projects: string;
      contact: string;
    };
    hero: {
      greeting: string;
      name: string;
      tagline: string;
      ctaButton: string;
    };
    about: {
      title: string;
      name: string;
      age: string;
      college: string;
      bio: string;
    };
    skills: {
      title: string;
      list: Array<{
        name: string;
        level: string;
      }>;
    };
    projects: {
      title: string;
      list: Array<{
        title: string;
        description: string;
        image?: string;
      }>;
    };
    certificates: {
      title: string;
      list: Array<{
        name: string;
      }>;
    };
    marketing: {
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
    contact: {
      title: string;
      whatsapp: string;
      telegram: string;
      email: string;
      downloadCV: string;
    };
    footer: {
      rights: string;
    };
  };
};

export const content: ContentType = {
  en: {
    navbar: {
      home: "Home",
      about: "About",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Mohamed Refaay",
      tagline: "What are you waiting for to get your product global? 👨‍🚀🚀",
      ctaButton: "Learn More",
    },
    about: {
      title: "About Me",
      name: "Mohamed Refaay",
      age: "20 years old",
      college: "Faculty of Commerce - Ain Shams University",
      bio: "I'm Mohamed Refaay, passionate about digital marketing and professional video production using CapCut, as well as designing smart applications like the Mathani app. I have experience as a professional photographer, and I always strive to combine creativity and technology in my projects.",
    },
    skills: {
      title: "Skills",
      list: [
        { name: "CapCut", level: "Excellent" },
        { name: "Digital Marketing", level: "Very Good" },
        { name: "Photography", level: "Professional" },
        { name: "App Design (Mathani)", level: "Very Good" },
        { name: "Communication & Teamwork", level: "Excellent" },
        { name: "Languages (Arabic/English)", level: "Excellent" },
      ],
    },
    projects: {
      title: "Projects",
      list: [
        {
          title: "Mathani App - Smart Quranic Videos",
          description: "Developed an app featuring smart Quranic videos",
        },
        {
          title: "Instagram/TikTok Videos",
          description: "Professional editing and montage for Reels and TikTok",
        },
        {
          title: "Photography Portfolio",
          description: "Portrait and product photography",
        },
        {
          title: "Virtual Marketing Campaign",
          description: "For Ain Shams University",
        },
      ],
    },
    certificates: {
      title: "Certificates & Achievements",
      list: [
        { name: "CapCut Certificate (Video Design)" },
        { name: "Professional Photography Courses" },
        { name: "Digital Marketing Courses (Arabic & Foreign)" },
        { name: "Participation in University Student Activities" },
      ],
    },
    marketing: {
      title: "Product Marketing Solutions",
      globalTitle: "Global Reach",
      globalDescription: "Expand your business beyond borders with strategies tailored for international markets",
      growthTitle: "Exponential Growth",
      growthDescription: "Accelerate your product adoption with data-driven marketing campaigns",
      innovationTitle: "Innovative Approach",
      innovationDescription: "Stand out with cutting-edge marketing techniques that capture attention",
      ctaTitle: "Ready to Go Global?",
      ctaDescription: "Let's work together to take your product to international markets with strategic marketing solutions",
      ctaButton: "Start Your Journey",
      featuresTitle: "What We Offer",
      features: [
        "Social Media Marketing",
        "Video Content Creation",
        "App Store Optimization",
        "Digital Advertising",
        "Brand Identity Development"
      ]
    },
    contact: {
      title: "Contact Me",
      whatsapp: "WhatsApp: 01551530170",
      telegram: "Telegram: @mohamed_bn_refaay",
      email: "Email: mohamed_refaay@outlook.com",
      downloadCV: "Download CV",
    },
    footer: {
      rights: "All Rights Reserved",
    },
  },
  ar: {
    navbar: {
      home: "الرئيسية",
      about: "عنّي",
      skills: "المهارات",
      projects: "المشاريع",
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
  },
};
