import { Github, Linkedin, Mail, MessageCircle } from 'lucide-react'

// ============================================================================
// COPY: textos estáticos da seção de contato
// ============================================================================
export const contactCopy = {
  pt: {
    eyebrow: 'Contato',
    title: 'Bora trocar uma ideia sobre dados, backend ou agentes de IA?',
    subtitle: 'Resposta mais rápida pelo WhatsApp. E-mail, LinkedIn e GitHub também estão abertos.',
    primaryCta: 'Chamar no WhatsApp',
    secondaryLabel: 'Ou me encontre em'
  },
  en: {
    eyebrow: 'Contact',
    title: "Let's talk about data, backend or AI agents?",
    subtitle: 'Fastest reply via WhatsApp. Email, LinkedIn and GitHub are open too.',
    primaryCta: 'Message on WhatsApp',
    secondaryLabel: 'Or find me on'
  }
}

// ============================================================================
// MÉTODOS DE CONTATO (cards/links exibidos na seção de contato)
// ============================================================================
export const contactMethods = {
  pt: [
    {
      id: 'email',
      label: 'E-mail',
      text: 'rmotti99@gmail.com',
      href: 'mailto:rmotti99@gmail.com',
      icon: Mail
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      text: '+55 71 99920-8655',
      href: 'https://wa.me/5571999208655',
      icon: MessageCircle
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
  en: [
    {
      id: 'email',
      label: 'Email',
      text: 'rmotti99@gmail.com',
      href: 'mailto:rmotti99@gmail.com',
      icon: Mail
    },
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      text: '+55 71 99920-8655',
      href: 'https://wa.me/5571999208655',
      icon: MessageCircle
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
  ]
}
