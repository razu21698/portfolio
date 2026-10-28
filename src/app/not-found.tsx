import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Layers } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 sm:p-10 rounded-xl border border-[#E4E4DF] shadow-xs">
        <span className="text-4xl sm:text-6xl font-black font-mono text-[#141413]">
          404
        </span>
        <h1 className="text-2xl font-bold text-[#141413]">
          Page Not Found
        </h1>
        <p className="text-sm text-[#5F5F58] leading-relaxed">
          The requested route does not exist or may have been relocated during an architecture upgrade.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button href="/" variant="primary" size="md" className="w-full sm:w-auto">
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Button>
          <Button href="/work" variant="outline" size="md" className="w-full sm:w-auto">
            <Layers className="w-4 h-4" />
            <span>View Projects</span>
          </Button>
        </div>
      </div>
    </div>
  );
}

