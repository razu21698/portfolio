'use client';

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import { Project, ProjectCategory } from '@/types';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { getStoredProjects } from '@/lib/projectStorage';

interface ProjectFilterProps {
  initialProjects: Project[];
}

export function ProjectFilter({ initialProjects }: ProjectFilterProps) {
  const [allProjects, setAllProjects] = useState<Project[]>(initialProjects);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

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

  const categories: { label: string; value: ProjectCategory }[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'WordPress Core & Themes', value: 'wordpress' },
    { label: 'Laravel Web Apps', value: 'laravel' },
    { label: 'React Web Apps', value: 'react' },
    { label: 'WooCommerce & Store', value: 'ecommerce' },
    { label: 'Performance & SEO', value: 'performance-seo' },
  ];

  const filtered = allProjects.filter((p) => {
    const matchesCategory =
      activeCategory === 'all' || p.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-10">
      {/* Category Filter Navigation & Search Bar */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-white border border-[#E4E4DF] rounded-xl w-fit shadow-2xs">
          {categories.map((cat) => {
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
                className={`px-3.5 sm:px-4 py-2 rounded-lg text-xs font-mono transition-all cursor-pointer flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#141413] text-white font-bold shadow-xs'
                    : 'text-[#5F5F58] hover:text-[#141413] hover:bg-[#F7F7F4]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                    isSelected
                      ? 'bg-white/20 text-white'
                      : 'bg-[#EAEAE6] text-[#737373]'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Live Search Input */}
        <div className="relative w-full lg:w-72">
          <Search className="w-4 h-4 text-[#8C8C84] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-[#E4E4DF] rounded-xl pl-9 pr-4 py-2.5 text-xs font-mono text-[#141413] placeholder-[#8C8C84] focus:outline-none focus:border-[#141413] transition-colors shadow-2xs"
          />
        </div>
      </div>

      {/* Projects Grid: Exactly 2 in a row on md & lg screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>

      {/* Empty State */}
      {filtered.length === 0 && (
        <div className="py-20 text-center text-[#5F5F58] bg-white rounded-2xl border border-[#E4E4DF] space-y-3 p-8">
          <p className="text-lg font-bold text-[#141413] font-['Montserrat']">
            No projects found
          </p>
          <p className="text-xs font-mono text-[#888880]">
            No case studies match your active filter or search query.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory('all');
              setSearchQuery('');
            }}
            className="text-xs font-mono text-[#141413] hover:text-[#059669] transition-colors font-bold cursor-pointer underline underline-offset-4"
          >
            Clear filters & view all projects
          </button>
        </div>
      )}
    </div>
  );
}
