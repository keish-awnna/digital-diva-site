import Link from "next/link";
import { Button } from "@/components/common/Button";
import { navigationLinks } from "@/config/navigation";

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-brand-burgundy text-white border-b border-brand-gold/20 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="group flex flex-col items-center">
              <span className="text-2xl font-serif tracking-tighter leading-none group-hover:text-brand-gold transition-colors italic">
                Digital Diva Academy
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] font-sans text-brand-gold-light">
                By Vee™
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigationLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-sans uppercase tracking-widest hover:text-brand-gold transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-sm font-sans uppercase tracking-widest hover:text-brand-gold transition-colors mr-4"
            >
              Login
            </Link>
            <Button variant="primary" size="sm">
              Book a Call
            </Button>
          </div>

          {/* Mobile menu button could go here */}
        </div>
      </div>
    </nav>
  );
}
