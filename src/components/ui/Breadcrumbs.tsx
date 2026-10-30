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
  title?: string;
  subtitle?: string;
  className?: string;
  inline?: boolean;
}

export function Breadcrumbs({
  items,
  title,
  subtitle,
  className = '',
  inline = false,
}: BreadcrumbsProps) {
  // Ensure "Home" is always the root item
  const allItems: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    ...items,
  ];

  const currentItem = allItems[allItems.length - 1];
  const displayTitle = title || currentItem?.label;

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
      className="inline-flex items-center text-xs sm:text-sm font-mono text-[#B0B0C4] font-medium"
    >
      <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2.5">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <li key={index} className="flex items-center gap-1.5 sm:gap-2.5">
              {index > 0 && (
                <span className="text-[#666677] select-none text-xs" aria-hidden="true">
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
      {/* 300px Full-Bleed Breadcrumb Banner Section with Background Image */}
      <section
        className={`w-full h-[300px] border-b border-[#222228] text-white relative overflow-hidden select-none bg-cover bg-center ${className}`}
        style={{
          backgroundImage: "url('/images/breadcrumb-banner-bg.svg')",
        }}
      >
        {/* Subtle Ambient Contrast Overlay */}
        <div className="absolute inset-0 bg-[#09090c]/60 backdrop-blur-[0.5px]" />

        {/* Ambient Bloom Highlights */}
        <div className="absolute top-0 right-1/4 w-[400px] h-[200px] bg-[#D4FF00]/5 rounded-full blur-[90px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[200px] bg-[#10B981]/5 rounded-full blur-[90px] pointer-events-none" />

        {/* Banner Content Container */}
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center relative z-10 space-y-4">
          {/* Breadcrumb Navigation Trail */}
          <div>{breadcrumbNav}</div>

          {/* Banner Title */}
          <div className="pt-1">
            <div className="space-y-1">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white uppercase font-['Montserrat'] tracking-tight leading-none">
                {displayTitle}
              </h1>
              {subtitle && (
                <p className="text-sm font-mono text-[#A0A0B5] pt-1">
                  {subtitle}
                </p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
