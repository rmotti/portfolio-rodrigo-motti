import './App.css'
import Home from '@/pages/Home.jsx'
import { LanguageProvider } from '@/context/LanguageContext.jsx'
import { ThemeProvider } from '@/context/ThemeContext.jsx'

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Home />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App

