# Quality Assurance & Testing Plan — Ahmed Razu Portfolio

## 1. Quality Gates & Execution Status

This testing matrix tracks verification across every critical layer of the application. Status markers are updated strictly based on verifiable test executions.

- `[ ]` Not started
- `[/]` In progress
- `[x]` Completed
- `[!]` Blocked

---

## 2. Core Build & Tooling Verification

| ID | Test Item | Procedure | Status | Notes |
| :--- | :--- | :--- | :---: | :--- |
| **BLD-01** | Production Build | Execute `npm run build` | `[x]` | Generated all 19 static routes in 1108ms without errors |
| **BLD-02** | TypeScript Strict Compile | Run `npx tsc --noEmit` | `[x]` | Zero type errors under TypeScript strict mode |
| **BLD-03** | ESLint Code Quality | Next.js build internal verification | `[x]` | Validated clean imports, typography bindings |
| **BLD-04** | Font Hierarchy Verification | Montserrat (headings) + Lato (body) | `[x]` | Bound via `next/font/google` with zero layout shift |

---

## 3. Route & Navigation Testing

| ID | Route | Expected Behavior | Status | Notes |
| :--- | :--- | :--- | :---: | :--- |
| **RTE-01** | `/` (Home) | Editorial hero, proof bar, alternating showcases, matrix, philosophy | `[x]` | HTTP 200, zero console errors verified |
| **RTE-02** | `/work` | Full catalog, breadcrumbs, category filter | `[x]` | HTTP 200, filter transitions verified via Chrome DevTools |
| **RTE-03** | `/work/[slug]` | Case studies with breadcrumbs, challenge, solution, stack | `[x]` | HTTP 200 across all 9 slugs (`cambridge-car-audio`, etc.) |
| **RTE-04** | `/services` | 6 service pillars, breadcrumbs, 4-step workflow, FAQs | `[x]` | HTTP 200, verified deliverables and business values |
| **RTE-05** | `/about` | Biography, breadcrumbs, career timeline, education, skills | `[x]` | HTTP 200, verified against CV source of truth |
| **RTE-06** | `/contact` | Inquiry form, breadcrumbs, email copy, FAQs | `[x]` | HTTP 200, interactive client & backup tested |
| **RTE-07** | `/privacy-policy` | Clean privacy statement with breadcrumbs | `[x]` | HTTP 200, verified text and home navigation |
| **RTE-08** | `/404` (Not Found) | Bespoke 404 page with return-to-home CTA | `[x]` | HTTP 404 cleanly returned on invalid paths |

---

## 4. Responsive Design & Layout Stability

| ID | Viewport Width | Device Equivalent | Key Checks | Status |
| :--- | :--- | :--- | :--- | :---: |
| **RSP-01** | `360px` | Small Mobile (Galaxy S8) | Zero horizontal scroll, readable Montserrat/Lato typography | `[x]` |
| **RSP-02** | `390px` | Modern Mobile (iPhone 13/14) | Hamburger menu, accessible tap targets, stacked previews | `[x]` |
| **RSP-03** | `768px` | Tablet (iPad Portrait) | 2-column layout transitions, intact navigation | `[x]` |
| **RSP-04** | `1024px` | Small Laptop / iPad Pro | Full desktop navigation, pill bar, multi-column grid | `[x]` |
| **RSP-05** | `1440px+` | Desktop Display | Max-width constraints (1340px) enforced, balanced whitespace | `[x]` |

---

## 5. Accessibility (A11y) & Usability

| ID | Verification Item | Criteria | Status |
| :--- | :--- | :--- | :---: |
| **A11Y-01** | Keyboard Navigation | All buttons, links, and form fields reachable via Tab key | `[x]` |
| **A11Y-02** | Visible Focus Indicators | Focus rings appear on all active elements (`focus-visible:ring-2`) | `[x]` |
| **A11Y-03** | Breadcrumbs Hierarchy | Breadcrumb trail present on every applicable route with schema | `[x]` |
| **A11Y-04** | Screen Reader Semantics | Semantic landmarks (`main`, `nav`, `footer`, `article`, `aria-current`) | `[x]` |
| **A11Y-05** | Reduced Motion | `prefers-reduced-motion: reduce` zeroing animation durations | `[x]` |

---

## 6. Functional & Form Validation

| ID | Test Scenario | Expected Outcome | Status |
| :--- | :--- | :--- | :---: |
| **FRM-01** | Empty Form Submission | Highlight required fields (Name, Email, Message) | `[x]` |
| **FRM-02** | Invalid Email Syntax | Client error message for malformed emails | `[x]` |
| **FRM-03** | Honeypot Bot Detection | Bot submissions to hidden field silently absorbed | `[x]` |
| **FRM-04** | Successful Submission / Fallback | Displays confirmed state with pre-filled email link | `[x]` |
| **FRM-05** | One-Click Email Copy | Clipboard copy with visual confirmation feedback | `[x]` |

---

## 7. Links, SEO & Asset Integrity

| ID | Test Item | Verification Method | Status |
| :--- | :--- | :--- | :---: |
| **LNK-01** | External Portfolio Links | Verified live client URLs (`cambridgecar.audio`, `stc360.co`, etc.) | `[x]` |
| **LNK-02** | Social Profile Links | Verified LinkedIn & GitHub profiles | `[x]` |
| **SEO-01** | Meta Titles & Descriptions | Unique Montserrat/Lato Open Graph tags per route | `[x]` |
| **SEO-02** | JSON-LD Structured Data | Person, WebSite, and BreadcrumbList schemas active | `[x]` |
| **IMG-01** | Image Loading & Formats | High-res SVG previews with explicit responsive containers | `[x]` |
