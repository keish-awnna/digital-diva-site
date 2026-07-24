import Link from "next/link";
import { footerLinks } from "@/config/navigation";
import { disclaimers } from "@/content/disclaimers";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-burgundy text-white pt-16 pb-8 border-t border-brand-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-serif italic text-brand-gold">
                Digital Diva Academy
              </span>
              <span className="block text-[10px] uppercase tracking-[0.2em] font-sans text-brand-gold-light mt-1">
                By Vee™
              </span>
            </Link>
            <p className="text-brand-ivory/70 max-w-sm mb-6 font-sans text-sm leading-relaxed">
              Empowering everyday people through legal and credit education. I 
              translate complex systems into plain language to help you navigate 
              the path forward with confidence.
            </p>
            <div className="text-[10px] text-brand-gold-light uppercase tracking-[0.3em] font-bold">
              Knowledge is Power. Access is the Mission.
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Services navigation">
            <h4 className="text-brand-gold font-serif text-lg mb-6">
              Services
            </h4>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Legal */}
          <nav aria-label="Legal navigation">
            <h4 className="text-brand-gold font-serif text-lg mb-6">Legal</h4>
            <ul className="space-y-4">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 border-t border-brand-ivory/10 text-center">
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-[10px] text-brand-ivory/50 leading-relaxed uppercase tracking-wider">
              {disclaimers.general}
            </p>
          </div>
          <p className="text-[10px] text-brand-gold-light/60 uppercase tracking-widest font-sans">
            &copy; {currentYear} Digital Diva Academy By Vee™. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
