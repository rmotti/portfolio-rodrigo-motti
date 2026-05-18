// ============================================================================
// Ponto de entrada dos dados do portfólio.
//
// Como editar o portfólio:
//   - Hero (topo da página)         → sections/hero.js
//   - Trajetória / Sobre            → sections/about.js
//   - Projetos                      → sections/projects.js
//   - Contato                       → sections/contact.js
//   - Rodapé                        → sections/footer.js
//   - Menu (navbar)                 → sections/nav.js
//   - Redes sociais / links de proj → shared.js
//
// Cada seção exporta um objeto com chaves `pt` e `en` — assim você edita as
// duas traduções lado a lado. Este arquivo só remonta tudo no formato
// `contentByLanguage` que os componentes consomem; normalmente você NÃO
// precisa mexer aqui.
// ============================================================================

import { socialLinks } from './shared'
import { nav } from './sections/nav'
import { hero } from './sections/hero'
import {
  projectsCopy,
  featuredProject,
  projects,
  experiments,
  projectModalLabels
} from './sections/projects'
import {
  aboutCopy,
  experiences,
  skills,
  education,
  spokenLanguages
} from './sections/about'
import { contactCopy, contactMethods } from './sections/contact'
import { footer } from './sections/footer'

export const languageOptions = [
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'en', label: 'English', flag: '🇺🇸' }
]

const buildContent = (lang) => ({
  navLinks: nav[lang],
  hero: hero[lang],
  socialLinks,
  projectsSection: projectsCopy[lang],
  featuredProject: featuredProject[lang],
  projects: projects[lang],
  experiments: experiments[lang],
  experiences: experiences[lang],
  skills: skills[lang],
  education: education[lang],
  languages: spokenLanguages[lang],
  contactSection: contactCopy[lang],
  contactMethods: contactMethods[lang],
  aboutCopy: aboutCopy[lang],
  projectModalLabels: projectModalLabels[lang],
  footerCopy: footer[lang]
})

export const contentByLanguage = {
  pt: buildContent('pt'),
  en: buildContent('en')
}
