import { Reveal } from "@/components/common/Reveal";

const stats = [
  { value: "1,400+", label: "Academic Enrollments" },
  { value: "100+", label: "Educational Templates" },
  { value: "500+", label: "Self-Reported Wins" },
  { value: "24/7", label: "Email Support Access" }
];

export function StatRow() {
  return (
    <div className="stat-row py-12 border-y border-white/5 bg-atmosphere relative overflow-hidden">
      {/* Subtle light trace */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} direction="up" delay={i * 0.1}>
              <div className="text-center group">
                <div className="text-3xl md:text-5xl font-serif text-brand-gold-light mb-2 group-hover:scale-105 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-brand-ivory/40 font-bold whitespace-nowrap">
                  {stat.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
