import { motion } from 'framer-motion'
import { Card, CardContent } from '@/components/ui/card.jsx'

const getGridLayout = (count) => {
  if (count <= 1) return 'max-w-sm mx-auto'
  if (count === 2) return 'sm:grid-cols-2 lg:grid-cols-2'
  if (count === 3) return 'md:grid-cols-2 lg:grid-cols-3'
  return 'md:grid-cols-2 lg:grid-cols-4'
}

export default function ContactSection({ contactMethods, copy }) {
  const gridLayout = getGridLayout(contactMethods.length)

  return (
    <section id="contact" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{copy.title}</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">{copy.subtitle}</p>

          <div className={`grid gap-6 ${gridLayout}`}>
            {contactMethods.map(({ id, icon: Icon, label, href, text }) => {
              const isExternal = !href?.startsWith('mailto:')

              return (
                <Card className="text-center" key={id}>
                  <CardContent className="pt-6">
                    <Icon className="h-8 w-8 mx-auto mb-4 text-primary" />
                    <h3 className="font-semibold mb-2">{label}</h3>
                    <a
                      href={href}
                      {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-sm text-muted-foreground hover:text-primary"
                    >
                      {text}
                    </a>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
