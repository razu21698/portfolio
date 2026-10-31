'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, FileText } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from '@/components/ui/Icons';

export function Footer() {
  return (
    <footer className="w-full bg-[#111111] text-[#EAEAEA] border-t border-[#262626] mt-auto">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          {/* Brand & Value Statement */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded bg-white text-[#111111] flex items-center justify-center font-bold text-xs font-mono">
                R
              </div>
              <span className="font-extrabold tracking-tight text-xl text-white font-['Montserrat']">
                MD RAZIB AHMED RAZU
              </span>
            </div>
            <p className="text-sm text-[#A0A0A0] max-w-sm leading-relaxed font-['Lato']">
              Software Engineer specializing in custom WordPress theme &amp; plugin engineering, robust Laravel web applications, and sub-second performance optimization.
            </p>
            <div className="inline-flex items-center gap-2 text-xs font-mono text-[#059669] bg-[#1A2E26] px-3 py-1.5 rounded border border-[#059669]/30">
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              <span>Available for select client projects &amp; contracts</span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm font-['Lato']">
              {siteConfig.navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#D4D4D4] hover:text-[#D4FF00] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4FF00] hover:text-white transition-colors text-xs font-mono font-semibold flex items-center gap-1.5 pt-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download CV (PDF)</span>
                </a>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-[#888888] hover:text-white transition-colors text-xs"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Core Specialties */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373]">
              Specialties
            </h4>
            <ul className="space-y-2 text-xs text-[#A0A0A0] font-mono">
              <li>WordPress Custom Theme</li>
              <li>Custom Plugin Dev</li>
              <li>Laravel Web Apps</li>
              <li>WooCommerce Speed</li>
              <li>Core Web Vitals &amp; SEO</li>
              <li>API &amp; AI Automation</li>
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono uppercase tracking-wider text-[#737373]">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-[#A0A0A0] font-['Lato']">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-2 text-white hover:text-[#D4FF00] transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#737373] group-hover:text-[#D4FF00]" />
                <span className="break-all font-mono">{siteConfig.email}</span>
              </a>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#D4D4D4] hover:text-[#25D366] transition-colors"
                title="Chat on WhatsApp"
              >
                <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
                <span className="font-mono">{siteConfig.whatsapp}</span>
              </a>
              <div className="flex items-center gap-2 text-[#888888]">
                <MapPin className="w-4 h-4 text-[#737373]" />
                <span>{siteConfig.location} (Global remote)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#1C1C1C] hover:bg-[#282828] text-white border border-[#2E2E2E] transition-colors"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded bg-[#1C1C1C] hover:bg-[#282828] text-white border border-[#2E2E2E] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8E8EA0] font-mono">
          <p>© {new Date().getFullYear()} Md Razib Ahmed Razu. All rights reserved. Engineered for business.</p>
          <div className="flex items-center gap-3 text-[#555566]">
            <span>Dhaka (GMT+6) • Global Remote Delivery</span>
            <span>•</span>
            <Link href="/admin" className="hover:text-white transition-colors text-[11px]" title="CMS Admin Dashboard">
              Admin CMS
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
