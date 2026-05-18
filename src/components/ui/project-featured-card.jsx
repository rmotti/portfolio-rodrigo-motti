import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import GradientText from '@/components/shared/GradientText.jsx'
import LivePreviewIframe from '@/components/shared/LivePreviewIframe.jsx'

export default function ProjectFeaturedCard({ project, copy, onClick }) {
  const isPlaceholder = !project

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="relative rounded-3xl border border-border bg-card/40 backdrop-blur-sm overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-accent-soft opacity-50 pointer-events-none" aria-hidden />

      <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-8 p-6 sm:p-10">
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <div className="flex items-center gap-2 mb-5">
            <span className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded-full bg-gradient-accent text-white">
              <Sparkles className="w-3 h-3" />
              {copy.featuredBadge}
            </span>
          </div>

          {isPlaceholder ? (
            <>
              <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-4">
                <GradientText>{copy.placeholderTitle}</GradientText>
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg">
                {copy.placeholderDescription}
              </p>
            </>
          ) : (
            <>
              <h3 className="font-display text-3xl sm:text-4xl font-bold leading-tight tracking-tight mb-3">
                {project.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed max-w-lg mb-5">
                {project.tagline}
              </p>
              {project.technologies?.length ? (
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              ) : null}
              <Button
                onClick={onClick}
                size="lg"
                className="group/btn self-start h-11 px-5 bg-gradient-accent text-white border-0 hover:opacity-90"
              >
                {copy.featuredCta}
                <ArrowUpRight className="ml-1.5 h-4 w-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </Button>
            </>
          )}
        </div>

        {isPlaceholder ? (
          <div className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-muted/40">
            <div className="absolute inset-0 grid place-items-center">
              <div className="text-7xl sm:text-8xl font-display font-bold opacity-20 select-none">
                <GradientText>WIP</GradientText>
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={onClick}
            aria-label={`${copy.featuredCta} — ${project.title}`}
            className="order-1 lg:order-2 relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-muted/40 cursor-pointer transition-all duration-300 hover:border-foreground/30 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            {project.previewUrl ? (
              <LivePreviewIframe
                url={project.previewUrl}
                title={`${project.title} live preview`}
                scale={0.5}
                fallback={
                  project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : null
                }
              />
            ) : (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            )}
          </button>
        )}
      </div>
    </motion.div>
  )
}
