import React from "react";
import { Metadata } from "next";
import { LegalHero } from "@/components/legal/LegalHero";
import { LegalAudienceSection } from "@/components/legal/LegalAudienceSection";
import { LegalPrograms } from "@/components/legal/LegalPrograms";
import { LegalProcessSection } from "@/components/legal/LegalProcessSection";
import { ScopeSection } from "@/components/legal/ScopeSection";
import { LegalCTASection } from "@/components/legal/LegalCTASection";

export const metadata: Metadata = {
  title: "Legal Empowerment Series™ | Digital Diva Academy By Vee™",
  description:
    "Legal education, court process coaching, and debt defense strategy for self-represented individuals. Master your case with confidence.",
};

export default function LegalPage() {
  return (
    <>
      <LegalHero />
      <LegalAudienceSection />
      <LegalPrograms />
      <LegalProcessSection />
      <div className="bg-brand-ivory">
        <ScopeSection />
      </div>
      <LegalCTASection />
    </>
  );
}
