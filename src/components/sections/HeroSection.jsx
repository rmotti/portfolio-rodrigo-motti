import { motion } from 'framer-motion'
import { ArrowDown, MapPin } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import SocialLinks from '@/components/shared/SocialLinks.jsx'
import GradientText from '@/components/shared/GradientText.jsx'
import Marquee from '@/components/shared/Marquee.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function HeroSection({ content, socialLinks, onNavigate }) {
  const {
    name,
    role,
    manifesto,
    manifestoHighlight,
    subtitle,
    availability,
    stack,
    stats,
    profileImage,
    primaryCta,
    primaryCtaTarget
  } = content

  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 overflow-hidden">
      <div className="absolute inset-0 -z-10 dark:opacity-100 opacity-60">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-3xl bg-gradient-accent-soft" />
      </div>

      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-[1.4fr_1fr] gap-12 lg:gap-16 items-center">
          <div>
            <motion.div initial="hidden" animate="show" variants={fadeUp} custom={0} className="flex items-center gap-2 mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-pink-500" />
              </span>
              <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                {role}
              </span>
            </motion.div>

            <motion.h1
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={1}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight mb-8"
            >
              {manifesto.map((part, i) => {
                const isHighlight = part.trim() === manifestoHighlight
                return (
                  <span key={i} className="block">
                    {isHighlight ? <GradientText>{part}</GradientText> : part}
                  </span>
                )
              })}
            </motion.h1>

            <motion.p
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={2}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-6"
            >
              {subtitle}
            </motion.p>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={3}
              className="flex items-center gap-2 text-sm text-muted-foreground mb-10"
            >
              <MapPin className="h-4 w-4" aria-hidden />
              <span>{availability}</span>
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={4}
              className="flex flex-wrap items-center gap-4 mb-12"
            >
              <Button
                onClick={() => onNavigate(primaryCtaTarget || 'projects')}
                size="lg"
                className="group h-12 px-6 bg-gradient-accent text-white border-0 hover:opacity-90 transition-opacity glow-accent"
              >
                {primaryCta}
                <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              </Button>
              <SocialLinks links={socialLinks} />
            </motion.div>

            <motion.div
              initial="hidden"
              animate="show"
              variants={fadeUp}
              custom={5}
              className="grid grid-cols-3 gap-4 max-w-lg"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-border pl-3">
                  <div className="font-display text-xl font-semibold leading-none mb-1">{stat.value}</div>
                  <div className="text-xs text-muted-foreground leading-tight">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto lg:mx-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-accent rounded-full blur-2xl opacity-40" aria-hidden />
              <div className="relative rounded-full p-1 ring-gradient">
                <img
                  src={profileImage}
                  alt={name}
                  className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-full bg-background border border-border text-xs font-mono whitespace-nowrap shadow-lg">
                <GradientText>~ Hello, I&apos;m {name.split(' ')[0]}</GradientText>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-20"
        >
          <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground/60 mb-4 text-center">
            Stack
          </div>
          <Marquee
            items={stack}
            durationMs={40000}
            renderItem={(tech) => (
              <span className="text-2xl sm:text-3xl font-display font-medium text-muted-foreground/50 hover:text-foreground transition-colors">
                {tech}
              </span>
            )}
          />
        </motion.div>
      </div>
    </section>
  )
}
