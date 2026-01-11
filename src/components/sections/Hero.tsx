import { personalInfo } from "../data/portfolioData";
import { User, Briefcase } from "lucide-react";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm">
                Disponible para nuevas oportunidades
              </span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
              {personalInfo.name}
            </h1>
            <p className="text-2xl text-purple-400 mb-4 font-medium">
              {personalInfo.role}
            </p>
            <p className="text-xl text-zinc-400 leading-relaxed mb-8">
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#proyectos"
                className="px-8 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors font-medium"
              >
                Ver Proyectos
              </a>
              <a
                href="#contacto"
                className="px-8 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors font-medium border border-zinc-700"
              >
                Contáctame
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Gradient background effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>

              {/* Image container */}
              <div className="relative">
                <div className="relative w-96 h-96 rounded-full overflow-hidden border-4 border-zinc-800 group-hover:border-purple-500/50 transition-all duration-300 bg-zinc-900">
                  {personalInfo.profileImage ? (
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-zinc-800 to-zinc-900">
                      <User
                        className="w-48 h-48 text-purple-400/50"
                        strokeWidth={1.5}
                      />
                    </div>
                  )}
                </div>

                {/* Decorative elements */}
                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-600/20 rounded-full blur-3xl"></div>
                <div className="absolute -top-4 -left-4 w-32 h-32 bg-pink-600/20 rounded-full blur-3xl"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
