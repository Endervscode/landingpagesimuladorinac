import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://simuladorinac.pages.dev"),
  title: {
    default: "EstudiExám | Simulador de examen INAC",
    template: "%s | EstudiExám",
  },
  description:
    "Prepárate para el examen teórico del INAC con preguntas por materia, simulacros cronometrados, repaso inteligente y estadísticas.",
  keywords: [
    "INAC",
    "simulador INAC",
    "examen aeronáutico",
    "tripulante de cabina",
    "TCP",
    "aviación Venezuela",
  ],
  openGraph: {
    title: "EstudiExám | Domina el examen teórico del INAC",
    description:
      "Practica con simulacros, detecta tus puntos débiles y llega preparado a tu examen.",
    type: "website",
    locale: "es_VE",
    images: [
      {
        url: "/og-cover.svg",
        width: 1200,
        height: 630,
        alt: "EstudiExám, simulador de examen INAC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EstudiExám | Simulador INAC",
    description: "Prepárate para aprobar con confianza.",
    images: ["/og-cover.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
