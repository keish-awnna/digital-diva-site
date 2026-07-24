# Digital Diva Academy Website — GitHub Copilot Instructions

## Project Overview

This project is a custom marketing website for **Digital Diva Academy By Vee™**.

Digital Diva Academy provides educational resources and coaching related to:

- Legal process education
- Debt defense education
- Court process education
- Self-represented litigant support
- Credit education
- Credit report education
- Courses
- Templates
- Coaching sessions
- Monthly educational support

The business is intended to help everyday people better understand legal and
credit-related processes in plain language.

The business does **not** provide legal advice, legal representation, financial
advice, or done-for-you credit repair services.

The website should feel:

- Professional
- Empowering
- Elegant
- Feminine
- Trustworthy
- Educational
- Premium but approachable
- Clear and easy to navigate

---

## Current Project Phase

This project is currently in the **visual design, front-end development, and
site structure phase**.

The current goal is to establish:

- The overall visual direction
- Page layouts
- Section hierarchy
- Navigation
- Typography
- Color system
- Responsive behavior
- Reusable components
- Offer card layouts
- Calls to action
- Mobile presentation
- Desktop presentation
- Accessibility
- Front-end content structure

Do not implement SuiteDash or other third-party business integrations during
this phase.

Do not build:

- Checkout flows
- Payment processing
- Appointment booking logic
- Authentication
- Client accounts
- Client portals
- Course access systems
- Document upload systems
- Databases
- API integrations
- Webhooks
- Subscription logic
- Automated onboarding workflows
- Custom learning management systems

Do not create mock APIs, fake backend infrastructure, or custom replacements for
functionality that may later be handled by SuiteDash.

The current priority is to build the public-facing website and get the design,
layout, content structure, and user experience correct.

---

## Technology Stack

Use the following stack unless the existing repository specifies otherwise:

- Next.js
- Next.js App Router
- React
- TypeScript
- React Server Components by default
- Client Components only when interactivity requires them
- The existing project styling system
- GitHub for source control
- AWS for eventual deployment

Do not introduce a new framework or dependency without a clear technical need.

Prefer built-in Next.js, React, CSS, and browser functionality over unnecessary
third-party libraries.

---

## Code Standards

- Use TypeScript for components, utilities, configuration, and content data.
- Avoid using `any`.
- Define clear interfaces and types.
- Use descriptive names for variables, functions, files, and components.
- Keep components focused and reasonably small.
- Extract repeated layouts into reusable components.
- Avoid duplicated markup.
- Avoid duplicated content data.
- Use semantic HTML.
- Always include a descriptive class name on `<section>` tags (e.g., `<section className="hero-section">`) to facilitate clear communication about page structure.
- Keep business content separate from presentation logic where practical.
- Do not over-engineer simple features.
- Do not rewrite unrelated files when completing a task.
- Add comments only when the reason for the code is not obvious.

Before creating a new component:

1. Review the existing project structure.
2. Check whether an existing component can be reused.
3. Extend an existing component when that is cleaner than creating a duplicate.

---

## Next.js Conventions

- Use the App Router.
- Use Server Components by default.
- Add `"use client"` only when a component requires:
  - Event handlers
  - Local state
  - Browser APIs
  - Interactive menus
  - Accordions
  - Form behavior

- Use `next/image` for site imagery.
- Use `next/link` for internal navigation.
- Use Next.js metadata exports for page titles and descriptions.
- Keep broadly reusable components in a shared components directory.
- Keep page-specific components close to their route when appropriate.
- Use environment variables for future third-party URLs and configuration.
- Never expose private server variables to the browser.
- Do not add unnecessary global client-side state.

---

## Recommended Site Structure

The initial site structure should support the following pages:

- Home
- Legal Empowerment
- Credit Empowerment
- Courses and Templates
- About
- Contact or Book
- Client Login placeholder
- Privacy Policy placeholder
- Terms and Conditions placeholder
- Disclaimer placeholder
- Refund Policy placeholder

The homepage should introduce both Legal Empowerment and Credit Empowerment
without overwhelming the visitor.

Legal Empowerment and Credit Empowerment should each have their own dedicated
page.

Courses and templates may initially be grouped together rather than creating a
separate sales page for every product.

Do not create individual offer pages unless requested.

---

## Suggested Homepage Structure

The homepage should generally follow this order:

