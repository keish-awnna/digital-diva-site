"use client";

import React from "react";
import { Offer } from "@/types";
import { Button } from "../common/Button";
import { Check } from "lucide-react";

interface OfferCardProps {
  offer: Offer;
  theme?: "legal" | "credit";
}

export function OfferCard({ offer, theme = "legal" }: OfferCardProps) {
  const isLegal = theme === "legal";
  const isFeatured = offer.featured;

  // Base styles for featured vs non-featured
  const cardClasses = isFeatured
    ? isLegal
      ? "bg-gradient-to-br from-[#1c0408] to-[#530c1e] border-2 border-brand-gold shadow-2xl"
      : "bg-gradient-to-br from-[#0D2340] to-[#1A3A6A] border-2 border-brand-gold shadow-2xl"
    : "bg-brand-ivory border border-brand-burgundy/10 shadow-sm";

  const titleClasses = isFeatured ? "text-white" : isLegal ? "text-brand-burgundy" : "text-brand-navy";
  const descClasses = isFeatured ? "text-brand-cream/75" : "text-brand-burgundy/60";
  const priceClasses = isFeatured ? "text-brand-gold-light" : isLegal ? "text-brand-burgundy" : "text-brand-navy";
  const unitClasses = isFeatured ? "text-brand-cream/60" : "text-brand-burgundy/50";
  
  const tierClasses = isFeatured
    ? isLegal 
      ? "bg-brand-burgundy-light text-brand-gold-light" 
      : "bg-brand-navy text-brand-gold-light"
    : isLegal
      ? "bg-brand-burgundy/5 text-brand-burgundy"
      : "bg-brand-navy/5 text-brand-navy";

  return (
    <div className={`relative flex flex-col rounded-xl p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group ${cardClasses}`}>
      {/* Accent bar on hover for non-featured */}
      {!isFeatured && (
        <div className={`absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${isLegal ? "bg-brand-burgundy" : "bg-brand-navy"}`} />
      )}

      {offer.tierLabel && (
        <div className="mb-4 flex">
          <span className={`px-3 py-1 rounded-full text-[9px] font-bold uppercase tracking-wider ${tierClasses}`}>
            {offer.tierLabel}
          </span>
        </div>
      )}

      <h3 className={`font-serif text-xl font-bold mb-3 ${titleClasses}`}>
        {offer.name}
      </h3>

      <p className={`text-sm leading-relaxed mb-6 font-light ${descClasses}`}>
        {offer.shortDescription}
      </p>

      {offer.deliverables && offer.deliverables.length > 0 && (
        <ul className="space-y-3 mb-8 flex-grow">
          {offer.deliverables.map((item, index) => (
            <li key={index} className="flex gap-3 text-sm items-start">
              <Check className={`w-3.5 h-3.5 mt-0.5 shrink-0 ${isFeatured ? "text-brand-gold" : isLegal ? "text-brand-burgundy" : "text-brand-navy"}`} />
              <span className={isFeatured ? "text-brand-cream/70" : "text-brand-burgundy/70"}>{item}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="pt-6 border-t border-black/5 dark:border-white/10 mt-auto">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <div className={`font-serif text-3xl font-bold ${priceClasses}`}>
              {offer.price}
            </div>
            {offer.priceUnit && (
              <div className={`text-[10px] font-medium uppercase tracking-tight ${unitClasses}`}>
                {offer.priceUnit}
              </div>
            )}
          </div>
          <Button 
            variant={isFeatured ? "primary" : isLegal ? "legal" : "credit"} 
            size="sm"
            href={offer.href || "/contact"}
            className={!isFeatured ? (isLegal ? "" : "") : ""}
          >
            {offer.ctaLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
