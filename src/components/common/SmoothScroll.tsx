"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import { ReactNode } from "react";

/**
 * SmoothScroll component provides the inertial scrolling effect
 * for a premium, weighted feel throughout the site.
 */
export function SmoothScroll({ children }: { children: any }) {
  return (
    <ReactLenis
      root
      options={{
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 2,
        infinite: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
