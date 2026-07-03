import { Reveal } from "@/components/common/Reveal";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Find Your Focus",
      description:
        "Choose the path that fits your current goals—whether that's standing your ground in court or rebuilding your credit.",
    },
    {
      number: "02",
      title: "Learn the Process",
      description:
        "Dive into easy-to-follow lessons and use my hand-crafted templates to take the guesswork out of your next steps.",
    },
    {
      number: "03",
      title: "Take an Informed Next Step",
      description:
        "Apply what you've learned to organize your documents, understand your rights, and move forward with clarity.",
    },
  ];

  return (
    <section className="process-methodology-section py-24 bg-atmosphere text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      
      {/* Artisan light beam */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-px h-64 bg-gradient-to-b from-brand-gold/0 via-brand-gold/30 to-brand-gold/0 hidden md:block" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-20" direction="up">
          <h2 className="text-brand-gold-light font-sans uppercase tracking-[0.3em] text-xs font-bold mb-4">
            Our Approach
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-6 italic">
            Simple, Clear, and Empowering
          </h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto" />
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-brand-gold/20 -z-10" />

          {steps.map((step, i) => (
            <Reveal key={step.number} className="relative text-center group" direction="up" delay={i * 0.1}>
              <div className="w-16 h-16 bg-brand-gold text-brand-burgundy rounded-full flex items-center justify-center font-serif text-2xl font-bold mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300 ring-8 ring-brand-burgundy">
                {step.number}
              </div>
              <h4 className="text-2xl font-serif mb-4 text-brand-gold-light">
                {step.title}
              </h4>
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
