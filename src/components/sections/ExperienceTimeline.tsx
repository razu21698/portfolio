import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, GraduationCap } from 'lucide-react';
import { workExperience, educationList } from '@/data/experience';
import { Button } from '@/components/ui/Button';

export function ExperienceTimeline() {
  return (
    <section className="py-20 lg:py-28 bg-[#F7F7F4] border-b border-[#E4E4DF]">
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Context & Education Card */}
          <div className="lg:col-span-4 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#315CFF]">
              Production Chronology
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#141413] tracking-tight font-['Montserrat']">
              3+ years in active production environments.
            </h2>

            <p className="text-base text-[#5F5F58] leading-relaxed font-['Lato']">
              Grounded in agency and software company operations. From managing end-to-end WordPress server setups and building custom plugins to engineering Laravel backend architectures.
            </p>

            {/* Formal Academic Education Card */}
            <div className="p-6 rounded-xl bg-white border border-[#E4E4DF] space-y-3 shadow-2xs">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#141413]">
                <GraduationCap className="w-4 h-4 text-[#315CFF]" />
                <span>Formal Education</span>
              </div>
              <h4 className="text-sm font-bold text-[#141413] font-['Montserrat']">
                {educationList[0].degree}
              </h4>
              <p className="text-xs text-[#315CFF] font-medium font-['Lato']">
                {educationList[0].institution}
              </p>
              <p className="text-[11px] font-mono text-[#888880]">
                Graduation: {educationList[0].year}
              </p>
            </div>

            <div className="pt-2">
              <Button href="/about" variant="outline" size="md" className="font-['Montserrat'] text-xs font-semibold">
                <span>Full Bio &amp; CV Details</span>
                <ArrowUpRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column: Clean Editorial Sequence */}
          <div className="lg:col-span-8 space-y-8">
            <div className="relative border-l-2 border-[#E4E4DF] pl-6 sm:pl-8 space-y-12 ml-2">
              {workExperience.map((item, index) => (
                <div key={index} className="relative space-y-3">
                  {/* Timeline Dot Marker */}
                  <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-white border-2 border-[#315CFF]" />

                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="text-xl font-bold text-[#141413] font-['Montserrat']">
                        {item.role}
                      </h3>
                      <div className="text-sm font-semibold text-[#315CFF] font-['Montserrat']">
                        {item.company}
                      </div>
                    </div>
                    <span className="text-xs font-mono text-[#5F5F58] bg-white px-2.5 py-1 rounded border border-[#E4E4DF] self-start sm:self-auto shadow-3xs">
                      {item.period}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2 text-xs sm:text-sm text-[#5F5F58] leading-relaxed font-['Lato'] pt-1">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2">
                        <span className="text-[#315CFF] font-bold mt-0.5">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Technology Tags */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {item.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 bg-white text-[#5F5F58] rounded border border-[#E4E4DF]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
