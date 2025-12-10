import { Code2 } from "lucide-react"

const techStack = [
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
]

export function BuiltWithSection() {
  return (
    <section className="container mx-auto px-6 py-12 max-w-[1400px]">
      <div className="bg-card/50 border border-border/30 rounded-2xl p-8">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-lg">
            <Code2 className="w-5 h-5 text-primary" />
          </div>
          <h3 className="text-xl font-bold">Built With</h3>
        </div>

        <div className="flex flex-wrap items-center gap-6">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className="group flex items-center gap-3 px-4 py-2 bg-background/50 border border-border/50 rounded-xl hover:border-primary/50 hover:bg-background/80 transition-all"
            >
              <img src={tech.icon || "/placeholder.svg"} alt={tech.name} className="w-6 h-6 object-contain" />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
