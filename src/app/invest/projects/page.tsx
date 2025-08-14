import Navigation from '@/components/Navigation';
import InvestmentPortal from '@/components/InvestmentPortal';
import AppCard from '@/components/AppCard';
import { projectTiers, apps } from '@/lib/data';

export default function ProjectInvestmentPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Project Investment Tiers */}
          <section className="mb-16">
            <InvestmentPortal
              tiers={projectTiers}
              title="Project-Specific Investment"
              description="Choose specific apps to invest in. Perfect for focusing on solutions that align with your interests or industry expertise."
              type="project"
            />
          </section>

          {/* Available Projects */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Choose Your Projects
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Select the apps you want to invest in. Each project has its own 
                development timeline and revenue potential.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {apps.map((app) => (
                <div key={app.id} className="space-y-4">
                  <AppCard
                    app={app}
                    votes={Math.floor(Math.random() * 50) + 10}
                  />
                  <div className="bg-slate-50 rounded-lg p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">Investment Opportunity</h4>
                    <p className="text-slate-600 text-sm mb-3">
                      {app.status === 'live' 
                        ? 'Revenue sharing available immediately' 
                        : `Estimated launch: ${app.status === 'development' ? 'Q2 2024' : 'Q4 2024'}`
                      }
                    </p>
                    <button className="btn-primary w-full text-sm">
                      Invest in {app.name}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Project Investment Benefits */}
          <section className="mt-16">
            <div className="bg-white rounded-lg p-8 border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
                Project Investment Advantages
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    🎯
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Focused Investment</h4>
                  <p className="text-slate-600 text-sm">
                    Invest only in apps that solve problems you care about
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-success text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    🚀
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Direct Impact</h4>
                  <p className="text-slate-600 text-sm">
                    Your investment directly accelerates specific app development
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    💡
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Product Influence</h4>
                  <p className="text-slate-600 text-sm">
                    Shape the features and direction of your chosen apps
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}