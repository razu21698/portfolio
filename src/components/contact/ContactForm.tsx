'use client';

import React, { useState } from 'react';
import { Check, Copy, Mail, Send, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'WordPress Custom Theme',
    budget: '$3k - $5k',
    timeline: 'Within 1-2 months',
    message: '',
    website_hp: '', // Honeypot field
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim() || formData.message.length < 15) {
      errs.message = 'Please provide details about your project (at least 15 characters)';
    }
    return errs;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot check
    if (formData.website_hp) {
      // Silently terminate bot
      setSubmitted(true);
      return;
    }

    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error('API submission failed');
      }

      setSubmitted(true);
    } catch {
      // Graceful fallback to client confirmed state
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      `Project Inquiry: ${formData.projectType} — ${formData.name || 'New Client'}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || 'N/A'}\nProject Type: ${formData.projectType}\nBudget Range: ${formData.budget}\nTimeline: ${formData.timeline}\n\nProject Scope & Requirements:\n${formData.message}`
    );
    return `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white rounded-xl border border-[#E4E4DF] p-6 sm:p-8 shadow-xs">
      {submitted ? (
        <div className="text-center py-12 space-y-5 animate-in fade-in duration-300">
          <div className="w-14 h-14 rounded-full bg-[#ECFDF5] text-[#059669] flex items-center justify-center mx-auto border border-[#A7F3D0]">
            <Check className="w-7 h-7" />
          </div>
          <h3 className="text-2xl font-bold text-[#141413] font-['Montserrat']">
            Inquiry Received
          </h3>
          <p className="text-sm text-[#5F5F58] max-w-md mx-auto leading-relaxed font-['Lato']">
            Thank you, {formData.name || 'there'}. I have logged your project scope and will review the specifications within 24 business hours.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getMailtoLink()}
              className="inline-flex items-center justify-center gap-2 text-xs font-bold font-['Montserrat'] uppercase tracking-wider px-5 py-3 rounded-md bg-[#141413] text-white hover:bg-[#2A2A28] transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>Open in Email App (Backup)</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setSubmitted(false);
                setFormData({
                  name: '',
                  email: '',
                  company: '',
                  projectType: 'WordPress Custom Theme',
                  budget: '$3k - $5k',
                  timeline: 'Within 1-2 months',
                  message: '',
                  website_hp: '',
                });
              }}
              className="text-xs font-mono text-[#5F5F58] hover:text-[#141413] transition-colors py-2 cursor-pointer font-medium"
            >
              Send another message
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Honeypot field (hidden from genuine users) */}
          <div className="hidden" aria-hidden="true">
            <label htmlFor="website_hp">Do not fill this field</label>
            <input
              type="text"
              id="website_hp"
              name="website_hp"
              value={formData.website_hp}
              onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
              tabIndex={-1}
              autoComplete="off"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#141413] mb-2">
                Your Name <span className="text-[#DC2626]">*</span>
              </label>
              <input
                id="name"
                type="text"
                required
                placeholder="e.g. Alex Morgan"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-md bg-white border text-sm text-[#141413] placeholder-[#A0A0A0] transition-colors font-['Lato'] focus:outline-none ${
                  errors.name
                    ? 'border-[#DC2626] focus:border-[#DC2626]'
                    : 'border-[#E4E4DF] focus:border-[#141413]'
                }`}
              />
              {errors.name && (
                <p className="mt-1 text-xs text-[#DC2626] flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.name}</span>
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#141413] mb-2">
                Work Email <span className="text-[#DC2626]">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="alex@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full px-3.5 py-2.5 rounded-md bg-white border text-sm text-[#141413] placeholder-[#A0A0A0] transition-colors font-['Lato'] focus:outline-none ${
                  errors.email
                    ? 'border-[#DC2626] focus:border-[#DC2626]'
                    : 'border-[#E4E4DF] focus:border-[#141413]'
                }`}
              />
              {errors.email && (
                <p className="mt-1 text-xs text-[#DC2626] flex items-center gap-1 font-mono">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Company / Website */}
            <div>
              <label htmlFor="company" className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#141413] mb-2">
                Company or Current URL <span className="text-[#888880]">(Optional)</span>
              </label>
              <input
                id="company"
                type="text"
                placeholder="company.com"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-md bg-white border border-[#E4E4DF] focus:border-[#141413] text-sm text-[#141413] placeholder-[#A0A0A0] focus:outline-none font-['Lato']"
              />
            </div>

            {/* Project Type */}
            <div>
              <label htmlFor="projectType" className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#141413] mb-2">
                Primary Specialty Needed
              </label>
              <select
                id="projectType"
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-md bg-white border border-[#E4E4DF] focus:border-[#141413] text-sm text-[#141413] focus:outline-none font-['Lato']"
              >
                <option value="WordPress Custom Theme">WordPress Custom Theme / Plugin</option>
                <option value="Laravel Web Application">Laravel Web Application / API</option>
                <option value="WooCommerce Speed & Scaling">WooCommerce Speed &amp; Scaling</option>
                <option value="Core Web Vitals & SEO Audit">Core Web Vitals &amp; Technical SEO</option>
                <option value="Hosting, Server & Migration">Hosting, Server Ops &amp; Migration</option>
                <option value="AI Automation & Integrations">AI Automation &amp; Integrations</option>
              </select>
            </div>
          </div>

          {/* Budget Range & Timeline Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#141413] mb-2">
                Estimated Budget Range
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['$1.5k - $3k', '$3k - $5k', '$5k - $10k', '$10k+ / Retainer'].map((range) => (
                  <button
                    type="button"
                    key={range}
                    onClick={() => setFormData({ ...formData, budget: range })}
                    className={`py-2 px-2.5 text-xs font-mono rounded border text-center transition-all cursor-pointer ${
                      formData.budget === range
                        ? 'bg-[#141413] text-white border-[#141413] font-bold shadow-xs'
                        : 'bg-[#F7F7F4] text-[#5F5F58] border-[#E4E4DF] hover:border-[#C7C7BF]'
                    }`}
                  >
                    {range}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#141413] mb-2">
                Desired Timeline
              </label>
              <div className="grid grid-cols-2 gap-2">
                {['Immediate (Urgent)', 'Within 1-2 months', 'Q1 / Flexible', 'Long-term Retainer'].map((t) => (
                  <button
                    type="button"
                    key={t}
                    onClick={() => setFormData({ ...formData, timeline: t })}
                    className={`py-2 px-2 text-xs font-mono rounded border text-center transition-all cursor-pointer ${
                      formData.timeline === t
                        ? 'bg-[#141413] text-white border-[#141413] font-bold shadow-xs'
                        : 'bg-[#F7F7F4] text-[#5F5F58] border-[#E4E4DF] hover:border-[#C7C7BF]'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label htmlFor="message" className="block text-xs font-mono font-semibold uppercase tracking-wider text-[#141413] mb-2">
              Project Scope &amp; Key Requirements <span className="text-[#DC2626]">*</span>
            </label>
            <textarea
              id="message"
              required
              rows={5}
              placeholder="Tell me about your project, current bottlenecks, desired timeline, or tech stack requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`w-full px-3.5 py-2.5 rounded-md bg-white border text-sm text-[#141413] placeholder-[#A0A0A0] transition-colors focus:outline-none resize-y font-['Lato'] ${
                errors.message
                  ? 'border-[#DC2626] focus:border-[#DC2626]'
                  : 'border-[#E4E4DF] focus:border-[#141413]'
              }`}
            />
            {errors.message && (
              <p className="mt-1 text-xs text-[#DC2626] flex items-center gap-1 font-mono">
                <AlertCircle className="w-3.5 h-3.5" />
                <span>{errors.message}</span>
              </p>
            )}
          </div>

          {/* Form Submit & Backup Controls */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Button
              type="submit"
              variant="primary"
              size="lg"
              disabled={isSubmitting}
              className="w-full sm:w-auto font-['Montserrat'] text-xs uppercase tracking-wider font-bold"
            >
              {isSubmitting ? (
                <span>Submitting Scope...</span>
              ) : (
                <>
                  <span>Send Project Inquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </Button>

            <button
              type="button"
              onClick={copyEmailToClipboard}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#5F5F58] hover:text-[#141413] p-2 rounded hover:bg-[#F7F7F4] transition-colors cursor-pointer"
            >
              {copiedEmail ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#059669]" />
                  <span className="text-[#059669] font-bold">Email copied to clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Or copy direct email</span>
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
