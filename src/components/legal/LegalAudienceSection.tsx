import { Reveal } from "@/components/common/Reveal";
import { FileText, Scale, Shield, BookOpen } from "lucide-react";

const audiences = [
  {
    icon: <FileText className="w-6 h-6" />,
    title: "You've Been Served",
    description:
      "You received a summons or complaint and don't know what it means or what happens next. You need to understand your timeline, your options, and how to respond without making it worse.",
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "You're Representing Yourself in Court",
    description:
      "You've chosen to represent yourself or couldn't afford an attorney. You need to understand court procedure, filing requirements, and how hearings actually work.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "A Debt Collector Is Coming for You",
    description:
      "You're being sued by a creditor, a debt buyer, or a collection agency. You need to know your rights, what rules they must follow, and how to respond to a debt collection lawsuit.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "You Want to Be Prepared",
    description:
      "You're not in court yet — but you want to understand the legal system before you need it. Building this knowledge now means you'll be ready when it matters most.",
  },
];

export function LegalAudienceSection() {
  return (
    <section
      aria-label="Who the Legal Empowerment Series is for"
      className="legal-audience-section py-32 lg:py-40 bg-brand-ivory"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Reveal direction="up">
            <div className="text-brand-burgundy/80 text-[10px] font-bold tracking-[0.2em] uppercase mb-4 flex items-center justify-center gap-3">
              Legal Empowerment Series™
              <div className="h-px w-8 bg-brand-burgundy/30" aria-hidden="true" />
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-brand-burgundy mb-6 italic">
              Built for people the system<br className="hidden md:block" /> wasn&apos;t designed to help.
            </h2>
            <p className="text-lg text-brand-burgundy/60 font-sans max-w-2xl mx-auto leading-relaxed">
              If you&apos;ve ever stared at a court document with no idea what to do
              next — you&apos;re exactly who this is for.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={i * 0.1}>
              <div className="h-full p-8 rounded-2xl bg-white border border-transparent hover:border-brand-gold/30 transition-all duration-300 group">
                <div className="w-12 h-12 bg-brand-ivory rounded-xl flex items-center justify-center text-brand-burgundy mb-6 group-hover:scale-110 group-hover:bg-brand-burgundy group-hover:text-brand-gold-light transition-all duration-300">
                  <span aria-hidden="true">{item.icon}</span>
                </div>
                <h3 className="text-lg font-serif font-bold text-brand-burgundy mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-brand-burgundy/60 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
