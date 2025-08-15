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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              GrittySystem App Ecosystem
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto">
              A collection of AI-powered applications solving real problems for businesses and families. 
              Vote on priorities, invest in development, and get early access to innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/invest" className="btn-primary">
                Explore Investment Opportunities
              </a>
              <a href="#apps" className="btn-secondary">
                View Our Apps
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-500 mb-2">8</div>
                <div className="text-slate-600">Apps in Development</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-500 mb-2">1</div>
                <div className="text-slate-600">Live Application</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">4</div>
                <div className="text-slate-600">Investment Tiers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-700 mb-2">∞</div>
                <div className="text-slate-600">Lifetime Access</div>
              </div>
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

        {/* Investment Teaser */}
        <section className="py-16 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Invest in the Future of AI-Powered Apps
            </h2>
            <p className="text-lg text-slate-600 mb-8 max-w-3xl mx-auto">
              Choose between portfolio investment in the entire GrittySystem ecosystem 
              or project-specific investments in individual apps. Get lifetime access, 
              revenue sharing, or equity consideration.
            </p>
            <a href="/invest" className="btn-primary text-lg px-8 py-3">
              View Investment Options
            </a>
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
            © 2024 GrittySystem. Building the future of AI-powered applications.
          </p>
        </div>
      </footer>
    </div>
  );
}