1. Header and navigation
2. Hero section
3. Legal and Credit pathway overview
4. Who the programs are for
5. Featured offers
6. How the process works
7. What Vee does and does not do
8. About or mission section
9. Final call to action
10. Footer and educational disclaimer

The homepage should answer:

- What is Digital Diva Academy?
- Who is it for?
- What does the business teach?
- What are the two main service categories?
- What can visitors learn or purchase?
- What should visitors do next?
- What does the business not provide?

Do not add fabricated statistics, testimonials, client counts, success rates,
certifications, or results.

---

## Future SuiteDash Integration

SuiteDash may be used in a later phase for:

- Appointment booking
- Course enrollment
- Course access
- Payments
- Recurring support subscriptions
- Client intake
- Template delivery
- Secure document uploads
- Client portal access
- Client login
- Automated onboarding

SuiteDash functionality is out of scope for the current phase.

For now:

- Build reusable CTA components.
- Keep future external destinations centralized.
- Use clear and descriptive CTA labels.
- Do not install SuiteDash-related packages.
- Do not embed SuiteDash forms.
- Do not add SuiteDash scripts.
- Do not create SuiteDash API integrations.
- Do not build custom substitutes for SuiteDash functionality.
- Mark future integration points with concise TODO comments.

Future destinations should eventually be stored in a centralized configuration
file.

Example:

```ts
export const externalLinks = {
  clientLogin: "",
  booking: "",
  legalCourse: "",
  creditCourse: "",
  templateStore: "",
  monthlySupport: "",
} as const;
```

Do not hard-code placeholder URLs throughout multiple components.

---

## Placeholder CTA Behavior

Buttons that will eventually connect to SuiteDash or another external service
should be visually designed now but should not pretend to be functional.

Do not scatter `href="#"` throughout the project.

Using `href="#"` can cause the page to jump to the top and creates misleading
navigation behavior.

Use one of the following approaches:

### Option 1: Disabled CTA

Render an unfinished CTA as a disabled button.

```tsx
type CtaProps = {
  href?: string;
  children: React.ReactNode;
};

export function Cta({ href, children }: CtaProps) {
  if (!href) {
    return (
      <button type="button" disabled aria-disabled="true">
        {children}
      </button>
    );
  }

  return <a href={href}>{children}</a>;
}
```

### Option 2: Temporary Internal Destination

During design and navigation testing, use an approved internal route such as:

- `/contact`
- `/coming-soon`

Do not create fake checkout, booking, login, or enrollment experiences.

Clearly mark future integration points with TODO comments such as:

```ts
// TODO: Connect this CTA to the approved SuiteDash destination.
```

Do not add excessive TODO comments. Only add them where an actual future
integration will be required.

---

## Content and Legal Boundaries

This business operates in legal and credit education.

All generated content must remain within the approved educational scope.

Approved positioning includes:

- Legal education
- Credit education
- Court process education
- Debt defense education
- Document organization
- Case management education
- Process coaching
- Template resources
- Self-representation education
- DIY credit education
- Credit self-sufficiency
- Educational guidance
- Process clarity

Do not write language suggesting that Vee:

- Is an attorney
- Is a law firm
- Provides legal advice
- Represents clients
- Creates an attorney-client relationship
- Files court documents for clients
- Communicates with courts on behalf of clients
- Negotiates with creditors on behalf of clients
- Communicates with credit bureaus on behalf of clients
- Is a credit repair organization
- Provides done-for-you credit repair
- Guarantees court outcomes
- Guarantees case dismissals
- Guarantees debt removal
- Guarantees credit report deletions
- Guarantees credit score increases
- Provides financial advice
- Provides investment advice

Avoid phrases such as:

- “We fix your credit”
- “We repair your credit”
- “We remove negative items”
- “We win your case”
- “Guaranteed results”
- “Guaranteed deletion”
- “Legal representation”
- “Attorney-backed”
- “We dispute for you”
- “Erase your debt”
- “Boost your score fast”
- “Improve your score by a guaranteed amount”
- “We handle your lawsuit”
- “We fight creditors for you”

Preferred language includes:

- “Learn how the process works”
- “Understand your options”
- “Educational guidance”
- “Process coaching”
- “Self-represented litigant education”
- “DIY credit education”
- “Templates for educational use”
- “Build confidence through knowledge”
- “Understand and organize your next steps”
- “Learn how to review your credit report”
- “Learn how to respond to legal documents”
- “Gain clarity about court procedures”
- “Take a more informed next step”

Do not invent:

