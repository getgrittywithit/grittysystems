export interface App {
  id: string;
  name: string;
  tagline: string;
  status: 'live' | 'development' | 'planning' | 'backburner';
  problem: string;
  features: string[];
  url?: string;
  description: string;
  visible?: boolean;
  isNonProfit?: boolean;
  featured?: boolean;
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

export interface Contact {
  id: string;
  email: string;
  name: string;
  type: 'beta' | 'partner' | 'press' | 'general';
  message: string;
  subscribed: boolean;
  preferences: string[];
  createdAt: Date;
}