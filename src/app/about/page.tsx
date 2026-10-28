'use client';

import React from 'react';
import {
  Download,
  GraduationCap,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { workExperience, educationList, skillCategories } from '@/data/experience';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { ConsultationCta } from '@/components/sections/ConsultationCta';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function AboutPage() {
  return (
    <div className="pt-8 pb-20">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Mandatory Visible Breadcrumb */}
        <Breadcrumbs items={[{ label: 'About', href: '/about' }]} />

        {/* Intro Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Bio Column */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="up">
              <span className="text-xs font-mono uppercase tracking-widest text-[#141413] font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                Engineering Background
              </span>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141413] tracking-tight leading-tight font-['Montserrat'] mt-2">
                Good development is more than code.{' '}
                <span className="text-[#5F5F58]">It is engineered business value.</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={100}>
              <div className="space-y-4 text-base sm:text-lg text-[#5F5F58] leading-relaxed font-['Lato']">
                <p>
                  I am <strong className="text-[#141413]">Ahmed Razu (Md. Razib Ahmed Razu)</strong>, a WordPress Developer and Software Engineer with 3+ years of professional experience building, optimizing, and maintaining production websites and web applications for client projects worldwide.
                </p>
                <p>
                  My work spans across the full web development lifecycle: from business requirement analysis and custom theme/plugin development to REST API integration, Nginx/Apache server provisioning, automated backups, and sub-second Core Web Vitals performance tuning.
                </p>
                <p>
                  I have engineered custom WordPress architectures for leading international brands and corporate conglomerates, while building scalable backend systems and Learning Management Systems (LMS) in Laravel.
                </p>
              </div>
            </ScrollReveal>

            {/* Core Working Principles */}
            <ScrollReveal direction="up" delay={180}>
              <div className="pt-4 border-t border-[#E4E4DF] space-y-3">
                <h3 className="text-xs font-bold text-[#141413] uppercase tracking-wider font-mono">
                  My Core Engineering Principles
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#5F5F58] font-['Lato']">
                  <div className="flex items-start gap-2 p-3.5 rounded-lg bg-white border border-[#E4E4DF] hover:border-[#141413] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span><strong>Zero Bloat:</strong> Custom lightweight code over 80+ conflicting plugins.</span>
                  </div>
                  <div className="flex items-start gap-2 p-3.5 rounded-lg bg-white border border-[#E4E4DF] hover:border-[#141413] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span><strong>Sub-Second Speed:</strong> Strict adherence to Google Core Web Vitals.</span>
                  </div>
                  <div className="flex items-start gap-2 p-3.5 rounded-lg bg-white border border-[#E4E4DF] hover:border-[#141413] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span><strong>Infrastructure Security:</strong> Hardened Nginx, SSL, automated backups.</span>
                  </div>
                  <div className="flex items-start gap-2 p-3.5 rounded-lg bg-white border border-[#E4E4DF] hover:border-[#141413] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#059669] shrink-0 mt-0.5" />
                    <span><strong>Transparent Delivery:</strong> Clear communication, Git versioning, honest audits.</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="up" delay={240}>
              <div className="pt-2 flex flex-wrap gap-4">
                <Button href="/documents/Ahmed_Razu_CV.pdf" external variant="primary" size="md" className="group font-['Montserrat'] text-xs font-semibold">
                  <Download className="w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5" />
                  <span>Download Verified CV (PDF)</span>
                </Button>
                <Button href="/contact" variant="outline" size="md" className="group font-['Montserrat'] text-xs font-semibold">
                  <span>Discuss Opportunities</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Button>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Profile & Verified Stats Card */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left" delay={120}>
              <div className="p-8 rounded-xl bg-white border border-[#E4E4DF] shadow-sm space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-[#141413] text-white flex items-center justify-center font-extrabold text-2xl font-mono shadow-inner">
                    AR
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#141413] font-['Montserrat']">
                      Md. Razib Ahmed Razu
                    </h2>
                    <p className="text-xs font-mono text-[#141413] font-semibold">
                      WordPress &amp; Laravel Engineer
                    </p>
                    <p className="text-xs text-[#888880] mt-0.5 font-['Lato']">
                      Dhaka, Bangladesh • Global Remote
                    </p>
                  </div>
                </div>

                {/* Verified Contact Details */}
                <div className="space-y-3 pt-4 border-t border-[#EFEFED] text-xs font-['Lato']">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="flex items-center gap-2.5 text-[#141413] hover:text-[#059669] transition-colors p-2 rounded hover:bg-[#F7F7F4]"
                  >
                    <Mail className="w-4 h-4 text-[#888880] shrink-0" />
                    <span className="break-all font-mono font-medium">{siteConfig.email}</span>
                  </a>
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                    className="flex items-center gap-2.5 text-[#141413] hover:text-[#059669] transition-colors p-2 rounded hover:bg-[#F7F7F4]"
                  >
                    <Phone className="w-4 h-4 text-[#888880] shrink-0" />
                    <span className="font-mono">{siteConfig.phone}</span>
                  </a>
                  <div className="flex items-center gap-2.5 text-[#5F5F58] p-2">
                    <MapPin className="w-4 h-4 text-[#888880] shrink-0" />
                    <span>English (Professional), Bangla (Native)</span>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-[#EFEFED] flex gap-3">
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-md bg-[#F7F7F4] hover:bg-[#EFEFED] border border-[#E4E4DF] text-xs font-mono text-[#141413] flex items-center justify-center gap-2 transition-colors font-semibold"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2 px-3 rounded-md bg-[#F7F7F4] hover:bg-[#EFEFED] border border-[#E4E4DF] text-xs font-mono text-[#141413] flex items-center justify-center gap-2 transition-colors font-semibold"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Academic Education Box */}
            <ScrollReveal direction="left" delay={200}>
              <div className="p-6 rounded-xl bg-white border border-[#E4E4DF] space-y-4 hover:border-[#141413]/40 transition-colors">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#141413]">
                  <GraduationCap className="w-4 h-4 text-[#059669]" />
                  <span>Academic Education</span>
                </div>
                {educationList.map((edu, idx) => (
                  <div key={idx} className={idx > 0 ? 'pt-4 border-t border-[#EFEFED]' : ''}>
                    <h4 className="text-sm font-bold text-[#141413] font-['Montserrat']">
                      {edu.degree}
                    </h4>
                    <p className="text-xs text-[#5F5F58] font-semibold mt-0.5 font-['Montserrat']">
                      {edu.institution}
                    </p>
                    <p className="text-[11px] font-mono text-[#888880] mt-1">
                      Graduation: {edu.year}
                    </p>
                    {edu.details && (
                      <p className="text-xs text-[#5F5F58] mt-1.5 leading-normal font-['Lato']">
                        {edu.details}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Career Chronology Section */}
        <div className="pt-12 border-t border-[#E4E4DF] space-y-8">
          <ScrollReveal direction="up">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                Professional Experience
              </span>
              <h2 className="text-3xl font-extrabold text-[#141413] tracking-tight font-['Montserrat']">
                Verified Employment History
              </h2>
              <p className="text-sm text-[#5F5F58] font-['Lato']">
                Ground truth derived directly from production team roles and client commitments.
              </p>
            </div>
          </ScrollReveal>

          <div className="space-y-6">
            {workExperience.map((exp, index) => (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="p-8 rounded-xl bg-white border border-[#E4E4DF] hover:border-[#141413]/40 hover:shadow-md transition-all duration-300 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-[#EFEFED] pb-4">
                    <div>
                      <h3 className="text-xl font-bold text-[#141413] font-['Montserrat']">
                        {exp.role}
                      </h3>
                      <div className="text-sm font-semibold text-[#141413] font-['Montserrat']">
                        {exp.company}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#5F5F58] bg-[#F7F7F4] px-3 py-1.5 rounded-md border border-[#E4E4DF] self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <ul className="space-y-2 text-sm text-[#5F5F58] leading-relaxed font-['Lato']">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#141413] mt-2 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 flex flex-wrap gap-1.5">
                    {exp.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-mono px-2.5 py-1 bg-[#F7F7F4] text-[#141413] rounded border border-[#E4E4DF]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Technical Skills Matrix */}
        <div className="pt-12 border-t border-[#E4E4DF] space-y-8">
          <ScrollReveal direction="up">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#059669] flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#059669]" />
                Competency Matrix
              </span>
              <h2 className="text-3xl font-extrabold text-[#141413] tracking-tight font-['Montserrat']">
                Technical Stack &amp; Applied Proficiency
              </h2>
              <p className="text-sm text-[#5F5F58] font-['Lato']">
                No arbitrary percentage bars. Every skill below corresponds to production code deployed and maintained for clients.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((cat, idx) => (
              <ScrollReveal key={idx} direction="up" delay={idx * 120}>
                <div className="p-8 rounded-xl bg-white border border-[#E4E4DF] hover:border-[#141413]/30 hover:shadow-md transition-all duration-300 space-y-5 h-full">
                  <div>
                    <h3 className="text-lg font-bold text-[#141413] font-['Montserrat']">
                      {cat.title}
                    </h3>
                    <p className="text-xs text-[#5F5F58] mt-1 font-['Lato']">
                      {cat.description}
                    </p>
                  </div>

                  <div className="space-y-3">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="p-3.5 rounded-lg bg-[#F7F7F4] border border-[#E4E4DF] hover:border-[#141413]/30 transition-colors space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-[#141413] font-mono">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-[#059669] bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#A7F3D0]">
                            Production Verified
                          </span>
                        </div>
                        <p className="text-[11px] text-[#5F5F58] font-['Lato']">
                          {skill.verifiedUse}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <ConsultationCta />
      </div>
    </div>
  );
}
