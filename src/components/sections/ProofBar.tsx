import React from 'react';

export function ProofBar() {
  const specializations = [
    {
      num: '01',
      title: 'WordPress Engineering',
      desc: 'Custom theme architectures from Figma, clean PHP 8.2, ACF Pro data models, and proprietary plugin development without bloated page builders.',
    },
    {
      num: '02',
      title: 'Laravel Applications',
      desc: 'Robust relational database modeling, Eloquent query tuning, role-based security, background queue workers, and RESTful APIs.',
    },
    {
      num: '03',
      title: 'Performance & Core Web Vitals',
      desc: 'Rigorous speed audits, OPcache/Redis caching hierarchies, asset payload reduction, and sub-second Largest Contentful Paint.',
    },
    {
      num: '04',
      title: 'APIs & Automation',
      desc: 'Third-party REST API integrations, webhooks, asynchronous jobs, and automated business workflows that reduce manual overhead.',
    },
  ];

  return (
    <section className="bg-white border-b border-[#E4E4DF] py-12">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          {specializations.map((item, idx) => (
            <div key={idx} className="space-y-3 relative">
              <div className="flex items-center justify-between border-b border-[#E4E4DF] pb-2">
                <span className="text-xs font-mono font-bold text-[#315CFF]">
                  {item.num}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#888880]">
                  Pillar
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#141413] tracking-tight font-['Montserrat']">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#5F5F58] leading-relaxed font-['Lato']">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
