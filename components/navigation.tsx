import { Home, Code2, Award, Mail, User } from "lucide-react"

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a] border-b border-white/5">
      <div className="container mx-auto px-6 py-4 max-w-[1400px]">
        <div className="flex items-center justify-center gap-8">
          <a href="#" className="text-white/60 hover:text-white transition-colors p-2" aria-label="Home">
            <Home className="w-5 h-5" />
          </a>
          <a href="#projects" className="text-white/60 hover:text-white transition-colors p-2" aria-label="Projects">
            <Code2 className="w-5 h-5" />
          </a>
          <a href="#skills" className="text-white/60 hover:text-white transition-colors p-2" aria-label="Skills">
            <Award className="w-5 h-5" />
          </a>
          <a href="#education" className="text-white/60 hover:text-white transition-colors p-2" aria-label="Education">
            <User className="w-5 h-5" />
          </a>
          <a href="#contact" className="text-white/60 hover:text-white transition-colors p-2" aria-label="Contact">
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </nav>
  )
}
