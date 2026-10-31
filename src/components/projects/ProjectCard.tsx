'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '@/types';

export interface ProjectCardProps {
  project: Project;
  featuredLayout?: boolean;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-[#E4E4DF] hover:border-[#141413] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_45px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 flex flex-col h-full relative cursor-pointer">
      <Link href={`/work/${project.slug}`} className="flex flex-col h-full focus:outline-none">
        {/* Top Edge Hairline Indicator */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#141413] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

        {/* Visual Preview Container */}
        <div className="relative aspect-[16/10] bg-[#0E0E12] overflow-hidden border-b border-[#E4E4DF] group-hover:border-[#141413]/20 transition-colors">
          {/* Browser Window Indicator Header */}
          <div className="absolute top-3.5 left-3.5 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#14141A]/85 backdrop-blur-md border border-white/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span className="text-[10px] font-mono text-[#A8A8C0] ml-1.5 font-medium tracking-wider uppercase">
              {project.categoryLabel.split(' ')[0]}
            </span>
          </div>

          {/* Cover Image */}
          <Image
            src={project.coverImage}
            alt={`${project.title} — ${project.tagline}`}
            fill
            className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, 50vw"
            unoptimized
          />

          {/* Subtle Hover Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        {/* Content: Title & Short Description Only */}
        <div className="p-7 sm:p-8 flex flex-col flex-grow justify-between bg-white">
          <div className="space-y-3">
            {/* Title & Circular Arrow Indicator */}
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-2xl sm:text-[26px] font-extrabold text-[#141413] tracking-tight leading-snug font-['Montserrat'] group-hover:text-[#059669] transition-colors">
                {project.title}
              </h3>
              <div className="w-10 h-10 rounded-full bg-[#F7F7F4] group-hover:bg-[#141413] text-[#141413] group-hover:text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45 shrink-0 border border-[#E4E4DF] group-hover:border-[#141413] shadow-2xs mt-0.5">
                <ArrowUpRight className="w-4 h-4 transition-transform" />
              </div>
            </div>

            {/* Short Description */}
            <p className="text-sm sm:text-base text-[#5F5F58] font-normal leading-relaxed font-['Lato'] line-clamp-3">
              {project.tagline || project.summary}
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}
