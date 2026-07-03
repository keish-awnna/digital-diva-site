/**
 * SuiteDash Integration Configuration
 * 
 * Future destinations for CTAs and integration points.
 * All URLs are placeholders until the SuiteDash portal is configured.
 */
export const suiteDashConfig = {
  portalUrl: "https://portal.digitaldivaacademy.com",
  clientLogin: "#", // TODO: Replace with real SuiteDash login URL
  booking: "#",     // TODO: Replace with real SuiteDash booking URL
  legalCourse: "#",
  creditCourse: "#",
  templateStore: "#",
  monthlySupport: "#",
} as const;

export type SuiteDashConfig = typeof suiteDashConfig;
