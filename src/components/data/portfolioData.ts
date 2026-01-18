
// src/data/portfolioData.ts

// 1. INFORMACIÓN PERSONAL (Doble personalidad)
export const personalInfo = {
  name: "Luis David Lemus Perea",
  profiles: {
    web: {
      role: "Desarrollador Full Stack",
      bio: "Especialista en arquitecturas escalables con React y Laravel. Me enfoco en código limpio y UX.",
    },
    data: {
      role: "Desarrollador de IA y Datos",
      bio: "Transformo datos en decisiones. Experto en modelos predictivos, Python y visualización.",
    },
  },
  social: {
    email: "tu@email.com",
    github: "github.com/...",
    linkedin: "linkedin.com/...",
  },
  profileImage: "",
  email: "tu-email@ejemplo.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-perfil",
};

// 2. SKILLS (Separadas)
export const skills = {
  web: [
    { name: "React", level: 95, icon: "⚛️" },
    { name: "Laravel", level: 90, icon: "🔴" },
    { name: "Tailwind CSS", level: 90, icon: "🎨" },
    { name: "TypeScript", level: 85, icon: "🔷" },
  ],
  data: [
    { name: "Python", level: 95, icon: "🐍" },
    { name: "TensorFlow", level: 80, icon: "🧠" },
    { name: "Pandas", level: 90, icon: "🐼" },
    { name: "SQL", level: 85, icon: "🗃️" },
  ]
};

// 3. PROYECTOS (Separados)
export const projects = {
  web: [
    {
      title: "E-Commerce Pro",
      description: "Tienda online completa con pasarela de pagos.",
      technologies: ["Next.js", "Stripe", "PostgreSQL"],
      image: "url_img_web_1",
      link: "#",
    },
    {
      title: "Dashboard SaaS",
      description: "Panel administrativo para gestión de usuarios.",
      technologies: ["React", "Laravel", "Tremor"],
      image: "url_img_web_2",
      link: "#",
    },
    {
      title: "Dashboard SaaS",
      description: "Panel administrativo para gestión de usuarios.",
      technologies: ["React", "Laravel", "Tremor"],
      image: "url_img_web_2",
      link: "#",
    },
  ],
  data: [
    {
      title: "Predicción de Precios",
      description: "Modelo de ML para predecir mercado inmobiliario.",
      technologies: ["Python", "Scikit-Learn", "Matplotlib"],
      image: "url_img_data_1",
      link: "#",
    },
    {
      title: "Chatbot IA Generativa",
      description: "Bot de atención al cliente usando LLMs.",
      technologies: ["OpenAI API", "LangChain", "FastAPI"],
      image: "url_img_data_2",
      link: "#",
    },
    {
      title: "Chatbot IA Generativa",
      description: "Bot de atención al cliente usando LLMs.",
      technologies: ["OpenAI API", "LangChain", "FastAPI"],
      image: "url_img_data_2",
      link: "#",
    },
    {
      title: "Chatbot IA Generativa",
      description: "Bot de atención al cliente usando LLMs.",
      technologies: ["OpenAI API", "LangChain", "FastAPI"],
      image: "url_img_data_2",
      link: "#",
    },

  ],
};

// 4. CERTIFICADOS (Separados)
export const certificates = {
  web: [
    {
      title: "Meta Frontend Developer",
      description:
        "Certificación profesional en diseño de arquitecturas distribuidas y escalables en AWS.",
      credentialUrl: "#",
      issuer: "Amazon Web Services",
      date: "Noviembre 2025",
    },
    {
      title: "Meta Frontend Developer",
      description:
        "Certificación profesional en diseño de arquitecturas distribuidas y escalables en AWS.",
      credentialUrl: "#",
      issuer: "Amazon Web Services",
      date: "Noviembre 2025",
    },
    {
      title: "IBM Data Science",
      description:
        "Certificación profesional en diseño de arquitecturas distribuidas y escalables en AWS.",
      credentialUrl: "#",
      issuer: "Amazon Web Services",
      date: "Noviembre 2025",
    },
    {
      title: "IBM Data Science",
      description:
        "Certificación profesional en diseño de arquitecturas distribuidas y escalables en AWS.",
      credentialUrl: "#",
      issuer: "Amazon Web Services",
      date: "Noviembre 2025",
    },
  ],
  data: [
    {
      title: "IBM Data Science",
      description:
        "Certificación profesional en diseño de arquitecturas distribuidas y escalables en AWS.",
      credentialUrl: "#",
      issuer: "Amazon Web Services",
      date: "Noviembre 2025",
    },
    {
      title: "IBM Data Science",
      description:
        "Certificación profesional en diseño de arquitecturas distribuidas y escalables en AWS.",
      credentialUrl: "#",
      issuer: "Amazon Web Services",
      date: "Noviembre 2025",
    },
    {
      title: "IBM Data Science",
      description:
        "Certificación profesional en diseño de arquitecturas distribuidas y escalables en AWS.",
      credentialUrl: "#",
      issuer: "Amazon Web Services",
      date: "Noviembre 2025",
    },
    {
      title: "IBM Data Science",
      description:
        "Certificación profesional en diseño de arquitecturas distribuidas y escalables en AWS.",
      credentialUrl: "#",
      issuer: "Amazon Web Services",
      date: "Noviembre 2025",
    },
    {
      title: "IBM Data Science",
      description:
        "Certificación profesional en diseño de arquitecturas distribuidas y escalables en AWS.",
      credentialUrl: "#",
      issuer: "Amazon Web Services",
      date: "Noviembre 2025",
    },
    {
      title: "IBM Data Science",
      description:
        "Certificación profesional en diseño de arquitecturas distribuidas y escalables en AWS.",
      credentialUrl: "#",
      issuer: "Amazon Web Services",
      date: "Noviembre 2025",
    },
  ],
};







