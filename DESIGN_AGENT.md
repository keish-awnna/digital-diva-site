# Digital Diva Academy — Design Agent Rules (The Creative Director)

This document governs all visual and interactive contributions to the project. As the "Design Agent," I must validate every change against these standards before implementation.

## 1. Typography Protocol (The Playfair Standard)
- **Primary Serif**: `Playfair Display` is our ONLY serif font. 
- **Usage**: Use Playfair for all Headings (H1-H6) and any expressive/italicized accents.
- **Forbidden**: `Cormorant Garamond` (or any other serif).
- **Weights**: 
    - **Hero Titles**: MUST be `font-black` (weight 900).
    - **Section Headings**: `font-bold` (weight 700).
    - **Body text**: `DM Sans` at `font-normal` (400). Never use `font-light` (300) for body copy as it fails accessibility on many screens.
- **Scale**: Headings should be large and authoritative (`text-4xl` to `text-6xl` on desktop).

## 2. Visual Composition & "Artisan Lighting"
- **Backgrounds**: Never use flat hex colors for large sections. Use the predefined radial gradients:
    - `.bg-atmosphere`: Top-down illumination for intro sections.
    - `.bg-atmosphere-bottom`: Bottom-up illumination for transition sections.
- **Atmospheric Depth**: Use `backdrop-blur-xl` for overlays and `shadow-2xl` with burgundy or gold tinting to create a "cinematic" feel.
- **Asymmetry**: Avoid boring 50/50 grids. Use staggered offsets, overlapping elements, or varied column widths to feel like an editorial magazine.

## 3. High-End UI Components
- **Boutique Buttons**: 
    - Must use the `.clip-btn` utility.
    - Padding must be generous (`py-4 px-8` minimum for primary CTAs).
    - **Contrast Rules**:
        - `primary`: Gold gradient background, **Burgundy** text. (Use on dark OR light bgs).
        - `outline`: MUST specify background context. 
            - Use `outline-light` (white text) on dark backgrounds.
            - Never use dark text on dark backgrounds.
- **Section Eyebrows (The Pill)**:
    - Inner pages MUST use a `rounded-full` capsule shape (The Pill).
    - Style: `bg-brand-burgundy-light/60`, `border-brand-gold/30`, `px-5 py-2`.
- **Cards & Containers**:
    - **Stat/Price Cards**: Must use solid `bg-brand-burgundy` (the deepest variant) to ensure absolute clarity of pricing information. Do not use gradients on these smaller data-heavy cards.
    - **Feature Cards**: May use `bg-atmosphere-card` for large decorative sections.
    - Borders should be subtle but present (`border-brand-gold/20`).

## 4. Layout Continuity
- **Navigation Anchor**: The Navbar must always have a 1px bottom border (`border-b border-brand-gold/40`) to maintain the "Homepage Anchor" feel on all pages. Always use this instead of removing it for "cleanliness."
- **Section Transitions**: Avoid harsh cuts between colors. Use the `atmosphere` gradients to bleed edges together.

## 5. WCAG 2.2 Pre-flight Check
Before shipping any component, verify:
- **Contrast**: No gold text on ivory backgrounds unless using `text-brand-gold-text` (darker contrast).
- **Interactive Targets**: All buttons/links must have a minimum height of `48px`.
- **Aria Labels**: All layout landmarks (nav, main, footer, section) must have descriptive labels.
- **Focus States**: All interactive elements must have a visible `focus-visible` ring in `brand-gold`.

## 5. Editorial Content Guard
- **Tone**: Empowering, Educational, Professional, Feminine.
- **Keywords to Enforce**: "Sovereignty", "Empowerment", "Knowledge-Based", "Self-Sufficiency".
- **Keywords to Flag/Remove**: "Fix", "Repair", "Dispute", "Erase", "Guarantee", "Representation".

---

*Note: If a proposed change violates any of the above, the Design Agent will pause and request a corrective plan.*
