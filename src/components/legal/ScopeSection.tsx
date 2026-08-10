import { Check, X } from "lucide-react";
import { Reveal } from "../common/Reveal";

interface ScopeSectionProps {
  theme?: "legal" | "credit";
}

export function ScopeSection({ theme = "legal" }: ScopeSectionProps) {
  const does = [
    "Legal process and court procedure education",
    "Plain-language explanation of legal documents",
    "FICO scoring education and improvement strategies",
    "DIY credit dispute education and workflows",
    "Court procedures, deadlines, and rules overview",
    "Adaptive templates and educational guides",
    "Strategic process coaching and action planning",
  ];

  const doesNot = [
    "Legal advice for specific cases",
    "Legal representation in any capacity",
    "Filing court documents for you",
    "Communicating with courts or counsel",
    "Done-for-you credit repair services",
    "Guarantees of specific legal or credit outcomes",
    "Attorney-client relationships",
    "Practice of law (I am not an attorney)",
    "Operating as a credit repair organization",
  ];

  const isCredit = theme === "credit";
  const textPrimary   = isCredit ? "text-brand-navy"     : "text-brand-burgundy";
  const textMuted     = isCredit ? "text-brand-navy/70"  : "text-brand-burgundy/70";
  const textFaint     = isCredit ? "text-brand-navy/40"  : "text-brand-burgundy/40";
  const textStrong    = isCredit ? "text-brand-navy/90"  : "text-brand-burgundy/90";
  const borderMuted   = isCredit ? "border-brand-navy/10"  : "border-brand-burgundy/10";
  const bgFaint       = isCredit ? "bg-brand-navy/5"     : "bg-brand-burgundy/5";
  const bgFaintHover  = isCredit ? "group-hover:bg-brand-navy/10"  : "group-hover:bg-brand-burgundy/10";
  const bannerBg      = isCredit ? "bg-brand-navy"       : "bg-brand-burgundy";
  const cardShadow    = isCredit
    ? "shadow-[0_40px_100px_-20px_rgba(13,35,64,0.15)]"
    : "shadow-[0_40px_100px_-20px_rgba(28,4,8,0.15)]";

  return (
    <section aria-label="Educational scope and boundaries" className="service-scope-section py-32 lg:py-40 bg-brand-ivory relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Reveal direction="up" className="inline-block">
            <span className={`${textMuted} font-sans uppercase tracking-[0.3em] text-xs font-bold mb-4 block`}>
              Transparency & Scope
            </span>
            <h2 className={`text-4xl sm:text-5xl md:text-6xl font-serif ${textPrimary} mb-6 italic`}>
              What We Teach & What We Don&apos;t.
            </h2>
            <div className="w-24 h-px bg-brand-gold/30 mx-auto mb-6" />
            <p className={`max-w-xl mx-auto ${textMuted} font-sans leading-relaxed text-lg`}>
              Being completely clear about the scope of our educational support is non-negotiable.
            </p>
          </Reveal>
        </div>

        <div className={`bg-brand-ivory rounded-[2.5rem] ${cardShadow} overflow-hidden border border-brand-gold/10 relative`}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* What I Do */}
            <Reveal
              direction="up"
              className="p-8 sm:p-10 lg:p-16 bg-white border-b lg:border-b-0 lg:border-r border-brand-gold/10"
            >
              <h3 className={`${textMuted} font-sans uppercase tracking-[0.3em] text-xs font-bold mb-6`}>
                The Focus
              </h3>
              <h4 className={`text-4xl font-serif ${textPrimary} mb-8 italic`}>
                Our Educational Scope
              </h4>
              <p className={`${textMuted} mb-10 font-sans leading-relaxed text-lg`}>
                We provide the resources and knowledge you need to advocate for
                yourself with clarity and confidence.
              </p>
              <ul className="grid grid-cols-1 gap-6">
                {does.map((item) => (
                  <li
                    key={item}
                    className={`flex items-start gap-4 ${textPrimary} group`}
                  >
                    <span className="shrink-0 mt-1 w-6 h-6 border border-brand-gold/20 rounded-full flex items-center justify-center bg-brand-gold/5 group-hover:bg-brand-gold/10 transition-colors">
                      <Check size={14} className="text-brand-gold" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className={`text-lg font-sans ${textStrong} font-medium`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* What I Don't Do */}
            <Reveal
              direction="up"
              delay={0.2}
              className="p-8 sm:p-10 lg:p-16 bg-brand-ivory"
            >
              <h3 className={`${textMuted} font-sans uppercase tracking-[0.3em] text-xs font-bold mb-6`}>
                The Boundaries
              </h3>
              <h4 className={`text-4xl font-serif ${textPrimary} mb-8 italic`}>
                Educational Boundaries
              </h4>
              <p className={`${textMuted} mb-10 font-sans leading-relaxed text-lg`}>
                To serve you best, it is important to understand where our
                educational support begins and ends.
              </p>
              <ul className="grid grid-cols-1 gap-6">
                {doesNot.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 group"
                  >
                    <span className={`shrink-0 mt-1 w-6 h-6 border ${borderMuted} rounded-full flex items-center justify-center ${bgFaint} ${bgFaintHover} transition-colors`}>
                      <X size={14} className={textFaint} strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className={`text-lg font-sans ${textStrong} font-medium`}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className={`${bannerBg} text-brand-ivory py-4 text-center border-t border-brand-gold/10`}>
            <p className="text-[11px] uppercase tracking-[0.3em] font-sans font-bold opacity-80 px-6">
              Digital Diva Academy is an educational platform, not a substitute
              for professional legal advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
