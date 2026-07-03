import { Reveal } from "../common/Reveal";
import { Button } from "../common/Button";
import { Star } from "lucide-react";

const bundles = [
  {
    name: "Legal Starter Bundle",
    contents: "Debt Defense Mastery™ + Legal Document Template Bundle",
    price: "$67",
    was: "$84",
    save: "$17",
    featured: false,
  },
  {
    name: "Credit Starter Bundle",
    contents: "Credit Repair Starter Kit™ + Credit Dispute Template Bundle",
    price: "$67",
    was: "$84",
    save: "$17",
    featured: false,
  },
  {
    name: "Dual Empowerment Bundle",
    contents: "Debt Defense Mastery™ + Credit Repair Starter Kit™ — legal AND credit education together",
    price: "$67",
    was: "$94",
    save: "$27",
    featured: true,
  },
  {
    name: "Complete Mastery Bundle",
    contents: "Debt Defense Mastery™ + Credit Mastery Blueprint™ (full 7-module course) — the complete system",
    price: "$127",
    was: "$144",
    save: "$17",
    featured: true,
  },
  {
    name: "Ultimate Empowerment Bundle",
    contents: "Debt Defense Mastery™ + Credit Mastery Blueprint™ + both template bundles — everything in one",
    price: "$147",
    was: "$218",
    save: "$71",
    featured: false,
  },
  {
    name: "Monthly All-Access",
    contents: "Legal async support + Credit monthly coaching — both series, one monthly subscription",
    price: "$167",
    was: "$194",
    save: "$27",
    featured: false,
  },
];

export function BundlesSection() {
  return (
    <section id="bundles" className="bundles-section py-24 bg-atmosphere-bottom relative overflow-hidden">
      {/* Decorative Light */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <Reveal direction="up">
            <span className="text-brand-gold font-sans uppercase tracking-[0.3em] text-xs font-bold mb-4 block">
              Best Value
            </span>
            <h2 className="text-5xl md:text-6xl font-serif text-brand-ivory mb-6 italic">
              Bundle & Save.
            </h2>
            <div className="w-24 h-px bg-brand-gold/30 mx-auto mb-6" />
            <p className="max-w-xl mx-auto text-brand-ivory/60 font-sans leading-relaxed text-lg italic">
              Combine both series for maximum impact. Every bundle includes instant access to all included courses and templates.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bundles.map((bundle, i) => (
            <Reveal key={bundle.name} direction="up" delay={i * 0.1}>
              <div
                className={`flex flex-col h-full bg-white/5 backdrop-blur-sm p-8 rounded-2xl border ${
                  bundle.featured
                    ? "border-brand-gold ring-1 ring-brand-gold/20"
                    : "border-white/10"
                } shadow-xl hover:shadow-2xl transition-all duration-300 group`}
              >
                {bundle.featured && (
                  <div className="flex items-center gap-2 mb-4">
                    <Star className="text-brand-gold fill-brand-gold" size={14} />
                    <span className="text-[10px] text-brand-gold font-bold uppercase tracking-widest">
                      Featured Bundle
                    </span>
                  </div>
                )}
                <h4 className="text-xl font-serif text-brand-ivory mb-3">
                  {bundle.name}
                </h4>
                <p className="text-sm text-brand-ivory/60 mb-8 font-sans leading-relaxed flex-grow italic">
                  {bundle.contents}
                </p>
                
                <div className="flex flex-col gap-4 mt-auto pt-6 border-t border-white/10">
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col">
                      <span className="text-brand-ivory/30 text-[10px] uppercase tracking-widest font-bold line-through">
                        {bundle.was}
                      </span>
                      <span className="text-3xl font-serif text-brand-gold">
                        {bundle.price}
                      </span>
                    </div>
                    <div className="bg-brand-gold/10 text-brand-gold text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-brand-gold/20">
                      Save {bundle.save}
                    </div>
                  </div>
                  
                  <Button
                    variant={bundle.featured ? "primary" : "outline-light"}
                    fullWidth
                    size="md"
                    className="font-bold tracking-widest text-[10px] uppercase"
                  >
                    Get Bundle
                  </Button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
