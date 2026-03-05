import profileImage from '@/assets/Rodrigo_Motti.jpg'
import mytrip from '@/assets/mytrip.jpg'
import backendPlaceholder from '@/assets/backend-placeholder.svg'
import { Github, Instagram, Linkedin, Mail } from 'lucide-react'

export const languageOptions = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' }
]

const socialLinks = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    icon: Linkedin,
    href: 'https://www.linkedin.com/in/rodrigo-motti-de-santana-2a2130294/?locale=en_US'
  },
  {
    id: 'github',
    label: 'GitHub',
    icon: Github,
    href: 'https://github.com/rmotti'
  },
  {
    id: 'mail',
    label: 'Email',
    icon: Mail,
    href: 'mailto:rmotti99@gmail.com'
  }
]

const sharedProjectMeta = {
  mytripFrontend: {
    image: mytrip,
    githubUrl: 'https://github.com/rmotti/myTrip-frontend',
    liveUrl: 'https://my-trip-frontend.vercel.app/'
  },
  mytripBackend: {
    image: backendPlaceholder,
    githubUrl: 'https://github.com/rmotti/myTrip-backend',
    liveUrl: null,
    livePreviewDisabled: true
  },
  welnessHubApi: {
    image: backendPlaceholder,
    githubUrl: 'https://github.com/rmotti/welness_hub_backend',
    liveUrl: 'https://welness-hub-backend.vercel.app/',
    livePreviewDisabled: false
  },
    welnesshub: {
    image: backendPlaceholder,
    githubUrl: 'https://github.com/rmotti/wellness_hub_frontend',
    liveUrl: 'https://wellness-hub-frontend-one.vercel.app/',
    livePreviewDisabled: false
  },
    expressApi: {
    image: backendPlaceholder,
    githubUrl: 'https://github.com/rmotti/express-backend-example',
    liveUrl: null,
    livePreviewDisabled: true
  }
}

