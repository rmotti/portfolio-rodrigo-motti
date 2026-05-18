// ============================================================================
// COPY: textos da seção "Trajetória / Journey" (cabeçalhos e títulos)
// ============================================================================
export const aboutCopy = {
  pt: {
    eyebrow: 'Trajetória',
    sectionTitle: 'Três anos construindo IA, dados e backend em produção.',
    intro:
      'Comecei como desenvolvedor fullstack, criando ERP gerencial e automatizando processos internos, passei por DBA e arquiteto de sistemas com multiplos bancos de dados e hoje arquiteto sistemas orientados a dados e orquestrados por agentes de IA. Cada parada me deu uma peça do quebra-cabeça — da modelagem de dados à orquestração de agentes.',
    deliveriesTitle: 'O que tenho entregue',
    deliveries: [
      'APIs REST em Node.js/TypeScript com arquitetura orientada a agentes',
      'Modelagem e gestão de múltiplos bancos relacionais em ambiente de produção',
      'Pipelines ETL/ELT em Azure Data Factory com múltiplas fontes de dados',
      'Automação de fluxos com orquestração via n8n e integração com APIs externas',
      'Integração de capacidades multimodais via Azure AI Services em pipelines de agentes'
    ],
    experienceTitle: 'Linha do tempo',
    skillsTitle: 'Stack & ferramentas',
    educationTitle: 'Formação',
    languagesTitle: 'Idiomas'
  },
  en: {
    eyebrow: 'Journey',
    sectionTitle: 'Three years building AI, data and backend in production.',
    intro:
      'I started as a fullstack developer, building management ERPs and automating internal processes, moved on to DBA and systems architect working with multiple databases, and today I architect data-driven systems orchestrated by AI agents. Every stop gave me a piece of the puzzle — from data modeling to agent orchestration.',
    deliveriesTitle: "What I've delivered",
    deliveries: [
      'REST APIs in Node.js/TypeScript with agent-oriented architecture',
      'Modeling and management of multiple relational databases in production',
      'ETL/ELT pipelines in Azure Data Factory with multiple data sources',
      'Workflow automation orchestrated via n8n and external API integrations',
      'Multimodal capabilities via Azure AI Services integrated into agent pipelines'
    ],
    experienceTitle: 'Timeline',
    skillsTitle: 'Stack & tools',
    educationTitle: 'Education',
    languagesTitle: 'Languages'
  }
}

