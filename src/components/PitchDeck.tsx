'use client';

import { App } from '@/types';

interface PitchData {
  brandColors: {
    primary: string;
    secondary: string;
    accent: string;
  };
  problemStatement: string;
  solution: string;
  marketData: {
    size: string;
    growth: string;
    segments: string[];
  };
  technicalApproach: {
    architecture: string[];
    technologies: string[];
    aiFeatures: string[];
    integrations: string[];
  };
  goToMarket: {
    strategy: string;
    channels: string[];
    pricing: string;
    timeline: string[];
  };
  fundingNeeds: {
    amount: string;
    useOfFunds: string[];
    milestones: string[];
    roi: string;
  };
  competitiveAnalysis: {
    competitors: string[];
    advantages: string[];
  };
  team: string[];
  traction: string[];
}

interface PitchDeckProps {
  app: App;
  pitchData: PitchData;
}

export default function PitchDeck({ app, pitchData }: PitchDeckProps) {
  const { brandColors } = pitchData;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      {/* Hero Section */}
      <section 
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ 
          background: `linear-gradient(135deg, ${brandColors.primary}15 0%, ${brandColors.secondary}15 50%, ${brandColors.accent}15 100%)` 
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-6">
              <div 
                className="inline-block px-6 py-3 rounded-full text-white font-bold text-lg shadow-lg"
                style={{ backgroundColor: brandColors.primary }}
              >
                Investment Opportunity
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold text-slate-900 mb-6">
              {app.name}
            </h1>
            <p className="text-2xl md:text-3xl text-slate-700 mb-8 max-w-4xl mx-auto">
              {app.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <div 
                className="px-8 py-4 rounded-xl text-white font-bold text-xl shadow-lg hover:shadow-xl transition-all"
                style={{ backgroundColor: brandColors.primary }}
              >
                {pitchData.fundingNeeds.amount}
              </div>
              <div className="text-slate-600 text-lg">
                Seeking strategic investment partners
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">The Problem</h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100">
              <p className="text-xl text-slate-700 leading-relaxed text-center">
                {pitchData.problemStatement}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Solution</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xl text-slate-700 leading-relaxed mb-8">
                {pitchData.solution}
              </p>
              <div className="space-y-4">
                {app.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: brandColors.accent }}
                    >
                      ✓
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Benefits</h3>
              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: brandColors.primary }}>35%</div>
                  <div className="text-slate-600">Food Waste Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: brandColors.secondary }}>$1,500</div>
                  <div className="text-slate-600">Annual Savings per Household</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold" style={{ color: brandColors.accent }}>60%</div>
                  <div className="text-slate-600">Time Saved on Meal Planning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Market Opportunity</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Market Size</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold" style={{ color: brandColors.primary }}>
                    {pitchData.marketData.size}
                  </div>
                  <div className="text-slate-600">Total Addressable Market</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: brandColors.secondary }}>
                    {pitchData.marketData.growth}
                  </div>
                  <div className="text-slate-600">Annual Growth Rate</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Target Segments</h3>
              <div className="space-y-3">
                {pitchData.marketData.segments.map((segment, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: brandColors.accent }}
                    >
                      {index + 1}
                    </div>
                    <span className="text-slate-700">{segment}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Approach */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Technical Approach</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Architecture</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {pitchData.technicalApproach.architecture.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span style={{ color: brandColors.primary }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Technologies</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {pitchData.technicalApproach.technologies.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span style={{ color: brandColors.secondary }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">AI Features</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {pitchData.technicalApproach.aiFeatures.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span style={{ color: brandColors.accent }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-lg font-bold text-slate-900 mb-4">Integrations</h3>
              <ul className="space-y-2 text-sm text-slate-600">
                {pitchData.technicalApproach.integrations.map((item, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span style={{ color: brandColors.primary }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Go-to-Market Strategy */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Go-to-Market Strategy</h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Strategy & Pricing</h3>
                <p className="text-slate-700 mb-4">{pitchData.goToMarket.strategy}</p>
                <div 
                  className="p-4 rounded-lg text-white font-semibold"
                  style={{ backgroundColor: `${brandColors.primary}20`, color: brandColors.primary }}
                >
                  {pitchData.goToMarket.pricing}
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Marketing Channels</h3>
                <ul className="space-y-3">
                  {pitchData.goToMarket.channels.map((channel, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div 
                        className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xs"
                        style={{ backgroundColor: brandColors.secondary }}
                      >
                        {index + 1}
                      </div>
                      <span className="text-slate-700">{channel}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Timeline & Milestones</h3>
              <div className="space-y-4">
                {pitchData.goToMarket.timeline.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div 
                      className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: brandColors.accent }}
                    >
                      {index + 1}
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">Phase {index + 1}</div>
                      <div className="text-slate-700 text-sm">{milestone}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Funding Needs */}
      <section 
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ 
          background: `linear-gradient(135deg, ${brandColors.primary}10 0%, ${brandColors.secondary}10 100%)` 
        }}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Investment Details</h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Use of Funds</h3>
              <div className="space-y-4">
                {pitchData.fundingNeeds.useOfFunds.map((use, index) => (
                  <div key={index} className="text-slate-700 text-sm">
                    {use}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Key Milestones</h3>
              <div className="space-y-4">
                {pitchData.fundingNeeds.milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-xs"
                      style={{ backgroundColor: brandColors.primary }}
                    >
                      ✓
                    </div>
                    <span className="text-slate-700 text-sm">{milestone}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-6">Expected Returns</h3>
              <div 
                className="text-center p-6 rounded-lg"
                style={{ backgroundColor: `${brandColors.accent}15` }}
              >
                <div className="text-3xl font-bold mb-2" style={{ color: brandColors.accent }}>
                  15x ROI
                </div>
                <p className="text-slate-700 text-sm">{pitchData.fundingNeeds.roi}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Analysis & Traction */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Competitive Advantages</h2>
              <div className="space-y-4">
                {pitchData.competitiveAnalysis.advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: brandColors.primary }}
                    >
                      ✓
                    </div>
                    <span className="text-slate-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Current Traction</h2>
              <div className="space-y-4">
                {pitchData.traction.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div 
                      className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
                      style={{ backgroundColor: brandColors.accent }}
                    >
                      ★
                    </div>
                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-20 px-4 sm:px-6 lg:px-8"
        style={{ 
          background: `linear-gradient(135deg, ${brandColors.primary} 0%, ${brandColors.secondary} 100%)` 
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Join Us in Revolutionizing Food Management
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Partner with us to capture the massive opportunity in AI-powered food technology 
            while making a positive impact on sustainability and household budgets.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="/contact" 
              className="px-8 py-4 bg-white text-slate-900 font-bold text-lg rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Schedule Investment Call
            </a>
            <a 
              href="mailto:invest@grittysystems.com" 
              className="px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold text-lg rounded-xl hover:bg-white/30 transition-all"
            >
              Request Detailed Financials
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}