'use client';

import Navigation from '@/components/Navigation';
import AppCard from '@/components/AppCard';
import { apps } from '@/lib/data';
import { useVoting } from '@/lib/voting-context';

export default function VotingPage() {
  const { getVoteCount, vote, topVotedApps } = useVoting();
  const topApps = topVotedApps();
  const totalVotes = topApps.reduce((sum, app) => sum + app.votes, 0);

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              Community Voting Dashboard
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
              Help us prioritize app development by voting for the applications you want to see first. 
              Your votes directly influence our development roadmap.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <div className="text-2xl font-bold text-blue-600 mb-1">{totalVotes}</div>
                <div className="text-slate-600 text-sm">Total Votes</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <div className="text-2xl font-bold text-green-600 mb-1">{apps.length}</div>
                <div className="text-slate-600 text-sm">Apps Available</div>
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <div className="text-2xl font-bold text-purple-600 mb-1">
                  {topApps[0]?.votes || 0}
                </div>
                <div className="text-slate-600 text-sm">Top App Votes</div>
              </div>
            </div>
          </div>

          {/* Top Voted Apps */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">🏆 Most Voted Apps</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {topApps.slice(0, 3).map((appData, index) => {
                const app = apps.find(a => a.id === appData.appId);
                if (!app) return null;
                
                return (
                  <div key={app.id} className="relative">
                    {index === 0 && (
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full">
                        #1
                      </div>
                    )}
                    {index === 1 && (
                      <div className="absolute -top-2 -right-2 bg-gray-400 text-gray-900 text-xs font-bold px-2 py-1 rounded-full">
                        #2
                      </div>
                    )}
                    {index === 2 && (
                      <div className="absolute -top-2 -right-2 bg-orange-400 text-orange-900 text-xs font-bold px-2 py-1 rounded-full">
                        #3
                      </div>
                    )}
                    <AppCard
                      app={app}
                      votes={getVoteCount(app.id)}
                      onVote={vote}
                    />
                  </div>
                );
              })}
            </div>
          </section>

          {/* Voting Results Chart */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">📊 Voting Results</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
              <div className="space-y-4">
                {topApps.map((appData, index) => {
                  const app = apps.find(a => a.id === appData.appId);
                  if (!app) return null;
                  
                  const percentage = totalVotes > 0 ? (appData.votes / totalVotes) * 100 : 0;
                  
                  return (
                    <div key={app.id} className="flex items-center space-x-4">
                      <div className="w-8 text-center text-sm font-medium text-slate-600">
                        #{index + 1}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-slate-900">{app.name}</span>
                          <span className="text-sm text-slate-600">{appData.votes} votes</span>
                        </div>
                        <div className="w-full bg-slate-200 rounded-full h-2">
                          <div 
                            className="bg-blue-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${percentage}%` }}
                          />
                        </div>
                      </div>
                      <div className="w-12 text-right text-sm text-slate-600">
                        {percentage.toFixed(1)}%
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* All Apps */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">🗳️ Vote for Your Favorites</h2>
            <p className="text-slate-600 mb-8">
              Every vote counts! Click the vote button on any app to show your support for its development priority.
            </p>
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
          </section>
        </div>
      </main>
    </div>
  );
}