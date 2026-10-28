'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Zap, Code, Cpu, Gauge, Server, FileText } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { HeroBackgroundAnimation } from '@/components/ui/HeroBackgroundAnimation';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function Hero() {
  const tickerItems = [
    'CUSTOM WORDPRESS THEMES',
    'LARAVEL WEB APPLICATIONS',
    'CORE WEB VITALS 98+',
    'SUB-SECOND LCP & FCP',
    'RESTFUL APIS & WEBHOOKS',
    'REDIS QUEUES & CACHING',
    'ADVANCED ACF ARCHITECTURES',
    'ZERO PAGE-BUILDER BLOAT',
    'SECURE NGINX DEPLOYMENTS',
  ];

  const pillars = [
    {
      num: '01',
      title: 'WordPress Architecture',
      spec: 'Custom Themes & ACF Pro',
      desc: 'Clean PHP 8.2, zero page-builder bloat, engineered from Figma.',
      icon: Code,
    },
    {
      num: '02',
      title: 'Laravel Applications',
      spec: 'Scalable MVC & REST APIs',
      desc: 'Relational MySQL schemas, background workers & queue systems.',
      icon: Cpu,
    },
    {
      num: '03',
      title: 'Performance Tuning',
      spec: 'Core Web Vitals 98+',
      desc: 'OPcache, Redis caching hierarchy, sub-second LCP & FCP.',
      icon: Gauge,
    },
    {
      num: '04',
      title: 'Server Operations',
      spec: 'Nginx, DNS & Hardening',
      desc: 'Linux environments, SSL provisioning & automated offsite backups.',
      icon: Server,
    },
  ];

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-[#09090c] text-white overflow-hidden border-b border-[#222228]">
      {/* 1. Full-Bleed Interactive 3D WebGL Background Animation (Lando Norris Inspired) */}
      <HeroBackgroundAnimation />

      {/* 2. Main Hero Content Layout (Spacious, Monumental, Unobstructed) */}
      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 my-auto w-full">
        <div className="max-w-4xl space-y-8">
          {/* Top Status & Identity Pill */}
          <ScrollReveal direction="up" delay={50}>
            <div className="inline-flex flex-wrap items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-mono text-[#D0D0DD]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF00] opacity-80" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4FF00]" />
              </span>
              <span className="font-semibold text-white">Ahmed Razu</span>
              <span className="text-[#555566]">•</span>
              <span>WordPress &amp; Laravel Developer</span>
              <span className="text-[#555566] hidden sm:inline">•</span>
              <span className="text-[#D4FF00] hidden sm:inline font-bold">Available for Q4/Q1 Contracts</span>
            </div>
          </ScrollReveal>

          {/* Monumental Headline */}
          <ScrollReveal direction="up" delay={120}>
            <h1 className="text-4xl sm:text-6xl lg:text-[4.75rem] font-black tracking-tight leading-[1.02] uppercase font-['Montserrat'] text-white">
              I build digital experiences &amp;{' '}
              <span className="text-[#D4FF00] relative inline-block underline decoration-[#D4FF00]/40 decoration-wavy underline-offset-8">
                business systems
              </span>{' '}
              that perform.
            </h1>
          </ScrollReveal>

          {/* Supporting Brand Positioning */}
          <ScrollReveal direction="up" delay={200}>
            <p className="text-lg sm:text-xl text-[#A0A0B5] leading-relaxed max-w-3xl font-['Lato'] font-normal">
              Senior WordPress Architect and Laravel Software Engineer engineering bespoke themes, scalable web applications, and automated workflows optimized for sub-second speed and business conversion.
            </p>
          </ScrollReveal>

          {/* Action CTAs */}
          <ScrollReveal direction="up" delay={260}>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href="/contact"
                variant="volt"
                size="lg"
                className="group font-['Montserrat'] text-xs uppercase tracking-wider font-extrabold"
              >
                <span>Discuss a Project</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>

              <Button
                href="/work"
                variant="outline"
                size="lg"
                className="group bg-white/5 backdrop-blur-md border-white/15 text-white hover:bg-white/10 hover:border-white/30 font-['Montserrat'] text-xs uppercase tracking-wider font-bold transition-all duration-300"
              >
                <span>Explore Selected Work (9)</span>
                <ArrowUpRight className="w-4 h-4 text-[#D4FF00] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>

              <Button
                href="/documents/Ahmed_Razu_CV.pdf"
                external
                variant="ghost"
                size="lg"
                className="text-[#A0A0B5] hover:text-white hover:bg-white/5 font-['Montserrat'] text-xs uppercase tracking-wider font-semibold transition-colors"
              >
                <FileText className="w-4 h-4 text-[#D4FF00]" />
                <span>Verified CV</span>
              </Button>
            </div>
          </ScrollReveal>

          {/* 4 Specialized Disciplines Grid (Horizontal Showcase) */}
          <ScrollReveal direction="up" delay={320}>
            <div className="pt-10 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {pillars.map((pillar) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={pillar.num}
                    className="p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-white/10 hover:border-[#D4FF00]/40 backdrop-blur-md transition-all duration-300 space-y-2 group"
                  >
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#D4FF00] font-bold">{pillar.num}</span>
                      <IconComponent className="w-4 h-4 text-[#777788] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-white font-['Montserrat'] tracking-tight group-hover:text-[#D4FF00] transition-colors">
                        {pillar.title}
                      </h3>
                      <p className="text-[11px] font-mono text-[#888899] mt-0.5">
                        {pillar.spec}
                      </p>
                    </div>
                    <p className="text-xs text-[#666677] leading-relaxed font-['Lato'] pt-1">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* 3. High-Speed Kinetic Marquee Ticker */}
      <div className="relative z-10 w-full bg-[#0c0c10] border-t border-white/10 py-3.5 overflow-hidden select-none">
        <div className="flex w-max animate-shimmer-marquee space-x-8 text-xs font-mono font-bold tracking-widest text-[#777788] uppercase">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8 whitespace-nowrap">
              <span className="hover:text-white transition-colors cursor-default">{item}</span>
              <span className="text-[#D4FF00]">///</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
