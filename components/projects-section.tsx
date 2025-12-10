import Image from "next/image"
import { Card } from "@/components/ui/card"

interface ProjectsSectionProps {
  projects: Array<{
    name: string
    description: string
    url: string | null
    status: string
    image: string
  }>
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold">Featured Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={index} className="group overflow-hidden hover:border-primary transition-all duration-300">
            <div className="relative aspect-video bg-muted overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-3 right-3">
                <span
                  className={`text-xs px-3 py-1 rounded-full font-medium ${
                    project.status === "Live"
                      ? "bg-secondary text-secondary-foreground"
                      : project.status === "Open Source"
                        ? "bg-accent text-accent-foreground"
                        : "bg-muted text-muted-foreground"
                  }`}
                >
                  {project.status}
                </span>
              </div>
            </div>

            <div className="p-6 space-y-3">
              <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary hover:underline"
                >
                  View Project
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              )}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
