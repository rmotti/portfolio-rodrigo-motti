import { sharedProjectMeta } from '../shared'

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
    experimentsTitle: 'Experimentos & provas de conceito',
    experimentsCta: 'Ver no GitHub',
    experimentsPrivate: 'Código fechado',
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
    experimentsTitle: 'Experiments & proofs of concept',
    experimentsCta: 'View on GitHub',
    experimentsPrivate: 'Closed source',
    frontendLabel: 'Frontend',
    backendLabel: 'Backend',
    placeholderTitle: 'Featured project coming soon',
    placeholderDescription: "Soon I'll feature here the project that best represents where I want to go. For now, check out the others below.",
    comingSoonBadge: 'Coming soon',
    comingSoonHint: 'In development'
  }
}

// ============================================================================
// PROJETO FEATURED (destaque) — CV Tracker
// Estrutura: { id, title, tagline, previewUrl, problem, decisions, results, technologies, githubUrl, liveUrl }
//
// Os repos são privados: as `parts` usam `codeUnavailable` no lugar de
// `githubUrl`, e o modal renderiza um botão travado em vez de um link 404.
// ============================================================================
const cvTrackerShared = {
  id: 'cv-tracker',
  previewUrl: 'https://cv-tracker-delta.vercel.app/',
  technologies: [
    'LangGraph',
    'LangChain',
    'FastAPI',
    'Python',
    'Pydantic',
    'PostgreSQL',
    'pgvector',
    'SQLAlchemy',
    'Alembic',
    'Next.js',
    'TypeScript',
    'Clerk',
    'OpenAI API',
    'Langfuse',
    'Railway',
    'Vercel'
  ]
}

const cvTrackerParts = [
  {
    kind: 'frontend',
    title: 'CV Tracker — Frontend',
    liveUrl: 'https://cv-tracker-delta.vercel.app/',
    codeUnavailable: true,
    technologies: ['Next.js', 'App Router', 'TypeScript', 'Tailwind CSS', 'Clerk']
  },
  {
    kind: 'backend',
    title: 'CV Tracker — Backend (API + pipeline)',
    liveUrl: null,
    livePreviewDisabled: true,
    codeUnavailable: true,
    technologies: [
      'FastAPI',
      'LangGraph',
      'LangChain',
      'Pydantic',
      'PostgreSQL',
      'pgvector',
      'SQLAlchemy',
      'Alembic',
      'Clerk',
      'OpenAI API',
      'Langfuse'
    ]
  }
]

export const featuredProject = {
  pt: {
    ...cvTrackerShared,
    title: 'CV Tracker',
    name: 'CV Tracker',
    tagline: 'Currículo sob medida por vaga, ancorado em evidência real e blindado contra alucinação',
    tags: ['Full-stack', 'LangGraph', 'FastAPI', 'AI'],
    problem:
      'Quem se candidata a várias vagas precisa adaptar o currículo a cada uma. A alternativa gratuita — colar CV e descrição da vaga num chatbot — devolve um texto que soa ótimo mas inventa experiência que a pessoa não tem, e isso desmorona na entrevista.',
    decisions:
      'Pipeline multiagente em LangGraph (Job Parser → Retriever → Gap Analyzer → Tailor → Critic, com aresta condicional que devolve para revisão até convergir) sobre um banco de evidências de carreira com RAG em pgvector. A anti-fabricação é arquitetura, não prompt: toda saída dos agentes é contrato Pydantic tipado, o markdown do CV é renderizado em código (e não pelo modelo), e o veredito do Critic passa por gates factuais em vez de média de nota — cada bullet rastreia ids de evidência reais. Em volta desse core, uma camada de produto multiusuário: API FastAPI como resource server do Clerk, domínio SQLAlchemy + Alembic e UI Next.js App Router, com observabilidade em Langfuse.',
    results:
      'MVP em produção com export de PDF, import de currículo, CRUD de experiências e explicabilidade por agente. O custo por geração foi medido em produção (mediana de R$ 0,58) antes de existir cobrança, e o projeto é conduzido spec-driven: cada arquivo tem uma spec dona e um script detecta divergência entre design e código.',
    parts: cvTrackerParts
  },
  en: {
    ...cvTrackerShared,
    title: 'CV Tracker',
    name: 'CV Tracker',
    tagline: 'Job-tailored resumes grounded in real evidence and hardened against hallucination',
    tags: ['Full-stack', 'LangGraph', 'FastAPI', 'AI'],
    problem:
      'Anyone applying to several openings has to tailor their resume for each one. The free alternative — pasting the resume and the job description into a chatbot — returns text that reads well but invents experience the person never had, which collapses in the interview.',
    decisions:
      'Multi-agent LangGraph pipeline (Job Parser → Retriever → Gap Analyzer → Tailor → Critic, with a conditional edge that loops back for revision until it converges) on top of a career evidence store with RAG on pgvector. Anti-fabrication is architecture, not prompting: every agent output is a typed Pydantic contract, the resume markdown is rendered in code rather than by the model, and the Critic verdict runs through factual gates instead of an averaged score — each bullet traces back to real evidence ids. Around that core sits a multi-user product layer: a FastAPI service acting as a Clerk resource server, a SQLAlchemy + Alembic domain and a Next.js App Router UI, with Langfuse observability.',
    results:
      'MVP in production with PDF export, resume import, experience CRUD and per-agent explainability. Cost per generation was measured in production (median of R$ 0.58) before any billing existed, and the project runs spec-driven: every file has an owning spec and a script detects drift between design and code.',
    parts: cvTrackerParts
  }
}

