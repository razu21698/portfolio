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
}

export function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <nav
        aria-label="Breadcrumb"
        className={`inline-flex items-center text-xs font-mono text-[#5F5F58] ${className}`}
      >
        <ol className="flex items-center flex-wrap gap-1.5 sm:gap-2">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;

            return (
              <li key={index} className="flex items-center gap-1.5 sm:gap-2">
                {index > 0 && (
                  <span className="text-[#A0A09A] select-none text-[11px]" aria-hidden="true">
                    /
                  </span>
                )}
                {isLast || !item.href ? (
                  <span
                    aria-current="page"
                    className="font-semibold text-[#141413] truncate max-w-[220px] sm:max-w-[340px]"
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-[#315CFF] hover:underline transition-colors transition-craft"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

