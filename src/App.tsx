import { ProjectCard } from './components/ProjectCard';
import { SkillBar } from './components/SkillBar';
import { CertificateCard } from './components/CertificateCard';
import { Github, Linkedin, Mail, Code2, Briefcase, User, Lightbulb, Award } from 'lucide-react';

// ========== CONFIGURACIÓN PERSONAL - MODIFICA AQUÍ TUS DATOS ==========
const personalInfo = {
  name: "Tu Nombre",
  role: "Desarrollador Full Stack",
  bio: "Creando experiencias digitales innovadoras con código limpio y diseño intuitivo. Especializado en desarrollo web moderno y arquitecturas escalables.",
  profileImage: "", // Dejar vacío para usar icono por defecto, o agregar URL de tu foto
  email: "tu-email@ejemplo.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-perfil"
};

// Habilidades de programación
const programmingSkills = [
  { name: "JavaScript", level: 90, icon: "🟨" },
  { name: "TypeScript", level: 85, icon: "🔷" },
  { name: "Python", level: 80, icon: "🐍" },
  { name: "React", level: 90, icon: "⚛️" },
  { name: "Node.js", level: 85, icon: "🟢" },
  { name: "Next.js", level: 80, icon: "▲" }
];

// Herramientas y tecnologías
const toolsSkills = [
  { name: "Git & GitHub", level: 90, icon: "📦" },
  { name: "Tailwind CSS", level: 85, icon: "🎨" },
  { name: "PostgreSQL", level: 75, icon: "🐘" },
  { name: "MongoDB", level: 70, icon: "🍃" },
  { name: "Docker", level: 65, icon: "🐳" },
  { name: "AWS", level: 60, icon: "☁️" }
];

// Certificados
const certificates = [
  {
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Enero 2026",
    description: "Certificación profesional en diseño de arquitecturas distribuidas y escalables en AWS.",
    credentialUrl: "#",
    area: "Cloud Computing"
  },
  {
    title: "React Developer Certification",
    issuer: "Meta",
    date: "Noviembre 2025",
    description: "Certificación avanzada en desarrollo de aplicaciones con React y mejores prácticas.",
    credentialUrl: "#",
    area: "Desarrollo Frontend"
  },
  {
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    date: "Agosto 2025",
    description: "Certificación en metodologías ágiles y gestión de proyectos con Scrum.",
    credentialUrl: "#",
    area: "Gestión de Proyectos"
  },
  {
    title: "Google UX Design Certificate",
    issuer: "Google",
    date: "Mayo 2025",
    description: "Programa profesional en diseño de experiencia de usuario y prototipado.",
    credentialUrl: "#",
    area: "UX/UI Design"
  },
  {
    title: "MongoDB Developer Certification",
    issuer: "MongoDB University",
    date: "Marzo 2025",
    description: "Certificación en diseño de bases de datos NoSQL y optimización de consultas.",
    credentialUrl: "#",
    area: "Bases de Datos"
  },
  {
    title: "Cybersecurity Fundamentals",
    issuer: "CompTIA",
    date: "Enero 2025",
    description: "Certificación en fundamentos de seguridad informática y mejores prácticas.",
    credentialUrl: "#",
    area: "Seguridad"
  }
];
// ========== FIN DE CONFIGURACIÓN PERSONAL ==========

const projects = [
  {
    title: "Dashboard Analítico",
    description: "Plataforma de análisis de datos en tiempo real con visualizaciones interactivas y métricas personalizables para empresas.",
    image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY3Nzg1MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Node.js"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "App Móvil de Productividad",
    description: "Aplicación móvil para gestión de tareas y productividad personal con sincronización en la nube y notificaciones inteligentes.",
    image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY3Nzg2MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["React Native", "Firebase", "Redux", "JavaScript"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "E-Commerce Platform",
    description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos integrada y panel de administración.",
    image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2NzgzNTYxOHww&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["Next.js", "PostgreSQL", "Stripe", "Prisma", "TypeScript"],
    liveLink: "#",
    githubLink: "#"
  },
  {
    title: "Sistema de Visualización de Datos",
    description: "Herramienta para análisis y visualización de grandes conjuntos de datos con gráficos interactivos y exportación de reportes.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3Njc4NDg0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    technologies: ["Python", "D3.js", "React", "FastAPI", "MongoDB"],
    liveLink: "#",
    githubLink: "#"
  }
];

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Code2 className="w-6 h-6 text-purple-500" />
              <span className="font-semibold text-lg">{personalInfo.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <a 
                href="#proyectos" 
                className="text-zinc-300 hover:text-white transition-colors"
              >
                Proyectos
              </a>
              <a 
                href="#certificados" 
                className="text-zinc-300 hover:text-white transition-colors"
              >
                Certificados
              </a>
              <a 
                href="#habilidades" 
                className="text-zinc-300 hover:text-white transition-colors"
              >
                Habilidades
              </a>
              <a 
                href="#contacto" 
                className="text-zinc-300 hover:text-white transition-colors"
              >
                Contacto
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
                <Briefcase className="w-4 h-4 text-purple-400" />
                <span className="text-purple-300 text-sm">Disponible para nuevas oportunidades</span>
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
                        <User className="w-48 h-48 text-purple-400/50" strokeWidth={1.5} />
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

      {/* Certificates Section */}
      <section id="certificados" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <Award className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm">Certificaciones Profesionales</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Certificados & Acreditaciones</h2>
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

      {/* Skills Section */}
      <section id="habilidades" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6">
              <Lightbulb className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm">Habilidades Técnicas</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Mi Stack Tecnológico</h2>
            <p className="text-zinc-400 text-lg">
              Tecnologías y herramientas que domino para crear soluciones eficientes
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Programming Languages & Frameworks */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <Code2 className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Lenguajes & Frameworks</h3>
                  <p className="text-zinc-500 text-sm">Principales tecnologías de desarrollo</p>
                </div>
              </div>
              <div className="space-y-5">
                {programmingSkills.map((skill, index) => (
                  <SkillBar
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                  <User className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold">Herramientas & Tecnologías</h3>
                  <p className="text-zinc-500 text-sm">Plataformas y herramientas de desarrollo</p>
                </div>
              </div>
              <div className="space-y-5">
                {toolsSkills.map((skill, index) => (
                  <SkillBar
                    key={index}
                    name={skill.name}
                    level={skill.level}
                    icon={skill.icon}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
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

      {/* Contact Section */}
      <section id="contacto" className="py-20 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">¿Trabajamos juntos?</h2>
            <p className="text-zinc-400 text-lg mb-8">
              Estoy siempre interesado en escuchar sobre nuevos proyectos y oportunidades.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a 
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors border border-zinc-700"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
              <a 
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors border border-zinc-700"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a 
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors border border-zinc-700"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © 2026 {personalInfo.name}. Todos los derechos reservados.
            </p>
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4 text-purple-500" />
              <span className="text-zinc-500 text-sm">Construido con React & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}