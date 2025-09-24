'use client';

import { useState } from 'react';

export default function WaitlistForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
      } else {
        const errorData = await response.json();
        console.error('Waitlist signup failed:', errorData.error);
        // You could show an error message to the user here
      }
    } catch (error) {
      console.error('Waitlist signup error:', error);
      // You could show an error message to the user here
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="text-green-500 text-2xl mb-2">✓</div>
        <h3 className="text-lg font-semibold text-slate-900 mb-1">Thanks for joining!</h3>
        <p className="text-slate-600">We'll keep you updated on our progress.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
      <h3 className="text-lg font-semibold text-slate-900 mb-2">Follow Our Journey</h3>
      <p className="text-slate-600 mb-4">
        Get updates on new projects, development progress, and community initiatives.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? 'Subscribing...' : 'Stay Connected'}
        </button>
      </form>
    </div>
  );
}