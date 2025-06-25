import Header from '@/components/portfolio/header';
import HeroSection from '@/components/portfolio/hero-section';
import AboutSection from '@/components/portfolio/about-section';
import TechnologiesSection from '@/components/portfolio/technologies-section';
import ExperienceSection from '@/components/portfolio/experience-section';
import ProjectsSection from '@/components/portfolio/projects-section';
import ContactSection from '@/components/portfolio/contact-section';
import Footer from '@/components/portfolio/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <TechnologiesSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
