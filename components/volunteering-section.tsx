"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface VolunteeringItem {
  organization: string
  position: string
  period: string
  description: string
  logo: string
}

interface VolunteeringSectionProps {
  volunteering: VolunteeringItem[]
}

export function VolunteeringSection({ volunteering }: VolunteeringSectionProps) {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
          VOLUNTEERING <span className="text-muted-foreground">EXPERIENCE</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
      </motion.div>

      <div className="space-y-6">
        {volunteering.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 hover:border-orange-500/30 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="shrink-0">
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center p-3">
                  <Image
                    src={item.logo || "/placeholder.svg"}
                    alt={item.organization}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
              </div>

              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1">{item.position}</h3>
                  <p className="text-lg text-orange-500 font-semibold">{item.organization}</p>
                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span>{item.period}</span>
                </div>

                <p className="text-foreground/80 leading-relaxed">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
