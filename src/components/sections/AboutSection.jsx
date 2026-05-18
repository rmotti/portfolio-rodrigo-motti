import { motion } from 'framer-motion'
import { Check, GraduationCap, Languages as LanguagesIcon } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import GradientText from '@/components/shared/GradientText.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
}

export default function AboutSection({ experiences, skills, education, languages, copy }) {
  const skillCategories = Object.entries(skills)
  const firstCategory = skillCategories[0]?.[0]

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      <div className="container mx-auto max-w-5xl">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="max-w-3xl mb-16"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
            <GradientText>{copy.eyebrow}</GradientText>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-[1.1] tracking-tight mb-6">
            {copy.sectionTitle}
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">{copy.intro}</p>
        </motion.div>

        {/* Deliveries block */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="mb-20 rounded-2xl border border-border bg-card/40 backdrop-blur-sm p-6 sm:p-8"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-5">
            {copy.deliveriesTitle}
          </div>
          <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
            {copy.deliveries.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm sm:text-[15px] leading-relaxed">
                <span className="mt-1 flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded-full bg-gradient-accent-soft">
                  <Check className="w-3 h-3" strokeWidth={3} />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Timeline */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-8">
            {copy.experienceTitle}
          </div>

          <div className="relative">
            <div className="absolute left-[11px] sm:left-3 top-2 bottom-2 w-px bg-gradient-to-b from-pink-500/60 via-violet-500/40 to-transparent" />

            <div className="space-y-10">
              {experiences.map((exp, i) => (
                <motion.div
                  key={`${exp.title}-${exp.period}`}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                  className="relative pl-10 sm:pl-14"
                >
                  <div className="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-background border border-border flex items-center justify-center">
                    <div className="w-2.5 h-2.5 rounded-full bg-gradient-accent" />
                  </div>

                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-2">
                    <h3 className="font-display text-xl font-semibold leading-tight">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">· {exp.company}</span>
                  </div>

                  <div className="text-xs font-mono text-muted-foreground mb-3">{exp.period}</div>

                  {exp.highlight ? (
                    <p className="text-base leading-relaxed mb-3 text-foreground/90">{exp.highlight}</p>
                  ) : null}

                  {exp.bullets?.length ? (
                    <ul className="mb-3 space-y-1.5 text-sm leading-relaxed text-muted-foreground">
                      {exp.bullets.map((bullet) => (
                        <li key={`${exp.title}-${bullet}`} className="relative pl-4">
                          <span className="absolute left-0 top-2 w-1 h-1 rounded-full bg-gradient-accent" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {exp.technologies?.length ? (
                    <div className="flex flex-wrap gap-1.5">
                      {exp.technologies.map((tech) => (
                        <span
                          key={`${exp.title}-${tech}`}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills as tabs */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="mb-20"
        >
          <div className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-6">
            {copy.skillsTitle}
          </div>

          <Tabs defaultValue={firstCategory} className="w-full">
            <TabsList className="h-auto flex-wrap justify-start bg-transparent p-0 gap-2 mb-6">
              {skillCategories.map(([category]) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="rounded-full border border-border bg-card data-[state=active]:bg-gradient-accent data-[state=active]:text-white data-[state=active]:border-transparent px-4 py-2 text-xs font-medium transition-all"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>

            {skillCategories.map(([category, items]) => (
              <TabsContent key={category} value={category} className="mt-0">
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3.5 py-1.5 rounded-full bg-card border border-border font-medium hover:border-foreground/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>

        {/* Education + Languages compact */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="rounded-xl border border-border bg-card/40 p-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              <GraduationCap className="w-3.5 h-3.5" />
              {copy.educationTitle}
            </div>
            <div className="space-y-3">
              {education.map((item) => (
                <div key={item.course}>
                  <p className="text-sm font-medium leading-snug">{item.course}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {item.institution} · {item.details}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card/40 p-5">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-muted-foreground mb-4">
              <LanguagesIcon className="w-3.5 h-3.5" />
              {copy.languagesTitle}
            </div>
            <div className="grid grid-cols-2 gap-2">
              {languages.map(({ language, level, badgeVariant }) => (
                <div key={language} className="flex items-center justify-between gap-2">
                  <span className="text-sm font-medium">{language}</span>
                  <Badge variant={badgeVariant} className="text-[10px] font-mono uppercase tracking-wider">
                    {level}
                  </Badge>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
