import Reveal from './RevealWrapper'

const values = [
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 22s-8-4.5-8-12a5 5 0 0 1 9-3 5 5 0 0 1 9 3c0 7.5-8 12-8 12z" />
        <path d="M12 7v15" />
      </svg>
    ),
    title: 'Therapeutic Massage',
    body: 'Relieve stress and soothe your body.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 2v10" />
        <path d="M5 9a7 7 0 0 0 14 0" />
        <path d="M5 16a7 7 0 0 1 14 0" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    title: 'Wellness Treatments',
    body: 'Restore balance and well-being.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    title: 'Professional Therapists',
    body: 'Skilled hands you can trust.',
  },
  {
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9 12 11 14 15 10" />
      </svg>
    ),
    title: 'Clean & Safe Environment',
    body: 'Your comfort and safety, our priority.',
  },
]

export default function Values() {
  return (
    <section className="values">
      <div className="container values-grid">
        {values.map((v, i) => (
          <Reveal key={v.title} delay={i > 0 ? (i as 1 | 2 | 3) : undefined} className="value">
            <div className="value-icon">{v.icon}</div>
            <h3>{v.title}</h3>
            <p>{v.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
