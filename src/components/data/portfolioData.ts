

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
      bio: "Aplico técnicas de datos e IA aplicada para resolver problemas reales. Tengo experiencia entrenando modelos predictivos, desplegando soluciones y visualizando datos con Python y Power BI.",
    },
  },
  social: {
    email: "tu@email.com",
    github: "github.com/DaLeedev",
    linkedin: "linkedin.com/...",
  },
  profileImage: "",
  email: "tu-email@ejemplo.com",
  github: "https://github.com/DaLeedev",
  linkedin: "https://linkedin.com/in/tu-perfil",
};

// 2. SKILLS (Separadas)
export const skills = {
  web: [
    { name: "React", level: 90, icon: "logos:react" },
    { name: "Laravel", level: 85, icon: "logos:laravel" },
    { name: "Tailwind CSS", level: 90, icon: "logos:tailwindcss-icon" },
    { name: "MySQL", level: 85, icon: "logos:mysql-icon" },
    { name: "Sass / SCSS", level: 80, icon: "logos:sass" },
    { name: "JavaScript", level: 85, icon: "logos:javascript" },
  ],
  data: [
    // Lenguaje Base
    { name: "Python", level: 55, icon: "logos:python" },
    {
      name: "TensorFlow / Keras (En aprendizaje)",
      level: 35,
      icon: "logos:tensorflow",
    },
    {
      name: "Scikit-learn (En aprendizaje)",
      level: 35,
      icon: "simple-icons:scikitlearn",
    },
    { name: "Pandas & NumPy", level: 50, icon: "logos:pandas-icon" },
    { name: "FastAPI", level: 37, icon: "logos:fastapi-icon" },
    { name: "SQL (MySQL/PostgreSQL)", level: 50, icon: "logos:mysql-icon" },
    { name: "Power BI", level: 48, icon: "logos:microsoft-power-bi" },
    { name: "Azure Services", level: 40, icon: "logos:microsoft-azure" },
    { name: "Git & GitHub", level: 70, icon: "mdi:github" },
    { name: "Docker (En aprendizaje)", level: 50, icon: "logos:docker-icon" },
    { name: "Postman", level: 65, icon: "logos:postman-icon" },
    {
      name: "Excel",
      level: 40,
      icon: "vscode-icons:file-type-excel",
    },
  ],
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
      title: "Predicción CLTV - Deep Learning",
      description:
        "Sistema predictivo para estimar el valor monetario futuro de clientes (6 meses) usando Redes Neuronales (MLP) y Ventanas Deslizantes. Incluye un pipeline completo: limpieza, ingeniería de características, API con FastAPI y Dashboard en React.",
      technologies: [
        "TensorFlow/Keras",
        "FastAPI",
        "React",
        "Pandas",
        "Ventanas Deslizantes",
      ],
      image: "images/demo_cltv.gif",
      liveLink: "https://daleedev.github.io/Deploy-CLTV-Frontend/",
      githubLink: "https://github.com/DaLeedev/CLTV_PROJECT",
    },
    {
      title: "Agente de IA SQL - Moda Tech",
      description:
        "Analista de datos virtual que traduce lenguaje natural a consultas SQL precisas. Permite a usuarios no técnicos obtener reportes de la base de datos corporativa en segundos usando modelos de lenguaje de alta velocidad.",
      technologies: ["Groq LLM", "FastAPI", "React", "Docker", "SQL"],
      image: "images/demo_agente.gif",
      liveLink: "https://daleedev.github.io/IA-Gen-SQL/",
      githubLink: "https://github.com/DaLeedev/IA-Gen-SQL",
    },
    {
      title: "Dashboard BI - Análisis de ventas minoristas",
      description:
        "Tablero interactivo diseñado para la toma de decisiones estratégicas en Moda Tech. Transforma datos transaccionales en insights visuales, permitiendo el monitoreo de KPIs financieros, análisis de tendencias de ventas y segmentación geográfica de clientes mediante modelado de datos avanzado y medidas DAX.",
      technologies: ["Power BI", "DAX", "Power Query", "Data Modeling", "ETL"],
      image: "images/demo_powerbi_cltv.png",
      liveLink: "https://github.com/DaLeedev/CLTV_Power_BI",
      githubLink: "https://github.com/DaLeedev/CLTV_Power_BI",
    },
    {
      title: "Predicción Deserción Escolar - Colombia",
      description:
        "Investigación aplicada bajo metodología KDD que correlaciona variables socioeconómicas y del conflicto armado con el abandono escolar. Se evaluaron modelos de ML (XGBoost, Random Forest), logrando un R² de 0.77 con Regresión Lineal, desplegado en una web interactiva para consulta pública.",
      technologies: [
        "Scikit-Learn",
        "KDD Methodology",
        "Python",
        "React",
        "FastAPI",
      ],
      image: "images/demo_desercion.gif",
      liveLink: "https://daleedev.github.io/desercion-escolar-ia-web/",
      githubLink: "https://github.com/DaLeedev/Prediccion_desercion_escolar",
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
