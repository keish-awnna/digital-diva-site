# Design & Technical Decisions Log

Running log of non-obvious decisions made during this project.
Used to inform the case study at the end.

---

## Architecture

### Container standard
Settled on `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` as the universal inner container.
Earlier components (LegalPrograms) used `container mx-auto` + section-level padding — inconsistent with the rest of the site.
Consolidating to one pattern makes spacing predictable across all pages.

### Content separated from components
All offer data (name, price, description, deliverables, CTA label) lives in `src/content/offers.ts`.
Components are display-only — they never hard-code business content.
This means the client can update offers without touching component files.

### Centralized external links
`src/config/suitedash.ts` holds all future third-party destinations as empty strings.
CTAs reference these rather than scattering `href="#"` or hardcoded URLs.
Chose internal placeholder routes (`/contact`, `/coming-soon`) over `href="#"` during the design phase —
`href="#"` causes the page to jump to the top and misleads keyboard users.

### CSS variable architecture
Brand colors defined once in `@theme inline` block in `globals.css`, becoming Tailwind utilities automatically.
Gradient palette variables (`--burg`, `--gold3`, etc.) live in `:root` and are used ONLY inside
atmospheric gradient utility definitions — not referenced as Tailwind class names directly.
Rule: `from-[var(--burg4)]` not `from-burg4`.

---

## Visual System

### Color-coding for service pathways
Burgundy = Legal Empowerment, Navy = Credit Empowerment, Gold = Premium/Bundle.
Applied consistently to pathway cards, offer cards, section backgrounds.
Navbar is explicitly excluded — it's a unified brand element, not pathway-specific.

### Atmospheric gradient utilities
Three custom utilities (`bg-atmosphere-card`, `bg-atmosphere-navy`, `bg-atmosphere-gold`) for dark card backgrounds.
Flat background classes (`bg-brand-burgundy`) look cheap on cards — the radial gradient adds depth.
Using named utilities rather than inline gradients keeps components clean and consistent.

### Gold as accent only
Gold fails WCAG AA contrast at small text sizes on white/ivory backgrounds.
Used for borders, icons, and decorative labels — never for body text.
`text-brand-gold` on white/ivory at `text-xs` → changed to `text-brand-burgundy/70` throughout.

---

## Layout

### Offer card grid height equalization
Goal: Row 2 outer (beige) cards should appear "lower" than the center (burgundy) card, mirroring row 1.
First attempt: `lg:self-stretch` on individual cells — no visible effect (flex children need parent to be flex too).
Solution: `lg:items-stretch` on the grid container + grow chain: wrapper div (`lg:pt-14 lg:flex lg:flex-col`)
→ Reveal (`lg:grow lg:flex lg:flex-col`) → OfferCard (`lg:grow` via className prop).
The `pt-14` creates the vertical stagger; `grow` makes the card fill the remaining height.

### Stat grid visibility breakpoint
Hero stat grids use `hidden lg:block` not `hidden md:block`.
At `md` (768px) the hero is still single-column — stat grid renders in a disconnected
single-column parent, looking awkward. `lg` (1024px) is when the two-column hero layout kicks in.

---

## Accessibility

### `<main>` in layout, not in page files
`layout.tsx` provides the `<main>` landmark. All `page.tsx` files use fragments or divs as root.
Nesting `<main>` inside `<main>` creates an invalid document structure.

### `aria-label` required on all `<nav>` elements
Multiple nav regions on one page (Navbar + footer nav) need distinct labels so screen readers
can distinguish them. Added to every nav: `aria-label="Main navigation"`, `aria-label="Footer navigation"`, etc.

### Decorative icons must be `aria-hidden="true"`
All Lucide icons that don't carry unique meaning get `aria-hidden="true"`.
When icons are stored as JSX in data arrays, wrapped at the render site: `<span aria-hidden="true">{item.icon}</span>`.

### Emoji must be wrapped
Screen readers describe emoji by their Unicode name ("balance scale").
All decorative emoji wrapped: `<span aria-hidden="true">⚖</span>`.

### `clip-path` clips focus outlines
Buttons using `clip-path` have their focus ring clipped, making keyboard focus invisible.
`.clip-btn` utility in `globals.css` has a global override: removes `clip-path` on `:focus-visible`.
Do not add per-component focus overrides — the global rule handles it.

### `disabled` not used on nav CTAs
`disabled:opacity-50` looks visually broken (semi-transparent) on dark backgrounds like the burgundy navbar.
CTAs that don't have a live destination yet route to `/contact` as a placeholder.
`disabled` is reserved for form submit buttons only.

---

## Smooth Scroll & Animation

### Lenis + GSAP ScrollTrigger integration
**Problem:** Scroll stopped at ~15.94% down the page after adding multiple sections with Reveal components.
**Root cause:** Lenis intercepts scroll events and animates them. GSAP ScrollTrigger calculates
positions from native scroll independently. As more Reveal instances were added, ScrollTrigger's
position calculations diverged from Lenis's scroll position, causing ScrollTrigger to trigger
a refresh at an inconsistent point — telling Lenis its scroll limit was already reached.
**Fix:** Added `ScrollTriggerBridge` component inside `SmoothScroll`. It calls `ScrollTrigger.update()`
on every Lenis tick via `useLenis`, keeping the two systems continuously in sync.
**Note:** `ReactNode` type from app's React conflicts with older `@types/react` bundled inside
`@studio-freight/react-lenis`. `children: any` bypasses this — not ideal but the alternative
is a type cast that's equally ugly.

### `prefers-reduced-motion` in Reveal
All GSAP entrance animations check `window.matchMedia("(prefers-reduced-motion: reduce)")`.
If active, elements are made immediately visible without motion. WCAG 2.3.3 compliance.

---

## Content Boundaries

### Educational positioning
The business is a legal and credit educator — not a law firm, not a credit repair organization.
All copy avoids language that implies legal representation, done-for-you services, or guaranteed outcomes.
Specific forbidden phrases documented in `copilot-instructions.md`.
This constraint shaped copy decisions throughout every section.

### Placeholder copy policy
Missing business content (prices, course details, session lengths) uses clearly labeled placeholders
(`[Enrollment count pending]`) rather than invented values presented as real.
Fake statistics, testimonials, or outcomes were never added even in placeholder components.

---
