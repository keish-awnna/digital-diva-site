"use client";

import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

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
 * It uses a restrained fade-and-slide movement for a premium feel.
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

    let x = 0;
    let y = 0;

    switch (direction) {
      case "up": y = distance; break;
      case "down": y = -distance; break;
      case "left": x = distance; break;
      case "right": x = -distance; break;
    }

    const childrenArray = element.children;

    gsap.fromTo(
      stagger > 0 ? childrenArray : element,
      {
        opacity: 0,
        x: x,
        y: y,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: duration,
        delay: delay,
        stagger: stagger > 0 ? stagger : undefined,
        ease: "expo.out",
        scrollTrigger: {
          trigger: element,
          start: "top 85%", // Starts when element is 85% from top of viewport
          toggleActions: "play none none none", // Only plays once
        },
      }
    );
  }, [direction, delay, duration, distance, stagger]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}
