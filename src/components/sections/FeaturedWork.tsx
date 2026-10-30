'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, ExternalLink, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

type FilterTab = 'all' | 'wordpress' | 'laravel' | 'ecommerce';

export function FeaturedWork() {
  const [activeTab, setActiveTab] = useState<FilterTab>('all');

  const p1 = projects.find((p) => p.slug === 'cambridge-car-audio')!;
  const p2 = projects.find((p) => p.slug === 'stc360-lms')!;
  const p3 = projects.find((p) => p.slug === 'bd-budget-beauty')!;
  const p4 = projects.find((p) => p.slug === 'malomatia')!;

  // Default featured 4, or filtered list
  const featuredList = [p1, p2, p3, p4];
  const displayedProjects = activeTab === 'all'
    ? featuredList
    : projects.filter((p) => p.category === activeTab);

  const tabs: { id: FilterTab; label: string; count: number }[] = [
    { id: 'all', label: 'Selected Flagships', count: 4 },
    { id: 'wordpress', label: 'WordPress & Performance', count: projects.filter((p) => p.category === 'wordpress').length },
    { id: 'laravel', label: 'Laravel Web Applications', count: projects.filter((p) => p.category === 'laravel').length },
    { id: 'ecommerce', label: 'WooCommerce & Scaling', count: projects.filter((p) => p.category === 'ecommerce').length },
  ];

  return (
    <section id="featured-work" className="bg-[#09090D] text-white py-24 lg:py-32 border-y border-[#1E1E28] relative overflow-hidden">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#D4FF00]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#22222E] pb-8 gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161620] border border-[#2B2B3A] text-xs font-mono text-[#D4FF00]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
                <span>02 // PRODUCTION ARCHITECTURE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Montserrat'] uppercase">
                Featured Work &amp; Case Studies
              </h2>
              <p className="text-base sm:text-lg text-[#9E9EAF] leading-relaxed font-['Lato']">
                Production-grade WordPress themes, scalable Laravel platforms, and high-concurrency systems engineered for international founders, agencies, and enterprises.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Button
                href="/work"
                variant="volt"
                size="md"
                className="group font-['Montserrat'] text-xs uppercase tracking-wider font-bold"
              >
                <span>Full Archive ({projects.length})</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Filter Pills */}
        <ScrollReveal direction="up" delay={50}>
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <span className="text-xs font-mono text-[#78788C] uppercase tracking-wider mr-2 hidden sm:inline">
              Filter By Domain:
            </span>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`text-xs font-mono px-3.5 py-1.5 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                  activeTab === tab.id
                    ? 'bg-[#D4FF00] text-[#09090D] border-[#D4FF00] font-bold shadow-[0_0_15px_rgba(212,255,0,0.25)]'
                    : 'bg-[#14141B] text-[#9E9EAF] border-[#252533] hover:text-white hover:border-[#3E3E52]'
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    activeTab === tab.id ? 'bg-[#09090D]/20 text-[#09090D]' : 'bg-[#22222E] text-[#888899]'
                  }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Dynamic Project Grid */}
        <div className="space-y-12">
          {displayedProjects.map((project, index) => {
            const isReversed = index % 2 !== 0;
            const primaryMetric = project.results[0];
            const secondaryMetric = project.results[1];
            const tertiaryMetric = project.results[2];

            return (
              <ScrollReveal key={project.slug} direction="up" delay={index * 100}>
                <article className="group bg-[#111117] rounded-2xl border border-[#22222C] hover:border-[#38384A] p-6 sm:p-8 lg:p-10 shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Subtle top edge highlight */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4FF00]/20 to-transparent" />

                  {/* Top Meta Bar */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-[#1E1E28] text-xs font-mono">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-extrabold text-[#D4FF00]">
                        {String(index + 1).padStart(2, '0')} //
                      </span>
                      <span className="text-white font-semibold">{project.client}</span>
                      <span className="text-[#555566]">•</span>
                      <span className="text-[#8E8EA0]">{project.role}</span>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="px-2.5 py-1 rounded bg-[#181822] text-[#10B981] border border-[#10B981]/25 text-[11px] font-semibold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-ping" />
                        {project.categoryLabel}
                      </span>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8E8EA0] hover:text-[#D4FF00] transition-colors flex items-center gap-1 text-[11px]"
                          aria-label={`Visit ${project.title} live production website`}
                        >
                          <span>Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Asymmetrical Grid Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Visual Window Mockup Container */}
                    <div
                      className={`lg:col-span-7 ${
                        isReversed ? 'lg:order-2' : 'lg:order-1'
                      }`}
                    >
                      <div className="relative rounded-xl overflow-hidden border border-[#2B2B38] bg-[#161620] shadow-2xl group/mockup">
                        {/* Browser Window Chrome */}
                        <div className="bg-[#14141C] border-b border-[#252533] px-4 py-2.5 flex items-center justify-between select-none">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
                          </div>

                          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0C0C10] border border-white/5 text-[11px] font-mono text-[#8E8EA0] max-w-[280px] truncate">
                            <span className="text-[#10B981]">https://</span>
                            <span>{project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '') : `${project.slug}.com`}</span>
                          </div>

                          <div className="text-[10px] font-mono text-[#666677] uppercase tracking-wider hidden sm:block">
                            PROD_v2
                          </div>
                        </div>

                        {/* Image Surface with Zoom on Card Hover */}
                        <div className="relative aspect-[16/10] bg-[#101014] overflow-hidden">
                          <Image
                            src={project.coverImage}
                            alt={`${project.title} architectural overview`}
                            fill
                            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 55vw"
                          />

                          {/* Hover Overlay with Direct Action */}
                          <div className="absolute inset-0 bg-[#09090D]/50 opacity-0 group-hover/mockup:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 backdrop-blur-[2px]">
                            <Link
                              href={`/work/${project.slug}`}
                              className="px-4 py-2 rounded-md bg-white text-[#09090D] font-mono text-xs font-bold flex items-center gap-1.5 hover:bg-[#D4FF00] transition-colors shadow-lg"
                            >
                              <span>Inspect Architecture</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </Link>
                            {project.liveUrl && (
                              <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 rounded-md bg-[#161620] border border-white/20 text-white font-mono text-xs font-bold flex items-center gap-1.5 hover:border-white transition-colors"
                              >
                                <span>Visit Live</span>
                                <ExternalLink className="w-3.5 h-3.5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Narrative & Engineering Specs Container */}
                    <div
                      className={`lg:col-span-5 space-y-6 ${
                        isReversed ? 'lg:order-1' : 'lg:order-2'
                      }`}
                    >
                      <div className="space-y-3">
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-['Montserrat']">
                          <Link
                            href={`/work/${project.slug}`}
                            className="hover:text-[#D4FF00] transition-colors"
                          >
                            {project.title}
                          </Link>
                        </h3>

                        <p className="text-sm sm:text-base text-[#9E9EAF] leading-relaxed font-['Lato']">
                          {project.summary}
                        </p>
                      </div>

                      {/* Technical Problem Solved Callout */}
                      <div className="p-3.5 rounded-xl bg-[#15151F] border border-[#252536] space-y-1.5">
                        <div className="flex items-center gap-1.5 text-xs font-mono text-[#D4FF00] font-semibold">
                          <Zap className="w-3.5 h-3.5" />
                          <span>ENGINEERING PROBLEM SOLVED</span>
                        </div>
                        <p className="text-xs text-[#A8A8BA] font-['Lato'] leading-relaxed">
                          {project.challenge.length > 140
                            ? `${project.challenge.slice(0, 140)}...`
                            : project.challenge}
                        </p>
                      </div>

                      {/* Engineering HUD Metrics */}
                      {project.results.length > 0 && (
                        <div className="grid grid-cols-3 gap-2.5 py-2 font-mono">
                          {primaryMetric && (
                            <div className="p-3 rounded-lg bg-[#14141D] border border-[#232332] text-center">
                              <span className="text-base sm:text-lg font-black text-[#D4FF00] block">
                                {primaryMetric.metric}
                              </span>
                              <span className="text-[10px] text-[#78788C] block truncate uppercase mt-0.5">
                                {primaryMetric.label}
                              </span>
                            </div>
                          )}
                          {secondaryMetric && (
                            <div className="p-3 rounded-lg bg-[#14141D] border border-[#232332] text-center">
                              <span className="text-base sm:text-lg font-black text-[#10B981] block">
                                {secondaryMetric.metric}
                              </span>
                              <span className="text-[10px] text-[#78788C] block truncate uppercase mt-0.5">
                                {secondaryMetric.label}
                              </span>
                            </div>
                          )}
                          {tertiaryMetric && (
                            <div className="p-3 rounded-lg bg-[#14141D] border border-[#232332] text-center">
                              <span className="text-base sm:text-lg font-black text-white block">
                                {tertiaryMetric.metric}
                              </span>
                              <span className="text-[10px] text-[#78788C] block truncate uppercase mt-0.5">
                                {tertiaryMetric.label}
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Technologies Stack Chips */}
                      <div className="space-y-2">
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#666677] block">
                          Applied Technology Stack:
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {project.technologies.slice(0, 5).map((tech) => (
                            <span
                              key={tech}
                              className="text-[11px] font-mono px-2.5 py-1 bg-[#161622] text-[#C8C8DC] rounded border border-[#282838]"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 5 && (
                            <span className="text-[11px] font-mono px-2 py-1 bg-[#161622] text-[#777788] rounded border border-[#282838]">
                              +{project.technologies.length - 5}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Action Row */}
                      <div className="pt-2 flex flex-wrap items-center gap-3">
                        <Button
                          href={`/work/${project.slug}`}
                          variant="volt"
                          size="md"
                          className="font-['Montserrat'] text-xs uppercase tracking-wider font-bold"
                        >
                          <span>Explore Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Button>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#C4C4D4] hover:text-white px-3.5 py-2.5 rounded-md border border-[#2C2C3D] hover:border-white transition-colors"
                          >
                            <span>Live Preview</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Banner Callout */}
        <ScrollReveal direction="up" delay={200}>
          <div className="p-8 sm:p-10 rounded-2xl bg-[#12121A] border border-[#242434] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <h4 className="text-xl sm:text-2xl font-bold text-white font-['Montserrat']">
                Have an existing WordPress or Laravel application that needs attention?
              </h4>
              <p className="text-sm text-[#9E9EAF] font-['Lato'] max-w-2xl">
                I regularly take over complex legacy codebases, perform deep performance optimizations, and engineer custom feature upgrades.
              </p>
            </div>

            <Button
              href="/contact"
              variant="volt"
              size="lg"
              className="font-['Montserrat'] text-xs uppercase tracking-wider font-bold shrink-0"
            >
              <span>Discuss Your Codebase</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
