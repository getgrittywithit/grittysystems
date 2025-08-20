'use client';

import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import PitchDeck from '@/components/PitchDeck';
import { apps } from '@/lib/data';
import { pitchDeckData } from '@/lib/pitch-data';

interface ProjectPitchPageProps {
  params: {
    projectId: string;
  };
}

export default function ProjectPitchPage({ params }: ProjectPitchPageProps) {
  const { projectId } = params;
  
  const app = apps.find(a => a.id === projectId);
  const pitchData = pitchDeckData[projectId];
  
  if (!app || !pitchData) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <PitchDeck app={app} pitchData={pitchData} />
    </div>
  );
}