import portfolioData from "@/data/portfolio.json"
import { ProfileCard } from "@/components/profile-card"
import { HeroSection } from "@/components/hero-section"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { ProjectsGrid } from "@/components/projects-grid"
import { SkillsGrid } from "@/components/skills-grid"
import { CertificationsGrid } from "@/components/certifications-grid"
import { BugReportsSection } from "@/components/bug-reports-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { EducationSection } from "@/components/education-section"
import { ContributionsSection } from "@/components/contributions-section"
import { BuiltWithSection } from "@/components/built-with-section"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section with Profile Card */}
      <section className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-32 pb-12 sm:pb-20">
        <div className="grid lg:grid-cols-[340px_1fr] xl:grid-cols-[380px_1fr] gap-8 lg:gap-12 items-start max-w-[1400px] mx-auto">
          <ProfileCard data={portfolioData.personalInfo} />
          <HeroSection
            title={portfolioData.personalInfo.title}
            titleSecondary={portfolioData.personalInfo.titleSecondary}
            description={portfolioData.personalInfo.tagline}
            stats={portfolioData.stats}
            skillCards={portfolioData.skillCards}
          />
        </div>
      </section>

      <BuiltWithSection />

      {/* Experience Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-[1400px]">
        <ExperienceTimeline experience={portfolioData.experience} />
      </section>

      <section id="education" className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-[1400px]">
        <EducationSection education={portfolioData.education} />
      </section>

      {/* Bug Reports Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-[1400px]">
        <BugReportsSection reports={portfolioData.bugReports} />
      </section>

      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-[1400px]">
        <ContributionsSection contributions={portfolioData.contributions} />
      </section>

      {/* Projects Section */}
      <section id="projects" className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-[1400px]">
        <ProjectsGrid projects={portfolioData.projects} />
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-[1400px]">
        <SkillsGrid skills={portfolioData.skills} />
      </section>

      {/* Certifications Section */}
      <section className="container mx-auto px-4 sm:px-6 py-12 sm:py-20 max-w-[1400px]">
        <CertificationsGrid certifications={portfolioData.certifications} />
      </section>

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="border-t border-border/50 mt-20">
        <div className="container mx-auto px-4 sm:px-6 py-8 max-w-[1400px]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="text-center sm:text-left">
              © 2025 {portfolioData.personalInfo.fullName}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a
                href="https://github.com/3ntazDev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                GitHub
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
