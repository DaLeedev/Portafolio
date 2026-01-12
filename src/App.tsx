import { Navbar } from "./components/layouts/Navbar";
import { Footer } from "./components/layouts/Footer";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skill } from "./components/sections/Skill";
import { Certificados } from "./components/sections/Certificados";
import { Contact } from "./components/sections/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <main>
        <Hero />
        <Certificados />
        <Skill />
        <Projects/>
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
