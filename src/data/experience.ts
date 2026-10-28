import { WorkExperience, Education, SkillCategory } from '@/types';

export const workExperience: WorkExperience[] = [
  {
    company: 'Branex IT LTD',
    role: 'WordPress & Front-End Developer',
    period: 'Aug 2026 – Present',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Manage WordPress hosting environments end-to-end, including server setup, domain and DNS configuration, deployments, backups, and ongoing maintenance.',
      'Develop custom WordPress themes and plugins to client requirements and extend existing sites with new features.',
      'Improve Core Web Vitals and page speed through caching, image and asset optimization, and query- and code-level tuning.',
      'Lead on-page and technical SEO for client sites, including metadata, schema markup, and site-structure improvements.',
    ],
    techUsed: ['WordPress', 'PHP 8', 'Custom Plugins', 'Core Web Vitals', 'Nginx/Apache', 'Technical SEO', 'MySQL'],
  },
  {
    company: 'FRF SOFT',
    role: 'WordPress & Front-End Developer',
    period: 'Oct 2025 – Jul 2026',
    location: 'Bangladesh',
    highlights: [
      'Provided WordPress hosting and infrastructure support, including server configuration, DNS management, deployments, and backups.',
      'Built custom themes and plugins to client specifications and extended site functionality.',
      'Optimized Core Web Vitals and page-load performance through caching, asset compression, and code-level tuning.',
      'Handled on-page and technical SEO, including metadata, schema markup, and site-structure fixes.',
    ],
    techUsed: ['WordPress', 'Custom Themes', 'WooCommerce', 'DNS & Hosting', 'Page Speed Tuning', 'JavaScript'],
  },
  {
    company: 'Trends Bird Limited',
    role: 'Software Engineer',
    period: 'Jan 2025 – Sep 2025',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Diagnosed and resolved bugs across WordPress, Laravel, and React/Next.js projects to keep production sites stable and reliable.',
      'Directed WordPress hosting operations end to end, including server setup, DNS configuration, deployments, backups, and maintenance.',
      'Developed custom WordPress themes and plugins for client projects.',
      'Built and enhanced features with React.js, Next.js, and Laravel, with a focus on performance and scalability.',
    ],
    techUsed: ['Laravel', 'React.js', 'Next.js', 'WordPress', 'MySQL', 'Git CI/CD', 'Server Management'],
  },
  {
    company: 'Trends Bird Limited',
    role: 'Associate Software Engineer',
    period: 'Jul 2023 – Dec 2024',
    location: 'Dhaka, Bangladesh',
    highlights: [
      'Built and customized WordPress websites with a focus on responsive design, functionality, and hosting setup.',
      'Contributed to Laravel projects, including backend logic, database design, and feature development.',
      'Debugged issues, improved site stability, and assisted with deployments and ongoing maintenance.',
      'Supported senior developers and followed best coding practices in a collaborative team environment.',
    ],
    techUsed: ['WordPress', 'Laravel', 'PHP', 'HTML5/CSS3', 'MySQL', 'JavaScript'],
  },
];

