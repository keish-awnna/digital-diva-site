"use client";

import React from "react";
import { offers } from "@/content/offers";
import { OfferCard } from "../offers/OfferCard";
import { Reveal } from "../common/Reveal";

export function LegalPrograms() {
  const legalOffers = offers.filter((o) => o.category === "legal");

  return (
    <section id="legal-products" aria-label="Legal programs and courses" className="py-32 lg:py-40 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <Reveal>
              <div className="text-brand-burgundy/80 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
                Legal Empowerment Series™
                <div className="h-px w-8 bg-brand-burgundy/30" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-burgundy">
                Legal programs & courses.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-brand-burgundy/60 text-base md:text-lg font-light leading-relaxed">
              All services are educational and strategic. You make every decision — I give you the knowledge and process clarity to make them confidently. <span className="font-semibold text-brand-burgundy/80">Not legal advice.</span>
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:items-start lg:grid-cols-3 lg:items-stretch gap-x-6 gap-y-10">
          {legalOffers.map((offer, index) => {
            const isOuter = index % 3 !== 1;
            return (
              <div key={offer.id} id={offer.id} className={offer.id === "legal-coaching-program" ? "lg:mb-20" : isOuter ? "lg:pt-14 lg:flex lg:flex-col" : ""}>
                <Reveal delay={index * 0.1} className={isOuter ? "lg:grow lg:flex lg:flex-col" : ""}>
                  <OfferCard offer={offer} theme="legal" className={isOuter ? "lg:grow" : ""} />
                </Reveal>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
