"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { Reveal } from "./reveal";

const questions = [
  {
    question: "¿El simulador sustituye una escuela aeronáutica?",
    answer:
      "No. EstudiExám es una herramienta complementaria de práctica. La formación, certificación y orientación oficial deben provenir de instituciones y autoridades aeronáuticas competentes.",
  },
  {
    question: "¿Puedo practicar desde el teléfono?",
    answer:
      "Sí. La experiencia está diseñada para funcionar tanto en computadoras como en teléfonos y tabletas, permitiéndote aprovechar sesiones cortas de estudio.",
  },
  {
    question: "¿Qué ocurre cuando respondo incorrectamente?",
    answer:
      "La plataforma registra el resultado para que puedas identificar patrones, repasar tus errores y volver a practicar los temas que necesitan refuerzo.",
  },
  {
    question: "¿Los simulacros tienen tiempo límite?",
    answer:
      "Sí. El modo simulacro incorpora tiempo limitado para ayudarte a entrenar la administración del tiempo y la toma de decisiones bajo presión.",
  },
  {
    question: "¿El banco de preguntas se organiza por materias?",
    answer:
      "Sí. Puedes enfocar la práctica en asignaturas específicas y posteriormente combinar conocimientos mediante evaluaciones y simulacros.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section faq-section" id="preguntas">
      <div className="container faq-layout">
        <Reveal className="faq-intro">
          <span className="section-kicker">ANTES DE DESPEGAR</span>
          <h2>Preguntas frecuentes.</h2>
          <p>
            Lo esencial para comenzar una preparación más enfocada y
            consistente.
          </p>

          <a
            className="button button--primary"
            href="https://simuladorinac.pages.dev/app"
          >
            Abrir el simulador
          </a>
        </Reveal>

        <div className="faq-list">
          {questions.map((item, index) => {
            const isOpen = index === openIndex;

            return (
              <article
                className={`faq-item ${isOpen ? "is-open" : ""}`}
                key={item.question}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  {isOpen ? <Minus /> : <Plus />}
                </button>

                <div className="faq-answer">
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
