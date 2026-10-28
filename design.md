# Design System & Creative Direction — Ahmed Razu Portfolio

## 1. Brand Personality & Positioning

### 1.1 Brand Identity
- **Name:** Ahmed Razu (Md. Razib Ahmed Razu)
- **Professional Title:** WordPress & Laravel Developer | Software Engineer
- **Core Value Proposition:** "I build digital experiences and business systems that perform."
- **Brand Positioning Statement:** "I build high-performing WordPress websites, powerful Laravel applications, and intelligent automation systems that help businesses scale."
- **Brand Attributes:**
  - **Engineering Rigor:** Clean, maintainable code; systematic database and server architectures.
  - **Performance Obsession:** Sub-second load times, optimal Core Web Vitals, and resource efficiency.
  - **Business-First Mindset:** Technology chosen to solve real operational bottlenecks, drive conversions, and reduce technical debt.
  - **Modern Craftsmanship:** Editorial aesthetic, Swiss grid discipline, subtle micro-interactions without visual noise.

---

## 2. Creative Direction: "Modern Digital Craft"

The visual identity fuses **Swiss typographic discipline** with **modern software precision**:
- High-contrast editorial typography with generous whitespace.
- Structured asymmetric grids reflecting engineering precision.
- Tactile, crisp surface layers with subtle borders (`#E4E4DF`) rather than heavy blurred shadows.
- Electric royal blue accent (`#315CFF`) to guide visual attention to high-value actions and interactive triggers.
- Dark obsidian surfaces (`#111111`) for the Engineering Philosophy section, code details, and footer.

---

## 3. Mandatory Typography System

### 3.1 Font Families
- **Headings & Display:** `Montserrat` (weights: 500 understated, 600 section, 700 major titles, 800 display).
- **Body & Descriptions:** `Lato` (weights: 400 body, 500 nav/emphasis, 700 bold labels).
- **Technical & Code:** `JetBrains Mono` (weights: 400-500, metrics, slugs, tags).

### 3.2 CSS Typography Tokens
```css
:root {
  --font-heading: var(--font-montserrat), sans-serif;
  --font-body: var(--font-lato), sans-serif;
  --font-mono: var(--font-mono), monospace;
}

body {
  font-family: var(--font-body);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  letter-spacing: -0.025em;
}
```

---

## 4. Color Palette & Design Tokens

| Token Name | HEX Code | CSS Variable | Usage |
| :--- | :--- | :--- | :--- |
| **Canvas / Background** | `#F7F7F4` | `--bg-canvas` | Primary page background, warm editorial off-white |
| **Surface White** | `#FFFFFF` | `--surface-white` | Elevated cards, project frames, form containers |
| **Surface Muted** | `#EFEFED` | `--surface-muted` | Badges, code snippets, secondary containers |
| **Border Subtle** | `#E4E4DF` | `--border-subtle` | Structural dividers, card borders, hairpins |
| **Border Active** | `#C7C7BF` | `--border-active` | Hovered borders, active form inputs |
| **Text Primary** | `#141413` | `--text-primary` | Main headlines, body copy, key links (high contrast) |
| **Text Secondary** | `#5F5F58` | `--text-secondary` | Metadata, captions, subtitle descriptions |
| **Text Muted** | `#888880` | `--text-muted` | Timestamps, footnote labels, placeholders |
| **Brand Accent** | `#315CFF` | `--accent-primary` | Primary CTA buttons, active filters, focus rings |
| **Accent Hover** | `#1E44D6` | `--accent-hover` | Interactive hover state for primary triggers |
| **Accent Light** | `#EEF2FF` | `--accent-soft` | Selected tags, subtle pill highlights |
| **Dark Obsidian** | `#111111` | `--dark-obsidian` | Philosophy blocks, dark contrast cards, footer |
| **Dark Border** | `#262626` | `--dark-border` | Borders inside dark surfaces |
| **Dark Text** | `#EAEAEA` | `--dark-text` | High-contrast text on dark backgrounds |
| **Success Emerald** | `#059669` | `--status-success` | Availability badge, verified metric indicators |

---

## 5. Navigation & Breadcrumb System

### 5.1 Mandatory Breadcrumbs
Every navigable page includes a visible, accessible breadcrumb trail:
- `Home` (`/`)
- `Home / Work` (`/work`)
- `Home / Work / [Project Name]` (`/work/[slug]`)
- `Home / Services` (`/services`)
- `Home / About` (`/about`)
- `Home / Contact` (`/contact`)
- `Home / Privacy Policy` (`/privacy-policy`)

All breadcrumbs implement semantic HTML (`nav aria-label="Breadcrumb"` and `aria-current="page"`) accompanied by `BreadcrumbList` schema markup for search engines.

---

## 6. Page-by-Page Layout Architecture

1. **Home (`/`):**
   - Asymmetric Hero with headline: *"I build digital experiences and business systems that perform."*
   - Specialization Strip: 4 concise pillars with fine rules.
   - Alternating Editorial Showcases: Varied proportions (7-col / 5-col split, reversed for next item).
   - Services Matrix: Numbered services with problem-to-solution mappings.
   - Engineering Philosophy: Dedicated obsidian section explaining architectural principles.
   - Production Chronology: Minimalist Swiss vertical timeline.
   - Closing Consultation: *"Have a project worth building properly?"*

2. **Work (`/work`):**
   - Breadcrumbs, functional category filters (All, WordPress, Laravel, eCommerce, Performance & SEO).
   - Rich project catalog with real client credentials.

3. **Case Studies (`/work/[slug]`):**
   - Breadcrumbs, client metadata ribbon, business challenge vs technical solution, architecture diagrams, results, stack.

4. **Services (`/services`):**
   - Breadcrumbs, 6 detailed service pillars, deliverables, 4-stage delivery methodology, FAQs.

5. **About (`/about`):**
   - Breadcrumbs, biography, core principles, verified career timeline, AIUB education, technical skills matrix, CV download.

6. **Contact (`/contact`):**
   - Breadcrumbs, validated inquiry form with budget/timeline selectors, direct email copy button with tooltip, FAQs.
