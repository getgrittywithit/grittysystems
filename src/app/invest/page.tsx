import Navigation from '@/components/Navigation';
import InvestmentPortal from '@/components/InvestmentPortal';
import { portfolioTiers, projectTiers } from '@/lib/data';

export default function InvestPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl font-bold text-slate-900 mb-6">
              Investment Opportunities
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-4xl mx-auto">
              Join the GrittySystem ecosystem through flexible investment options. 
              Choose portfolio investment for the entire ecosystem or project-specific 
              investments for individual apps.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-blue-900 text-sm">
                <strong>Important:</strong> These are investment opportunities in early-stage 
                software products. Please invest responsibly and only what you can afford.
              </p>
            </div>
          </section>

          {/* Investment Approach */}
          <section className="mb-16">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-center">
                <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🏢
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Portfolio Investment</h3>
                <p className="text-slate-600">
                  Invest in the entire GrittySystem ecosystem. Get access to all apps, 
                  revenue sharing across profitable applications, and potential equity consideration.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">
                  🎯
                </div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-4">Project Investment</h3>
                <p className="text-slate-600">
                  Focus on specific apps that interest you most. Get lifetime access, 
                  influence product direction, and share in the success of individual projects.
                </p>
              </div>
            </div>
          </section>

          {/* Portfolio Investment Tiers */}
          <section className="mb-20">
            <InvestmentPortal
              tiers={portfolioTiers}
              title="Portfolio Investment"
              description="Invest in the entire GrittySystem ecosystem for maximum benefits and diversification"
              type="portfolio"
            />
          </section>

          {/* Project Investment Tiers */}
          <section className="mb-20">
            <InvestmentPortal
              tiers={projectTiers}
              title="Project-Specific Investment"
              description="Focus your investment on individual apps that align with your interests"
              type="project"
            />
          </section>

          {/* Legal Disclaimer */}
          <section className="bg-slate-100 rounded-lg p-8 text-sm text-slate-600">
            <h3 className="font-semibold text-slate-900 mb-4">Investment Disclaimer</h3>
            <div className="space-y-3">
              <p>
                These investment opportunities involve risk. Software development projects 
                may not achieve expected outcomes or revenue projections.
              </p>
              <p>
                Revenue sharing is based on net profits after operational expenses. 
                Equity considerations are subject to company valuation and legal structure.
              </p>
              <p>
                All investments are final. Please review terms carefully and consult 
                financial advisors if needed.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}