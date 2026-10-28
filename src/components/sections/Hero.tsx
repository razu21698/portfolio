'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, ExternalLink, Zap, ShieldCheck, Gauge, Layers, Terminal, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
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

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-[#09090c] text-white overflow-hidden border-b border-[#222228]">
      {/* 1. Full-Bleed Interactive 3D WebGL Background Animation (Lando Norris Inspired) */}
      <HeroBackgroundAnimation />

      {/* 2. Top Precision Cockpit Annotation Bar */}
      <div className="relative z-10 w-full pt-6 pb-2 border-b border-white/5">
        <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00F0FF] opacity-80" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00F0FF]" />
            </span>
            <span className="text-[#A0A0B0] hidden sm:inline-block">OPERATIONAL STATUS:</span>
            <span className="text-white font-semibold tracking-wider">AVAILABLE FOR INTERNATIONAL CONTRACTS</span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[#777788] text-[11px]">
            <span>LOC: DHAKA (GMT+6) / REMOTE</span>
            <span>•</span>
            <span className="text-[#315CFF] font-semibold">PHP 8.2 • LARAVEL 10 • WORDPRESS</span>
          </div>
        </div>
      </div>

      {/* 3. Main Hero Content Layout */}
      <div className="relative z-10 max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 my-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Monumental High-Octane Headline & Positioning */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            <ScrollReveal direction="up" delay={50}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-mono text-[#C0C0D0]">
                <Zap className="w-3.5 h-3.5 text-[#315CFF]" />
                <span className="font-semibold text-white">Ahmed Razu</span>
                <span className="text-[#555566]">•</span>
                <span>WordPress &amp; Laravel Engineer</span>
              </div>
            </ScrollReveal>

            {/* Monumental Headline */}
            <ScrollReveal direction="up" delay={120}>
              <h1 className="text-4xl sm:text-6xl lg:text-[4.2rem] font-black tracking-tight leading-[1.03] uppercase font-['Montserrat']">
                I build digital experiences &amp;{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#315CFF] via-[#5278FF] to-[#00F0FF] relative inline-block">
                  business systems
                  <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-gradient-to-r from-[#315CFF] to-[#00F0FF] rounded-full" />
                </span>{' '}
                that perform.
              </h1>
            </ScrollReveal>

            {/* Brand Positioning Copy */}
            <ScrollReveal direction="up" delay={200}>
              <p className="text-base sm:text-xl text-[#A0A0B5] leading-relaxed max-w-2xl font-['Lato'] font-normal">
                High-performing custom WordPress platforms, powerful database-driven Laravel applications, and automated workflows engineered to eliminate technical debt and accelerate business growth.
              </p>
            </ScrollReveal>

            {/* High-Voltage Action CTAs */}
            <ScrollReveal direction="up" delay={260}>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  className="group font-['Montserrat'] text-xs uppercase tracking-wider font-bold shadow-[0_0_35px_rgba(49,92,255,0.45)] hover:shadow-[0_0_50px_rgba(49,92,255,0.65)] hover:scale-[1.02] transition-all duration-300"
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
                  <span>Explore Case Studies</span>
                  <ArrowUpRight className="w-4 h-4 text-[#315CFF] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            </ScrollReveal>

            {/* Specialized Engineering Disciplines Grid */}
            <ScrollReveal direction="up" delay={320}>
              <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 backdrop-blur-xs">
                  <span className="text-[#315CFF] block font-bold text-[10px] tracking-wider uppercase">01 / CMS</span>
                  <span className="text-white font-semibold block text-xs mt-0.5">WordPress</span>
                  <span className="text-[#777788] text-[11px]">Bespoke Themes &amp; ACF</span>
                </div>

                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 backdrop-blur-xs">
                  <span className="text-[#00F0FF] block font-bold text-[10px] tracking-wider uppercase">02 / BACKEND</span>
                  <span className="text-white font-semibold block text-xs mt-0.5">Laravel</span>
                  <span className="text-[#777788] text-[11px]">Custom MVC &amp; APIs</span>
                </div>

                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 backdrop-blur-xs">
                  <span className="text-[#10B981] block font-bold text-[10px] tracking-wider uppercase">03 / VELOCITY</span>
                  <span className="text-white font-semibold block text-xs mt-0.5">Core Web Vitals</span>
                  <span className="text-[#777788] text-[11px]">Sub-Second Speed</span>
                </div>

                <div className="p-2.5 rounded-lg bg-white/5 border border-white/5 backdrop-blur-xs">
                  <span className="text-[#F59E0B] block font-bold text-[10px] tracking-wider uppercase">04 / STABILITY</span>
                  <span className="text-white font-semibold block text-xs mt-0.5">Infrastructure</span>
                  <span className="text-[#777788] text-[11px]">Nginx, Redis &amp; SSL</span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Layered Cockpit Architecture Telemetry Showcase */}
          <div className="lg:col-span-5 relative">
            <ScrollReveal direction="left" delay={180}>
              {/* Primary Glassmorphic Telemetry Card */}
              <div className="relative rounded-2xl bg-[#111116]/80 backdrop-blur-xl border border-white/15 p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] space-y-4 group">
                {/* Cockpit Card Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] inline-block" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] inline-block" />
                    <span className="ml-2 text-white font-semibold truncate">
                      cambridgecar.audio
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#315CFF]/20 text-[#82A0FF] border border-[#315CFF]/40 text-[11px]">
                    PHP 8.2 • 98/100
                  </span>
                </div>

                {/* Main Showcase Preview with Subtle Scanline / Cyber Glare */}
                <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-white/10 bg-[#16161c]">
                  <Image
                    src="/projects/cambridge-car-audio.svg"
                    alt="Cambridge Car Audio custom WordPress architecture"
                    fill
                    priority
                    className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111116] via-transparent to-transparent opacity-60 pointer-events-none" />
                </div>

                {/* Telemetry Metric Readouts */}
                <div className="grid grid-cols-3 gap-2 text-center font-mono text-xs">
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#315CFF]/50 transition-colors">
                    <span className="text-[10px] text-[#777788] uppercase block">FCP</span>
                    <span className="text-sm font-extrabold text-white">&lt; 0.9s</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#10B981]/50 transition-colors">
                    <span className="text-[10px] text-[#777788] uppercase block">Lighthouse</span>
                    <span className="text-sm font-extrabold text-[#10B981]">98 / 100</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-[#00F0FF]/50 transition-colors">
                    <span className="text-[10px] text-[#777788] uppercase block">Payload</span>
                    <span className="text-sm font-extrabold text-[#00F0FF]">-62%</span>
                  </div>
                </div>

                {/* Engineering Ribbon */}
                <div className="px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span className="text-[#C0C0D0]">Zero Page-Builder Bloat</span>
                  </div>
                  <Link
                    href="/work/cambridge-car-audio"
                    className="text-[#315CFF] hover:text-[#82A0FF] font-semibold flex items-center gap-1 text-[11px] transition-colors"
                  >
                    Case Study →
                  </Link>
                </div>
              </div>

              {/* Secondary Floating Telemetry Badge (STC360 LMS Platform) */}
              <div className="hidden sm:flex absolute -bottom-6 -left-6 z-20 bg-[#16161c]/90 backdrop-blur-xl border border-white/15 p-3.5 rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.6)] max-w-[260px] items-start gap-3 animate-float-slow">
                <div className="w-8 h-8 rounded-lg bg-[#315CFF]/20 border border-[#315CFF]/40 flex items-center justify-center shrink-0 mt-0.5">
                  <Layers className="w-4 h-4 text-[#315CFF]" />
                </div>
                <div>
                  <div className="text-xs font-mono font-bold text-white flex items-center gap-1.5">
                    <span>STC360 LMS Platform</span>
                  </div>
                  <p className="text-[11px] text-[#888899] mt-0.5 font-['Lato'] leading-tight">
                    Laravel 10 • Redis Queues • Automated PDF Certification
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>

      {/* 4. High-Speed Kinetic Marquee Ticker (Lando Norris Signature Aesthetic) */}
      <div className="relative z-10 w-full bg-[#0c0c10] border-t border-white/10 py-3 overflow-hidden select-none">
        <div className="flex w-max animate-shimmer-marquee space-x-8 text-xs font-mono font-bold tracking-widest text-[#666677] uppercase">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <div key={idx} className="flex items-center space-x-8 whitespace-nowrap">
              <span className="hover:text-white transition-colors cursor-default">{item}</span>
              <span className="text-[#315CFF]">///</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
