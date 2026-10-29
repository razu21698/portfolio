'use client';

import React, { useState } from 'react';
import { Project, ProjectCategory } from '@/types';
import { ProjectCard } from '@/components/projects/ProjectCard';

interface ProjectFilterProps {
  initialProjects: Project[];
}

export function ProjectFilter({ initialProjects }: ProjectFilterProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'WordPress Core & Themes', value: 'wordpress' },
    { label: 'Laravel Web Apps', value: 'laravel' },
    { label: 'React Web Apps', value: 'react' },
    { label: 'WooCommerce & eCommerce', value: 'ecommerce' },
    { label: 'Performance & SEO', value: 'performance-seo' },
  ];

  const filtered = initialProjects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <div className="space-y-10">
      {/* Category Filter Navigation */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white border border-[#E4E4DF] rounded-xl w-fit shadow-2xs">
        {categories.map((cat) => {
          const isSelected = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 rounded-lg text-xs font-mono transition-all transition-craft cursor-pointer ${
                isSelected
                  ? 'bg-[#141413] text-white font-bold shadow-xs'
                  : 'text-[#5F5F58] hover:text-[#141413] hover:bg-[#F7F7F4]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="py-20 text-center text-[#5F5F58] bg-white rounded-xl border border-[#E4E4DF] space-y-3">
          <p className="text-base font-bold text-[#141413] font-['Montserrat']">
            No projects in this category
          </p>
          <p className="text-xs font-mono text-[#888880]">
            Try selecting another filter or view all projects.
          </p>
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className="text-xs font-mono text-[#141413] hover:text-[#059669] transition-colors font-bold cursor-pointer"
          >
            Reset to All Projects
          </button>
        </div>
      )}
    </div>
  );
}
