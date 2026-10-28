import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Code,
  Database,
  ShoppingBag,
  Zap,
  Server,
  Bot,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';
import { services, processStages } from '@/data/services';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { ConsultationCta } from '@/components/sections/ConsultationCta';

export const metadata: Metadata = {
  title: 'Engineering Services & Working Process',
  description:
    'Custom WordPress theme development, Laravel web applications, WooCommerce speed tuning, server operations, and AI workflow integrations engineered by Ahmed Razu.',
};

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
    <div className="pt-8 pb-20">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Mandatory Visible Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Services', href: '/services' }]} />

        {/* Page Header */}
        <div className="max-w-3xl space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#315CFF]">
            Technical Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141413] tracking-tight leading-tight font-['Montserrat']">
            Specialized engineering for ambitious businesses.
          </h1>
          <p className="text-base sm:text-lg text-[#5F5F58] leading-relaxed font-['Lato']">
            I help businesses transition away from fragile, slow, and bloated software. From bespoke WordPress architectures to scalable Laravel web platforms and server infrastructure, every solution is built for endurance.
          </p>
        </div>

        {/* 6 In-Depth Services Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = serviceIcons[index % serviceIcons.length];
            return (
              <div
                key={service.id}
                id={service.id}
                className="p-8 rounded-xl bg-white border border-[#E4E4DF] hover:border-[#315CFF]/60 hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-6">
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#315CFF] bg-[#EEF2FF] px-2.5 py-1 rounded border border-[#C7D2FE]">
                      Service {service.number}
                    </span>
                    <div className="w-9 h-9 rounded-md bg-[#F7F7F4] text-[#141413] flex items-center justify-center border border-[#E4E4DF] group-hover:bg-[#315CFF] group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#141413] tracking-tight mb-2 font-['Montserrat']">
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
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#315CFF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Value & Stack */}
                <div className="pt-6 border-t border-[#EFEFED] space-y-4 mt-6">
                  <div className="text-xs font-mono text-[#141413] bg-[#F7F7F4] p-3 rounded border border-[#E4E4DF]">
                    <span className="text-[#315CFF] font-semibold">Business Value: </span>
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

                  <Button href="/contact" variant="outline" size="sm" className="w-full text-xs font-['Montserrat'] font-semibold">
                    <span>Inquire About This Service</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* 4-Stage Delivery Workflow */}
        <div className="pt-12 border-t border-[#E4E4DF] space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#315CFF]">
              Delivery Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight font-['Montserrat']">
              A disciplined four-stage engineering process.
            </h2>
            <p className="text-base text-[#5F5F58] font-['Lato']">
              No guesswork. Every engagement follows a transparent roadmap from audit to deployment with clear checkpoints.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {processStages.map((stage) => (
              <div
                key={stage.step}
                className="p-6 rounded-xl bg-white border border-[#E4E4DF] space-y-4 relative shadow-2xs"
              >
                <div className="text-2xl font-black font-mono text-[#315CFF]">
                  {stage.step}
                </div>
                <h3 className="text-lg font-bold text-[#141413] font-['Montserrat']">
                  {stage.title}
                </h3>
                <p className="text-xs text-[#5F5F58] leading-relaxed font-['Lato']">
                  {stage.summary}
                </p>
                <div className="pt-2 border-t border-[#EFEFED] space-y-1">
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
            ))}
          </div>
        </div>

        {/* Services FAQ */}
        <div className="pt-12 border-t border-[#E4E4DF] space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-[#315CFF]">
              Client Questions
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#141413] tracking-tight font-['Montserrat']">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {serviceFaqs.map((faq, i) => (
              <div key={i} className="p-6 rounded-xl bg-white border border-[#E4E4DF] space-y-3">
                <h3 className="text-sm font-bold text-[#141413] font-['Montserrat']">
                  {faq.q}
                </h3>
                <p className="text-xs text-[#5F5F58] leading-relaxed font-['Lato']">
                  {faq.a}
                </p>
              </div>
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
