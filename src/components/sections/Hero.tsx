'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, ExternalLink, ShieldCheck, Gauge, Layers, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { siteConfig } from '@/data/siteConfig';

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E4E4DF]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Column: Asymmetric Editorial Typography & Action */}
          <div className="lg:col-span-7 space-y-6">
            {/* Context Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#E4E4DF] text-xs font-mono text-[#5F5F58] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#315CFF]" />
              <span>WordPress &amp; Laravel Developer • 3+ Years Production</span>
            </div>

            {/* Mandatory Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold text-[#141413] tracking-tight leading-[1.08] font-['Montserrat']">
              I build digital experiences and{' '}
              <span className="text-[#315CFF]">business systems</span> that perform.
            </h1>

            {/* Supporting Brand Positioning */}
            <p className="text-lg sm:text-xl text-[#5F5F58] leading-relaxed max-w-2xl font-normal font-['Lato']">
              I build high-performing WordPress websites, powerful Laravel applications, and intelligent automation systems that help businesses scale.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button href="/contact" variant="primary" size="lg" className="font-semibold font-['Montserrat'] text-sm tracking-wide">
                <span>Discuss a Project</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button href="/work" variant="secondary" size="lg" className="font-semibold font-['Montserrat'] text-sm tracking-wide">
                <span>Explore My Work</span>
                <ArrowUpRight className="w-4 h-4 text-[#5F5F58]" />
              </Button>
            </div>

            {/* Specialized Capabilities Ribbon */}
            <div className="pt-6 border-t border-[#E4E4DF] flex flex-wrap items-center gap-y-3 gap-x-8 text-xs font-mono text-[#5F5F58]">
              <div>
                <span className="text-[#141413] font-bold block">WordPress</span>
                <span>Custom Themes &amp; Plugins</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-[#E4E4DF]" />
              <div>
                <span className="text-[#141413] font-bold block">Laravel</span>
                <span>Web Apps &amp; Rest APIs</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-[#E4E4DF]" />
              <div>
                <span className="text-[#141413] font-bold block">Speed Tuning</span>
                <span>Core Web Vitals &amp; Caching</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-[#E4E4DF]" />
              <div>
                <span className="text-[#141413] font-bold block">Infrastructure</span>
                <span>Nginx, DNS &amp; Security</span>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Architecture Showcase Composition */}
          <div className="lg:col-span-5 relative">
            {/* Primary Visual Surface: Real Project Preview with Layered Telemetry */}
            <div className="relative rounded-xl bg-white border border-[#E4E4DF] p-3 shadow-sm space-y-3">
              {/* Window Header */}
              <div className="px-3 py-2 bg-[#F7F7F4] rounded-lg border border-[#E4E4DF] flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80 inline-block" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80 inline-block" />
                  <span className="ml-2 text-[#5F5F58] truncate max-w-[180px] sm:max-w-none">
                    cambridgecar.audio • Custom Theme
                  </span>
                </div>
                <Badge variant="accent" size="sm">
                  PHP 8.2 • 98/100
                </Badge>
              </div>

              {/* Main Screenshot Container */}
              <div className="relative aspect-[16/10] rounded-lg overflow-hidden border border-[#E4E4DF] bg-[#141416]">
                <Image
                  src="/projects/cambridge-car-audio.svg"
                  alt="Cambridge Car Audio custom WordPress architecture"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              {/* Secondary Layered Technical Metric Strip */}
              <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono text-xs">
                <div className="p-2.5 rounded-lg bg-[#F7F7F4] border border-[#E4E4DF]">
                  <span className="text-[10px] text-[#888880] uppercase block">FCP</span>
                  <span className="text-sm font-extrabold text-[#141413]">&lt; 0.9s</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#F7F7F4] border border-[#E4E4DF]">
                  <span className="text-[10px] text-[#888880] uppercase block">Lighthouse</span>
                  <span className="text-sm font-extrabold text-[#059669]">98 / 100</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#F7F7F4] border border-[#E4E4DF]">
                  <span className="text-[10px] text-[#888880] uppercase block">Payload</span>
                  <span className="text-sm font-extrabold text-[#315CFF]">-62%</span>
                </div>
              </div>

              {/* Architectural Annotation Ribbon */}
              <div className="px-3 py-2 bg-[#111111] text-white rounded-lg flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  <span className="text-[#D4D4D4]">Zero Page-Builder Bloat</span>
                </div>
                <Link
                  href="/work/cambridge-car-audio"
                  className="text-[#315CFF] hover:underline flex items-center gap-1 text-[11px]"
                >
                  Case Study →
                </Link>
              </div>
            </div>

            {/* Subtle Offset Floating Accent Card (STC360 LMS Architecture) */}
            <div className="hidden sm:block absolute -bottom-6 -left-6 z-20 bg-white border border-[#E4E4DF] p-3 rounded-xl shadow-lg max-w-[240px]">
              <div className="flex items-center gap-2 text-[11px] font-mono font-bold text-[#141413]">
                <Layers className="w-3.5 h-3.5 text-[#315CFF]" />
                <span>STC360 LMS Platform</span>
              </div>
              <p className="text-[11px] text-[#5F5F58] mt-1 font-['Lato'] leading-tight">
                Laravel 10 • Redis Async Queues • Automated PDF Certs
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
