'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function InvestPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/invest/pantrypal-pro');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-4xl mb-4">🚀</div>
        <p className="text-lg text-slate-600">Redirecting to PantryPal Pro pitch deck...</p>
      </div>
    </div>
  );
}