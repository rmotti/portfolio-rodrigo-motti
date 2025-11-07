import { motion } from 'framer-motion'
import LanguageToggle from '@/components/shared/LanguageToggle.jsx'

export default function Navbar({ brandName, navLinks, activeSection, onNavigate }) {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold"
          >
            {brandName}
          </motion.div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex space-x-6">
              {navLinks.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <LanguageToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
