import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import { motion } from "framer-motion"

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "О нас", href: "#mission" },
    { name: "Как это работает", href: "#community" },
    { name: "Отзывы", href: "#testimonials" },
    { name: "Записаться", href: "#join" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <div id="hero" className="relative min-h-screen w-full overflow-hidden" style={{ background: "#0d0b0f" }}>
      {/* Ambient light effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #f0a14a 0%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #e05c3a 0%, transparent 70%)" }} />

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-6 md:px-10 md:py-8">
        <div className="font-display text-white font-bold text-xl tracking-wide" style={{ color: "#f0a14a" }}>
          ИМПРО
        </div>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium tracking-wide transition-colors duration-300 pb-0.5 border-b border-transparent hover:border-current"
              style={{ color: "#e8e4df" }}
            >
              {item.name}
            </button>
          ))}
        </div>

        <button
          className="md:hidden transition-colors"
          style={{ color: "#e8e4df" }}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="absolute inset-0 z-30 md:hidden flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(13, 11, 15, 0.97)" }}>
          <button className="absolute top-6 right-6" style={{ color: "#e8e4df" }} onClick={() => setIsMenuOpen(false)}>
            <X size={24} />
          </button>
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="font-display text-2xl font-bold tracking-wide transition-colors duration-300"
              style={{ color: "#e8e4df" }}
            >
              {item.name}
            </button>
          ))}
        </div>
      )}

      {/* Hero content */}
      <div className="relative z-10 flex min-h-[calc(100vh-88px)] items-center justify-center px-6 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base font-medium tracking-widest uppercase mb-8"
            style={{ color: "#f0a14a" }}
          >
            Живые встречи · каждые 2 недели · для всех
          </motion.p>

          {/* Main title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6"
            style={{ color: "#e8e4df" }}
          >
            Ничего не готовь.
            <br />
            <span style={{
              background: "linear-gradient(135deg, #f0a14a 0%, #e05c3a 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>
              Просто приходи.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed mb-10 max-w-2xl mx-auto"
            style={{ color: "#b8b0a8" }}
          >
            Импровизация — это игра, в которую невозможно прийти неподготовленным.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => scrollToSection("#join")}
              className="px-10 py-4 text-base font-semibold tracking-wide rounded-full transition-all duration-300 hover:scale-105 hover:opacity-90"
              style={{
                background: "linear-gradient(135deg, #f0a14a 0%, #e05c3a 100%)",
                color: "#0d0b0f"
              }}
            >
              Записаться на встречу
            </button>
            <button
              onClick={() => scrollToSection("#mission")}
              className="px-10 py-4 text-base font-medium tracking-wide rounded-full border transition-all duration-300 hover:opacity-80"
              style={{ borderColor: "rgba(232,228,223,0.3)", color: "#e8e4df" }}
            >
              Узнать больше
            </button>
          </motion.div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #0d0b0f)" }} />
    </div>
  )
}
