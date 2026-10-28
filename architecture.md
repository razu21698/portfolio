# System Architecture — Ahmed Razu Developer Portfolio

## 1. Technology Stack & Framework Selection

### 1.1 Core Stack
- **Framework:** Next.js 16 (App Router architecture, React 19, TypeScript 5+).
- **Styling:** Tailwind CSS with CSS variable bindings and editorial tokens (`#F7F7F4`, `#141413`, `#315CFF`, `#111111`).
- **Typography:**
  - **Headings & Display:** `Montserrat` (`var(--font-montserrat)`)
  - **Body & Descriptions:** `Lato` (`var(--font-lato)`)
  - **Technical Labels & Monospace:** `JetBrains Mono` (`var(--font-mono)`)
  - Loaded via `next/font/google` with `display: 'swap'` and zero cumulative layout shift.
- **Iconography:** `lucide-react` + bespoke inline SVGs for brand marks (GitHub, LinkedIn).
- **Runtime Environment:** Node.js v24.12.0, npm 11.6.2.

---

## 2. Directory & Application Structure

```
portfolio/
├── public/                     # Static assets
│   ├── images/                 # Raster graphics
│   ├── projects/               # Editorial vector blueprints and diagrams
│   ├── documents/              # Ahmed_Razu_CV.pdf
│   ├── robots.txt              # Crawler directives
│   ├── icon.svg                # Favicon mark
│   └── sitemap.xml             # Generated XML sitemap
├── src/
│   ├── app/                    # Next.js App Router routes
│   │   ├── layout.tsx          # Root layout (Fonts, Header, Footer, Person Schema)
│   │   ├── page.tsx            # Home page route
│   │   ├── work/
│   │   │   ├── page.tsx        # Project portfolio index with Breadcrumbs & Filter
│   │   │   └── [slug]/
│   │   │       └── page.tsx    # Dynamic project case study route with Breadcrumbs
│   │   ├── services/
│   │   │   └── page.tsx        # Services & workflow route with Breadcrumbs
│   │   ├── about/
│   │   │   └── page.tsx        # Biography, experience & education with Breadcrumbs
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact & inquiry route with Breadcrumbs
│   │   ├── privacy-policy/
│   │   │   └── page.tsx        # Privacy policy route with Breadcrumbs
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts    # Secure contact submission handler
│   │   ├── not-found.tsx       # Bespoke 404 error page
│   │   └── sitemap.ts          # Programmatic dynamic sitemap generator
│   ├── components/
│   │   ├── layout/             # Header, Navigation, Footer
│   │   ├── sections/           # Modular homepage sections
│   │   │   ├── Hero.tsx
│   │   │   ├── ProofBar.tsx
│   │   │   ├── FeaturedWork.tsx
│   │   │   ├── CoreSpecialties.tsx
│   │   │   ├── EngineeringPhilosophy.tsx
│   │   │   ├── ExperienceTimeline.tsx
│   │   │   └── ConsultationCta.tsx
│   │   ├── projects/           # Project card, filters, case-study narrative blocks
│   │   ├── contact/            # Validated ContactForm with backup mailto link
│   │   └── ui/                 # Buttons, Badges, Breadcrumbs, Icons
│   ├── data/
│   │   ├── projects.ts         # Strictly typed project and case-study data
│   │   ├── services.ts         # Service offerings and process models
│   │   ├── experience.ts       # Employment, education, and career milestones
│   │   └── siteConfig.ts       # Global brand metadata, links, and contact info
│   ├── lib/
│   │   └── utils.ts            # Class name merger (clsx + twMerge)
│   ├── styles/
│   │   └── globals.css         # CSS tokens, Tailwind directives, font bindings
│   └── types/
│       └── index.ts            # TypeScript interfaces and type definitions
├── design.md
├── project-plan.md
├── architecture.md
├── content.md
├── implementation.md
├── testing.md
└── package.json
```

---

## 3. Data Models & Type Definitions

```typescript
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
```

---

## 4. Breadcrumb & Navigation System

- **Every page includes visible breadcrumbs:**
  - Route navigation dynamically generates breadcrumb hierarchies.
  - Generates `<script type="application/ld+json">` for `BreadcrumbList` schema markup.
  - Implements semantic HTML with `aria-label="Breadcrumb"` and `aria-current="page"`.

---

## 5. Contact Form Architecture & Fallback

- **Submissions:** Handled via `/api/contact`.
- **Bot Defense:** Silent rejection on honeypot field (`website_hp`).
- **Resilient Fallback:** Automatically formats a pre-filled `mailto:` link with all project specifications and provides a one-click clipboard copy action with instant feedback.
