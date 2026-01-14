
import { skills } from "../data/portfolioData"; // Importamos el objeto completo
import { Lightbulb, Code2, Wrench } from "lucide-react"; // Cambié User por Wrench (más acorde a herramientas)
import { SkillBar } from "../SkillBar";

// Definimos la interfaz para las props
interface SkillProps {
  currentProfile: "web" | "data";
}

export const Skill = ({ currentProfile }: SkillProps) => {
  // 1. Obtenemos las skills del perfil actual
  const activeSkills = skills[currentProfile];

  // 2. Dividimos el array en dos mitades para mantener tu diseño de 2 columnas
  // (Asumiendo que ordenas tus skills en portfolioData poniendo las más importantes primero)
  const middleIndex = Math.ceil(activeSkills.length / 2);
  const mainSkills = activeSkills.slice(0, middleIndex);
  const secondarySkills = activeSkills.slice(middleIndex);

  return (
    <section
      id="habilidades"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Lightbulb className="w-4 h-4 text-purple-400" />
            <span className="text-purple-300 text-sm">
              Habilidades Técnicas
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            {currentProfile === "web"
              ? "Stack de Desarrollo"
              : "Stack de Datos e IA"}
          </h2>
          <p className="text-zinc-400 text-lg">
            Tecnologías y herramientas que domino para crear soluciones
            eficientes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* COLUMNA 1: Tecnologías Principales (Primera mitad del array) */}
          <div className="space-y-6 animate-in slide-in-from-left duration-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <Code2 className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">Tecnologías Core</h3>
                <p className="text-zinc-500 text-sm">
                  Mis herramientas principales del día a día
                </p>
              </div>
            </div>
            <div className="space-y-5">
              {mainSkills.map((skill, index) => (
                <SkillBar
                  key={skill.name} // Usar name como key es mejor que index
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>

          {/* COLUMNA 2: Tecnologías Complementarias (Segunda mitad del array) */}
          <div className="space-y-6 animate-in slide-in-from-right duration-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <Wrench className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold">
                  Ecosistema & Herramientas
                </h3>
                <p className="text-zinc-500 text-sm">
                  Librerías, bases de datos y utilidades
                </p>
              </div>
            </div>
            <div className="space-y-5">
              {secondarySkills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  icon={skill.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// import { programmingSkills, toolsSkills } from "../data/portfolioData";
// import { Lightbulb, Code2, User } from "lucide-react";
// import { SkillBar } from "../SkillBar";

// export const Skill = () => {
//   return (
//     <section
//       id="habilidades"
//       className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800"
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-16 text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
//             <Lightbulb className="w-4 h-4 text-purple-400" />
//             <span className="text-purple-300 text-sm">
//               Habilidades Técnicas
//             </span>
//           </div>
//           <h2 className="text-4xl font-bold mb-4">Mi Stack Tecnológico</h2>
//           <p className="text-zinc-400 text-lg">
//             Tecnologías y herramientas que domino para crear soluciones
//             eficientes
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 gap-12">
//           {/* Programming Languages & Frameworks */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
//                 <Code2 className="w-6 h-6 text-purple-400" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-semibold">
//                   Lenguajes & Frameworks
//                 </h3>
//                 <p className="text-zinc-500 text-sm">
//                   Principales tecnologías de desarrollo
//                 </p>
//               </div>
//             </div>
//             <div className="space-y-5">
//               {programmingSkills.map((skill, index) => (
//                 <SkillBar
//                   key={index}
//                   name={skill.name}
//                   level={skill.level}
//                   icon={skill.icon}
//                 />
//               ))}
//             </div>
//           </div>

//           {/* Tools & Technologies */}
//           <div className="space-y-6">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
//                 <User className="w-6 h-6 text-purple-400" />
//               </div>
//               <div>
//                 <h3 className="text-2xl font-semibold">
//                   Herramientas & Tecnologías
//                 </h3>
//                 <p className="text-zinc-500 text-sm">
//                   Plataformas y herramientas de desarrollo
//                 </p>
//               </div>
//             </div>
//             <div className="space-y-5">
//               {toolsSkills.map((skill, index) => (
//                 <SkillBar
//                   key={index}
//                   name={skill.name}
//                   level={skill.level}
//                   icon={skill.icon}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };
