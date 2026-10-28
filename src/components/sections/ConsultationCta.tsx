import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mail, Phone, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { Button } from '@/components/ui/Button';

export function ConsultationCta() {
  return (
    <section className="py-20 lg:py-28 bg-[#141413] text-white relative overflow-hidden">
      {/* Subtle Architectural Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#315CFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#202020] border border-[#2E2E2E] text-xs font-mono text-[#059669]">
            <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
            <span>Accepting Q4 / Q1 Projects &amp; Contracts</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight font-['Montserrat']">
            Have a project worth{' '}
            <span className="text-[#315CFF]">building properly?</span>
          </h2>

          <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed max-w-2xl mx-auto font-['Lato']">
            Whether you need a bespoke WordPress architecture, a high-traffic WooCommerce store tuned for speed, or a scalable Laravel backend engineered to automate operations, let&apos;s discuss a practical approach.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto font-['Montserrat'] text-xs uppercase tracking-wider font-bold">
              <span>Start Project Discussion</span>
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              href={`mailto:${siteConfig.email}`}
              variant="outline"
              size="lg"
              className="w-full sm:w-auto text-white border-[#333333] hover:bg-[#1E1E1E] hover:border-[#555555] font-['Montserrat'] text-xs uppercase tracking-wider font-bold"
            >
              <Mail className="w-4 h-4 text-[#315CFF]" />
              <span>Direct Email</span>
            </Button>
          </div>

          {/* Quick Contact Info Strip */}
          <div className="pt-10 border-t border-[#262626] flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs font-mono text-[#888888]">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#059669]" />
              <span>Direct Developer Communication</span>
            </div>
            <div className="flex items-center gap-2">
              <span>Email:</span>
              <a href={`mailto:${siteConfig.email}`} className="text-white hover:underline">
                {siteConfig.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span>Phone:</span>
              <a href={`tel:${siteConfig.phone.replace(/\s+/g, '')}`} className="text-white hover:underline">
                {siteConfig.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
