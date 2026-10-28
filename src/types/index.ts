export type ProjectCategory = 'all' | 'wordpress' | 'laravel' | 'ecommerce' | 'performance-seo';

export interface ProjectResult {
  metric: string;
  label: string;
  verified: boolean;
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  client: string;
  category: 'wordpress' | 'laravel' | 'ecommerce' | 'performance-seo';
  categoryLabel: string;
  role: string;
  timeline: string;
  featured: boolean;
  liveUrl?: string;
  repoUrl?: string;
  summary: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: ProjectResult[];
  coverImage: string;
  galleryImages: string[];
  keyHighlights: string[];
  architectureNotes?: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  techStack: string[];
  businessValue: string;
}

export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  location: string;
  highlights: string[];
  techUsed: string[];
}

export interface Education {
  degree: string;
  institution: string;
  year: string;
  details?: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    verifiedUse: string;
  }[];
}

