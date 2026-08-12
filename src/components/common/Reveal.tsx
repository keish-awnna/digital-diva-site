"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";

interface RevealProps {
  children: ReactNode;
  direction?: "up" | "down" | "left" | "right" | "none";
  delay?: number;
  duration?: number;
  distance?: number;
  stagger?: number;
  className?: string;
}

/**
 * Reveal component handles sophisticated "Ivy League" entry animations.
 * Uses IntersectionObserver (not ScrollTrigger) so it works correctly
 * regardless of how many instances are on a page and without any
 * synchronization overhead with Lenis.
 */
export function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 1,
  distance = 30,
  stagger = 0,
  className = "",
}: RevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    // Respect the OS-level "Reduce Motion" preference — WCAG 2.3.3
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(stagger > 0 ? element.children : element, { opacity: 1, x: 0, y: 0 });
      return;
    }

    let x = 0;
    let y = 0;

    switch (direction) {
      case "up": y = distance; break;
      case "down": y = -distance; break;
      case "left": x = distance; break;
      case "right": x = -distance; break;
    }

    const target = stagger > 0 ? element.children : element;

    // Set the hidden initial state immediately so there's no flash of content
    gsap.set(target, { opacity: 0, x, y });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          gsap.to(target, {
            opacity: 1,
            x: 0,
            y: 0,
            duration,
            delay,
            stagger: stagger > 0 ? stagger : undefined,
            ease: "expo.out",
          });
          // Play once then stop observing
          observer.unobserve(element);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
      gsap.killTweensOf(target);
    };
  }, [direction, delay, duration, distance, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
