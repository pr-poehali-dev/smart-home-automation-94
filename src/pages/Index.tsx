import { useEffect, useRef, useState } from "react"

function useFadeIn() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible")
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )
    document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" })
}

export default function Index() {
  useFadeIn()
  const [submitted, setSubmitted] = useState(false)
  const nameRef = useRef<HTMLInputElement>(null)
  const contactRef = useRef<HTMLInputElement>(null)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      {/* NAV */}
      <nav className="imp-nav">
        <div className="nav-logo">Импровизация</div>
        <button className="nav-cta" onClick={() => scrollTo("#cta-final")}>Записаться</button>
      </nav>

      {/* HERO */}
      <section id="hero">
        <div className="hero-bg-glow" />
        <div className="container-imp" style={{ position: "relative", zIndex: 1 }}>
          <p className="hero-eyebrow fade-in">Живые встречи · каждые 2 недели · для всех</p>
          <h1 className="hero-title fade-in">
            Ничего не готовь.<br />
            <em>Просто приходи.</em>
          </h1>
          <p className="hero-sub fade-in">
            Импровизация — это игра, в которую невозможно прийти неподготовленным. Здесь нет правильных ответов. Есть только момент — и то, что ты в него принесёшь.
          </p>
          <button className="btn-primary fade-in" onClick={() => scrollTo("#cta-final")}>
            Записаться на ближайшую встречу →&nbsp;15 мая · 1 000 ₽
          </button>
        </div>
      </section>

      <div className="divider-imp" />

      {/* БОЛИ */}
      <section id="pain" className="imp-section">
        <div className="container-imp">
          <p className="section-label fade-in">Узнаёшь себя?</p>
          <h2 className="section-title fade-in">Ты когда-нибудь замечал…</h2>
          <div className="pain-grid fade-in">
            <div className="pain-card">Замолкаешь в компании — хотя есть что сказать</div>
            <div className="pain-card">Теряешься, когда нужно ответить быстро и живо</div>
            <div className="pain-card">Хочешь быть интереснее в разговоре, но «включается» всё это только потом</div>
            <div className="pain-card">Скованность уходит лишь к концу вечера — когда уже все расходятся</div>
            <div className="pain-card">Думаешь «ляпну глупость» — и молчишь</div>
            <div className="pain-card">Встречи с людьми дают энергию, но сам ты «не раскрываешься»</div>
          </div>
          <p className="pain-closing fade-in">
            Импровизация не учит притворяться кем-то другим.<br />
            Она возвращает тебя — живого, спонтанного, настоящего.
          </p>
        </div>
      </section>

      <div className="divider-imp" />

      {/* КАК УСТРОЕНО */}
      <section id="how" className="imp-section">
        <div className="container-imp">
          <p className="section-label fade-in">Формат</p>
          <h2 className="section-title fade-in">Как это устроено</h2>
          <div className="steps fade-in">
            <div className="step">
              <div className="step-num">01</div>
              <div className="step-title">Разогрев тела и внимания</div>
              <p className="step-text">Никаких лекций. Сразу в игру: ритм, движение, контакт с группой. Тело приходит в режим «здесь и сейчас».</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <div className="step-title">Игры и упражнения</div>
              <p className="step-text">Каждый раз — новые сочетания. Короткие сцены, парные игры, групповые форматы. Ты не зритель — ты участник с первой минуты.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <div className="step-title">Живые сцены</div>
              <p className="step-text">В конце — импровизированные истории, которые рождаются прямо здесь. Без сценария. Без репетиций. И это всегда лучшее, что можно придумать.</p>
            </div>
          </div>
          <p className="pain-closing fade-in">Подходит и новичкам, и тем, кто уже пробовал — потому что импровизация каждый раз другая.</p>
        </div>
      </section>

      <div className="divider-imp" />

      {/* НАВЫКИ */}
      <section id="skills" className="imp-section">
        <div className="container-imp">
          <p className="section-label fade-in">Польза</p>
          <h2 className="section-title fade-in">
            Кажется, это просто игра.<br />
            <em>Но на самом деле ты прокачиваешь:</em>
          </h2>
          <div className="skills-grid fade-in">
            {["🗣 Говорить живо и по делу", "👂 Слышать состояние человека", "⚡️ Реагировать быстро", "😄 Быть интересным в разговоре", "🤝 Контакт с незнакомыми", "🧠 Думать нестандартно", "💪 Настоящая уверенность", "🎯 Управление вниманием"].map((s) => (
              <div className="skill-chip" key={s}>{s}</div>
            ))}
          </div>
          <p className="skills-closing fade-in">
            Это не тренинг по публичным выступлениям.<br />
            Это один из лучших способов развить креативность и раскрепощённость.
          </p>
        </div>
      </section>

      <div className="divider-imp" />

      {/* ДЛЯ КОГО */}
      <section id="forwhom" className="imp-section">
        <div className="container-imp">
          <p className="section-label fade-in">Аудитория</p>
          <h2 className="section-title fade-in">Тебе сюда, если ты…</h2>
          <div className="forwhom-list fade-in">
            {[
              "Никогда не пробовал импровизацию и давно хотел",
              "Работаешь с людьми — продажи, сервис, переговоры, обучение",
              "Устал от скованности и хочешь просто отпустить",
              "Ищешь живое сообщество, где тепло и без понтов",
            ].map((item) => (
              <div className="forwhom-item" key={item}>{item}</div>
            ))}
          </div>
        </div>
      </section>

      <div className="divider-imp" />

      {/* ТАРИФЫ */}
      <section id="pricing" className="imp-section">
        <div className="container-imp">
          <p className="section-label fade-in">Форматы</p>
          <h2 className="section-title fade-in">Как принять участие</h2>
          <div className="tariff-grid fade-in">
            <div className="tariff-card featured">
              <div className="tariff-label">Открытое занятие</div>
              <div className="tariff-title">Живая встреча<br />каждые 2 недели</div>
              <div className="tariff-price">1 000 ₽</div>
              <ul className="tariff-list">
                <li>Живая встреча, офлайн</li>
                <li>2 часа игры и практики</li>
                <li>Никакой подготовки не нужно</li>
              </ul>
              <p style={{ marginBottom: "1rem", fontSize: "0.9rem", color: "var(--muted)" }}>
                📆 15 мая · Светланская 33/2
              </p>
              <button className="btn-primary" onClick={() => scrollTo("#cta-final")}>Записаться →</button>
              <p className="tariff-note">Приходи как есть.</p>
            </div>
            <div className="tariff-card">
              <div className="tariff-label">Для компаний и событий</div>
              <div className="tariff-title">Хочешь, чтобы это было у тебя?</div>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "1.5rem", lineHeight: "1.65" }}>
                Импровизация — это формат, который оживляет любое событие.
              </p>
              <div className="company-grid-inner">
                <div className="company-card">
                  <div className="company-icon">🏢</div>
                  <div className="company-title">Для компании / команды</div>
                  <p className="company-text">Воркшоп под ваши задачи: коммуникация, сплочённость, выход из зон комфорта.</p>
                </div>
                <div className="company-card">
                  <div className="company-icon">🎂</div>
                  <div className="company-title">День рождения / встреча</div>
                  <p className="company-text">Вместо «поели-поговорили» — живое, смешное, запоминающееся. Гости — авторы вечера.</p>
                </div>
                <div className="company-card">
                  <div className="company-icon">🥂</div>
                  <div className="company-title">Корпоратив</div>
                  <p className="company-text">Не банальный тимбилдинг. Вечер, после которого коллеги смотрят друг на друга иначе.</p>
                </div>
              </div>
              <button className="btn-primary" onClick={() => scrollTo("#cta-final")}>Написать и обсудить формат →</button>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-imp" />

      {/* ОТЗЫВЫ */}
      <section id="reviews" className="imp-section">
        <div className="container-imp">
          <p className="section-label fade-in">Отзывы</p>
          <h2 className="section-title fade-in">Что говорят после</h2>
          <div className="reviews-grid fade-in">
            <div className="review-card">
              <p className="review-text">«Пришла зажатой, думала — буду стоять в стороне. Ушла с ощущением, что умею всё.»</p>
              <p className="review-author">— Марина, 29 лет</p>
            </div>
            <div className="review-card">
              <p className="review-text">«Я думал, что это "не моё". Первые 10 минут смеялся над собой. Потом просто забыл стесняться.»</p>
              <p className="review-author">— Алексей, 34 года</p>
            </div>
            <div className="review-card">
              <p className="review-text">«Два часа — и вышла другим человеком. Не знаю как объяснить. Просто тело стало легче.»</p>
              <p className="review-author">— Катя, 26 лет</p>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-imp" />

      {/* О ВЕДУЩЕМ */}
      <section id="about" className="imp-section">
        <div className="container-imp">
          <p className="section-label fade-in">Ведущий</p>
          <h2 className="section-title fade-in">Кто проводит</h2>
          <div className="about-grid fade-in">
            <div className="about-photo">
              <span>[ Живое фото<br />в процессе ]</span>
            </div>
            <div>
              <div className="about-name">Елена Орехова</div>
              <div className="about-role">Ведущая встреч по импровизации</div>
              <p className="about-text"><span className="tariff-placeholder">[Расскажи о себе: откуда импровизация в твоей жизни, почему тебе важно это делать]</span></p>
              <p className="about-text" style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: "1.1rem", color: "var(--text)" }}>
                «Я веду эти встречи потому что… <span className="tariff-placeholder">[продолжение]</span>»
              </p>
              <div className="about-facts">
                <div className="about-fact"><span className="tariff-placeholder">[Факт 1 о себе]</span></div>
                <div className="about-fact"><span className="tariff-placeholder">[Факт 2 о себе]</span></div>
                <div className="about-fact"><span className="tariff-placeholder">[Факт 3 — неожиданный]</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-imp" />

      {/* ФИНАЛЬНЫЙ CTA */}
      <section id="cta-final" className="imp-section">
        <div className="container-imp">
          <div className="cta-final-inner">
            <p className="section-label fade-in">Запись</p>
            <h2 className="section-title fade-in">
              Следующая встреча —<br />
              <em>15 мая</em>
            </h2>
            <p style={{ color: "var(--muted)", marginBottom: "0.5rem" }} className="fade-in">
              Оставь имя и контакт — я пришлю адрес и все детали.
            </p>
            <form className="form-imp fade-in" onSubmit={handleSubmit}>
              <div className="form-group-imp">
                <label className="form-label-imp" htmlFor="name">Имя</label>
                <input ref={nameRef} className="form-input-imp" type="text" id="name" placeholder="Как тебя зовут?" required />
              </div>
              <div className="form-group-imp">
                <label className="form-label-imp" htmlFor="contact">Телефон или Telegram</label>
                <input ref={contactRef} className="form-input-imp" type="text" id="contact" placeholder="+7 или @username" required />
              </div>
              <button
                type="submit"
                className={`btn-primary stretch${submitted ? " success" : ""}`}
                disabled={submitted}
              >
                {submitted ? "✓ Заявка отправлена!" : "Хочу прийти →"}
              </button>
            </form>
            <p className="cta-meta fade-in">1 000 ₽ · Живая встреча · Без подготовки · Места ограничены</p>
          </div>
        </div>
      </section>

      <footer className="imp-footer">
        <div className="container-imp">
          <p>© 2025 Импровизация — живые встречи</p>
        </div>
      </footer>
    </>
  )
}