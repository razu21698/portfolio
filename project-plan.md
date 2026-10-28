# Project Plan — Ahmed Razu Developer Portfolio

## 1. Project Goals & Strategic Intent

### 1.1 Primary Objective
Position **Ahmed Razu (Md. Razib Ahmed Razu)** as a premier WordPress & Laravel Developer and Software Engineer capable of engineering robust, scalable web platforms, high-speed custom themes/plugins, and intelligent automations for discerning international clients (US, UK, Canada, Europe).

### 1.2 Key Results & Conversion Metrics
1. **Inquiry Quality:** Facilitate high-ticket, qualified client inquiries for custom WordPress and Laravel development.
2. **Credibility & Trust:** Present 100% verified career history, verified companies (Branex IT, FRF SOFT, Trends Bird), and real client projects (Cambridge Car Audio, STC360 LMS, DBL Group, etc.) with zero fabricated claims.
3. **Speed & Technical Performance:** Achieve sub-second page loads, zero CLS (Cumulative Layout Shift), and near-perfect Lighthouse scores across Desktop and Mobile.
4. **Professional Engagement:** Provide direct paths to schedule discussions, submit structured project scopes, download the official CV, or connect on GitHub and LinkedIn.

---

## 2. Sitemap & Route Hierarchy

```
/ (Home)
├── /work (Selected & Complete Projects Portfolio)
│   ├── /work/cambridge-car-audio (WordPress & Speed Case Study)
│   ├── /work/stc360-lms (Laravel Custom Application Case Study)
│   ├── /work/bd-budget-beauty (High-Traffic WooCommerce & Speed Tuning)
│   ├── /work/malomatia (Enterprise WordPress & Multilingual Infrastructure)
│   ├── /work/dbl-group (Corporate Portal & Custom Theme Architecture)
│   ├── /work/auko-tex-group (Industrial Textile Web Platform)
│   ├── /work/ispahani-bd (Historic Brand Platform & Distributor Map)
│   ├── /work/pos-enterprise-system (High-Throughput Laravel POS Engine)
│   └── /work/singer-bd-maintenance (Retail Magento eCommerce Maintenance)
├── /services (Detailed Offerings, 4-Stage Workflow & FAQs)
├── /about (Biography, Engineering Philosophy, Career Timeline, AIUB Education, Skills Matrix, CV)
├── /contact (Interactive Project Scope Form, Contact Details, Direct Email)
└── /privacy-policy (Minimalist, Transparent Data Privacy Terms)
```

---

## 3. Development Milestones & Task Status

### Milestone 1: Planning & System Specification `[x]`
- [x] Inspect developer environment, Node version (v24.12.0), and directory structure.
- [x] Parse CV information, employment chronology, real client projects, and contact channels.
- [x] Produce all six mandatory markdown planning files (`design.md`, `project-plan.md`, `architecture.md`, `content.md`, `implementation.md`, `testing.md`).

### Milestone 2: Foundation & Tooling Setup `[x]`
- [x] Configure Next.js App Router with TypeScript and Tailwind CSS.
- [x] Set up mandatory typography: **Montserrat** for Headings, **Lato** for Body, **JetBrains Mono** for Code.
- [x] Establish design tokens, custom color palette (`#F7F7F4`, `#141413`, `#315CFF`, `#111111`), and Swiss grid.
- [x] Create vector project preview assets and technical architecture blueprints in `public/projects/`.

### Milestone 3: Reusable Component Library `[x]`
- [x] Reusable accessible `Breadcrumbs` component with `BreadcrumbList` JSON-LD schema on every route.
- [x] Minimal editorial `Header` with wordmark, active navigation pill, and mobile drawer.
- [x] Dark contrast `Footer` with verified contact details, social links, dynamic year, and back-to-top button.
- [x] Accessible `Button`, `Badge`, and inline vector `Icons` (GitHub, LinkedIn).
- [x] Asymmetric project preview cards with responsive aspect ratios.

### Milestone 4: Page Implementations `[x]`
- [x] **Home (`/`):** Asymmetric editorial Hero, Specialization Strip, Alternating Magazine Showcases, Services Matrix, Dark Engineering Philosophy Section, Timeline, Closing CTA.
- [x] **Work Index (`/work`):** Breadcrumbs, interactive category filter tabs (All, WordPress, Laravel, eCommerce, Speed & SEO), and 9 verified project case studies.
- [x] **Case Studies (`/work/[slug]`):** Breadcrumbs, client metadata ribbon, business challenge vs technical solution, architecture diagrams, verified metrics, technology stack.
- [x] **Services (`/services`):** Breadcrumbs, 6 detailed service pillars, deliverables, 4-step delivery methodology, client FAQs.
- [x] **About (`/about`):** Breadcrumbs, biography, core principles, verified career timeline, AIUB education, technical skills matrix, CV download.
- [x] **Contact (`/contact`):** Breadcrumbs, validated inquiry form, budget selector, timeline selector, direct email copy button with tooltip feedback.
- [x] **Privacy Policy (`/privacy-policy`):** Breadcrumbs, transparent data ethics statement.

### Milestone 5: Verification, Testing & Polish `[x]`
- [x] Next.js production build (`npm run build`) generating 19 static routes cleanly.
- [x] TypeScript strict compilation (`npx tsc --noEmit`) with 0 errors.
- [x] Multi-viewport responsive checks (360px, 390px, 768px, 1024px, 1440px).
- [x] Zero browser console errors verified via Chrome DevTools.
- [x] API route `/api/contact` validated with honeypot bot defense and field validation.
