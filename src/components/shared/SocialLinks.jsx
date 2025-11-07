import { Button } from '@/components/ui/button.jsx'

export default function SocialLinks({ links }) {
  if (!links?.length) return null

  return (
    <div className="flex justify-center lg:justify-start gap-4 mt-12">
      {links.map(({ id, href, icon: Icon, label }) => (
        <Button key={id} variant="outline" size="icon" asChild>
          <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
            <Icon className="h-5 w-5" />
          </a>
        </Button>
      ))}
    </div>
  )
}
