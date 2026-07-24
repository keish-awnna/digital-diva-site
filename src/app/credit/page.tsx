import React from "react";
import { Metadata } from "next";
import { CreditHero } from "@/components/credit/CreditHero";
import { CreditPrograms } from "@/components/credit/CreditPrograms";
import { ScopeSection } from "@/components/legal/ScopeSection";

export const metadata: Metadata = {
  title: "Credit Empowerment Series™ | Digital Diva Academy By Vee™",
  description:
    "Credit education across the full spectrum — from understanding your score to disputing errors and building credit strategically.",
};

export default function CreditPage() {
  return (
    <>
      <CreditHero />
      <CreditPrograms />
      <div className="bg-brand-ivory">
        <ScopeSection />
      </div>
    </>
  );
}
