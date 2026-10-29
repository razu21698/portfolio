'use client';

import React from 'react';
import Link from 'next/link';
import {
  GraduationCap,
  Building2,
  Calendar,
  MapPin,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  ShieldCheck,
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
          {/* LEFT SIDE: STICKY CONTEXT, EDUCATION & STATS PANEL       */}
          {/* ========================================================= */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-8 self-start">
            <ScrollReveal direction="up">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#E4E4DF] text-xs font-mono text-[#141413]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  <span>05 // CAREER CHRONOLOGY</span>
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#141413] tracking-tight font-['Montserrat'] leading-[1.1]">
                  3+ years in active production environments.
                </h2>

                <p className="text-base text-[#5F5F58] leading-relaxed font-['Lato']">
                  Grounded in agency and software company operations. From managing end-to-end WordPress server setups and building custom plugins to engineering Laravel backend architectures.
                </p>
              </div>
            </ScrollReveal>

            {/* Formal Academic Education Card */}
            <ScrollReveal direction="up" delay={100}>
              <div className="p-6 rounded-2xl bg-white border border-[#E4E4DF] shadow-xs hover:border-[#141413] transition-all duration-300 space-y-4 relative group">
                <div className="flex items-center justify-between pb-3 border-b border-[#EFEFED]">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#141413] uppercase tracking-wider">
                    <GraduationCap className="w-4 h-4 text-[#059669]" />
                    <span>Formal Academic Education</span>
                  </div>
                  <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#A7F3D0]">
                    Verified Degree
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-base font-bold text-[#141413] font-['Montserrat'] leading-snug">
                    {primaryEdu.degree}
                  </h4>
                  <p className="text-xs font-semibold text-[#5F5F58] font-['Montserrat']">
                    {primaryEdu.institution}
                  </p>
                  <p className="text-xs font-mono text-[#888880] pt-1">
                    Graduation: <strong className="text-[#141413]">{primaryEdu.year}</strong>
                  </p>
                </div>

                {primaryEdu.details && (
                  <p className="text-xs text-[#5F5F58] leading-relaxed font-['Lato'] pt-2 border-t border-[#EFEFED]">
                    {primaryEdu.details}
                  </p>
                )}
              </div>
            </ScrollReveal>

            {/* Quick Metrics & Direct CTA */}
            <ScrollReveal direction="up" delay={150}>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3 text-center font-mono">
                  <div className="p-4 rounded-xl bg-white border border-[#E4E4DF]">
                    <span className="text-2xl font-black text-[#141413] block">4 Roles</span>
                    <span className="text-[11px] text-[#888880] block uppercase mt-0.5">
                      Agency &amp; Software Co.
                    </span>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-[#E4E4DF]">
                    <span className="text-2xl font-black text-[#059669] block">100%</span>
                    <span className="text-[11px] text-[#888880] block uppercase mt-0.5">
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
                  <span>Detailed Technical Biography &amp; Stack</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* ========================================================= */}
          {/* RIGHT SIDE: SCROLLING PRODUCTION TIMELINE                */}
          {/* ========================================================= */}
          <div className="lg:col-span-7 relative">
            {/* Vertical Spine Track */}
            <div className="absolute left-4 sm:left-6 top-6 bottom-6 w-[2px] bg-[#E4E4DF]" />

            <div className="space-y-8 pl-10 sm:pl-14">
              {workExperience.map((item, index) => {
                const isCurrent = index === 0;

                return (
                  <ScrollReveal key={index} direction="up" delay={index * 80}>
                    <div className="relative group">
                      {/* Timeline Node on Spine */}
                      <div
                        className={`absolute -left-[38px] sm:-left-[54px] top-6 w-5 h-5 rounded-full border-4 border-[#F7F7F4] flex items-center justify-center transition-transform duration-300 group-hover:scale-125 z-10 ${
                          isCurrent
                            ? 'bg-[#10B981] ring-4 ring-[#10B981]/25'
                            : 'bg-[#141413] ring-2 ring-[#141413]/10'
                        }`}
                      >
                        {isCurrent && (
                          <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                        )}
                      </div>

                      {/* Role Card */}
                      <div
                        className={`p-6 sm:p-8 rounded-2xl bg-white border transition-all duration-300 shadow-xs hover:shadow-xl space-y-5 relative ${
                          isCurrent
                            ? 'border-[#141413] ring-1 ring-[#141413]/10'
                            : 'border-[#E4E4DF] hover:border-[#141413]'
                        }`}
                      >
                        {/* Header Information */}
                        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[#EFEFED] pb-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-mono font-bold text-[#888880] uppercase tracking-wider">
                                0{index + 1} //
                              </span>
                              <h3 className="text-xl font-bold text-[#141413] font-['Montserrat'] tracking-tight">
                                {item.role}
                              </h3>
                            </div>
                            <div className="flex items-center gap-2 text-sm font-semibold text-[#141413]">
                              <Building2 className="w-4 h-4 text-[#888880]" />
                              <span>{item.company}</span>
                              <span className="text-[#888880]">•</span>
                              <span className="text-xs font-mono text-[#888880] font-normal flex items-center gap-1">
                                <MapPin className="w-3 h-3" />
                                {item.location}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2 self-start sm:self-auto">
                            {isCurrent && (
                              <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded-full border border-[#A7F3D0] font-bold">
                                ACTIVE
                              </span>
                            )}
                            <span className="text-xs font-mono text-[#141413] bg-[#F7F7F4] px-3 py-1 rounded-md border border-[#E4E4DF] font-semibold whitespace-nowrap">
                              {item.period}
                            </span>
                          </div>
                        </div>

                        {/* Production Responsibilities */}
                        <ul className="space-y-2.5 text-xs sm:text-sm text-[#5F5F58] leading-relaxed font-['Lato']">
                          {item.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#141413] mt-2 shrink-0 group-hover:bg-[#059669] transition-colors" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Applied Technology Chips */}
                        <div className="pt-3 border-t border-[#EFEFED] space-y-2">
                          <span className="text-[10px] font-mono uppercase tracking-wider text-[#888880] block">
                            Production Tooling &amp; Stack:
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {item.techUsed.map((tech) => (
                              <span
                                key={tech}
                                className="text-[11px] font-mono px-2.5 py-1 bg-[#F7F7F4] text-[#141413] rounded border border-[#E4E4DF] group-hover:border-[#C7C7BF] transition-colors"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}