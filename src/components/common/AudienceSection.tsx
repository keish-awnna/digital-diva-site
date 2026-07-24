import { Reveal } from "@/components/common/Reveal";
import { Users, Scale, CreditCard, Shield } from "lucide-react";

const audiences = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Self-Represented Litigants",
    description: "If you're walking into a courtroom without an attorney, I'm here to make sure you don't walk in without a plan."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Individuals Facing Debt",
    description: "Whether it's an original creditor or a junk debt buyer, I help you understand the rules of the game so you can stand your ground."
  },
  {
    icon: <CreditCard className="w-6 h-6" />,
    title: "DIY Credit Builders",
    description: "For those who want to own their financial future. No 'done-for-you' secrets—just the education you need to lead yourself."
  },
  {
    icon: <Scale className="w-6 h-6" />,
    title: "The Empowerment Seekers",
    description: "Anyone who is tired of being intimidated by complex systems and is ready to learn the language of the law."
  }
];

export function AudienceSection() {
  return (
    <section className="audience-section py-24 bg-white border-b border-brand-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Reveal direction="up">
            <h2 className="text-brand-gold font-sans uppercase tracking-[0.3em] text-xs font-bold mb-4">
              Designed For You
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-burgundy mb-6 italic">
              Who the Programs are For
            </h3>
            <p className="text-lg text-brand-burgundy/60 font-sans max-w-2xl mx-auto">
              I empower everyday people with the tools they need to navigate systems that were never built with them in mind. If you&apos;re ready to learn, you&apos;re in the right place.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {audiences.map((item, i) => (
            <Reveal key={item.title} direction="up" delay={i * 0.1}>
              <div className="h-full p-8 rounded-2xl bg-brand-ivory border border-transparent hover:border-brand-gold/30 hover:bg-white transition-all duration-300 group">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-brand-gold shadow-sm mb-6 group-hover:scale-110 group-hover:bg-brand-burgundy group-hover:text-brand-gold-light transition-all duration-300">
                  <span aria-hidden="true">{item.icon}</span>
                </div>
                <h4 className="text-xl font-serif text-brand-burgundy mb-4">{item.title}</h4>
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
