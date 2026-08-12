"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { navigationLinks } from "@/config/navigation";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Close menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target as Node) &&
        !buttonRef.current?.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button — visible only on mobile */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden flex items-center justify-center w-10 h-10 text-white hover:text-brand-gold transition-colors"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <>
          {/* Overlay backdrop */}
          <div
            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
            aria-hidden="true"
          />

          {/* Menu Drawer */}
          <div
            ref={menuRef}
            id="mobile-menu"
            className="fixed top-20 right-0 bottom-0 w-72 bg-brand-burgundy text-white shadow-2xl z-50 lg:hidden overflow-y-auto border-l border-brand-gold/20"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="p-6 space-y-8">
              {/* Navigation Links */}
              <nav className="space-y-4">
                {navigationLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-sm font-sans uppercase tracking-widest hover:text-brand-gold transition-colors py-3 border-b border-brand-gold/10"
                    onClick={handleLinkClick}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              {/* Divider */}
              <div className="h-px bg-brand-gold/20" />

              {/* Login Link */}
              <Link
                href="/login"
                className="block text-sm font-sans uppercase tracking-widest hover:text-brand-gold transition-colors py-3"
                onClick={handleLinkClick}
              >
                Login
              </Link>

              {/* Book a Call CTA */}
              {/* TODO: Connect this CTA to the approved SuiteDash booking destination */}
              <Link
                href="/contact"
                className="inline-block w-full px-4 py-2 text-[10px] font-bold tracking-widest uppercase text-center transition-all duration-300 ease-out bg-brand-gold-light bg-gradient-to-br from-brand-gold to-brand-gold-light text-brand-burgundy shadow-lg hover:from-brand-gold-light hover:to-white hover:shadow-brand-gold/20 hover:-translate-y-1 rounded"
                onClick={handleLinkClick}
              >
                Book a Call
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
}
