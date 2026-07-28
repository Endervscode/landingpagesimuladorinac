"use client";

import { useState } from "react";
import {
  BarChart3,
  BookOpen,
  Check,
  ChevronRight,
  Clock3,
  LayoutDashboard,
  Plane,
  RotateCcw,
  Settings,
  Target,
} from "lucide-react";

const answers = [
  "La autoridad aeronáutica del Estado",
  "El comandante de la aeronave",
  "El explotador del aeropuerto",
  "El servicio de tránsito aéreo",
];

export function AppPreview() {
  const [selected, setSelected] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);

  const chooseAnswer = (index: number) => {
    if (completed) return;

    setSelected(index);
    setCompleted(true);
  };

  const reset = () => {
    setSelected(null);
    setCompleted(false);
  };

  return (
    <div className="app-showcase">
      <div className="app-showcase__glow" />

      <div className="app-window">
        <div className="app-window__topbar">
          <div className="window-controls" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>

          <div className="app-address">
            <span className="app-address__lock">●</span>
            simuladorinac.pages.dev/app
          </div>

          <div className="topbar-status">
            <span>Sesión activa</span>
          </div>
        </div>

        <div className="simulator-shell">
          <aside className="simulator-sidebar">
            <div className="simulator-logo">
              <span>
                <Plane size={15} />
              </span>
              EstudiExám
            </div>

            <div className="sidebar-label">PREPARACIÓN</div>

            <nav aria-label="Navegación de demostración">
              <button type="button">
                <LayoutDashboard />
                <span>Resumen</span>
              </button>

              <button type="button" className="is-active">
                <Target />
                <span>Simulador</span>
              </button>

              <button type="button">
                <BookOpen />
                <span>Materias</span>
              </button>

              <button type="button">
                <BarChart3 />
                <span>Estadísticas</span>
              </button>
            </nav>

            <div className="sidebar-progress">
              <div className="sidebar-progress__title">
                <span>Meta semanal</span>
                <strong>72%</strong>
              </div>

              <div className="mini-progress">
                <span />
              </div>

              <small>18 de 25 sesiones</small>
            </div>

            <button className="sidebar-settings" type="button">
              <Settings />
              <span>Configuración</span>
            </button>
          </aside>

          <section className="simulator-main">
            <div className="simulator-heading">
              <div>
                <span className="simulator-eyebrow">SIMULACRO TCP</span>
                <h2>Normativa aeronáutica</h2>
              </div>

              <div className="timer">
                <Clock3 />
                <span>18:42</span>
              </div>
            </div>

            <div className="question-progress">
              <div>
                <span>Pregunta 12 de 30</span>
                <span>40% completado</span>
              </div>

              <div className="question-progress__track">
                <span />
              </div>
            </div>

            <article className="question-card">
              <div className="question-card__meta">
                <span className="category-pill">OACI · Anexo 1</span>
                <span>Dificultad media</span>
              </div>

              <h3>
                ¿Quién es responsable de garantizar que una aeronave opere de
                acuerdo con la reglamentación vigente?
              </h3>

              <div className="answer-list">
                {answers.map((answer, index) => {
                  const isCorrect = index === 1;
                  const isSelected = selected === index;

                  const stateClass = completed
                    ? isCorrect
                      ? "is-correct"
                      : isSelected
                        ? "is-incorrect"
                        : ""
                    : isSelected
                      ? "is-selected"
                      : "";

                  return (
                    <button
                      key={answer}
                      type="button"
                      className={`answer-option ${stateClass}`}
                      onClick={() => chooseAnswer(index)}
                      disabled={completed}
                    >
                      <span className="answer-letter">
                        {String.fromCharCode(65 + index)}
                      </span>

                      <span className="answer-copy">{answer}</span>

                      {completed && isCorrect ? (
                        <span className="answer-result" aria-label="Correcta">
                          <Check />
                        </span>
                      ) : null}
                    </button>
                  );
                })}
              </div>

              {completed ? (
                <div
                  className={`feedback ${
                    selected === 1 ? "feedback--correct" : "feedback--incorrect"
                  }`}
                  aria-live="polite"
                >
                  <div>
                    <strong>
                      {selected === 1
                        ? "¡Respuesta correcta!"
                        : "La respuesta correcta es la opción B."}
                    </strong>

                    <span>
                      El comandante conserva la responsabilidad final sobre la
                      operación segura y reglamentaria de la aeronave.
                    </span>
                  </div>

                  <button type="button" onClick={reset} aria-label="Reintentar">
                    <RotateCcw />
                  </button>
                </div>
              ) : null}

              <div className="question-footer">
                <span>Selecciona una respuesta para continuar</span>

                <button
                  type="button"
                  className="next-question"
                  disabled={!completed}
                  onClick={reset}
                >
                  Siguiente
                  <ChevronRight />
                </button>
              </div>
            </article>
          </section>
        </div>
      </div>

      <div className="floating-card floating-card--score">
        <span className="floating-card__icon">
          <Target />
        </span>

        <div>
          <small>Precisión actual</small>
          <strong>87%</strong>
        </div>
      </div>

      <div className="floating-card floating-card--streak">
        <span className="streak-dot" />
        <div>
          <strong>7 días</strong>
          <small>racha de estudio</small>
        </div>
      </div>
    </div>
  );
}
