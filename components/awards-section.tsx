"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Award {
  title: string
  titleAr?: string
  issuer: string
  issuerAr?: string
  date: string
  description: string
  descriptionAr?: string
  achievement: string
  logo: string
}

interface AwardsSectionProps {
  awards: Award[]
}

export function AwardsSection({ awards }: AwardsSectionProps) {
  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
          AWARDS & <span className="text-muted-foreground">HONORS</span>
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {awards.map((award, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass-card rounded-2xl p-6 md:p-8 border border-white/10 hover:border-yellow-500/30 transition-all duration-300 group"
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <div className="shrink-0">
                  <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 flex items-center justify-center p-3">
                    <Image
                      src={award.logo || "/placeholder.svg"}
                      alt={award.issuer}
                      width={64}
                      height={64}
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="flex-1 space-y-2">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-yellow-500 transition-colors">
                      {award.title}
                    </h3>
                    <span className="shrink-0 text-xs px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-500 border border-yellow-500/30">
                      {award.date}
                    </span>
                  </div>
                  {award.titleAr && (
                    <p className="text-base text-muted-foreground font-arabic" dir="rtl">
                      {award.titleAr}
                    </p>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <p className="text-sm font-semibold text-orange-500">{award.issuer}</p>
                  {award.issuerAr && (
                    <p className="text-sm text-muted-foreground font-arabic" dir="rtl">
                      {award.issuerAr}
                    </p>
                  )}
                </div>

                <p className="text-foreground/80 leading-relaxed">{award.description}</p>
                {award.descriptionAr && (
                  <p className="text-foreground/70 leading-relaxed font-arabic" dir="rtl">
                    {award.descriptionAr}
                  </p>
                )}

                <div className="pt-3 border-t border-white/5">
                  <p className="text-sm text-yellow-500 font-semibold">🏆 {award.achievement}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
