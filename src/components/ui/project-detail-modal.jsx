import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs.jsx'
import { Button } from '@/components/ui/button.jsx'
import { ExternalLink, Github, Lock } from 'lucide-react'
import LivePreviewIframe from '@/components/shared/LivePreviewIframe.jsx'

function ProjectPart({ part, labels }) {
  return (
    <div className="space-y-4">
      <div>
        <div className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
          {labels.technologiesTitle}
        </div>
        <div className="flex flex-wrap gap-1.5">
          {part.technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] font-mono px-2 py-0.5 rounded bg-muted/60 text-muted-foreground border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {part.liveUrl && !part.livePreviewDisabled ? (
          <Button asChild className="bg-gradient-accent text-white border-0 hover:opacity-90">
            <a href={part.liveUrl} target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              {labels.viewProject}
            </a>
          </Button>
        ) : part.livePreviewDisabled ? (
          <Button disabled variant="outline">
            <Lock className="mr-2 h-4 w-4" />
            {labels.previewUnavailable}
          </Button>
        ) : null}
        {part.githubUrl ? (
          <Button asChild variant="outline">
            <a href={part.githubUrl} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              {labels.viewCode}
            </a>
          </Button>
        ) : part.codeUnavailable ? (
          <Button disabled variant="outline">
            <Lock className="mr-2 h-4 w-4" />
            {labels.codeUnavailable}
          </Button>
        ) : null}
      </div>
    </div>
  )
}

export default function ProjectDetailModal({ project, isOpen, onClose, labels, partLabels }) {
  if (!project) return null

  const hasParts = Array.isArray(project.parts) && project.parts.length > 0
  const technologies =
    project.technologies ||
    (hasParts ? Array.from(new Set(project.parts.flatMap((p) => p.technologies || []))) : [])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[760px] max-h-[90vh] overflow-y-auto p-0 gap-0">
        {project.previewUrl ? (
          <div className="relative h-[280px] sm:h-[380px] shrink-0 overflow-hidden rounded-t-lg bg-muted/40 border-b border-border">
            <LivePreviewIframe
              url={project.previewUrl}
              title={`${project.name || project.title} live preview`}
              interactive
              fallback={
                project.image ? (
                  <img src={project.image} alt={project.name || project.title} className="w-full h-full object-cover" />
                ) : null
              }
            />
          </div>
        ) : project.image ? (
          <div className="relative aspect-[21/9] overflow-hidden rounded-t-lg bg-muted/40">
            <img src={project.image} alt={project.name || project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent" />
          </div>
        ) : null}

        <div className="p-6 sm:p-8">
          <DialogHeader className="space-y-2 mb-6 text-left">
            {project.tags?.length ? (
              <div className="flex flex-wrap gap-1.5 mb-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-border text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            ) : null}
            <DialogTitle className="font-display text-2xl sm:text-3xl tracking-tight">
              {project.name || project.title}
            </DialogTitle>
            {project.tagline ? <DialogDescription className="text-base">{project.tagline}</DialogDescription> : null}
          </DialogHeader>

          <div className="space-y-6 mb-8">
            {project.problem ? (
              <section>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  {labels.problemTitle}
                </h4>
                <p className="text-sm leading-relaxed text-foreground/90">{project.problem}</p>
              </section>
            ) : null}
            {project.decisions ? (
              <section>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  {labels.decisionsTitle}
                </h4>
                <p className="text-sm leading-relaxed text-foreground/90">{project.decisions}</p>
              </section>
            ) : null}
            {project.results ? (
              <section>
                <h4 className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-2">
                  {labels.resultsTitle}
                </h4>
                <p className="text-sm leading-relaxed text-foreground/90">{project.results}</p>
              </section>
            ) : null}
          </div>

          {hasParts ? (
            <Tabs defaultValue={project.parts[0].kind} className="w-full">
              <TabsList className="bg-card border border-border">
                {project.parts.map((part) => (
                  <TabsTrigger
                    key={part.kind}
                    value={part.kind}
                    className="data-[state=active]:bg-gradient-accent data-[state=active]:text-white"
                  >
                    {partLabels?.[part.kind] || part.kind}
                  </TabsTrigger>
                ))}
              </TabsList>
              {project.parts.map((part) => (
                <TabsContent key={part.kind} value={part.kind} className="mt-5">
                  <ProjectPart part={part} labels={labels} />
                </TabsContent>
              ))}
            </Tabs>
          ) : technologies.length ? (
            <ProjectPart
              part={{
                technologies,
                githubUrl: project.githubUrl,
                liveUrl: project.liveUrl,
                livePreviewDisabled: project.livePreviewDisabled,
                codeUnavailable: project.codeUnavailable
              }}
              labels={labels}
            />
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  )
}
