interface MarketData {
  size: string;
  growth: string;
  segments: string[];
}

interface TechnicalApproach {
  architecture: string[];
  technologies: string[];
  aiFeatures: string[];
  integrations: string[];
}

interface GoToMarket {
  strategy: string;
  channels: string[];
  pricing: string;
  timeline: string[];
}

interface FundingNeeds {
  amount: string;
  useOfFunds: string[];
  milestones: string[];
  roi: string;
}

interface CompetitiveAnalysis {
  competitors: string[];
  advantages: string[];
}

interface PitchData {
  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  problemStatement: string;
  solution: string;
  marketData: MarketData;
  technicalApproach: TechnicalApproach;
  goToMarket: GoToMarket;
  fundingNeeds: FundingNeeds;
  competitiveAnalysis: CompetitiveAnalysis;
  team: string[];
  traction: string[];
}

export const pitchDeckData: Record<string, PitchData> = {
  'pantrypal-pro': {
    brandColors: {
      primary: '#f56a18',   // Primary Orange - energy, warmth, citrus freshness
      secondary: '#00a550', // Forest Green - growth, freshness, vegetables  
      accent: '#d9a821',    // Mustard Yellow - optimism, abundance
    },
    problemStatement: 'Busy families face the overwhelming "full pantry, nothing to eat" feeling daily, leading to $1,500 in annual food waste per household while struggling with meal planning decision fatigue.',
    solution: 'PantryPal Pro is your AI-powered pantry butler that eliminates meal planning stress by providing instant meal suggestions based on what you actually have, complete with step-by-step guides and smart leftover tracking.',
    marketData: {
      size: '$250B US grocery market + $45B meal planning market',
      growth: '12% CAGR in food tech solutions',
      segments: [
        'Busy families juggling work and home (45M households)',
        'Hard-working professionals with limited time (62M adults)',
        'Parents of young children overwhelmed by daily cooking (28M households)',
        'Cooking beginners needing meal guidance (38M adults)'
      ]
    },
    technicalApproach: {
      architecture: [
        'Cloud-native microservices architecture',
        'Real-time inventory synchronization',
        'Cross-platform mobile and web applications',
        'Offline-first data management'
      ],
      technologies: [
        'React Native for mobile apps',
        'Next.js for web application',
        'Node.js with TypeScript backend',
        'PostgreSQL with Redis caching',
        'AWS infrastructure with auto-scaling'
      ],
      aiFeatures: [
        'Computer vision for receipt and barcode scanning',
        'Natural language processing for recipe parsing',
        'Machine learning for consumption pattern analysis',
        'Predictive analytics for expiration management',
        'Personalized meal recommendation engine'
      ],
      integrations: [
        'Major grocery store APIs (Kroger, Safeway, Target)',
        'Recipe platforms (AllRecipes, Food Network)',
        'Nutrition databases (USDA, Nutritionix)',
        'Smart appliance connectivity (Samsung, LG)',
        'Calendar and reminder systems'
      ]
    },
    goToMarket: {
      strategy: 'Freemium B2C model with premium family subscriptions and B2B partnerships',
      channels: [
        'Direct-to-consumer app store distribution',
        'Strategic partnerships with grocery retailers',
        'Content marketing through food and sustainability blogs',
        'Social media campaigns targeting busy parents',
        'Referral programs with existing user base'
      ],
      pricing: 'Free tier with basic features, $9.99/month for families, $4.99/month for individuals, B2B licensing at $2-5 per user/month',
      timeline: [
        'Month 1-3: MVP development and beta testing',
        'Month 4-6: App store launch with 1,000 beta users',
        'Month 7-12: Scale to 50,000 users, grocery partnerships',
        'Year 2: 500,000 users, B2B expansion, $2M ARR'
      ]
    },
    fundingNeeds: {
      amount: '$500,000 Seed Round',
      useOfFunds: [
        '45% - Engineering team expansion (2 developers, 1 AI engineer)',
        '30% - Marketing and user acquisition via family-focused channels',
        '15% - Infrastructure, Spoonacular API integration, and AI model training',
        '7% - Partnership development with grocery chains and recipe platforms',
        '3% - Legal, compliance, and operational expenses'
      ],
      milestones: [
        'Complete MVP with core pantry butler features (Month 4)',
        'Launch beta with 500 family testers (Month 6)',
        'Achieve 5,000 active families saving money monthly (Month 10)',
        'Reach $50K monthly recurring revenue (Month 12)',
        'Prove 10x ROI for users through food waste reduction (Month 15)'
      ],
      roi: 'Conservative 12x return based on proven user savings of $1,500/year and freemium conversion rates of 15%+ in meal planning market'
    },
    competitiveAnalysis: {
      competitors: [
        'HelloFresh (meal kit subscriptions)',
        'AllRecipes (ad-heavy recipe search)',
        'Mealime (basic meal planning)', 
        'BigOven (recipe management focus)',
        'Plan to Eat (meal planning without pantry awareness)'
      ],
      advantages: [
        'Complete pantry knowledge through receipt processing (unique)',
        'Butler-level service with proactive meal planning',
        'Ad-free experience for paying users (vs AllRecipes)',
        'No subscription meal kits required - use what you have',
        'Automatic inventory management via grocery receipt scanning',
        'Smart substitutions based on actual available ingredients'
      ]
    },
    team: [
      'Technical leadership with 10+ years in AI/ML applications',
      'Food industry expertise and grocery retail partnerships',
      'Mobile app development with 50M+ downloads experience',
      'Marketing experience in consumer app growth (1M+ users)'
    ],
    traction: [
      'Working MVP with Spoonacular API integration and receipt processing',
      'Validated with 50+ beta families showing average $125/month in food waste savings',
      'Strong brand identity and messaging framework established',
      '500+ user interviews confirming the "full pantry, nothing to eat" pain point',
      'Technical architecture proven with existing microservices deployment'
    ]
  }
};