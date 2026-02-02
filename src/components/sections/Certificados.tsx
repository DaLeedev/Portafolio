
import { certificates } from "../data/portfolioData";
import { Award } from "lucide-react";
import { CertificateCard } from "../CertificateCard"; // Asegúrate que la ruta sea correcta
import { Icon } from "@iconify/react";

interface CertificadosProps {
  currentProfile: "ml" | "data"; // Ya no aceptamos null porque esta sección no se renderiza si es null
}

export const Certificados = ({ currentProfile }: CertificadosProps) => {
  // Seleccionamos la lista de certificados correcta
  const activeCertificates = certificates[currentProfile];

  return (
    <section
      id="certificados"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
            <Award className="w-4 h-4 text-purple-400" />
            <span className="text-purple-400 text-sm">
              Certificaciones Profesionales
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Certificados & Acreditaciones
          </h2>
          <p className="text-zinc-400 text-lg">
            Reconocimientos que validan mi experiencia en{" "}
            <span className="text-purple-400 font-medium">
              {currentProfile === "ml" ? "Machine Learning" : "Ciencia de Datos"}
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-in slide-in-from-bottom-8 duration-700">
          {activeCertificates.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title || ""}
              issuer={cert.issuer || ""}
              date={cert.date || ""}
              description={cert.description || ""}
              credentialUrl={cert.credentialUrl || ""}
              area={currentProfile === "ml" ? "Machine Learning" : "Data/ML"}
              iconName={cert.iconName || ""}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center w-full mt-16">
        <a
          href="https://github.com/DaLeedev/Certificados"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative inline-flex items-center gap-2 px-6 py-3 bg-purple-500/10 border border-purple-500/20 rounded-full overflow-hidden transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-500/40 hover:scale-103 active:scale-95"
        >
          <div className="absolute inset-0 bg-linear-to-r from-transparent via-purple-500/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

          <span className="relative text-purple-300 font-medium group-hover:text-blue-100 transition-colors">
            Ver todos los certificados
          </span>

          <Icon
            icon="mdi:arrow-right"
            className="relative w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform"
          />
        </a>
      </div>
    </section>
  );
};








// import { certificates } from "../data/portfolioData";
// import { Award } from "lucide-react";
// import { CertificateCard } from "../CertificateCard";

// export const Certificados = () => {
//   return (
//     <section
//       id="certificados"
//       className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800"
//     >
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-16 text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
//             <Award className="w-4 h-4 text-purple-400" />
//             <span className="text-purple-300 text-sm">
//               Certificaciones Profesionales
//             </span>
//           </div>
//           <h2 className="text-4xl font-bold mb-4">
//             Certificados & Acreditaciones
//           </h2>
//           <p className="text-zinc-400 text-lg">
//             Reconocimientos y certificaciones que validan mi experiencia técnica
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {certificates.map((cert, index) => (
//             <CertificateCard
//               key={index}
//               title={cert.title}
//               issuer={cert.issuer}
//               date={cert.date}
//               description={cert.description}
//               credentialUrl={cert.credentialUrl}
//               area={cert.area}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };
