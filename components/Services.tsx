import Image from 'next/image'
import Reveal from './RevealWrapper'

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const services = [
  {
    id: 'swedish',
    name: 'Swedish Massage',
    duration: '60 / 90 min',
    price: '₱699',
    img: '/svc-swedish.png',
    desc: 'A gentle, flowing massage to improve circulation, soothe stiff muscles, and ease everyday tension.',
  },
  {
    id: 'deep',
    name: 'Deep Tissue Massage',
    duration: '60 / 90 min',
    price: '₱899',
    img: '/svc-deep.png',
    desc: 'Targets deep layers of muscle to relieve chronic pain, knots, and recovery soreness.',
  },
  {
    id: 'stone',
    name: 'Hot Stone Therapy',
    duration: '90 min',
    price: '₱999',
    img: '/svc-stone.png',
    desc: 'Heated volcanic stones glide over your body to melt away stress and deep muscle tension.',
  },
  {
    id: 'foot',
    name: 'Foot Reflexology',
    duration: '45 / 60 min',
    price: '₱499',
    img: '/svc-foot.png',
    desc: 'Pressure points along the feet are gently worked to support whole-body wellness and energy.',
  },
]

export default function Services() {
  return (
    <section id="services" data-section>
      <div className="container">
        <Reveal className="sec-head">
          <div>
            <div className="eyebrow">Our Services</div>
            <h2 style={{ marginTop: '22px' }}>
              Treatments designed to <span className="accent">heal</span> you.
            </h2>
          </div>
          <p className="sub">
            From quick stress relief to deep recovery — choose the touch your body is asking for today.
          </p>
        </Reveal>

        <div className="services-grid">
          {services.map((svc, i) => (
            <Reveal key={svc.id} delay={i > 0 ? (i as 1 | 2 | 3) : undefined} as="article" className="service">
              <div className="service-img" style={{ position: 'relative' }}>
                {svc.img ? (
                  <Image
                    src={svc.img}
                    alt={svc.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="140px"
                  />
                ) : (
                  <div className="img-placeholder" style={{ fontSize: '10px' }}>{svc.name}</div>
                )}
              </div>
              <div className="service-body">
                <div className="duration">{svc.duration}</div>
                <h3>{svc.name}</h3>
                <p>{svc.desc}</p>
                <div className="service-foot">
                  <div className="service-price">
                    <span className="from">From</span>
                    {svc.price}
                  </div>
                  <div className="service-arrow"><ArrowIcon /></div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
