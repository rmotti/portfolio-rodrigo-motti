import { useState } from 'react'
import HeroSection from '@/components/sections/HeroSection.jsx'
import ProjectsSection from '@/components/sections/ProjectsSection.jsx'
import AboutSection from '@/components/sections/AboutSection.jsx'
import ContactSection from '@/components/sections/ContactSection.jsx'
import Navbar from '@/components/layout/Navbar.jsx'
import Footer from '@/components/layout/Footer.jsx'
import ProjectDetailModal from '@/components/ui/project-detail-modal.jsx'
import { useScrollSpy } from '@/hooks/useScrollSpy.js'
import {
  contactMethods,
  educationHistory,
  heroContent,
  languageSkills,
  navLinks,
  projects,
  socialLinks,
  experienceList,
  skills
} from '@/data/portfolio.js'

const sectionIds = navLinks.map((link) => link.id)

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(null)
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
      <Navbar brandName={heroContent.name} navLinks={navLinks} activeSection={activeSection} onNavigate={handleNavigate} />
      <HeroSection content={heroContent} socialLinks={socialLinks} onNavigate={handleNavigate} />
      <ProjectsSection projects={projects} onProjectSelect={openProjectModal} />
      <AboutSection
        experiences={experienceList}
        skills={skills}
        education={educationHistory}
        languages={languageSkills}
      />
      <ContactSection contactMethods={contactMethods} />
      <Footer name={heroContent.name} />

      <ProjectDetailModal project={selectedProject} isOpen={isModalOpen} onClose={closeProjectModal} />
    </div>
  )
}
