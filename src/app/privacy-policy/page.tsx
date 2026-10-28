import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Shield } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { Breadcrumbs } from '@/components/ui/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy and data handling statement for Ahmed Razu portfolio.',
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-8 pb-20">
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Mandatory Visible Breadcrumb */}
        <Breadcrumbs items={[{ label: 'Privacy Policy', href: '/privacy-policy' }]} />

        <div className="space-y-4">
          <span className="text-xs font-mono uppercase tracking-widest text-[#059669]">
            Transparency First
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight font-['Montserrat']">
            Privacy Policy &amp; Data Ethics
          </h1>
          <p className="text-xs font-mono text-[#888880]">
            Last updated: October 2026
          </p>
        </div>

        <div className="prose prose-neutral max-w-none space-y-6 text-sm text-[#5F5F58] leading-relaxed bg-white p-8 rounded-xl border border-[#E4E4DF] font-['Lato']">
          <h2 className="text-lg font-bold text-[#141413] font-['Montserrat']">1. Information Collection</h2>
          <p>
            This website does not utilize invasive third-party behavioral trackers, session recorders, or advertising pixels. When you submit a project inquiry through the contact form, the details you supply (name, email address, company URL, and message scope) are utilized solely to review your requirements and respond to your inquiry.
          </p>

          <h2 className="text-lg font-bold text-[#141413] font-['Montserrat']">2. Use of Information</h2>
          <p>
            Information provided through this website is never sold, leased, or distributed to third-party marketing services. It is solely used by Ahmed Razu for direct professional communication regarding web development projects and contracts.
          </p>

          <h2 className="text-lg font-bold text-[#141413] font-['Montserrat']">3. Cookies &amp; Local Storage</h2>
          <p>
            This website does not store non-essential marketing cookies. Local storage may only be used for client interface preferences such as form submission feedback.
          </p>

          <h2 className="text-lg font-bold text-[#141413] font-['Montserrat']">4. Direct Contact</h2>
          <p>
            If you have questions regarding this privacy policy or your data, you can reach out directly via email at{' '}
            <a href={`mailto:${siteConfig.email}`} className="text-[#141413] hover:text-[#059669] font-mono transition-colors font-medium">
              {siteConfig.email}
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
