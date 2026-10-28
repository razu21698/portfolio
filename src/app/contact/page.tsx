'use client';

import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';
import { ContactForm } from '@/components/contact/ContactForm';
import { GithubIcon, LinkedinIcon } from '@/components/ui/Icons';
import { ScrollReveal } from '@/components/ui/ScrollReveal';

export default function ContactPage() {
  const faqs = [
    {
      q: 'What is your typical proposal turnaround time?',
      a: 'I review all inbound inquiries within 24 business hours. If we need a quick scoping conversation, I will provide a link to coordinate a direct call.',
    },
    {
      q: 'Do you work white-label for US, UK, and European agencies?',
      a: 'Yes. I regularly collaborate with international design and digital agencies as their dedicated WordPress and Laravel engineering partner, following strict Git workflows and client confidentiality.',
    },
    {
      q: 'Can you rescue or optimize an existing slow website?',
      a: 'Yes. I conduct systematic code and database audits to eliminate plugin conflicts, optimize MySQL indexes, configure server caching, and achieve sub-second Core Web Vitals.',
    },
  ];

  return (
    <div className="pt-8 pb-20">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Mandatory Visible Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Contact', href: '/contact' }]} />

        {/* Page Header */}
        <ScrollReveal direction="up">
          <div className="max-w-3xl space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#315CFF] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#315CFF]" />
              Direct Inquiries
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-[#141413] tracking-tight leading-tight font-['Montserrat']">
              Have a project in mind?{' '}
              <span className="text-[#315CFF]">Let&apos;s engineer a solution.</span>
            </h1>
            <p className="text-base sm:text-lg text-[#5F5F58] leading-relaxed font-['Lato']">
              Tell me about what you are building, where your current website or application is falling short, or what operational bottlenecks you need to solve.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={100}>
              <ContactForm />
            </ScrollReveal>
          </div>

          {/* Right Column: Direct Channels & Operational FAQs */}
          <div className="lg:col-span-5 space-y-8">
            {/* Direct Contact Card */}
            <ScrollReveal direction="left" delay={150}>
              <div className="p-8 rounded-xl bg-white border border-[#E4E4DF] hover:border-[#315CFF]/40 hover:shadow-md transition-all duration-300 space-y-6">
                <h3 className="text-lg font-bold text-[#141413] font-['Montserrat']">
                  Direct Contact Channels
                </h3>

                <div className="space-y-4 text-sm font-['Lato']">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#888880] block mb-1">
                      Direct Email
                    </span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="font-mono text-[#315CFF] hover:underline break-all font-medium text-xs sm:text-sm"
                    >
                      {siteConfig.email}
                    </a>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#888880] block mb-1">
                      Direct Phone / WhatsApp
                    </span>
                    <a
                      href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`}
                      className="font-mono text-[#141413] hover:text-[#315CFF] text-xs sm:text-sm transition-colors"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>

                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-[#888880] block mb-1">
                      Timezone &amp; Availability
                    </span>
                    <p className="text-xs text-[#5F5F58] leading-relaxed">
                      Based in Bangladesh (GMT+6). Flexible daily overlap with North American morning hours, UK working day, and European business operations.
                    </p>
                  </div>
                </div>

                {/* Verified Profiles */}
                <div className="pt-4 border-t border-[#EFEFED] flex gap-3">
                  <a
                    href={siteConfig.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-md bg-[#F7F7F4] hover:bg-[#EFEFED] border border-[#E4E4DF] text-xs font-mono text-[#141413] flex items-center justify-center gap-2 transition-colors font-semibold"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={siteConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-3 rounded-md bg-[#F7F7F4] hover:bg-[#EFEFED] border border-[#E4E4DF] text-xs font-mono text-[#141413] flex items-center justify-center gap-2 transition-colors font-semibold"
                  >
                    <LinkedinIcon className="w-4 h-4 text-[#0A66C2]" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Inbound FAQ */}
            <ScrollReveal direction="left" delay={250}>
              <div className="p-8 rounded-xl bg-white border border-[#E4E4DF] hover:border-[#315CFF]/30 transition-all duration-300 space-y-6">
                <h3 className="text-base font-bold text-[#141413] flex items-center gap-2 font-['Montserrat']">
                  <ShieldCheck className="w-4 h-4 text-[#059669]" />
                  <span>Frequently Asked Questions</span>
                </h3>

                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className={i > 0 ? 'pt-4 border-t border-[#EFEFED]' : ''}>
                      <h4 className="text-xs font-bold text-[#141413] font-['Montserrat']">
                        {faq.q}
                      </h4>
                      <p className="text-xs text-[#5F5F58] mt-1 leading-relaxed font-['Lato']">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </div>
  );
}
