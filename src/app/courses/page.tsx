import { Metadata } from "next";
import { Scale, CreditCard, Star, ArrowRight } from "lucide-react";
import { BundlesSection } from "@/components/offers/BundlesSection";
import { LegalPrograms } from "@/components/legal/LegalPrograms";
import { CreditPrograms } from "@/components/credit/CreditPrograms";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";

export const metadata: Metadata = {
  title: "Courses & Templates | Digital Diva Academy By Vee",
  description:
    "Browse all Legal Empowerment and Credit Empowerment courses, templates, and bundle offers from Digital Diva Academy By Vee.",
};

export default function CoursesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────── */}
      <section
        aria-label="Courses and templates storefront"
        className="courses-hero-section relative pt-32 sm:pt-40 pb-20 sm:pb-28 bg-brand-ivory border-b border-brand-gold/20 overflow-hidden"
      >
        {/* 1px dot grid — stationery/print texture, courses page only */}
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(28,4,8,0.18) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />
        {/* Faint centered warmth — very subtle, not dominant */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_38%,rgba(214,166,90,0.08)_0%,transparent_70%)]" aria-hidden="true" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal direction="up">
            <div className="flex items-center justify-center gap-5 mb-10">
              <div className="h-px w-16 bg-brand-gold-text/30" aria-hidden="true" />
              <span className="text-brand-gold-text text-[10px] font-bold tracking-[0.3em] uppercase">
                The Academy Storefront
              </span>
              <div className="h-px w-16 bg-brand-gold-text/30" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem] leading-[0.92] tracking-tight text-brand-burgundy mb-8">
              Every tool
              <br />
              <span className="italic text-brand-gold">you need.</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.18}>
            <div className="w-20 h-px bg-brand-gold/35 mx-auto mb-8" aria-hidden="true" />
          </Reveal>

          <Reveal direction="up" delay={0.22}>
            <p className="text-brand-burgundy/50 text-lg font-light leading-relaxed max-w-lg mx-auto mb-14">
              Courses, templates, and coaching for your legal and credit
              journey — all in one place.
            </p>
          </Reveal>

          <nav aria-label="Jump to series" className="flex flex-col sm:flex-row items-center justify-center gap-3 flex-wrap">
            <Reveal direction="up" delay={0.32} duration={1.4}>
              <Button href="#legal-series" variant="secondary" size="md" className="inline-flex items-center gap-2">
                <Scale aria-hidden="true" className="w-3.5 h-3.5" /> Legal Series
              </Button>
            </Reveal>
            <Reveal direction="up" delay={0.48} duration={1.4}>
              <Button href="#credit-series" variant="credit" size="md" className="inline-flex items-center gap-2">
                <CreditCard aria-hidden="true" className="w-3.5 h-3.5" /> Credit Series
              </Button>
            </Reveal>
            <Reveal direction="up" delay={0.64} duration={1.4}>
              <Button href="#bundles" variant="primary" size="md" className="inline-flex items-center gap-2">
                <Star aria-hidden="true" className="w-3.5 h-3.5" /> Bundle &amp; Save
              </Button>
            </Reveal>
          </nav>
        </div>
      </section>

      {/* ── LEGAL SERIES BAND ────────────────────────────────────────── */}
      <section
        id="legal-series"
        aria-label="Legal Empowerment Series department"
        className="courses-legal-band py-20 bg-atmosphere-card border-b-4 border-brand-gold/40 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-brand-gold/20" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-brand-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
                <Scale aria-hidden="true" className="w-5 h-5 text-brand-gold-light" /> Series One
                <div className="h-px w-8 bg-brand-gold/40" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05]">
                Legal
                <br />
                <span className="italic text-brand-gold-light">Empowerment Series</span>
              </h2>
            </div>
            <div>
              <p className="text-brand-cream/70 text-base md:text-lg font-light leading-relaxed">
                Courses, templates, and coaching to help you understand the legal
                process, respond to lawsuits, and navigate court with confidence.
                All educational — no attorney-client relationship is formed.
              </p>
              <a
                href="#legal-products"
                className="inline-flex items-center gap-2 mt-8 text-brand-gold text-xs font-bold tracking-[0.15em] uppercase transition-all hover:gap-4"
              >
                Browse legal programs <ArrowRight aria-hidden="true" className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Empowerment Offers */}
      <LegalPrograms hideHeader className="bg-brand-burgundy/[0.04]" cardBg="bg-white" />

      {/* ── CREDIT SERIES BAND ───────────────────────────────────────── */}
      <section
        id="credit-series"
        aria-label="Credit Empowerment Series department"
        className="courses-credit-band py-20 bg-atmosphere-navy-section border-b-4 border-brand-gold/40 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 right-0 h-px bg-brand-gold/20" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-brand-gold text-[10px] font-bold tracking-[0.3em] uppercase mb-4 flex items-center gap-3">
                <CreditCard aria-hidden="true" className="w-5 h-5 text-brand-gold-light" /> Series Two
                <div className="h-px w-8 bg-brand-gold/40" aria-hidden="true" />
              </div>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-[1.05]">
                Credit
                <br />
                <span className="italic text-brand-gold-light">Empowerment Series</span>
              </h2>
            </div>
            <div>
              <p className="text-brand-cream/70 text-base md:text-lg font-light leading-relaxed">
                Courses, templates, and coaching to help you understand your credit
                report, the dispute process, and how to build a stronger credit
                foundation. All educational — not a credit repair organization.
              </p>
              <a
                href="#credit-products"
                className="inline-flex items-center gap-2 mt-8 text-brand-gold text-xs font-bold tracking-[0.15em] uppercase transition-all hover:gap-4"
              >
                Browse credit programs <ArrowRight aria-hidden="true" className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Credit Empowerment Offers */}
      <CreditPrograms hideHeader className="bg-brand-navy/[0.04]" cardBg="bg-white" />

      {/* Bundle Offers */}
      <BundlesSection />

      {/* ── DISCLAIMER ───────────────────────────────────────────────── */}
      <section
        aria-label="Educational disclaimer"
        className="courses-disclaimer-section bg-brand-gold py-5 px-4"
      >
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-8 h-px bg-brand-burgundy/25 mx-auto mb-4" aria-hidden="true" />
          <p className="text-brand-burgundy text-[10px] uppercase tracking-[0.2em] font-bold leading-relaxed">
            All courses and templates are for educational purposes only. Not legal
            advice. Not financial advice. Not a credit repair organization.
            Individual results vary and cannot be guaranteed.
          </p>
          <div className="w-8 h-px bg-brand-burgundy/25 mx-auto mt-4" aria-hidden="true" />
        </div>
      </section>
    </>
  );
}
