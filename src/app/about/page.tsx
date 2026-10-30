'use client';

import React from 'react';
import Link from 'next/link';
import {
  Download,
  GraduationCap,
  ArrowRight,
  ArrowUpRight,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Zap,
  Shield,
  Layers,
  Cpu,
  Terminal,
  Code2,
  Server,
  Sparkles,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { workExperience, educationList, skillCategories } from '@/data/experience';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from '@/components/ui/Icons';
import { TechStackCarousel } from '@/components/sections/TechStackCarousel';
import { ConsultationCta } from '@/components/sections/ConsultationCta';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function AboutPage() {
  const primaryEdu = educationList[0];

  const principles = [
    {
      num: '01',
      title: 'Zero Page-Builder Bloat',
      icon: Zap,
      desc: 'Bespoke PHP 8.2 architectures and lightweight component systems engineered from Figma. Eliminating 80+ conflicting plugins for maximum stability.',
    },
    {
      num: '02',
      title: 'Sub-Second Performance',
      icon: Cpu,
      desc: 'Strict adherence to Google Core Web Vitals (95+ Lighthouse). Fine-tuned OPcache, Redis object caching, asset tree-shaking, and sub-second LCP.',
    },
    {
      num: '03',
      title: 'Infrastructure Hardening',
      icon: Server,
      desc: 'End-to-end Linux/Nginx configuration, FastCGI caching, SSL Labs A+ ratings, automated offsite backup schedules, and disaster recovery plans.',
    },
    {
      num: '04',
      title: 'Event-Driven Architecture',
      icon: Layers,
      desc: 'Scalable Laravel MVC applications, background Redis queue workers, RESTful APIs, and webhook automations designed to eliminate manual data entry.',
    },
  ];

  return (
    <div className="bg-[#FAFAF8]">
      {/* 300px Breadcrumb Banner Section with Architectural Image */}
      <Breadcrumbs items={[{ label: 'About', href: '/about' }]} title="About Md Razib Ahmed Razu" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 space-y-20">

        {/* ========================================================= */}
        {/* 1. HERO BIO & DOSSIER SPLIT                                */}
        {/* ========================================================= */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Bio Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <ScrollReveal direction="up">
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#888880] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  Engineering Biography
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141413] tracking-tight leading-[1.08] font-['Montserrat']">
                  Engineering resilient web systems from bare metal to front-end fidelity.
                </h2>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={80}>
              <div className="space-y-5 text-base sm:text-lg text-[#52525B] leading-relaxed font-['Lato']">
                <p>
                  I am <strong className="text-[#141413] font-semibold">Md Razib Ahmed Razu</strong>, a Full-Stack WordPress &amp; Laravel Engineer with 3+ years of active production experience engineering bespoke themes, custom plugins, high-concurrency eCommerce platforms, and robust web applications for clients across the UK, Europe, and Asia.
                </p>
                <p>
                  My engineering background bridges system-level server orchestration with pixel-perfect interface development. I specialize in replacing bloated, fragile commercial page-builder themes with clean semantic PHP, modular Tailwind styling, and resilient database queries that consistently deliver sub-second response times.
                </p>
                <p>
                  From configuring Nginx reverse proxies and Redis queues to engineering complete multi-tier learning management systems in Laravel, every project is built for long-term scalability and business conversion.
                </p>
              </div>
            </ScrollReveal>

            {/* Quick Metrics Bar */}
            <ScrollReveal direction="up" delay={120}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-[#E4E4DF] shadow-xs text-center font-mono">
                <div className="space-y-1">
                  <span className="text-2xl font-black text-[#141413] block">3+</span>
                  <span className="text-xs font-semibold text-[#52525B] uppercase tracking-wider block">Years Prod.</span>
                </div>
                <div className="space-y-1 border-l border-[#EFEFED]">
                  <span className="text-2xl font-black text-[#059669] block">100+</span>
                  <span className="text-xs font-semibold text-[#52525B] uppercase tracking-wider block">Client Sites</span>
                </div>
                <div className="space-y-1 border-l border-[#EFEFED]">
                  <span className="text-2xl font-black text-[#141413] block">98/100</span>
                  <span className="text-xs font-semibold text-[#52525B] uppercase tracking-wider block">Avg Lighthouse</span>
                </div>
                <div className="space-y-1 border-l border-[#EFEFED]">
                  <span className="text-2xl font-black text-[#141413] block">B.Sc.</span>
                  <span className="text-xs font-semibold text-[#52525B] uppercase tracking-wider block">CSE Graduate</span>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal direction="up" delay={160}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button
                  href={siteConfig.cvUrl}
                  external
                  variant="primary"
                  size="md"
                  className="group font-['Montserrat'] text-xs font-bold uppercase tracking-wider shadow-md"
                >
                  <Download className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                  <span>Download Verified CV (PDF)</span>
                </Button>

                <Button
                  href="/contact"
                  variant="outline"
                  size="md"
                  className="group font-['Montserrat'] text-xs font-bold uppercase tracking-wider hover:border-[#141413]"
                >
                  <span>Discuss a Contract</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Technical Dossier Card */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left" delay={100}>
              <div className="p-7 sm:p-8 rounded-2xl bg-[#141418] border border-[#272733] text-white shadow-xl space-y-6 relative overflow-hidden">
                {/* Subtle top edge glow */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#D4FF00]/30 to-transparent" />

                {/* Profile Identity Bar */}
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-xl bg-[#D4FF00] text-[#09090c] flex items-center justify-center font-black text-xl font-mono shadow-md shrink-0">
                    AR
                  </div>
                  <div className="space-y-0.5">
                    <h3 className="text-lg font-bold text-white font-['Montserrat'] tracking-tight">
                      Md Razib Ahmed Razu
                    </h3>
                    <p className="text-xs font-mono text-[#D4FF00] font-semibold">
                      WordPress &amp; Laravel Engineer
                    </p>
                    <p className="text-xs text-[#A0A0B5] font-mono">
                      Dhaka, BD (GMT+6) · Global Remote
                    </p>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="p-3 rounded-xl bg-[#1B1B22] border border-[#2A2A38] flex items-center justify-between text-xs font-mono">
                  <span className="flex items-center gap-2 text-[#D0D0DE]">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                    <span>Contract Availability:</span>
                  </span>
                  <span className="text-[#D4FF00] font-bold">Open for Q4/Q1</span>
                </div>

                {/* Verified Contact Details */}
                <div className="space-y-2 pt-2 border-t border-[#252533] text-xs font-mono">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center justify-between p-3 rounded-lg bg-[#181820] hover:bg-[#20202C] border border-[#252533] text-[#D0D0DD] hover:text-[#D4FF00] transition-colors"
                  >
                    <span className="flex items-center gap-2.5 truncate">
                      <Mail className="w-4 h-4 text-[#8E8EA0] shrink-0" />
                      <span className="truncate">{siteConfig.email}</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8EA0] shrink-0" />
                  </a>

                  <a
                    href={siteConfig.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-[#181820] hover:bg-[#20202C] border border-[#252533] text-[#D0D0DD] hover:text-[#25D366] transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <WhatsAppIcon className="w-4 h-4 text-[#25D366] shrink-0" />
                      <span>WhatsApp: {siteConfig.whatsapp}</span>
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#8E8EA0] shrink-0" />
                  </a>

                  <div className="flex items-center gap-2.5 p-3 rounded-lg bg-[#181820] border border-[#252533] text-[#A0A0B5]">
                    <MapPin className="w-4 h-4 text-[#8E8EA0] shrink-0" />
                    <span>Languages: English (Professional), Bangla (Native)</span>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-2 flex gap-3">
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-lg bg-[#181820] hover:bg-[#222230] border border-[#2B2B3A] text-xs font-mono text-white flex items-center justify-center gap-2 transition-colors font-semibold"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-lg bg-[#181820] hover:bg-[#222230] border border-[#2B2B3A] text-xs font-mono text-white flex items-center justify-center gap-2 transition-colors font-semibold"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#38BDF8]" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Academic Credential Card */}
            <ScrollReveal direction="left" delay={160}>
              <div className="p-6 rounded-2xl bg-white border border-[#E4E4DF] shadow-xs space-y-3 hover:border-[#141413] transition-all duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-[#EFEFED]">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#141413] uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4 text-[#059669]" />
                    <span>Academic Qualification</span>
                  </div>
                  <span className="text-xs font-mono text-[#059669] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0] font-bold">
                    Class of {primaryEdu.year}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="text-base font-bold text-[#141413] font-['Montserrat'] leading-snug">
                    {primaryEdu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-[#5F5F58] font-['Montserrat']">
                    {primaryEdu.institution}
                  </p>
                </div>

                {primaryEdu.details && (
                  <p className="text-xs text-[#71717A] leading-relaxed font-['Lato'] pt-2 border-t border-[#EFEFED]">
                    {primaryEdu.details}
                  </p>
                )}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* ========================================================= */}
        {/* 2. CORE ARCHITECTURAL PRINCIPLES                           */}
        {/* ========================================================= */}
        <section className="pt-16 border-t border-[#E4E4DF] space-y-10">
          <ScrollReveal direction="up">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#888880] flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#141413]" />
                Engineering Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#141413] tracking-tight font-['Montserrat']">
                How I build production software.
              </h2>
              <p className="text-base text-[#52525B] font-['Lato']">
                Four engineering axioms applied to every client codebase to prevent technical debt.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((p, idx) => {
              const IconComp = p.icon;
              return (
                <ScrollReveal key={p.num} direction="up" delay={idx * 80}>
                  <div className="p-6 rounded-2xl bg-white border border-[#E4E4DF] hover:border-[#141413] transition-all duration-300 shadow-xs hover:shadow-md space-y-4 h-full flex flex-col justify-between group">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between pb-3 border-b border-[#EFEFED]">
                        <span className="text-xs font-mono font-bold text-[#888880] group-hover:text-[#141413] transition-colors">
                          {p.num} //
                        </span>
                        <div className="w-8 h-8 rounded-lg bg-[#F7F7F4] group-hover:bg-[#141413] group-hover:text-white flex items-center justify-center transition-colors">
                          <IconComp className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="text-lg font-bold text-[#141413] font-['Montserrat'] tracking-tight">
                        {p.title}
                      </h3>

                      <p className="text-xs text-[#52525B] leading-relaxed font-['Lato']">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 3. VERIFIED EMPLOYMENT HISTORY                            */}
        {/* ========================================================= */}
        <section className="pt-16 border-t border-[#E4E4DF] space-y-10">
          <ScrollReveal direction="up">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[#888880] flex items-center gap-2">
                  <span className="w-6 h-[1px] bg-[#141413]" />
                  Career Chronology
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#141413] tracking-tight font-['Montserrat']">
                  Verified Employment History
                </h2>
                <p className="text-base text-[#52525B] font-['Lato']">
                  Ground truth derived directly from production engineering roles and agency commitments.
                </p>
              </div>

              <div className="text-xs font-mono text-[#71717A] bg-white px-3.5 py-1.5 rounded-full border border-[#E4E4DF] self-start sm:self-auto shrink-0">
                4 Verified Roles · 3+ Years
              </div>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {workExperience.map((exp, index) => {
              const isCurrent = index === 0;

              return (
                <ScrollReveal key={index} direction="up" delay={index * 80}>
                  <article
                    className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                      isCurrent
                        ? 'bg-[#141413] text-white border border-[#27272A] shadow-xl'
                        : 'bg-white text-[#141413] border border-[#E4E4DF] hover:border-[#141413] shadow-xs hover:shadow-md'
                    }`}
                  >
                    {/* Header Bar */}
                    <div
                      className={`p-6 sm:p-7 border-b ${
                        isCurrent
                          ? 'border-[#27272A] bg-[#18181B]/60'
                          : 'border-[#EFEFED] bg-[#FAFAF8]'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <span
                              className={`text-xs font-mono font-bold ${
                                isCurrent ? 'text-[#D4FF00]' : 'text-[#888880]'
                              }`}
                            >
                              0{index + 1} //
                            </span>
                            <h3
                              className={`text-xl sm:text-2xl font-black font-['Montserrat'] tracking-tight ${
                                isCurrent ? 'text-white' : 'text-[#141413]'
                              }`}
                            >
                              {exp.role}
                            </h3>
                          </div>

                          <div
                            className={`flex flex-wrap items-center gap-2 text-xs font-mono ${
                              isCurrent ? 'text-[#A1A1AA]' : 'text-[#71717A]'
                            }`}
                          >
                            <span className="font-semibold text-current">{exp.company}</span>
                            <span>•</span>
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 self-start sm:self-center">
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#D4FF00] bg-[#D4FF00]/10 px-2.5 py-1 rounded-full border border-[#D4FF00]/30 tracking-wider">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00] animate-pulse" />
                              CURRENT ROLE
                            </span>
                          )}
                          <span
                            className={`text-xs font-mono font-semibold px-3 py-1 rounded-md whitespace-nowrap ${
                              isCurrent
                                ? 'text-white/80 bg-white/10 border border-white/10'
                                : 'text-[#5F5F58] bg-white border border-[#E4E4DF]'
                            }`}
                          >
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 sm:p-7 space-y-6">
                      <ul className="space-y-3">
                        {exp.highlights.map((highlight, hIdx) => (
                          <li
                            key={hIdx}
                            className={`flex items-start gap-3 text-sm leading-relaxed font-['Lato'] ${
                              isCurrent ? 'text-[#D4D4D8]' : 'text-[#52525B]'
                            }`}
                          >
                            <span
                              className={`text-sm font-bold shrink-0 mt-0.5 ${
                                isCurrent ? 'text-[#D4FF00]' : 'text-[#059669]'
                              }`}
                            >
                              →
                            </span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Chips */}
                      <div
                        className={`pt-5 border-t flex flex-wrap items-center gap-1.5 ${
                          isCurrent ? 'border-[#27272A]' : 'border-[#EFEFED]'
                        }`}
                      >
                        {exp.techUsed.map((tech) => (
                          <span
                            key={tech}
                            className={`text-xs font-mono font-medium px-2.5 py-1 rounded-md transition-colors ${
                              isCurrent
                                ? 'bg-white/10 text-white border border-white/15 hover:border-white/30'
                                : 'bg-[#F7F7F4] text-[#3F3F46] border border-[#E4E4DF] hover:border-[#141413]'
                            }`}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </section>

        {/* ========================================================= */}
        {/* 4. TECHNICAL COMPETENCY MATRIX & LOGO CAROUSEL            */}
        {/* ========================================================= */}
        <section className="pt-16 border-t border-[#E4E4DF]">
          <TechStackCarousel />
        </section>

      </div>

      {/* Global Consultation CTA */}
      <div className="mt-24">
        <ConsultationCta />
      </div>
    </div>
  );
}
