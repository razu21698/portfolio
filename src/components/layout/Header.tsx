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

  const isDarkHero = pathname === '/' && !scrolled;

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
          <Button href="/contact" variant="primary" size="sm" className="text-xs px-2.5 py-1.5">
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

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E4E4DF] px-4 pt-4 pb-6 space-y-4 shadow-lg text-[#141413]">
          <nav className="flex flex-col space-y-1">
            {siteConfig.navItems.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== '/' && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'text-sm font-semibold py-2.5 px-3 rounded-lg transition-colors font-mono',
                    isActive
                      ? 'bg-[#141413] text-white'
                      : 'text-[#5F5F58] hover:bg-[#F7F7F4] hover:text-[#141413]'
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="pt-2 border-t border-[#E4E4DF] flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-[#5F5F58]">
              <span className="w-2 h-2 rounded-full bg-[#059669]" />
              <span>Available for Work</span>
            </div>
            <Link
              href="/contact"
              className="text-xs font-bold text-[#141413] hover:underline font-['Montserrat'] uppercase tracking-wider"
            >
              Get In Touch →
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
