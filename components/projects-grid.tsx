import { ExternalLink } from "lucide-react"
import Image from "next/image"

interface Project {
  name: string
  description: string
  image: string
  link: string
  tech: string[]
}

interface ProjectsGridProps {
  projects: Project[]
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div>
      <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
        <span className="text-foreground">FEATURED</span>
        <br />
        <span className="text-muted-foreground">PROJECTS</span>
      </h2>

      <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="group bg-card border border-border/50 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
          >
            <div className="relative aspect-video bg-muted overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="p-4 sm:p-6">
              {/* Made project name responsive */}
              <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">{project.name}</h3>
              {/* Made project description responsive */}
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span key={i} className="px-3 py-1 bg-muted rounded-full text-xs font-medium text-foreground">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                View Project <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
