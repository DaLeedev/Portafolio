import { projects } from "../data/portfolioData";
import { ProjectCard } from "../ProjectCard";

export const Projects = () => {
  return (
    <section id="proyectos" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4">Proyectos Destacados</h2>
          <p className="text-zinc-400 text-lg">
            Una selección de mis trabajos más recientes y significativos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              technologies={project.technologies}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
