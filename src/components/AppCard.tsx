'use client';

import { App } from '@/types';
import { getStatusColor } from '@/lib/utils';
import { useVoting } from '@/lib/voting-context';
import { useState } from 'react';

interface AppCardProps {
  app: App;
  votes?: number;
  onVote?: (appId: string) => void;
}

export default function AppCard({ app, votes = 0, onVote }: AppCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { hasVoted } = useVoting();
  const userHasVoted = hasVoted(app.id);

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

        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
          <div className="flex items-center space-x-4">
            <div className="text-sm text-slate-600">
              <span className="font-medium">{votes}</span> votes
            </div>
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
          <button
            onClick={() => onVote?.(app.id)}
            className={`text-sm px-4 py-1 ${
              userHasVoted 
                ? 'bg-green-100 text-green-700 border border-green-300 rounded-lg hover:bg-green-200' 
                : 'btn-primary'
            }`}
          >
            {userHasVoted ? '✓ Voted' : 'Vote for Priority'}
          </button>
        </div>
      </div>
    </div>
  );
}