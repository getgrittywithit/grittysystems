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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                AI-Powered Applications
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed">
              Automate workflows, boost productivity, and scale effortlessly with our suite of intelligent business tools.
              Join thousands of businesses already transforming their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#solutions" className="btn-primary pulse-glow transform hover:scale-105 transition-all duration-300 text-lg px-10 py-4">
                Explore AI Solutions
              </a>
              <a href="#apps" className="btn-secondary transform hover:scale-105 transition-all duration-300 text-lg px-10 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30">
                See Live Demos
              </a>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🤖</span>
                <span>AI-Powered Solutions</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">🚀</span>
                <span>Automated Workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">💡</span>
                <span>Scalable Technology</span>
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
                🏆 REAL WORLD EXAMPLE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Grit Collective
              </h2>
              <p className="text-xl text-white/90 max-w-4xl mx-auto mb-8">
                Our e-commerce platform demonstrates practical AI-driven automation in action.
                See how artificial intelligence can streamline business operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Features */}
              <div className="space-y-6">
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
                  <h3 className="text-xl font-bold text-white mb-4">🚀 AI-Powered Features</h3>
                  <ul className="space-y-3 text-white/90">
                    <li className="flex items-start gap-3">
                      <span className="text-yellow-300 font-bold">🎨</span>
                      <span>Automated product design generation</span>
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
                    🛍️ Visit Live Store
                  </a>
                  <a 
                    href="#apps" 
                    className="flex-1 bg-white/20 backdrop-blur-sm border border-white/30 text-white font-bold py-4 px-6 rounded-xl text-center hover:bg-white/30 transition-all"
                  >
                    🔍 Explore Technology
                  </a>
                </div>
              </div>
            </div>

            {/* Vision callout */}
            <div className="mt-12 text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-2xl font-bold text-yellow-300 mb-2">
                Real AI. Real Results.
              </p>
              <p className="text-lg text-white/90">
                Grit Collective showcases what's possible when AI meets practical business needs. 
                Explore our growing ecosystem of intelligent applications.
              </p>
            </div>
          </div>
        </section>

        {/* Value Proposition Section */}
        <section id="solutions" className="py-16 bg-gradient-to-r from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Choose AI-Powered Applications?</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Modern businesses need intelligent solutions that adapt, learn, and grow with your needs.
                Our AI applications deliver measurable value through automation and optimization.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Automated Workflows</h3>
                <p className="text-slate-600">
                  Eliminate repetitive tasks and streamline operations with intelligent automation that learns from your business patterns.
                </p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Data-Driven Insights</h3>
                <p className="text-slate-600">
                  Make informed decisions with AI-powered analytics that reveal hidden patterns and optimization opportunities.
                </p>
              </div>
              <div className="p-8 bg-white rounded-xl shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Scalable Solutions</h3>
                <p className="text-slate-600">
                  Grow your business with applications that scale automatically, adapting to increased demand without manual intervention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section id="apps" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Featured AI Applications</h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                Explore our growing collection of AI-powered applications designed to solve real-world problems. 
                Each project demonstrates practical AI implementation for specific use cases.
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

        {/* Technology Showcase */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-400 to-purple-400 transform rotate-12 scale-150"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                AI-Powered Innovation
              </h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Our applications leverage cutting-edge AI technologies to deliver practical solutions 
                for everyday challenges. From smart automation to intelligent insights.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-4xl mb-4">🤖</div>
                <h3 className="text-2xl font-bold text-white mb-4">Machine Learning</h3>
                <p className="text-white/80">
                  Advanced ML algorithms that learn from your data to provide personalized experiences 
                  and automated decision-making.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-4xl mb-4">🔗</div>
                <h3 className="text-2xl font-bold text-white mb-4">Smart Integration</h3>
                <p className="text-white/80">
                  Seamless connectivity with existing tools and platforms, creating unified workflows 
                  that enhance productivity.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-2xl font-bold text-white mb-4">User-Centric Design</h3>
                <p className="text-white/80">
                  Intuitive interfaces that make complex AI functionality accessible to everyone, 
                  regardless of technical expertise.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <a href="#apps" className="btn-primary text-lg px-8 py-4 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600">
                Explore All Projects
              </a>
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