export const educationList: Education[] = [
  {
    degree: 'Bachelor of Science in Computer Science and Engineering (B.Sc. in CSE)',
    institution: 'American International University-Bangladesh (AIUB)',
    year: '2023',
    details: 'Rigorous 4-year degree in software engineering, algorithms, database systems, computer networking, and system architecture.',
  },
  {
    degree: 'Higher School Certificate (HSC)',
    institution: 'Savar Cantonment Public School & College, Savar, Dhaka',
    year: '2017',
    details: 'Science discipline with a strong foundation in mathematics, physics, and computer studies.',
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'WordPress & CMS Ecosystem',
    description: 'Deep architectural experience from core functions to custom themes, plugins, and eCommerce store builds.',
    skills: [
      { name: 'Custom Theme Development', verifiedUse: 'Bespoke themes built from Figma designs without builder bloat' },
      { name: 'Custom Plugin Engineering', verifiedUse: 'Proprietary business logic and secure API integrations' },
      { name: 'Elementor Pro & ACF Pro', verifiedUse: 'Flexible content architectures and custom widget creation' },
      { name: 'WooCommerce', verifiedUse: 'Checkout funnel streamlining and payment gateway hooks' },
      { name: 'Magento 2 (Maintenance)', verifiedUse: 'Enterprise store support, catalog maintenance, and bug fixes' },
      { name: 'Bug Fixing & Troubleshooting', verifiedUse: 'Production crash triage, white-screen recovery, and conflict debugging' },
    ],
  },
  {
    title: 'Languages & Frameworks',
    description: 'Modern, typed, and performant technologies used across backend and frontend engineering.',
    skills: [
      { name: 'PHP (8.0 - 8.3+)', verifiedUse: 'Object-oriented programming, modern type hinting, PSR standards' },
      { name: 'Laravel (10 / 11)', verifiedUse: 'Service-repository architectures, Eloquent, migrations, API Sanctum' },
      { name: 'JavaScript (ES6+)', verifiedUse: 'Async workflows, DOM manipulation, custom event dispatchers' },
      { name: 'React.js & Next.js', verifiedUse: 'SSR, App Router, TypeScript components, edge rendering' },
      { name: 'HTML5 & Semantic Markup', verifiedUse: 'Accessible (WCAG AA), SEO-first document structures' },
      { name: 'CSS3, Tailwind & SCSS', verifiedUse: 'Modern CSS tokens, responsive flex/grid layouts, zero bloat' },
    ],
  },
  {
    title: 'Hosting, Infrastructure & Server Operations',
    description: 'End-to-end server orchestration, deployments, and security management.',
    skills: [
      { name: 'MySQL Database Architecture', verifiedUse: 'Index optimization, query profiling, normalization, transactions' },
      { name: 'Server Management (Nginx / Apache)', verifiedUse: 'Virtual host configuration, PHP-FPM tuning, reverse proxies' },
      { name: 'DNS & Domain Operations', verifiedUse: 'Cloudflare, A/CNAME records, MX routing, SSL certificates' },
      { name: 'Automated Deployments & Git', verifiedUse: 'Git branching workflows, CI/CD pipeline deployment, staging test' },
      { name: 'Backups & Disaster Recovery', verifiedUse: 'Offsite automated backup schedules and rapid site restoration' },
      { name: 'REST API & Webhooks', verifiedUse: 'Custom endpoints, third-party authentication, payload parsing' },
    ],
  },
  {
    title: 'Performance Optimization & Technical SEO',
    description: 'Systematic audits and code-level tuning to achieve sub-second speeds and top Google rankings.',
    skills: [
      { name: 'Core Web Vitals Tuning', verifiedUse: 'LCP under 1.2s, zero CLS layout shifts, optimized INP responsiveness' },
      { name: 'Caching Architectures', verifiedUse: 'Redis Object Cache, OPcache, Varnish, page caching' },
      { name: 'Asset & Bundle Optimization', verifiedUse: 'Critical CSS inlining, font subsetting, WebP/AVIF compression' },
      { name: 'Technical & On-Page SEO', verifiedUse: 'Sitemap hierarchy, canonical structures, crawl budget tuning' },
      { name: 'Structured Data (Schema.org)', verifiedUse: 'Rich JSON-LD snippets for Organization, LocalBusiness, FAQ' },
    ],
  },
  {
    title: 'Design Tools & Prototyping',
    description: 'Translating high-fidelity agency designs into pixel-perfect, accessible code.',
    skills: [
      { name: 'Figma', verifiedUse: 'Inspecting design tokens, typography, auto-layouts, and component states' },
      { name: 'Adobe XD', verifiedUse: 'Asset export, vector extraction, and layout measurements' },
      { name: 'Photoshop', verifiedUse: 'Raster image retouching, compression, and visual optimization' },
    ],
  },
];

