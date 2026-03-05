import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge.jsx'

export default function AboutSection({ experiences, skills, education, languages, copy }) {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{copy.sectionTitle}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{copy.sectionSubtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Skills, Education, Languages */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Skills */}
            <div>
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-primary mb-5">
                {copy.skillsTitle}
              </h4>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block mb-2">
                      {category}
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {items.map((skill) => (
                        <span
                          key={skill}
                          className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground border border-border font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-primary mb-5">
                {copy.educationTitle}
              </h4>
              <div className="space-y-4">
                {education.map((item) => (
                  <div key={item.course} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <p className="font-medium text-sm">{item.course}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {item.institution} • {item.details}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div>
              <h4 className="text-[11px] font-mono uppercase tracking-widest text-primary mb-5">
                {copy.languagesTitle}
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {languages.map(({ language, level, badgeVariant }) => (
                  <div
                    key={language}
                    className="flex items-center justify-between rounded-lg border border-border px-3 py-2 bg-card"
                  >
                    <span className="text-sm font-medium">{language}</span>
                    <Badge variant={badgeVariant} className="text-xs">{level}</Badge>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Timeline Experience */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="text-[11px] font-mono uppercase tracking-widest text-primary mb-5">
              {copy.experienceTitle}
            </h4>
            <div className="relative">
              <div className="absolute left-3 top-2 bottom-0 w-px bg-border" />
              <div className="space-y-0">
                {experiences.map((exp) => (
                  <div key={exp.title} className="relative pl-10 pb-8 last:pb-0">
                    <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-background border-2 border-primary/60 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-semibold text-sm leading-snug">{exp.title}</p>
                      <p className="text-xs font-medium text-primary/80">{exp.company}</p>
                      <p className="text-xs text-muted-foreground">{exp.period}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed pt-1">{exp.description}</p>
                      {exp.technologies?.length ? (
                        <div className="flex flex-wrap gap-1.5 pt-2">
                          {exp.technologies.map((tech) => (
                            <span
                              key={`${exp.title}-${tech}`}
                              className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground border border-border"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
