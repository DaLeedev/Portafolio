
import { certificates } from "../data/portfolioData";
import { Award } from "lucide-react";
import { CertificateCard } from "../CertificateCard"; // Asegúrate que la ruta sea correcta

interface CertificadosProps {
  currentProfile: "web" | "data"; // Ya no aceptamos null porque esta sección no se renderiza si es null
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
            <span className="text-purple-300 text-sm">
              Certificaciones Profesionales
            </span>
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Certificados & Acreditaciones
          </h2>
          <p className="text-zinc-400 text-lg">
            Reconocimientos que validan mi experiencia en{" "}
            <span className="text-purple-400 font-medium">
              {currentProfile === "web" ? "Desarrollo Web" : "Ciencia de Datos"}
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
              area={currentProfile === "web" ? "Frontend/Backend" : "Data/ML"}
            />
          ))}
        </div>
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
