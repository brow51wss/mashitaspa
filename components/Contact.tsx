import Reveal from './RevealWrapper'
import BookingForm from './BookingForm'

export default function Contact() {
  return (
    <section id="contact" data-section>
      <div className="container contact-grid">

        <Reveal className="contact-info">
          <div className="eyebrow" style={{ marginBottom: '22px' }}>Visit &amp; Book</div>
          <h2>Take a break. <span className="accent">You deserve it.</span></h2>
          <p>
            Tell us when you&apos;d like to come in and we&apos;ll confirm by message within the
            hour. You can also reach us on Facebook Messenger — whichever feels easier.
          </p>

          <div className="contact-rows">
            <div className="contact-row">
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <div className="lbl">Address</div>
                <div className="val">Batangas, Philippines</div>
              </div>
            </div>
            <div className="contact-row">
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <div className="lbl">Call &amp; Text</div>
                <div className="val">+63 998 000 0000</div>
              </div>
            </div>
            <div className="contact-row">
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              </div>
              <div>
                <div className="lbl">Hours</div>
                <div className="val">Daily · 10:00 AM – 11:00 PM</div>
              </div>
            </div>
            <div className="contact-row">
              <div className="ic">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22 6 12 13 2 6" />
                </svg>
              </div>
              <div>
                <div className="lbl">Message</div>
                <div className="val">hello@maruvamassagespa.com</div>
              </div>
            </div>
          </div>

          <div className="socials">
            <a className="social" href="https://www.facebook.com/MashitaMassageSpa" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12.07C22 6.51 17.52 2 12 2S2 6.51 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.02H7.9v-2.91h2.54V9.84c0-2.51 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.91h-2.33V22c4.78-.74 8.44-4.9 8.44-9.93z" />
              </svg>
            </a>
            <a className="social" href="#" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a className="social" href="#" aria-label="TikTok">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V9a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.43z" />
              </svg>
            </a>
            <a className="social" href="#" aria-label="Messenger">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.14 2 11.25c0 2.88 1.42 5.45 3.65 7.15V22l3.34-1.83c.89.25 1.84.38 2.84.38h.17C17.52 20.5 22 16.36 22 11.25S17.52 2 12 2zm1.04 12.42L10.4 11.6l-5.05 2.82 5.55-5.89 2.7 2.82 4.99-2.82-5.55 5.89z" />
              </svg>
            </a>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <BookingForm />
        </Reveal>

      </div>
    </section>
  )
}