- Legal claims
- Statistics
- Testimonials
- Certifications
- Credentials
- Awards
- Client results
- Success rates
- Court outcomes
- Credit score outcomes
- Guarantee language
- Scarcity
- Urgency
- Fake availability

Use only approved client content or clearly labeled placeholder content.

---

## Disclaimers and Policies

The website should clearly communicate that the services are educational.

Use a reusable disclaimer component when disclaimer text needs to appear in
multiple places.

Potential disclaimer locations include:

- Service pages
- Course sections
- Coaching sections
- Template sections
- Contact forms
- Booking CTAs
- Purchase CTAs
- Footer

Do not invent final legal policy language.

Until approved language is provided, create clearly labeled placeholders for:

- General disclaimer
- Privacy Policy
- Terms and Conditions
- Refund Policy
- Coaching agreement
- Educational-use notice

Placeholder pages should clearly indicate that approved copy is still required.

Do not publish placeholder language as though it were final legal text.

---

## Brand and Visual Direction

The visual direction is based on the client’s AI-generated website concept but
should be refined into a polished, accessible, and consistent design system.

The visual style should feel:

- Elegant
- Professional
- Empowering
- Feminine
- Modern
- Premium
- Approachable
- Trustworthy
- Educational

The current color direction includes:

- Deep burgundy
- Cream
- Navy
- Gold accents

Gold should primarily be used as an accent.

Do not use gold for long passages of body text.

Maintain readable contrast between text and backgrounds.

Avoid:

- Excessive gradients
- Excessive shadows
- Overly ornate typography
- Tiny body text
- Too many competing card styles
- Excessive animation
- Decorative effects that reduce credibility
- Overuse of scales-of-justice imagery
- Generic courthouse imagery without approval
- Stock imagery that implies legal representation
- Overly aggressive finance imagery
- Visuals that resemble a law firm unless specifically approved

---

## Design System

Use reusable design tokens or CSS variables for:

- Brand colors
- Neutral colors
- Background colors
- Text colors
- Spacing
- Typography
- Container widths
- Border radius
- Shadows
- Breakpoints
- Transitions
- Focus states

Do not scatter raw hexadecimal values and arbitrary spacing values throughout
components.

Create reusable components for patterns such as:

- Header
- Navigation
- Mobile navigation
- Footer
- Buttons
- Page heroes
- Section headings
- Offer cards
- Service cards
- Pricing displays
- Feature lists
- Process steps
- Disclaimer notices
- Calls to action
- FAQ accordions
- Contact forms
- Empty states
- Coming-soon states

Buttons should use consistent variants such as:

- Primary
- Secondary
- Outline
- Text link
- Disabled

### Button Variant Usage Rules

Do not use `outline` on white or light-colored backgrounds — it is too subtle and
fails to draw attention as a CTA.

- On **dark backgrounds** (burgundy, navy): use `primary` or `outline-light`.
- On **white or light backgrounds**: use `primary`.
- On **gold backgrounds**: use `secondary` (burgundy fill, gold-light text).
- On **navy backgrounds**: use `outline-light` (cream border, cream text) when a
  solid button would clash with the background gradient.

Keep typography, spacing, borders, shadows, and card treatments consistent
across pages.

### Brand Color Coding System

A consistent color-coding system has been established to visually distinguish
the two main service pathways and the combined bundle offering.

| Color | Meaning | CSS Class |
|---|---|---|
| Burgundy | Legal Empowerment | `bg-atmosphere-card` |
| Navy | Credit Empowerment | `bg-atmosphere-navy` |
| Gold | Premium / Bundle | `bg-atmosphere-gold` |

This system must be applied consistently across:
- Pathway overview cards on the homepage
- Featured offer cards
- Section backgrounds and accents
- CTA button variants

Do not apply navy to the global Navbar. The Navbar is a unified brand element
that serves both pathways equally.

### Atmospheric Gradient Utilities

Three custom CSS utilities are defined in `src/app/globals.css` for dark card
backgrounds. Always use these instead of flat background color classes.

```css
.bg-atmosphere-card  /* Burgundy — for legal cards and sections */
.bg-atmosphere-navy  /* Navy — for credit cards and sections */
.bg-atmosphere-gold  /* Gold — for premium/bundle cards and sections */
```

Additional atmosphere utilities for full-section backgrounds:

```css
.bg-atmosphere        /* Deep burgundy, radial from top center */
.bg-atmosphere-bottom /* Deep burgundy, radial from bottom center */
```

