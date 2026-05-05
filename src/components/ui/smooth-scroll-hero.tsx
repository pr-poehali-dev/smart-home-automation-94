import type * as React from "react"
import { useRef } from "react"
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion"
import Icon from "@/components/ui/icon"

interface SmoothScrollHeroProps {
  scrollHeight?: number
  desktopImage: string
  mobileImage: string
  initialClipPercentage?: number
  finalClipPercentage?: number
}

const SmoothScrollHero: React.FC<SmoothScrollHeroProps> = ({
  scrollHeight = 1875,
  desktopImage,
  mobileImage,
  initialClipPercentage = 25,
  finalClipPercentage = 75,
}) => {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const clipStart = useTransform(scrollYProgress, [0, 0.7], [initialClipPercentage, 0])
  const clipEnd = useTransform(scrollYProgress, [0, 0.7], [finalClipPercentage, 100])
  const clipPath = useMotionTemplate`polygon(${clipStart}% ${clipStart}%, ${clipEnd}% ${clipStart}%, ${clipEnd}% ${clipEnd}%, ${clipStart}% ${clipEnd}%)`

  const backgroundSize = useTransform(scrollYProgress, [0, 0.7], ["170%", "100%"])
  const scale = useTransform(scrollYProgress, [0, 0.7], [1.2, 1])

  const ctaOpacity = useTransform(scrollYProgress, [0.3, 0.5], [0, 1])
  const ctaY = useTransform(scrollYProgress, [0.3, 0.5], [50, 0])

  return (
    <div ref={containerRef} style={{ height: `${scrollHeight}px` }} className="relative w-full">
      <motion.div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{
          clipPath,
          willChange: "transform",
          background: "#0d0b0f",
        }}
      >
        {/* Desktop background */}
        <motion.div
          className="absolute inset-0 hidden md:block"
          style={{
            backgroundImage: `url(${desktopImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            scale,
          }}
        />
        {/* Mobile background */}
        <motion.div
          className="absolute inset-0 md:hidden"
          style={{
            backgroundImage: `url(${mobileImage})`,
            backgroundSize,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            scale,
          }}
        />

        {/* Warm dark overlay */}
        <div className="absolute inset-0" style={{ background: "rgba(13,11,15,0.75)" }} />
        {/* Warm ambient glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 60%, rgba(240,161,74,0.12) 0%, transparent 60%)" }} />

        {/* CTA Overlay */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center z-20"
          style={{
            opacity: ctaOpacity,
            y: ctaY,
          }}
        >
          <div className="text-center max-w-4xl mx-auto px-6">
            {/* Eyebrow */}
            <p className="text-sm font-medium tracking-widest uppercase mb-6" style={{ color: "#f0a14a" }}>
              Следующая встреча скоро
            </p>

            {/* Main CTA Heading */}
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6"
              style={{ color: "#e8e4df" }}>
              Готов прийти
              <br />
              <span style={{
                background: "linear-gradient(135deg, #f0a14a 0%, #e05c3a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                без подготовки?
              </span>
            </h2>

            {/* Supporting Text */}
            <p className="text-lg md:text-xl mb-10 leading-relaxed font-light" style={{ color: "#b8b0a8" }}>
              Это всё, что нужно. Просто прийти.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {[
                { icon: "Users", value: "каждые 2 нед.", label: "Регулярные встречи" },
                { icon: "Clock", value: "~2 часа", label: "Продолжительность" },
                { icon: "Heart", value: "для всех", label: "Без опыта" },
                { icon: "Sparkles", value: "живое", label: "Всегда по-новому" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="flex justify-center mb-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(240,161,74,0.15)" }}>
                      <Icon name={stat.icon} size={18} style={{ color: "#f0a14a" }} />
                    </div>
                  </div>
                  <div className="text-xl md:text-2xl font-black mb-1" style={{ color: "#e8e4df" }}>{stat.value}</div>
                  <div className="text-xs md:text-sm font-medium" style={{ color: "#8a8280" }}>{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button
              className="px-12 py-4 text-lg font-semibold tracking-wide rounded-full transition-all duration-300 hover:scale-105 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #f0a14a 0%, #e05c3a 100%)",
                color: "#0d0b0f"
              }}
            >
              Записаться на встречу
            </button>

            {/* Trust indicators */}
            <div className="mt-10 pt-6" style={{ borderTop: "1px solid rgba(240,161,74,0.2)" }}>
              <p className="text-xs font-medium mb-3" style={{ color: "#5a5258" }}>ПРИХОДЯТ БЕЗ ОПЫТА И ОСТАЮТСЯ</p>
              <div className="flex flex-wrap justify-center items-center gap-4" style={{ color: "#8a8280" }}>
                <span className="text-xs font-semibold">ЖИВЫЕ ЛЮДИ</span>
                <span className="text-xs" style={{ color: "#3a3038" }}>·</span>
                <span className="text-xs font-semibold">ТЁПЛАЯ АТМОСФЕРА</span>
                <span className="text-xs" style={{ color: "#3a3038" }}>·</span>
                <span className="text-xs font-semibold">НАСТОЯЩИЙ МОМЕНТ</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default SmoothScrollHero
