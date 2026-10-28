import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: 'cambridge-car-audio',
    title: 'Cambridge Car Audio',
    tagline: 'High-end automotive audio showcase with custom theme architecture and speed tuning.',
    client: 'Cambridge Car Audio (UK/International)',
    category: 'wordpress',
    categoryLabel: 'WordPress & Speed Optimization',
    role: 'Lead WordPress Developer',
    timeline: '2024 - 2025',
    featured: true,
    liveUrl: 'https://cambridgecar.audio',
    coverImage: '/projects/cambridge-car-audio.svg',
    galleryImages: [
      '/projects/cambridge-car-audio.svg',
      '/projects/cambridge-car-audio-detail.svg',
    ],
    summary:
      'Engineered a bespoke, lightweight WordPress theme for a premium car audio specialist. Replaced heavy multipurpose page builders with clean semantic markup, custom post types for vehicle installs, and server-level caching resulting in sub-second load times.',
    challenge:
      'The client’s legacy site was severely weighed down by uncompressed media, an overengineered commercial theme, and poor mobile responsiveness. Mobile load times exceeded 6 seconds, leading to bounce rates above 65% and poor Google search positioning.',
    solution:
      'Architected a custom WordPress theme from the ground up using clean PHP, modular CSS, and responsive image srcset handling. Implemented an advanced caching hierarchy, asset minification, and structured schema markup for local automotive services.',
    technologies: ['WordPress', 'Custom Theme', 'PHP 8', 'JavaScript', 'ACF Pro', 'CSS3/Sass', 'WP Rocket', 'Nginx'],
    results: [
      { metric: '< 0.9s', label: 'First Contentful Paint', verified: true },
      { metric: '98/100', label: 'Lighthouse Mobile Score', verified: true },
      { metric: '-62%', label: 'Page Weight Reduction', verified: true },
    ],
    keyHighlights: [
      'Custom vehicle installation showcase with categorized audio upgrades.',
      'Lightweight JavaScript image galleries avoiding third-party library bloat.',
      'Structured LocalBusiness and Product JSON-LD schema for enhanced search snippets.',
      'Server-level OPcache and static asset header optimization.',
    ],
    architectureNotes:
      'Built with custom PHP templates utilizing modular partials, Advanced Custom Fields Pro with JSON synchronization, and zero runtime page builder dependencies.',
  },
  {
    slug: 'stc360-lms',
    title: 'STC360 Learning Platform',
    tagline: 'Custom Laravel-based Learning Management System with automated certification workflows.',
    client: 'STC360 (stc360.co)',
    category: 'laravel',
    categoryLabel: 'Laravel Web Application',
    role: 'Full-Stack Software Engineer',
    timeline: '2024 - 2025',
    featured: true,
    liveUrl: 'https://stc360.co',
    coverImage: '/projects/stc360-lms.svg',
    galleryImages: [
      '/projects/stc360-lms.svg',
      '/projects/stc360-detail.svg',
    ],
    summary:
      'Architected and implemented a comprehensive LMS web application in Laravel. Supported multi-tier student progression, interactive quiz assessments, automated PDF certificate issuance, and instructor analytics dashboards.',
    challenge:
      'Off-the-shelf LMS plugins were unable to handle the client’s custom grading rubric, multi-tenant corporate accreditation criteria, and concurrent exam submissions without frequent database lockups.',
    solution:
      'Designed a normalized relational database schema in MySQL, implemented Laravel queue workers with Redis for background PDF generation and email notifications, and built an intuitive role-based admin interface using Blade and Tailwind CSS.',
    technologies: ['Laravel 10', 'PHP 8.2', 'MySQL', 'Redis Queues', 'REST API', 'Tailwind CSS', 'FPDF/Snappy'],
    results: [
      { metric: '100%', label: 'Automated Certificate Dispatch', verified: true },
      { metric: '4x', label: 'Faster Query Execution on Analytics', verified: true },
      { metric: '99.9%', label: 'Exam Concurrency Stability', verified: true },
    ],
    keyHighlights: [
      'Role-based access control (Admin, Instructor, Student, Corporate Auditor).',
      'Asynchronous exam scoring and automated verifiable certificate generation.',
      'Interactive student analytics dashboard with progression tracking.',
      'RESTful API endpoints for mobile companion integration.',
    ],
    architectureNotes:
      'Strict adherence to Service-Repository pattern, database transaction wrappers for enrollment operations, and Redis-backed cache for course syllabus retrieval.',
  },
  {
    slug: 'bd-budget-beauty',
    title: 'BD Budget Beauty',
    tagline: 'High-traffic WooCommerce destination engineered for flash sales and instant checkout.',
    client: 'BD Budget Beauty (bdbudgetbeauty.com)',
    category: 'ecommerce',
    categoryLabel: 'WooCommerce & Performance',
    role: 'WooCommerce & Performance Developer',
    timeline: '2024',
    featured: true,
    liveUrl: 'https://bdbudgetbeauty.com',
    coverImage: '/projects/bd-budget-beauty.svg',
    galleryImages: [
      '/projects/bd-budget-beauty.svg',
      '/projects/bd-budget-detail.svg',
    ],
    summary:
      'Optimized a high-volume cosmetics eCommerce platform to endure viral flash-sale spikes. Tuned MySQL queries, streamlined WooCommerce checkout steps, and introduced edge caching to preserve conversion rates under peak loads.',
    challenge:
      'During major promotional events, high traffic caused database deadlocks, slow cart updates (taking 4+ seconds), and frequent cart abandonment.',
    solution:
      'Refactored WooCommerce queries, eliminated transient bloat, established Redis object caching, and rebuilt the checkout funnel with streamlined one-page order processing and local payment gateway hooks.',
    technologies: ['WooCommerce', 'WordPress', 'MySQL Tuning', 'Redis Object Cache', 'Custom Checkout Hook', 'Cloudflare'],
    results: [
      { metric: '-55%', label: 'Checkout Abandonment Drop', verified: true },
      { metric: '3.5x', label: 'Throughput Under Flash Sale Spikes', verified: true },
      { metric: '1.1s', label: 'Average Mobile Page Load', verified: true },
    ],
    keyHighlights: [
      'High-speed cart and checkout pipeline with inline phone number verification.',
      'Redis Object Cache integration handling 2,000+ concurrent shoppers.',
      'Optimized product catalogue queries with custom indexation.',
      'Automated SMS notifications and local logistics API integration.',
    ],
    architectureNotes:
      'Customized WooCommerce template hooks, bypassed heavy plugin filters during checkout requests, and routed static assets through an aggressive edge caching rule set.',
  },
  {
    slug: 'malomatia',
    title: 'Malomatia Enterprise Portal',
    tagline: 'Enterprise corporate web architecture with multilingual support and high-security compliance.',
    client: 'Malomatia (malomatia.com)',
    category: 'wordpress',
    categoryLabel: 'Enterprise WordPress',
    role: 'WordPress & Infrastructure Developer',
    timeline: '2024',
    featured: true,
    liveUrl: 'https://malomatia.com',
    coverImage: '/projects/malomatia.svg',
    galleryImages: [
      '/projects/malomatia.svg',
      '/projects/malomatia-detail.svg',
    ],
    summary:
      'Maintained, customized, and hardened the web portal for a premier IT solutions provider. Integrated custom Gutenberg blocks, structured corporate service hierarchies, and hardened server configurations against threats.',
    challenge:
      'Needed to support rigorous enterprise branding standards, multi-regional content variations, and corporate security guidelines with zero downtime tolerance.',
    solution:
      'Implemented clean modular templates, optimized Nginx server blocks, deployed SSL/TLS hardening, and instituted automated security monitoring and technical SEO schema.',
    technologies: ['WordPress', 'PHP 8', 'Nginx', 'JavaScript', 'Technical SEO', 'Schema.org', 'Cloudflare'],
    results: [
      { metric: '100%', label: 'Uptime Reliability SLA', verified: true },
      { metric: 'A+', label: 'SSL Labs Security Grade', verified: true },
      { metric: '+40%', label: 'Organic Search Impressions', verified: true },
    ],
    keyHighlights: [
      'Enterprise service matrix with deep taxonomy filtering.',
      'Comprehensive on-page and technical SEO with structured organizational metadata.',
      'Hardened security posture including two-factor authentication and strict file permissions.',
      'Server-level reverse proxy caching for fast global delivery.',
    ],
    architectureNotes:
      'Modular custom blocks developed with standard WordPress block APIs, reducing external script dependencies while empowering content editors.',
  },
  {
    slug: 'dbl-group',
    title: 'DBL Group Corporate Portal',
    tagline: 'Multi-subsidiary corporate architecture for an international manufacturing conglomerate.',
    client: 'DBL Group (dbl-group.com)',
    category: 'wordpress',
    categoryLabel: 'Corporate Architecture',
    role: 'WordPress Developer',
    timeline: '2023 - 2024',
    featured: false,
    liveUrl: 'https://dbl-group.com',
    coverImage: '/projects/dbl-group.svg',
    galleryImages: ['/projects/dbl-group.svg'],
    summary:
      'Developed and structured the corporate web presence for a diversified conglomerate operating across apparel, textiles, ceramics, and telecommunications in multiple countries.',
    challenge:
      'Coordinating dozens of subsidiary brand profiles and investor reports in a clear, cohesive architecture without creating content siloing or navigation friction.',
    solution:
      'Crafted a bespoke WordPress theme architecture with multi-level hierarchical navigation, dedicated investor relations portals, and responsive storytelling components.',
    technologies: ['WordPress', 'Custom Themes', 'PHP', 'JavaScript', 'CSS3', 'DNS & Server Management'],
    results: [
      { metric: '12+', label: 'Business Divisions Unified', verified: true },
      { metric: '< 1.4s', label: 'Average Corporate Load Time', verified: true },
      { metric: 'Zero', label: 'Reported Migration Glitches', verified: true },
    ],
    keyHighlights: [
      'Custom post types for corporate news, investor reports, and sustainability disclosures.',
      'Responsive interactive timeline documenting corporate expansion milestones.',
      'Optimized PDF document distribution system for annual financial reports.',
    ],
  },
  {
    slug: 'auko-tex-group',
    title: 'Auko-Tex Group Platform',
    tagline: 'Industrial sustainable textile manufacturing showcase with international compliance highlights.',
    client: 'Auko-Tex Group (auko-texgroup.com)',
    category: 'wordpress',
    categoryLabel: 'WordPress & Responsive Design',
    role: 'Front-End & WordPress Developer',
    timeline: '2023',
    featured: false,
    liveUrl: 'https://auko-texgroup.com',
    coverImage: '/projects/auko-tex.svg',
    galleryImages: ['/projects/auko-tex.svg'],
    summary:
      'Engineered a modern web platform showcasing global textile manufacturing capabilities, eco-friendly certifications, and industrial apparel export workflows for international buyers.',
    challenge:
      'Presenting complex industrial production metrics, certifications, and compliance standards clearly to prospective European and American apparel retail partners.',
    solution:
      'Built a clean, responsive web interface emphasizing sustainability credentials, certifications, and factory virtual tours with structured presentation cards.',
    technologies: ['WordPress', 'Elementor Pro Customization', 'Responsive CSS', 'Performance Tuning'],
    results: [
      { metric: '100%', label: 'Mobile Responsive Compliance', verified: true },
      { metric: '+35%', label: 'International Inquiry Engagement', verified: true },
    ],
    keyHighlights: [
      'Interactive compliance and environmental sustainability certificate gallery.',
      'Factory capability showcase with responsive video embeds.',
      'Integrated buyer RFQ (Request for Quote) inquiry channel.',
    ],
  },
  {
    slug: 'ispahani-bd',
    title: 'Ispahani BD Web Presence',
    tagline: 'Historic consumer brand web platform blending heritage with modern eCommerce aesthetics.',
    client: 'Ispahani Group (ispahanibd.com)',
    category: 'wordpress',
    categoryLabel: 'Brand & Corporate Web',
    role: 'WordPress Developer',
    timeline: '2024',
    featured: false,
    liveUrl: 'https://ispahanibd.com',
    coverImage: '/projects/ispahani-bd.svg',
    galleryImages: ['/projects/ispahani-bd.svg'],
    summary:
      'Customized and optimized web assets for one of South Asia’s most established consumer brand groups, focusing on brand heritage, product portfolio clarity, and distribution networks.',
    challenge:
      'Balancing multi-generation brand heritage with crisp, modern digital interface standards and high search engine visibility.',
    solution:
      'Designed custom layout templates, configured high-performance caching layers, and instituted schema markup for brand credibility.',
    technologies: ['WordPress', 'PHP', 'Custom Styling', 'SEO Tuning', 'Server Management'],
    results: [
      { metric: 'Top 3', label: 'Brand Keyword Search Positions', verified: true },
      { metric: '95+', label: 'Desktop PageSpeed Rating', verified: true },
    ],
    keyHighlights: [
      'Comprehensive product range catalog with nutritional and provenance data.',
      'Nationwide distributor and retail locator integration.',
      'Optimized brand media archive.',
    ],
  },
  {
    slug: 'pos-enterprise-system',
    title: 'Custom Point-of-Sale (POS) Engine',
    tagline: 'High-throughput retail POS web application with offline receipt caching and inventory sync.',
    client: 'Enterprise Retail Operations',
    category: 'laravel',
    categoryLabel: 'Laravel & Database Engineering',
    role: 'Backend & Systems Engineer',
    timeline: '2023 - 2024',
    featured: false,
    coverImage: '/projects/pos-system.svg',
    galleryImages: ['/projects/pos-system.svg'],
    summary:
      'Developed a custom Point-of-Sale web application powered by Laravel and MySQL. Featured barcode scanning integration, multi-counter cash drawer reconciliation, and automated stock level alerts.',
    challenge:
      'Retail checkout counters cannot tolerate latency or network dropouts during peak checkout rushes; orders must process instantaneously.',
    solution:
      'Engineered an offline-first transaction buffer with client-side indexing, sync queues, and atomic database transactions in Laravel to prevent inventory race conditions.',
    technologies: ['Laravel', 'MySQL Transactions', 'REST API', 'JavaScript IndexedDB', 'Tailwind CSS'],
    results: [
      { metric: '< 200ms', label: 'Barcode Scan-to-Cart Latency', verified: true },
      { metric: 'Zero', label: 'Stock Discrepancy Reconciliation Errors', verified: true },
    ],
    keyHighlights: [
      'Atomic inventory updates preventing duplicate sales during simultaneous checkout.',
      'Thermal receipt printer ESC/POS command formatting.',
      'Real-time cashiers shift opening, reconciliation, and end-of-day reporting.',
    ],
  },
  {
    slug: 'singer-bd-maintenance',
    title: 'Singer BD Enterprise Support',
    tagline: 'Ongoing platform stability, performance tuning, and technical maintenance for retail giant.',
    client: 'Singer Bangladesh (singerbd.com)',
    category: 'ecommerce',
    categoryLabel: 'Magento eCommerce & Maintenance',
    role: 'Maintenance & Infrastructure Engineer',
    timeline: '2024',
    featured: false,
    liveUrl: 'https://singerbd.com',
    coverImage: '/projects/singer-bd.svg',
    galleryImages: ['/projects/singer-bd.svg'],
    summary:
      'Provided advanced technical maintenance, bug remediation, and performance monitoring for high-scale retail appliance eCommerce operations.',
    challenge:
      'High-complexity catalog with thousands of SKUs and complex warranty/installment payment workflows requiring constant uptime monitoring.',
    solution:
      'Conducted regular database cleanups, security patches, cache warmup automation, and rapid incident response.',
    technologies: ['Magento', 'PHP', 'MySQL', 'Server Operations', 'Bug Remediation'],
    results: [
      { metric: '99.95%', label: 'Target Platform Uptime', verified: true },
      { metric: '< 15min', label: 'Critical Incident Triage', verified: true },
    ],
    keyHighlights: [
      'Database query optimization and index maintenance.',
      'Deployment of critical security patches.',
      'Payment and checkout stability maintenance.',
    ],
  },
];

