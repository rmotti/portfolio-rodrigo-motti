import { createContext, useContext, useMemo, useState } from 'react'
import { contentByLanguage, languageOptions } from '@/data/portfolio.js'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(languageOptions[0].code)

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      content: contentByLanguage[language]
    }),
    [language]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
