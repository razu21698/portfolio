'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Project } from '@/types';
import { Badge } from '@/components/ui/Badge';

export interface ProjectCardProps {
  project: Project;
  featuredLayout?: boolean;
}

export function ProjectCard({ project, featuredLayout = false }: ProjectCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-[#E4E4DF] hover:border-[#141413] overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1.5 flex flex-col h-full relative">
      {/* Top Edge Indicator */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#141413] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

      {/* Browser Frame Header */}
      <div className="bg-[#14141A] px-3.5 py-2 border-b border-[#22222E] flex items-center justify-between select-none">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/80" />
        </div>

        <span className="text-xs font-mono text-[#A8A8C0] max-w-[180px] truncate">
          {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, '') : `${project.slug}.com`}
        </span>

        <span className="text-xs font-mono font-bold text-[#10B981] bg-[#10B981]/10 px-2 py-0.5 rounded border border-[#10B981]/25">
          PROD
        </span>
      </div>

      {/* Visual Preview Container */}
      <div className="relative aspect-[16/10] bg-[#101014] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={`${project.title} technical architecture and preview`}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        {/* Category Overlay Tag */}
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="dark" size="md" className="backdrop-blur-md bg-[#0E0E12]/90 border border-white/10 text-xs font-semibold">
            {project.categoryLabel}
          </Badge>
        </div>

        {/* Live Link Button */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 z-10 p-1.5 rounded-md bg-[#0E0E12]/85 hover:bg-[#141413] text-white transition-colors border border-white/15 shadow-sm"
            aria-label={`Visit live site for ${project.title}`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Client & Role Subtitle */}
          <div className="flex items-center justify-between text-xs font-mono text-[#888880]">
            <span className="truncate max-w-[160px] font-semibold text-[#141413]">{project.client}</span>
            <span>{project.role}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-[#141413] tracking-tight group-hover:text-[#059669] transition-colors flex items-center justify-between font-['Montserrat']">
            <Link href={`/work/${project.slug}`} className="focus-visible:outline-none">
              {project.title}
            </Link>
            <ArrowUpRight className="w-4 h-4 text-[#888880] group-hover:text-[#141413] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </h3>

          {/* Tagline / Summary */}
          <p className="text-sm text-[#475569] font-medium line-clamp-2 leading-relaxed font-['Lato']">
            {project.tagline}
          </p>
        </div>

        {/* Verified Results Metrics HUD */}
        {project.results.length > 0 && (
          <div className="grid grid-cols-2 gap-2 pt-3 border-t border-[#EFEFED] font-mono">
            {project.results.slice(0, 2).map((res, i) => (
              <div key={i} className="bg-[#F7F7F4] p-2.5 rounded-lg border border-[#E4E4DF]/70">
                <span className="text-base font-extrabold text-[#141413] block">
                  {res.metric}
                </span>
                <span className="text-xs text-[#52525B] font-semibold block truncate uppercase mt-0.5">
                  {res.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills & Action Link */}
        <div className="pt-3 border-t border-[#EFEFED] flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-7">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono font-medium px-2 py-0.5 bg-[#F7F7F4] text-[#141413] rounded border border-[#E4E4DF]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs font-mono font-bold text-[#71717A] self-center">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="text-xs font-bold text-[#141413] hover:text-[#059669] transition-colors flex items-center gap-1 shrink-0 ml-auto font-['Montserrat'] uppercase tracking-wider"
          >
            <span>Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}