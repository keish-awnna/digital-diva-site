export type OfferCategory = "legal" | "credit" | "bundle";

export interface Offer {
  id: string;
  name: string;
  category: OfferCategory;
  price?: string;
  shortDescription: string;
  deliverables?: string[];
  format?: string;
  duration?: string;
  ctaLabel: string;
  href?: string;
  featured?: boolean;
  disclaimerNote?: string;
}

export interface NavItem {
  name: string;
  href: string;
}

export interface FooterLinks {
  legal: NavItem[];
  services: NavItem[];
}
