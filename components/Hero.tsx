import Image from 'next/image'
import Reveal from './RevealWrapper'

export default function Hero() {
  return (
    <header id="top" className="hero">
      <div className="side-label">SCROLL TO EXPLORE</div>
      <div className="container hero-grid">
        <div className="hero-copy">
          <Reveal className="eyebrow hero-eyebrow">Wellness in Batangas, since 2019</Reveal>

          <Reveal delay={1} as="h1">
            Relax. Rejuvenate. <span className="accent">Revive.</span>
          </Reveal>

          <Reveal delay={2}>
            <p className="hero-lede">
              Experience the healing touch of true relaxation. Skilled therapists, calming spaces,
              and treatments crafted to soothe stress and restore balance — body and mind.
            </p>
          </Reveal>

          <Reveal delay={3} className="hero-ctas">
            <a href="#contact" className="btn btn-primary">
              Book Your Escape
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#services" className="btn-link">Explore Services</a>
          </Reveal>

          <Reveal delay={4} className="hero-stats">
            <div className="hero-stat">
              <div className="num">6<span className="sup">+</span></div>
              <div className="lbl">Years of care</div>
            </div>
            <div className="hero-stat">
              <div className="num">12<span className="sup">+</span></div>
              <div className="lbl">Signature treatments</div>
            </div>
            <div className="hero-stat">
              <div className="num">4.9<span className="sup">★</span></div>
              <div className="lbl">Guest rating</div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={2} className="hero-visual">
          <svg className="hero-leaf" width="120" height="120" viewBox="0 0 100 100" fill="none">
            <path d="M50 10 Q 80 30 70 70 Q 50 90 30 70 Q 20 30 50 10 Z" stroke="currentColor" strokeWidth="0.5" fill="none" />
            <path d="M50 10 L 50 90" stroke="currentColor" strokeWidth="0.5" />
          </svg>
          <div className="hero-frame" />
          <div className="hero-img-main">
            <Image
              src="/hero.png"
              alt="Guest enjoying a relaxing massage at Mashita Spa"
              fill
              style={{ objectFit: 'cover', objectPosition: 'center top' }}
              priority
              sizes="(max-width: 960px) 100vw, 50vw"
            />
          </div>
          <div className="hero-badge">
            <div className="ring">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <div>
              <div className="stars">★★★★★</div>
              <div className="badge-txt">
                <strong>4.9 of 5</strong> from 240+ happy guests on Facebook
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </header>
  )
}
