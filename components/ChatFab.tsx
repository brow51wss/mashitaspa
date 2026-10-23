export default function ChatFab() {
  return (
    <div className="fab-group">
      <a
        className="fab-phone"
        href="tel:+639980000000"
        aria-label="Call us"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      </a>

      {/* Desktop: full pill with link */}
      <a
        className="chat-fab"
        href="https://www.messenger.com/t/MashitaMassageSpa"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="pulse" />
        Message us on Messenger
      </a>

      {/* Mobile: Messenger icon only, no link */}
      <span className="fab-messenger" role="img" aria-label="Facebook Messenger">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M12 0C5.24 0 0 4.952 0 11.64c0 3.499 1.434 6.521 3.769 8.61a.96.96 0 0 1 .323.683l.065 2.135a.96.96 0 0 0 1.347.85l2.381-1.053a.96.96 0 0 1 .641-.046A13 13 0 0 0 12 23.28c6.76 0 12-4.952 12-11.64S18.76 0 12 0m6.806 7.44c.522-.03.971.567.63 1.094l-4.178 6.457a.707.707 0 0 1-.977.208l-3.87-2.504a.44.44 0 0 0-.49.007l-4.363 3.01c-.637.438-1.415-.317-.995-.966l4.179-6.457a.706.706 0 0 1 .977-.21l3.87 2.505c.145.094.33.091.472-.007l4.362-3.009c.134-.092.283-.13.383-.134" />
        </svg>
      </span>

      {/* Mobile only: Book Now comes after the phone + messenger icons */}
      <a className="btn btn-primary fab-book" href="#contact">
        Book Now
      </a>
    </div>
  )
}
