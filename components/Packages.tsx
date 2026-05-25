import Image from 'next/image'
import Reveal from './RevealWrapper'

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const packages = [
  {
    id: 'relax',
    name: 'Relax & Unwind',
    tag: '60 mins',
    duration: 'For Everyday Tension',
    price: '899',
    best: false,
    img: '/pkg-relax.png',
    desc: 'A full-body massage to quiet the mind and soften the body after a long week.',
    includes: ['Full-body Swedish massage', 'Warm aromatherapy oil', 'Herbal welcome tea'],
  },
  {
    id: 'deep',
    name: 'Deep Relief',
    tag: '90 mins',
    duration: 'For Muscle Recovery',
    price: '1,299',
    best: true,
    img: '/pkg-deep.png',
    desc: 'Targeted deep-tissue work for stubborn knots, back pain, and recovery from training or long days.',
    includes: ['Deep tissue massage', 'Trigger-point release', 'Hot towel finish'],
  },
  {
    id: 'ultimate',
    name: 'Ultimate Escape',
    tag: '120 mins',
    duration: 'The Full Reset',
    price: '1,799',
    best: false,
    img: '/pkg-ultimate.png',
    desc: 'Two hours of head-to-toe wellness. A massage, hot stone therapy, and foot reflexology — in one quiet afternoon.',
    includes: ['Massage of your choice', 'Hot stone therapy', 'Foot reflexology + tea'],
  },
]

export default function Packages() {
  return (
    <section id="packages" data-section>
      <div className="container">
        <Reveal className="sec-head">
          <div>
            <div className="eyebrow">Popular Packages</div>
            <h2 style={{ marginTop: '22px' }}>
              Take the day. <span className="accent">Take it slow.</span>
            </h2>
          </div>
          <p className="sub">
            Pair your favorite treatments at a saved price. Perfect for date days, recovery weeks, or just because.
          </p>
        </Reveal>

        <div className="pkgs-grid">
          {packages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={i > 0 ? (i as 1 | 2) : undefined} className="pkg">
              <div className="pkg-img" style={{ position: 'relative' }}>
                {pkg.img ? (
                  <Image
                    src={pkg.img}
                    alt={pkg.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 960px) 100vw, 33vw"
                  />
                ) : (
                  <div className="img-placeholder" style={{ fontSize: '10px' }}>{pkg.name}</div>
                )}
                <span className="pkg-tag">{pkg.tag}</span>
                {pkg.best && <span className="pkg-best">Most Loved</span>}
              </div>
              <div className="pkg-body">
                <h3>{pkg.name}</h3>
                <div className="duration">{pkg.duration}</div>
                <p>{pkg.desc}</p>
                <ul className="pkg-incl">
                  {pkg.includes.map((item) => (
                    <li key={item}><CheckIcon /> {item}</li>
                  ))}
                </ul>
                <div className="pkg-foot">
                  <div className="pkg-price">
                    <span className="cur">₱</span>{pkg.price}
                  </div>
                  <a href="#contact" className="pkg-book">Book</a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
