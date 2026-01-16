import { useState } from "react";
import { Navbar } from "./components/layouts/Navbar";
import { Footer } from "./components/layouts/Footer";
import { Hero } from "./components/sections/Hero";
import { Projects } from "./components/sections/Projects";
import { Skill } from "./components/sections/Skill";
import { Certificados } from "./components/sections/Certificados";
import { Contact } from "./components/sections/Contact";
import { Code2, BrainCircuit, ChevronDown } from "lucide-react";

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
            <div className="max-w-4xl mx-auto text-center animate-in fade-in zoom-in duration-500">
              <div className="mb-8 flex justify-center">
                <div
                  className="inline-flex flex-col items-center gap-1
                  rounded-xl bg-red-400 px-4 py-2
                  animate-bounce"
                >
                  <ChevronDown className="text-zinc-500" />
                  <p className="text-zinc-500 text-sm">Selecciona un Perfil</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-8 justify-center">
                <button
                  onClick={() => setProfile("web")}
                  className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-green-500 hover:shadow-[0_0_40px_rgba(34,197,94,0.3)] transition-all duration-300 w-full sm:w-72"
                >
                  <Code2 className="w-16 h-16 text-zinc-600 group-hover:text-green-500 mx-auto mb-4 transition-colors" />
                  <h3 className="text-2xl font-bold group-hover:text-green-400">
                    Desarrollo Web
                  </h3>
                  <p className="text-zinc-500 mt-2">
                    React, Laravel & Arquitectura
                  </p>
                </button>

                <button
                  onClick={() => setProfile("data")}
                  className="group p-8 rounded-2xl bg-zinc-900 border border-zinc-800 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-300 w-full sm:w-72"
                >
                  <BrainCircuit className="w-16 h-16 text-zinc-600 group-hover:text-blue-500 mx-auto mb-4 transition-colors" />
                  <h3 className="text-2xl font-bold group-hover:text-blue-400">
                    Ciencia de Datos
                  </h3>
                  <p className="text-zinc-500 mt-2">ML, Python & IA</p>
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
