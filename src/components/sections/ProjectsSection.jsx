import { motion } from 'framer-motion'
import ProjectSummaryCard from '@/components/ui/project-summary-card.jsx'

const getGridLayout = (count) => {
  if (count <= 1) return 'max-w-lg mx-auto'
  if (count === 2) return 'sm:grid-cols-2 lg:grid-cols-2'
  return 'md:grid-cols-2 lg:grid-cols-3'
}

export default function ProjectsSection({ projects, onProjectSelect, copy }) {
  const gridLayout = getGridLayout(projects.length)

  return (
    <section id="projects" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{copy.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{copy.subtitle}</p>
        </motion.div>

        <div className={`grid gap-8 ${gridLayout}`}>
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProjectSummaryCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                liveDisabled={project.livePreviewDisabled}
                onClick={() => onProjectSelect(project)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
