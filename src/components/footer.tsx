import { ArrowRight, Instagram, Mail } from "lucide-react";
import { Logo } from "./logo";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__glow" aria-hidden="true" />

      <div className="container">
        <div className="footer-cta">
          <div>
            <span className="footer-kicker">TU PRÓXIMA META EMPIEZA AQUÍ</span>
            <h2>Practica hoy. Presenta con confianza.</h2>
            <p>
              Convierte cada sesión de estudio en un paso medible hacia tu
              certificación.
            </p>
          </div>

          <a
            className="button button--light button--large"
            href="https://simuladorinac.pages.dev/app"
          >
            Comenzar ahora
            <ArrowRight />
          </a>
        </div>

        <div className="footer-content">
          <div className="footer-brand">
            <Logo inverse />
            <p>
              Una experiencia de estudio activo para aspirantes y profesionales
              de la aviación.
            </p>
          </div>

          <div className="footer-column">
            <strong>Plataforma</strong>
            <a href="#como-funciona">Cómo funciona</a>
            <a href="#modos">Modos de práctica</a>
            <a href="#resultados">Estadísticas</a>
          </div>

          <div className="footer-column">
            <strong>Recursos</strong>
            <a href="#preguntas">Preguntas frecuentes</a>
            <a href="https://simuladorinac.pages.dev/app">Simulador</a>
            <a href="#inicio">Volver arriba</a>
          </div>

          <div className="footer-column">
            <strong>Contacto</strong>
            <a href="mailto:hola@estudiexam.com">
              <Mail />
              Correo
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram />
              Instagram
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} EstudiExám. Todos los derechos
            reservados.
          </span>

          <p>
            Plataforma educativa independiente. No representa ni sustituye al
            INAC.
          </p>
        </div>
      </div>
    </footer>
  );
}
