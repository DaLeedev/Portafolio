import { personalInfo } from "../data/portfolioData";
import { Mail, Github, Linkedin } from "lucide-react";

export const Contact = () => {
  return (
    <section
      id="contacto"
      className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-purple-400">
            ¿Trabajamos juntos?
          </h2>
          <p className="text-zinc-400 text-lg mb-8">
            Estoy siempre interesado en escuchar sobre nuevos proyectos y
            oportunidades.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a
              href={`mailto:${personalInfo.social.email}`}
              className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors border border-zinc-700 hover:border-purple-500/50"
            >
              <Mail className="w-5 h-5 text-purple-400" />
              <span>Email</span>
            </a>
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors border border-zinc-700 hover:border-purple-500/50"
            >
              <Github className="w-5 h-5 text-purple-400" />
              <span>GitHub</span>
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors border border-zinc-700 hover:border-purple-500/50"
            >
              <Linkedin className="w-5 h-5 text-purple-400" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
