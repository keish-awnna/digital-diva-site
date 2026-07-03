export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Choose Your Focus",
      description:
        "Select between Legal Empowerment or Credit Empowerment based on your current needs.",
    },
    {
      number: "02",
      title: "Access Education",
      description:
        "Enroll in our comprehensive courses or download expert-crafted templates designed for self-represented litigants.",
    },
    {
      number: "03",
      title: "Take Action",
      description:
        "Apply your new knowledge to organize your documents, understand the process, and take control of your situation.",
    },
  ];

  return (
    <section className="process-methodology-section py-24 bg-brand-burgundy text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-brand-ivory/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-brand-gold-light font-sans uppercase tracking-[0.3em] text-xs font-bold mb-4">
            The Methodology
          </h2>
          <h3 className="text-4xl md:text-5xl font-serif mb-6 italic">
            How the Academy Works
          </h3>
          <div className="w-24 h-1 bg-brand-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-0 w-full h-[1px] bg-brand-gold/20 -z-10" />

          {steps.map((step) => (
            <div key={step.number} className="relative text-center group">
              <div className="w-16 h-16 bg-brand-gold text-brand-burgundy rounded-full flex items-center justify-center font-serif text-2xl font-bold mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform duration-300 ring-8 ring-brand-burgundy">
                {step.number}
              </div>
              <h4 className="text-2xl font-serif mb-4 text-brand-gold-light">
                {step.title}
              </h4>
              <p className="text-brand-ivory/60 font-sans leading-relaxed text-sm max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
