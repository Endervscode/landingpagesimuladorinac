"use client";

import { createTimeline, stagger } from "animejs";
import {
  Children,
  cloneElement,
  isValidElement,
  useEffect,
  useRef,
  type ReactElement,
  type ReactNode,
} from "react";

type RevealProps = {
  children: ReactNode;
  className?: string;
};

type ElementWithClassName = ReactElement<{
  className?: string;
}>;

export function Reveal({ children, className = "" }: RevealProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const items = root.querySelectorAll<HTMLElement>("[data-reveal-item]");

    if (prefersReducedMotion) {
      items.forEach((item) => {
        item.style.opacity = "1";
        item.style.transform = "none";
      });
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        createTimeline({
          defaults: {
            ease: "out(4)",
          },
        }).add(items, {
          opacity: [0, 1],
          translateY: [24, 0],
          duration: 620,
          delay: stagger(85),
        });

        observer.disconnect();
      },
      { threshold: 0.14 },
    );

    observer.observe(root);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={rootRef} className={className}>
      {Children.map(children, (child) => {
        if (!isValidElement(child)) return child;

        const element = child as ElementWithClassName;

        return cloneElement(element, {
          className: [element.props.className, "reveal-item"]
            .filter(Boolean)
            .join(" "),
          "data-reveal-item": "",
        } as { className: string });
      })}
    </div>
  );
}
