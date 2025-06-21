import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Github, Linkedin, Mail, ExternalLink, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'
import './App.css'

// Importar imagens
import profileImage from './assets/Rodrigo_Motti.jpg'
import ticketGeneratorImage from './assets/ticket-generator.png'
import ageCalculatorImage from './assets/age-calculator.png'
import omniNewsImage from './assets/omni-news.png'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  // Scroll spy para navegação
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'projects', 'about', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const projects = [
    {
      title: "Gerador de Tickets Personalizado",
      description: "Ferramenta web para gerar tickets personalizados com dados do usuário e design profissional",
      challenge: "Criar uma ferramenta web que permitisse gerar tickets personalizados de forma rápida e intuitiva, com dados do usuário e design profissional.",
      solution: "Desenvolvi uma aplicação web utilizando HTML5, CSS3 e JavaScript vanilla, implementando funcionalidades de captura de dados, geração dinâmica de conteúdo e download de tickets em formato de imagem.",
      results: "Interface intuitiva que permite personalização completa dos tickets, com validação de dados em tempo real e geração instantânea. Aprendi sobre manipulação de Canvas API e otimização de performance para aplicações client-side.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
      image: ticketGeneratorImage,
      liveUrl: "https://ticket-generator-plum.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Calculadora de Idade Precisa",
      description: "Calculadora que determina idade exata em anos, meses e dias, considerando anos bissextos",
      challenge: "Desenvolver uma calculadora que determinasse a idade exata em anos, meses e dias, considerando anos bissextos e diferentes durações de meses.",
      solution: "Implementei algoritmos precisos de cálculo temporal usando JavaScript, com validação robusta de datas e interface responsiva que funciona em todos os dispositivos.",
      results: "Ferramenta 100% precisa que considera todas as variações do calendário gregoriano. Interface limpa e acessível que demonstra atenção aos detalhes na experiência do usuário.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: ageCalculatorImage,
      liveUrl: "https://age-calculator-green-xi.vercel.app/",
      githubUrl: "#"
    },
    {
      title: "Portal de Notícias Omni News",
      description: "Plataforma completa de notícias com categorização, APIs de criptomoedas e sistema de e-mails",
      challenge: "Criar uma plataforma completa de notícias com categorização, integração de APIs externas para cotações de criptomoedas e sistema automatizado de e-mails.",
      solution: "Estou desenvolvendo uma aplicação web responsiva com arquitetura modular, integrando APIs de notícias e criptomoedas, implementando sistema de notificações por e-mail e painel administrativo.",
      results: "Plataforma completa que demonstra habilidades fullstack, desde o frontend responsivo até integrações complexas de backend e automações.",
      technologies: ["HTML5", "CSS3", "JavaScript", "APIs REST", "Sistema de E-mails"],
      image: omniNewsImage,
      liveUrl: "https://omni-news.vercel.app/",
      githubUrl: "#",
      inDevelopment: true
    }
  ]

  const experiences = [
    {
      title: "Desenvolvedor I",
      company: "CIMATEC",
      period: "Janeiro de 2025 - Presente",
      description: "Atuo na área de Sistemas Especialistas desenvolvendo projetos de P&D como FullStack, utilizando PowerApps para criar soluções empresariais robustas. Paralelamente, lidero o desenvolvimento de um projeto interno para as gerências de Sistemas Especialistas e BigData/IA, aplicando metodologias ágeis e boas práticas de desenvolvimento."
    },
    {
      title: "Pesquisador Voluntário",
      company: "CIMATEC",
      period: "Março 2024 - Presente",
      description: "Conduzo pesquisa aplicada em duas frentes inovadoras: gamificação do ensino de banco de dados (focando em consultas DQL) e desenvolvimento de soluções de digital twin com manutenção preditiva na Planta de Manufatura Avançada. Essas experiências me proporcionaram visão estratégica sobre como a tecnologia pode revolucionar processos educacionais e industriais."
    },
    {
      title: "Estagiário em Desenvolvimento de Software",
      company: "CIMATEC",
      period: "Junho - Dezembro 2024",
      description: "Integrei a gerência de BigData/IA e Software, onde desenvolvi competências em PowerApps e participei ativamente de projetos internos, aprendendo sobre arquitetura de sistemas empresariais e metodologias de desenvolvimento em equipe."
    }
  ]

  const skills = {
    "Linguagens de Programação": ["Python", "JavaScript", "C", "Java", "SQL"],
    "Frameworks e Ferramentas": ["PowerApps", "HTML5/CSS3", "React", "Node.js", "Git/GitHub"],
    "Metodologias": ["Scrum", "Gestão de P&D", "Metodologias Ágeis"],
    "Áreas de Interesse": ["Desenvolvimento FullStack", "P&D", "Gamificação", "Digital Twin", "IoT"]
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold"
            >
              Rodrigo Motti
            </motion.div>
            <div className="hidden md:flex space-x-6">
              {[
                { id: 'hero', label: 'Início' },
                { id: 'projects', label: 'Projetos' },
                { id: 'about', label: 'Sobre Mim' },
                { id: 'contact', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary font-medium' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Rodrigo Motti
                <span className="block text-2xl lg:text-3xl text-primary mt-2">
                  Desenvolvedor FullStack
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6 max-w-2xl">
                Construindo Soluções Digitais que Conectam Tecnologia e Pessoas
              </p>
              <p className="text-lg mb-8 max-w-2xl">
                Especialista em desenvolvimento web completo, com experiência em P&D e projetos inovadores. 
                Transformo ideias complexas em aplicações funcionais e escaláveis.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button onClick={() => scrollToSection('projects')} size="lg">
                  Ver Projetos
                </Button>
                <Button variant="outline" onClick={() => scrollToSection('about')} size="lg">
                  Conheça Minha Trajetória
                </Button>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex-shrink-0"
            >
              <div className="relative">
                <img 
                  src={profileImage} 
                  alt="Rodrigo Motti" 
                  className="w-80 h-80 object-cover rounded-full shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-4 rounded-full">
                  <span className="text-2xl">👨‍💻</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex justify-center lg:justify-start gap-4 mt-12"
          >
            <Button variant="outline" size="icon" asChild>
              <a href="https://www.linkedin.com/in/rodrigo-motti-de-santana-2a2130294/?locale=en_US" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://github.com/rmotti" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="mailto:rmotti99@gmail.com">
                <Mail className="h-5 w-5" />
              </a>
            </Button>
            <Button variant="outline" size="icon" asChild>
              <a href="https://instagram.com/rmotti_" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Projetos em Destaque</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cada projeto representa um desafio superado e uma oportunidade de aprendizado
            </p>
          </motion.div>

          <div className="grid gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-6">
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover"
                      />
                      {project.inDevelopment && (
                        <Badge className="absolute top-4 left-4">Em Desenvolvimento</Badge>
                      )}
                    </div>
                    <div className="p-6">
                      <CardHeader className="p-0 mb-4">
                        <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                        <CardDescription className="text-base">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-0 space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">O Desafio:</h4>
                          <p className="text-sm text-muted-foreground">{project.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">A Solução:</h4>
                          <p className="text-sm text-muted-foreground">{project.solution}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Resultados:</h4>
                          <p className="text-sm text-muted-foreground">{project.results}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Tecnologias:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="secondary">{tech}</Badge>
                            ))}
                          </div>
                        </div>
                        <div className="flex gap-3 pt-4">
                          <Button asChild>
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2" />
                              Ver Projeto
                            </a>
                          </Button>
                          <Button variant="outline" asChild>
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2" />
                              Código
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Sobre Mim</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Minha jornada na tecnologia e como cheguei até aqui
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Minha Trajetória</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Minha jornada na tecnologia começou com a curiosidade de entender como as coisas funcionam por trás das telas. 
                Hoje, como estudante de Engenharia de Computação no SENAI CIMATEC e Desenvolvedor I na área de Sistemas Especialistas, 
                tenho a oportunidade de transformar essa curiosidade em soluções reais que impactam pessoas e organizações.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Meu diferencial está na combinação entre conhecimento técnico sólido e experiência em pesquisa aplicada. 
                A vivência em projetos de P&D me ensinou a abordar problemas complexos de forma sistemática, 
                enquanto a experiência prática em desenvolvimento me deu a capacidade de implementar soluções eficientes e escaláveis.
              </p>

              <h4 className="text-xl font-semibold mb-4">Formação</h4>
              <div className="space-y-3 mb-8">
                <div>
                  <h5 className="font-medium">Engenharia de Computação</h5>
                  <p className="text-sm text-muted-foreground">SENAI CIMATEC • 2022-2026 • 7º semestre</p>
                </div>
                <div>
                  <h5 className="font-medium">Ensino de Inglês como Segundo Idioma</h5>
                  <p className="text-sm text-muted-foreground">ACBEU • 2012-2018</p>
                </div>
              </div>

              <h4 className="text-xl font-semibold mb-4">Idiomas</h4>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex justify-between">
                  <span>Português</span>
                  <Badge>Nativo</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Inglês</span>
                  <Badge>Avançado</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Espanhol</span>
                  <Badge variant="outline">Básico</Badge>
                </div>
                <div className="flex justify-between">
                  <span>Francês</span>
                  <Badge variant="outline">Básico</Badge>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6">Experiência Profissional</h3>
              <div className="space-y-6 mb-8">
                {experiences.map((exp, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg">{exp.title}</CardTitle>
                      <CardDescription>
                        {exp.company} • {exp.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {exp.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-6">Habilidades Técnicas</h3>
              <div className="space-y-4">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category}>
                    <h4 className="font-semibold mb-2">{category}</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {items.map((skill) => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Vamos Construir Algo Incrível Juntos?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Estou sempre aberto a novas oportunidades e colaborações. Entre em contato para discutirmos como posso contribuir com seu projeto.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Mail className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">E-mail</h3>
                  <a href="mailto:rmotti99@gmail.com" className="text-sm text-muted-foreground hover:text-primary">
                    rmotti99@gmail.com
                  </a>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Linkedin className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">LinkedIn</h3>
                  <a 
                    href="https://www.linkedin.com/in/rodrigo-motti-de-santana-2a2130294/?locale=en_US" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Conectar
                  </a>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Github className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">GitHub</h3>
                  <a 
                    href="https://github.com/rmotti" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Ver Código
                  </a>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Instagram className="h-8 w-8 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold mb-2">Instagram</h3>
                  <a 
                    href="https://instagram.com/rmotti_" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    Seguir
                  </a>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="text-muted-foreground">
            © 2025 Rodrigo Motti - Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

