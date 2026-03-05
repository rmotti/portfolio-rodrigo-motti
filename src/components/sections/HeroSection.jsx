import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button.jsx'
import SocialLinks from '@/components/shared/SocialLinks.jsx'

export default function HeroSection({ content, socialLinks, onNavigate }) {
  const { name, role, tagline, description, primaryCta, secondaryCta } = content

  const techStack = description.split(' · ').filter(Boolean)

  return (
    <section id="hero" className="pt-28 pb-20 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-muted-foreground font-mono mb-3">{name}</p>

          <h1 className="text-3xl lg:text-5xl font-bold leading-tight mb-6">
            {role}
          </h1>

          <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
            {tagline}
          </p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap gap-2 justify-center mb-12"
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-3 py-1.5 rounded-md bg-primary/10 text-primary border border-primary/25 hover:bg-primary/20 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
          >
            <Button onClick={() => onNavigate('projects')} size="lg">
              {primaryCta}
            </Button>
            <Button variant="outline" onClick={() => onNavigate('about')} size="lg">
              {secondaryCta}
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <SocialLinks links={socialLinks} />
        </motion.div>
      </div>
    </section>
  )
}
