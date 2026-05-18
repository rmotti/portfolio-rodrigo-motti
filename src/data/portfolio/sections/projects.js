import { sharedProjectMeta, projectImages } from '../shared'

// ============================================================================
// COPY: textos estáticos da seção de projetos (cabeçalhos, labels, CTAs)
// ============================================================================
export const projectsCopy = {
  pt: {
    eyebrow: 'Projetos',
    title: 'Veja abaixo meus projetos em destaque.',
    intro: 'Projetos pessoais são a melhor forma de expor competências técnicas desenvolvidas em minha trajetória. Cada projeto aqui resolve um problema real — com decisões técnicas defensáveis e código rodando em produção ou demo ao vivo.',
    featuredBadge: 'Em destaque',
    featuredCta: 'Ver detalhes',
    productsTitle: 'Outros projetos',
    experimentsTitle: 'Experimentos & boilerplates',
    experimentsCta: 'Ver no GitHub',
    frontendLabel: 'Frontend',
    backendLabel: 'Backend',
    placeholderTitle: 'Projeto em destaque chegando',
    placeholderDescription: 'Em breve vou destacar aqui o projeto que melhor representa onde quero ir. Por enquanto, dá uma olhada nos outros abaixo.',
    comingSoonBadge: 'Em breve',
    comingSoonHint: 'Em desenvolvimento'
  },
  en: {
    eyebrow: 'Projects',
    title: 'Check out my featured projects below.',
    intro: 'Personal projects are the best way to showcase the technical skills I built throughout my career. Each project here solves a real problem — with defensible technical decisions and code running in production or a live demo.',
    featuredBadge: 'Featured',
    featuredCta: 'View details',
    productsTitle: 'Other projects',
    experimentsTitle: 'Experiments & boilerplates',
    experimentsCta: 'View on GitHub',
    frontendLabel: 'Frontend',
    backendLabel: 'Backend',
    placeholderTitle: 'Featured project coming soon',
    placeholderDescription: "Soon I'll feature here the project that best represents where I want to go. For now, check out the others below.",
    comingSoonBadge: 'Coming soon',
    comingSoonHint: 'In development'
  }
}

// ============================================================================
// PROJETO FEATURED (destaque)
// Estrutura: { id, title, tagline, previewUrl, problem, decisions, results, technologies, githubUrl, liveUrl }
// ============================================================================
const fcCareerHubShared = {
  id: 'fc-career-hub',
  previewUrl: 'https://fc-career-hub.vercel.app/',
  technologies: [
    'Next.js',
    'Fastify',
    'TypeScript',
    'PostgreSQL',
    'Redis',
    'Docker',
    'Railway',
    'GitHub Actions',
    'Grafana',
    'Vitest',
    'k6',
    'Python',
    'Jupyter',
    'scikit-learn',
    'MCP',
    'OpenAI API'
  ]
}

const fcCareerHubPartsPt = [
  {
    kind: 'frontend',
    title: 'FC Career Hub — Frontend',
    githubUrl: 'https://github.com/rmotti/fc-career-hub',
    liveUrl: 'https://fc-career-hub.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vitest']
  },
  {
    kind: 'backend',
    title: 'FC Career Hub — Backend (API)',
    githubUrl: 'https://github.com/rmotti/career-hub-api',
    liveUrl: 'https://ample-love-production.up.railway.app/',
    technologies: [
      'Fastify',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Railway',
      'GitHub Actions',
      'Grafana',
      'Vitest',
      'k6',
      'MCP',
      'OpenAI API'
    ]
  }
]

const fcCareerHubPartsEn = [
  {
    kind: 'frontend',
    title: 'FC Career Hub — Frontend',
    githubUrl: 'https://github.com/rmotti/fc-career-hub',
    liveUrl: 'https://fc-career-hub.vercel.app/',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Vitest']
  },
  {
    kind: 'backend',
    title: 'FC Career Hub — Backend (API)',
    githubUrl: 'https://github.com/rmotti/career-hub-api',
    liveUrl: 'https://ample-love-production.up.railway.app/',
    technologies: [
      'Fastify',
      'TypeScript',
      'PostgreSQL',
      'Redis',
      'Docker',
      'Railway',
      'GitHub Actions',
      'Grafana',
      'Vitest',
      'k6',
      'MCP',
      'OpenAI API'
    ]
  }
]

