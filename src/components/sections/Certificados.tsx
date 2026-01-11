import React from 'react'

export const Certificados = () => {
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
            Reconocimientos y certificaciones que validan mi experiencia técnica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              description={cert.description}
              credentialUrl={cert.credentialUrl}
              area={cert.area}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
