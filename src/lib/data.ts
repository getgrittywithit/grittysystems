import { App, InvestmentTier } from '@/types';

export const apps: App[] = [
  {
    id: 'phone-app',
    name: 'Phone App',
    tagline: 'Switch between brand numbers instantly',
    status: 'development',
    problem: 'Paying monthly fees for multiple phone services and struggling to manage different business lines efficiently',
    features: [
      'Switch between brand numbers instantly',
      'Replace OpenPhone and reduce costs',
      'AI-powered call management',
      'Unified communication dashboard'
    ],
    description: 'Revolutionary phone management system that eliminates the need for multiple phone services while providing AI-powered call management and unified communication dashboard.',
  },
  {
    id: 'triton-handyman',
    name: 'Triton Handyman Platform',
    tagline: 'All-in-one handyman business management',
    status: 'development',
    problem: 'Handyman businesses juggling estimates, invoicing, scheduling, and customer communication across multiple tools',
    features: [
      'Automated estimates and invoicing',
      'AI phone system integration',
      'Job scheduling and tracking',
      'Email workflow automation',
      'Social media posting automation'
    ],
    description: 'Comprehensive platform that streamlines every aspect of handyman business operations from initial contact to job completion.',
  },
  {
    id: 'grit-collective',
    name: 'Grit Collective',
    tagline: 'Connected product design and inventory management',
    status: 'live',
    url: 'https://gritcollective.com',
    problem: 'Managing product designs, inventory, and social media for online stores is time-consuming and complex',
    features: [
      'Connected to Printful & Shopify',
      'Automated social media posting',
      'Content management system',
      'Handmade + POD product integration',
      'Daily product publishing workflow'
    ],
    description: 'Live platform connecting product design, inventory management, and social media automation for online stores.',
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
      'Progress tracking and rewards'
    ],
    description: 'Comprehensive family organization system that brings structure and efficiency to household management.',
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
      'Goal-based saving strategies'
    ],
    description: 'Next-generation financial management app that leverages AI to provide personalized insights and recommendations.',
  },
  {
    id: 'boerne-handy-hub',
    name: "Boerne's Handy Hub",
    tagline: 'Local community coordination platform',
    status: 'planning',
    problem: 'Small towns lack centralized platforms for local services, recommendations, and community coordination',
    features: [
      'Local service directory',
      'AI-powered recommendations',
      'Community event coordination',
      'Local business promotion',
      'Neighbor-to-neighbor assistance'
    ],
    description: 'Community-focused platform designed to connect local services, events, and neighbors in small towns.',
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
      'Community plant trading'
    ],
    description: 'Specialized platform for plant enthusiasts to manage collections, track care, and connect with local plant communities.',
  },
  {
    id: 'pantrypal-pro',
    name: 'PantryPal Pro',
    tagline: 'Smart pantry and meal planning',
    status: 'backburner',
    problem: 'Families waste food and money because they don\'t know what\'s in their pantry or how to meal plan effectively',
    features: [
      'Grocery receipt scanning',
      'Automatic pantry inventory',
      'AI meal planning suggestions',
      'Expiration date tracking',
      'Shopping list optimization'
    ],
    description: 'Intelligent pantry management system that reduces food waste and optimizes meal planning through AI-powered suggestions.',
  }
];

export const portfolioTiers: InvestmentTier[] = [
  {
    name: 'Coffee Supporter',
    price: '$5-25',
    type: 'support',
    description: 'Support our vision',
    benefits: [
      'Support our vision',
      'Quarterly updates',
      'Early access announcements',
      'Community Discord access'
    ]
  },
  {
    name: 'Lifetime Member',
    price: '$99-299',
    type: 'membership',
    description: 'Lifetime access to ALL SaaS products',
    benefits: [
      'Lifetime access to ALL SaaS products',
      'Beta testing access',
      'Priority support',
      'No monthly fees ever',
      'Exclusive member community'
    ]
  },
  {
    name: 'Revenue Partner',
    price: '$500-2000',
    type: 'revenue',
    description: 'Revenue sharing across profitable apps',
    benefits: [
      'Revenue sharing across profitable apps',
      'Quarterly profit reports',
      'Strategy input calls',
      'Lifetime access',
      'Partner recognition'
    ]
  },
  {
    name: 'Equity Partner',
    price: '$5000+',
    type: 'equity',
    description: 'Equity consideration in GrittySystems',
    benefits: [
      'Equity consideration in GrittySystems',
      'Board update access',
      'Strategic decision input',
      'All lower tier benefits',
      'Annual partner meeting'
    ]
  }
];

export const projectTiers: InvestmentTier[] = [
  {
    name: 'Project Backer',
    price: '$50-200',
    type: 'support',
    description: 'Lifetime access to specific app',
    benefits: [
      'Lifetime access to specific app',
      'Development updates',
      'Feature request priority',
      'Beta access'
    ]
  },
  {
    name: 'Project Partner',
    price: '$500-1500',
    type: 'revenue',
    description: 'Revenue sharing for specific app',
    benefits: [
      'Revenue sharing for specific app',
      'Product roadmap input',
      'Monthly dev calls',
      'All backer benefits'
    ]
  },
  {
    name: 'Project Co-Owner',
    price: '$2000+',
    type: 'equity',
    description: 'Significant product direction input',
    benefits: [
      'Significant product direction input',
      'Revenue sharing',
      'Co-marketing opportunities',
      'Partnership recognition'
    ]
  }
];