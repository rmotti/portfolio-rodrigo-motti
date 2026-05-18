import { cn } from '@/lib/utils.js'

export default function Marquee({ items, renderItem, durationMs = 30000, className, gapClass = 'gap-12' }) {
  const doubled = [...items, ...items]

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div
        className={cn('flex w-max marquee-track', gapClass)}
        style={{ '--marquee-duration': `${durationMs}ms` }}
      >
        {doubled.map((item, i) => (
          <div key={`${typeof item === 'string' ? item : item?.id ?? i}-${i}`} className="shrink-0">
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
    </div>
  )
}
