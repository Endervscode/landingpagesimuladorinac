import { Plane } from "lucide-react";

type LogoProps = {
  inverse?: boolean;
};

export function Logo({ inverse = false }: LogoProps) {
  return (
    <a
      href="#inicio"
      className={`brand ${inverse ? "brand--inverse" : ""}`}
      aria-label="EstudiExám, ir al inicio"
    >
      <span className="brand__icon" aria-hidden="true">
        <Plane size={18} strokeWidth={2.4} />
      </span>

      <span className="brand__text">
        Estudi<span>Exám</span>
      </span>
    </a>
  );
}
