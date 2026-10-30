'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, ExternalLink, Play, Pause, Zap } from 'lucide-react';
import { projects } from '@/data/projects';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';
import { Project } from '@/types';

export function FeaturedWork() {
  const [isPaused, setIsPaused] = useState(false);

  // Partition all 9 production projects across 2 complementary carousel tracks
  const track1Projects: Project[] = [
    projects.find((p) => p.slug === 'cambridge-car-audio')!,
    projects.find((p) => p.slug === 'stc360-lms')!,
    projects.find((p) => p.slug === 'bd-budget-beauty')!,
    projects.find((p) => p.slug === 'malomatia')!,
    projects.find((p) => p.slug === 'dbl-group')!,
  ].filter(Boolean);

  const track2Projects: Project[] = [
    projects.find((p) => p.slug === 'auko-tex-group')!,
    projects.find((p) => p.slug === 'ispahani-bd')!,
    projects.find((p) => p.slug === 'pos-enterprise-system')!,
    projects.find((p) => p.slug === 'singer-bd-maintenance')!,
    projects.find((p) => p.slug === 'cambridge-car-audio')!, // Balances track lengths
  ].filter(Boolean);

  // Duplicate arrays for endless, zero-jump infinite marquee loop (0% -> -50%)
  const row1 = [...track1Projects, ...track1Projects];
  const row2 = [...track2Projects, ...track2Projects];

  return (
    <section
      id="featured-work"
      className="bg-[#09090D] text-white py-20 lg:py-28 border-y border-[#1E1E28] relative overflow-hidden"
    >
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[500px] bg-[#D4FF00]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] bg-[#10B981]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#22222E] pb-8 gap-6">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161620] border border-[#2B2B3A] text-xs font-mono text-[#D4FF00]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
                <span>02 // PRODUCTION ARCHITECTURE</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight font-['Montserrat'] uppercase">
                Featured Work &amp; Case Studies
              </h2>
              <p className="text-base sm:text-lg text-[#9E9EAF] leading-relaxed font-['Lato']">
                Explore production-grade WordPress themes, scalable Laravel platforms, and modern web applications engineered for speed, clean code, and business conversion.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {/* Play / Pause Toggle Button */}
              <button
                type="button"
                onClick={() => setIsPaused((prev) => !prev)}
                className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#14141C] border border-[#262633] hover:border-[#D4FF00]/50 text-xs font-mono text-[#A0A0B5] hover:text-white transition-colors cursor-pointer"
                title={isPaused ? 'Resume Carousel' : 'Pause Carousel'}
              >
                {isPaused ? (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#D4FF00]" />
                    <span>RESUME STREAM</span>
                  </>
                ) : (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#A0A0B5]" />
                    <span>PAUSE STREAM</span>
                  </>
                )}
              </button>

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

        {/* Operational Telemetry Sub-bar */}
        <div className="flex items-center justify-between text-xs font-mono text-[#78788C] px-1">
          <span className="flex items-center gap-2">
            <span className={`w-1.5 h-1.5 rounded-full ${isPaused ? 'bg-[#F59E0B]' : 'bg-[#10B981] animate-pulse'}`} />
            <span>
              {isPaused
                ? 'CAROUSEL PAUSED • CLICK CARD TO INSPECT ARCHITECTURE'
                : 'DUAL-TRACK LIVE CAROUSEL • HOVER TO PAUSE & READ'}
            </span>
          </span>
          <span className="hidden sm:inline text-xs font-mono font-medium text-[#8E8EA0]">
            {projects.length} CLIENT DEPLOYMENTS
          </span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* DUAL-ROW INFINITE PROJECT CAROUSEL                        */}
      {/* ========================================================= */}
      <div className="relative mt-8 overflow-hidden py-4 select-none">
        {/* Left and Right Smooth Fade Gradients */}
        <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 lg:w-44 bg-gradient-to-r from-[#09090D] via-[#09090D]/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 lg:w-44 bg-gradient-to-l from-[#09090D] via-[#09090D]/80 to-transparent z-20 pointer-events-none" />

        <div className="space-y-6 sm:space-y-8">
          {/* Track 1: Left to Right Marquee */}
          <div
            className="flex w-max animate-shimmer-marquee space-x-6 sm:space-x-8 select-none"
            style={{
              animationDuration: '65s',
              animationPlayState: isPaused ? 'paused' : undefined,
            }}
          >
            {row1.map((project, idx) => (
              <ProjectCard key={`${project.slug}-t1-${idx}`} project={project} />
            ))}
          </div>

          {/* Track 2: Reverse Direction Marquee */}
          <div
            className="flex w-max animate-shimmer-marquee space-x-6 sm:space-x-8 select-none"
            style={{
              animationDuration: '72s',
              animationDirection: 'reverse',
              animationPlayState: isPaused ? 'paused' : undefined,
            }}
          >
            {row2.map((project, idx) => (
              <ProjectCard key={`${project.slug}-t2-${idx}`} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Individual Project Showcase Card
 * 60% Left Side (Browser mockup & image) / 40% Right Side (Metadata, title, short description, specs) across all devices.
 */
function ProjectCard({ project }: { project: Project }) {
  const primaryResult = project.results && project.results[0];

  return (
    <article className="group w-[540px] sm:w-[640px] md:w-[720px] lg:w-[780px] bg-[#121218] hover:bg-[#161622] rounded-2xl border border-[#22222E] hover:border-[#D4FF00]/60 p-3.5 sm:p-4.5 shadow-xl hover:shadow-[0_12px_36px_rgba(0,0,0,0.6)] transition-all duration-300 shrink-0 grid grid-cols-5 gap-3.5 sm:gap-5 items-stretch relative overflow-hidden">
      {/* Subtle top edge highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4FF00]/20 to-transparent group-hover:via-[#D4FF00]/60 transition-all duration-300" />

      {/* ========================================================= */}
      {/* LEFT SIDE (60%): BROWSER MOCKUP & IMAGE SURFACE          */}
      {/* ========================================================= */}
      <div className="col-span-3 flex flex-col rounded-xl overflow-hidden border border-[#262633] bg-[#0E0E14] group/mockup min-w-0">
        {/* Browser Chrome Header */}
        <div className="bg-[#15151E] border-b border-[#242432] px-3.5 py-2 flex items-center justify-between select-none">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
          </div>

          <div className="flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#0C0C10] border border-white/10 text-xs font-mono text-[#B0B0C4] max-w-[160px] sm:max-w-[220px] truncate">
            <span className="text-[#10B981] font-semibold">https://</span>
            <span>{project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '') : `${project.slug}.com`}</span>
          </div>

          <div className="text-xs font-mono text-[#D4FF00] font-bold uppercase tracking-wider">
            PROD
          </div>
        </div>

        {/* Project Image Surface */}
        <div className="relative flex-1 min-h-[190px] sm:min-h-[230px] bg-[#0B0B0E] overflow-hidden">
          <Image
            src={project.coverImage}
            alt={`${project.title} cover preview`}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            sizes="(max-width: 640px) 340px, (max-width: 768px) 430px, 480px"
          />

          {/* Quick Action Overlay on Hover */}
          <div className="absolute inset-0 bg-[#09090D]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 backdrop-blur-[2px] p-2">
            <Link
              href={`/work/${project.slug}`}
              className="px-3 py-1.5 rounded-md bg-[#D4FF00] text-[#09090D] font-mono text-xs font-bold flex items-center gap-1 hover:bg-white transition-colors shadow-lg"
            >
              <span>Inspect</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-md bg-[#161622] border border-white/20 text-white font-mono text-xs font-bold flex items-center gap-1 hover:border-[#D4FF00] hover:text-[#D4FF00] transition-colors"
              >
                <span>Live</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>
      </div>

      {/* ========================================================= */}
      {/* RIGHT SIDE (40%): METADATA, TITLE, SHORT DESCRIPTION      */}
      {/* ========================================================= */}
      <div className="col-span-2 flex flex-col justify-between py-1 sm:py-2 pr-1 min-w-0 space-y-3.5">
        <div className="space-y-2.5">
          {/* Top Meta: Category Badge & Client */}
          <div className="flex items-center justify-between text-xs font-mono gap-2">
            <span className="px-2.5 py-1 rounded bg-[#181824] text-[#10B981] border border-[#10B981]/30 text-xs font-semibold flex items-center gap-1.5 shrink-0 truncate max-w-[160px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />
              <span className="truncate">{project.categoryLabel}</span>
            </span>
            <span className="text-[#A0A0B5] text-xs font-medium truncate font-mono">
              {project.client}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl lg:text-2xl font-extrabold font-['Montserrat'] tracking-tight text-white group-hover:text-[#D4FF00] transition-colors leading-snug line-clamp-2">
            <Link href={`/work/${project.slug}`}>
              {project.title}
            </Link>
          </h3>

          {/* Short Description */}
          <p className="text-sm text-[#C4C4D4] font-['Lato'] font-normal line-clamp-3 leading-relaxed">
            {project.tagline || project.summary}
          </p>

          {/* Verified Engineering Metric Highlight */}
          {primaryResult && (
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-[#161622] border border-[#282838] text-xs font-mono max-w-full truncate">
              <Zap className="w-3.5 h-3.5 text-[#D4FF00] shrink-0" />
              <span className="font-extrabold text-[#D4FF00] shrink-0">{primaryResult.metric}</span>
              <span className="text-[#A0A0B5] truncate text-xs font-medium">{primaryResult.label}</span>
            </div>
          )}
        </div>

        {/* Bottom Specs & Action Link */}
        <div className="pt-3 border-t border-[#1E1E28] flex items-center justify-between gap-2 text-xs font-mono">
          <div className="flex items-center gap-1.5 overflow-hidden">
            {project.technologies.slice(0, 2).map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded bg-[#181824] text-[#C4C4D4] border border-[#28283A] text-xs font-medium truncate"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 2 && (
              <span className="text-xs text-[#8E8EA0] font-semibold">
                +{project.technologies.length - 2}
              </span>
            )}
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="text-[#D4FF00] hover:text-white font-bold flex items-center gap-1 shrink-0 text-xs sm:text-sm transition-colors"
            aria-label={`View ${project.title} case study`}
          >
            <span>Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