// ============================================================================
// PROJETOS (lista principal de projetos exibidos na seção "Outros projetos")
// ============================================================================
const fcCareerHubParts = [
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

export const projects = {
  pt: [
    {
      id: 'fc-career-hub',
      name: 'FC Career Hub',
      tagline: 'Hub de dados e scouting com IA para saves do Modo Carreira do EA FC',
      image: null,
      previewUrl: 'https://fc-career-hub.vercel.app/',
      tags: ['Full-stack', 'Next.js', 'Fastify', 'AI'],
      problem:
        'Jogadores do Modo Carreira do EA FC não têm onde guardar o histórico dos seus saves — estatísticas de times e jogadores, evolução das temporadas e narrativa do save se perdem entre prints e anotações. Também falta uma forma rápida de scoutar reforços com consultas, listas personalizadas e recomendações inteligentes.',
      decisions:
        'Frontend em Next.js + TypeScript e backend em Fastify + TypeScript, com PostgreSQL e Redis para cache. Tudo containerizado com Docker e hospedado no Railway com CD automatizado. Observabilidade via Grafana, CI no GitHub Actions, testes unitários com Vitest e carga com k6. Pipeline de ETL em Jupyter Notebook usando scikit-learn, Gower, NumPy e Pandas alimenta uma feature de dados da plataforma. Inclui um MCP server integrado com a API da OpenAI, expondo um chatbot com persona de assistente técnico virtual.',
      results:
        'MVP em produção com stack completa de engenharia (cache, observabilidade, CI/CD, testes de carga) e duas frentes diferenciadas: ETL para enriquecimento de dados e assistente conversacional via MCP + OpenAI.',
      parts: fcCareerHubParts
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
      id: 'fc-career-hub',
      name: 'FC Career Hub',
      tagline: 'Data and AI scouting hub for EA FC Career Mode saves',
      image: null,
      previewUrl: 'https://fc-career-hub.vercel.app/',
      tags: ['Full-stack', 'Next.js', 'Fastify', 'AI'],
      problem:
        'EA FC Career Mode players have nowhere to store the history of their saves — team and player stats, season-by-season progression and the save narrative get lost across screenshots and notes. There is also no quick way to scout signings with custom queries, lists and smart recommendations.',
      decisions:
        'Next.js + TypeScript frontend and Fastify + TypeScript backend, with PostgreSQL and Redis for caching. Everything containerized with Docker and hosted on Railway with automated CD. Observability via Grafana, CI on GitHub Actions, unit tests with Vitest and load tests with k6. An ETL pipeline in Jupyter Notebook using scikit-learn, Gower, NumPy and Pandas feeds a data feature into the platform. Includes an MCP server integrated with the OpenAI API, exposing a chatbot with a virtual technical assistant persona.',
      results:
        'MVP in production with a full engineering stack (cache, observability, CI/CD, load testing) and two differentiated tracks: an ETL pipeline for data enrichment and a conversational assistant via MCP + OpenAI.',
      parts: fcCareerHubParts
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
      id: 'sql-challenge',
      name: 'SQL Challenge',
      tagline: 'Gamified platform for learning SQL',
      image: null,
      tags: ['Full-stack', 'React', 'FastAPI'],
      comingSoon: true,
      problem:
        'Learning SQL hands-on is hard without a safe environment to write real queries, with immediate feedback and clear progression.',
      decisions:
        'Under construction: a gamified platform with progressive challenges, sandboxed query execution and progress tracking.',
      results: 'Project in development — more details coming here soon.',
      parts: []
    }
  ]
}

// ============================================================================
// EXPERIMENTOS / PROVAS DE CONCEITO (cards menores no fim da seção)
// `githubUrl` é opcional: sem ele o card renderiza sem link, com o selo
// `experimentsPrivate` no lugar do CTA.
// ============================================================================
export const experiments = {
  pt: [
    {
      title: 'PoC: Apache Pinot vs PostgreSQL',
      description:
        'Benchmark de engines de consulta sobre telemetria de tráfego aéreo não tripulado (Net-RID / ASTM F3411). Kafka alimenta os dois ramos com os mesmos offsets; upsert FULL e índice H3 no Pinot contra PostGIS com GiST. Em 6M de linhas o Pinot ganhou de 11× a 27× nas queries analíticas, e o PostgreSQL venceu em busca pontual — o que decide é o volume varrido por query, não a concorrência.',
      technologies: ['Apache Pinot', 'PostgreSQL', 'PostGIS', 'Kafka', 'Docker', 'Python'],
      githubUrl: null
    },
    {
      title: 'PoC: MLflow — baseline → challenger → champion',
      description:
        'Ciclo mínimo de MLOps para detecção de anomalias em trilhas de voo sintéticas: dois candidatos treinados sobre o mesmo dataset versionado, comparados por F1 de teste e registrados como versões de um mesmo modelo, com o vencedor promovido pelo alias champion. O split por trajetória expôs o sobreajuste do challenger, que tinha F1 perfeito na validação.',
      technologies: ['MLflow', 'scikit-learn', 'Python', 'Docker', 'uv'],
      githubUrl: null
    },
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
      title: 'PoC: Apache Pinot vs PostgreSQL',
      description:
        'Query engine benchmark over unmanned air traffic telemetry (Net-RID / ASTM F3411). Kafka feeds both branches from the same offsets; FULL upsert and an H3 index on Pinot against PostGIS with GiST. At 6M rows Pinot won by 11× to 27× on analytical queries, while PostgreSQL won on point lookups — what decides is the volume each query scans, not concurrency.',
      technologies: ['Apache Pinot', 'PostgreSQL', 'PostGIS', 'Kafka', 'Docker', 'Python'],
      githubUrl: null
    },
    {
      title: 'PoC: MLflow — baseline → challenger → champion',
      description:
        'Minimal MLOps cycle for anomaly detection on synthetic flight tracks: two candidates trained on the same versioned dataset, compared by test F1 and registered as versions of a single model, with the winner promoted through the champion alias. The per-trajectory split exposed the challenger overfitting despite its perfect validation F1.',
      technologies: ['MLflow', 'scikit-learn', 'Python', 'Docker', 'uv'],
      githubUrl: null
    },
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
    previewUnavailable: 'Preview indisponível',
    codeUnavailable: 'Repositório privado'
  },
  en: {
    problemTitle: 'Problem',
    decisionsTitle: 'Technical decisions',
    resultsTitle: 'Outcome',
    technologiesTitle: 'Stack',
    viewProject: 'Live demo',
    viewCode: 'Source code',
    previewUnavailable: 'Preview unavailable',
    codeUnavailable: 'Private repository'
  }
}
