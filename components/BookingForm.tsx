'use client'

import { useState, type FormEvent } from 'react'

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [firstName, setFirstName] = useState('friend')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value
    setFirstName(name?.split(' ')[0] || 'friend')
    setSubmitted(true)
  }

  return (
    <form className="booking" onSubmit={handleSubmit}>
      <h3>Book your <span className="accent">wellness.</span></h3>
      <p>Take a break. You deserve it.</p>

      <div className="form-grid">
        <div className="form-field">
          <label>Full Name</label>
          <input type="text" name="name" placeholder="Your name" required disabled={submitted} />
        </div>
        <div className="form-field">
          <label>Phone</label>
          <input type="tel" name="phone" placeholder="+63 9xx xxx xxxx" required disabled={submitted} />
        </div>
        <div className="form-field full">
          <label>Email (optional)</label>
          <input type="email" name="email" placeholder="you@example.com" disabled={submitted} />
        </div>
        <div className="form-field">
          <label>Service</label>
          <select name="service" required disabled={submitted}>
            <option value="">Choose a treatment</option>
            <option>Swedish Massage</option>
            <option>Deep Tissue Massage</option>
            <option>Hot Stone Therapy</option>
            <option>Foot Reflexology</option>
            <option>Relax &amp; Unwind Package</option>
            <option>Deep Relief Package</option>
            <option>Ultimate Escape Package</option>
          </select>
        </div>
        <div className="form-field">
          <label>Preferred Date</label>
          <input type="date" name="date" required disabled={submitted} />
        </div>
        <div className="form-field full">
          <label>Notes for your therapist</label>
          <textarea
            name="notes"
            rows={2}
            placeholder="Tight shoulders, prefer light pressure, etc."
            disabled={submitted}
          />
        </div>

        <button type="submit" className="form-submit" disabled={submitted}>
          Request Appointment
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        {submitted && (
          <div className="form-success">
            ✓ Thank you, <strong>{firstName}</strong>. We&apos;ll confirm your appointment by message within the hour.
          </div>
        )}
      </div>
    </form>
  )
}
