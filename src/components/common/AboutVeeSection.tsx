import { Button } from "@/components/common/Button";

export function AboutVeeSection() {
  return (
    <section className="about-vee-section py-24 bg-white relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full -mr-48 -mt-48 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-burgundy/5 rounded-full -ml-32 -mb-32 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 w-full relative">
            <div className="aspect-square bg-brand-ivory rounded-2xl overflow-hidden shadow-2xl skew-y-3 relative z-10">
              {/* Branding Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center text-brand-gold/20 text-9xl font-serif italic -skew-y-3">
                Vee
              </div>
            </div>
            {/* Decorative frames */}
            <div className="absolute inset-0 border-2 border-brand-gold rounded-2xl -skew-y-3 translate-x-4 translate-y-4 -z-10" />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-brand-gold font-sans uppercase tracking-[0.3em] text-xs font-bold mb-4">
              Meet the Founder
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-burgundy mb-8 italic italic">
              The Woman Behind the Wisdom
            </h3>
            <div className="space-y-6 text-brand-burgundy/70 font-sans leading-relaxed text-lg mb-10">
              <p>
                I founded Digital Diva Academy with a single mission: to
                demystify the systems that often keep good people down.
              </p>
              <p>
                After years of navigating the complex terrain of legal
                procedures and credit systems, I realized that the biggest
                barrier to entry isn&apos;t the law itself—it&apos;s the
                language.
              </p>
              <p>
                I don&apos;t practice law. I practice empowerment. My goal is to
                give you the tools, templates, and training to speak for
                yourself with authority and clarity.
              </p>
            </div>
            <Button variant="outline" size="lg">
              Read My Full Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
