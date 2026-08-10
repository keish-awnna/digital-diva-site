"use client";

import React from "react";
import Link from "next/link";
import { useLenis } from "@studio-freight/react-lenis";
import { Reveal } from "../common/Reveal";
import { Button } from "../common/Button";

const stats = [
  { value: "$97", label: "Strategy session", href: "#legal-strategy-session" },
  { value: "$47", label: "Starter course", href: "#legal-debt-mastery" },
  { value: "$127", label: "Court walkthrough", href: "#legal-court-walkthrough" },
  { value: "$397", label: "Full coaching pkg", href: "#legal-coaching-program" },
];

export function LegalHero() {
  const lenis = useLenis();
  return (
    <section aria-label="Legal Empowerment Series hero" className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden bg-brand-burgundy">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-atmosphere opacity-90" />
      
      {/* Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-brand-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-brand-burgundy-light/20 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-brand-gold/5 border border-brand-gold/20 text-brand-gold-light text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-6">
              <span aria-hidden="true">⚖</span> Legal Empowerment Series™
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white mb-6">
              Know your rights.
              <br />
              <span className="italic text-brand-gold-light">
                Own your case.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-sans text-2xl md:text-3xl uppercase tracking-[0.2em] font-bold text-brand-gold-light mb-8 leading-tight">
              Knowledge is Power. <br />
              Access is the Mission.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-brand-cream/80 text-base md:text-lg leading-relaxed max-w-lg mb-10">
              Legal education, court process coaching, and debt defense strategy for self-represented individuals. I help everyday people understand the legal system, respond to lawsuits, and fight back against debt collectors — confidently and affordably.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="#legal-products" onClick={(e) => { e.preventDefault(); lenis?.scrollTo("#legal-products", { offset: -80 }); }}>
                See Legal Programs
              </Button>
              <Button variant="outline-light" size="lg" href="/contact">
                Book Strategy Session
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="hidden lg:block relative">
          <Reveal direction="right" delay={0.5}>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, i) => (
                <Link
                  key={i}
                  href={stat.href}
                  aria-label={`${stat.label} — ${stat.value}`}
                  onClick={(e) => {
                    e.preventDefault();
                    lenis?.scrollTo(stat.href, { offset: -80 });
                  }}
                  className="bg-brand-burgundy border-2 border-brand-gold/40 p-12 text-center rounded-sm shadow-2xl transition-all hover:scale-[1.05] hover:border-brand-gold/60 hover:shadow-brand-gold/10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold"
                >
                  <div className="font-serif text-5xl font-bold text-brand-gold-light mb-4">{stat.value}</div>
                  <div className="text-sm text-brand-cream/70 uppercase tracking-widest font-semibold">{stat.label}</div>
                </Link>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      
      {/* Scroll indicator or accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-gold/50 to-transparent" />
    </section>
  );
}
