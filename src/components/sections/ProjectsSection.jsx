import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Github, ChevronLeft, ChevronRight } from 'lucide-react'
import ProjectFeaturedCard from '@/components/ui/project-featured-card.jsx'
import ProjectSummaryCard from '@/components/ui/project-summary-card.jsx'
import GradientText from '@/components/shared/GradientText.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export default function ProjectsSection({ projects, featuredProject, experiments, onProjectSelect, copy }) {
  const scrollerRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(false)
  const dragState = useRef({ active: false, moved: false, startX: 0, startScroll: 0 })
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    const el = scrollerRef.current
    if (!el) return
    const update = () => {
      setCanScrollLeft(el.scrollLeft > 4)
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4)
    }
    update()
    el.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      el.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [projects])

  const scrollByCard = (direction) => {
    const el = scrollerRef.current
    if (!el) return
    const firstCard = el.querySelector('[data-carousel-item]')
    const step = firstCard ? firstCard.clientWidth + 20 : el.clientWidth * 0.8
    el.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  const onPointerDown = (e) => {
    const el = scrollerRef.current
    if (!el || e.pointerType === 'touch') return
    dragState.current = {
      active: true,
      moved: false,
      startX: e.clientX,
      startScroll: el.scrollLeft
    }
  }

  const onPointerMove = (e) => {
    const el = scrollerRef.current
    if (!el || !dragState.current.active) return
    const dx = e.clientX - dragState.current.startX
    if (Math.abs(dx) > 5) {
      dragState.current.moved = true
      if (!isDragging) setIsDragging(true)
      e.preventDefault()
    }
    el.scrollLeft = dragState.current.startScroll - dx
  }

  const onPointerUp = () => {
    if (!dragState.current.active) return
    if (dragState.current.moved) setIsDragging(false)
    dragState.current.active = false
    setTimeout(() => {
      dragState.current.moved = false
    }, 0)
  }

  const handleCardClick = (project) => {
    if (dragState.current.moved) return
    onProjectSelect(project)
  }

  return (
    <section id="projects" className="relative py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="max-w-3xl mb-12"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            <GradientText>{copy.eyebrow}</GradientText>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            {copy.title}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{copy.intro}</p>
        </motion.div>

        <div className="mb-12">
          <ProjectFeaturedCard
            project={featuredProject}
            copy={copy}
            onClick={() => featuredProject && onProjectSelect(featuredProject)}
          />
        </div>

        <div className="mb-16">
          <div className="flex items-center justify-between mb-6 gap-4">
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
              {copy.productsTitle}
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scrollByCard(-1)}
                disabled={!canScrollLeft}
                aria-label="Anterior"
                className="w-9 h-9 rounded-full border border-border bg-card/40 backdrop-blur-sm flex items-center justify-center transition-colors hover:border-foreground/30 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollByCard(1)}
                disabled={!canScrollRight}
                aria-label="Próximo"
                className="w-9 h-9 rounded-full border border-border bg-card/40 backdrop-blur-sm flex items-center justify-center transition-colors hover:border-foreground/30 disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-border"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="relative -mx-4 sm:mx-0">
            <div
              ref={scrollerRef}
              onPointerDown={onPointerDown}
              onPointerMove={onPointerMove}
              onPointerUp={onPointerUp}
              onPointerLeave={onPointerUp}
              onPointerCancel={onPointerUp}
              className={`flex gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 sm:px-0 pb-2 [&::-webkit-scrollbar]:hidden [scrollbar-width:none] select-none touch-pan-y ${
                isDragging ? 'cursor-grabbing' : 'cursor-grab'
              }`}
            >
              {projects.map((project) => (
                <div
                  key={project.id}
                  data-carousel-item
                  className="snap-start shrink-0 w-[78%] sm:w-[46%] flex"
                >
                  <ProjectSummaryCard
                    project={project}
                    copy={copy}
                    onClick={() => handleCardClick(project)}
                  />
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent hidden sm:block" />
          </div>
        </div>

        {experiments?.length ? (
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeUp}
          >
            <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
              {copy.experimentsTitle}
            </div>
            <div className="space-y-2">
              {experiments.map((exp) => (
                <a
                  key={exp.title}
                  href={exp.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-border bg-card/40 px-4 py-3 hover:border-foreground/30 transition-colors"
                >
                  <Github className="w-4 h-4 text-muted-foreground shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium">{exp.title}</p>
                    <p className="text-xs text-muted-foreground">{exp.description}</p>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {exp.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-muted/60 border border-border/50 text-muted-foreground">
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                    {copy.experimentsCta} →
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </div>
    </section>
  )
}
