import mytrip from '@/assets/mytrip.jpg'
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

export const projectImages = {
  mytrip,
  backendPlaceholder
}
