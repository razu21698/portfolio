'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowUp, X, Send, Sparkles } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { WhatsAppIcon } from '@/components/ui/Icons';
import { cn } from '@/lib/utils';

export function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [message, setMessage] = useState('');
  const chatRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Monitor scroll distance for "Back to Top" visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close chat box on ESC or click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatRef.current &&
        !chatRef.current.contains(event.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node)
      ) {
        setIsChatOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsChatOpen(false);
      }
    };

    if (isChatOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isChatOpen]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleStartChat = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const textToSend = message.trim() || 'Hi Razib, I would like to discuss a project.';
    const url = `https://wa.me/8801302221426?text=${encodeURIComponent(textToSend)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsChatOpen(false);
  };

  const quickPrompts = [
    'Custom WordPress Theme',
    'Laravel Web Application',
    'Speed & Core Web Vitals',
    'Emergency Bug Fixing',
  ];

  return (
    <aside
      aria-label="Floating quick actions"
      className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-center gap-3 select-none"
    >
      {/* ========================================================= */}
      {/* WHATSAPP INTERACTIVE POPUP CHAT BOX                      */}
      {/* ========================================================= */}
      {isChatOpen && (
        <div
          ref={chatRef}
          role="dialog"
          aria-labelledby="whatsapp-dialog-title"
          className="absolute bottom-16 right-0 w-[320px] sm:w-[360px] bg-[#0c1317] border border-[#233138] rounded-2xl shadow-2xl overflow-hidden flex flex-col z-50 animate-in fade-in slide-in-from-bottom-3 duration-200"
        >
          {/* Header */}
          <div className="bg-[#005c4b] text-white p-4 flex items-center justify-between select-none">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-[#128C7E] border-2 border-white/20 flex items-center justify-center font-bold text-white font-mono text-sm">
                  R
                </div>
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-[#25D366] border border-[#005c4b]" />
              </div>

              <div>
                <h4 id="whatsapp-dialog-title" className="text-sm font-bold font-['Montserrat'] leading-tight">
                  Md Razib Ahmed Razu
                </h4>
                <div className="flex items-center gap-1.5 text-[11px] text-[#A7F3D0] font-mono mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                  <span>Online • Quick response</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsChatOpen(false)}
              className="p-1.5 rounded-lg text-white/80 hover:text-white hover:bg-black/20 transition-colors cursor-pointer"
              aria-label="Close chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-4 space-y-3 bg-[#0b141a] min-h-[170px] flex flex-col justify-end text-sm">
            <div className="text-center">
              <span className="text-[10px] font-mono font-medium uppercase tracking-wider text-[#8696a0] bg-[#182229] px-2 py-0.5 rounded-md">
                Today
              </span>
            </div>

            {/* Inbound Message Bubble from Razib */}
            <div className="self-start max-w-[88%] bg-[#202c33] text-[#e9edef] rounded-2xl rounded-tl-xs p-3 shadow-md space-y-1">
              <p className="text-xs sm:text-[13px] leading-relaxed font-['Lato']">
                Hi there! 👋 How can I help you today? Let me know about your WordPress, Laravel, or web application project.
              </p>
              <div className="text-[10px] font-mono text-[#8696a0] text-right flex items-center justify-end gap-1">
                <span>Just now</span>
                <span className="text-[#53bdeb]">✓✓</span>
              </div>
            </div>

            {/* Quick Suggestion Chips */}
            <div className="pt-2 flex flex-wrap gap-1.5">
              {quickPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => setMessage(`Hi Razib, I would like to discuss a ${prompt} project.`)}
                  className="text-[11px] font-mono px-2 py-1 rounded-full bg-[#182229] hover:bg-[#202c33] text-[#aebac1] hover:text-[#25D366] border border-[#2a3942] transition-colors cursor-pointer"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input & Send Form */}
          <form
            onSubmit={handleStartChat}
            className="p-3 bg-[#111b21] border-t border-[#222e35] flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Type a message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 px-3 py-2 rounded-xl bg-[#2a3942] text-white text-xs sm:text-sm placeholder-[#8696a0] focus:outline-none focus:ring-1 focus:ring-[#25D366] font-['Lato']"
              autoFocus
            />

            <button
              type="submit"
              aria-label="Send WhatsApp message"
              className="w-9 h-9 rounded-xl bg-[#00a884] hover:bg-[#06cf9c] text-white flex items-center justify-center transition-all cursor-pointer shadow-md shrink-0 active:scale-95"
            >
              <Send className="w-4 h-4 ml-0.5" />
            </button>
          </form>
        </div>
      )}

      {/* ========================================================= */}
      {/* 1. WHATSAPP FLOATING BUTTON (TOP)                        */}
      {/* ========================================================= */}
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsChatOpen((prev) => !prev)}
        aria-label={isChatOpen ? 'Close WhatsApp chat' : 'Open WhatsApp chat'}
        aria-expanded={isChatOpen}
        className={cn(
          'w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer relative group',
          isChatOpen
            ? 'bg-[#1C1C26] border border-[#2A2A38] text-white hover:bg-[#252536]'
            : 'bg-[#25D366] hover:bg-[#20BD5A] text-white shadow-[0_6px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_28px_rgba(37,211,102,0.65)] hover:scale-108 active:scale-95'
        )}
      >
        {isChatOpen ? (
          <X className="w-5 h-5 text-[#D4FF00]" />
        ) : (
          <>
            <WhatsAppIcon className="w-6 h-6 fill-white" />

            {/* Pulsing Status Dot */}
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FF00] opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#D4FF00] border-2 border-[#121218]" />
            </span>
          </>
        )}

        {/* Hover Tooltip (only when closed) */}
        {!isChatOpen && (
          <span className="absolute right-15 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap bg-[#121218] text-white text-xs font-mono font-medium px-3 py-1.5 rounded-md border border-[#272733] shadow-lg flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat on WhatsApp</span>
          </span>
        )}
      </button>

      {/* ========================================================= */}
      {/* 2. BACK TO TOP FLOATING BUTTON (UNDER WHATSAPP)          */}
      {/* ========================================================= */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top of page"
        className={cn(
          'w-11 h-11 rounded-full bg-[#121218] hover:bg-[#1C1C26] border border-[#2A2A38] hover:border-[#D4FF00] text-[#D0D0E0] hover:text-[#D4FF00] flex items-center justify-center shadow-xl transition-all duration-300 cursor-pointer group relative',
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        )}
      >
        <ArrowUp className="w-5 h-5 transition-transform duration-200 group-hover:-translate-y-0.5" />

        {/* Hover Tooltip */}
        <span className="absolute right-14 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap bg-[#121218] text-white text-xs font-mono font-medium px-2.5 py-1 rounded-md border border-[#272733] shadow-lg">
          Back to Top
        </span>
      </button>
    </aside>
  );
}
