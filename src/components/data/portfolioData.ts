// 1. INFORMACIÓN PERSONAL (Doble personalidad)
export const personalInfo = {
  name: "Luis David Lemus Perea",
  profiles: {
    ml: {
      role: "Ingeniero de Machine Learning",
      bio: "Especialista en desarrollo y despliegue de modelos de Machine Learning. Me enfoco en crear soluciones predictivas escalables utilizando Python, TensorFlow y Scikit-learn.",
    },
    data: {
      role: "Desarrollador de IA y Datos",
      bio: "Aplico técnicas de datos e IA aplicada para resolver problemas reales. Tengo experiencia entrenando modelos predictivos, desplegando soluciones y visualizando datos con Python y Power BI.",
    },
  },
  social: {
    email: "luisdlperea96@gmail.com",
    github: "https://github.com/DaLeedev",
    linkedin: "https://www.linkedin.com/in/luis-david-lemus-perea-6497453a3/",
  },
  profileImage: "images/perfil/perfil-blank.jpg",
  email: "luisdlperea96@gmail.com",
  github: "https://github.com/DaLeedev",
  linkedin: "https://www.linkedin.com/in/luis-david-lemus-perea-6497453a3/",
};

// 2. SKILLS (Separadas)
export const skills = {
  ml: [
    { name: "Python", level: 85, icon: "logos:python" },
    { name: "TensorFlow / Keras", level: 80, icon: "logos:tensorflow" },
    { name: "Scikit-learn", level: 85, icon: "simple-icons:scikitlearn" },
    { name: "PyTorch", level: 75, icon: "logos:pytorch-icon" },
    { name: "Pandas & NumPy", level: 90, icon: "logos:pandas-icon" },
    { name: "Jupyter Notebooks", level: 85, icon: "logos:jupyter" },
  ],
  data: [
    // Lenguaje Base
    { name: "Python", level: 60, icon: "logos:python" },
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
      level: 45,
      icon: "vscode-icons:file-type-excel",
    },
  ],
};

// 3. PROYECTOS (Separados)
export const projects = {
  ml: [
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
    {
      title: "Modelo de Clasificación - Iris Dataset",
      description:
        "Implementación de múltiples algoritmos de clasificación para el dataset Iris. Comparación de precisión entre Regresión Logística, Random Forest y SVM con visualizaciones interactivas de los resultados.",
      technologies: ["Scikit-Learn", "Matplotlib", "Seaborn", "Python"],
      image: "images/ml_classification.png",
      liveLink: "#",
      githubLink: "#",
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
  ml: [
    {
      title: "TensorFlow Developer Certificate",
      description:
        "Certificación profesional en desarrollo con TensorFlow para modelos de Deep Learning.",
      credentialUrl: "#",
      issuer: "TensorFlow",
      date: "Enero 2026",
      iconName: "logos:tensorflow",
    },
    {
      title: "Machine Learning Specialization",
      description:
        "Especialización completa en algoritmos de Machine Learning y aplicaciones prácticas.",
      credentialUrl: "#",
      issuer: "DeepLearning.AI",
      date: "Diciembre 2025",
      iconName: "mdi:school-outline",
    },
    {
      title: "Advanced Machine Learning on Azure",
      description:
        "Certificación avanzada en implementación y despliegue de modelos ML en Azure.",
      credentialUrl: "#",
      issuer: "Microsoft Azure",
      date: "Noviembre 2025",
      iconName: "logos:microsoft-azure",
    },
    {
      title: "Python for Machine Learning",
      description:
        "Curso especializado en Python para desarrollo de soluciones de Machine Learning.",
      credentialUrl: "#",
      issuer: "Python Institute",
      date: "Octubre 2025",
      iconName: "logos:python",
    },
  ],
  data: [
    {
      title: "Inteligencia Artificial Nivel Básico",
      description:
        "Certificación fundamental en conceptos de IA a nivel exploratorio.",
      credentialUrl:
        "https://github.com/DaLeedev/Certificados/blob/main/Inteligencia%20Artificial/Certificado%20IU%20Training%20-%20CC%201003933065.pdf",
      issuer: "IU Training",
      date: "4 de Septiembre de 2025",
      iconName: "mdi:school-outline",
    },
    {
      title: "Python for Data Science, AI & Development",
      description: "Desarrollo con Python aplicado a ciencia de datos e IA.",
      credentialUrl:
        "https://github.com/DaLeedev/Certificados/blob/main/Inteligencia%20Artificial/IBM%20-%20Python%20for%20Data%20Science%2C%20AI%20%26%20Development.pdf",
      issuer: "IBM",
      date: "27 de Diciembre de 2025",
      iconName: "simple-icons:ibm",
    },
    {
      title: "Create Machine Learning Models in Microsoft Azure",
      description: "Creación y despliegue de modelos de ML en la nube.",
      credentialUrl:
        "https://github.com/DaLeedev/Certificados/blob/main/Inteligencia%20Artificial/Microsoft%20-%20Create%20Machine%20Learning%20Models%20in%20Microsoft%20Azure.pdf",
      issuer: "Microsoft",
      date: "23 de Septiembre de 2025",
      iconName: "logos:microsoft-icon",
    },
    {
      title: "IA generativa más allá del chatbot",
      description:
        "Aplicaciones avanzadas de Inteligencia Artificial Generativa.",
      credentialUrl:
        "https://github.com/DaLeedev/Certificados/blob/main/Inteligencia%20Artificial/Google%20Cloud%20-%20IA%20generativa%20mas%20alla%20del%20chatbot.pdf",
      issuer: "Google Cloud",
      date: "18 de Enero de 2026",
      iconName: "logos:google-cloud",
    },
    {
      title: "IA generativa, descubre los conceptos fundamentales",
      description: "Fundamentos teóricos y prácticos de la IA Generativa.",
      credentialUrl:
        "https://github.com/DaLeedev/Certificados/blob/main/Inteligencia%20Artificial/Google%20Cloud%20-%20IA%20generativa%2C%20descubre%20los%20conceptos%20fundamentales.pdf",
      issuer: "Google Cloud",
      date: "22 de Enero de 2026",
      iconName: "logos:google-cloud",
    },
    {
      title: "What is Data Science",
      description:
        "Visión global sobre la ciencia de datos y sus metodologías.",
      credentialUrl:
        "https://github.com/DaLeedev/Certificados/blob/main/Ciencia%20de%20Datos/IBM%20-%20What%20is%20Data%20Science.pdf",
      issuer: "IBM",
      date: "6 de Octubre de 2025",
      iconName: "simple-icons:ibm",
    },
  ],
};
