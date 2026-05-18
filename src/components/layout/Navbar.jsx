import { motion } from 'framer-motion'
import LanguageToggle from '@/components/shared/LanguageToggle.jsx'
import ThemeToggle from '@/components/shared/ThemeToggle.jsx'
import GradientText from '@/components/shared/GradientText.jsx'

export default function Navbar({ navLinks, activeSection, onNavigate }) {
  return (
    <nav className="fixed top-0 w-full bg-background/70 backdrop-blur-md border-b border-border/50 z-50">
      <div className="container mx-auto px-4 py-3.5">
        <div className="flex justify-between items-center gap-4">
          <motion.button
            onClick={() => onNavigate('hero')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-display text-lg font-bold tracking-tight"
            aria-label="Go to top"
          >
            <GradientText>rm.</GradientText>
          </motion.button>

          <div className="flex items-center gap-1 sm:gap-2">
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((item) => {
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`relative px-3 py-1.5 text-sm transition-colors rounded-full ${
                      isActive ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {item.label}
                    {isActive ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 -z-10 rounded-full bg-gradient-accent-soft border border-border"
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    ) : null}
                  </button>
                )
              })}
            </div>
            <ThemeToggle />
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
