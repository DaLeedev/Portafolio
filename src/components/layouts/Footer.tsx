import { personalInfo } from "../data/portfolioData";
import { Code2 } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-2.5 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © 2026 {personalInfo.name}. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-purple-500" />
            <span className="text-zinc-500 text-sm">
              Construido con React & Tailwind CSS
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
