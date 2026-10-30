'use client';

import React from 'react';
import Link from 'next/link';
import {
  Code,
  Database,
  ShoppingBag,
  Zap,
  Server,
  Bot,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { services, processStages } from '@/data/services';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { ConsultationCta } from '@/components/sections/ConsultationCta';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function ServicesPage() {
  const serviceIcons = [Code, Database, ShoppingBag, Zap, Server, Bot];

  const serviceFaqs = [
    {
      q: 'Do you work with custom designs provided in Figma or Adobe XD?',
      a: 'Yes, absolutely. I translate Figma and XD files into pixel-perfect, accessible, semantic code without relying on bloated generic page builders.',
    },
    {
      q: 'Can you migrate our existing site without losing organic search ranking?',
      a: 'Yes. Every migration follows a strict pre-flight URL mapping, 301 redirection rules, meta tag preservation, and immediate Google Search Console verification.',
    },
    {
      q: 'How do you handle hosting server setups and ongoing maintenance?',
      a: 'I configure and manage Linux environments (Ubuntu/Debian), Nginx/Apache, PHP-FPM tuning, MySQL index optimization, SSL provisioning, and automated offsite backups.',
    },
  ];

  return (
    <div>
      {/* Breadcrumb Banner */}
      <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 space-y-16">
        {/* Page Header */}
        <ScrollReveal direction="up">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#141413] font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              Technical Capabilities
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#141413] tracking-tight leading-tight font-['Montserrat']">
              Specialized engineering for ambitious businesses.
            </h2>
            <p className="text-base sm:text-lg text-[#5F5F58] leading-relaxed font-['Lato']">
              I help businesses transition away from fragile, slow, and bloated software. From bespoke WordPress architectures to scalable Laravel web platforms and server infrastructure, every solution is built for endurance.
            </p>
          </div>
        </ScrollReveal>

        {/* 6 In-Depth Services Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <ScrollReveal key={service.id} direction="up" delay={index * 80}>
                <div
                  id={service.id}
                  className="p-8 rounded-xl bg-white border border-[#E4E4DF] hover:border-[#141413] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div className="space-y-6">
                    {/* Top Bar with Number & Icon */}
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-[#141413] bg-[#F4F4F0] px-2.5 py-1 rounded border border-[#E4E4DF]">
                        Service {service.number}
                      </span>
                      <div className="w-9 h-9 rounded-md bg-[#F7F7F4] text-[#141413] flex items-center justify-center border border-[#E4E4DF] group-hover:bg-[#141413] group-hover:text-white transition-colors duration-200">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-[#141413] tracking-tight mb-2 font-['Montserrat'] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-[#5F5F58] leading-relaxed font-['Lato']">
                        {service.fullDesc}
                      </p>
                    </div>

                    {/* Deliverables */}
                    <div className="space-y-2 pt-2 border-t border-[#EFEFED]">
                      <h4 className="text-xs font-mono uppercase tracking-wider text-[#141413]">
                        Deliverables:
                      </h4>
                      <ul className="space-y-1.5 text-xs text-[#5F5F58] font-['Lato']">
                        {service.deliverables.map((item, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#059669] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Value & Stack */}
                  <div className="pt-6 border-t border-[#EFEFED] space-y-4 mt-6">
                    <div className="text-xs font-mono text-[#141413] bg-[#F7F7F4] p-3 rounded border border-[#E4E4DF]">
                      <span className="text-[#141413] font-semibold">Business Value: </span>
                      <span className="text-[#5F5F58] font-['Lato']">{service.businessValue}</span>
                    </div>

                    <div className="flex flex-wrap gap-1">
                      {service.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[10px] font-mono px-2 py-0.5 bg-[#EFEFED] text-[#5F5F58] rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Button
                      href="/contact"
                      variant="outline"
                      size="sm"
                      className="group/btn w-full text-xs font-['Montserrat'] font-semibold hover:border-[#141413]"
                    >
                      <span>Inquire About This Service</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* 4-Stage Delivery Workflow */}
        <div className="pt-12 border-t border-[#E4E4DF] space-y-12">
          <ScrollReveal direction="up">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-[#141413] font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                Delivery Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight font-['Montserrat']">
                A disciplined four-stage engineering process.
              </h2>
              <p className="text-base text-[#5F5F58] font-['Lato']">
                No guesswork. Every engagement follows a transparent roadmap from audit to deployment with clear checkpoints.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processStages.map((stage, idx) => (
              <ScrollReveal key={stage.step} direction="up" delay={idx * 100}>
                <div className="group p-6 rounded-xl bg-white border border-[#E4E4DF] hover:border-[#141413] hover:shadow-md hover:-translate-y-1 transition-all duration-300 space-y-4 relative h-full flex flex-col justify-between">
                  <div className="space-y-4">
                    <div className="text-2xl font-black font-mono text-[#141413] flex items-center justify-between">
                      <span>{stage.step}</span>
                      <span className="w-2 h-2 rounded-full bg-[#E4E4DF] group-hover:bg-[#141413] transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold text-[#141413] font-['Montserrat'] transition-colors">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-[#5F5F58] leading-relaxed font-['Lato']">
                      {stage.summary}
                    </p>
                  </div>
                  <div className="pt-3 border-t border-[#EFEFED] space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#888880] block">
                      Key Outputs:
                    </span>
                    {stage.deliverables.map((item, i) => (
                      <div key={i} className="text-xs text-[#141413] flex items-center gap-1.5 font-mono">
                        <span className="w-1 h-1 rounded-full bg-[#059669]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Services FAQ */}
        <div className="pt-12 border-t border-[#E4E4DF] space-y-8">
          <ScrollReveal direction="up">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono uppercase tracking-widest text-[#141413] font-bold">
                Client Questions
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] tracking-tight font-['Montserrat']">
                Frequently Asked Questions
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceFaqs.map((faq, i) => (
              <ScrollReveal key={i} direction="up" delay={i * 100}>
                <div className="p-6 rounded-xl bg-white border border-[#E4E4DF] hover:border-[#141413] hover:shadow-md transition-all duration-300 space-y-3 h-full">
                  <h3 className="text-sm font-bold text-[#141413] font-['Montserrat']">
                    {faq.q}
                  </h3>
                  <p className="text-xs text-[#5F5F58] leading-relaxed font-['Lato']">
                    {faq.a}
                  </p>
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
