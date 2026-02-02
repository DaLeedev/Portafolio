import { projects } from "../data/portfolioData";
import { ProjectCard } from "../ProjectCard";

interface SectionProps {
  currentProfile: "ml" | "data";
}

export const Projects = ({ currentProfile }: SectionProps) => {
  // Seleccionamos la lista correcta basada en el prop
  const currentProjects = projects[currentProfile];

  return (
    <section id="proyectos" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-purple-400">
          Proyectos Destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {currentProjects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
