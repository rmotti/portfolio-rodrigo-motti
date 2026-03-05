import { ExternalLink, Github } from 'lucide-react'

const ProjectSummaryCard = ({
  title,
  description,
  image,
  technologies,
  githubUrl,
  liveUrl,
  liveDisabled,
  onClick
}) => {
  const renderLiveButton = () => {
    if (!liveUrl && !liveDisabled) return null

    if (liveDisabled) {
      return (
        <button
          type="button"
          className="bg-black/60 backdrop-blur-sm p-2 rounded-full cursor-not-allowed border border-white/10"
          title="Preview indisponível"
          onClick={(e) => e.stopPropagation()}
          aria-disabled="true"
        >
          <ExternalLink className="w-4 h-4 text-white/30" />
        </button>
      )
    }

    return (
      <a
        href={liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-black/60 backdrop-blur-sm p-2 rounded-full hover:bg-black/80 transition-colors border border-white/20"
        onClick={(e) => e.stopPropagation()}
      >
        <ExternalLink className="w-4 h-4 text-white" />
      </a>
    )
  }

  return (
    <div
      className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card cursor-pointer transition-all duration-300 hover:border-primary/50 hover:shadow-[0_8px_40px_-12px_hsl(var(--primary)/0.4)]"
      onClick={onClick}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-44 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 to-transparent" />
        <div className="absolute bottom-3 right-3 flex gap-2">
          {renderLiveButton()}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black/60 backdrop-blur-sm p-2 rounded-full hover:bg-black/80 transition-colors border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-4 h-4 text-white" />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <h3 className="text-base font-bold leading-snug group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default ProjectSummaryCard
