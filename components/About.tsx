import Image from 'next/image'
import Reveal from './RevealWrapper'

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function About() {
  return (
    <section id="about" data-section>
      <div className="container about-grid">
        <Reveal className="about-visual">
          <div className="about-img-a">
            <Image
              src="/about-room.png"
              alt="Maruva Spa massage room lit by candles"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 64vw, 30vw"
            />
          </div>
          <div className="about-img-b">
            <Image
              src="/about-oils.png"
              alt="Therapist pouring massage oil over hot stones"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 960px) 56vw, 25vw"
            />
          </div>
          <div className="about-stamp">
            <div>
              <div className="est">Established</div>
              <div className="yr">2019</div>
              <div className="lbl">Batangas, PH</div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1} className="about-text">
          <div className="eyebrow" style={{ marginBottom: '22px' }}>About Maruva</div>
          <h2>
            A quiet retreat for body, mind, and{' '}
            <span className="accent">spirit</span>.
          </h2>
          <p>
            Maruva Massage Spa was created for those who carry the weight of long days, tight
            schedules, and tired bodies. We offer a warm, welcoming space in the heart of Batangas
            where you can step away from the noise and reconnect with yourself.
          </p>
          <p>
            Every treatment is performed by trained, professional therapists using premium products
            and time-honored techniques — because real wellness should never feel rushed.
          </p>

          <div className="about-feats">
            {[
              'Skilled & friendly therapists',
              'Premium quality products',
              'Affordable packages',
              'Clean & comfortable rooms',
            ].map((feat) => (
              <div key={feat} className="about-feat">
                <span className="dot"><CheckIcon /></span>
                {feat}
              </div>
            ))}
          </div>

          <div className="about-signature">
            <div className="signature-script">Your wellness, our passion.</div>
            <div className="signature-meta">— The Maruva Team</div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
