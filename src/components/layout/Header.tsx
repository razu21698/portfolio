'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
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
          ? 'bg-[#09090c] border-[#222228] text-white shadow-md'
          : 'bg-[#F7F7F4] border-[#E4E4DF] shadow-xs text-[#141413]'
      )}
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Editorial Wordmark */}
        <Link
          href="/"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#141413] rounded py-1"
          aria-label="Md Razib Ahmed Razu — Homepage"
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
              MD RAZIB AHMED RAZU
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            </span>
            <span
              className={cn(
                'text-xs font-mono font-medium uppercase tracking-wider mt-1',
                isDarkHero ? 'text-[#A0A0B5]' : 'text-[#52525B]'
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
            'hidden md:flex items-center gap-1.5 rounded-full px-3.5 py-1.5 transition-colors duration-200',
            isDarkHero
              ? 'bg-[#14141B] border border-[#272733] shadow-inner'
              : 'bg-white border border-[#E4E4DF] shadow-xs'
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
                      ? 'text-[#09090c] bg-[#D4FF00] font-bold shadow-xs'
                      : 'text-[#D0D0DE] hover:text-white hover:bg-white/10'
                    : isActive
                    ? 'text-white bg-[#141413] font-bold shadow-xs'
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
          {/* Desktop CV Download Link */}
          <a
            href={siteConfig.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'hidden lg:flex items-center gap-2 text-xs font-mono font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-200 cursor-pointer',
              isDarkHero
                ? 'bg-[#14141B] hover:bg-[#1E1E28] border-[#272733] hover:border-[#D4FF00]/60 text-[#D0D0E0] hover:text-[#D4FF00]'
                : 'bg-white hover:bg-[#F7F7F4] border-[#E4E4DF] hover:border-[#141413] text-[#141413]'
            )}
            title="Download Md Razib Ahmed Razu CV (PDF)"
          >
            <FileText className="w-3.5 h-3.5 text-[#D4FF00]" />
            <span>Download CV</span>
          </a>

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
              'p-2 rounded-lg transition-colors border',
              isDarkHero
                ? 'bg-[#14141B] border-[#272733] text-white hover:bg-[#1E1E28]'
                : 'bg-white border-[#E4E4DF] text-[#141413] hover:bg-[#F7F7F4]'
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
                  MD RAZIB AHMED RAZU
                </span>
                <span className="text-xs font-mono font-medium uppercase tracking-wider text-[#A0A0B5] mt-0.5">
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
        <div className="space-y-3 pt-6 border-t border-white/10">
          <a
            href={siteConfig.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-xs font-mono font-bold text-[#D4FF00] bg-white/5 hover:bg-white/10 border border-white/10 px-4 py-2.5 rounded-xl transition-colors w-full"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FileText className="w-4 h-4 text-[#D4FF00]" />
            <span>Download CV (PDF)</span>
          </a>

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

          <div className="text-xs font-mono text-[#8E8EA0] text-center pt-1 font-medium">
            Dhaka (GMT+6) · Worldwide Remote
          </div>
        </div>
      </aside>
    </header>
  );
}
