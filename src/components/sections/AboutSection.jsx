import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'

export default function AboutSection({ experiences, skills, education, languages }) {
  return (
    <section id="about" className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Sobre Mim</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Minha jornada na tecnologia e como cheguei até aqui
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h4 className="text-xl font-semibold mb-4">Habilidades Técnicas</h4>
            <div className="space-y-4 mb-8">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <h5 className="font-semibold mb-2">{category}</h5>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <Badge key={skill} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-xl font-semibold mb-4">Formação</h4>
            <div className="space-y-3 mb-8">
              {education.map((item) => (
                <div key={item.course}>
                  <h5 className="font-medium">{item.course}</h5>
                  <p className="text-sm text-muted-foreground">
                    {item.institution} • {item.details}
                  </p>
                </div>
              ))}
            </div>

            <h4 className="text-xl font-semibold mb-4">Idiomas</h4>
            <div className="grid grid-cols-2 gap-3">
              {languages.map(({ language, level, badgeVariant }) => (
                <div className="flex justify-between" key={language}>
                  <span>{language}</span>
                  <Badge variant={badgeVariant}>{level}</Badge>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold mb-6">Experiência Profissional</h3>
            <div className="space-y-6 mb-8">
              {experiences.map((exp) => (
                <Card key={exp.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{exp.title}</CardTitle>
                    <CardDescription>
                      {exp.company} • {exp.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                    {exp.technologies?.length ? (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {exp.technologies.map((tech) => (
                          <Badge key={`${exp.title}-${tech}`} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
