import { cn } from '@/lib/utils.js'

export default function GradientText({ children, className, as: Component = 'span' }) {
  return <Component className={cn('text-gradient', className)}>{children}</Component>
}
