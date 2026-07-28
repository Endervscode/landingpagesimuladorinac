import {
  BarChart3,
  BrainCircuit,
  Clock3,
  Layers3,
  RotateCcw,
  ShieldCheck,
} from "lucide-react";
import { Reveal } from "./reveal";

const features = [
  {
    icon: Layers3,
    title: "Banco por materia",
    description:
      "Concentra tu práctica en los temas que necesitas reforzar, sin perder tiempo.",
  },
  {
    icon: Clock3,
    title: "Presión de examen real",
    description:
      "Entrena con límite de tiempo y aprende a decidir con claridad bajo presión.",
  },
  {
    icon: RotateCcw,
    title: "Repaso de errores",
    description:
      "Convierte cada respuesta incorrecta en una oportunidad concreta de aprendizaje.",
  },
  {
    icon: BarChart3,
    title: "Progreso medible",
    description:
      "Observa precisión, evolución y rendimiento para saber cuándo estás preparado.",
  },
  {
    icon: BrainCircuit,
    title: "Estudio activo",
    description:
      "Practica recuperando información, una estrategia más eficaz que releer apuntes.",
  },
  {
    icon: ShieldCheck,
    title: "Preparación confiable",
    description:
      "Una experiencia ordenada y enfocada en los conocimientos de tu formación.",
  },
];

export function Features() {
  return (
    <section className="section section--light" id="como-funciona">
      <div className="container">
        <Reveal className="section-heading">
          <span className="section-kicker">PREPÁRATE CON PROPÓSITO</span>

          <h2>Todo lo necesario para llegar al examen con confianza.</h2>

          <p>
            Menos estudio pasivo. Más práctica, retroalimentación y decisiones
            basadas en tu rendimiento.
          </p>
        </Reveal>

        <Reveal className="features-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="feature-card" key={feature.title}>
                <span className="feature-card__icon">
                  <Icon />
                </span>

                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
