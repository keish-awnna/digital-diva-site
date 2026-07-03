export const siteConfig = {
  name: "Digital Diva Academy By Vee™",
  description: "Educational resources and coaching for legal process, debt defense, and credit empowerment.",
  url: "https://digitaldivaacademy.com",
  ogImage: "https://digitaldivaacademy.com/og.jpg",
  links: {
    instagram: "https://instagram.com/digitaldivaacademy",
    facebook: "https://facebook.com/digitaldivaacademy",
  },
} as const;

export type SiteConfig = typeof siteConfig;
