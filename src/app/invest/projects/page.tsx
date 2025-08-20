'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ProjectsInvestmentPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/#apps');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4">🚀</div>
        <p className="text-lg text-slate-600">Redirecting to project showcase...</p>
      </div>
    </div>
  );
}