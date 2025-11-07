import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Github } from 'lucide-react'

const ProjectSummaryCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  liveDisabled,
  onClick // Adicionar prop onClick para abrir o modal
}) => {
  const renderLiveButton = () => {
    if (!liveUrl && !liveDisabled) return null

    if (liveDisabled) {
      return (
        <button
          type="button"
          className="bg-white/40 text-gray-500 p-2 rounded-full cursor-not-allowed"
          title="Preview indisponível"
          onClick={(e) => e.stopPropagation()}
          aria-disabled="true"
        >
          <ExternalLink className="w-4 h-4" />
        </button>
      )
    }

    return (
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
        onClick={(e) => e.stopPropagation()}
      >
        <ExternalLink className="w-4 h-4 text-gray-800" />
      </a>
    )
  }

  return (
    <Card
      className="group relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer"
      onClick={onClick}
    >
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Overlay buttons - Visíveis apenas no hover */}
        <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {renderLiveButton()}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 text-gray-800" />
            </a>
          )}
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default ProjectSummaryCard

