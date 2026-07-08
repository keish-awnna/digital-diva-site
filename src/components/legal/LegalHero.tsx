"use client";

import React from "react";
import { Reveal } from "../common/Reveal";
import { Button } from "../common/Button";

const stats = [
  { value: "$97", label: "Strategy session" },
  { value: "$47", label: "Starter course" },
  { value: "$127", label: "Court walkthrough" },
  { value: "$397", label: "Full coaching pkg" },
];

export function LegalHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 sm:px-12 overflow-hidden bg-brand-burgundy border-t-[var(--section-divider)]">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-atmosphere opacity-90" />
      
      {/* Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-brand-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-brand-burgundy-light/20 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-brand-burgundy-light/60 border border-brand-gold/30 text-brand-gold-light text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-6">
              ⚖ Legal Empowerment Series™
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-white mb-6">
              Know your rights.
              <br />
              <span className="text-brand-gold-light">
                Own your case.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-brand-gold-light/80 mb-8">
              KNOWLEDGE IS POWER. ACCESS IS THE MISSION.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-brand-cream/80 text-base md:text-lg leading-relaxed max-w-lg mb-10">
              Legal education, court process coaching, and debt defense strategy for self-represented individuals. I help everyday people understand the legal system, respond to lawsuits, and fight back against debt collectors — confidently and affordably.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="#legal-products">
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
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="bg-brand-burgundy border border-brand-gold/20 p-8 text-center rounded-sm shadow-2xl transition-transform hover:scale-[1.02]"
                >
                  <div className="font-serif text-3xl font-bold text-brand-gold-light mb-1">{stat.value}</div>
                  <div className="text-[10px] text-brand-cream/50 uppercase tracking-widest font-semibold">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
      
      {/* Scroll indicator or accent */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
    </section>
  );
}
