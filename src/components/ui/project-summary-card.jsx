import { ArrowUpRight, Lock } from 'lucide-react'
import GradientText from '@/components/shared/GradientText.jsx'
import LivePreviewIframe from '@/components/shared/LivePreviewIframe.jsx'

export default function ProjectSummaryCard({ project, onClick, copy }) {
  const { name, tagline, image, tags, comingSoon, previewUrl } = project

  const baseClasses =
    'group text-left flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background h-full w-full'

  if (comingSoon) {
    return (
      <div
        aria-disabled="true"
        className={`${baseClasses} relative cursor-not-allowed opacity-90`}
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-muted/40">
          <div className="absolute inset-0 grid place-items-center bg-gradient-accent-soft">
            <div className="text-5xl sm:text-6xl font-display font-bold opacity-30 select-none">
              <GradientText>WIP</GradientText>
            </div>
          </div>
          <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/85 backdrop-blur-sm border border-border text-[10px] font-mono uppercase tracking-widest">
            <Lock className="w-3 h-3" />
            {copy?.comingSoonBadge ?? 'Em breve'}
          </div>
        </div>

        <div className="flex flex-col flex-1 p-5 gap-3">
          {tags?.length ? (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-border text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
          <h3 className="font-display text-xl font-semibold leading-snug text-muted-foreground">{name}</h3>
          <p className="text-sm text-muted-foreground/80 leading-relaxed">{tagline}</p>
          {copy?.comingSoonHint ? (
            <p className="mt-auto text-xs font-mono uppercase tracking-widest text-muted-foreground/70">
              {copy.comingSoonHint}
            </p>
          ) : null}
        </div>
      </div>
    )
  }

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${baseClasses} hover:border-foreground/30 hover:-translate-y-1`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted/40">
        {previewUrl ? (
          <LivePreviewIframe
            url={previewUrl}
            title={`${name} live preview`}
            scale={0.45}
            fallback={
              image ? (
                <img
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : (
                <div className="absolute inset-0 grid place-items-center bg-gradient-accent-soft">
                  <div className="text-4xl sm:text-5xl font-display font-bold opacity-40 select-none tracking-tight">
                    <GradientText>{name?.slice(0, 2).toUpperCase()}</GradientText>
                  </div>
                </div>
              )
            }
          />
        ) : image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center bg-gradient-accent-soft">
            <div className="text-4xl sm:text-5xl font-display font-bold opacity-40 select-none tracking-tight">
              <GradientText>{name?.slice(0, 2).toUpperCase()}</GradientText>
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center transition-transform group-hover:rotate-12">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>

      <div className="flex flex-col flex-1 p-5 gap-3">
        {tags?.length ? (
          <div className="flex flex-wrap gap-1.5">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full border border-border text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
        <h3 className="font-display text-xl font-semibold leading-snug">{name}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{tagline}</p>
      </div>
    </button>
  )
}
