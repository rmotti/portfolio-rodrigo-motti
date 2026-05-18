import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import GradientText from '@/components/shared/GradientText.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export default function ContactSection({ contactMethods, copy }) {
  const primaryMethod = contactMethods.find((m) => m.id === 'whatsapp') ?? contactMethods.find((m) => m.id === 'email')
  const otherMethods = contactMethods.filter((m) => m.id !== primaryMethod?.id)
  const PrimaryIcon = primaryMethod?.icon

  return (
    <section id="contact" className="relative py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="text-center"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            <GradientText>{copy.eyebrow}</GradientText>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            {copy.title}
          </h2>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto">
            {copy.subtitle}
          </p>

          {primaryMethod ? (
            <Button
              asChild
              size="lg"
              className="group h-14 px-7 text-base bg-gradient-accent text-white border-0 hover:opacity-90 glow-accent"
            >
              <a href={primaryMethod.href} target="_blank" rel="noopener noreferrer">
                {PrimaryIcon ? <PrimaryIcon className="mr-2.5 h-5 w-5" /> : null}
                {copy.primaryCta}
                <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </Button>
          ) : null}

          <div className="mt-3 text-sm text-muted-foreground font-mono">
            {primaryMethod?.text}
          </div>

          {otherMethods.length ? (
            <div className="mt-12 pt-8 border-t border-border/50 flex flex-col items-center gap-4">
              <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {copy.secondaryLabel}
              </div>
              <div className="flex items-center gap-3">
                {otherMethods.map(({ id, icon: Icon, label, href }) => (
                  <a
                    key={id}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card/40 hover:border-foreground/30 transition-colors text-sm"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  )
}
