import { Button } from "@/components/common/Button";
import Link from "next/link";
import { ProcessSection } from "@/components/common/ProcessSection";
import { ScopeSection } from "@/components/legal/ScopeSection";
import { AboutVeeSection } from "@/components/common/AboutVeeSection";
import { Reveal } from "@/components/common/Reveal";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="hero-section relative min-h-[90vh] flex items-center bg-brand-burgundy overflow-hidden pt-20">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-burgundy-light/30 to-transparent pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-gold/10 rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <Reveal className="text-white" direction="up" duration={1.2}>
            <div className="inline-flex items-center px-3 py-1 bg-brand-gold/10 border border-brand-gold/30 rounded mb-6">
              <span className="text-brand-gold-light text-[10px] uppercase tracking-[0.3em] font-sans font-semibold">
                Building Brighter Futures™
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-[1.1]">
              Knowledge is your <br />
              <span className="italic text-brand-gold-light">
                Greatest Asset.
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-cormorant italic text-brand-ivory/80 mb-10 max-w-xl leading-relaxed">
              &quot;Digital Diva Academy empowers self-represented litigants and
              everyday individuals with the education to navigate legal and
              credit systems with confidence.&quot;
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <Button variant="primary" size="lg" className="px-10">
                Explore Legal Series
              </Button>
              <Button variant="outline-light" size="lg" className="px-10">
                Credit Restoration
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-brand-burgundy bg-brand-gold/20 flex items-center justify-center text-[10px] font-bold text-brand-gold-light"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-sm font-sans text-brand-ivory/60 tracking-wide uppercase">
                Join our growing community
              </p>
            </div>
          </Reveal>

          <Reveal className="relative hidden lg:block" direction="none" delay={0.4} duration={1.5}>
            <div className="aspect-[4/5] bg-brand-burgundy-light rounded-2xl border border-brand-gold/20 shadow-2xl overflow-hidden relative group">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-burgundy via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center text-brand-gold/20 text-8xl font-serif italic">
                Vee
              </div>
            </div>
            <Reveal
              className="absolute -bottom-10 -left-10 bg-brand-ivory p-6 rounded-lg shadow-2xl border border-brand-gold/20 max-w-[280px]"
              direction="right"
              delay={0.8}
              distance={40}
            >
              <p className="text-brand-burgundy font-serif italic text-lg leading-snug mb-2 lowercase">
                &quot;The system isn&apos;t broken; it&apos;s just written in a
                language they don&apos;t expect you to speak.&quot;
              </p>
              <div className="h-0.5 w-12 bg-brand-gold" />
            </Reveal>
          </Reveal>
        </div>
      </section>

      {/* Pathway Overview */}
      <section className="pathway-overview py-24 bg-brand-ivory relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal className="text-center mb-20" direction="up">
            <h2 className="text-4xl md:text-5xl font-serif text-brand-burgundy mb-4">
              Choose Your Path to Empowerment
            </h2>
            <p className="text-lg text-brand-burgundy/70 font-sans max-w-2xl mx-auto">
              Our educational programs are designed to help you understand
              complex processes in plain language, whether you&apos;re defending
              a lawsuit or rebuilding your credit.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Reveal direction="up" delay={0.1}>
              <div className="group relative bg-brand-burgundy h-full p-12 rounded-2xl shadow-xl overflow-hidden text-white transition-transform hover:-translate-y-2 duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <h3 className="text-brand-gold-light font-sans uppercase tracking-[0.2em] text-sm font-bold mb-6">
                  Phase One
                </h3>
                <h4 className="text-3xl font-serif mb-6">
                  Legal Empowerment Series
                </h4>
                <p className="text-brand-ivory/70 mb-8 leading-relaxed">
                  From answering your first summons to understanding the motion to
                  compel arbitration, we teach you how to organize your defense
                  and represent yourself with confidence.
                </p>
                <ul className="space-y-4 mb-10">
                  {[
                    "Debt Defense Framework",
                    "Arbitration Strategies",
                    "Document Organization",
                    "Court Procedures",
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
                  Explore Legal Course
                </Button>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.3}>
              <div className="group relative bg-white h-full p-12 rounded-2xl shadow-xl overflow-hidden border border-brand-gold/10 text-brand-burgundy transition-transform hover:-translate-y-2 duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-burgundy/5 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700" />
                <h3 className="text-brand-burgundy/40 font-sans uppercase tracking-[0.2em] text-sm font-bold mb-6">
                  Phase Two
                </h3>
                <h4 className="text-3xl font-serif mb-6 text-brand-burgundy">
                  Credit Empowerment Series
                </h4>
                <p className="text-brand-burgundy/60 mb-8 leading-relaxed">
                  Stop being intimidated by your credit report. Learn how to
                  review, understand, and strategically address your credit
                  profile using our DIY educational framework.
                </p>
                <ul className="space-y-4 mb-10 text-brand-burgundy/80">
                  {[
                    "Report Analysis Mastery",
                    "Strategic Correspondence",
                    "Financial Foundation",
                    "DIY Credit Restoration",
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
                <Button variant="outline" fullWidth size="lg">
                  Explore Credit Course
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />

      {/* Featured Offers Section */}
      <section className="featured-offers py-24 bg-brand-cream border-y border-brand-gold/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-serif text-brand-burgundy mb-4">
                Start Your Education Today
              </h2>
              <p className="text-lg text-brand-burgundy/70 leading-relaxed">
                Browse our selection of courses and templates designed to
                provide immediate clarity.
              </p>
            </div>
            <Link
              href="/courses"
              className="text-brand-burgundy font-bold border-b-2 border-brand-gold hover:text-brand-gold transition-colors pb-1 uppercase tracking-widest text-sm"
            >
              View All Resources
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Arbitration Mastery",
                desc: "Learn how to effectively use arbitration clauses in your debt defense.",
              },
              {
                title: "Credit Report Auditor",
                desc: "A step-by-step guide to identifying errors on your credit report.",
              },
              {
                title: "The Solution Template",
                desc: "Our most requested template for responding to legal correspondence.",
              },
            ].map((offer, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl border border-brand-gold/10 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="h-48 bg-brand-ivory rounded-lg mb-6 flex items-center justify-center italic text-brand-gold/30 font-serif">
                  {offer.title}
                </div>
                <h5 className="text-xl font-serif mb-3 text-brand-burgundy">
                  {offer.title}
                </h5>
                <p className="text-sm text-brand-burgundy/60 mb-6 flex-grow">
                  {offer.desc}
                </p>
                <Button variant="outline" size="sm">
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Scope Section */}
      <ScopeSection />

      {/* About Vee Section */}
      <AboutVeeSection />

      {/* Final CTA */}
      <section className="final-cta-section py-24 bg-brand-burgundy text-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-gold via-transparent to-transparent" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal direction="up">
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Ready to take <br />
              <span className="italic text-brand-gold">
                Control of your Future?
              </span>
            </h2>
            <p className="text-xl text-brand-ivory/70 mb-12 font-cormorant italic">
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
