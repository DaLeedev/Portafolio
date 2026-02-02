import { useState } from "react";
import { Navbar } from "./components/layouts/Navbar";
import { Footer } from "./components/layouts/Footer";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skill } from "./components/sections/Skill";
import { Certificados } from "./components/sections/Certificados";
import { Contact } from "./components/sections/Contact";
import { ChevronDown, ChevronLeft } from "lucide-react";
import { Icon } from "@iconify/react";

export default function App() {
  const [profile, setProfile] = useState<"ml" | "data" | null>(null);

  // Sobrescribimos las variables de tu CSS purple por las nuevas
  const getThemeStyles = () => {
    if (profile === "ml") {
      return {
        // Reemplazamos los purples por tonos VERDES (Emerald)
        "--color-purple-400": "oklch(.792 .209 151.711)",
        "--color-purple-500": "oklch(.723 .219 149.579)", // Color principal
        "--color-purple-600": "oklch(.627 .194 149.214)",
      } as React.CSSProperties;
    }
    if (profile === "data") {
      return {
        "--color-purple-300": "oklch(.820 .100 254.624)",
        "--color-purple-400": "oklch(.707 .165 254.624)",
        "--color-purple-500": "oklch(.623 .214 259.815)",
        "--color-purple-600": "oklch(.546 .245 262.881)",
      } as React.CSSProperties;
    }
    return {};
  };

  return (
    // Aplicamos los estilos dinámicos al contenedor principal
    <div
      className="min-h-screen bg-zinc-950 text-white transition-all duration-700 ease-in-out overflow-x-hidden"
      style={getThemeStyles()}
    >
      <Navbar />

      <main>
        <div
          key={profile ? "selected" : "none"}
          className="animate-fade-in-right duration-700"
        >
          <Hero currentProfile={profile} />
        </div>
        {/* Si NO hay perfil, mostramos botones grandes */}
        {!profile ? (
          <section
            className={`py-12 px-4 transition-all duration-700 animate-fade-in-up ${
              profile ? "opacity-100" : "min-h-[40vh]"
            }`}
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8 flex justify-center">
                <div className="inline-flex flex-col items-center gap-2">
                  {/* El icono con la animación de rebote */}
                  <ChevronDown className="text-purple-400 w-6 h-6 animate-bounce" />
                  <p className="text-zinc-500 text-sm font-medium tracking-wide uppercase">
                    Selecciona un perfil
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <button
                  onClick={() => setProfile("ml")}
                  className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-emerald-500/50 hover:bg-zinc-800/80 transition-all duration-500 w-full sm:w-80 cursor-pointer overflow-hidden flex flex-col items-center"
                >
                  {/* Título */}
                  <h3 className="text-xl font-semibold text-gray-200 group-hover:text-emerald-400 transition-colors duration-500 text-center leading-tight">
                    Machine Learning
                  </h3>

                  {/* Contenedor de Tecnologías: Python, TensorFlow, Scikit-learn, etc */}
                  <div className="flex justify-center items-center gap-5 mt-8 filter grayscale group-hover:grayscale-0 transition-all duration-500 ease-in-out">
                    <Icon
                      icon="logos:python"
                      className="w-7 h-7 transition-transform duration-200 group-hover:scale-110"
                    />
                    <Icon
                      icon="logos:tensorflow"
                      className="w-7 h-7 transition-transform duration-200 group-hover:scale-110"
                    />
                    <Icon
                      icon="simple-icons:scikitlearn"
                      className="w-7 h-7 transition-transform duration-200 group-hover:scale-110"
                    />
                    <Icon
                      icon="logos:pandas-icon"
                      className="w-7 h-7 transition-transform duration-200 group-hover:scale-110"
                    />
                    <Icon
                      icon="logos:jupyter"
                      className="w-7 h-7 transition-transform duration-200 group-hover:scale-110"
                    />
                    <Icon
                      icon="logos:numpy"
                      className="w-7 h-7 transition-transform duration-200 group-hover:scale-110"
                    />
                  </div>
                </button>

                <button
                  onClick={() => setProfile("data")}
                  className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800  transition-all duration-500 w-full sm:w-80 cursor-pointer overflow-hidden flex flex-col items-center"
                >
                  <h3 className="text-xl font-semibold text-gray-200 transition-colors duration-500 text-center leading-tight">
                    Ciencia de Datos, ML & IA Aplicada
                  </h3>

                  <div className="flex justify-center items-center gap-5 mt-8 filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                    <Icon
                      icon="logos:python"
                      className="w-7 h-7 transition-transform duration-200 group-hover:scale-110"
                    />
                    <Icon
                      icon="logos:jupyter"
                      className="w-7 h-7 transition-transform duration-200 group-hover:scale-110"
                    />
                    <Icon
                      icon="logos:azure"
                      className="w-9 h-7 transition-transform duration-200 scale-140 group-hover:scale-150"
                    />
                    <Icon
                      icon="logos:microsoft-power-bi"
                      className="w-7 h-7 transition-transform duration-200 scale-90 group-hover:scale-100"
                    />
                    <Icon
                      icon="logos:fastapi"
                      className="w-9 h-7 transition-transform duration-200 scale-140 group-hover:scale-150"
                    />
                  </div>
                </button>
              </div>
            </div>
          </section>
        ) : (
          <div className="animate-fade-in-up">
            <div className="flex justify-center mt-8 sticky top-20 z-10 border-zinc-800 pb-8">
              <button
                onClick={() => setProfile(null)}
                className="group px-6 py-2.5 bg-zinc-900/80 border border-purple-400/60 hover:border-purple-500/50 text-zinc-400 hover:text-purple-400 rounded-full transition-all duration-300 backdrop-blur-md flex items-center gap-3 shadow-2xl cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5 animate-bounce-left" />
                <span>Cambiar Perfil</span>
              </button>
            </div>

            <div className="animate-in slide-in-from-bottom-10 fade-in duration-1000">
              <Certificados currentProfile={profile} />
              <Skill currentProfile={profile} />
              <Projects currentProfile={profile} />
              <Contact />
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}
