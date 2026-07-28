"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { animate, createTimeline, stagger } from "animejs";
import { ArrowRight, CheckCircle2, Play } from "lucide-react";
import { AppPreview } from "./app-preview";

const AircraftScene = dynamic(
  () =>
    import("./aircraft-scene").then((module) => ({
      default: module.AircraftScene,
    })),
  {
    ssr: false,
    loading: () => null,
  },
);

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = heroRef.current;
    if (!root) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const revealElements = root.querySelectorAll<HTMLElement>(
      "[data-hero-reveal]",
    );

    if (reducedMotion) {
      revealElements.forEach((element) => {
        element.style.opacity = "1";
        element.style.transform = "none";
      });
      return;
    }

    createTimeline({
      defaults: {
        ease: "out(5)",
      },
    })
      .add(revealElements, {
        opacity: [0, 1],
        translateY: [28, 0],
        duration: 750,
        delay: stagger(95),
      })
      .add(
        ".app-showcase",
        {
          opacity: [0, 1],
          translateY: [42, 0],
          rotateX: [5, 0],
          duration: 900,
        },
        "-=490",
      );

    animate(".floating-card--score", {
      translateY: [0, -8],
      duration: 2600,
      direction: "alternate",
      loop: true,
      ease: "inOut(2)",
    });

    animate(".floating-card--streak", {
      translateY: [0, 7],
      duration: 3100,
      direction: "alternate",
      loop: true,
      ease: "inOut(2)",
    });
  }, []);

  return (
    <section ref={heroRef} className="hero" id="inicio">
      <div className="hero__sky" aria-hidden="true">
        <AircraftScene />
        <div className="cloud cloud--one" />
        <div className="cloud cloud--two" />
        <div className="cloud cloud--three" />
        <div className="flight-path" />
      </div>

      <div className="container hero__content">
        <div className="hero__copy">
          <div className="eyebrow" data-hero-reveal>
            <span className="eyebrow__pulse" />
            Preparación aeronáutica inteligente
          </div>

          <h1 data-hero-reveal>
            Domina el examen del INAC{" "}
            <span className="text-gradient">al primer intento.</span>
          </h1>

          <p className="hero__lead" data-hero-reveal>
            Practica como serás evaluado. Simulacros realistas, preguntas por
            materia y métricas claras para convertir cada sesión en progreso.
          </p>

          <div className="hero__actions" data-hero-reveal>
            <a
              className="button button--primary button--large"
              href="https://simuladorinac.pages.dev/app"
            >
              Empezar a practicar
              <ArrowRight />
            </a>

            <a className="button button--ghost button--large" href="#modos">
              <span className="play-icon">
                <Play fill="currentColor" />
              </span>
              Ver cómo funciona
            </a>
          </div>

          <div className="hero__trust" data-hero-reveal>
            <span>
              <CheckCircle2 />
              Práctica por materia
            </span>

            <span>
              <CheckCircle2 />
              Simulacros cronometrados
            </span>

            <span>
              <CheckCircle2 />
              Repaso de errores
            </span>
          </div>
        </div>

        <div className="hero__demo" aria-label="Demostración del simulador">
          <AppPreview />
        </div>
      </div>

      <div className="hero__bottom-fade" />
    </section>
  );
}