export const featuredProject = {
  pt: {
    ...fcCareerHubShared,
    title: 'FC Career Hub',
    name: 'FC Career Hub',
    tagline: 'Hub de dados e scouting com IA para saves do Modo Carreira do EA FC',
    tags: ['Full-stack', 'Next.js', 'Fastify', 'AI'],
    problem:
      'Jogadores do Modo Carreira do EA FC não têm onde guardar o histórico dos seus saves — estatísticas de times e jogadores, evolução das temporadas e narrativa do save se perdem entre prints e anotações. Também falta uma forma rápida de scoutar reforços com consultas, listas personalizadas e recomendações inteligentes.',
    decisions:
      'Frontend em Next.js + TypeScript e backend em Fastify + TypeScript, com PostgreSQL e Redis para cache. Tudo containerizado com Docker e hospedado no Railway com CD automatizado. Observabilidade via Grafana, CI no GitHub Actions, testes unitários com Vitest e carga com k6. Pipeline de ETL em Jupyter Notebook usando scikit-learn, Gower, NumPy e Pandas alimenta uma feature de dados da plataforma. Inclui um MCP server integrado com a API da OpenAI, expondo um chatbot com persona de assistente técnico virtual.',
    results:
      'MVP em produção com stack completa de engenharia (cache, observabilidade, CI/CD, testes de carga) e duas frentes diferenciadas: ETL para enriquecimento de dados e assistente conversacional via MCP + OpenAI.',
    parts: fcCareerHubPartsPt
  },
  en: {
    ...fcCareerHubShared,
    title: 'FC Career Hub',
    name: 'FC Career Hub',
    tagline: 'Data and AI scouting hub for EA FC Career Mode saves',
    tags: ['Full-stack', 'Next.js', 'Fastify', 'AI'],
    problem:
      'EA FC Career Mode players have nowhere to store the history of their saves — team and player stats, season-by-season progression and the save narrative get lost across screenshots and notes. There is also no quick way to scout signings with custom queries, lists and smart recommendations.',
    decisions:
      'Next.js + TypeScript frontend and Fastify + TypeScript backend, with PostgreSQL and Redis for caching. Everything containerized with Docker and hosted on Railway with automated CD. Observability via Grafana, CI on GitHub Actions, unit tests with Vitest and load tests with k6. An ETL pipeline in Jupyter Notebook using scikit-learn, Gower, NumPy and Pandas feeds a data feature into the platform. Includes an MCP server integrated with the OpenAI API, exposing a chatbot with a virtual technical assistant persona.',
    results:
      'MVP in production with a full engineering stack (cache, observability, CI/CD, load testing) and two differentiated tracks: an ETL pipeline for data enrichment and a conversational assistant via MCP + OpenAI.',
    parts: fcCareerHubPartsEn
  }
}

