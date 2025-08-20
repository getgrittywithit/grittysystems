'use client';

import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import PitchDeck from '@/components/PitchDeck';
import { apps } from '@/lib/data';
import { pitchDeckData } from '@/lib/pitch-data';

interface ProjectPitchPageProps {
  params: Promise<{
    projectId: string;
  }>;
}

export default async function ProjectPitchPage({ params }: ProjectPitchPageProps) {
  const { projectId } = await params;
  
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