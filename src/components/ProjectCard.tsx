import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveLink?: string;
  githubLink?: string;
}

export function ProjectCard({ 
  title, 
  description, 
  image, 
  technologies,
  liveLink,
  githubLink 
}: ProjectCardProps) {
  return (
    <div className="group relative bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-700 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/10">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>
      
      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors">
            {title}
          </h3>
          <div className="flex gap-2 shrink-0">
            {githubLink && (
              <a 
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
                aria-label="Ver código en GitHub"
              >
                <Github className="w-4 h-4 text-zinc-300" />
              </a>
            )}
            {liveLink && (
              <a 
                href={liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
                aria-label="Ver proyecto en vivo"
              >
                <ExternalLink className="w-4 h-4 text-zinc-300" />
              </a>
            )}
          </div>
        </div>
        
        <p className="text-zinc-400 leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-zinc-800 text-purple-300 text-sm rounded-full border border-zinc-700 hover:border-purple-500/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
