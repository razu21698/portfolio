'use client';

import React, { useState, useEffect } from 'react';
import { Project, ProjectCategory } from '@/types';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getStoredProjects } from '@/lib/projectStorage';

interface ProjectFilterProps {
  initialProjects: Project[];
}

interface CategoryOption {
  label: string;
  value: ProjectCategory;
}

export function ProjectFilter({ initialProjects }: ProjectFilterProps) {
  const [allProjects, setAllProjects] = useState<Project[]>(initialProjects);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');

  useEffect(() => {
    setAllProjects(getStoredProjects());

    const handleUpdate = (e: Event) => {
      const customEvent = e as CustomEvent<Project[]>;
      if (customEvent.detail) {
        setAllProjects(customEvent.detail);
      } else {
        setAllProjects(getStoredProjects());
      }
    };

    window.addEventListener('projects_updated', handleUpdate);
    return () => window.removeEventListener('projects_updated', handleUpdate);
  }, []);

  // Base categories with clean, human-readable labels
  const rawCategories: CategoryOption[] = [
    { label: 'All Work', value: 'all' },
    { label: 'WordPress', value: 'wordpress' },
    { label: 'Laravel', value: 'laravel' },
    { label: 'WooCommerce', value: 'ecommerce' },
    { label: 'React & Next.js', value: 'react' },
    { label: 'Performance & SEO', value: 'performance-seo' },
  ];

  // Only display categories that actually have projects in them (plus 'all')
  const availableCategories = rawCategories.filter((cat) => {
    if (cat.value === 'all') return true;
    return allProjects.some((p) => p.category === cat.value);
  });

  const filtered = allProjects.filter((p) => {
    if (activeCategory === 'all') return true;
    return p.category === activeCategory;
  });

  return (
    <div className="space-y-10 sm:space-y-12">
      {/* Modern, Seamless Category Pill Navigation */}
      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3">
        {availableCategories.map((cat) => {
          const count =
            cat.value === 'all'
              ? allProjects.length
              : allProjects.filter((p) => p.category === cat.value).length;
          const isSelected = activeCategory === cat.value;

          return (
            <button
              key={cat.value}
              type="button"
              onClick={() => setActiveCategory(cat.value)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer flex items-center gap-2 border select-none ${
                isSelected
                  ? 'bg-[#141413] text-white border-[#141413] shadow-md font-bold'
                  : 'bg-white text-[#52525B] border-[#E4E4DF] hover:border-[#141413] hover:text-[#141413] shadow-2xs hover:-translate-y-0.5'
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[11px] font-mono px-2 py-0.5 rounded-full transition-colors ${
                  isSelected
                    ? 'bg-white/20 text-white font-bold'
                    : 'bg-[#F4F4F0] text-[#71717A]'
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid: 2 Cards Per Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="py-20 text-center text-[#5F5F58] bg-white rounded-2xl border border-[#E4E4DF] space-y-3 p-8">
          <p className="text-lg font-bold text-[#141413] font-['Montserrat']">
            No projects in this category
          </p>
          <p className="text-xs font-mono text-[#888880]">
            Try selecting another category or view all case studies.
          </p>
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className="text-xs font-mono text-[#141413] hover:text-[#059669] transition-colors font-bold cursor-pointer underline underline-offset-4"
          >
            Reset to All Work
          </button>
        </div>
      )}
    </div>
  );
}
