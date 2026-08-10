import { Reveal } from "@/components/common/Reveal";

const steps = [
  {
    number: "01",
    title: "Identify Where You Are",
    description:
      "Are you facing a lawsuit? Responding to a summons? Already in an active case? Start by identifying your situation so you can find the course, session, or program that fits right now.",
  },
  {
    number: "02",
    title: "Learn the Rules That Apply",
    description:
      "Every legal situation has its own procedures, deadlines, and documents. Our courses and sessions break those rules down in plain language — so you can understand and follow them.",
  },
  {
    number: "03",
    title: "Move Forward with Clarity",
    description:
      "Use what you've learned to respond to documents, prepare for hearings, organize your case file, and make more informed decisions at every stage of your case.",
  },
];

export function LegalProcessSection() {
  return (
    <section
      aria-label="How the Legal Empowerment Series works"
      className="legal-process-section py-32 lg:py-40 bg-brand-burgundy overflow-hidden relative"
    >
      {/* Atmosphere overlay */}
      <div className="absolute inset-0 bg-atmosphere opacity-90" aria-hidden="true" />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-gold/20 to-transparent"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-20" direction="up">
          <div className="text-brand-gold-light font-sans uppercase tracking-[0.3em] text-xs font-bold mb-4">
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white mb-6 italic">
            A clear path through<br className="hidden md:block" /> uncertain territory.
          </h2>
          <div className="w-24 h-px bg-brand-gold/40 mx-auto" aria-hidden="true" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connecting line (desktop only) */}
          <div
            className="hidden md:block absolute top-[60px] left-0 w-full h-px bg-brand-gold/20"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <Reveal
              key={step.number}
              className="relative text-center group"
              direction="up"
              delay={i * 0.1}
            >
              <div className="w-16 h-16 bg-brand-gold text-brand-burgundy rounded-full flex items-center justify-center font-serif text-2xl font-bold mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300 ring-8 ring-brand-burgundy">
                <span aria-hidden="true">{step.number}</span>
              </div>
              <h3 className="text-xl font-serif mb-4 text-brand-gold-light">
                {step.title}
              </h3>
              <p className="text-brand-ivory/60 font-sans leading-relaxed text-sm max-w-xs mx-auto">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
