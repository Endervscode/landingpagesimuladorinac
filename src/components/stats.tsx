import { ArrowUpRight, Award, Gauge, Target } from "lucide-react";
import { Reveal } from "./reveal";

const topics = [
  { label: "Normativa aeronáutica", score: "92%", width: "92%" },
  { label: "Factores humanos", score: "86%", width: "86%" },
  { label: "Procedimientos", score: "78%", width: "78%" },
  { label: "Mercancías peligrosas", score: "71%", width: "71%" },
];

export function Stats() {
  return (
    <section className="section stats-section" id="resultados">
      <div className="container stats-layout">
        <Reveal className="stats-copy">
          <span className="section-kicker section-kicker--dark">
            DATOS QUE TE HACEN AVANZAR
          </span>

          <h2>No estudies a ciegas. Descubre dónde ganar puntos.</h2>

          <p>
            Tu panel convierte cada respuesta en señales útiles. Así puedes
            priorizar las materias que requieren atención y reconocer cuándo
            estás listo para presentar.
          </p>

          <div className="stats-benefits">
            <div>
              <span>
                <Target />
              </span>

              <div>
                <strong>Enfoque preciso</strong>
                <small>Identifica los temas de menor rendimiento.</small>
              </div>
            </div>

            <div>
              <span>
                <Gauge />
              </span>

              <div>
                <strong>Evolución visible</strong>
                <small>Compara resultados entre sesiones.</small>
              </div>
            </div>

            <div>
              <span>
                <Award />
              </span>

              <div>
                <strong>Preparación comprobable</strong>
                <small>Decide con datos cuándo hacer el examen.</small>
              </div>
            </div>
          </div>

          <a
            className="text-link"
            href="https://simuladorinac.pages.dev/app"
          >
            Consultar mi rendimiento
            <ArrowUpRight />
          </a>
        </Reveal>

        <Reveal className="analytics-panel">
          <div className="analytics-panel__header">
            <div>
              <span>RENDIMIENTO GENERAL</span>
              <h3>Panel de progreso</h3>
            </div>

            <select defaultValue="30" aria-label="Periodo de estadísticas">
              <option value="30">Últimos 30 días</option>
              <option value="7">Últimos 7 días</option>
              <option value="90">Últimos 90 días</option>
            </select>
          </div>

          <div className="analytics-summary">
            <div className="score-ring">
              <div>
                <strong>84%</strong>
                <span>Precisión</span>
              </div>
            </div>

            <div className="analytics-metrics">
              <div>
                <span>Preguntas respondidas</span>
                <strong>428</strong>
              </div>

              <div>
                <span>Mejora mensual</span>
                <strong className="positive">+12%</strong>
              </div>
            </div>
          </div>

          <div className="topic-results">
            <div className="topic-results__title">
              <strong>Rendimiento por materia</strong>
              <span>Promedio</span>
            </div>

            {topics.map((topic) => (
              <div className="topic-result" key={topic.label}>
                <div>
                  <span>{topic.label}</span>
                  <strong>{topic.score}</strong>
                </div>

                <div className="topic-result__track">
                  <span style={{ width: topic.width }} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
