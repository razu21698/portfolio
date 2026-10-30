'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export interface TechItem {
  id: string;
  name: string;
  category: 'cms' | 'frameworks' | 'devops' | 'performance' | 'design';
  categoryLabel: string;
  versionOrSub?: string;
  iconType: string;
  color?: string;
}

export const allTechItems: TechItem[] = [
  // Row 1 items
  {
    id: 'wordpress',
    name: 'WordPress',
    category: 'cms',
    categoryLabel: 'CMS & Theme Architecture',
    versionOrSub: 'Custom Themes & Core',
    iconType: 'wordpress',
    color: '#00749C',
  },
  {
    id: 'laravel',
    name: 'Laravel',
    category: 'frameworks',
    categoryLabel: 'Framework',
    versionOrSub: 'v10 / v11 MVC',
    iconType: 'laravel',
    color: '#FF2D20',
  },
  {
    id: 'php',
    name: 'PHP 8.2 / 8.3',
    category: 'frameworks',
    categoryLabel: 'Language',
    versionOrSub: 'Typed Modern PHP',
    iconType: 'php',
    color: '#777BB4',
  },
  {
    id: 'woocommerce',
    name: 'WooCommerce',
    category: 'cms',
    categoryLabel: 'eCommerce',
    versionOrSub: 'High-Traffic Scale',
    iconType: 'woocommerce',
    color: '#96588A',
  },
  {
    id: 'react',
    name: 'React.js',
    category: 'frameworks',
    categoryLabel: 'Front-End',
    versionOrSub: 'Component Architecture',
    iconType: 'react',
    color: '#61DAFB',
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frameworks',
    categoryLabel: 'SSR & Jamstack',
    versionOrSub: 'App Router',
    iconType: 'nextjs',
    color: '#FFFFFF',
  },
  {
    id: 'mysql',
    name: 'MySQL',
    category: 'devops',
    categoryLabel: 'Database',
    versionOrSub: 'Normalized Schemas',
    iconType: 'mysql',
    color: '#4479A1',
  },
  {
    id: 'nginx',
    name: 'Nginx',
    category: 'devops',
    categoryLabel: 'Web Server',
    versionOrSub: 'Reverse Proxy & FastCGI',
    iconType: 'nginx',
    color: '#009639',
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frameworks',
    categoryLabel: 'Styling',
    versionOrSub: 'Utility-First Engine',
    iconType: 'tailwind',
    color: '#38BDF8',
  },
  {
    id: 'acf-pro',
    name: 'ACF Pro',
    category: 'cms',
    categoryLabel: 'WordPress Tooling',
    versionOrSub: 'Flexible Content Fields',
    iconType: 'acf',
    color: '#2271B1',
  },
  {
    id: 'cloudflare',
    name: 'Cloudflare',
    category: 'devops',
    categoryLabel: 'Security & CDN',
    versionOrSub: 'DNS & Edge Caching',
    iconType: 'cloudflare',
    color: '#F38020',
  },
  {
    id: 'figma',
    name: 'Figma',
    category: 'design',
    categoryLabel: 'Design & UX',
    versionOrSub: 'Design System & Tokens',
    iconType: 'figma',
    color: '#F24E1E',
  },

  // Row 2 items
  {
    id: 'javascript',
    name: 'JavaScript',
    category: 'frameworks',
    categoryLabel: 'Language',
    versionOrSub: 'Modern ES6+ Async',
    iconType: 'javascript',
    color: '#F7DF1E',
  },
  {
    id: 'redis',
    name: 'Redis',
    category: 'devops',
    categoryLabel: 'In-Memory Cache',
    versionOrSub: 'Object Cache & Queues',
    iconType: 'redis',
    color: '#DC382D',
  },
  {
    id: 'git-cicd',
    name: 'Git & CI/CD',
    category: 'devops',
    categoryLabel: 'DevOps & Versioning',
    versionOrSub: 'Atomic Deployments',
    iconType: 'git',
    color: '#F05032',
  },
  {
    id: 'core-web-vitals',
    name: 'Core Web Vitals',
    category: 'performance',
    categoryLabel: 'Performance',
    versionOrSub: 'LCP, INP, CLS Tuning',
    iconType: 'vitals',
    color: '#10B981',
  },
  {
    id: 'elementor-pro',
    name: 'Elementor Pro',
    category: 'cms',
    categoryLabel: 'Page Builder',
    versionOrSub: 'Custom Widget Dev',
    iconType: 'elementor',
    color: '#92003B',
  },
  {
    id: 'lighthouse',
    name: 'Google Lighthouse',
    category: 'performance',
    categoryLabel: 'Benchmarking',
    versionOrSub: '95+ Score Adherence',
    iconType: 'lighthouse',
    color: '#F59E0B',
  },
  {
    id: 'apache',
    name: 'Apache HTTP',
    category: 'devops',
    categoryLabel: 'Web Server',
    versionOrSub: 'Virtual Hosts & Headers',
    iconType: 'apache',
    color: '#D22128',
  },
  {
    id: 'custom-plugins',
    name: 'Custom Plugins',
    category: 'cms',
    categoryLabel: 'WordPress Logic',
    versionOrSub: 'Proprietary Extensions',
    iconType: 'plugin',
    color: '#10B981',
  },
  {
    id: 'magento-2',
    name: 'Magento 2',
    category: 'cms',
    categoryLabel: 'eCommerce',
    versionOrSub: 'Maintenance & Triage',
    iconType: 'magento',
    color: '#EE672F',
  },
  {
    id: 'adobe-xd',
    name: 'Adobe XD',
    category: 'design',
    categoryLabel: 'Design & UX',
    versionOrSub: 'Vector Asset Extraction',
    iconType: 'xd',
    color: '#FF61F6',
  },
  {
    id: 'photoshop',
    name: 'Photoshop',
    category: 'design',
    categoryLabel: 'Design & UX',
    versionOrSub: 'Raster Optimization',
    iconType: 'photoshop',
    color: '#31A8FF',
  },
  {
    id: 'rest-webhooks',
    name: 'REST APIs & Webhooks',
    category: 'performance',
    categoryLabel: 'Integration',
    versionOrSub: 'Event-Driven Payloads',
    iconType: 'api',
    color: '#38BDF8',
  },
];

