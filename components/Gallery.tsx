import Image from 'next/image'
import Reveal from './RevealWrapper'

const cells = [
  { id: 'g1', label: 'Treatment room — wide', img: '/gallery-1.png' },
  { id: 'g2', label: 'Candles & stones', img: '/gallery-2.png' },
  { id: 'g3', label: 'Folded towels', img: '/gallery-3.png' },
  { id: 'g4', label: 'Reception / lounge', img: '/gallery-4.png' },
]

export default function Gallery() {
  return (
    <section id="gallery" data-section>
      <div className="container">
        <Reveal className="sec-head">
          <div>
            <div className="eyebrow">Our Space</div>
            <h2 style={{ marginTop: '22px' }}>
              A space made for <span className="accent">slowing down.</span>
            </h2>
          </div>
          <p className="sub">Calm lighting. Quiet rooms. Every detail is here to help you exhale.</p>
        </Reveal>

        <div className="gallery-grid">
          {cells.map((c, i) => (
            <Reveal key={c.id} delay={i > 0 ? (i as 1 | 2 | 3) : undefined} className="g-cell">
              {c.img ? (
                <Image
                  src={c.img}
                  alt={c.label}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 760px) 100vw, 40vw"
                />
              ) : (
                <div className="img-placeholder" style={{ fontSize: '11px' }}>{c.label}</div>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
