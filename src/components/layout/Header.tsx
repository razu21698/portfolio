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

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isDarkHero = !scrolled;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 border-b',
        isDarkHero
          ? 'bg-[#09090c]/80 backdrop-blur-md border-white/10 text-white'
          : scrolled
          ? 'bg-[#F7F7F4]/95 backdrop-blur-md border-[#E4E4DF] shadow-xs text-[#141413]'
          : 'bg-[#F7F7F4] border-transparent text-[#141413]'
      )}
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Editorial Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141413] rounded py-1"
          aria-label="Ahmed Razu — Homepage"
        >
          <div
            className={cn(
              'w-8 h-8 rounded flex items-center justify-center font-bold text-sm tracking-wider transition-colors transition-craft font-mono',
              isDarkHero
                ? 'bg-white text-[#09090c] group-hover:bg-[#D4FF00] group-hover:text-[#09090c]'
                : 'bg-[#141413] text-white group-hover:bg-[#282828]'
            )}
          >
            R
          </div>
          <div className="flex flex-col">
            <span
              className={cn(
                "font-extrabold tracking-tight text-base sm:text-lg leading-none flex items-center gap-1.5 font-['Montserrat']",
                isDarkHero ? 'text-white' : 'text-[#141413]'
              )}
            >
              AHMED RAZU
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            </span>
            <span
              className={cn(
                'text-[10px] font-mono uppercase tracking-widest mt-0.5',
                isDarkHero ? 'text-[#888899]' : 'text-[#696969]'
              )}
            >
              WordPress &amp; Laravel
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main Navigation"
          className={cn(
            'hidden md:flex items-center gap-1 rounded-full px-4 py-1.5 transition-colors duration-200',
            isDarkHero
              ? 'bg-white/10 border border-white/15 backdrop-blur-md'
              : 'bg-white/90 border border-[#E4E4DF] shadow-2xs'
          )}
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
                  isDarkHero
                    ? isActive
                      ? 'text-white bg-white/20'
                      : 'text-[#A0A0B0] hover:text-white hover:bg-white/10'
                    : isActive
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
          <div
            className={cn(
              'hidden lg:flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-md border transition-colors',
              isDarkHero
                ? 'bg-white/10 border-white/15 text-[#D0D0E0]'
                : 'bg-white border-[#E4E4DF] text-[#5F5F58]'
            )}
          >
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            <span>Available Q4/Q1</span>
          </div>

          <Button
            href="/contact"
            variant="primary"
            size="sm"
            className="font-semibold text-xs tracking-wide shadow-md"
          >
            <span>Let&apos;s Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button href="/contact" variant="volt" size="sm" className="text-xs px-3 py-1.5 font-bold uppercase font-['Montserrat']">
            <span>Talk</span>
          </Button>

          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              'p-2 rounded-md transition-colors',
              isDarkHero ? 'text-white hover:bg-white/10' : 'text-[#141413] hover:bg-[#EFEFED]'
            )}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation drawer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ========================================================= */}
      {/* MOBILE DRAWER: SLIDES IN FROM THE LEFT                    */}
      {/* ========================================================= */}

      {/* Backdrop Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/70 backdrop-blur-xs z-50 transition-opacity duration-300 md:hidden',
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Left-Side Drawer Panel */}
      <aside
        className={cn(
          'fixed top-0 bottom-0 left-0 w-[300px] max-w-[85vw] bg-[#0c0c10] border-r border-[#222228] text-white z-50 shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 ease-in-out md:hidden',
          mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
        )}
        aria-label="Mobile Navigation Drawer"
      >
        <div className="space-y-6">
          {/* Drawer Top Header Bar */}
          <div className="flex items-center justify-between pb-4 border-b border-white/10">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <div className="w-8 h-8 rounded bg-[#D4FF00] text-[#09090c] flex items-center justify-center font-bold text-sm font-mono">
                R
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-sm tracking-tight text-white font-['Montserrat']">
                  AHMED RAZU
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#888899]">
                  WordPress &amp; Laravel
                </span>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-1.5 rounded-lg text-[#A0A0B5] hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close navigation drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1.5">
            {siteConfig.navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'text-base font-bold font-["Montserrat"] py-3 px-4 rounded-xl transition-all flex items-center justify-between',
                    isActive
                      ? 'bg-white/10 text-[#D4FF00] border border-white/10'
                      : 'text-[#A0A0B5] hover:text-white hover:bg-white/5 hover:translate-x-1'
                  )}
                >
                  <span>{item.label}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse" />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Drawer Bottom Telemetry & CTA */}
        <div className="space-y-4 pt-6 border-t border-white/10">
          <div className="flex items-center gap-2 text-xs font-mono text-[#D0D0DD]">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>Available for Q4/Q1 Contracts</span>
          </div>

          <Button
            href="/contact"
            variant="volt"
            size="md"
            className="w-full justify-center font-['Montserrat'] text-xs uppercase tracking-wider font-extrabold"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Discuss a Project</span>
            <ArrowUpRight className="w-4 h-4" />
          </Button>

          <div className="text-[11px] font-mono text-[#666677] text-center pt-1">
            Dhaka (GMT+6) · Worldwide Remote
          </div>
        </div>
      </aside>
    </header>
  );
}
