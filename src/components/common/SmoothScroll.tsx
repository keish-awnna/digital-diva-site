"use client";

import React, { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

// SmoothScroll creates a Lenis instance directly (bypassing ReactLenis) so we can
// attach a ResizeObserver to document.body. Whenever Next.js hydration or lazy content
// changes the page height, Lenis recalculates its scroll limit — preventing the
// scroll-stop bug that occurs when ReactLenis measures a stale page height
// during SSR hydration.
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Re-measure on every height change so Next.js hydration never clamps scroll.
    const observer = new ResizeObserver(() => {
      lenis.resize();
    });
    observer.observe(document.body);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

