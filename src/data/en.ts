
import type { LanguageContent } from './types';
import { Camera, Laptop, Smartphone } from 'lucide-react';

export const enContent: LanguageContent = {
  navbar: {
    home: "Home",
    about: "About",
    skills: "Skills",
    projects: "Projects",
    store: "Store",
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
  store: {
    title: "Digital Services Store",
    description: "Explore our professional digital products and services",
    cta: "Browse All Services",
    products: [
      {
        title: "Video Editing",
        description: "Professional video editing services using CapCut for social media",
        price: "$99",
        icon: Camera
      },
      {
        title: "Digital Marketing",
        description: "Comprehensive marketing strategies for your business growth",
        price: "$149",
        icon: Laptop
      },
      {
        title: "App Design",
        description: "Custom mobile application design and consultation services",
        price: "$199",
        icon: Smartphone
      }
    ]
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
};
