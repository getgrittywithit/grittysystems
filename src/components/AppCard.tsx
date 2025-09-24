'use client';

import { App } from '@/types';
import { getStatusColor } from '@/lib/utils';
import { useState } from 'react';

interface AppCardProps {
  app: App;
}

export default function AppCard({ app }: AppCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const isLive = app.status === 'live';
  const isGritCollective = app.id === 'grit-collective';

  // Special treatment for Grit Collective as flagship success story
  if (isGritCollective) {
    return (
      <div className="relative bg-gradient-to-br from-green-50 via-white to-blue-50 rounded-xl shadow-lg border-2 border-green-200 p-8 transform hover:-translate-y-2 transition-all duration-300 hover:shadow-2xl">
        {/* Success badge */}
        <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
          🏆 FLAGSHIP SUCCESS
        </div>
        
        <div className="flex items-start justify-between mb-6">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-2">{app.name}</h3>
            <p className="text-slate-700 font-medium">{app.tagline}</p>
          </div>
          <span className="px-4 py-2 bg-green-500 text-white rounded-full text-sm font-bold flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full animate-ping"></span>
            LIVE & PROFITABLE
          </span>
        </div>

        {/* Live status showcase for Grit Collective */}
        <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-white/60 backdrop-blur-sm rounded-lg border border-white/40">
          <div className="text-center">
            <div className="text-lg font-bold text-green-600">Live Store</div>
            <div className="text-xs text-slate-600">Active E-commerce</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">AI Powered</div>
            <div className="text-xs text-slate-600">Automated Systems</div>
          </div>
          <div className="text-center col-span-2">
            <div className="text-sm font-semibold text-purple-600">Real Revenue</div>
            <div className="text-xs text-slate-600">Proven Success</div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-sm font-bold text-slate-800 mb-2">🎯 Proven Business Model:</p>
            <p className="text-slate-700 text-sm bg-white/40 p-3 rounded-lg">{app.problem}</p>
          </div>

          <div>
            <p className="text-sm font-bold text-slate-800 mb-3">🚀 Success Features:</p>
            <ul className="space-y-2">
              {app.features.slice(0, isExpanded ? undefined : 4).map((feature, index) => (
                <li key={index} className="text-slate-700 text-sm flex items-start bg-white/40 p-2 rounded-lg">
                  <span className="text-green-500 mr-2 font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            {app.features.length > 4 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-blue-600 text-sm hover:text-blue-700 mt-2 font-medium"
              >
                {isExpanded ? 'Show less' : `Show ${app.features.length - 4} more features`}
              </button>
            )}
          </div>

          <div className="flex items-center justify-center pt-4 border-t-2 border-green-200">
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-bold px-6 py-3 rounded-lg hover:from-green-600 hover:to-blue-600 transition-all pulse-glow"
            >
              🛍️ Shop Live Store →
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Standard card for other apps
  return (
    <div className="card">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-slate-900 mb-1">{app.name}</h3>
          <p className="text-slate-600 text-sm">{app.tagline}</p>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
          {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
        </span>
      </div>

      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium text-slate-700 mb-1">Problem Solved:</p>
          <p className="text-slate-600 text-sm">{app.problem}</p>
        </div>

        <div>
          <p className="text-sm font-medium text-slate-700 mb-2">Key Features:</p>
          <ul className="space-y-1">
            {app.features.slice(0, isExpanded ? undefined : 3).map((feature, index) => (
              <li key={index} className="text-slate-600 text-sm flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                {feature}
              </li>
            ))}
          </ul>
          {app.features.length > 3 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-blue-500 text-sm hover:text-blue-600 mt-1"
            >
              {isExpanded ? 'Show less' : `Show ${app.features.length - 3} more features`}
            </button>
          )}
        </div>

        <div className="flex items-center justify-center pt-4 border-t border-slate-200">
          {app.url && (
            <a
              href={app.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-500 text-sm font-medium hover:text-green-600"
            >
              Visit Live App →
            </a>
          )}
        </div>
      </div>
    </div>
  );
}