// ============================================================================
// PROJETOS (lista principal de projetos exibidos na seção "Outros projetos")
// ============================================================================
export const projects = {
  pt: [
    {
      id: 'wellnesshub',
      name: 'WellnessHub',
      tagline: 'Gestão de alunos para personal trainers',
      image: projectImages.backendPlaceholder,
      previewUrl: 'https://wellness-hub-frontend-one.vercel.app/',
      tags: ['Full-stack', 'React', 'Node.js'],
      problem:
        'Personal trainers gerenciam alunos, treinos e exercícios em planilhas e WhatsApp — sem uma plataforma central que os clientes também acessem.',
      decisions:
        'Frontend em React + Vite com foco em UX simples; API Node.js com PostgreSQL hospedado no Neon e autenticação JWT. Arquitetura preparada pra escalar pra múltiplos personais por instância.',
      results:
        'Interface amigável em produção que facilita a navegação dos alunos e centraliza a operação do personal trainer.',
      parts: [
        {
          kind: 'frontend',
          ...sharedProjectMeta.welnesshub,
          title: 'WellnessHub — Frontend',
          technologies: ['React', 'TypeScript', 'Vite']
        },
        {
          kind: 'backend',
          ...sharedProjectMeta.welnessHubApi,
          title: 'WellnessHub — Backend',
          technologies: ['Node.js', 'PostgreSQL', 'JWT', 'Neon']
        }
      ]
    },
    {
      id: 'mytrip',
      name: 'MyTrip',
      tagline: 'Planejador de viagens com orçamento e gastos em tempo real',
      image: projectImages.mytrip,
      previewUrl: 'https://my-trip-frontend.vercel.app/',
      tags: ['Full-stack', 'React', 'FastAPI'],
      problem:
        'Viajantes precisam organizar viagens desde a ideia inicial — planejando orçamento, controlando o que já guardaram e acompanhando gastos sem planilha.',
      decisions:
        'Frontend em React + TypeScript com autenticação Firebase; backend em FastAPI + PostgreSQL com SQLAlchemy e migrações via Alembic. Optei por Firebase Auth pra remover overhead de gestão de identidade.',
      results:
        'Usuários planejam viagens com orçamentos personalizados, acompanham gastos em tempo real e o app está em produção no Vercel.',
      parts: [
        {
          kind: 'frontend',
          ...sharedProjectMeta.mytripFrontend,
          title: 'MyTrip — Frontend',
          technologies: ['React', 'TypeScript', 'Vite']
        },
        {
          kind: 'backend',
          ...sharedProjectMeta.mytripBackend,
          title: 'MyTrip — Backend',
          technologies: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Firebase Auth']
        }
      ]
    },
    {
      id: 'filtros-digitais',
      name: 'Filtros digitais aplicados a músicas',
      tagline: 'Processamento de sinais em Python para filtragem de áudio',
      image: null,
      tags: ['Python', 'DSP', 'Áudio'],
      problem:
        'Trabalho acadêmico de Processamento Digital de Sinais exigia aplicar filtros digitais (passa-baixa, passa-alta, passa-banda) em trechos musicais e analisar o efeito no espectro do sinal.',
      decisions:
        'Implementação em Python usando NumPy para o processamento numérico dos coeficientes, SoundFile para leitura/escrita dos arquivos de áudio e Matplotlib pra visualizar forma de onda e espectro antes/depois da filtragem.',
      results:
        'Geração dos áudios filtrados e dos gráficos comparativos de espectro, evidenciando a atenuação das faixas de frequência alvo de cada filtro.',
      technologies: ['Python', 'NumPy', 'Matplotlib', 'SoundFile'],
      githubUrl: 'https://github.com/rmotti/av2-PDS',
      liveUrl: null,
      livePreviewDisabled: true,
      parts: []
    },
    {
      id: 'sql-challenge',
      name: 'SQL Challenge',
      tagline: 'Plataforma gamificada para aprendizado de SQL',
      image: null,
      tags: ['Full-stack', 'React', 'FastAPI'],
      comingSoon: true,
      problem:
        'Aprender SQL na prática é difícil sem um ambiente seguro pra escrever queries reais, com feedback imediato e progressão clara.',
      decisions:
        'Em construção: plataforma gamificada com desafios progressivos, execução de queries em sandbox e acompanhamento de progresso.',
      results: 'Projeto em desenvolvimento — em breve mais detalhes por aqui.',
      parts: []
    }
  ],
  en: [
    {
      id: 'wellnesshub',
      name: 'WellnessHub',
      tagline: 'Student management for personal trainers',
      image: projectImages.backendPlaceholder,
      previewUrl: 'https://wellness-hub-frontend-one.vercel.app/',
      tags: ['Full-stack', 'React', 'Node.js'],
      problem:
        'Personal trainers manage students, workouts and exercises across spreadsheets and WhatsApp — without a central platform their clients can also access.',
      decisions:
        'React + Vite frontend focused on simple UX; Node.js API with PostgreSQL hosted on Neon and JWT auth. Architecture ready to scale to multiple trainers per instance.',
      results:
        'User-friendly interface in production that streamlines student navigation and centralizes the trainer operation.',
      parts: [
        {
          kind: 'frontend',
          ...sharedProjectMeta.welnesshub,
          title: 'WellnessHub — Frontend',
          technologies: ['React', 'TypeScript', 'Vite']
        },
        {
          kind: 'backend',
          ...sharedProjectMeta.welnessHubApi,
          title: 'WellnessHub — Backend',
          technologies: ['Node.js', 'PostgreSQL', 'JWT', 'Neon']
        }
      ]
    },
    {
      id: 'mytrip',
      name: 'MyTrip',
      tagline: 'Travel planner with real-time budget and expense tracking',
      image: projectImages.mytrip,
      previewUrl: 'https://my-trip-frontend.vercel.app/',
      tags: ['Full-stack', 'React', 'FastAPI'],
      problem:
        'Travelers need to organize trips from the initial idea — planning budget, tracking what they have already saved and monitoring expenses without a spreadsheet.',
      decisions:
        'React + TypeScript frontend with Firebase authentication; FastAPI + PostgreSQL backend with SQLAlchemy and Alembic migrations. Chose Firebase Auth to remove the identity management overhead.',
      results:
        'Users plan trips with personalized budgets, monitor expenses in real time, and the app is live on Vercel.',
      parts: [
        {
          kind: 'frontend',
          ...sharedProjectMeta.mytripFrontend,
          title: 'MyTrip — Frontend',
          technologies: ['React', 'TypeScript', 'Vite']
        },
        {
          kind: 'backend',
          ...sharedProjectMeta.mytripBackend,
          title: 'MyTrip — Backend',
          technologies: ['FastAPI', 'PostgreSQL', 'SQLAlchemy', 'Firebase Auth']
        }
      ]
    },
    {
      id: 'filtros-digitais',
      name: 'Digital filters applied to music',
      tagline: 'Signal processing in Python for audio filtering',
      image: null,
      tags: ['Python', 'DSP', 'Audio'],
      problem:
        'Academic DSP assignment required applying digital filters (low-pass, high-pass, band-pass) to music excerpts and analyzing how the signal spectrum changes.',
      decisions:
        'Built in Python using NumPy for the numerical filter coefficients, SoundFile for reading/writing audio files and Matplotlib to plot waveform and spectrum before and after filtering.',
      results:
        'Produced the filtered audio outputs and side-by-side spectrum plots, showing the attenuation of the target frequency bands for each filter.',
      technologies: ['Python', 'NumPy', 'Matplotlib', 'SoundFile'],
      githubUrl: 'https://github.com/rmotti/av2-PDS',
      liveUrl: null,
      livePreviewDisabled: true,
      parts: []
    },
    {
      id: 'wellnesshub',
      name: 'WellnessHub',
      tagline: 'Student management for personal trainers',
      image: projectImages.backendPlaceholder,
      previewUrl: 'https://wellness-hub-frontend-one.vercel.app/',
      tags: ['Full-stack', 'React', 'Node.js'],
      problem:
        'Personal trainers manage students, workouts and exercises across spreadsheets and WhatsApp — without a central platform their clients can also access.',
      decisions:
        'React + Vite frontend focused on simple UX; Node.js API with PostgreSQL hosted on Neon and JWT auth. Architecture ready to scale to multiple trainers per instance.',
      results:
        'User-friendly interface in production that streamlines student navigation and centralizes the trainer operation.',
      parts: [
        {
          kind: 'frontend',
          ...sharedProjectMeta.welnesshub,
          title: 'WellnessHub — Frontend',
          technologies: ['React', 'TypeScript', 'Vite']
        },
        {
          kind: 'backend',
          ...sharedProjectMeta.welnessHubApi,
          title: 'WellnessHub — Backend',
          technologies: ['Node.js', 'PostgreSQL', 'JWT', 'Neon']
        }
      ]
    }
  ]
}

