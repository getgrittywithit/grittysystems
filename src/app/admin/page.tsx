'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import AdminDashboard from '@/components/AdminDashboard';

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password check - in production, use proper authentication
    if (password === 'admin123') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid password');
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen">
        <Navigation />
        
        <main className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md mx-auto">
            <div className="card">
              <h1 className="text-2xl font-bold text-slate-900 mb-6 text-center">
                Admin Access
              </h1>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-slate-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                    required
                  />
                  {error && (
                    <p className="text-red-600 text-sm mt-1">{error}</p>
                  )}
                </div>
                
                <button type="submit" className="w-full btn-primary">
                  Login
                </button>
              </form>
              
              <div className="mt-6 text-center text-sm text-slate-500">
                <p>Demo password: admin123</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-slate-900">
              Admin Dashboard
            </h1>
            <button
              onClick={() => setIsAuthenticated(false)}
              className="text-slate-500 hover:text-slate-700 text-sm"
            >
              Logout
            </button>
          </div>
          
          <AdminDashboard />
        </div>
      </main>
    </div>
  );
}