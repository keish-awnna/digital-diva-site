import { Button } from "@/components/common/Button";
import Link from "next/link";
import { ProcessSection } from "@/components/common/ProcessSection";
import { ScopeSection } from "@/components/legal/ScopeSection";
import { AboutVeeSection } from "@/components/common/AboutVeeSection";
import { Reveal } from "@/components/common/Reveal";
import { AudienceSection } from "@/components/common/AudienceSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Diva Academy By Vee™ | Legal & Credit Empowerment",
  description: "Empowering self-represented litigants and everyday individuals with the education to navigate legal and credit systems with confidence.",
};

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="hero-section relative min-h-screen lg:min-h-[95vh] flex items-center bg-atmosphere overflow-hidden pt-32 pb-24">
        {/* Artisan Lighting Element */}
        <div className="absolute top-0 left-1/4 w-200 h-200 bg-brand-burgundy-light/20 blur-[150px] rounded-full pointer-events-none" />
        
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-brand-burgundy-light/20 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-brand-gold/5 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <Reveal className="text-white" direction="up" duration={1.2}>
            <div className="inline-flex items-center px-4 py-1.5 bg-brand-gold/5 border border-brand-gold/20 rounded-full mb-8">
              <span className="text-brand-gold-light text-[10px] uppercase tracking-[0.4em] font-sans font-bold">
                Welcome to the Academy
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl font-serif mb-10 leading-[1.05] tracking-tight">
              Confidence is <br />
              <span className="italic text-brand-gold-light">
                Built Here.
              </span>
            </h1>
            
            <p className="text-2xl md:text-3xl font-sans font-bold uppercase tracking-[0.2em] text-brand-gold-light mb-12 leading-tight">
              Knowledge is Power. <br />
              Access is the Mission.
            </p>

            <div className="flex flex-col items-start gap-4">
              <Button variant="primary" size="lg" className="px-10 whitespace-nowrap min-w-70">
                Start Your Legal Journey
              </Button>
              <Button variant="credit" size="lg" className="px-10 whitespace-nowrap min-w-70">
                Start Your Credit Journey
              </Button>
            </div>
          </Reveal>

          <div className="relative">
            <Reveal direction="up" delay={0.4} duration={1.5} distance={50}>
              <div className="relative z-10 aspect-4/5 w-full max-w-125 lg:max-w-none ml-auto overflow-hidden rounded-sm ring-1 ring-brand-gold/30 p-2 bg-brand-gold/5">
                <div className="w-full h-full bg-brand-burgundy-light/30 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-linear-to-t from-brand-burgundy via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 flex items-center justify-center text-brand-gold/10 text-[12vw] font-serif italic select-none">
                    Vee
                  </div>
                  
                  {/* Logo Placeholder - Overlapping bottom-left */}
                  <div className="absolute -bottom-6 -left-6 w-24 h-24 z-20 flex items-center justify-center">
                    <div className="w-full h-full border border-brand-gold/40 rounded-full flex items-center justify-center backdrop-blur-md bg-brand-burgundy/20">
                      <div className="w-[85%] h-[85%] border border-brand-gold/20 rounded-full flex items-center justify-center">
                        <span className="text-brand-gold font-serif italic text-xl select-none opacity-80">
                          DD
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            
            {/* Background Decorative Frame */}
            <div className="absolute top-12 -right-8 w-full h-full border border-brand-gold/10 -z-10 rounded-sm" />
          </div>
        </div>
      </section>

      {/* Mandatory Disclaimer Banner */}
      <div className="bg-brand-burgundy py-4 border-y border-brand-gold/20 relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-brand-gold-light text-xs md:text-sm font-sans tracking-[0.15em] uppercase font-bold">
            Digital Diva Academy is an educational platform, not a law firm.
          </p>
        </div>
      </div>

      {/* Pathway Overview Section Starts Immediately After (StatRow Removed) */}
      <section className="pathway-overview py-32 bg-brand-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-20" direction="up">
            <h2 className="text-brand-gold font-sans uppercase tracking-[0.3em] text-xs font-bold mb-4">
              Your Journey
            </h2>
            <h3 className="text-4xl md:text-5xl font-serif text-brand-burgundy mb-6 italic">
              Simple Steps to Big Changes
            </h3>
            <p className="text-lg text-brand-burgundy/70 font-sans max-w-2xl mx-auto">
              I&apos;ve broken these complex systems down into two main paths. 
              Your starting point is just that—a starting point. Whether you&apos;re 
              handling a courtroom summons or rebuilding your credit profile, we&apos;ll 
              walk through it together.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Reveal direction="up" delay={0.1}>
              <div className="group relative bg-atmosphere-card h-full p-12 rounded-2xl shadow-xl overflow-hidden text-white transition-transform hover:-translate-y-2 duration-500 border border-white/5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <h3 className="text-brand-gold-light font-sans uppercase tracking-[0.2em] text-sm font-bold mb-6">
                  Path One
                </h3>
                <h4 className="text-3xl font-serif mb-6">
                  Legal Clarity Series
                </h4>
                <p className="text-brand-ivory/70 mb-8 leading-relaxed">
                  Being sued by a debt buyer is scary, but you don&apos;t have to 
                  face it without a plan. I&apos;ll show you how to organize your 
                  paperwork, understand the rules, and stand your ground with confidence.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Answering Your Summons",
                    "The Power of Arbitration",
                    "Keeping Your Files Organized",
                    "Understanding Court Rules",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-sans tracking-wide"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" fullWidth size="lg">
                  Explore Legal Empowerment
                </Button>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="group relative bg-atmosphere-navy h-full p-12 rounded-2xl shadow-xl overflow-hidden border border-brand-gold/20 text-white transition-transform hover:-translate-y-2 duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <h3 className="text-brand-gold-light/60 font-sans uppercase tracking-[0.2em] text-sm font-bold mb-6">
                  Path Two
                </h3>
                <h4 className="text-3xl font-serif mb-6 text-white">
                  Credit Confidence Series
                </h4>
                <p className="text-brand-cream/70 mb-8 leading-relaxed">
                  Your credit score shouldn&apos;t be a mystery. Learn how to 
                  read your own reports, spot the errors that are holding you 
                  back, and take the lead on your own restoration journey.
                </p>
                <ul className="space-y-4 mb-10 text-brand-cream/80">
                  {[
                    "Mastering Your Reports",
                    "Writing Smart Letters",
                    "Building Solid Foundations",
                    "DIY Credit Success",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm font-sans tracking-wide"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold-light" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="primary" fullWidth size="lg">
                  Explore Credit Empowerment
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Audience Section - Who this is for */}
      <AudienceSection />

      {/* Process Section */}
      <ProcessSection />

      {/* Featured Offers Section */}
      <section className="featured-offers py-24 bg-white border-y border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <Reveal direction="up">
                <h2 className="text-brand-gold font-sans uppercase tracking-[0.3em] text-xs font-bold mb-4">
                  Featured Resources
                </h2>
                <h3 className="text-4xl font-serif text-brand-burgundy mb-4 italic">
                  Choose Your Starting Point
                </h3>
                <p className="text-lg text-brand-burgundy/70 leading-relaxed font-sans">
                  Browse our selection of courses and templates designed to
                  provide immediate clarity across our Legal & Credit Empowerment series.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Debt Defense Mastery™",
                category: "Legal Empowerment",
                desc: "Essential templates and educational guidance for responding to debt collection lawsuits and organizing your initial defense.",
                price: "$47",
                variant: "legal",
                cta: "Explore the Course"
              },
              {
                title: "Credit Mastery Blueprint™",
                category: "Credit Empowerment",
                desc: "Learn to read your reports, spot errors, and take the lead on your restoration journey with proven educational tools.",
                price: "$97",
                variant: "credit",
                cta: "Explore the Course"
              },
              {
                title: "Ultimate Empowerment Bundle™",
                category: "Legal + Credit",
                desc: "The complete education system covering both legal defense and credit restoration mastery at a bundled value.",
                price: "$147",
                featured: true,
                variant: "primary",
                cta: "View Bundle"
              },
            ].map((offer, i) => (
              <Reveal key={offer.title} direction="up" delay={i * 0.1}>
                <div
                  className={`h-full p-8 rounded-2xl border shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col relative overflow-hidden group ${
                    offer.featured
                      ? "bg-atmosphere-gold border-brand-gold-light/30"
                      : offer.variant === "credit"
                      ? "bg-atmosphere-navy border-brand-gold/20"
                      : offer.variant === "legal"
                      ? "bg-atmosphere-card border-brand-gold/20"
                      : "bg-white border-brand-gold/10"
                  }`}
                >
                  {/* Decorative orb — matches pathway card style */}
                  {!offer.featured && (
                    <div className="absolute top-0 right-0 w-28 h-28 bg-brand-gold/5 rounded-full -mr-14 -mt-14 group-hover:scale-150 transition-transform duration-700" />
                  )}
                  {offer.featured && (
                    <div className="absolute top-0 right-0 w-28 h-28 bg-brand-burgundy/10 rounded-full -mr-14 -mt-14 group-hover:scale-150 transition-transform duration-700" />
                  )}
                  {offer.featured && (
                    <div className="absolute top-0 right-0 bg-brand-burgundy text-brand-gold-light text-[9px] font-bold uppercase tracking-widest px-4 py-1 rounded-bl-lg z-10">
                      Best Value
                    </div>
                  )}
                  <div className={`text-[10px] font-bold uppercase tracking-widest mb-4 ${
                    offer.featured
                      ? "text-brand-burgundy/60"
                      : offer.variant === "credit" || offer.variant === "legal"
                      ? "text-brand-gold-light"
                      : "text-brand-gold"
                  }`}>
                    {offer.category}
                  </div>
                  <h4 className={`text-2xl font-serif mb-4 transition-colors ${
                    offer.featured
                      ? "text-brand-burgundy group-hover:text-brand-burgundy-light"
                      : offer.variant === "credit"
                      ? "text-brand-cream group-hover:text-brand-gold-light"
                      : offer.variant === "legal"
                      ? "text-white group-hover:text-brand-gold-light"
                      : "text-brand-burgundy group-hover:text-brand-gold"
                  }`}>
                    {offer.title}
                  </h4>
                  <p className={`text-sm mb-8 grow font-sans leading-relaxed ${
                    offer.featured
                      ? "text-brand-burgundy/70"
                      : offer.variant === "credit" || offer.variant === "legal"
                      ? "text-brand-cream/70"
                      : "text-brand-burgundy/60"
                  }`}>
                    {offer.desc}
                  </p>
                  <div className="flex items-baseline gap-2 mb-8">
                    <span className={`text-3xl font-serif ${
                      offer.featured
                        ? "text-brand-burgundy"
                        : offer.variant === "credit" || offer.variant === "legal"
                        ? "text-brand-cream"
                        : "text-brand-burgundy"
                    }`}>{offer.price}</span>
                    <span className={`text-[10px] uppercase font-bold tracking-widest ${
                      offer.featured
                        ? "text-brand-burgundy/50"
                        : offer.variant === "credit" || offer.variant === "legal"
                        ? "text-brand-cream/40"
                        : "text-brand-burgundy/40"
                    }`}>Enrollment Fee</span>
                  </div>
                  <Button
                    variant={
                      offer.featured
                        ? "secondary"
                        : offer.variant === "credit"
                        ? "outline-light"
                        : "primary"
                    }
                    fullWidth
                    size="md"
                  >
                    {offer.cta}
                  </Button>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal direction="up" className="mt-16 text-center">
            <Link href="/courses">
              <Button variant="primary" size="lg" className="min-w-70">
                View All Courses & Bundles
              </Button>
            </Link>
            <p className="mt-6 text-brand-burgundy/40 text-[10px] uppercase tracking-widest font-bold">
              Save up to $71 when you bundle Legal and Credit series
            </p>
          </Reveal>
        </div>
      </section>

      {/* Scope Section */}
      <ScopeSection />

      {/* About Vee Section */}
      <AboutVeeSection />

      {/* Final CTA */}
      <section className="final-cta-section py-24 bg-atmosphere-bottom text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-brand-gold blur-[150px] rounded-full" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal direction="up">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Ready to take <br />
              <span className="italic text-brand-gold">
                Control of your Future?
              </span>
            </h2>
            <p className="text-xl text-brand-ivory/70 mb-12 font-serif italic">
              &quot;Empowerment begins with understanding. Join the Academy today
              and start your journey toward clarity.&quot;
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button variant="primary" size="lg" className="px-12">
                Enroll in a Course
              </Button>
              <Button variant="outline-light" size="lg" className="px-12">
                Contact for Coaching
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
