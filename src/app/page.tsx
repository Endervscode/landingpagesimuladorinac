import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { SimulatorModes } from "@/components/simulator-modes";
import { Stats } from "@/components/stats";
import { Faq } from "@/components/faq";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Features />
      <SimulatorModes />
      <Stats />
      <Faq />
      <Footer />
    </main>
  );
}
