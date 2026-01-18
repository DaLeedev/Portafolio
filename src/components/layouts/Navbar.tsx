import { Code2 } from "lucide-react";
import { Icon } from "@iconify/react";

export const Navbar = () => {
  // Definimos los links aquí para no ensuciar el JSX
  const navLinks = [
    { name: "Proyectos", href: "#proyectos" },
    { name: "Certificados", href: "#certificados" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Nombre */}
          <a
            href="https://github.com/DaLeedev"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 cursor-pointer text-white hover:text-purple-400/80 transition-colors duration-300"
          >
            <Icon icon="mdi:github" className="w-8 h-8" />
            <span className="font-semibold text-lg">DaLeedev</span>
          </a>

          {/* Enlaces de navegación */}
          <div className="flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-zinc-300 hover:text-white transition-colors text-sm sm:text-base font-medium"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
