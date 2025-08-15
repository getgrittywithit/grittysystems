'use client';

import { InvestmentTier } from '@/types';

interface InvestmentPortalProps {
  tiers: InvestmentTier[];
  title: string;
  description: string;
  type: 'portfolio' | 'project';
}

export default function InvestmentPortal({ tiers, title, description, type }: InvestmentPortalProps) {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
        <p className="text-lg text-slate-600 max-w-3xl mx-auto">{description}</p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {tiers.map((tier, index) => (
          <div
            key={tier.name}
            className={`card relative ${index === 1 ? 'border-primary border-2 transform scale-105' : ''}`}
          >
            {index === 1 && (
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-blue-500 mb-2">{tier.price}</div>
              <p className="text-slate-600 text-sm">{tier.description}</p>
            </div>

            <ul className="space-y-3 mb-8">
              {tier.benefits.map((benefit, benefitIndex) => (
                <li key={benefitIndex} className="flex items-start text-sm">
                  <span className="text-green-500 mr-2 mt-0.5">✓</span>
                  <span className="text-slate-600">{benefit}</span>
                </li>
              ))}
            </ul>

            <button className="w-full btn-primary">
              Choose {tier.name}
            </button>
          </div>
        ))}
      </div>

      <div className="bg-slate-50 rounded-lg p-6 text-center">
        <h3 className="text-lg font-semibold text-slate-900 mb-2">Questions about investing?</h3>
        <p className="text-slate-600 mb-4">
          We're here to help you understand the opportunities and benefits.
        </p>
        <a href="/contact" className="btn-secondary">
          Contact Us
        </a>
      </div>
    </div>
  );
}