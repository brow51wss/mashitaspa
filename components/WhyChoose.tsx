import Reveal from './RevealWrapper'

const cards = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Skilled & Friendly Therapists',
    body: 'Trained professionals who actually listen.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18" /><path d="M8 3v4" /><path d="M16 3v4" />
      </svg>
    ),
    title: 'Premium Quality Products',
    body: "Oils, scrubs, and aromatherapy you'll feel.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l2 2" />
      </svg>
    ),
    title: 'Affordable Packages',
    body: 'Spa-level care without the city price tag.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M3 12l9-9 9 9" />
        <path d="M5 10v10h14V10" />
      </svg>
    ),
    title: 'Clean & Comfortable Rooms',
    body: 'Linens fresh, air calm, atmosphere quiet.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
        <path d="M20 6L9 17l-5-5" />
      </svg>
    ),
    title: 'Customer Satisfaction Guaranteed',
    body: "If it isn't right, we make it right.",
  },
]

export default function WhyChoose() {
  return (
    <section id="why" data-section>
      <div className="container">
        <Reveal className="sec-head">
          <div>
            <div className="eyebrow">Why Choose Maruva</div>
            <h2 style={{ marginTop: '22px' }}>
              Small details. <span className="accent">Big difference.</span>
            </h2>
          </div>
          <p className="sub">What makes our guests come back — and bring their friends with them.</p>
        </Reveal>

        <div className="why-grid">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i > 0 ? (Math.min(i, 4) as 1 | 2 | 3 | 4) : undefined} className="why-card">
              <div className="why-icon">{c.icon}</div>
              <h4>{c.title}</h4>
              <p>{c.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
