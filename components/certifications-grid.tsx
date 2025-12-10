import { Award, Calendar } from "lucide-react"
import Image from "next/image"

interface Certification {
  name: string
  issuer: string
  date: string
  logo: string
  category: string
  hours?: string
}

interface CertificationsGridProps {
  certifications: Certification[]
}

export function CertificationsGrid({ certifications }: CertificationsGridProps) {
  return (
    <div>
      <h2 className="text-5xl md:text-7xl font-bold mb-4">
        <span className="text-foreground">VERIFIED</span>
        <br />
        <span className="text-muted-foreground">CERTIFICATIONS</span>
      </h2>

      <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <div
            key={index}
            className="group bg-card border border-border/50 rounded-2xl p-6 hover:border-primary/50 hover:bg-card/80 transition-all duration-300"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="relative w-14 h-14 shrink-0">
                <Image src={cert.logo || "/placeholder.svg"} alt={cert.issuer} fill className="object-contain" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base font-bold text-foreground leading-tight mb-1">{cert.name}</h3>
                <p className="text-sm text-primary font-medium">{cert.issuer}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
              <Calendar className="w-4 h-4 shrink-0" />
              <span>{cert.date}</span>
              {cert.hours && <span className="ml-auto text-xs">({cert.hours})</span>}
            </div>

            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-muted-foreground">{cert.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