// ============================================================================
// EXPERIMENTOS / BOILERPLATES (cards menores no fim da seção)
// ============================================================================
export const experiments = {
  pt: [
    {
      title: 'Fit Score SVC',
      description:
        'API REST com ML que avalia o quanto jogadores de futebol se encaixam em perfis de time e posições, calculando similaridade com padrões históricos de transferências via distância de Gower.',
      technologies: ['FastAPI', 'scikit-learn', 'Pandas', 'Gower', 'Python'],
      githubUrl: 'https://github.com/rmotti/fit-score-svc'
    },
    {
      title: 'Template de API Express',
      description: 'Boilerplate Node.js com JWT, Bcrypt e MongoDB pra acelerar novos backends.',
      technologies: ['Express.js', 'MongoDB', 'JWT'],
      githubUrl: sharedProjectMeta.expressApi.githubUrl
    }
  ],
  en: [
    {
      title: 'Fit Score SVC',
      description:
        'ML-powered REST API that evaluates how well football players fit specific team profiles and positions, scoring similarity against historical transfer patterns via Gower distance.',
      technologies: ['FastAPI', 'scikit-learn', 'Pandas', 'Gower', 'Python'],
      githubUrl: 'https://github.com/rmotti/fit-score-svc'
    },
    {
      title: 'Express API Template',
      description: 'Node.js boilerplate with JWT, Bcrypt and MongoDB to speed up new backends.',
      technologies: ['Express.js', 'MongoDB', 'JWT'],
      githubUrl: sharedProjectMeta.expressApi.githubUrl
    }
  ]
}

// ============================================================================
// LABELS do modal de detalhes do projeto
// ============================================================================
export const projectModalLabels = {
  pt: {
    problemTitle: 'Problema',
    decisionsTitle: 'Decisões técnicas',
    resultsTitle: 'Resultado',
    technologiesTitle: 'Stack',
    viewProject: 'Ver Live',
    viewCode: 'Ver Código',
    previewUnavailable: 'Preview indisponível'
  },
  en: {
    problemTitle: 'Problem',
    decisionsTitle: 'Technical decisions',
    resultsTitle: 'Outcome',
    technologiesTitle: 'Stack',
    viewProject: 'Live demo',
    viewCode: 'Source code',
    previewUnavailable: 'Preview unavailable'
  }
}