Do not use flat hex values (`bg-brand-burgundy`, `bg-brand-navy`, `bg-brand-gold`)
for dark card backgrounds. Use the atmospheric gradient utilities instead.

---

## Offers and Pricing Data

Offer information should be stored in centralized structured data rather than
manually repeated across multiple pages.

An offer may include:

```ts
export type Offer = {
  id: string;
  name: string;
  category: "legal" | "credit" | "bundle";
  price?: string;
  shortDescription: string;
  deliverables?: string[];
  format?: string;
  duration?: string;
  ctaLabel: string;
  href?: string;
  featured?: boolean;
  disclaimerNote?: string;
};
```

Do not invent:

- Prices
- Course modules
- Deliverables
- Session lengths
- Included services
- File formats
- Subscription terms
- Refund terms
- Availability

If information is missing, use a clearly labeled placeholder in the content
data.

Do not hide uncertainty inside polished marketing copy.

---

## Responsive Design

Build mobile-first.

The site must work well on:

- Small mobile screens
- Large mobile screens
- Tablets
- Laptops
- Desktop monitors
- Wide desktop screens

Requirements:

- Navigation should collapse into an accessible mobile menu.
- Cards should stack cleanly on small screens.
- Buttons should remain easy to tap.
- Long headings should wrap naturally.
- Pricing and offer names should not overflow.
- Avoid fixed heights on content-heavy sections.
- Avoid horizontal scrolling.
- Maintain comfortable content padding.
- Preserve visual hierarchy at every breakpoint.

Do not design only for the desktop screenshot.

---

## Accessibility

Target WCAG 2.2 AA practices.

Requirements:

- Use semantic HTML.
- Use landmarks such as `header`, `nav`, `main`, `section`, and `footer`.
- Maintain a logical heading hierarchy.
- Use one primary H1 per page.
- Add accessible labels to buttons, links, menus, and form fields.
- Ensure keyboard navigation works.
- Include visible focus states.
- Maintain sufficient color contrast.
- Add meaningful alt text to informative images.
- Use empty alt text for decorative images.
- Do not rely on color alone to communicate meaning.
- Respect `prefers-reduced-motion`.
- Avoid autoplaying media.
- Ensure mobile navigation is keyboard accessible.
- Ensure accordions are keyboard accessible.
- Associate validation messages with their related fields.
- Use buttons for actions and links for navigation.
- Do not create clickable `div` elements.

Animations should be subtle and should not be required to understand the
content.

---

## Forms

During the current phase, forms may be built visually for layout and usability
testing.

Do not connect forms to a live backend unless requested.

A future general contact form may include:

- Name
- Email
- Phone, if approved
- Area of interest
- General message
- Consent checkbox

Do not create public forms that encourage users to submit:

- Social Security numbers
- Credit report files
- Government identification
- Bank details
- Full account numbers
- Court documents
- Confidential legal information
- Sensitive financial records

Sensitive document uploads should eventually be directed to an approved secure
portal such as SuiteDash.

Include a future notice near the contact form warning users not to submit
confidential or sensitive information through the general website form.

For visual form prototypes:

- Include labels.
- Include accessible error placement.
- Include loading, success, and error states in the component design.
- Do not log sensitive form data.
- Do not pretend that a form submission was completed successfully when no
  backend exists.

---

## Content Style

When generating or revising copy:

- Use clear and understandable language.
- Explain legal and credit concepts in plain language.
- Keep paragraphs readable.
- Avoid unnecessary jargon.
- Avoid fear-based marketing.
- Avoid shame-based credit messaging.
- Avoid aggressive debt language.
- Avoid promising outcomes.
- Maintain a supportive and empowering tone.
- Preserve trademark symbols in approved brand and offer names.
- Do not modify approved prices.
- Do not create fake urgency.
- Do not create countdown timers.
- Do not claim limited availability unless confirmed.
- Do not use manipulative conversion tactics.

The tone should help visitors feel informed, respected, and capable.

---

## Images and Visual Content

Use approved brand imagery when available.

When using placeholders:

- Clearly identify them as placeholders in development.
- Do not represent stock models as actual clients.
- Do not fabricate testimonial photos.
- Do not imply that stock images show real client outcomes.
- Avoid images that imply attorney representation.
- Avoid imagery that appears overly corporate or intimidating.
- Use imagery that supports education, organization, confidence, and
  empowerment.

