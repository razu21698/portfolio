'use client';

import React from 'react';
import Link from 'next/link';
import { siteConfig } from '@/data/siteConfig';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  inline?: boolean;
}

export function Breadcrumbs({ items, className = '', inline = false }: BreadcrumbsProps) {
  // Ensure "Home" is always the root item
  const allItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    ...items,
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: allItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href ? `${siteConfig.url}${item.href}` : undefined,
    })),
  };

  const breadcrumbNav = (
    <nav
      aria-label="Breadcrumb"
      className="inline-flex items-center text-xs font-mono text-[#9E9EAF]"
    >
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2.5">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <li key={index} className="flex items-center gap-1.5 sm:gap-2.5">
              {index > 0 && (
                <span className="text-[#555566] select-none text-[11px]" aria-hidden="true">
                  /
                </span>
              )}
              {isLast || !item.href ? (
                <span
                  aria-current="page"
                  className="font-bold text-[#D4FF00] flex items-center gap-1.5 truncate max-w-[240px] sm:max-w-[420px]"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-white transition-colors transition-craft font-medium"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );

  if (inline) {
    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {breadcrumbNav}
      </>
    );
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {/* Full-Bleed Breadcrumb Banner Section */}
      <section
        className={`w-full bg-[#0c0c10] border-b border-[#222228] text-white py-5 sm:py-6 relative overflow-hidden select-none ${className}`}
      >
        {/* Subtle Ambient Glow */}
        <div className="absolute top-0 right-1/4 w-[350px] h-[100px] bg-[#D4FF00]/5 rounded-full blur-[70px] pointer-events-none" />

        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-6">
          {breadcrumbNav}

          {/* Right-Hand Operational Telemetry Badge */}
          <div className="flex items-center gap-2 text-[11px] font-mono text-[#8E8EA0] shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span className="text-[#D0D0DD]">AHMED RAZU</span>
            <span className="text-[#555566]">•</span>
            <span className="text-[#D4FF00] font-semibold">PRODUCTION ACTIVE</span>
          </div>
        </div>
      </section>
    </>
  );
}
