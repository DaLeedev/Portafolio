import { personalInfo } from "../data/portfolioData";
import { User, Briefcase, HelpCircle } from "lucide-react";

interface HeroProps {
  currentProfile: "web" | "data" | null;
}

export const Hero = ({ currentProfile }: HeroProps) => {
  // Accedemos al perfil activo con seguridad
  const activeData = currentProfile
    ? personalInfo.profiles[currentProfile]
    : null;

  return (
    <section className="pt-32 pb-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="animate-in slide-in-from-left duration-700">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-full mb-6">
              {currentProfile ? (
                // Usamos text-purple-400 que se convertirá en VERDE o AZUL automáticamente gracias al App.tsx
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

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
              {personalInfo.name}
            </h1>

            {/* ROL DINÁMICO */}
            <h2
              className={`text-2xl mb-4 font-medium h-8 transition-all duration-500 text-purple-400`}
            >
              {activeData ? activeData.role : "Rol por definir..."}
            </h2>

            <p className="text-xl text-zinc-400 leading-relaxed mb-8 min-h-[6rem]">
              {activeData
                ? activeData.bio
                : "¿Qué versión de mi experiencia te interesa conocer hoy? Selecciona una opción abajo para revelar mi portafolio."}
            </p>

            {/* Botones de acción */}
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

          {/* Imagen de Perfil Dinámica */}
          <div className="flex justify-center lg:justify-end animate-in slide-in-from-right duration-700">
            <div className="relative group">
              <div
                className={`absolute -inset-1 rounded-full blur-2xl opacity-75 transition-colors duration-1000 ${
                  currentProfile === "web"
                    ? "bg-green-600" // Forzamos verde aquí para el glow
                    : currentProfile === "data"
                    ? "bg-blue-600" // Forzamos azul aquí para el glow
                    : "bg-zinc-800"
                }`}
              ></div>
              <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-zinc-800 bg-zinc-900">
                {personalInfo.profileImage ? (
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <User className="w-32 h-32 text-zinc-700" />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// import { personalInfo } from "../data/portfolioData";
// import { User, Briefcase, HelpCircle } from "lucide-react";

// // Definimos que el componente recibe una "prop" llamada currentProfile
// interface HeroProps {
//   currentProfile: "web" | "data" | null;
// }

// export const Hero = ({ currentProfile }: HeroProps) => {
//   // Lógica: Si hay perfil, usamos sus datos. Si no, usamos datos "Misteriosos"
//   const activeData = currentProfile
//     ? personalInfo.profiles[currentProfile]
//     : null;

//   return (
//     <section className="pt-32 pb-10 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           {/* Text Content */}
//           <div>
//             <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-zinc-700 rounded-full mb-6">
//               {currentProfile ? (
//                 <Briefcase className="w-4 h-4 text-purple-400" />
//               ) : (
//                 <HelpCircle className="w-4 h-4 text-zinc-400" />
//               )}
//               <span className="text-zinc-300 text-sm">
//                 {currentProfile
//                   ? "Disponible para trabajar"
//                   : "Define el perfil a visualizar"}
//               </span>
//             </div>

//             <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-white">
//               {personalInfo.name}
//             </h1>

//             {/* AQUÍ ESTÁ EL CAMBIO CLAVE: EL ROL */}
//             <h2
//               className={`text-2xl mb-4 font-medium h-8 transition-all duration-500 ${
//                 activeData ? activeData.color : "text-zinc-600"
//               }`}
//             >
//               {activeData ? activeData.role : "Rol por definir..."}
//             </h2>

//             <p className="text-xl text-zinc-400 leading-relaxed mb-8 h-24">
//               {activeData
//                 ? activeData.bio
//                 : "¿Qué versión de mi experiencia te interesa conocer hoy? Selecciona una opción abajo para revelar mi portafolio."}
//             </p>

//             {/* Solo mostramos los botones de contacto si YA eligió perfil */}
//             {currentProfile && (
//               <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
//                 <a
//                   href="#proyectos"
//                   className="px-8 py-3 bg-white text-black hover:bg-zinc-200 rounded-lg font-medium transition-colors"
//                 >
//                   Ver Proyectos
//                 </a>
//                 <a
//                   href="#contacto"
//                   className="px-8 py-3 border border-zinc-700 hover:bg-zinc-800 rounded-lg font-medium transition-colors"
//                 >
//                   Contáctame
//                 </a>
//               </div>
//             )}
//           </div>

//           {/* Profile Image (Igual que antes, pero puedes cambiar el borde de color si quieres) */}
//           <div className="flex justify-center lg:justify-end">
//             <div className="relative group">
//               <div
//                 className={`absolute -inset-1 rounded-full blur-2xl opacity-75 transition duration-1000 ${
//                   currentProfile === "web"
//                     ? "bg-purple-600"
//                     : currentProfile === "data"
//                     ? "bg-blue-600"
//                     : "bg-zinc-800"
//                 }`}
//               ></div>
//               <div className="relative w-80 h-80 sm:w-96 sm:h-96 rounded-full overflow-hidden border-4 border-zinc-800 bg-zinc-900">
//                 {/* Tu lógica de imagen aquí... */}
//                 <div className="w-full h-full flex items-center justify-center">
//                   <User className="w-32 h-32 text-zinc-700" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
