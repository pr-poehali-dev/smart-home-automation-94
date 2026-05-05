import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"

export default function Index() {
  const missionStatement =
    "Импровизация — это не талант и не навык. Это разрешение себе быть настоящим прямо сейчас, не зная, что будет дальше. Мы собираемся каждые две недели — без сценариев, без ролей, без опыта. Только живые люди, которые учатся слышать друг друга, отвечать честно и смеяться над собой без страха. Это место, где ошибка — это подарок, а неловкая пауза — начало чего-то настоящего."

  const timelineEntries = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-RJ3iTXUn5SUexF6nHMZYhMoQLNCboK.png",
      alt: "Участники на сцене",
      title: "Никакой подготовки",
      description:
        "Мы намеренно не даём заданий заранее. Всё, что происходит на встрече — рождается прямо здесь, в моменте. Именно поэтому каждый раз по-новому — и именно поэтому каждый раз живо.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-LN9OPh9hw0b9rwSPRSslHoejcfoKHe.png",
      alt: "Игра в импровизацию",
      title: "Игры, которые раскрывают",
      description:
        "Упражнения на спонтанность, доверие и внимание. Мы играем — и в игре неожиданно оказывается, что ты умеешь больше, чем думал. Можешь быть смешным. Трогательным. Удивительным.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-1FdGyjVpWQANGzsDWpoPIvF5SVI2za.png",
      alt: "Живое общение",
      title: "Люди, которых запоминаешь",
      description:
        "После первой встречи многие говорят: «Я не знаю этих людей и двух часов — а чувствую, будто мы давно знакомы». Это и есть импровизация. Она убирает дистанцию.",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen" style={{ background: "#0d0b0f" }}>
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement Section */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden">
        {/* Ambient background */}
        <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
        <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 80% 50%, rgba(240,161,74,0.06) 0%, transparent 60%)" }} />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-sm font-medium tracking-widest uppercase mb-6"
              style={{ color: "#f0a14a" }}
            >
              О чём это вообще
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              viewport={{ once: true }}
              className="font-display text-4xl md:text-6xl font-black tracking-wide mb-14"
              style={{ color: "#e8e4df" }}
            >
              Наша идея
            </motion.h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-light leading-relaxed"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="community" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(224,92,58,0.06) 0%, transparent 60%)" }} />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-sm font-medium tracking-widest uppercase mb-6"
                style={{ color: "#f0a14a" }}
              >
                Как это устроено
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                viewport={{ once: true }}
                className="font-display text-4xl md:text-6xl font-black tracking-wide mb-6"
                style={{ color: "#e8e4df" }}
              >
                Три правды об импро
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl md:text-2xl max-w-2xl mx-auto"
                style={{ color: "#b8b0a8" }}
              >
                Каждая встреча — особенная. Но есть кое-что, что повторяется всегда.
              </motion.p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium tracking-widest uppercase mb-6" style={{ color: "#f0a14a" }}>
              Живые голоса
            </p>
            <h2 className="font-display text-4xl md:text-6xl font-black tracking-wide mb-6" style={{ color: "#e8e4df" }}>
              Что говорят{" "}
              <span style={{
                background: "linear-gradient(135deg, #f0a14a 0%, #e05c3a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}>
                участники
              </span>
            </h2>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed" style={{ color: "#b8b0a8" }}>
              Люди, которые пришли один раз — и остались.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="/images/runners-motion-blur.png"
          mobileImage="/images/runners-motion-blur.png"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}
