import profileImage from '@/assets/Rodrigo_Motti.jpeg'

// Seção Hero (topo da página). `manifestoHighlight` precisa ser uma string
// contida em alguma linha do array `manifesto` para o destaque funcionar.
export const hero = {
  pt: {
    name: 'Rodrigo Motti',
    role: 'AI Engineer · Backend & Data',
    manifesto: ['APIs, dados e', 'agentes de IA', 'em produção.'],
    manifestoHighlight: 'agentes de IA',
    subtitle: 'Construo sistemas orquestrados por IA com foco em APIs, infraestrutura e pipelines de dados em produção.',
    availability: 'Salvador, BA',
    stack: ['Node.js', 'Python', 'TypeScript', 'Azure', 'n8n', 'Docker', 'PostgreSQL', 'FastAPI', 'AI Agents'],
    stats: [
      { value: '3+', label: 'anos de experiência' },
      { value: 'AI Engineer', label: 'APIs & Dados' },
      { value: 'PT · EN', label: 'fluente' }
    ],
    profileImage,
    primaryCta: 'Ver projetos',
    primaryCtaTarget: 'projects'
  },
  en: {
    name: 'Rodrigo Motti',
    role: 'AI Engineer · Backend & Data',
    manifesto: ['APIs, data and', 'AI agents', 'in production.'],
    manifestoHighlight: 'AI agents',
    subtitle: 'I build AI-orchestrated systems focused on APIs, infrastructure and data pipelines in production.',
    availability: 'Salvador, Brazil',
    stack: ['Node.js', 'Python', 'TypeScript', 'Azure', 'n8n', 'Docker', 'PostgreSQL', 'FastAPI', 'AI Agents'],
    stats: [
      { value: '3+', label: 'years of experience' },
      { value: 'AI Engineer', label: 'APIs & Data' },
      { value: 'PT · EN', label: 'fluent' }
    ],
    profileImage,
    primaryCta: 'See projects',
    primaryCtaTarget: 'projects'
  }
}
