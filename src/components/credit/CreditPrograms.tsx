"use client";

import React from "react";
import { offers } from "@/content/offers";
import { OfferCard } from "../offers/OfferCard";
import { Reveal } from "../common/Reveal";

export function CreditPrograms() {
  const creditOffers = offers.filter((o) => o.category === "credit");

  return (
    <section id="credit-products" className="py-24 px-6 sm:px-12 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end mb-16">
          <div>
            <Reveal>
              <div className="text-blue-900/80 text-[10px] font-bold tracking-[0.2em] uppercase mb-3 flex items-center gap-3">
                Credit Empowerment Series™
                <div className="h-px w-8 bg-blue-900/30" />
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-blue-900">
                Credit programs & courses.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-blue-900/60 text-base md:text-lg font-light leading-relaxed">
              All services are educational. Results vary based on individual credit
              history and cannot be guaranteed. <span className="font-semibold text-blue-900/80">Not financial advice. Not a credit
              repair organization.</span>
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {creditOffers.map((offer, index) => (
            <Reveal key={offer.id} delay={index * 0.1}>
              <OfferCard offer={offer} theme="credit" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
