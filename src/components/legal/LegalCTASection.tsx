import { Scale } from "lucide-react";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/common/Button";

export function LegalCTASection() {
  return (
    <section
      aria-label="Get started with the Legal Empowerment Series"
      className="legal-cta-section py-32 lg:py-40 relative overflow-hidden bg-brand-burgundy"
    >
      {/* Atmosphere overlay */}
      <div className="absolute inset-0 bg-atmosphere-bottom opacity-90" aria-hidden="true" />

      {/* Decorative accents */}
      <div
        className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-gold/30 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-gold/20 to-transparent"
        aria-hidden="true"
      />
      <div
        className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-brand-gold/5 rounded-full blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <Reveal direction="up">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-brand-gold/5 border border-brand-gold/20 text-brand-gold-light text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-8">
            <Scale aria-hidden="true" className="w-3.5 h-3.5" /> Legal Empowerment Series
          </div>
        </Reveal>

        <Reveal delay={0.1} direction="up">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6 italic leading-[1.05] tracking-tight">
            You have more options<br className="hidden md:block" /> than you think.
          </h2>
        </Reveal>

        <Reveal delay={0.2} direction="up">
          <p className="text-brand-cream/70 text-lg leading-relaxed max-w-2xl mx-auto mb-12 font-light">
            Understanding how the process works is the first step toward
            navigating it. Whether you need a focused strategy session, a
            course to study at your own pace, or ongoing support throughout
            your case — there&apos;s a program built for exactly where you are right now.
          </p>
        </Reveal>

        <Reveal delay={0.3} direction="up">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {/* TODO: Connect this CTA to the approved SuiteDash booking destination. */}
            <Button variant="primary" size="lg" href="/contact">
              Book a Strategy Session
            </Button>
            <Button variant="outline-light" size="lg" href="#legal-products">
              See All Programs
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.4} direction="up">
          <p className="text-brand-cream/40 text-[11px] uppercase tracking-[0.2em] font-sans">
            All services are educational. Not legal advice. Not legal representation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
