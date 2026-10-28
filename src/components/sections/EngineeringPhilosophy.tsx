import React from 'react';
import { Layers, Zap, Target, ShieldCheck, MessageSquare } from 'lucide-react';

export function EngineeringPhilosophy() {
  const principles = [
    {
      icon: Layers,
      title: 'Maintainable Architecture over Quick Fixes',
      desc: 'Bespoke, modular code adhering to WordPress coding standards and Laravel best practices. Built to be understood, extended, and maintained years down the line.',
    },
    {
      icon: Zap,
      title: 'Performance as an Engineering Requirement',
      desc: 'Speed is not an afterthought or a plugin setting. Sub-second render times, database query indexing, and optimal Core Web Vitals are engineered from line one.',
    },
    {
      icon: Target,
      title: 'Business Objectives Before Unnecessary Complexity',
      desc: 'Technology exists to serve business workflows, drive customer conversions, and reduce operational friction—not to showcase unnecessary abstractions.',
    },
    {
      icon: ShieldCheck,
      title: 'Operational Stability & Server Reliability',
      desc: 'End-to-end infrastructure thinking: hardened Nginx server blocks, zero-downtime database migrations, automated backup pipelines, and disaster recovery.',
    },
    {
      icon: MessageSquare,
      title: 'Direct Communication & Transparent Milestones',
      desc: 'Clear technical documentation, daily Git commits, proactive updates, and honest technical audits without buzzwords or manufactured claims.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#111111] text-white border-y border-[#262626]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#315CFF]">
            Engineering Philosophy
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-['Montserrat']">
            How I approach software craft.
          </h2>
          <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed font-['Lato']">
            Senior development is about solving problems pragmatically. Here are the principles that guide every client engagement and architectural decision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((p, idx) => {
            const Icon = p.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-xl bg-[#161616] border border-[#262626] hover:border-[#315CFF]/60 transition-colors space-y-4"
              >
                <div className="w-10 h-10 rounded-md bg-[#222222] text-[#315CFF] flex items-center justify-center border border-[#333333]">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-white font-['Montserrat'] tracking-tight">
                  {p.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed font-['Lato']">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
