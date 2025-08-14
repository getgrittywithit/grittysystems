import Navigation from '@/components/Navigation';
import InvestmentPortal from '@/components/InvestmentPortal';
import { portfolioTiers } from '@/lib/data';

export default function PortfolioInvestmentPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <InvestmentPortal
            tiers={portfolioTiers}
            title="Portfolio Investment"
            description="Invest in the entire GrittySystem ecosystem. Get access to all current and future apps, participate in revenue sharing, and join our community of builders."
            type="portfolio"
          />

          {/* Additional Portfolio Benefits */}
          <section className="mt-16">
            <div className="bg-white rounded-lg p-8 border border-slate-200">
              <h3 className="text-2xl font-semibold text-slate-900 mb-6 text-center">
                Why Choose Portfolio Investment?
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-success text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    ∞
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Lifetime Access</h4>
                  <p className="text-slate-600 text-sm">
                    Access all apps forever without monthly fees
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    📈
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Revenue Sharing</h4>
                  <p className="text-slate-600 text-sm">
                    Participate in profits across all successful apps
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-secondary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    🤝
                  </div>
                  <h4 className="font-semibold text-slate-900 mb-2">Strategic Input</h4>
                  <p className="text-slate-600 text-sm">
                    Influence the direction of our entire ecosystem
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