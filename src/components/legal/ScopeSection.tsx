import { Check, X } from "lucide-react";

export function ScopeSection() {
  const does = [
    "Legal process education",
    "Debt defense framework",
    "Credit report education",
    "Document organization",
    "Self-representation coaching",
    "Educational templates",
  ];

  const doesNot = [
    "Legal advice or representation",
    "Filing court documents for you",
    "Communicating with courts/creditors",
    "Done-for-you credit repair",
    "Guaranteed court outcomes",
    "Financial or investment advice",
  ];

  return (
    <section className="service-scope-section py-24 bg-brand-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-brand-gold/10">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* What We Do */}
            <div className="p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-brand-gold/10">
              <h2 className="text-3xl font-serif text-brand-burgundy mb-8">
                Our Educational Scope
              </h2>
              <p className="text-brand-burgundy/60 mb-10 font-sans leading-relaxed">
                Digital Diva Academy provides the resources and knowledge you
                need to advocate for yourself.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {does.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-sans tracking-wide text-brand-burgundy/80"
                  >
                    <span className="flex-shrink-0 w-5 h-5 bg-green-50 rounded-full flex items-center justify-center">
                      <Check size={12} className="text-green-600" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Don't Do */}
            <div className="p-12 lg:p-16 bg-brand-burgundy/5">
              <h2 className="text-3xl font-serif text-brand-burgundy mb-8">
                Important Boundaries
              </h2>
              <p className="text-brand-burgundy/60 mb-10 font-sans leading-relaxed">
                To serve you best, it is important to understand what our
                services do not include.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {doesNot.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-sans tracking-wide text-brand-burgundy/80"
                  >
                    <span className="flex-shrink-0 w-5 h-5 bg-red-50 rounded-full flex items-center justify-center">
                      <X size={12} className="text-red-600" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-brand-burgundy text-brand-ivory p-6 text-center">
            <p className="text-[10px] uppercase tracking-[0.2em] font-semibold opacity-60">
              Digital Diva Academy is an educational platform, not a substitute
              for professional legal advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
