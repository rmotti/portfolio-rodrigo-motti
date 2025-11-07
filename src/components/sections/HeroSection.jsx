import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import SocialLinks from '@/components/shared/SocialLinks.jsx'

export default function HeroSection({ content, socialLinks, onNavigate }) {
  const { name, role, tagline, description, profileImage, highlightEmoji } = content

  return (
    <section id="hero" className="pt-20 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex-1 text-center lg:text-left"
          >
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              {name}
              <span className="block text-2xl lg:text-3xl text-primary mt-2">{role}</span>
            </h1>

            <p className="text-xl text-muted-foreground mb-6 max-w-2xl">{tagline}</p>
            <p className="text-lg mb-8 max-w-2xl">{description}</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={() => onNavigate('projects')} size="lg">
                Ver Projetos
              </Button>
              <Button variant="outline" onClick={() => onNavigate('about')} size="lg">
                Conheça Minha Trajetória
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <img src={profileImage} alt={name} className="w-80 h-80 object-cover rounded-full shadow-2xl" />
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-full">
                <span className="text-2xl">{highlightEmoji}</span>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
          <SocialLinks links={socialLinks} />
        </motion.div>
      </div>
    </section>
  )
}
