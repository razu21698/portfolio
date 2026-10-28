import React from 'react';
import type { Metadata } from 'next';
import { projects } from '@/data/projects';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ProjectFilter } from '@/components/projects/ProjectFilter';
import { ConsultationCta } from '@/components/sections/ConsultationCta';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Selected Work & Technical Case Studies',
  description:
    'Browse production WordPress themes, scalable Laravel web applications, and high-concurrency eCommerce platforms built by Ahmed Razu.',
};

export default function WorkPage() {
  return (
    <div className="pt-8 pb-20">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 mb-16 space-y-8">
        {/* Mandatory Visible Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Work', href: '/work' }]} />

        {/* Page Header */}
        <ScrollReveal direction="up">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#315CFF] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
              Verified Project Archive
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141413] tracking-tight leading-tight font-['Montserrat']">
              Selected work, built to solve real problems.
            </h1>
            <p className="text-base sm:text-lg text-[#5F5F58] leading-relaxed font-['Lato']">
              A comprehensive catalog of custom WordPress platforms, database-driven Laravel applications, and high-volume eCommerce optimizations delivered across international client engagements.
            </p>
          </div>
        </ScrollReveal>

        {/* Interactive Filter & Project Grid */}
        <div className="pt-4">
          <ProjectFilter initialProjects={projects} />
        </div>
      </div>

      <ConsultationCta />
    </div>
  );
}
