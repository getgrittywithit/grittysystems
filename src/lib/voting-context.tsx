'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface VotingData {
  [appId: string]: number;
}

interface UserVotes {
  [appId: string]: boolean;
}

interface VotingContextType {
  votes: VotingData;
  userVotes: UserVotes;
  vote: (appId: string) => void;
  hasVoted: (appId: string) => boolean;
  getVoteCount: (appId: string) => number;
  topVotedApps: () => Array<{ appId: string; votes: number }>;
}

const VotingContext = createContext<VotingContextType | undefined>(undefined);

export function VotingProvider({ children }: { children: React.ReactNode }) {
  const [votes, setVotes] = useState<VotingData>({});
  const [userVotes, setUserVotes] = useState<UserVotes>({});

  // Load voting data from localStorage on mount
  useEffect(() => {
    const savedVotes = localStorage.getItem('app-votes');
    const savedUserVotes = localStorage.getItem('user-votes');
    
    if (savedVotes) {
      setVotes(JSON.parse(savedVotes));
    } else {
      // Initialize with some sample data
      const initialVotes = {
        'phone-app': 42,
        'crypto-platform': 38,
        'car-rental-app': 31,
        'restaurant-system': 29,
        'wellness-tracker': 26,
        'logistics-platform': 23,
        'ai-assistant': 35,
        'event-platform': 20
      };
      setVotes(initialVotes);
    }
    
    if (savedUserVotes) {
      setUserVotes(JSON.parse(savedUserVotes));
    }
  }, []);

  // Save to localStorage whenever votes change
  useEffect(() => {
    localStorage.setItem('app-votes', JSON.stringify(votes));
  }, [votes]);

  useEffect(() => {
    localStorage.setItem('user-votes', JSON.stringify(userVotes));
  }, [userVotes]);

  const vote = (appId: string) => {
    if (userVotes[appId]) {
      // Remove vote
      setVotes(prev => ({
        ...prev,
        [appId]: Math.max(0, (prev[appId] || 0) - 1)
      }));
      setUserVotes(prev => ({
        ...prev,
        [appId]: false
      }));
    } else {
      // Add vote
      setVotes(prev => ({
        ...prev,
        [appId]: (prev[appId] || 0) + 1
      }));
      setUserVotes(prev => ({
        ...prev,
        [appId]: true
      }));
    }
  };

  const hasVoted = (appId: string) => {
    return !!userVotes[appId];
  };

  const getVoteCount = (appId: string) => {
    return votes[appId] || 0;
  };

  const topVotedApps = () => {
    return Object.entries(votes)
      .map(([appId, count]) => ({ appId, votes: count }))
      .sort((a, b) => b.votes - a.votes);
  };

  return (
    <VotingContext.Provider value={{ 
      votes, 
      userVotes, 
      vote, 
      hasVoted, 
      getVoteCount, 
      topVotedApps 
    }}>
      {children}
    </VotingContext.Provider>
  );
}

export function useVoting() {
  const context = useContext(VotingContext);
  if (context === undefined) {
    throw new Error('useVoting must be used within a VotingProvider');
  }
  return context;
}