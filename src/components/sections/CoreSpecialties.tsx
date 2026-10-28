'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Code, Cpu, Gauge, ShoppingCart, Workflow, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export function CoreSpecialties() {
  const editorialServices = [
    {
      num: '01',
      title: 'WordPress Development',
      icon: Code,
      tagline: 'High-performing business websites built with editorial precision.',
      problem: 'Generic off-the-shelf themes bloated with 80+ conflicting plugins that drag load times past 5 seconds.',
      approach: 'Clean PHP architectures, modular layouts, and ACF Pro flexible content models tailored to editors.',
      deliverables: ['Custom Themes', 'Responsive Implementation', 'Page Speed Tuning'],
    },
    {
      num: '02',
      title: 'Custom WordPress Themes & Plugins',
      icon: Wrench,
      tagline: 'Bespoke functionality engineered without third-party dependencies.',
      problem: 'Rigid commercial page builders that limit custom workflows and create severe security risks.',
      approach: 'Pixel-perfect translation of Figma/XD designs into lightweight, secure custom themes and bespoke plugins.',
      deliverables: ['Theme Engineering', 'Custom Plugin Logic', 'Security Hardening'],
    },
    {
      num: '03',
      title: 'Laravel Application Development',
      icon: Cpu,
      tagline: 'Database-driven web applications built for reliability and scale.',
      problem: 'Unruly spreadsheets and disconnected SaaS tools causing data loss and operational bottlenecks.',
      approach: 'Robust MVC architecture, normalized MySQL schema design, Redis queue workers, and RESTful APIs.',
      deliverables: ['Custom Portals & Dashboards', 'Relational Schemas', 'API Authentication'],
    },
    {
      num: '04',
      title: 'eCommerce Development',
      icon: ShoppingCart,
      tagline: 'Frictionless stores tuned for high checkout conversion.',
      problem: 'Cart latency and database locks during flash sales leading to high customer abandonment.',
      approach: 'WooCommerce optimization, Redis Object Cache, 1-step checkouts, and payment gateway integrations.',
      deliverables: ['Checkout Funnel Tuning', 'Payment Integration', 'Magento Maintenance'],
    },
    {
      num: '05',
      title: 'Website Performance & Technical SEO',
      icon: Gauge,
      tagline: 'Sub-second page speeds that satisfy Google Core Web Vitals.',
      problem: 'Poor Google search rankings, high bounce rates, and lost advertising revenue due to high LCP and CLS.',
      approach: 'OPcache & FastCGI caching, critical CSS inlining, payload reduction, and structured JSON-LD schema.',
      deliverables: ['Core Web Vitals Audit', 'Nginx/Server Caching', 'Schema.org Markup'],
    },
    {
      num: '06',
      title: 'API Integration & Business Automation',
      icon: Workflow,
      tagline: 'Intelligent automation systems connecting modern LLMs and data streams.',
      problem: 'Teams spending dozens of hours manually transferring data, tagging entries, and updating records.',
      approach: 'Connecting WordPress and Laravel to Gemini/OpenAI APIs, webhooks, and asynchronous background daemons.',
      deliverables: ['AI API Integrations', 'Webhook Pipelines', 'Automated Workflows'],
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-white border-b border-[#E4E4DF] overflow-hidden">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#E4E4DF] pb-8 gap-6">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-mono uppercase tracking-widest text-[#141413] font-bold flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                Services Matrix
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#141413] tracking-tight font-['Montserrat']">
                Engineered disciplines for growing businesses.
              </h2>
              <p className="text-base text-[#5F5F58] leading-relaxed font-['Lato']">
                Practical engineering solutions designed to eliminate technical debt, speed up operations, and drive conversion.
              </p>
            </div>

            <Button
              href="/services"
              variant="secondary"
              size="md"
              className="group self-start md:self-end font-['Montserrat'] text-xs font-semibold"
            >
              <span>Explore Full Service Breakdown</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Button>
          </div>
        </ScrollReveal>

        {/* 6 Services Editorial Stack with Architectural Dividing Lines */}
        <div className="divide-y divide-[#E4E4DF]">
          {editorialServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <ScrollReveal key={service.num} direction="up" delay={index * 80}>
                <div className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-[#FBFBFA] transition-all duration-300 px-6 -mx-6 rounded-xl border border-transparent hover:border-[#E4E4DF]">
                  {/* Number and Title with Icon */}
                  <div className="lg:col-span-4 space-y-2.5">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#F7F7F4] border border-[#E4E4DF] flex items-center justify-center text-[#141413] group-hover:bg-[#141413] group-hover:text-white transition-colors duration-200">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-xs font-mono font-bold text-[#141413]">
                        SERVICE {service.num}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-[#141413] font-['Montserrat'] tracking-tight group-hover:text-[#059669] transition-colors">
                      <Link href={`/services#${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                        {service.title}
                      </Link>
                    </h3>
                    <p className="text-xs font-mono text-[#888880]">
                      {service.tagline}
                    </p>
                  </div>

                  {/* Problem vs Approach */}
                  <div className="lg:col-span-5 space-y-3 font-['Lato'] text-sm text-[#5F5F58] leading-relaxed">
                    <div className="p-3 rounded-lg bg-[#F7F7F4]/80 border border-[#E4E4DF]/60">
                      <strong className="text-[#141413] text-xs font-mono uppercase tracking-wider block mb-1">
                        The Problem Solved:
                      </strong>
                      <span>{service.problem}</span>
                    </div>
                    <div className="p-3 rounded-lg bg-white border border-[#E4E4DF]/60">
                      <strong className="text-[#141413] text-xs font-mono uppercase tracking-wider block mb-1">
                        My Technical Approach:
                      </strong>
                      <span>{service.approach}</span>
                    </div>
                  </div>

                  {/* Deliverables List & CTA */}
                  <div className="lg:col-span-3 space-y-4 lg:text-right">
                    <div className="space-y-1.5 text-xs font-mono text-[#5F5F58]">
                      {service.deliverables.map((deliv, i) => (
                        <div key={i} className="flex items-center gap-1.5 lg:justify-end">
                          <Check className="w-3.5 h-3.5 text-[#059669] shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <Link
                        href={`/services#${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}
                        className="inline-flex items-center gap-1 text-xs font-bold font-['Montserrat'] text-[#141413] hover:text-[#059669] transition-colors uppercase tracking-wider"
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                    </div>
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
