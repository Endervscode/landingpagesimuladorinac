import {
  ArrowRight,
  BookMarked,
  Check,
  ClipboardCheck,
  GraduationCap,
} from "lucide-react";
import { Reveal } from "./reveal";

const modes = [
  {
    number: "01",
    icon: BookMarked,
    title: "Aprende por materia",
    description:
      "Escoge una asignatura y responde a tu ritmo. Recibe retroalimentación inmediata para fijar cada concepto.",
    items: ["Sin presión de tiempo", "Explicación inmediata", "Progreso por tema"],
    tone: "cyan",
  },
  {
    number: "02",
    icon: ClipboardCheck,
    title: "Evalúa tu nivel",
    description:
      "Completa una evaluación enfocada y descubre exactamente dónde están tus fortalezas y vacíos.",
    items: ["Resultado detallado", "Detección de puntos débiles", "Historial de intentos"],
    tone: "blue",
  },
  {
    number: "03",
    icon: GraduationCap,
    title: "Simula el examen",
    description:
      "Recrea una sesión completa, cronometrada y sin ayudas para medir tu preparación en condiciones reales.",
    items: ["Tiempo limitado", "Preguntas aleatorias", "Calificación final"],
    tone: "orange",
  },
];

export function SimulatorModes() {
  return (
    <section className="section modes-section" id="modos">
      <div className="modes-section__route" aria-hidden="true" />

      <div className="container">
        <Reveal className="section-heading section-heading--left">
          <span className="section-kicker">TRES FORMAS DE AVANZAR</span>

          <h2>Del primer repaso a tu simulacro final.</h2>

          <p>
            Elige el nivel de presión adecuado para cada etapa de tu
            preparación.
          </p>
        </Reveal>

        <Reveal className="modes-grid">
          {modes.map((mode) => {
            const Icon = mode.icon;

            return (
              <article
                className={`mode-card mode-card--${mode.tone}`}
                key={mode.title}
              >
                <div className="mode-card__top">
                  <span className="mode-card__number">{mode.number}</span>

                  <span className="mode-card__icon">
                    <Icon />
                  </span>
                </div>

                <h3>{mode.title}</h3>
                <p>{mode.description}</p>

                <ul>
                  {mode.items.map((item) => (
                    <li key={item}>
                      <Check />
                      {item}
                    </li>
                  ))}
                </ul>

                <a href="https://simuladorinac.pages.dev/app">
                  Probar este modo
                  <ArrowRight />
                </a>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
