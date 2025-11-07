import { useMemo, useState } from 'react'
import HeroSection from '@/components/sections/HeroSection.jsx'
import ProjectsSection from '@/components/sections/ProjectsSection.jsx'
import AboutSection from '@/components/sections/AboutSection.jsx'
import ContactSection from '@/components/sections/ContactSection.jsx'
import Navbar from '@/components/layout/Navbar.jsx'
import Footer from '@/components/layout/Footer.jsx'
import ProjectDetailModal from '@/components/ui/project-detail-modal.jsx'
import { useScrollSpy } from '@/hooks/useScrollSpy.js'
import { useLanguage } from '@/context/LanguageContext.jsx'

export default function Home() {
  const { content } = useLanguage()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
  const sectionIds = useMemo(() => content.navLinks.map((link) => link.id), [content.navLinks])
  const activeSection = useScrollSpy(sectionIds)

  const handleNavigate = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  const openProjectModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const closeProjectModal = () => {
    setIsModalOpen(false)
    setSelectedProject(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar brandName={content.hero.name} navLinks={content.navLinks} activeSection={activeSection} onNavigate={handleNavigate} />
      <HeroSection content={content.hero} socialLinks={content.socialLinks} onNavigate={handleNavigate} />
      <ProjectsSection projects={content.projects} onProjectSelect={openProjectModal} copy={content.projectsSection} />
      <AboutSection
        experiences={content.experiences}
        skills={content.skills}
        education={content.education}
        languages={content.languages}
        copy={content.aboutCopy}
      />
      <ContactSection contactMethods={content.contactMethods} copy={content.contactSection} />
      <Footer text={content.footerText} />

      <ProjectDetailModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeProjectModal}
        labels={content.projectModalLabels}
      />
    </div>
  )
}
