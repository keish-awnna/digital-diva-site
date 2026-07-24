import { BundlesSection } from "@/components/offers/BundlesSection";
import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/common/Button";

export default function CoursesPage() {
  return (
    <main className="pt-24 min-h-screen bg-brand-ivory">
      {/* Header */}
      <section className="py-20 bg-white border-b border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <span className="text-brand-gold font-sans uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              The Academy Storefront
            </span>
            <h1 className="text-5xl md:text-7xl font-serif text-brand-burgundy mb-8 italic">
              Courses & Templates
            </h1>
            <p className="max-w-2xl mx-auto text-brand-burgundy/70 text-lg leading-relaxed font-sans italic">
              Strategic educational resources designed to give you the clarity and tools needed to navigate legal and credit processes with confidence.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Bundles - The section we moved from Home */}
      <BundlesSection />

      {/* Course Categories Placeholder */}
      <section className="py-24 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="up">
            <h2 className="text-3xl font-serif text-brand-burgundy mb-12 italic">
              Individual Series
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="p-12 bg-white rounded-3xl border border-brand-gold/10 shadow-sm">
                <h3 className="text-2xl font-serif text-brand-burgundy mb-4 italic">Legal Empowerment Series</h3>
                <p className="text-brand-burgundy/60 mb-8 font-sans leading-relaxed">
                  Focus on debt defense, court procedures, and self-representation education.
                </p>
                {/* TODO: List legal courses here */}
                <Button variant="primary" fullWidth>Explore Legal Resources</Button>
              </div>
              <div className="p-12 bg-white rounded-3xl border border-brand-gold/10 shadow-sm">
                <h3 className="text-2xl font-serif text-brand-burgundy mb-4 italic">Credit Empowerment Series</h3>
                <p className="text-brand-burgundy/60 mb-8 font-sans leading-relaxed">
                  Focus on FICO optimization, dispute education, and credit self-sufficiency.
                </p>
                {/* TODO: List credit courses here */}
                <Button variant="primary" fullWidth>Explore Credit Resources</Button>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
