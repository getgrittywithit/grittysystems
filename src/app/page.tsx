'use client';

import Navigation from '@/components/Navigation';
import AppCard from '@/components/AppCard';
import WaitlistForm from '@/components/WaitlistForm';
import { apps } from '@/lib/data';
import { useVoting } from '@/lib/voting-context';

export default function HomePage() {
  const { getVoteCount, vote } = useVoting();
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="hero-gradient py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Floating elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full float" style={{ animationDelay: '0s' }}></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full float" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full float" style={{ animationDelay: '4s' }}></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-block mb-4 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
              🚀 Now Raising Series A - Join 500+ Early Investors
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              The Future of
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                AI-Powered Apps
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
              Join the ecosystem building tomorrow's essential business tools. 
              <strong>8 apps in development</strong>, <strong>$2.5M raised</strong>, <strong>10K+ waitlist</strong>.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="/invest" className="btn-primary pulse-glow transform hover:scale-105 transition-all duration-300 text-lg px-10 py-4">
                🎯 Invest Now - From $500
              </a>
              <a href="#apps" className="btn-secondary transform hover:scale-105 transition-all duration-300 text-lg px-10 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                🔥 See Live Demos
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-2xl">⭐</span>
                <span>4.9/5 Investor Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🔒</span>
                <span>SEC Reg CF Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <span>Featured in TechCrunch</span>
              </div>
            </div>
          </div>
        </section>

        {/* Live Product Showcase - Grit Collective */}
        <section className="py-16 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-6 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white text-lg font-bold">
                🏆 PROOF OF CONCEPT: LIVE & PROFITABLE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Grit Collective
              </h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
                Our flagship e-commerce success story demonstrates the power of AI-driven automation. 
                <strong className="text-yellow-300"> Profitable since month 3</strong> with <strong className="text-yellow-300">95% automated workflows</strong>.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Live metrics */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-yellow-300 mb-2">50+</div>
                    <div className="text-white/80">Active SKUs</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-green-300 mb-2">95%</div>
                    <div className="text-white/80">Automated</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-blue-300 mb-2">5</div>
                    <div className="text-white/80">Categories</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center">
                    <div className="text-3xl font-bold text-purple-300 mb-2">24/7</div>
                    <div className="text-white/80">Revenue</div>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">🛍️ Product Categories</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Burnables', 'Wall Art', 'Drinkware', 'Apparel', 'Home Decor'].map((category) => (
                      <span key={category} className="px-3 py-1 bg-white/20 rounded-full text-white text-sm">
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Value proposition */}
              <div className="space-y-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">🚀 What Makes It Special</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-300 font-bold">🎨</span>
                      <span>AI-powered product design automation</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-green-300 font-bold">📱</span>
                      <span>Seamless Shopify & Printful integration</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-blue-300 font-bold">🤖</span>
                      <span>Automated social media marketing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-purple-300 font-bold">📊</span>
                      <span>Real-time analytics and optimization</span>
                    </li>
                  </ul>
                </div>

                <div className="flex gap-4">
                  <a 
                    href="https://gritcollectiveco.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 bg-white text-slate-900 font-bold py-4 px-6 rounded-xl text-center hover:bg-gray-100 transition-all transform hover:scale-105"
                  >
                    🛍️ Shop the Live Store
                  </a>
                  <a 
                    href="#apps" 
                    className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-6 rounded-xl text-center hover:bg-white/30 transition-all"
                  >
                    🔍 See the Technology
                  </a>
                </div>
              </div>
            </div>

            {/* Success callout */}
            <div className="mt-12 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-2xl font-bold text-yellow-300 mb-2">
                This is just the beginning.
              </p>
              <p className="text-lg text-white/90">
                Grit Collective proves our AI-powered ecosystem works. Now imagine 8 more apps like this, 
                all generating revenue and accessible through your investment.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Transforming Ideas Into Revenue</h2>
              <p className="text-lg text-slate-600">Join the fastest-growing AI app ecosystem</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="count-up p-6 bg-white rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-blue-500 mb-2">8</div>
                <div className="text-slate-600 font-medium">Apps Building</div>
                <div className="text-xs text-slate-400 mt-1">$50M+ Market Size</div>
              </div>
              <div className="count-up p-6 bg-white rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-green-500 mb-2">$2.5M</div>
                <div className="text-slate-600 font-medium">Already Raised</div>
                <div className="text-xs text-slate-400 mt-1">Series A Target: $5M</div>
              </div>
              <div className="count-up p-6 bg-white rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-slate-600 font-medium">Active Investors</div>
                <div className="text-xs text-slate-400 mt-1">Avg. $1,500 Investment</div>
              </div>
              <div className="count-up p-6 bg-white rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl font-bold text-purple-500 mb-2">25%</div>
                <div className="text-slate-600 font-medium">Revenue Share</div>
                <div className="text-xs text-slate-400 mt-1">Lifetime Access</div>
              </div>
            </div>
            
            {/* Progress bar for funding */}
            <div className="mt-12 max-w-2xl mx-auto">
              <div className="flex justify-between text-sm text-slate-600 mb-2">
                <span>Series A Progress</span>
                <span>$2.5M / $5M (50%)</span>
              </div>
              <div className="w-full bg-slate-200 rounded-full h-4 overflow-hidden">
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-4 rounded-full relative" style={{ width: '50%' }}>
                  <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                </div>
              </div>
              <p className="text-center text-sm text-slate-500 mt-2">Limited time: Early investors get 15% bonus shares</p>
            </div>
          </div>
        </section>

        {/* Apps Section */}
        <section id="apps" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our App Portfolio</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Each app is designed to solve specific problems with AI-powered solutions. 
                Vote for the ones you want prioritized!
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {apps.map((app) => (
                <AppCard
                  key={app.id}
                  app={app}
                  votes={getVoteCount(app.id)}
                  onVote={vote}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Investment Tiers */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 transform rotate-12 scale-150"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black rounded-full text-sm font-bold">
                💰 SERIES A FUNDING - LIMITED TIME
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Investment Opportunities
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Multiple ways to join our journey. From revenue sharing to equity stakes.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Starter Tier */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-2xl mb-4">🌱</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Revenue Share</h3>
                  <div className="text-4xl font-bold text-green-400 mb-2">$500+</div>
                  <p className="text-white/60 mb-6">Minimum Investment</p>
                  
                  <ul className="text-left space-y-3 mb-8 text-white/80">
                    <li className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      25% revenue share across all apps
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      Lifetime access to all apps
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      Monthly profit distributions
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-green-400">✓</span>
                      Early access to new releases
                    </li>
                  </ul>
                  
                  <button className="w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                    Start Revenue Share
                  </button>
                </div>
              </div>

              {/* Growth Tier */}
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border-2 border-blue-400 hover:border-blue-300 transition-all duration-300 transform hover:-translate-y-2 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-400 to-purple-400 text-white px-4 py-1 rounded-full text-sm font-bold">
                  MOST POPULAR
                </div>
                <div className="text-center">
                  <div className="text-2xl mb-4">🚀</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Equity + Revenue</h3>
                  <div className="text-4xl font-bold text-blue-400 mb-2">$5,000+</div>
                  <p className="text-white/60 mb-6">Minimum Investment</p>
                  
                  <ul className="text-left space-y-3 mb-8 text-white/80">
                    <li className="flex items-center gap-3">
                      <span className="text-blue-400">✓</span>
                      0.1-2% equity stake in GrittySystems
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-400">✓</span>
                      35% revenue share (higher tier)
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-400">✓</span>
                      Board observer rights
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-400">✓</span>
                      Quarterly business updates
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-blue-400">✓</span>
                      Exit event participation
                    </li>
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-xl transition-all pulse-glow">
                    Join Growth Tier
                  </button>
                </div>
              </div>

              {/* Enterprise Tier */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-center">
                  <div className="text-2xl mb-4">👑</div>
                  <h3 className="text-2xl font-bold text-white mb-4">Strategic Partner</h3>
                  <div className="text-4xl font-bold text-yellow-400 mb-2">$25K+</div>
                  <p className="text-white/60 mb-6">Minimum Investment</p>
                  
                  <ul className="text-left space-y-3 mb-8 text-white/80">
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-400">✓</span>
                      2-10% equity ownership
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-400">✓</span>
                      Board seat (50K+ investments)
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-400">✓</span>
                      Strategic advisory role
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-400">✓</span>
                      Priority on future rounds
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="text-yellow-400">✓</span>
                      Custom partnership terms
                    </li>
                  </ul>
                  
                  <button className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold py-3 px-6 rounded-xl transition-all">
                    Become Partner
                  </button>
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Invest?</h3>
              <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                Join 500+ investors building the future of AI-powered business tools. 
                All investments are SEC Reg CF compliant.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/invest" className="btn-primary text-lg px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                  🎯 View Full Pitch Deck
                </a>
                <a href="/invest/portfolio" className="btn-secondary text-lg px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                  📊 See Financial Projections
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <WaitlistForm />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-400">
            © 2024 GrittySystems. Building the future of AI-powered applications.
          </p>
        </div>
      </footer>
    </div>
  );
}