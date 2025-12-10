import Image from "next/image"
import { Card } from "@/components/ui/card"

interface CertificationsSectionProps {
  certifications: Array<{
    name: string
    issuer: string
    date: string
    hours?: string
    icon: string
  }>
}

export function CertificationsSection({ certifications }: CertificationsSectionProps) {
  return (
    <div className="space-y-8">
      <h2 className="text-4xl font-bold">Certifications & Achievements</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certifications.map((cert, index) => (
          <Card key={index} className="p-6 hover:border-primary transition-colors group">
            <div className="flex gap-4">
              <div className="relative w-20 h-20 flex-shrink-0">
                <Image
                  src={cert.icon || "/placeholder.svg"}
                  alt={cert.name}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform"
                />
              </div>

              <div className="flex-1 space-y-2">
                <h3 className="font-bold text-foreground leading-tight">{cert.name}</h3>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{cert.date}</span>
                  {cert.hours && (
                    <>
                      <span>•</span>
                      <span>{cert.hours}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}
