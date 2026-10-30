'use client';

import React from 'react';
import {
  GraduationCap,
  ArrowRight,
  Briefcase,
  CheckCircle2,
  Calendar,
  MapPin,
  ExternalLink,
} from 'lucide-react';
import { workExperience, educationList } from '@/data/experience';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function ExperienceTimeline() {
  const primaryEdu = educationList[0];

  return (
    <section id="experience" className="py-24 lg:py-32 bg-[#F7F7F4] border-b border-[#E4E4DF] relative">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* ========================================================= */}
          {/* LEFT COLUMN: STICKY CONTEXT, EDUCATION & METRICS          */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8 self-start">
            <ScrollReveal direction="up">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E4DF] text-xs font-mono text-[#141413]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>05 // CAREER CHRONOLOGY</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141413] tracking-tight font-['Montserrat'] leading-[1.08]">
                  3+ years in active production.
                </h2>

                <p className="text-base text-[#5F5F58] leading-relaxed font-['Lato']">
                  Grounded in agency and software company operations. From managing end-to-end WordPress server setups and building custom plugins to engineering scalable Laravel backend architectures.
                </p>
              </div>
            </ScrollReveal>

            {/* Academic Credential Card */}
            <ScrollReveal direction="up" delay={100}>
              <div className="p-6 rounded-2xl bg-white border border-[#E4E4DF] shadow-xs space-y-4 hover:border-[#141413] transition-all duration-300">
                <div className="flex items-center justify-between pb-3 border-b border-[#EFEFED]">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#141413] uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4 text-[#059669]" />
                    <span>Academic Qualification</span>
                  </div>
                  <span className="text-xs font-mono text-[#059669] bg-[#ECFDF5] px-2.5 py-0.5 rounded-full border border-[#A7F3D0] font-bold">
                    Class of {primaryEdu.year}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-[#141413] font-['Montserrat'] leading-snug">
                    {primaryEdu.degree}
                  </h4>
                  <p className="text-sm font-semibold text-[#3F3F46] font-['Montserrat']">
                    {primaryEdu.institution}
                  </p>
                </div>

                {primaryEdu.details && (
                  <p className="text-sm text-[#52525B] leading-relaxed font-['Lato'] pt-2 border-t border-[#EFEFED]">
                    {primaryEdu.details}
                  </p>
                )}
              </div>
            </ScrollReveal>

            {/* Quick Production Stats */}
            <ScrollReveal direction="up" delay={150}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 text-center font-mono">
                  <div className="p-4 rounded-xl bg-white border border-[#E4E4DF]">
                    <span className="text-2xl font-black text-[#141413] block">4 Roles</span>
                    <span className="text-xs text-[#71717A] font-semibold block uppercase mt-0.5">
                      Agency &amp; Software Co.
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#E4E4DF]">
                    <span className="text-2xl font-black text-[#059669] block">100%</span>
                    <span className="text-xs text-[#71717A] font-semibold block uppercase mt-0.5">
                      Production Verified
                    </span>
                  </div>
                </div>

                <Button
                  href="/about"
                  variant="outline"
                  size="md"
                  className="w-full justify-between font-['Montserrat'] text-xs font-semibold group hover:border-[#141413]"
                >
                  <span>Detailed Technical Biography</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* ========================================================= */}
          {/* RIGHT COLUMN: SCROLLING PRODUCTION TIMELINE               */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 space-y-6">
            {workExperience.map((item, index) => {
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
                              {item.role}
                            </h3>
                          </div>

                          <div
                            className={`flex flex-wrap items-center gap-2 text-xs font-mono ${
                              isCurrent ? 'text-[#A1A1AA]' : 'text-[#71717A]'
                            }`}
                          >
                            <span className="font-semibold text-current">{item.company}</span>
                            <span>•</span>
                            <span>{item.location}</span>
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
                            {item.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Body Content */}
                    <div className="p-6 sm:p-7 space-y-6">
                      {/* Highlights */}
                      <ul className="space-y-3">
                        {item.highlights.map((highlight, hIdx) => (
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

                      {/* Tooling / Tech Stack Chips */}
                      <div
                        className={`pt-5 border-t flex flex-wrap items-center gap-1.5 ${
                          isCurrent ? 'border-[#27272A]' : 'border-[#EFEFED]'
                        }`}
                      >
                        {item.techUsed.map((tech) => (
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

        </div>
      </div>
    </section>
  );
}