export const contentByLanguage = {
  pt: {
    navLinks: [
      { id: 'hero', label: 'Início' },
      { id: 'projects', label: 'Projetos' },
      { id: 'about', label: 'Sobre Mim' },
      { id: 'contact', label: 'Contato' }
    ],
    hero: {
      name: 'Rodrigo Motti',
      role: 'Desenvolvedor Backend & Engenharia de Dados',
      tagline: 'Backend sólido, dados em escala e IA aplicada — com maturidade para decisões de arquitetura',
      description: 'Node.js · Python · Azure · SQL · Docker · n8n · AI Agents',
      profileImage,
      highlightEmoji: '👨‍💻',
      primaryCta: 'Ver Projetos',
      secondaryCta: 'Conheça Minha Trajetória'
    },
    socialLinks,
    projectsSection: {
      title: 'Projetos em Destaque',
      subtitle: 'Confira Abaixo os Projetos Desenvolvidos por Mim'
    },
    projects: [
      {
        ...sharedProjectMeta.mytripFrontend,
        title: 'Planejador de Viagens MyTrip - Frontend',
        description: 'Sistema de planejamento de viagens',
        challenge:
          'Organizar viagens desde o embrião, planejando orçamento e dinheiro já guardado de forma personalizada.',
        solution:
          'Desenvolvi a interface completa em React.js com autenticação, planejamento de viagens, definição de orçamento e acompanhamento em tempo real.',
        results:
          'Usuários conseguem planejar viagens com orçamentos personalizados e acompanhar gastos em tempo real.',
        technologies: ['React', 'TypeScript']
      },
      {
        ...sharedProjectMeta.mytripBackend,
        title: 'Planejador de Viagens MyTrip - Backend',
        description: 'API do sistema de planejamento de viagens',
        challenge: 'Criar uma API robusta para gerenciar usuários, viagens, orçamentos e autenticação segura.',
        solution:
          'Implementei uma API com FastAPI, PostgreSQL e SQLAlchemy, com migrações via Alembic e autenticação integrada ao Firebase.',
        results: 'API garante autenticação segura, dados consistentes e integrações rápidas com o painel web.',
        technologies: ['FastAPI', 'PostgreSQL', 'Firebase']
      },
      {
        ...sharedProjectMeta.expressApi,
        title: 'Template de API Express',
        description: 'API de demonstração utilizando Express.js',
        challenge: 'Definir um backend seguro e pronto para CRUD completo de usuários e transações.',
        solution:
          'Criei uma API com Express.js, MongoDB e Mongoose, aplicando JWT e Bcrypt para autenticação robusta.',
        results: 'Demonstra boas práticas de autenticação e persistência em um backend Node.js enxuto.',
        technologies: ['Express.js', 'MongoDB', 'JWT', 'Bcrypt']
      },
      {
        ...sharedProjectMeta.welnesshub,
        title: 'WellnessHub - Frontend',
        description: 'Interface para Gestão de Alunos de Personal Trainer',
        challenge: 'Criar uma interface intuitiva e simples para personais trainer gerirem seus alunos.',
        solution:
          'Desenvolvi o frontend com React.js, garantindo uma experiência fluida e acessível em diversos dispositivos.',
        results: 'Interface amigável que facilita a navegação e o engajamento dos usuários com os conteúdos de bem-estar.',
        technologies: ['React.tsx', 'TypeScript', 'Vite']
      },
      {
        ...sharedProjectMeta.welnessHubApi,
        title: 'WellnessHub - Backend',
        description: 'API para plataforma de bem-estar',
        challenge: 'Desenvolver uma API para gerenciar alunos, treinos e exercícios.',
        solution:
          'Implementei a API com Node.js, utilizando PostgreSQL, hospedado no Neon para persistência e JWT para autenticação segura.',
        results: 'API eficiente que suporta as funcionalidades essenciais da plataforma de bem-estar.',
        technologies: ['Node.js', 'PostgreSQL', 'JWT']
      }

    ],
    experiences: [
      {
        title: 'Engenheiro de Software | IA, Cloud & Dados',
        company: 'SENAI CIMATEC',
        period: 'Janeiro 2025 - Presente',
        description:
          'Atuação em dois projetos distintos com foco em soluções de IA, Cloud e Dados. Responsável pelo desenvolvimento de pipelines de dados no Azure Data Factory (ADF) para ingestão e transformação de dados do Cosmos DB e Blob Storage, criação de Data Flows para estruturação de dados complexos (JSON) para relatórios no Power BI, implementação de melhorias em Agentes de IA com OCR e leitura multimodal, desenvolvimento e arquitetura de API Node.js integrada ao WhatsApp, orquestração de automações com n8n e containerização com Docker.',
        technologies: ['Azure Data Factory', 'Cosmos DB', 'Power BI', 'Node.js', 'n8n', 'Docker', 'Python', 'SQL', 'Git']
      },
      {
        title: 'Pesquisador Voluntário',
        company: 'CIMATEC',
        period: 'Agosto 2024 - Presente',
        description:
          'Projeto de pesquisa sobre gamificação no ensino de banco de dados, com foco em consultas DQL. Desenvolvo um sistema web que inclui modelagem de múltiplos bancos SQL, arquitetura do projeto, criação de modelos, povoamento e views.',
        technologies: ['PostgreSQL', 'Node.js', 'SQL', 'Modelagem de Dados']
      },
      {
        title: 'Estagiário em Desenvolvimento de Software',
        company: 'CIMATEC',
        period: 'Junho 2024 - Janeiro 2025',
        description:
          'Atuação no ciclo completo de desenvolvimento de ERP gerencial para as áreas de Big Data, IA e Software, com foco na automatização de processos de RH, Comercial e alocação de horas em projetos.',
        technologies: ['PowerApps', 'Metodologias Ágeis', 'Scrum', 'Trabalho em Equipe']
      },
      {
        title: 'Pesquisador',
        company: 'CIMATEC',
        period: 'Março 2024 - Julho 2024',
        description:
          'Projeto de pesquisa na Planta de Manufatura Avançada do CIMATEC, envolvendo digital twin e manutenção preditiva.',
        technologies: ['Python', 'JavaScript', 'Digital Twin']
      }
    ],
    skills: {
      Linguagens: ['Python', 'TypeScript', 'JavaScript'],
      Frontend: ['React', 'Next.js'],
      Backend: ['Node.js', 'FastAPI', 'Express'],
      'Dados & Cloud': ['Azure Data Factory', 'Cosmos DB', 'Power BI', 'Azure', 'SQL', 'PostgreSQL', 'MongoDB'],
      Ferramentas: ['Docker', 'n8n', 'Git/GitHub', 'Scrum'],
      'Áreas de Interesse': ['Engenharia de Dados', 'Backend', 'Agentes de IA', 'Cloud']
    },
    education: [
      {
        course: 'Engenharia de Computação',
        institution: 'Universidade CIMATEC',
        details: '2022-2026'
      },
      {
        course: 'Ensino de Inglês como Segundo Idioma',
        institution: 'ACBEU',
        details: '2012-2018'
      }
    ],
    languages: [
      { language: 'Português', level: 'Nativo', badgeVariant: undefined },
      { language: 'Inglês', level: 'Avançado', badgeVariant: undefined },
      { language: 'Espanhol', level: 'Básico', badgeVariant: 'outline' },
      { language: 'Francês', level: 'Básico', badgeVariant: 'outline' }
    ],
    contactSection: {
      title: 'Vamos Construir Algo Incrível Juntos?',
      subtitle:
        'Estou sempre aberto a novas oportunidades e colaborações. Vamos conversar sobre como posso contribuir com seu projeto.'
    },
    contactMethods: [
      {
        id: 'email',
        label: 'E-mail',
        text: 'rmotti99@gmail.com',
        href: 'mailto:rmotti99@gmail.com',
        icon: Mail
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        text: 'Conectar',
        href: 'https://www.linkedin.com/in/rodrigo-motti-de-santana-2a2130294/?locale=en_US',
        icon: Linkedin
      },
      {
        id: 'github',
        label: 'GitHub',
        text: 'Ver Código',
        href: 'https://github.com/rmotti',
        icon: Github
      }
    ],
    aboutCopy: {
      sectionTitle: 'Sobre Mim',
      sectionSubtitle: 'Minha jornada na tecnologia e como cheguei até aqui',
      skillsTitle: 'Habilidades Técnicas',
      educationTitle: 'Formação',
      languagesTitle: 'Idiomas',
      experienceTitle: 'Experiência Profissional'
    },
    projectModalLabels: {
      challengeTitle: 'O Desafio',
      solutionTitle: 'A Solução',
      resultsTitle: 'Resultados',
      technologiesTitle: 'Tecnologias',
      viewProject: 'Ver Projeto',
      viewCode: 'Código'
    },
    footerText: '© 2025 Rodrigo Motti - Todos os direitos reservados.'
  },
  en: {
    navLinks: [
      { id: 'hero', label: 'Home' },
      { id: 'projects', label: 'Projects' },
      { id: 'about', label: 'About Me' },
      { id: 'contact', label: 'Contact' }
    ],
    hero: {
      name: 'Rodrigo Motti',
      role: 'Backend Developer & Data Engineering',
      tagline: 'Solid backend, scalable data and applied AI — with the maturity to drive architecture decisions',
      description: 'Node.js · Python · Azure · SQL · Docker · n8n · AI Agents',
      profileImage,
      highlightEmoji: '👨‍💻',
      primaryCta: 'See Projects',
      secondaryCta: 'Explore My Journey'
    },
    socialLinks,
    projectsSection: {
      title: 'Featured Projects',
      subtitle: 'Every project reflects a challenge overcome and a new learning opportunity'
    },
    projects: [
      {
        ...sharedProjectMeta.mytripFrontend,
        title: 'MyTrip Travel Planner - Frontend',
        description: 'Travel planning platform',
        challenge: 'Allow travelers to plan budgets and savings for trips from scratch.',
        solution:
          'Built the entire React.js interface with authentication, trip planning, budgeting and real-time expense tracking.',
        results: 'Users plan trips with personalized budgets and monitor expenses in real time.',
        technologies: ['React', 'TypeScript']
      },
      {
        ...sharedProjectMeta.mytripBackend,
        title: 'MyTrip Travel Planner - Backend',
        description: 'API powering the travel planning platform',
        challenge: 'Deliver a secure API to manage users, trips, budgets and authentication end-to-end.',
        solution:
          'Developed a FastAPI service with PostgreSQL, SQLAlchemy and Alembic migrations plus Firebase-based authentication.',
        results: 'Provides secure auth, consistent data and fast integrations with the web dashboard.',
        technologies: ['FastAPI', 'PostgreSQL', 'Firebase']
      },
      {
        ...sharedProjectMeta.expressApi,
        title: 'Express API Template',
        description: 'Sample API built with Express.js',
        challenge: 'Design a backend ready for full CRUD operations with secure authentication.',
        solution:
          'Implemented an Express.js API using MongoDB and Mongoose with JWT + Bcrypt for robust auth flows.',
        results: 'Showcases best practices for authentication and persistence in a lean Node.js backend.',
        technologies: ['Express.js', 'MongoDB', 'JWT', 'Bcrypt']
      },
      {
        ...sharedProjectMeta.welnesshub,
        title: 'WellnessHub - Frontend',
        description: 'Student Management Interface for Personal Trainers',
        challenge: 'Create an intuitive interface for personal trainers to manage their students.',
        solution:
          'Built the frontend with React.js, delivering a smooth and accessible experience across devices.',
        results: 'User-friendly interface that simplifies navigation and student engagement with wellness content.',
        technologies: ['React.tsx', 'TypeScript', 'Vite']
      },
      {
        ...sharedProjectMeta.welnessHubApi,
        title: 'WellnessHub - Backend',
        description: 'API for a wellness platform',
        challenge: 'Develop an API to manage students, workouts and exercises.',
        solution:
          'Built the API with Node.js, using PostgreSQL hosted on Neon for persistence and JWT for secure authentication.',
        results: 'Efficient API that supports the core features of the wellness platform.',
        technologies: ['Node.js', 'PostgreSQL', 'JWT']
      }
    ],
    experiences: [
      {
        title: 'Software Engineer | AI, Cloud & Data',
        company: 'SENAI CIMATEC',
        period: 'January 2025 - Present',
        description:
          'Worked on two distinct projects focused on AI, Cloud, and Data solutions. Responsible for building data pipelines in Azure Data Factory (ADF) for ingestion and transformation from Cosmos DB and Blob Storage, creating Data Flows for complex JSON data structuring for Power BI reports, improving AI Agents with OCR and multimodal reading capabilities, developing and architecting a Node.js API integrated with WhatsApp, orchestrating automations with n8n, and containerizing the application with Docker.',
        technologies: ['Azure Data Factory', 'Cosmos DB', 'Power BI', 'Node.js', 'n8n', 'Docker', 'Python', 'SQL', 'Git']
      },
      {
        title: 'Volunteer Researcher',
        company: 'CIMATEC',
        period: 'August 2024 - Present',
        description:
          'Research project on gamification for database education, focusing on DQL queries. Developing a web system that includes multi-database SQL modeling, project architecture design, model creation, data seeding, and views.',
        technologies: ['PostgreSQL', 'Node.js', 'SQL', 'Data Modeling']
      },
      {
        title: 'Software Development Intern',
        company: 'CIMATEC',
        period: 'June 2024 - January 2025',
        description:
          'Worked across the full development cycle of a managerial ERP for Big Data, AI, and Software departments, focused on automating HR, Commercial, and project hour allocation processes.',
        technologies: ['PowerApps', 'Agile Methodologies', 'Scrum', 'Team Collaboration']
      },
      {
        title: 'Researcher',
        company: 'CIMATEC',
        period: 'March 2024 - July 2024',
        description:
          'Research project at the CIMATEC Advanced Manufacturing Plant, involving digital twin and predictive maintenance.',
        technologies: ['Python', 'JavaScript', 'Digital Twin']
      }
    ],
    skills: {
      Languages: ['Python', 'TypeScript', 'JavaScript'],
      Frontend: ['React', 'Next.js'],
      Backend: ['Node.js', 'FastAPI', 'Express'],
      'Data & Cloud': ['Azure Data Factory', 'Cosmos DB', 'Power BI', 'Azure', 'SQL', 'PostgreSQL', 'MongoDB'],
      Tools: ['Docker', 'n8n', 'Git/GitHub', 'Scrum'],
      'Areas of Interest': ['Data Engineering', 'Backend', 'AI Agents', 'Cloud']
    },
    education: [
      {
        course: 'Computer Engineering',
        institution: 'CIMATEC University',
        details: '2022-2026'
      },
      {
        course: 'English as a Second Language',
        institution: 'ACBEU',
        details: '2012-2018'
      }
    ],
    languages: [
      { language: 'Portuguese', level: 'Native', badgeVariant: undefined },
      { language: 'English', level: 'Advanced', badgeVariant: undefined },
      { language: 'Spanish', level: 'Basic', badgeVariant: 'outline' },
      { language: 'French', level: 'Basic', badgeVariant: 'outline' }
    ],
    contactSection: {
      title: "Let's Build Something Amazing?",
      subtitle:
        "I'm always open to new opportunities and collaborations. Let's talk about how I can help your next project."
    },
    contactMethods: [
      {
        id: 'email',
        label: 'Email',
        text: 'rmotti99@gmail.com',
        href: 'mailto:rmotti99@gmail.com',
        icon: Mail
      },
      {
        id: 'linkedin',
        label: 'LinkedIn',
        text: 'Connect',
        href: 'https://www.linkedin.com/in/rodrigo-motti-de-santana-2a2130294/?locale=en_US',
        icon: Linkedin
      },
      {
        id: 'github',
        label: 'GitHub',
        text: 'See Code',
        href: 'https://github.com/rmotti',
        icon: Github
      }
    ],
    aboutCopy: {
      sectionTitle: 'About Me',
      sectionSubtitle: 'My path in technology and how I got here',
      skillsTitle: 'Technical Skills',
      educationTitle: 'Education',
      languagesTitle: 'Languages',
      experienceTitle: 'Professional Experience'
    },
    projectModalLabels: {
      challengeTitle: 'Challenge',
      solutionTitle: 'Solution',
      resultsTitle: 'Results',
      technologiesTitle: 'Technologies',
      viewProject: 'View Project',
      viewCode: 'Source Code'
    },
    footerText: '© 2025 Rodrigo Motti - All rights reserved.'
  }
}