// Helper to render crisp SVGs for each technology logo
function TechLogoIcon({ iconType, className = 'w-6 h-6' }: { iconType: string; className?: string }) {
  switch (iconType) {
    case 'wordpress':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-8.17 10c0-1.22.28-2.378.783-3.414l4.28 11.724A8.196 8.196 0 013.83 12zm8.17 8.17c-.93 0-1.815-.17-2.634-.477l2.802-8.13 2.87 7.854c.02.046.046.086.07.13a8.17 8.17 0 01-3.108.623zm1.185-11.834c.55 0 .99-.08.99-.08.438-.05.488-.675.05-.675 0 0-1.32.13-2.17.13-.81 0-2.14-.13-2.14-.13-.438 0-.488.625-.05.675 0 0 .408.08.918.08l1.35 3.7-1.89 5.67-3.14-9.37c.55 0 .99-.08.99-.08.438-.05.488-.675.05-.675 0 0-1.32.13-2.17.13-.19 0-.41-.01-.64-.025A8.172 8.172 0 0112 3.83c2.72 0 5.14 1.33 6.64 3.37-.09.006-.18.01-.26.01-1.37 0-2.34-1.19-2.34-1.19-.438-.05-.488-.675-.05-.675 0 0 1.25.13 2.02.13.11 0 .23 0 .36-.008A8.163 8.163 0 0120.17 12c0 2.05-.75 3.92-2 5.37l-4.985-13.7zm5.54 5.314c.28-.84.44-1.74.44-2.68 0-1.46-.38-2.82-1.05-4.01l3.52 9.64c-.93-1.08-1.92-2.1-2.91-2.95z" />
        </svg>
      );
    case 'woocommerce':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M2.5 5.5C1.67 5.5 1 6.17 1 7v7.5c0 .83.67 1.5 1.5 1.5H5v2.5l3.5-2.5h13c.83 0 1.5-.67 1.5-1.5V7c0-.83-.67-1.5-1.5-1.5h-19zm3 3c.83 0 1.5.67 1.5 1.5S6.33 11.5 5.5 11.5 4 10.83 4 10s.67-1.5 1.5-1.5zm6 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm6 0c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5z" />
        </svg>
      );
    case 'laravel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M7.7 5.2L12 2.7l4.3 2.5v5L12 12.7 7.7 10.2v-5zm0 8.6L12 11.3l4.3 2.5v5L12 21.3l-4.3-2.5v-5zM3 7.9l4.3-2.5v5L3 12.9V7.9zm13.7-2.5L21 7.9v5l-4.3-2.5v-5zm-9.4 8.7L3 11.6v5l4.3 2.5v-5zm9.4 0l4.3-2.5v5l-4.3 2.5v-5z" />
        </svg>
      );
    case 'php':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3C6.477 3 2 7.03 2 12s4.477 9 10 9 10-4.03 10-9-4.477-9-10-9zm-5.5 12.5l1.2-5h2.2c1.1 0 1.9.6 1.7 1.6-.2 1.2-1.3 1.8-2.4 1.8h-1.3l-.6 2.6H6.5zm5.5 0l1.2-5h1.5l-.3 1.4h.1c.4-.9 1.2-1.5 2.1-1.5 1.3 0 1.9.9 1.7 2.1l-.7 3H16l.6-2.5c.1-.5-.1-.8-.6-.8-.6 0-1.1.5-1.3 1.3l-.5 2H12zm0-5.8h1.2l.6-2.6c.2-1 .9-1.6 2-1.6h.8l-.4 1.7h-.6c-.5 0-.7.3-.8.7l-.4 1.8h-2.4z" />
        </svg>
      );
    case 'react':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(30 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(90 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(150 12 12)" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1.8" />
        </svg>
      );
    case 'nextjs':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.8 14.8l-5.3-7.2v7.2H9V8h1.5l5.5 7.4V8h1.5v8.8h-1.7z" />
        </svg>
      );
    case 'javascript':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M8 17.5v-5c0-.8.6-1.5 1.5-1.5.8 0 1.5.7 1.5 1.5v5M15 11h3.5v2.5H16c0 .8.7 1.5 1.5 1.5h1v2.5h-2c-1.4 0-2.5-1.1-2.5-2.5V11z" />
        </svg>
      );
    case 'tailwind':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" />
        </svg>
      );
    case 'mysql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.5 2 2 4.5 2 7.5S6.5 13 12 13s10-2.5 10-5.5S17.5 2 12 2zm0 8.5c-4.4 0-8-1.6-8-3.5S7.6 3.5 12 3.5s8 1.6 8 3.5-3.6 3.5-8 3.5zm-8 1v4c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-4c-1.8 1.5-4.8 2.5-8 2.5s-6.2-1-8-2.5zm0 5v4c0 1.9 3.6 3.5 8 3.5s8-1.6 8-3.5v-4c-1.8 1.5-4.8 2.5-8 2.5s-6.2-1-8-2.5z" />
        </svg>
      );
    case 'nginx':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7.8v11.4L12 22l10-2.8V7.8L12 2zm6 13.6h-2.4l-4.8-6.4v6.4H8.4V8.4h2.4l4.8 6.4V8.4H18v7.2z" />
        </svg>
      );
    case 'redis':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L2 7.5l10 5.5 10-5.5L12 2zm-8.2 8.1L12 14.6l8.2-4.5v3.2L12 17.8 3.8 13.3v-3.2zm0 5.5L12 20.1l8.2-4.5v3.2L12 23.3 3.8 18.8v-3.2z" />
        </svg>
      );
    case 'cloudflare':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.8 10.4c-.4-2.8-2.8-4.9-5.7-4.9-2.2 0-4.1 1.2-5.1 3-2.5.3-4.5 2.4-4.5 5 0 2.8 2.2 5 5 5h10.5c2.5 0 4.5-2 4.5-4.5 0-2.1-1.5-3.9-3.5-4.4l-1.2.8z" />
        </svg>
      );
    case 'figma':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2H8.5a3.5 3.5 0 0 0 0 7H12V2zm0 7H8.5a3.5 3.5 0 0 0 0 7H12V9zm0 7H8.5a3.5 3.5 0 1 0 3.5 3.5V16zm3.5-14H12v7h3.5a3.5 3.5 0 1 0 0-7zm0 7H12v7h3.5a3.5 3.5 0 1 0 0-7z" />
        </svg>
      );
    case 'git':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.6 10.9l-8.5-8.5c-.8-.8-2.1-.8-2.8 0L8.6 4.1l3.5 3.5c.8-.3 1.8-.1 2.4.5.6.6.8 1.6.5 2.4l3.4 3.4c.8-.3 1.8-.1 2.4.5.8.8.8 2.1 0 2.8-.8.8-2.1.8-2.8 0-.6-.6-.8-1.6-.5-2.4L14.1 11v5.1c.3.2.5.5.5.9 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.4.2-.7.5-.9V10.7c-.3-.2-.5-.5-.5-.9 0-.6.4-1.2 1-1.4L8.8 5.1 2.4 11.5c-.8.8-.8 2.1 0 2.8l8.5 8.5c.8.8 2.1.8 2.8 0l7.9-7.9c.8-.8.8-2.2 0-3z" />
        </svg>
      );
    case 'acf':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 7v10l9 5 9-5V7l-9-5zm0 3.3l6.5 3.6-2.5 1.4L12 8.2 7.9 10.4 5.5 9l6.5-3.7zm-6.8 6.5l2.4 1.3V16l-2.4-1.3V11.8zm7.8 7.3l-2.5-1.4v-4.5l2.5 1.4v4.5zm6.8-4.5l-2.4 1.3v-2.9l2.4-1.3v2.9z" />
        </svg>
      );
    case 'elementor':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="2" />
          <path d="M8 7v10M12 7v10M16 7v3M16 14v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'magento':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2L3 7.2v9.6L6 18.5V9.8l6-3.5 6 3.5v8.7l3-1.7V7.2L12 2zm0 8.3L9 12v6.8l3 1.7 3-1.7V12l-3-1.7z" />
        </svg>
      );
    case 'apache':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M19.5 2.5c-.8 2.3-2.5 6.2-4.5 9-1.5 2.1-3.2 4.1-4.8 5.8-1.2 1.3-2.5 2.4-3.5 3.2L5 22c1.2-1.5 2.8-3.2 4.2-5 2.2-2.8 4.3-6 5.8-9.2.8-1.7 1.4-3.3 1.8-4.7l2.7-.6z" />
        </svg>
      );
    case 'xd':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6.5 8l3.5 8M10 8l-3.5 8M13.5 8h2c1.9 0 3.5 1.8 3.5 4s-1.6 4-3.5 4h-2V8z" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      );
    case 'photoshop':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <rect x="2" y="2" width="20" height="20" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6.5 16.5V7.5h3c1.7 0 3 1.3 3 3s-1.3 3-3 3h-1.5v3M14.5 16.5c1.5 0 2.5-.8 2.5-2 0-2.5-3.5-1.5-3.5-3.5 0-.8.8-1.5 2-1.5.8 0 1.5.3 1.8.6" stroke="currentColor" strokeWidth="1.5" fill="none" />
        </svg>
      );
    case 'vitals':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M3 13h4l3-8 4 16 3-8h4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'lighthouse':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3 5H9l3-5zm-2 6h4l2 14H8l2-14zm-4 4l-4 2 4 2v-4zm12 0v4l4-2-4-2z" />
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export function TechStackCarousel() {
  // Divide into two alternating rows for dual-scroll marquee
  const row1 = allTechItems.slice(0, 12);
  const row2 = allTechItems.slice(12, 24);

  return (
    <section className="space-y-8">
      {/* Section Headline */}
      <ScrollReveal direction="up">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E4E4DF] pb-6">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#888880] flex items-center gap-2">
              <span className="w-6 h-[1px] bg-[#141413]" />
              Technical Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#141413] tracking-tight font-['Montserrat']">
              Disciplines &amp; Applied Tooling
            </h2>
            <p className="text-sm sm:text-base text-[#52525B] font-['Lato'] leading-relaxed">
              No arbitrary percentage bars. Every technology listed corresponds to production code deployed and maintained in active client systems.
            </p>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#E4E4DF] text-xs font-mono text-[#141413] shadow-2xs self-start md:self-auto shrink-0">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            <span>24 Production Technologies</span>
          </div>
        </div>
      </ScrollReveal>

      {/* ========================================================= */}
      {/* DUAL-ROW INFINITE LOGO CAROUSEL                           */}
      {/* ========================================================= */}
      <div className="relative rounded-2xl bg-[#0c0c10] border border-[#222228] p-6 sm:p-8 overflow-hidden shadow-xl">
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[200px] bg-[#D4FF00]/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[200px] bg-[#10B981]/5 rounded-full blur-[90px] pointer-events-none" />

        {/* Left and Right Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#0c0c10] to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#0c0c10] to-transparent z-20 pointer-events-none" />

        <div className="space-y-4">
          {/* Top Status Header */}
          <div className="flex items-center justify-between text-xs font-mono text-[#8E8EA0] px-2">
            <span className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-ping" />
              <span>PRODUCTION TOOLING ECOSYSTEM (PAUSE ON HOVER)</span>
            </span>
            <span className="hidden sm:inline text-[11px] text-[#666677]">100% PRODUCTION VERIFIED</span>
          </div>

          {/* Marquee Row 1 (Left to Right) */}
          <div className="flex w-max animate-shimmer-marquee space-x-4 select-none">
            {[...row1, ...row1, ...row1].map((item, idx) => (
              <div
                key={`${item.id}-r1-${idx}`}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-[#14141B] hover:bg-[#1E1E28] border border-[#262633] hover:border-[#D4FF00]/60 transition-all duration-200 text-white shrink-0 min-w-[210px]"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{
                    backgroundColor: `${item.color || '#D4FF00'}15`,
                    color: item.color || '#D4FF00',
                  }}
                >
                  <TechLogoIcon iconType={item.iconType} className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 text-left">
                  <span className="text-xs font-bold font-['Montserrat'] tracking-tight block text-white group-hover:text-[#D4FF00] transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#8E8EA0] block uppercase tracking-wider">
                    {item.versionOrSub || item.categoryLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Marquee Row 2 (Right to Left / Reverse Direction) */}
          <div className="flex w-max animate-shimmer-marquee space-x-4 select-none" style={{ animationDirection: 'reverse' }}>
            {[...row2, ...row2, ...row2].map((item, idx) => (
              <div
                key={`${item.id}-r2-${idx}`}
                className="group flex items-center gap-3 px-4 py-3 rounded-xl bg-[#14141B] hover:bg-[#1E1E28] border border-[#262633] hover:border-[#10B981]/60 transition-all duration-200 text-white shrink-0 min-w-[210px]"
              >
                <div
                  className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-200 group-hover:scale-110"
                  style={{
                    backgroundColor: `${item.color || '#10B981'}15`,
                    color: item.color || '#10B981',
                  }}
                >
                  <TechLogoIcon iconType={item.iconType} className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 text-left">
                  <span className="text-xs font-bold font-['Montserrat'] tracking-tight block text-white group-hover:text-[#10B981] transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[10px] font-mono text-[#8E8EA0] block uppercase tracking-wider">
                    {item.versionOrSub || item.categoryLabel}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
