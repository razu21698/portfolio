import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  ArrowUpRight,
  ExternalLink,
  CheckCircle2,
  Calendar,
  User,
  Building,
  Terminal,
} from 'lucide-react';
import { projects } from '@/data/projects';
import { Badge } from '@/components/ui/Badge';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ConsultationCta } from '@/components/sections/ConsultationCta';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Case Study by Ahmed Razu`,
      description: project.summary,
      images: [{ url: project.coverImage }],
    },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const related = projects
    .filter((p) => p.slug !== project.slug && (p.category === project.category || p.featured))
    .slice(0, 2);

  return (
    <div className="pt-8 pb-20">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Mandatory Visible Breadcrumb */}
        <Breadcrumbs
          items={[
            { label: 'Work', href: '/work' },
            { label: project.title },
          ]}
        />

        {/* Case Study Header */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="accent" size="md">
              {project.categoryLabel}
            </Badge>
            {project.featured && (
              <Badge variant="success" size="md">
                Featured Case Study
              </Badge>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#141413] tracking-tight leading-tight font-['Montserrat']">
            {project.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#5F5F58] leading-relaxed max-w-3xl font-['Lato']">
            {project.tagline}
          </p>
        </div>

        {/* Project Metadata Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl bg-white border border-[#E4E4DF]">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#888880] flex items-center gap-1.5 mb-1">
              <Building className="w-3.5 h-3.5" /> Client
            </span>
            <span className="text-sm font-bold text-[#141413] block truncate font-['Montserrat']">
              {project.client}
            </span>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#888880] flex items-center gap-1.5 mb-1">
              <User className="w-3.5 h-3.5" /> My Role
            </span>
            <span className="text-sm font-bold text-[#141413] block truncate font-['Montserrat']">
              {project.role}
            </span>
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-[#888880] flex items-center gap-1.5 mb-1">
              <Calendar className="w-3.5 h-3.5" /> Timeline
            </span>
            <span className="text-sm font-bold text-[#141413] block font-['Montserrat']">
              {project.timeline}
            </span>
          </div>

          <div className="flex items-center sm:justify-end">
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-3 py-2 rounded bg-[#315CFF] text-white hover:bg-[#1E44D6] transition-colors"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs font-mono text-[#888880]">Internal System</span>
            )}
          </div>
        </div>

        {/* Hero Visual Preview */}
        <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#E4E4DF] shadow-md bg-[#141416]">
          <Image
            src={project.coverImage}
            alt={`${project.title} technical architecture blueprint`}
            fill
            priority
            className="object-cover object-top"
          />
        </div>

        {/* Verified Results Metrics */}
        {project.results.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono">
            {project.results.map((res, i) => (
              <div
                key={i}
                className="p-6 rounded-xl bg-white border border-[#E4E4DF] space-y-1 text-center sm:text-left"
              >
                <span className="text-3xl font-extrabold text-[#141413] block">
                  {res.metric}
                </span>
                <span className="text-xs font-medium text-[#5F5F58] uppercase tracking-wider block">
                  {res.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Narrative Deep Dive: Challenge vs Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-8 rounded-xl bg-white border border-[#E4E4DF] space-y-4">
            <h2 className="text-xl font-bold text-[#141413] tracking-tight flex items-center gap-2 font-['Montserrat']">
              <span className="w-2 h-2 rounded-full bg-[#EF4444]" />
              The Business Challenge
            </h2>
            <p className="text-sm sm:text-base text-[#5F5F58] leading-relaxed font-['Lato']">
              {project.challenge}
            </p>
          </div>

          <div className="p-8 rounded-xl bg-white border border-[#E4E4DF] space-y-4">
            <h2 className="text-xl font-bold text-[#141413] tracking-tight flex items-center gap-2 font-['Montserrat']">
              <span className="w-2 h-2 rounded-full bg-[#059669]" />
              The Technical Solution
            </h2>
            <p className="text-sm sm:text-base text-[#5F5F58] leading-relaxed font-['Lato']">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Gallery / Architecture Diagram */}
        {project.galleryImages.length > 1 && (
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-[#141413] tracking-tight font-['Montserrat']">
              Architecture &amp; System Telemetry
            </h3>
            <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#E4E4DF] shadow-md bg-[#141416]">
              <Image
                src={project.galleryImages[1]}
                alt={`${project.title} system architecture diagram`}
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        )}

        {/* Key Engineering Highlights */}
        <div className="p-8 rounded-xl bg-white border border-[#E4E4DF] space-y-6">
          <h3 className="text-xl font-bold text-[#141413] tracking-tight font-['Montserrat']">
            Key Engineering Highlights
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.keyHighlights.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#315CFF] shrink-0 mt-0.5" />
                <span className="text-sm text-[#5F5F58] leading-relaxed font-['Lato']">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies Applied */}
        <div className="space-y-3">
          <h4 className="text-xs font-mono uppercase tracking-wider text-[#888880]">
            Technologies &amp; Libraries Applied
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1.5 bg-white text-[#141413] rounded-md border border-[#E4E4DF] shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Related Projects */}
        {related.length > 0 && (
          <div className="pt-12 border-t border-[#E4E4DF] space-y-6">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold text-[#141413] font-['Montserrat']">
                Related Case Studies
              </h3>
              <Link
                href="/work"
                className="text-xs font-mono text-[#315CFF] hover:underline flex items-center gap-1"
              >
                View all projects →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/work/${rel.slug}`}
                  className="p-5 rounded-xl bg-white border border-[#E4E4DF] hover:border-[#315CFF] transition-all group block"
                >
                  <span className="text-[11px] font-mono text-[#315CFF] block mb-1">
                    {rel.categoryLabel}
                  </span>
                  <h4 className="text-base font-bold text-[#141413] group-hover:text-[#315CFF] transition-colors flex items-center justify-between font-['Montserrat']">
                    <span>{rel.title}</span>
                    <ArrowUpRight className="w-4 h-4 text-[#888880] group-hover:text-[#315CFF]" />
                  </h4>
                  <p className="text-xs text-[#5F5F58] mt-1 line-clamp-2 font-['Lato']">
                    {rel.tagline}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-20">
        <ConsultationCta />
      </div>
    </div>
  );
}