// export const personalInfo = {
//   name: "Tu Nombre",
//   profiles: {
//     web: {
//       role: "Desarrollador Full Stack",
//       bio: "Creando experiencias digitales innovadoras con código limpio y diseño intuitivo.",
//       color: "text-green-400",
//     },
//     data: {
//       role: "Científico de Datos & ML",
//       bio: "Transformando datos complejos en decisiones estratégicas con Inteligencia Artificial.",
//       color: "text-blue-400",
//     },
//   },
//   profileImage: "",
//   email: "tu-email@ejemplo.com",
//   github: "https://github.com/tu-usuario",
//   linkedin: "https://linkedin.com/in/tu-perfil",
// };

// // Habilidades de programación
// export const programmingSkills = [
//   { name: "JavaScript", level: 90, icon: "🟨" },
//   { name: "TypeScript", level: 85, icon: "🔷" },
//   { name: "Python", level: 80, icon: "🐍" },
//   { name: "React", level: 90, icon: "⚛️" },
//   { name: "Node.js", level: 85, icon: "🟢" },
//   { name: "Next.js", level: 80, icon: "▲" }
// ];

// // Herramientas y tecnologías
// export const toolsSkills = [
//   { name: "Git & GitHub", level: 90, icon: "📦" },
//   { name: "Tailwind CSS", level: 85, icon: "🎨" },
//   { name: "PostgreSQL", level: 75, icon: "🐘" },
//   { name: "MongoDB", level: 70, icon: "🍃" },
//   { name: "Docker", level: 65, icon: "🐳" },
//   { name: "AWS", level: 60, icon: "☁️" }
// ];

// // Certificados
// export const certificates = [
//   {
//     title: "AWS Certified Solutions Architect",
//     issuer: "Amazon Web Services",
//     date: "Enero 2026",
//     description: "Certificación profesional en diseño de arquitecturas distribuidas y escalables en AWS.",
//     credentialUrl: "#",
//     area: "Cloud Computing"
//   },
//   {
//     title: "React Developer Certification",
//     issuer: "Meta",
//     date: "Noviembre 2025",
//     description: "Certificación avanzada en desarrollo de aplicaciones con React y mejores prácticas.",
//     credentialUrl: "#",
//     area: "Desarrollo Frontend"
//   },
//   {
//     title: "Professional Scrum Master I",
//     issuer: "Scrum.org",
//     date: "Agosto 2025",
//     description: "Certificación en metodologías ágiles y gestión de proyectos con Scrum.",
//     credentialUrl: "#",
//     area: "Gestión de Proyectos"
//   },
//   {
//     title: "Google UX Design Certificate",
//     issuer: "Google",
//     date: "Mayo 2025",
//     description: "Programa profesional en diseño de experiencia de usuario y prototipado.",
//     credentialUrl: "#",
//     area: "UX/UI Design"
//   },
//   {
//     title: "MongoDB Developer Certification",
//     issuer: "MongoDB University",
//     date: "Marzo 2025",
//     description: "Certificación en diseño de bases de datos NoSQL y optimización de consultas.",
//     credentialUrl: "#",
//     area: "Bases de Datos"
//   },
//   {
//     title: "Cybersecurity Fundamentals",
//     issuer: "CompTIA",
//     date: "Enero 2025",
//     description: "Certificación en fundamentos de seguridad informática y mejores prácticas.",
//     credentialUrl: "#",
//     area: "Seguridad"
//   }
// ];
// // ========== FIN DE CONFIGURACIÓN PERSONAL ==========

// export const projects = [
//   {
//     title: "Dashboard Analítico",
//     description: "Plataforma de análisis de datos en tiempo real con visualizaciones interactivas y métricas personalizables para empresas.",
//     image: "https://images.unsplash.com/photo-1665470909939-959569b20021?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkYXNoYm9hcmR8ZW58MXx8fHwxNzY3Nzg1MjA1fDA&ixlib=rb-4.1.0&q=80&w=1080",
//     technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js", "Node.js"],
//     liveLink: "#",
//     githubLink: "#"
//   },
//   {
//     title: "App Móvil de Productividad",
//     description: "Aplicación móvil para gestión de tareas y productividad personal con sincronización en la nube y notificaciones inteligentes.",
//     image: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzY3Nzg2MDQ4fDA&ixlib=rb-4.1.0&q=80&w=1080",
//     technologies: ["React Native", "Firebase", "Redux", "JavaScript"],
//     liveLink: "#",
//     githubLink: "#"
//   },
//   {
//     title: "E-Commerce Platform",
//     description: "Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos integrada y panel de administración.",
//     image: "https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjB3ZWJzaXRlfGVufDF8fHx8MTc2NzgzNTYxOHww&ixlib=rb-4.1.0&q=80&w=1080",
//     technologies: ["Next.js", "PostgreSQL", "Stripe", "Prisma", "TypeScript"],
//     liveLink: "#",
//     githubLink: "#"
//   },
//   {
//     title: "Sistema de Visualización de Datos",
//     description: "Herramienta para análisis y visualización de grandes conjuntos de datos con gráficos interactivos y exportación de reportes.",
//     image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3Njc4NDg0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080",
//     technologies: ["Python", "D3.js", "React", "FastAPI", "MongoDB"],
//     liveLink: "#",
//     githubLink: "#"
//   }
// ];
