import Reveal from './RevealWrapper'

const testimonials = [
  {
    initials: 'MR',
    name: 'Maria R.',
    location: 'Batangas City',
    quote:
      'Best massage spa in Batangas. The therapists are so attentive and the rooms feel like a real escape. I came in tense and left like a new person.',
  },
  {
    initials: 'JL',
    name: 'Jerome & Lia',
    location: 'Lipa',
    quote:
      'Very relaxing and professional staff. My partner and I booked the Ultimate Escape for our anniversary — already planning the next visit.',
  },
  {
    initials: 'AC',
    name: 'Aldrin C.',
    location: 'Tanauan',
    quote:
      "Affordable and so worth it. I come every payday for Deep Relief — my back hasn't felt this good in years. Highly recommended!",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" data-section>
      <div className="container">
        <Reveal className="sec-head">
          <div>
            <div className="eyebrow">Kind Words</div>
            <h2 style={{ marginTop: '22px' }}>
              Loved by guests across <span className="accent">Batangas.</span>
            </h2>
          </div>
          <p className="sub">A few of the messages our team treasures most.</p>
        </Reveal>

        <div className="testi-wrap">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i > 0 ? (i as 1 | 2) : undefined} as="article" className="testi">
              <span className="quote-mark">&ldquo;</span>
              <div className="stars">★★★★★</div>
              <blockquote>{t.quote}</blockquote>
              <div className="testi-author">
                <div className="testi-avatar">{t.initials}</div>
                <div>
                  <div className="who">{t.name}</div>
                  <div className="where">{t.location}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
