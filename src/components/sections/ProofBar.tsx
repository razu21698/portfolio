'use client';

import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function ProofBar() {
  const specializations = [
    {
      num: '01',
      title: 'WordPress Engineering',
      desc: 'Custom theme architectures from Figma, clean PHP 8.2, ACF Pro data models, and proprietary plugin development without bloated page builders.',
      badge: 'Zero Bloat',
    },
    {
      num: '02',
      title: 'Laravel Applications',
      desc: 'Robust relational database modeling, Eloquent query tuning, role-based security, background queue workers, and RESTful APIs.',
      badge: 'Scalable MVC',
    },
    {
      num: '03',
      title: 'Performance & Core Web Vitals',
      desc: 'Rigorous speed audits, OPcache/Redis caching hierarchies, asset payload reduction, and sub-second Largest Contentful Paint.',
      badge: '90+ Lighthouse',
    },
    {
      num: '04',
      title: 'APIs & Automation',
      desc: 'Third-party REST API integrations, webhooks, asynchronous jobs, and automated business workflows that reduce manual overhead.',
      badge: 'Event Driven',
    },
  ];

  return (
    <section className="bg-white border-b border-[#E4E4DF] py-12 lg:py-16 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {specializations.map((item, idx) => (
            <ScrollReveal key={idx} direction="up" delay={idx * 100}>
              <div className="group space-y-3 relative p-4 rounded-xl border border-transparent hover:border-[#E4E4DF] hover:bg-[#FBFBFA] transition-all duration-300">
                {/* Animated Top Accent Line on Hover */}
                <div className="absolute top-0 left-4 right-4 h-[2px] bg-transparent overflow-hidden rounded-full">
                  <div className="h-full bg-[#141413] w-0 group-hover:w-full transition-all duration-400 ease-out" />
                </div>

                <div className="flex items-center justify-between border-b border-[#E4E4DF] pb-2.5">
                  <span className="text-xs font-mono font-bold text-[#141413] flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#141413] opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item.num}
                  </span>
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#52525B] px-2.5 py-0.5 rounded bg-[#F7F7F4] border border-[#E4E4DF] group-hover:border-[#141413]/40 transition-colors">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-[#141413] tracking-tight font-['Montserrat'] transition-colors duration-200">
                  {item.title}
                </h3>

                <p className="text-sm text-[#52525B] leading-relaxed font-['Lato']">
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
