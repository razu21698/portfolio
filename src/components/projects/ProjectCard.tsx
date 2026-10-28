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
    <article className="group bg-white rounded-xl border border-[#E4E4DF] hover:border-[#C7C7BF] overflow-hidden transition-all duration-300 hover:shadow-md flex flex-col h-full">
      {/* Visual Preview Container */}
      <div className="relative aspect-[16/10] bg-[#141416] overflow-hidden border-b border-[#E4E4DF]">
        <Image
          src={project.coverImage}
          alt={`${project.title} technical architecture and preview`}
          fill
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Category Overlay Tag */}
        <div className="absolute top-3 left-3 z-10">
          <Badge variant="dark" size="sm" className="backdrop-blur-sm bg-[#111111]/90">
            {project.categoryLabel}
          </Badge>
        </div>

        {/* Live Link Indicator if available */}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 z-10 p-1.5 rounded-md bg-[#111111]/85 hover:bg-[#315CFF] text-white transition-colors border border-white/10"
            aria-label={`Visit live site for ${project.title}`}
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
        <div>
          {/* Client & Role Subtitle */}
          <div className="flex items-center justify-between text-xs font-mono text-[#888880] mb-2">
            <span className="truncate max-w-[160px]">{project.client}</span>
            <span>{project.role}</span>
          </div>

          {/* Project Title */}
          <h3 className="text-xl font-bold text-[#141413] tracking-tight group-hover:text-[#315CFF] transition-colors flex items-center justify-between font-['Montserrat']">
            <Link href={`/work/${project.slug}`} className="focus-visible:outline-none focus-visible:underline">
              {project.title}
            </Link>
            <ArrowUpRight className="w-4 h-4 text-[#888880] group-hover:text-[#315CFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </h3>

          {/* Tagline / Summary */}
          <p className="text-sm text-[#5F5F58] mt-2 line-clamp-2 leading-relaxed font-['Lato']">
            {project.tagline}
          </p>
        </div>

        {/* Verified Results Metrics */}
        {project.results.length > 0 && (
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#EFEFED] font-mono">
            {project.results.slice(0, 2).map((res, i) => (
              <div key={i} className="bg-[#F7F7F4] p-2 rounded border border-[#E4E4DF]/60">
                <span className="text-base font-extrabold text-[#141413] block">
                  {res.metric}
                </span>
                <span className="text-[11px] text-[#5F5F58] block truncate">
                  {res.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Tech Stack Pills & Action Link */}
        <div className="pt-2 border-t border-[#EFEFED] flex items-center justify-between gap-2">
          <div className="flex flex-wrap gap-1.5 overflow-hidden max-h-7">
            {project.technologies.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[11px] font-mono px-2 py-0.5 bg-[#EFEFED] text-[#5F5F58] rounded"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[10px] font-mono text-[#888880] self-center">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          <Link
            href={`/work/${project.slug}`}
            className="text-xs font-bold text-[#315CFF] hover:underline flex items-center gap-1 shrink-0 ml-auto font-['Montserrat'] uppercase tracking-wider"
          >
            Case Study →
          </Link>
        </div>
      </div>
    </article>
  );
}
