"use client";

import React from "react";
import { Reveal } from "../common/Reveal";
import { Button } from "../common/Button";

const stats = [
  { value: "$47", label: "Starter kit" },
  { value: "$97", label: "Full blueprint" },
  { value: "7", label: "Modules" },
  { value: "30", label: "Lessons" },
];

export function CreditHero() {
  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-20 px-6 sm:px-12 overflow-hidden bg-brand-navy">
      {/* Background Atmosphere */}
      <div className="absolute inset-0 bg-atmosphere opacity-90" />
      
      {/* Decorative Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[20%] left-[10%] w-[40%] h-[40%] bg-brand-gold/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-blue-900/20 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 px-5 py-2 bg-blue-900/60 border border-brand-gold/30 text-brand-gold-light text-[10px] font-bold tracking-[0.2em] uppercase rounded-full mb-6">
              💳 Credit Empowerment Series™
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] text-white mb-6">
              Understand your credit.
              <br />
              <span className="text-brand-gold-light italic">
                Transform your future.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="font-sans text-xs uppercase tracking-[0.3em] font-bold text-brand-gold-light/80 mb-8">
              "YOUR CREDIT SCORE IS NOT YOUR DESTINY — IT&apos;S YOUR STARTING POINT."
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="text-brand-cream/80 text-base md:text-lg leading-relaxed max-w-lg mb-10">
              Credit education across the full spectrum — from understanding your
              score and reading your report, to disputing errors, building credit
              from scratch, optimizing your FICO score, and managing debt
              strategically.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg" href="#credit-products">
                See Credit Programs
              </Button>
              <Button variant="outline-light" size="lg" href="/contact">
                Book Credit Session
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
                  className="bg-brand-navy border border-brand-gold/20 p-8 text-center rounded-sm shadow-2xl transition-transform hover:scale-[1.02]"
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
      <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-brand-gold/50 to-transparent" />
    </section>
  );
}
