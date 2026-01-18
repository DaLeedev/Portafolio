import { personalInfo } from "../data/portfolioData";
import { User, Briefcase, HelpCircle } from "lucide-react";

interface HeroProps {
  currentProfile: "web" | "data" | null;
}

export const Hero = ({ currentProfile }: HeroProps) => {
  const activeData = currentProfile
    ? personalInfo.profiles[currentProfile]
    : null;

  // Lógica para el color del brillo (Glow) detrás de la foto
  // Si es Web -> Verde. Si es Data -> Azul. Si es nada -> Zinc/Gris.
  const glowColor =
    currentProfile === "web"
      ? "from-emerald-600 to-green-600"
      : currentProfile === "data"
      ? "from-blue-600 to-cyan-600"
      : "from-purple-700 to-pink-700";

  return (
    <section className="pt-32 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* --- COLUMNA IZQUIERDA: TEXTO --- */}
          <div className="animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-full mb-6">
              {currentProfile ? (
                <Briefcase className="w-4 h-4 text-purple-400" />
              ) : (
                <HelpCircle className="w-4 h-4 text-zinc-400" />
              )}
              <span className="text-zinc-300 text-sm">
                {currentProfile
                  ? "Disponible para trabajar"
                  : "Define el perfil a visualizar"}
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-linear-to-r from-white to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>

            <h2
              className={`text-2xl mb-4 font-medium h-8 transition-all duration-500 text-purple-400`}
            >
              {activeData ? activeData.role : "Ingeniero de Sistemas"}
            </h2>

            <p className="text-xl text-zinc-400 leading-relaxed mb-8 min-h-24">
              {activeData
                ? activeData.bio
                : "¿Qué versión de mi experiencia te interesa conocer hoy? Selecciona una opción abajo para revelar mi portafolio."}
            </p>

            {/* Botones (Solo visibles si hay perfil) */}
            {currentProfile && (
              <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
                <a
                  href="#proyectos"
                  className="px-8 py-3 bg-white text-black hover:bg-zinc-200 rounded-lg font-medium transition-colors"
                >
                  Ver Proyectos
                </a>
                <a
                  href="#contacto"
                  className="px-8 py-3 border border-zinc-700 hover:bg-zinc-800 rounded-lg font-medium transition-colors"
                >
                  Contáctame
                </a>
              </div>
            )}
          </div>

          <div className="flex justify-center lg:justify-end animate-in slide-in-from-right duration-700 ">
            {/* Contenedor: Define el tamaño para TODO (Brillo + Imagen) */}
            <div className="relative w-70 h-70 sm:w-112.5 sm:h-112.5 lg:w-90 lg:h-90 flex items-center justify-center">
              <div
                className={`absolute inset-12 bg-linear-to-r ${glowColor} rounded-full blur-[100px] group-hover:opacity-100 transition duration-1000 animate-pulse z-0 `}
              ></div>

              {/* EL CÍRCULO DE LA IMAGEN */}
              {/* Usamos w-full h-full para que ocupe exactamente el mismo espacio que el brillo */}
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-zinc-800 bg-zinc-900 shadow-2xl z-10 hover:border-purple-400/40 transition-all duration-500 group">
                {personalInfo.profileImage ? (
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-zinc-800 to-zinc-900">
                    <User
                      className="w-48 h-48 sm:w-64 sm:h-64 text-purple-400/50"
                      strokeWidth={1}
                    />
                  </div>
                )}
              </div>

              {currentProfile && (
                <div className="absolute inset-0 z-0">
                  <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-purple-600/20 rounded-full blur-3xl"></div>
                  <div className="absolute -top-6 -left-6 w-48 h-48 bg-purple-400/20 rounded-full blur-3xl"></div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
