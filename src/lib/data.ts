import { App } from '@/types';

export const apps: App[] = [
  {
    id: 'pantrypal-pro',
    name: 'PantryPal Pro',
    tagline: 'Smart pantry and meal planning',
    status: 'development',
    problem: 'Families waste food and money because they don\'t know what\'s in their pantry or how to meal plan effectively',
    features: [
      'Grocery receipt scanning',
      'Automatic pantry inventory',
      'AI meal planning suggestions',
      'Expiration date tracking',
      'Shopping list optimization',
      'Recipe recommendations based on available ingredients'
    ],
    description: 'Intelligent pantry management system that reduces food waste and optimizes meal planning through AI-powered suggestions.',
  },
  {
    id: 'grit-collective',
    name: 'Grit Collective',
    tagline: 'AI-powered e-commerce automation',
    status: 'live',
    url: 'https://gritcollectiveco.com',
    problem: 'E-commerce brands struggle with product design, inventory management, and social media automation at scale',
    features: [
      'Connected to Printful & Shopify',
      'Automated social media posting',
      'AI-powered product design system',
      'Handmade + POD product integration',
      'Daily analytics and optimization'
    ],
    description: 'A live e-commerce brand selling motivational lifestyle products with automated backend systems. Demonstrates the power of our AI-driven product ecosystem.',
  },
  {
    id: 'mermaid-jungle',
    name: 'Mermaid in the Jungle',
    tagline: 'Plant inventory and trading platform',
    status: 'planning',
    problem: 'Plant enthusiasts need better tools to organize their collections and sell plants locally',
    features: [
      'Plant inventory management',
      'Care scheduling and reminders',
      'Local plant sales platform',
      'Plant health tracking',
      'Community plant trading',
      'Plant identification with AI'
    ],
    description: 'Specialized platform for plant enthusiasts to manage collections, track care, and connect with local plant communities.',
  },
  {
    id: 'phone-app',
    name: 'AI Phone System',
    tagline: 'Intelligent multi-line phone management',
    status: 'development',
    problem: 'Managing multiple phone lines for different brands or businesses requires expensive services and complex setups',
    features: [
      'Switch between brand numbers instantly',
      'AI-powered call management',
      'Unified communication dashboard',
      'Smart voicemail transcription',
      'Automated call routing'
    ],
    description: 'Revolutionary AI-powered phone management system that handles multiple business lines with intelligent call routing and management.',
  },
  {
    id: 'moe-money',
    name: 'Moe Money',
    tagline: 'AI-powered financial insights',
    status: 'development',
    problem: 'Current financial apps are either too complex or too simple, lacking AI integration for smart money management',
    features: [
      'AI-powered financial insights',
      'Automated expense categorization',
      'Smart budgeting recommendations',
      'Integration with bank accounts',
      'Goal-based saving strategies',
      'Predictive spending analysis'
    ],
    description: 'Next-generation financial management app that leverages AI to provide personalized insights and recommendations.',
  },
  {
    id: 'home-management',
    name: 'Home Management Hub',
    tagline: 'Family organization made simple',
    status: 'development',
    problem: 'Families struggle to organize chores, routines, school communications, and daily tasks efficiently',
    features: [
      "Kids' chore and routine portals",
      'Daily checklist automation',
      'School email and todo parsing with AI',
      'Family task coordination',
      'Progress tracking and rewards',
      'Smart home integration'
    ],
    description: 'Comprehensive family organization system that brings structure and efficiency to household management.',
  }
];