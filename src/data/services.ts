import { ServiceItem } from '@/types';

export const services: ServiceItem[] = [
  {
    id: 'wordpress-development',
    number: '01',
    title: 'Custom WordPress & Theme Architecture',
    shortDesc: 'Bespoke, lightweight WordPress themes and custom plugins built cleanly from scratch without page builder bloat.',
    fullDesc:
      'I engineer tailor-made WordPress websites designed for speed, security, and effortless editorial control. Rather than stacking 80+ third-party plugins that degrade page performance, I build clean custom themes adhering strictly to WordPress coding standards, custom post types, and ACF Pro flexible content blocks.',
    deliverables: [
      'Custom WordPress theme development from Figma / Adobe XD',
      'Custom plugin engineering for unique business workflows',
      'Advanced Custom Fields (ACF Pro) content architecture',
      'Database query optimization and custom WP_Query hooks',
      'Headless WordPress setups & WP REST API custom endpoints',
      'Seamless content migration and site redesign transitions',
    ],
    techStack: ['PHP 8.2', 'WordPress Core', 'ACF Pro', 'JavaScript ES6+', 'Tailwind / SCSS', 'MySQL'],
    businessValue:
      'Eliminates plugin vulnerabilities, slashes recurring licensing costs, and delivers a fast, stable website that editors love and search engines prioritize.',
  },
  {
    id: 'laravel-engineering',
    number: '02',
    title: 'Laravel Web Application Engineering',
    shortDesc: 'Scalable, database-driven web applications, management portals, and custom APIs engineered for high reliability.',
    fullDesc:
      'For complex business workflows that outgrow off-the-shelf CMS platforms, I build robust full-stack web applications using Laravel. From multi-role access control and automated reporting engines to custom POS systems and Learning Management Systems (LMS), I craft software engineered for endurance.',
    deliverables: [
      'Custom SaaS platforms, admin portals, and internal business tools',
      'Relational database architecture, migrations, and Eloquent optimization',
      'RESTful API development with Sanctum / Passport token auth',
      'Asynchronous task queuing with Redis for heavy workloads',
      'Automated PDF invoice/certificate generation pipelines',
      'Third-party software, payment gateway, and webhook integrations',
    ],
    techStack: ['Laravel 10/11', 'PHP 8.2', 'MySQL', 'Redis', 'Tailwind CSS', 'REST APIs'],
    businessValue:
      'Replaces scattered spreadsheets and disconnected tools with a unified, proprietary software asset tailored to your exact business operations.',
  },
  {
    id: 'woocommerce-ecommerce',
    number: '03',
    title: 'High-Performance WooCommerce & eCommerce',
    shortDesc: 'Fast, frictionless digital stores optimized to eliminate checkout abandonment and handle high-traffic sales.',
    fullDesc:
      'Every 100ms of checkout latency costs online retailers direct sales. I optimize and customize WooCommerce stores to ensure lightning-fast catalog navigation, streamlined single-step checkouts, and resilient performance during flash sales and peak promotional campaigns.',
    deliverables: [
      'Custom WooCommerce theme integration and UI modernization',
      'Checkout funnel optimization and one-page checkout experiences',
      'Custom payment gateway and localized courier API integrations',
      'WooCommerce database indexing and query bottleneck remediation',
      'Multi-currency and localized shipping rule automation',
      'Ongoing technical maintenance for WooCommerce and Magento stores',
    ],
    techStack: ['WooCommerce', 'WordPress', 'Magento (Maintenance)', 'Stripe/PayPal APIs', 'Redis Object Cache', 'MySQL'],
    businessValue:
      'Drives higher conversion rates, minimizes abandoned carts, and ensures your store remains lightning fast even under heavy promotional traffic.',
  },
  {
    id: 'speed-technical-seo',
    number: '04',
    title: 'Core Web Vitals & Technical SEO',
    shortDesc: 'Comprehensive speed tuning and search engine architectural auditing to dominate Google rankings.',
    fullDesc:
      'Website speed is a direct ranking factor and conversion multiplier. I dive deep beneath the surface into server response times (TTFB), Largest Contentful Paint (LCP), Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS) to guarantee your platform sails through Google’s Core Web Vitals.',
    deliverables: [
      'Full Core Web Vitals audit and code-level tuning',
      'Advanced server-side caching (Redis, OPcache, Varnish)',
      'Critical CSS generation, asset minification, and JS deferral',
      'Database table defragmentation and autoloaded options reduction',
      'Structured JSON-LD schema implementation (Organization, Product, LocalBusiness)',
      'XML sitemap hierarchy, canonical validation, and crawl budget tuning',
    ],
    techStack: ['Google Lighthouse', 'Chrome DevTools', 'WP Rocket', 'Cloudflare Edge Rules', 'Schema.org'],
    businessValue:
      'Boosts organic search rankings, lowers Google Ads bounce rates, and delivers a snappy, instantaneous experience across all mobile devices.',
  },
  {
    id: 'hosting-infrastructure',
    number: '05',
    title: 'Hosting, Server Operations & Infrastructure',
    shortDesc: 'End-to-end server orchestration, domain/DNS management, automated backups, and security hardening.',
    fullDesc:
      'A great website is only as reliable as the infrastructure powering it. I manage hosting environments end-to-end—configuring Nginx/Apache web servers, configuring Cloudflare DNS, provisioning SSL certificates, setting up off-site automated backups, and remediating security incidents.',
    deliverables: [
      'Server configuration and environment provisioning (Linux, Nginx, PHP-FPM, MySQL)',
      'DNS routing, Cloudflare CDN integration, and SSL deployment',
      'Zero-downtime website and database migrations between hosts',
      'Automated daily off-site cloud backups and disaster recovery plans',
      'WordPress security hardening, malware cleanup, and firewall rules',
      'Ongoing server patch management and performance monitoring',
    ],
    techStack: ['Linux (Ubuntu/Debian)', 'Nginx', 'Apache', 'cPanel / WHM', 'Cloudflare DNS', 'Git CI/CD'],
    businessValue:
      'Guarantees 99.9%+ uptime, protects mission-critical business data from catastrophic loss, and removes all hosting headaches from your day-to-day work.',
  },
  {
    id: 'ai-automation-integrations',
    number: '06',
    title: 'AI Automation & System Integrations',
    shortDesc: 'Integrating modern AI models and automated webhook pipelines to eliminate repetitive operational bottlenecks.',
    fullDesc:
      'Harness the practical power of modern AI APIs to streamline your business workflows. I connect WordPress, Laravel, and third-party tools to LLMs (OpenAI, Gemini) and webhook automation pipelines—automating content drafting, customer inquiry triage, and cross-system data synchronization.',
    deliverables: [
      'Gemini and OpenAI API integration into WordPress and Laravel',
      'Automated content drafting, metadata tagging, and localization pipelines',
      'Webhook synchronization between CRM systems, web forms, and databases',
      'Custom automated email notifications and reporting dispatchers',
      'Data extraction, parsing, and structured transformation workflows',
    ],
    techStack: ['Python', 'Node.js', 'Google Gemini API', 'OpenAI API', 'REST Webhooks', 'Laravel Queues'],
    businessValue:
      'Reclaims dozens of manual hours every week, reduces human data entry error, and lets your team focus on high-leverage growth activities.',
  },
];

export const processStages = [
  {
    step: '01',
    title: 'Discover & Audit',
    summary:
      'I dissect your business requirements, current codebase, server configuration, and target audience to identify bottlenecks and strategic opportunities.',
    deliverables: ['Technical audit report', 'Scope definition', 'Architecture recommendation'],
  },
  {
    step: '02',
    title: 'Architect & Plan',
    summary:
      'Before touching code, I establish database schemas, API contracts, UX wireframes, and performance budgets to ensure alignment and rapid execution.',
    deliverables: ['Database ERD / schema', 'Component breakdown', 'Milestone timeline'],
  },
  {
    step: '03',
    title: 'Engineer & Optimize',
    summary:
      'Clean, typed, modular code built according to industry standards. Frequent progress previews, strict version control, and continuous speed optimization.',
    deliverables: ['Staging deployment', 'Modular codebase', 'Mobile & a11y testing'],
  },
  {
    step: '04',
    title: 'Deploy & Support',
    summary:
      'Zero-downtime production deployment, DNS verification, automated backup configuration, and comprehensive documentation to ensure long-term stability.',
    deliverables: ['Production launch', 'DNS & SSL verification', 'Support warranty period'],
  },
];

