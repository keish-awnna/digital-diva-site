export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Legal Empowerment", href: "/legal" },
  { name: "Credit Empowerment", href: "/credit" },
  { name: "Courses & Templates", href: "/offers" },
  { name: "About", href: "/about" },
] as const;

export const footerLinks = {
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
    { name: "Disclaimer", href: "/disclaimer" },
    { name: "Refund Policy", href: "/refund" },
  ],
  services: [
    { name: "Legal Education", href: "/legal" },
    { name: "Credit Education", href: "/credit" },
    { name: "Resources", href: "/offers" },
  ],
} as const;
