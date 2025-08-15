export interface App {
  id: string;
  name: string;
  tagline: string;
  status: 'live' | 'development' | 'planning' | 'backburner';
  problem: string;
  features: string[];
  url?: string;
  description: string;
  targetFunding?: number;
  currentFunding?: number;
  metrics?: {
    revenue?: string;
    products?: string;
    automation?: string;
    categories?: string;
    users?: string;
    growth?: string;
  };
}

export interface Vote {
  id: string;
  email: string;
  appId: string;
  createdAt: Date;
}

export interface Comment {
  id: string;
  email: string;
  name: string;
  appId?: string; // null for general feedback
  content: string;
  rating?: number;
  approved: boolean;
  createdAt: Date;
}

export interface Investment {
  id: string;
  email: string;
  name: string;
  type: 'portfolio' | 'project';
  tier: string;
  amount: number;
  appId?: string; // for project investments
  status: 'pending' | 'confirmed' | 'complete';
  benefits: string[];
  createdAt: Date;
}

export interface Contact {
  id: string;
  email: string;
  name: string;
  type: 'investor' | 'beta' | 'partner' | 'press' | 'general';
  message: string;
  subscribed: boolean;
  preferences: string[];
  createdAt: Date;
}

export interface MemberAccess {
  id: string;
  email: string;
  investmentId: string;
  appAccess: string[];
  accessLevel: 'lifetime' | 'beta' | 'partner' | 'equity';
  isActive: boolean;
}

export interface InvestmentTier {
  name: string;
  price: string;
  type: 'support' | 'membership' | 'revenue' | 'equity';
  benefits: string[];
  description: string;
}