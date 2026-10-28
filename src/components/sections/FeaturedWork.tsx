'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function FeaturedWork() {
  const p1 = projects.find((p) => p.slug === 'cambridge-car-audio')!;
  const p2 = projects.find((p) => p.slug === 'stc360-lms')!;
  const p3 = projects.find((p) => p.slug === 'bd-budget-beauty')!;
  const p4 = projects.find((p) => p.slug === 'malomatia')!;

  return (
    <section id="featured-work" className="py-20 lg:py-28 overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Section Header with Scroll Reveal */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E4E4DF] pb-8 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#315CFF] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
                Editorial Project Showcase
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141413] tracking-tight font-['Montserrat']">
                Selected work, built to solve real problems.
              </h2>
              <p className="text-base text-[#5F5F58] leading-relaxed font-['Lato']">
                Every showcase below represents production code engineered for real clients—optimized for performance, maintainability, and business conversion.
              </p>
            </div>

            <Button
              href="/work"
              variant="outline"
              size="md"
              className="group self-start md:self-end font-['Montserrat'] text-xs font-semibold hover:border-[#315CFF]"
            >
              <span>View All ({projects.length}) Projects</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </Button>
          </div>
        </ScrollReveal>

        {/* Showcase Item 1: Large Left Visual, Right Narrative (Cambridge Car Audio) */}
        <ScrollReveal direction="up" delay={100}>
          <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-2xl border border-[#E4E4DF] p-6 sm:p-10 shadow-xs hover:border-[#315CFF]/50 hover:shadow-lg transition-all duration-300">
            <div className="lg:col-span-7 relative aspect-[16/10] rounded-xl overflow-hidden border border-[#E4E4DF] bg-[#141416]">
              <Image
                src={p1.coverImage}
                alt={`${p1.title} technical architecture`}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="dark" size="sm">
                  {p1.categoryLabel}
                </Badge>
              </div>
              {p1.liveUrl && (
                <a
                  href={p1.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-10 p-2 rounded-md bg-[#111111]/85 hover:bg-[#315CFF] text-white transition-colors"
                  aria-label={`Visit live site for ${p1.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>

            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#888880] uppercase tracking-wider flex items-center justify-between">
                  <span>{p1.client}</span>
                  <span>{p1.role}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#141413] tracking-tight font-['Montserrat']">
                  <Link href={`/work/${p1.slug}`} className="hover:text-[#315CFF] transition-colors">
                    {p1.title}
                  </Link>
                </h3>
                <p className="text-sm sm:text-base text-[#5F5F58] leading-relaxed font-['Lato']">
                  {p1.summary}
                </p>
              </div>

              {/* Metrics with subtle hover fill */}
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#EFEFED] font-mono text-center">
                {p1.results.map((res, i) => (
                  <div key={i} className="p-2 bg-[#F7F7F4] rounded border border-[#E4E4DF] hover:border-[#315CFF]/30 transition-colors">
                    <span className="text-sm sm:text-base font-extrabold text-[#141413] block">
                      {res.metric}
                    </span>
                    <span className="text-[10px] text-[#5F5F58] block truncate">
                      {res.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex flex-wrap gap-1.5">
                  {p1.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[11px] font-mono px-2.5 py-1 bg-[#EFEFED] text-[#5F5F58] rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/work/${p1.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#315CFF] hover:text-[#1e44d6] shrink-0 font-['Montserrat'] uppercase tracking-wider ml-2"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Showcase Item 2: Reversed Composition (STC360 LMS Platform) */}
        <ScrollReveal direction="up" delay={150}>
          <div className="group grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-white rounded-2xl border border-[#E4E4DF] p-6 sm:p-10 shadow-xs hover:border-[#315CFF]/50 hover:shadow-lg transition-all duration-300">
            <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
              <div className="space-y-2">
                <div className="text-xs font-mono text-[#888880] uppercase tracking-wider flex items-center justify-between">
                  <span>{p2.client}</span>
                  <span>{p2.role}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#141413] tracking-tight font-['Montserrat']">
                  <Link href={`/work/${p2.slug}`} className="hover:text-[#315CFF] transition-colors">
                    {p2.title}
                  </Link>
                </h3>
                <p className="text-sm sm:text-base text-[#5F5F58] leading-relaxed font-['Lato']">
                  {p2.summary}
                </p>
              </div>

              {/* Metrics */}
              <div className="grid grid-cols-3 gap-2 py-3 border-y border-[#EFEFED] font-mono text-center">
                {p2.results.map((res, i) => (
                  <div key={i} className="p-2 bg-[#F7F7F4] rounded border border-[#E4E4DF] hover:border-[#315CFF]/30 transition-colors">
                    <span className="text-sm sm:text-base font-extrabold text-[#141413] block">
                      {res.metric}
                    </span>
                    <span className="text-[10px] text-[#5F5F58] block truncate">
                      {res.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-1">
                <div className="flex flex-wrap gap-1.5">
                  {p2.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="text-[11px] font-mono px-2.5 py-1 bg-[#EFEFED] text-[#5F5F58] rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/work/${p2.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#315CFF] hover:text-[#1e44d6] shrink-0 font-['Montserrat'] uppercase tracking-wider ml-2"
                >
                  <span>Read Case Study</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 relative aspect-[16/10] rounded-xl overflow-hidden border border-[#E4E4DF] bg-[#141416] order-1 lg:order-2">
              <Image
                src={p2.coverImage}
                alt={`${p2.title} Laravel architecture`}
                fill
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
              <div className="absolute top-4 left-4 z-10">
                <Badge variant="dark" size="sm">
                  {p2.categoryLabel}
                </Badge>
              </div>
              {p2.liveUrl && (
                <a
                  href={p2.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 z-10 p-2 rounded-md bg-[#111111]/85 hover:bg-[#315CFF] text-white transition-colors"
                  aria-label={`Visit live site for ${p2.title}`}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </ScrollReveal>

        {/* Dual Secondary Project Columns (BD Budget Beauty & Malomatia Enterprise) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[p3, p4].map((proj, index) => (
            <ScrollReveal key={proj.slug} direction="up" delay={200 + index * 100}>
              <div className="group bg-white rounded-2xl border border-[#E4E4DF] p-6 sm:p-8 shadow-xs hover:border-[#315CFF]/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 h-full">
                <div className="space-y-4">
                  <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-[#E4E4DF] bg-[#141416]">
                    <Image
                      src={proj.coverImage}
                      alt={proj.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute top-3 left-3 z-10">
                      <Badge variant="dark" size="sm">
                        {proj.categoryLabel}
                      </Badge>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-xs font-mono text-[#888880] uppercase tracking-wider flex items-center justify-between">
                      <span>{proj.client}</span>
                      <span>{proj.role}</span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-bold text-[#141413] tracking-tight font-['Montserrat']">
                      <Link href={`/work/${proj.slug}`} className="hover:text-[#315CFF] transition-colors">
                        {proj.title}
                      </Link>
                    </h4>
                    <p className="text-xs sm:text-sm text-[#5F5F58] leading-relaxed font-['Lato']">
                      {proj.summary}
                    </p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EFEFED] flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {proj.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="text-[11px] font-mono px-2 py-0.5 bg-[#EFEFED] text-[#5F5F58] rounded">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/work/${proj.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#315CFF] hover:text-[#1e44d6] font-['Montserrat'] uppercase tracking-wider"
                  >
                    <span>Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
