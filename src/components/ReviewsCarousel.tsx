import { useState, useEffect, useRef, useCallback } from "react";

interface Review {
  text: string;
  author: string;
  age: string;
  avatar: string;
}

const reviews: Review[] = [
  {
    text: "«Пришла зажатой, думала — буду стоять в стороне. Ушла с ощущением, что умею всё.»",
    author: "Марина",
    age: "29 лет",
    avatar: "https://cdn.poehali.dev/projects/13b0f725-9de0-4f7a-9e7b-95c3b58756f7/files/d1221e31-636f-437d-b9a7-718e50526fff.jpg",
  },
  {
    text: "«Я думал, что это \u00abне моё\u00bb. Первые 10 минут смеялся над собой. Потом просто забыл стесняться.»",
    author: "Алексей",
    age: "34 года",
    avatar: "https://cdn.poehali.dev/projects/13b0f725-9de0-4f7a-9e7b-95c3b58756f7/files/948f9bb1-b948-4a66-bb99-3526e42e0d35.jpg",
  },
  {
    text: "«Два часа — и вышла другим человеком. Не знаю как объяснить. Просто тело стало легче.»",
    author: "Катя",
    age: "26 лет",
    avatar: "https://cdn.poehali.dev/projects/13b0f725-9de0-4f7a-9e7b-95c3b58756f7/files/9686db97-0ca2-4df8-909d-e2ec0ad67e8c.jpg",
  },
];

const INTERVAL = 5500;
const TRANSITION_MS = 600;

export default function ReviewsCarousel() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback(
    (next: number, dir: "left" | "right") => {
      if (animating) return;
      setDirection(dir);
      setAnimating(true);
      setTimeout(() => {
        setCurrent(next);
        setAnimating(false);
      }, TRANSITION_MS);
    },
    [animating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % reviews.length, "left");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + reviews.length) % reviews.length, "right");
  }, [current, goTo]);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setTimeout(next, INTERVAL);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, paused, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next(); else prev();
    }
    touchStartX.current = null;
  };

  const slideStyle: React.CSSProperties = {
    opacity: animating ? 0 : 1,
    transform: animating
      ? `translateX(${direction === "left" ? "-32px" : "32px"})`
      : "translateX(0)",
    transition: animating
      ? "none"
      : `opacity ${TRANSITION_MS}ms cubic-bezier(0.16,1,0.3,1), transform ${TRANSITION_MS}ms cubic-bezier(0.16,1,0.3,1)`,
  };

  const r = reviews[current];

  return (
    <div
      className="reviews-carousel-wrap fade-in"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="reviews-carousel-card" style={slideStyle}>
        <p className="review-text">{r.text}</p>
        <div className="review-author-row">
          <img
            src={r.avatar}
            alt={r.author}
            className="review-avatar"
          />
          <span className="review-author">— {r.author}, {r.age}</span>
        </div>
      </div>

      <div className="reviews-carousel-controls">
        <button
          className="carousel-btn"
          onClick={prev}
          aria-label="Предыдущий отзыв"
        >
          ←
        </button>

        <div className="carousel-dots">
          {reviews.map((_, i) => (
            <button
              key={i}
              className={`carousel-dot${i === current ? " active" : ""}`}
              onClick={() => goTo(i, i > current ? "left" : "right")}
              aria-label={`Отзыв ${i + 1}`}
            />
          ))}
        </div>

        <button
          className="carousel-btn"
          onClick={next}
          aria-label="Следующий отзыв"
        >
          →
        </button>
      </div>
    </div>
  );
}