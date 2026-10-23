export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot-grid">
          <div className="foot-about">
            <a href="#top" className="brand" aria-label="Maruva Massage Spa">
              <div className="brand-mark">M</div>
              <div className="brand-name">
                <div className="name" style={{ color: 'var(--cream)' }}>MARUVA</div>
                <div className="tag">Massage Spa</div>
              </div>
            </a>
            <p>
              A quiet wellness retreat in the heart of Batangas. Skilled therapists, premium care,
              and an atmosphere built to help you exhale.
            </p>
            <div className="socials">
              <a className="social" style={{ borderColor: 'rgba(247,244,239,0.15)', color: 'var(--cream)' }} href="https://www.facebook.com/MashitaMassageSpa" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.02H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.91h-2.33V22c4.78-.74 8.44-4.9 8.44-9.93z" />
                </svg>
              </a>
              <a className="social" style={{ borderColor: 'rgba(247,244,239,0.15)', color: 'var(--cream)' }} href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="2" y="2" width="20" height="20" rx="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a className="social" style={{ borderColor: 'rgba(247,244,239,0.15)', color: 'var(--cream)' }} href="#" aria-label="Messenger">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.14 2 11.25c0 2.88 1.42 5.45 3.65 7.15V22l3.34-1.83c.89.25 1.84.38 2.84.38h.17C17.52 20.5 22 16.36 22 11.25S17.52 2 12 2zm1.04 12.42L10.4 11.6l-5.05 2.82 5.55-5.89 2.7 2.82 4.99-2.82-5.55 5.89z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="foot-col">
            <h5>Explore</h5>
            <ul>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#packages">Packages</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#testimonials">Testimonials</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Services</h5>
            <ul>
              <li><a href="#services">Swedish Massage</a></li>
              <li><a href="#services">Deep Tissue</a></li>
              <li><a href="#services">Hot Stone Therapy</a></li>
              <li><a href="#services">Foot Reflexology</a></li>
              <li><a href="#packages">Signature Packages</a></li>
            </ul>
          </div>

          <div className="foot-col">
            <h5>Hours</h5>
            <div className="foot-hours">
              <div className="row"><span>Mon – Thu</span><strong>10am – 11pm</strong></div>
              <div className="row"><span>Fri – Sat</span><strong>10am – 12am</strong></div>
              <div className="row"><span>Sunday</span><strong>10am – 10pm</strong></div>
            </div>
          </div>
        </div>

        <div className="foot-tag">
          <div className="tagline">Relax your body. Calm your mind. Renew your soul.</div>
        </div>

        <div className="foot-bottom">
          <div>© 2026 Maruva Massage Spa · Batangas, Philippines</div>
          <div>Crafted with care · Privacy · Terms</div>
        </div>
      </div>
    </footer>
  )
}