// ============================================================================
// EXPERIÊNCIAS (timeline). Ordem da lista = ordem exibida (mais recente primeiro).
// ============================================================================
export const experiences = {
  pt: [
    {
      title: 'Engenheiro de Software | IA, Cloud & Dados',
      company: 'SENAI CIMATEC',
      period: 'Janeiro 2025 - Presente',
      highlight: 'Desenvolvimento de produtos digitais em produção integrando IA aplicada, automação e infraestrutura cloud.',
      bullets: [
        'APIs REST em Node.js/TypeScript com integrações a canais conversacionais e serviços externos',
        'Pipelines ETL/ELT em Azure Data Factory com ingestão do Cosmos DB e Blob Storage',
        'Orquestração de fluxos e automações via n8n',
        'Integração de capacidades multimodais via Azure AI Services em pipelines de agentes'
      ],
      technologies: ['Azure Data Factory', 'Cosmos DB', 'Power BI', 'Node.js', 'n8n', 'Docker', 'Python', 'SQL', 'Git']
    },
    {
      title: 'Pesquisador',
      company: 'CIMATEC',
      period: 'Março 2023 - Presente',
      highlight: 'Pesquisa aplicada em gamificação do ensino de SQL, com publicação científica resultante.',
      bullets: [
        'Modelagem de múltiplos bancos relacionais e integração entre sistemas',
        'Arquitetura e implementação de plataforma web de aprendizado gamificado',
        'Criação de modelos, views e povoamento dos bancos em ambiente de pesquisa'
      ],
      technologies: ['PostgreSQL', 'Node.js', 'SQL', 'Modelagem de Dados']
    },
    {
      title: 'Estagiário em Desenvolvimento de Software',
      company: 'CIMATEC',
      period: 'Junho 2024 - Janeiro 2025',
      highlight: 'Desenvolvimento de ERP gerencial para os setores de Big Data/IA e Software, cobrindo o ciclo completo da aplicação.',
      bullets: [
        'Modelagem de dados e regras de negócio com integridade referencial entre colaboradores e projetos',
        'Automação de processos de alocação de RH e gestão de vagas',
        'Gestão de orçamentos e análise de custo de time por projeto'
      ],
      technologies: ['PowerApps', 'Metodologias Ágeis', 'Scrum', 'Trabalho em Equipe']
    }

  ],
  en: [
    {
      title: 'Software Engineer | AI, Cloud & Data',
      company: 'SENAI CIMATEC',
      period: 'January 2025 - Present',
      highlight: 'Building digital products in production combining applied AI, automation and cloud infrastructure.',
      bullets: [
        'REST APIs in Node.js/TypeScript with integrations to conversational channels and external services',
        'ETL/ELT pipelines in Azure Data Factory ingesting from Cosmos DB and Blob Storage',
        'Workflow and automation orchestration via n8n',
        'Multimodal capabilities via Azure AI Services integrated into agent pipelines'
      ],
      technologies: ['Azure Data Factory', 'Cosmos DB', 'Power BI', 'Node.js', 'n8n', 'Docker', 'Python', 'SQL', 'Git']
    },
    {
      title: 'Researcher',
      company: 'CIMATEC',
      period: 'March 2023 - Present',
      highlight: 'Applied research on gamification for SQL teaching, with a resulting scientific publication.',
      bullets: [
        'Modeling of multiple relational databases and integration between systems',
        'Architecture and implementation of a gamified learning web platform',
        'Creation of models, views and data seeding in a research environment'
      ],
      technologies: ['PostgreSQL', 'Node.js', 'SQL', 'Data Modeling']
    },
    {
      title: 'Software Development Intern',
      company: 'CIMATEC',
      period: 'June 2024 - January 2025',
      highlight: 'Built a managerial ERP for the Big Data/AI and Software departments, covering the full application lifecycle.',
      bullets: [
        'Data modeling and business rules with referential integrity between collaborators and projects',
        'Automation of HR allocation and open-position management processes',
        'Budget management and team cost analysis per project'
      ],
      technologies: ['PowerApps', 'Agile Methodologies', 'Scrum', 'Team Collaboration']
    }
  ]
}

// ============================================================================
// SKILLS (agrupadas por categoria — chave do objeto = nome da categoria)
// ============================================================================
export const skills = {
  pt: {
    Linguagens: ['Python', 'TypeScript', 'JavaScript'],
    Frontend: ['React', 'Next.js'],
    Backend: ['Node.js', 'FastAPI', 'Express'],
    'Dados & Cloud': ['Azure Data Factory', 'Cosmos DB', 'Power BI', 'Azure', 'SQL', 'PostgreSQL', 'MongoDB'],
    Ferramentas: ['Docker', 'n8n', 'Git/GitHub', 'Scrum'],
    'Áreas de Interesse': ['Engenharia de Dados', 'Backend', 'Agentes de IA', 'Cloud']
  },
  en: {
    Languages: ['Python', 'TypeScript', 'JavaScript'],
    Frontend: ['React', 'Next.js'],
    Backend: ['Node.js', 'FastAPI', 'Express'],
    'Data & Cloud': ['Azure Data Factory', 'Cosmos DB', 'Power BI', 'Azure', 'SQL', 'PostgreSQL', 'MongoDB'],
    Tools: ['Docker', 'n8n', 'Git/GitHub', 'Scrum'],
    'Areas of Interest': ['Data Engineering', 'Backend', 'AI Agents', 'Cloud']
  }
}

// ============================================================================
// FORMAÇÃO ACADÊMICA
// ============================================================================
export const education = {
  pt: [
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
  en: [
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
  ]
}

// ============================================================================
// IDIOMAS FALADOS. `badgeVariant: 'outline'` = badge mais discreto (básico).
// ============================================================================
export const spokenLanguages = {
  pt: [
    { language: 'Português', level: 'Nativo', badgeVariant: undefined },
    { language: 'Inglês', level: 'Avançado', badgeVariant: undefined },
    { language: 'Espanhol', level: 'Básico', badgeVariant: 'outline' },
    { language: 'Francês', level: 'Básico', badgeVariant: 'outline' }
  ],
  en: [
    { language: 'Portuguese', level: 'Native', badgeVariant: undefined },
    { language: 'English', level: 'Advanced', badgeVariant: undefined },
    { language: 'Spanish', level: 'Basic', badgeVariant: 'outline' },
    { language: 'French', level: 'Basic', badgeVariant: 'outline' }
  ]
}
