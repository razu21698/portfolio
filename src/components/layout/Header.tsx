'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-200 border-b',
        scrolled
          ? 'bg-[#F7F7F4]/95 backdrop-blur-md border-[#E4E4DF] shadow-xs'
          : 'bg-[#F7F7F4] border-transparent'
      )}
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Editorial Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315CFF] rounded py-1"
          aria-label="Ahmed Razu — Homepage"
        >
          <div className="w-8 h-8 rounded bg-[#141413] text-white flex items-center justify-center font-bold text-sm tracking-wider group-hover:bg-[#315CFF] transition-colors transition-craft font-mono">
            R
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold tracking-tight text-base sm:text-lg text-[#141413] leading-none flex items-center gap-1.5 font-['Montserrat']">
              AHMED RAZU
              <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#696969] mt-0.5">
              WordPress &amp; Laravel
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className="hidden md:flex items-center gap-1 bg-white/90 border border-[#E4E4DF] rounded-full px-4 py-1.5 shadow-2xs"
        >
          {siteConfig.navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== '/' && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'text-xs uppercase tracking-wider font-semibold px-4 py-1.5 rounded-full transition-all transition-craft relative',
                  isActive
                    ? 'text-[#141413] bg-[#EFEFED] shadow-2xs'
                    : 'text-[#5F5F58] hover:text-[#141413] hover:bg-[#F7F7F4]'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-2 text-xs font-mono text-[#5F5F58] bg-white px-3 py-1.5 rounded-md border border-[#E4E4DF]">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            <span>Available Q4/Q1</span>
          </div>

          <Button href="/contact" variant="primary" size="sm" className="font-semibold text-xs tracking-wide">
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button href="/contact" variant="primary" size="sm" className="text-xs px-2.5 py-1.5">
            <span>Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md border border-[#E4E4DF] bg-white text-[#141413] hover:bg-[#F7F7F4] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315CFF]"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5 text-[#141413]" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E4E4DF] bg-[#F7F7F4] px-4 pt-3 pb-6 animate-in slide-in-from-top-2 duration-150">
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1 mb-4">
            {siteConfig.navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-base font-semibold px-4 py-3 rounded-lg flex items-center justify-between transition-colors',
                    isActive
                      ? 'bg-white text-[#315CFF] border border-[#E4E4DF]'
                      : 'text-[#141413] hover:bg-white/60'
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />}
                </Link>
              );
            })}
          </nav>

          <div className="pt-3 border-t border-[#E4E4DF] flex flex-col gap-3">
            <div className="flex items-center gap-2 text-xs font-mono text-[#5F5F58] px-1">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              <span>Available for contract &amp; client work</span>
            </div>
            <Button href="/contact" variant="primary" size="md" className="w-full">
              <span>Start Project Discussion</span>
              <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
