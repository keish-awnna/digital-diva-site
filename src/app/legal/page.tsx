import React from "react";
import { Metadata } from "next";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalPrograms } from "@/components/legal/LegalPrograms";
import { ScopeSection } from "@/components/legal/ScopeSection";

export const metadata: Metadata = {
  title: "Legal Empowerment Series™ | Digital Diva Academy By Vee™",
  description:
    "Legal education, court process coaching, and debt defense strategy for self-represented individuals. Master your case with confidence.",
};

export default function LegalPage() {
  return (
    <>
      <main>
        <LegalHero />
        <LegalPrograms />
        <div className="bg-brand-ivory">
          <ScopeSection />
        </div>
      </main>
    </>
  );
}
