import { App } from '@/types';

export const apps: App[] = [
  {
    id: 'faith-marie-foundation',
    name: 'Faith Marie Foundation',
    tagline: 'Honoring tiny lives, supporting grieving families',
    status: 'live',
    url: 'https://faithmarie.org',
    problem: 'Families experiencing infant loss often feel isolated and lack resources for healing, while their babies\' brief lives go unrecognized by society',
    features: [
      'Memorial website creation for angel babies',
      'Grief support resources and counseling connections',
      'Care packages for families in NICU',
      'Annual remembrance events and ceremonies',
      'Pediatric patient awareness campaigns',
      'Support groups for bereaved parents',
      'Educational resources for healthcare providers'
    ],
    description: 'A non-profit foundation dedicated to raising awareness for pediatric patients and supporting families through infant loss, ensuring every precious life is remembered and celebrated.',
    visible: true,
    isNonProfit: true,
    featured: true
  },
  {
    id: 'pantrypal-pro',
    name: 'PantryPal Pro',
    tagline: 'Your AI pantry butler that knows everything you have',
    status: 'development',
    problem: 'Busy families face the overwhelming "full pantry, nothing to eat" feeling daily, leading to meal planning stress and $1,500+ in annual food waste',
    features: [
      'Instant meal suggestions based on what you actually have',
      'AI-powered pantry butler with step-by-step cooking guides',
      'Automatic inventory tracking via grocery receipt scanning',
      'Smart leftover tracking and usage suggestions',
      'Ad-free experience focused on your family\'s needs',
      'Save 10x the app cost through reduced food waste alone'
    ],
    description: 'Your trusted pantry butler that eliminates the "nothing to eat" feeling by providing instant meal suggestions based on actual pantry contents, complete with step-by-step guides and smart waste reduction.',
    visible: true
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
    visible: true
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
    visible: true
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
    visible: true
  },
  {
    id: 'boernes-handy-hub',
    name: 'BoernesHandyHub.com',
    tagline: 'AI-driven town directory for Boerne, Texas',
    status: 'development',
    url: 'https://boerneshandyhub.com',
    problem: 'Boerne residents and visitors struggle to find local services, events, and businesses without relying on generic national platforms that miss local gems',
    features: [
      'AI-powered local business recommendations',
      'Real-time event calendar with smart notifications',
      'Community-verified service provider ratings',
      'Local deals and exclusive Boerne offers',
      'Neighborhood-specific insights and tips',
      'Smart search understanding local context'
    ],
    description: 'The definitive AI-driven directory for Boerne, Texas, connecting residents and visitors with the best local businesses, services, and community events through intelligent recommendations.',
    visible: true
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
    visible: true
  }
];