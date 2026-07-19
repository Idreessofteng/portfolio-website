import CustomCursor from './components/CustomCursor'
import BackToTopButton from './components/BackToTopButton'
import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import AboutSection from './components/AboutSection'
import EducationSection from './components/EducationSection'
import TechnicalSkillsSection from './components/TechnicalSkillsSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import CertificationsSection from './components/CertificationsSection'
import ContactSection from './components/ContactSection'

export default function App() {
  return (
    <div className="bg-ink" style={{ overflowX: 'clip' }}>
      <CustomCursor />
      <BackToTopButton />
      <HeroSection />
      <MarqueeSection />
      <AboutSection />
      <EducationSection />
      <TechnicalSkillsSection />
      <ServicesSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
    </div>
  )
}
