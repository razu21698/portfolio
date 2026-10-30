# Implementation Guidelines & Engineering Standards — Md Razib Ahmed Razu Portfolio

## 1. Naming Conventions & Code Formatting

### 1.1 File & Directory Names
- **Components:** PascalCase for React components (e.g., `Button.tsx`, `ProjectCard.tsx`, `Hero.tsx`).
- **Pages & Routes:** Lowercase kebab-case according to Next.js App Router conventions (e.g., `app/work/[slug]/page.tsx`, `app/privacy-policy/page.tsx`).
- **Utilities & Helpers:** camelCase (e.g., `utils.ts`, `validations.ts`).
- **Data & Configuration:** camelCase or kebab-case (e.g., `projects.ts`, `siteConfig.ts`).

### 1.2 TypeScript Identifiers
- **Interfaces & Types:** PascalCase prefixed or clear nouns (e.g., `Project`, `ServiceItem`, `ContactFormData`).
- **Variables & Functions:** camelCase (e.g., `formatDate`, `getProjectBySlug`, `isSubmitting`).
- **Constants:** UPPER_SNAKE_CASE for immutable configurations (e.g., `DEFAULT_METADATA`, `SITE_URL`).

---

## 2. TypeScript & React Standards

- **Strict Mode Enabled:** `strict: true` in `tsconfig.json`. No usage of `any`.
- **Explicit Prop Types:** Every component must define an explicit TypeScript `interface` or `type` for its props.
- **Server Components by Default:** Avoid marking files with `'use client'` unless state (`useState`, `useEffect`), browser events (`onClick`, `onSubmit`), or browser APIs are required.
- **Pure Functions:** Business logic and data transformation must remain outside component render cycles in pure utility functions.

```typescript
// Example standard component signature
interface ProjectCardProps {
  project: Project;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  // Pure declarative JSX
}
```

---

## 3. Styling & Design Tokens with Tailwind CSS

- **CSS Variables as Single Source of Truth:** Colors are mapped through `--bg-canvas`, `--surface-white`, `--border-subtle`, `--accent-primary` in `globals.css` and referenced in `tailwind.config.js`.
- **Class Organization:** Utility classes ordered logically: Layout/Display -> Spacing -> Sizing -> Typography -> Visual Surfaces -> Interactivity -> Transitions.
- **No Arbitrary Magic Values:** Use system spacing scales (`p-4`, `p-6`, `p-8`) rather than ad-hoc pixel values like `p-[23px]`.
- **Component Class Merging:** Utilize `clsx` and `tailwind-merge` via `cn(...)` utility helper to guarantee collision-free class overrides.

---

## 4. Accessibility (A11y) & Semantic HTML

- **Heading Order:** Strict heading hierarchy (`h1` -> `h2` -> `h3` -> `h4`). Only one `h1` per page.
- **Interactive Elements:**
  - All clickable triggers that perform actions must use native `<button>`.
  - All navigation destinations must use `<Link>` or `<a>`.
  - Buttons and links without visible text must include `aria-label`.
- **Focus Rings:** Visible, non-intrusive focus rings using `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#315CFF] focus-visible:ring-offset-2`.
- **Color Contrast:** All body text meets WCAG AA standards (minimum contrast ratio of 4.5:1 against the background).
- **Reduced Motion:** Respect OS-level `prefers-reduced-motion` settings via `motion-reduce:transition-none` and `motion-reduce:animate-none`.

---

## 5. Performance Optimization Strategies

- **Next.js `<Image>` Component:**
  - Explicit `width` and `height` properties or `fill` with parent `relative` aspect-ratio wrappers.
  - Modern web formats (`webp`, `avif`).
  - `priority` flag for the LCP hero visual; `loading="lazy"` for all fold-below assets.
- **Bundle Optimization:**
  - Tree-shakeable icon imports from `lucide-react`.
  - Zero heavy third-party UI libraries (no Material UI, no Ant Design, no heavy 3D bundles).
  - Modern, zero-runtime CSS with Tailwind.
- **Font Loading:**
  - Google fonts loaded via `next/font/google` with `display: 'swap'` and automatic preloading to eliminate FOIT (Flash of Invisible Text) and layout shifts.

---

## 6. Form Handling, Validation & Security

- **Client-Side Validation:** Validates required fields, email syntax, and character limits before dispatching requests.
- **Sanitization:** All text inputs trimmed and sanitized to prevent XSS payloads.
- **Spam Defense:** Inclusion of a hidden honeypot field (`website_hp`) that immediately terminates submissions if filled by automated bots.
- **Reliable Fallback:** Generates a pre-formatted `mailto:` URI with subject and body if the backend mail transport is unavailable, ensuring 100% communication reliability.

---

## 7. SEO, Metadata & Structured Data

- **Page-Level Metadata:** Every route provides custom `title`, `description`, `canonical`, and Open Graph parameters.
- **JSON-LD Schema Markup:** Injected into the document `<head>`:
  - `Person` schema specifying Md Razib Ahmed Razu's professional title, employer history, and social profiles.
  - `WebSite` schema for search index ranking.
- **Semantic URLs:** Clean, descriptive slugs (e.g., `/work/cambridge-car-audio`, `/services`).

---

## 8. Git & Repository Best Practices

- Clear, descriptive commit messages following the Conventional Commits specification:
  - `feat: implement responsive work filter component`
  - `fix: resolve mobile layout clipping on contact form`
  - `docs: update test plan and cross-reference CV`
- Keep dependencies lean and verified. Ensure `.gitignore` ignores `node_modules`, `.next`, and environment secrets.

