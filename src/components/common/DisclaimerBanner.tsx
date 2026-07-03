"use client";

import { X } from "lucide-react";
import { useState } from "react";
import { disclaimers } from "@/content/disclaimers";

export function DisclaimerBanner() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="bg-brand-gold text-brand-burgundy px-4 py-2 relative z-[100] shadow-md border-b border-brand-gold-light">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <p className="text-[10px] sm:text-xs font-sans uppercase tracking-[0.15em] font-semibold text-center w-full">
          Disclaimer: {disclaimers.general}
        </p>
        <button
          onClick={() => setIsVisible(false)}
          className="p-1 hover:bg-brand-burgundy/10 rounded transition-colors"
          aria-label="Close disclaimer"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
