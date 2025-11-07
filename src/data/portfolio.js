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
      role: 'Desenvolvedor FullStack',
      tagline: 'Construindo soluções digitais que conectam tecnologia e pessoas',
      description: 'Desenvolvedor Fullstack - FastAPI | React.js | SQL | TypeScript | Python | Node.js',
      profileImage,
      highlightEmoji: '👨‍💻',
      primaryCta: 'Ver Projetos',
      secondaryCta: 'Conheça Minha Trajetória'
    },
    socialLinks,
    projectsSection: {
      title: 'Projetos em Destaque',
      subtitle: 'Cada projeto representa um desafio superado e uma oportunidade de aprendizado'
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
        title: 'Exemplo de API Express',
        description: 'API de demonstração utilizando Express.js',
        challenge: 'Definir um backend seguro e pronto para CRUD completo de usuários e transações.',
        solution:
          'Criei uma API com Express.js, MongoDB e Mongoose, aplicando JWT e Bcrypt para autenticação robusta.',
        results: 'Demonstra boas práticas de autenticação e persistência em um backend Node.js enxuto.',
        technologies: ['Express.js', 'MongoDB', 'JWT', 'Bcrypt']
      }
    ],
    experiences: [
      {
        title: 'Desenvolvedor Júnior',
        company: 'CIMATEC',
        period: 'Janeiro de 2025 - Presente',
        description:
          'Atuo criando agentes de IA na Azure usando PromptFlow. Também participei da modelagem de bases de dados e procedures em projetos com multinacionais.',
        technologies: ['Power Automate', 'SQL', 'PL-SQL', 'Modelagem de Dados', 'Azure', 'Promptflow', 'Python', 'IA']
      },
      {
        title: 'Estagiário em Desenvolvimento de Software',
        company: 'CIMATEC',
        period: 'Junho - Dezembro 2024',
        description:
          'Integrei a gerência de BigData/IA e Software, desenvolvendo com PowerApps e aprendendo sobre arquitetura de sistemas empresariais.',
        technologies: ['PowerApps', 'Arquitetura de Sistemas', 'Scrum', 'Trabalho em Equipe']
      },
      {
        title: 'Pesquisador Voluntário',
        company: 'CIMATEC',
        period: 'Março 2024 - Presente',
        description:
          'Conduzo pesquisa aplicada sobre gamificação no ensino de banco de dados, desenvolvendo soluções web para validação acadêmica.',
        technologies: ['PostgreSQL', 'Node.js', 'Pesquisa Acadêmica', 'Banco de Dados']
      }
    ],
    skills: {
      Linguagens: ['Python', 'TypeScript', 'JavaScript'],
      Frontend: ['React', 'Next'],
      Backend: ['FastAPI', 'Node.js', 'Express'],
      Bancos: ['SQL', 'MySQL', 'MongoDB'],
      Cloud: ['Azure'],
      'Ferramentas/Metodologias': ['Scrum', 'Git/GitHub'],
      'Áreas de Interesse': ['Desenvolvimento FullStack', 'Banco de Dados', 'Big Data', 'IA']
    },
    education: [
      {
        course: 'Engenharia de Computação',
        institution: 'Universidade CIMATEC',
        details: '2022-2026 • 8º semestre'
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
      },
      {
        id: 'instagram',
        label: 'Instagram',
        text: 'Seguir',
        href: 'https://instagram.com/rmotti_',
        icon: Instagram
      }
    ],
    aboutCopy: {
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
      role: 'Full-Stack Developer',
      tagline: 'Building digital solutions that connect technology and people',
      description: 'Fullstack developer - FastAPI | React.js | SQL | TypeScript | Python | Node.js',
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
        title: 'Express API Example',
        description: 'Sample API built with Express.js',
        challenge: 'Design a backend ready for full CRUD operations with secure authentication.',
        solution:
          'Implemented an Express.js API using MongoDB and Mongoose with JWT + Bcrypt for robust auth flows.',
        results: 'Showcases best practices for authentication and persistence in a lean Node.js backend.',
        technologies: ['Express.js', 'MongoDB', 'JWT', 'Bcrypt']
      }
    ],
    experiences: [
      {
        title: 'Junior Developer',
        company: 'CIMATEC',
        period: 'January 2025 - Present',
        description:
          'Build Azure Promptflow AI agents and previously modeled databases and procedures for multinational projects.',
        technologies: ['Power Automate', 'SQL', 'PL-SQL', 'Data Modeling', 'Azure', 'Promptflow', 'Python', 'AI']
      },
      {
        title: 'Software Development Intern',
        company: 'CIMATEC',
        period: 'June - December 2024',
        description:
          'Worked in the Big Data/AI and Software department using PowerApps while learning enterprise architecture practices.',
        technologies: ['PowerApps', 'Systems Architecture', 'Scrum', 'Team Collaboration']
      },
      {
        title: 'Volunteer Researcher',
        company: 'CIMATEC',
        period: 'March 2024 - Present',
        description:
          'Conduct applied research on gamification for database education, building web solutions for academic validation.',
        technologies: ['PostgreSQL', 'Node.js', 'Academic Research', 'Databases']
      }
    ],
    skills: {
      Languages: ['Python', 'TypeScript', 'JavaScript'],
      Frontend: ['React', 'Next'],
      Backend: ['FastAPI', 'Node.js', 'Express'],
      Databases: ['SQL', 'MySQL', 'MongoDB'],
      Cloud: ['Azure'],
      'Tools/Methodologies': ['Scrum', 'Git/GitHub'],
      'Areas of Interest': ['Full-Stack Development', 'Databases', 'Big Data', 'AI']
    },
    education: [
      {
        course: 'Computer Engineering',
        institution: 'Universidade CIMATEC',
        details: '2022-2026 • 8th semester'
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
      },
      {
        id: 'instagram',
        label: 'Instagram',
        text: 'Follow',
        href: 'https://instagram.com/rmotti_',
        icon: Instagram
      }
    ],
    aboutCopy: {
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
