import { Metadata } from "next";
import { BookOpen, Heart, Shield } from "lucide-react";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";

export const metadata: Metadata = {
  title: "About | Digital Diva Academy By Vee™",
  description:
    "Meet Vee, the founder of Digital Diva Academy By Vee™ — an educational platform built to help everyday people understand legal and credit processes with confidence.",
};

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ───────────────────────────────────────────────────────── */}
      <section
        aria-label="About the founder"
        className="about-hero-section relative pt-32 sm:pt-40 pb-24 sm:pb-32 bg-brand-ivory border-b border-brand-gold/20 overflow-hidden"
      >
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(28,4,8,0.18) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />
        {/* Faint warmth */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_50%_38%,rgba(214,166,90,0.07)_0%,transparent_70%)]"
          aria-hidden="true"
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <Reveal direction="up">
            <div className="flex items-center justify-center gap-5 mb-10">
              <div className="h-px w-16 bg-brand-gold-text/30" aria-hidden="true" />
              <span className="text-brand-gold-text text-[10px] font-bold tracking-[0.3em] uppercase">
                Meet the Founder
              </span>
              <div className="h-px w-16 bg-brand-gold-text/30" aria-hidden="true" />
            </div>
          </Reveal>

          <Reveal direction="up" delay={0.1}>
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.0] tracking-tight text-brand-burgundy mb-8">
              Built on a belief that
              <br />
              <span className="italic text-brand-gold">knowledge changes everything.</span>
            </h1>
          </Reveal>

          <Reveal direction="up" delay={0.18}>
            <div className="w-20 h-px bg-brand-gold/35 mx-auto mb-8" aria-hidden="true" />
          </Reveal>

          <Reveal direction="up" delay={0.22}>
            <p className="text-brand-burgundy/65 text-lg sm:text-xl font-sans font-light leading-relaxed max-w-2xl mx-auto">
              Digital Diva Academy By Vee™ was created for people who felt
              left out of the conversation — the ones the system wasn&apos;t
              designed to help. This is an educational space built to change that.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── STORY ──────────────────────────────────────────────────────── */}
      <section
        aria-label="Founder story"
        className="about-story-section py-24 sm:py-32 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Image placeholder */}
            <Reveal direction="up">
              <div className="relative">
                <div className="aspect-[4/5] bg-brand-ivory rounded-sm overflow-hidden shadow-2xl skew-y-2 relative z-10">
                  {/* TODO: Replace with approved portrait photo of Vee */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 -skew-y-2">
                    <div className="text-brand-gold/20 text-9xl font-serif italic select-none">
                      Vee
                    </div>
                    <p className="text-brand-burgundy/30 text-xs uppercase tracking-[0.2em] font-bold">
                      [Photo placeholder]
                    </p>
                  </div>
                </div>
                {/* Decorative frames */}
                <div className="absolute inset-0 border-2 border-brand-gold/30 rounded-sm skew-y-2 translate-x-4 translate-y-4 -z-10" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-gold/5 rounded-full blur-2xl" />
              </div>
            </Reveal>

            {/* Bio copy */}
            <div>
              <Reveal direction="up" delay={0.1}>
                <div className="flex items-center gap-5 mb-8">
                  <div className="h-px w-12 bg-brand-gold-text/30" aria-hidden="true" />
                  <span className="text-brand-gold-text text-[10px] font-bold tracking-[0.3em] uppercase">
                    Her Story
                  </span>
                  <div className="h-px w-12 bg-brand-gold-text/30" aria-hidden="true" />
                </div>
              </Reveal>

              <Reveal direction="up" delay={0.15}>
                <h2 className="font-serif text-4xl sm:text-5xl text-brand-burgundy mb-8 italic leading-[1.1]">
                  Confidence is built through knowledge.
                </h2>
              </Reveal>

              {/* TODO: Replace lorem ipsum with approved bio copy from Vee */}
              <div className="space-y-5 text-brand-burgundy/65 text-base sm:text-lg font-sans font-light leading-relaxed">
                <Reveal direction="up" delay={0.2}>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco
                    laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Reveal>
                <Reveal direction="up" delay={0.25}>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                    cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </p>
                </Reveal>
                <Reveal direction="up" delay={0.3}>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    accusantium doloremque laudantium, totam rem aperiam, eaque
                    ipsa quae ab illo inventore veritatis et quasi architecto
                    beatae vitae dicta sunt explicabo.
                  </p>
                </Reveal>
              </div>

              <Reveal direction="up" delay={0.35}>
                <div className="mt-10 p-8 border-l-2 border-brand-gold bg-brand-ivory">
                  {/* TODO: Replace with an approved quote from Vee */}
                  <p className="font-serif italic text-brand-burgundy text-xl leading-relaxed">
                    &quot;The system isn&apos;t broken — it&apos;s just written in a
                    language they don&apos;t expect you to speak.&quot;
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ── MISSION & VALUES ───────────────────────────────────────────── */}
      <section
        aria-label="Mission and values"
        className="about-mission-section py-24 sm:py-32 bg-atmosphere text-white relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-gold/25 to-transparent" aria-hidden="true" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-gold/25 to-transparent" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal direction="up" className="text-center mb-20">
            <div className="flex items-center justify-center gap-5 mb-6">
              <div className="h-px w-16 bg-brand-gold-light/30" aria-hidden="true" />
              <span className="text-brand-gold-light text-[10px] font-bold tracking-[0.3em] uppercase">
                The Mission
              </span>
              <div className="h-px w-16 bg-brand-gold-light/30" aria-hidden="true" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl italic leading-[1.05] tracking-tight mb-6">
              Education first. Always.
            </h2>
            <p className="text-brand-cream/65 text-lg font-sans font-light max-w-2xl mx-auto leading-relaxed">
              Digital Diva Academy By Vee™ exists to close the knowledge gap
              between everyday people and the legal and credit systems that affect
              their lives every day.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <BookOpen aria-hidden="true" className="w-6 h-6" />,
                label: "Education",
                heading: "Knowledge is the foundation.",
                body: "Every course, template, and coaching session is built to demystify complex processes and put plain-language understanding directly in your hands.",
              },
              {
                icon: <Heart aria-hidden="true" className="w-6 h-6" />,
                label: "Empowerment",
                heading: "You are capable of this.",
                body: "This work is not about telling you what to do — it is about giving you the clarity and confidence to make your own informed decisions.",
              },
              {
                icon: <Shield aria-hidden="true" className="w-6 h-6" />,
                label: "Integrity",
                heading: "Honest about what we are.",
                body: "Digital Diva Academy is an educational platform. We do not provide legal advice, legal representation, or done-for-you credit repair services.",
              },
            ].map((pillar, i) => (
              <Reveal key={pillar.label} direction="up" delay={i * 0.12}>
                <div className="bg-white/5 border border-white/10 rounded-sm p-8 h-full">
                  <div className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold mb-6">
                    {pillar.icon}
                  </div>
                  <p className="text-brand-gold-light text-[10px] font-bold tracking-[0.2em] uppercase mb-3">
                    {pillar.label}
                  </p>
                  <h3 className="font-serif text-xl text-white mb-4 italic">
                    {pillar.heading}
                  </h3>
                  <p className="text-brand-cream/60 font-sans text-sm leading-relaxed font-light">
                    {pillar.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ─────────────────────────────────────────────── */}
      <section
        aria-label="What Digital Diva Academy offers"
        className="about-offerings-section py-24 sm:py-32 bg-brand-ivory relative overflow-hidden"
      >
        {/* Dot grid texture */}
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(28,4,8,0.18) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal direction="up" className="text-center mb-16">
            <div className="flex items-center justify-center gap-5 mb-6">
              <div className="h-px w-16 bg-brand-gold-text/30" aria-hidden="true" />
              <span className="text-brand-gold-text text-[10px] font-bold tracking-[0.3em] uppercase">
                What We Offer
              </span>
              <div className="h-px w-16 bg-brand-gold-text/30" aria-hidden="true" />
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl text-brand-burgundy italic leading-[1.1] mb-6">
              Two paths. One mission.
            </h2>
            <p className="text-brand-burgundy/65 text-lg font-sans font-light max-w-xl mx-auto leading-relaxed">
              Whether you&apos;re navigating the legal system or taking control of
              your credit journey, the academy has a path built for where you are.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Reveal direction="up" delay={0.1}>
              <div className="bg-atmosphere-card rounded-sm p-8 sm:p-10 h-full flex flex-col">
                <p className="text-brand-gold-light text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                  Path One
                </p>
                <h3 className="font-serif text-2xl text-white mb-4 italic">
                  Legal Empowerment Series™
                </h3>
                <p className="text-brand-cream/65 font-sans text-sm leading-relaxed font-light mb-8 grow">
                  Courses, templates, and coaching sessions designed to help you
                  understand court processes, debt defense, and how to navigate
                  the legal system as a self-represented litigant.
                </p>
                {/* TODO: Connect this CTA to the approved SuiteDash destination. */}
                <Button variant="primary" href="/legal" fullWidth>
                  Explore Legal Empowerment
                </Button>
              </div>
            </Reveal>

            <Reveal direction="up" delay={0.2}>
              <div className="bg-atmosphere-navy rounded-sm p-8 sm:p-10 h-full flex flex-col">
                <p className="text-brand-gold-light text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
                  Path Two
                </p>
                <h3 className="font-serif text-2xl text-white mb-4 italic">
                  Credit Empowerment Series™
                </h3>
                <p className="text-brand-cream/65 font-sans text-sm leading-relaxed font-light mb-8 grow">
                  Educational resources to help you understand your credit
                  reports, identify errors, and take informed, independent steps
                  toward credit self-sufficiency.
                </p>
                {/* TODO: Connect this CTA to the approved SuiteDash destination. */}
                <Button variant="credit" href="/credit" fullWidth>
                  Explore Credit Empowerment
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────────────────────────── */}
      <section
        aria-label="Get started"
        className="about-cta-section bg-brand-gold py-12 px-4"
      >
        <div className="max-w-3xl mx-auto text-center">
          <Reveal direction="up">
            <h2 className="font-serif text-3xl sm:text-4xl text-brand-burgundy mb-4 italic">
              Ready to take your next step?
            </h2>
            <p className="text-brand-burgundy/70 font-sans text-base mb-8 leading-relaxed">
              Browse the courses and templates, or reach out with questions.
              Every journey starts with one decision to learn more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* TODO: Connect this CTA to the approved SuiteDash destination. */}
              <Button variant="secondary" size="lg" href="/courses">
                Browse All Courses
              </Button>
              <Button variant="secondary" size="lg" href="/contact">
                Get in Touch
              </Button>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
