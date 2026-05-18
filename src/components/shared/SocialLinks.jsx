import { Button } from '@/components/ui/button.jsx'
import { cn } from '@/lib/utils.js'

export default function SocialLinks({ links, className }) {
  if (!links?.length) return null

  return (
    <div className={cn('flex items-center gap-2', className)}>
      {links.map(({ id, href, icon: Icon, label }) => (
        <Button key={id} variant="outline" size="icon" asChild className="rounded-full">
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon className="h-4 w-4" />
          </a>
        </Button>
      ))}
    </div>
  )
}
