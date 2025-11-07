import './App.css'
import Home from '@/pages/Home.jsx'
import { LanguageProvider } from '@/context/LanguageContext.jsx'

function App() {
  return (
    <LanguageProvider>
      <Home />
    </LanguageProvider>
  )
}

export default App