Use `next/image` and provide appropriate image dimensions to minimize layout
shifts.

---

## SEO

Each page should include:

- A unique page title
- A unique meta description
- A clear H1
- A logical heading structure
- A descriptive URL
- Relevant internal links
- Social sharing metadata when appropriate

Use natural language.

Do not keyword-stuff.

Do not describe the business as:

- A law firm
- A legal services provider
- A financial advisory company
- A credit repair company

Use educational terminology consistently in:

- Metadata
- Headings
- Body copy
- Navigation
- Calls to action

---

## Performance

- Optimize images.
- Use Server Components where appropriate.
- Avoid unnecessary JavaScript.
- Avoid large animation libraries.
- Lazy-load noncritical media.
- Minimize layout shifts.
- Keep third-party scripts limited.
- Do not add tracking pixels without approval.
- Do not install analytics during the visual phase unless requested.
- Avoid loading entire icon libraries when only a few icons are needed.
- Prefer CSS transitions for simple effects.

---

## Security and Privacy

- Never commit API keys, passwords, tokens, or secrets.
- Use environment variables for future integrations.
- Do not expose server-only credentials using `NEXT_PUBLIC_`.
- Do not store sensitive legal, identity, or credit information in browser
  storage.
- Do not create a sensitive-document workflow without approval.
- Do not collect information that is not necessary.
- Do not create fake authentication or account systems.
- Do not add unapproved third-party tracking scripts.

---

## Testing Expectations

Before considering a page or feature complete:

- Check the mobile layout.
- Check the tablet layout.
- Check the desktop layout.
- Check keyboard navigation.
- Check visible focus states.
- Test the mobile menu.
- Test accordions and interactive elements.
- Test all internal links.
- Confirm placeholder external CTAs are disabled or intentionally routed.
- Check for text overflow.
- Check for horizontal scrolling.
- Confirm images include appropriate alt text.
- Confirm there are no console errors.
- Confirm there are no TypeScript errors.
- Run linting.
- Run type checking.
- Run the production build.
- Confirm no unsupported legal or credit claims were introduced.
- Confirm no fake statistics or testimonials were added.
- Confirm future integration points are clearly identified.

---

## Copilot Response Expectations

When asked to implement a feature:

1. Review the existing code and project structure first.
2. Reuse existing components and styles when practical.
3. State important assumptions briefly.
4. Identify missing business content rather than inventing it.
5. Make the smallest clean change that completes the task.
6. Preserve responsive design.
7. Preserve accessibility.
8. Preserve legal and credit content boundaries.
9. Mention any new environment variables or configuration required.
10. Do not implement SuiteDash or backend functionality unless explicitly
    instructed.
11. Do not rewrite unrelated files.
12. Do not create unnecessary dependencies.
13. Explain where placeholder content or future integrations remain.

The current objective is to build the storefront and public website experience
first.

Do not build the store operations, course platform, client portal, payment
system, or booking system yet.

---

## Git and Commit Structure

Maintain a clean and professional commit history.

### Commit Frequency

Commit and push after completing a **single, discrete unit of work**. This
includes:

- A single feature component (e.g., "Implement Hero section")
- A specific bug fix (e.g., "Fix button contrast ratio")
- A structural refactor (e.g., "Move common UI components to shared folder")
- A configuration update (e.g., "Add GSAP and Lenis dependencies")

Avoid committing every tiny line change, and avoid grouping unrelated features
into a single giant commit.

### Commit Best Practices

- Use the Single Responsibility Principle for commits.
- If a commit message requires the word "and" more than once, split the work
  into smaller commits.
- Keep the history descriptive and easy to debug or roll back.

---

## Approval Workflow

To ensure alignment and prevent unauthorized changes:

- **Do not make any changes to project files or architecture without first presenting a proposal.**
- For every task, first provide:
  1. A summary of the proposed changes or updates.
  2. A detailed plan of the files to be modified and the logic to be implemented.
- **Wait for explicit user approval before proceeding with any file edits or command execution.**
- If a task is complex, break it down and seek approval for each phase.

---

## Interactive Discussion Mode

If the user starts a message with **"opinion time:"**, this indicates a request
for discussion, brainstorming, or planning only.

In this mode:
- Do not make any changes to the project files.
- Do not run terminal commands that modify the project.
- Provide feedback, pros/cons, or strategic plans based on the user's inquiry.
- Wait for explicit confirmation before proceeding with any implementation.


