import { useState } from "react";
import { Navbar } from "./components/layouts/Navbar";
import { Footer } from "./components/layouts/Footer";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skill } from "./components/sections/Skill";
import { Certificados } from "./components/sections/Certificados";
import { Contact } from "./components/sections/Contact";
import {
  Code2,
  BrainCircuit,
  ChevronDown,
} from "lucide-react";
import { Icon } from "@iconify/react";

export default function App() {
  const [profile, setProfile] = useState<"web" | "data" | null>(null);

  // Sobrescribimos las variables de tu CSS purple por las nuevas
  const getThemeStyles = () => {
    if (profile === "web") {
      return {
        // Reemplazamos los purples por tonos VERDES (Emerald)
        "--color-purple-400": "oklch(.792 .209 151.711)",
        "--color-purple-500": "oklch(.723 .219 149.579)", // Color principal
        "--color-purple-600": "oklch(.627 .194 149.214)",
      } as React.CSSProperties;
    }
    if (profile === "data") {
      return {
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
      className="min-h-screen bg-zinc-950 text-white transition-all duration-700 ease-in-out"
      style={getThemeStyles()}
    >
      <Navbar />

      <main>
        <Hero currentProfile={profile} />
        <section
          className={`py-12 px-4 transition-all duration-700 ${
            profile ? "opacity-100" : "min-h-[40vh]"
          }`}
        >
          {/* Si NO hay perfil, mostramos botones grandes */}
          {!profile && (
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
                  onClick={() => setProfile("web")}
                  className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800  transition-all duration-500 w-full sm:w-80 cursor-pointer overflow-hidden flex flex-col items-center"
                >
                  {/* Título */}
                  <h3 className="text-xl font-semibold text-gray-200 transition-colors duration-500 text-center leading-tight">
                    Desarrollo Web Full Stack
                  </h3>

                  {/* Contenedor de Tecnologías: React, Laravel, Bootstrap, Sass */}
                  <div className="flex justify-center items-center gap-5 mt-8 filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out">
                    <Icon
                      icon="logos:laravel"
                      className="w-7 h-7 transition-transform duration-500 group-hover:scale-110"
                    />
                    <Icon
                      icon="logos:bootstrap"
                      className="w-7 h-7 transition-transform duration-500 scale-110 group-hover:scale-120"
                    />
                    <Icon
                      icon="logos:sass"
                      className="w-7 h-7 transition-transform duration-500 scale-110 group-hover:scale-120"
                    />
                    <Icon
                      icon="logos:javascript"
                      className="w-7 h-7 transition-transform duration-500 scale-85 group-hover:scale-100"
                    />
                    <Icon
                      icon="logos:react"
                      className="w-7 h-7 transition-transform duration-500 group-hover:scale-110"
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
                      className="w-7 h-7 transition-transform duration-500 group-hover:scale-110"
                    />
                    <Icon
                      icon="logos:jupyter"
                      className="w-7 h-7 transition-transform duration-500 group-hover:scale-110"
                    />
                    <Icon
                      icon="logos:microsoft-power-bi"
                      className="w-7 h-7 transition-transform duration-500 group-hover:scale-110"
                    />
                    <Icon
                      icon="logos:mysql"
                      className="w-7 h-7 transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </button>
              </div>
            </div>
          )}

          {profile && (
            <div className="flex justify-center mt-8 border-b border-zinc-800 pb-8">
              <button
                onClick={() => setProfile(null)}
                className="text-sm text-zinc-500 hover:text-white underline"
              >
                ← Cambiar Perfil
              </button>
            </div>
          )}
        </section>

        {profile && (
          <div className="animate-in slide-in-from-bottom-10 fade-in duration-1000">
            <Certificados currentProfile={profile} />
            <Skill currentProfile={profile} />
            <Projects currentProfile={profile} />
            <Contact />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
