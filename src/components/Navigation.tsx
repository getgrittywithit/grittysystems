'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-slate-900">
              GrittySystems
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/#apps" className="text-slate-700 hover:text-slate-900 transition-colors">
              Projects
            </Link>
            <Link href="https://gritcollectiveco.com" target="_blank" className="text-slate-700 hover:text-slate-900 transition-colors">
              Live Demo
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-slate-900 transition-colors">
              Contact
            </Link>
            <Link href="/admin" className="text-slate-500 hover:text-slate-700 transition-colors text-sm">
              Admin
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-700 hover:text-slate-900"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/#apps" className="block px-3 py-2 text-slate-700 hover:text-slate-900">
                Projects
              </Link>
              <Link href="https://gritcollectiveco.com" target="_blank" className="block px-3 py-2 text-slate-700 hover:text-slate-900">
                Live Demo
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-slate-700 hover:text-slate-900">
                Contact
              </Link>
              <Link href="/admin" className="block px-3 py-2 text-slate-500 hover:text-slate-700">
                Admin
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}