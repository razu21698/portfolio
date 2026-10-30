'use client';

import React, { useState } from 'react';
import { Layers, Zap, Target, ShieldCheck, MessageSquare, Terminal } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function EngineeringPhilosophy() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const principles = [
    {
      num: '01',
      icon: Layers,
      title: 'Maintainable Architecture over Quick Fixes',
      desc: 'Bespoke, modular code adhering to WordPress coding standards and Laravel best practices. Built to be understood, extended, and maintained years down the line.',
    },
    {
      num: '02',
      icon: Zap,
      title: 'Performance as an Engineering Requirement',
      desc: 'Speed is not an afterthought or a plugin setting. Sub-second render times, database query indexing, and optimal Core Web Vitals are engineered from line one.',
    },
    {
      num: '03',
      icon: Target,
      title: 'Business Objectives Before Unnecessary Complexity',
      desc: 'Technology exists to serve business workflows, drive customer conversions, and reduce operational friction—not to showcase unnecessary abstractions.',
    },
    {
      num: '04',
      icon: ShieldCheck,
      title: 'Operational Stability & Server Reliability',
      desc: 'End-to-end infrastructure thinking: hardened Nginx server blocks, zero-downtime database migrations, automated backup pipelines, and disaster recovery.',
    },
    {
      num: '05',
      icon: MessageSquare,
      title: 'Direct Communication & Transparent Milestones',
      desc: 'Clear technical documentation, daily Git commits, proactive updates, and honest technical audits without buzzwords or manufactured claims.',
    },
    {
      num: '06',
      icon: Terminal,
      title: 'Automated CI/CD & Testing Discipline',
      desc: 'Automated deployment pipelines, zero-regression checks, database seeders, and clean staging environments ensuring smooth, reliable production releases.',
    },
  ];

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative py-20 lg:py-28 bg-[#111111] text-white border-y border-[#262626] overflow-hidden"
    >
      {/* Interactive Ambient Radial Spotlight following Cursor */}
      <div
        className="pointer-events-none absolute -inset-px opacity-30 transition-opacity duration-300"
        style={{
          background: `radial-gradient(650px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 255, 0, 0.08), transparent 80%)`,
        }}
      />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10">
        <ScrollReveal direction="up">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4FF00] flex items-center gap-2 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#D4FF00]" />
              Engineering Philosophy
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Montserrat']">
              How I approach software craft.
            </h2>
            <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed font-['Lato']">
              Senior development is about solving problems pragmatically. Here are the principles that guide every client engagement and architectural decision.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 70}>
                <div className="group relative p-8 rounded-xl bg-[#161616] border border-[#262626] hover:border-[#D4FF00]/50 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(212,255,0,0.1)] transition-all duration-300 space-y-4 h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-lg bg-[#222222] text-[#D4FF00] flex items-center justify-center border border-[#333333] group-hover:bg-[#D4FF00] group-hover:text-[#09090c] transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#8E8EA0] group-hover:text-[#D4FF00] transition-colors">
                        RULE {p.num}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-white font-['Montserrat'] tracking-tight group-hover:text-[#D4FF00] transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-sm text-[#C4C4D4] leading-relaxed font-['Lato'] font-normal">
                      {p.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#222222] text-xs font-mono text-[#8E8EA0] font-medium flex items-center justify-between">
                    <span>Verified Production Standard</span>
                    <span className="text-[#D4FF00] font-bold">Active</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
