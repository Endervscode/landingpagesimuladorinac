"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./logo";

const navigation = [
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Modos", href: "#modos" },
  { label: "Resultados", href: "#resultados" },
  { label: "Preguntas", href: "#preguntas" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <div className="container site-header__inner">
        <Logo />

        <nav className="desktop-nav" aria-label="Navegación principal">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a
            className="button button--small button--primary desktop-cta"
            href="https://simuladorinac.pages.dev/app"
          >
            Entrar al simulador
          </a>

          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
            onClick={() => setOpen((current) => !current)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <div className={`mobile-panel ${open ? "is-open" : ""}`}>
        <nav aria-label="Navegación móvil">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}

          <a
            className="button button--primary"
            href="https://simuladorinac.pages.dev/app"
            onClick={() => setOpen(false)}
          >
            Entrar al simulador
          </a>
        </nav>
      </div>
    </header>
  );
}
