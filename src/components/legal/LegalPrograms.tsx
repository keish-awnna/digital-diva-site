"use client";

import React from "react";
import { offers } from "@/content/offers";
import { OfferCard } from "../offers/OfferCard";
import { Reveal } from "../common/Reveal";

export function LegalPrograms() {
  const legalOffers = offers.filter((o) => o.category === "legal");

  return (
    <section id="legal-products" className="py-32 lg:py-40 px-6 sm:px-12 bg-white">
      <div className="container mx-auto">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 items-start">
          {legalOffers.map((offer, index) => (
            <div key={offer.id} id={offer.id}>
              <Reveal delay={index * 0.1} className={index % 3 !== 1 ? "lg:mt-14" : ""}>
                <OfferCard offer={offer} theme="legal" />
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
