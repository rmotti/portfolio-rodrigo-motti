import { Button } from '@/components/ui/button.jsx'
import {
  DropdownMenu,
  DropdownMenuContent,
 DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu.jsx'
import { useTheme } from '@/context/ThemeContext.jsx'
import { useLanguage } from '@/context/LanguageContext.jsx'
import { Moon, Sun } from 'lucide-react'

const labelMap = {
  pt: { light: 'Claro', dark: 'Escuro' },
  en: { light: 'Light', dark: 'Dark' }
}

const optionIcons = {
  light: Sun,
  dark: Moon
}

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const { language } = useLanguage()

  const labels = labelMap[language] ?? labelMap.en
  const CurrentIcon = optionIcons[theme]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2">
          <CurrentIcon className="h-4 w-4" />
          <span className="hidden sm:inline">{labels[theme]}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {Object.entries(optionIcons).map(([option, Icon]) => (
          <DropdownMenuItem
            key={option}
            onClick={() => setTheme(option)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <Icon className="h-4 w-4" />
            <span>{labels[option]}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
