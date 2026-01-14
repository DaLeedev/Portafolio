import { Navbar } from "./layouts/Navbar";
import { Footer } from "./layouts/Footer";
import { Hero } from "./sections/Hero";
import { Projects } from "./sections/Projects";
import { Skill } from "./sections/Skill";
import { Certificados } from "./sections/Certificados";
import { Contact } from "./sections/Contact";
import { Code2, BrainCircuit } from "lucide-react"; // Iconos para la bienvenida

// Este componente recibe 'profile' ('web' o 'data') y muestra la web completa
export const PortfolioLayout = ({
  profile,
}: {
  profile: "web" | "data" | null;
}) => {
  // 1. PANTALLA DE BIENVENIDA (Si no han elegido perfil)
  if (!profile) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 text-center">
          Hola, soy <span className="text-purple-500">Tu Nombre</span>
        </h1>
        <p className="text-zinc-400 text-xl mb-12">
          Selecciona tu experiencia:
        </p>
        {/* Los botones estarán en el App.tsx flotando, aquí solo mostramos el fondo */}
        <div className="animate-pulse text-zinc-600 text-sm">
          Esperando selección...
        </div>
      </div>
    );
  }

  // 2. CONFIGURACIÓN DE COLORES SEGÚN PERFIL
  const isWeb = profile === "web";
  const theme = {
    // Si es Web: Fondo Zinc oscuro. Si es Data: Fondo Slate (un poco más azulado)
    bg: isWeb ? "bg-zinc-950" : "bg-slate-950",
    selection: isWeb
      ? "selection:bg-emerald-500 selection:text-white"
      : "selection:bg-cyan-500 selection:text-white",
  };

  return (
    <div className={`min-h-screen ${theme.bg} text-white ${theme.selection}`}>
      {/* Pasamos el perfil a la Navbar para que cambie el color del logo */}
      <Navbar />

      <main>
        {/* Pasamos el perfil a las secciones que necesiten cambiar texto/color */}
        {/* Por ahora las renderizamos normal, luego les pasaremos props */}
        <Hero />
        <Certificados />
        <Skill />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};
