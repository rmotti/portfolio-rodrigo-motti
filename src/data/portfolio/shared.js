import backendPlaceholder from '@/assets/backend-placeholder.svg'
import { Github, Linkedin, Mail } from 'lucide-react'

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

export const sharedProjectMeta = {
  expressApi: {
    image: backendPlaceholder,
    githubUrl: 'https://github.com/rmotti/express-backend-example',
    liveUrl: null,
    livePreviewDisabled: true
  }
}

export const projectImages = {
  backendPlaceholder
}
