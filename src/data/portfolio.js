import profileImage from '@/assets/Rodrigo_Motti.jpg'
import mytrip from '@/assets/mytrip.jpg'
import backendPlaceholder from '@/assets/backend-placeholder.svg'
import { Github, Instagram, Linkedin, Mail } from 'lucide-react'

export const navLinks = [
  { id: 'hero', label: 'Início' },
  { id: 'projects', label: 'Projetos' },
  { id: 'about', label: 'Sobre Mim' },
  { id: 'contact', label: 'Contato' }
]

export const heroContent = {
  name: 'Rodrigo Motti',
  role: 'Desenvolvedor FullStack',
  tagline: 'Construindo Soluções Digitais que Conectam Tecnologia e Pessoas',
  description:
    'Desenvolvedor Fullstack - FastAPI | React.js | SQL | TypeScript | Python | Node.js',
  profileImage,
  highlightEmoji: '👨‍💻'
}

export const socialLinks = [
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

export const projects = [
  {
    title: 'Planejador de Viagens MyTrip - Frontend',
    description: 'Sistema de planejamento de viagens',
    challenge:
      'Poder organizar suas viagens desde o embrião, planejando orçamento e dinheiro já guardado de forma personalizada.',
    solution:
      'Implementei uma aplicação fullstack com React.js no frontend. nela, o usuário pode criar contas, planejar viagens, definir orçamentos e acompanhar seus gastos em tempo real.',
    technologies: ['React', 'TypeScript'],
    image: mytrip,
    liveUrl: 'https://my-trip-frontend.vercel.app/',
    githubUrl: 'https://github.com/rmotti/myTrip-frontend'
  },
  {
    title: 'Planejador de Viagens MyTrip - Backend',
    description: 'API de Sistema de planejamento de viagens',
    challenge:
      'Criar uma API robusta para gerenciar usuários, viagens e orçamentos de forma segura e eficiente.',
    solution:
      'Criei uma API backend, utilizando FastAPI, onde é possível criar, ler, atualizar e excluir informações sobre usuários, viagens e orçamentos. O banco de dados utilizado foi  postgresql, utilizando SQLAlchemy como ORM e alembic para migrações. Para a autenticação do usuário, foi utilizado o banco de dados Firebase, garantindo segurança e integração direta com a conta google do usuário',
    technologies: ['FastAPI', 'PostgreSQL', 'Firebase'],
    image: backendPlaceholder,
    liveUrl: null,
    livePreviewDisabled: true,
    githubUrl: 'https://github.com/rmotti/myTrip-backend'
  },
    {
    title: 'Exemplo de API express - Backend',
    description: 'Api de exemplo utilizando express.js',
    challenge:
      'Criar uma API robusta para gerenciar usuários, viagens e orçamentos de forma segura e eficiente.',
    solution:
      'Criei uma API backend, utilizando Express.js, onde é possível criar, ler, atualizar e excluir informações sobre usuários e transações. O banco de dados utilizado foi mongodb, utilizando mongoose como ORM. Para a autenticação do usuário, foram utilizadas JWTs e Bcrypt para hash de senhas, garantindo segurança na autenticação.',
    technologies: ['Express.js', 'MongoDB', 'JWT', 'Bcrypt'],
    image: backendPlaceholder,
    liveUrl: null,
    livePreviewDisabled: true,
    githubUrl: 'https://github.com/rmotti/express-backend-example'
  }
]

export const experienceList = [
  {
    title: 'Desenvolvedor Júnior',
    company: 'CIMATEC',
    period: 'Janeiro de 2025 - Presente',
    description:
      'Atualmente, trabalho na criação de agentes de ia dentro da azure, usando promptflow. Atuei anteriormente no banco de dados em projeto com multinacional, participando desde os levantamentos de requisitos até a modelagem, desenvolvimento da base de dados e criação de procedures que futuramente serviram como base para fluxos automatizados, utilizando Power Automate.',
    technologies: ['Power Automate', 'SQL','PL-Sql','Modelagem de Dados', 'Azure', 'Promptflow', 'Python', 'IA']
  },
    {
    title: 'Estagiário em Desenvolvimento de Software',
    company: 'CIMATEC',
    period: 'Junho - Dezembro 2024',
    description:
      'Integrei a gerência de BigData/IA e Software, onde desenvolvi competências em PowerApps e participei ativamente de projetos internos, aprendendo sobre arquitetura de sistemas empresariais e metodologias de desenvolvimento em equipe.',
    technologies: ['PowerApps', 'Arquitetura de Sistemas', 'Scrum', 'Desenvolvimento em Equipe']
  },
  {
    title: 'Pesquisador Voluntário',
    company: 'CIMATEC',
    period: 'Março 2024 - Presente',
    description:
      'Conduzo pesquisa aplicada na gamificação no ensino de banco de dados, desenvolvendo sistema web, buscando validar metodologias e melhora no ensino da área em questão.',
    technologies: ['Postgresql', 'Node.js', 'Pesquisa Acadêmica', 'Banco de Dados']
  }

]

export const educationHistory = [
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
]

export const languageSkills = [
  { language: 'Português', level: 'Nativo', badgeVariant: undefined },
  { language: 'Inglês', level: 'Avançado', badgeVariant: undefined },
  { language: 'Espanhol', level: 'Básico', badgeVariant: 'outline' },
  { language: 'Francês', level: 'Básico', badgeVariant: 'outline' }
]

export const skills = {
  Linguagens: ['Python', 'TypeScript', 'JavaScript'],
  Frontend: ['React', 'Next'],
  Backend: ['FastAPI', 'Node.js', 'Express'],
  Databases: ['SQL', 'mySql', 'MongoDB'],
  Cloud: ['Azure'],
  'Ferramentas/Metodologias': ['Scrum', 'Git/GitHub'],
  'Áreas de Interesse': ['Desenvolvimento FullStack', 'Banco de Dados', 'BigData', 'IA']
}

export const contactMethods = [
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
]
