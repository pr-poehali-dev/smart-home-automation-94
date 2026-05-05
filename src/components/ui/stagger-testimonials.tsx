import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Improv club testimonials
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Я пришла совершенно случайно — подруга затащила. Ушла через два часа с ощущением, что что-то внутри разморозилось. Пришла снова на следующей встрече.",
    by: "Катя, дизайнер",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KatyaD&backgroundColor=e05c3a&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Я очень серьёзный человек по жизни. Импро научило меня не воспринимать себя так всерьёз. Это дороже любого тренинга по личностному росту.",
    by: "Максим, финансист",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MaximF&backgroundColor=f0a14a&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Мне 47 лет, я никогда не стоял на сцене. На третьей встрече я сыграл говорящего кота — и это был один из лучших вечеров в моей жизни.",
    by: "Игорь, врач",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=IgorD&backgroundColor=8b5cf6&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "После первой встречи я заметила, что стала лучше слушать людей на работе. Импро — это практика внимания, а не просто игра.",
    by: "Лена, менеджер проектов",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=LenaPM&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Я интроверт. Думал, это не для меня. Оказалось — именно для меня. Структура игр даёт безопасность, внутри которой можно рискнуть.",
    by: "Андрей, программист",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AndreyP&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Я боялась быть смешной — в плохом смысле. Оказалось, смеяться вместе — это совсем другое. Это связывает людей, а не разъединяет.",
    by: "Оля, учительница",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OlyaT&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Каждая встреча — это как перезагрузка. Уходишь с работы с тяжёлой головой, приходишь на импро — и через 20 минут ты уже смеёшься и забыл, что устал.",
    by: "Даша, маркетолог",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DashaMK&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Атмосфера на встречах — это что-то особенное. Ведущий создаёт пространство, где всё принимается. Буквально всё. Это редкость.",
    by: "Вася, архитектор",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=VasyaA&backgroundColor=0891b2&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Пришла поработать с тревожностью перед публичными выступлениями. Через месяц выступала на конференции и почти не волновалась. Магия.",
    by: "Настя, исследователь",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NastyaR&backgroundColor=84cc16&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "Здесь нет плохих ответов. Нет неправильных реакций. Это место, где тебя принимают таким, какой ты есть прямо сейчас — и это меняет всё.",
    by: "Тоня, психолог",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=TonyaPS&backgroundColor=a855f7&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Я привела мужа — он скептик по натуре. После встречи он спрашивал: «Когда следующий раз?» Говорит, давно так не смеялся.",
    by: "Марина, фотограф",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MarinaPH&backgroundColor=dc2626&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "Люди здесь разные — по возрасту, профессии, характеру. И именно это делает каждую сцену неожиданной. Ты никогда не знаешь, что будет дальше.",
    by: "Коля, журналист",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KolyaJN&backgroundColor=059669&textColor=ffffff",
  },
  {
    tempId: 12,
    testimonial:
      "Я хожу уже полгода. Не пропустил ни одной встречи. Это стало ритуалом — важным якорем в расписании недели.",
    by: "Антон, предприниматель",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AntonBZ&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 13,
    testimonial:
      "На обычных тусовках я не знаю, о чём говорить. Здесь не нужно ни о чём говорить — нужно просто играть. И вдруг оказывается, что ты уже общаешься.",
    by: "Женя, художник",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ZhenyaAR&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 14,
    testimonial:
      "Первые 10 минут было страшновато. Потом как будто выключился внутренний критик — и я просто начала делать. Это ощущение я хочу переносить в жизнь.",
    by: "Юля, копирайтер",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=YuliaCW&backgroundColor=7c3aed&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10"
          : "z-0",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        background: isCenter ? "linear-gradient(135deg, #1a1520 0%, #140f18 100%)" : "#13101a",
        borderColor: isCenter ? "#f0a14a" : "rgba(240,161,74,0.2)",
        color: isCenter ? "#e8e4df" : "#8a8280",
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px rgba(240,161,74,0.15)" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
          background: isCenter ? "rgba(240,161,74,0.4)" : "rgba(240,161,74,0.1)",
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 object-cover object-top"
        style={{
          background: "#2a2030",
          boxShadow: "3px 3px 0px rgba(0,0,0,0.5)",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "" : "opacity-50")}
        style={{ color: isCenter ? "#e8e4df" : "#8a8280" }}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className="absolute bottom-8 left-8 right-8 mt-2 text-sm italic"
        style={{ color: isCenter ? "#f0a14a" : "rgba(240,161,74,0.4)" }}
      >
        — {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}