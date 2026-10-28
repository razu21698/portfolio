'use client';

import React, { useEffect, useState } from 'react';

export function ScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const currentProgress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (scrollProgress <= 0) return null;

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 h-[2px] bg-transparent pointer-events-none"
      aria-hidden="true"
    >
      <div
        className="h-full bg-[#315CFF] transition-all duration-75 ease-out shadow-[0_0_8px_rgba(49,92,255,0.6)]"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
}

