import { Navbar } from "./layouts/Navbar";
import { Footer } from "./layouts/Footer";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skill } from "./sections/Skill";
import { Certificados } from "./sections/Certificados";
import { Contact } from "./sections/Contact";
import { personalInfo } from "./data/portfolioData"; // Importamos para el nombre

// Definimos los tipos para las props
interface PortfolioLayoutProps {
  profile: "web" | "data" | null;
}

export const PortfolioLayout = ({ profile }: PortfolioLayoutProps) => {
  // 1. PANTALLA DE BIENVENIDA (Fondo inicial cuando no hay selección)
  if (!profile) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
        {/* Este contenido queda de fondo mientras aparecen los botones del App.tsx */}
        <div className="text-center space-y-4 animate-in fade-in duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            Hola, soy{" "}
            <span className="text-purple-500">{personalInfo.name}</span>
          </h1>
          <p className="text-zinc-500 text-lg">
            Selecciona una ruta para comenzar la experiencia
          </p>
          <div className="mt-8 p-2 rounded-full bg-zinc-900/50 inline-block text-zinc-600 text-xs tracking-widest uppercase border border-zinc-800">
            Esperando input...
          </div>
        </div>
      </div>
    );
  }

  // 2. CONFIGURACIÓN DE TEMA SEGÚN PERFIL
  const isWeb = profile === "web";

  // Clases dinámicas para el contenedor principal
  const themeClasses = isWeb
    ? "bg-zinc-950 selection:bg-emerald-500 selection:text-white"
    : "bg-slate-950 selection:bg-cyan-500 selection:text-white";

  return (
    <div
      className={`min-h-screen text-white transition-colors duration-700 ${themeClasses}`}
    >
      {/* Navbar fija */}
      <Navbar />

      <main>
        {/* AQUÍ ESTÁ LA CLAVE:
           Pasamos 'profile' a cada sección para que sepan qué contenido mostrar
        */}

        <Hero currentProfile={profile} />

        <Certificados currentProfile={profile} />

        <Skill currentProfile={profile} />

        <Projects currentProfile={profile} />

        <Contact />
      </main>

      <Footer />
    </div>
  );
};
