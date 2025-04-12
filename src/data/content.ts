
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
      tagline: "Launch your creativity to the galaxy 👨‍🚀🚀",
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
      tagline: "أطلق إبداعك إلى المجرة 👨‍🚀🚀",
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
