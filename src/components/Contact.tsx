import { Mail, ExternalLink } from 'lucide-react'
import { usePortfolio } from '../hooks'

export function Contact() {
  const { profile } = usePortfolio()

  return (
    <section id="contact">
      <div className="container">
        <div className="contact-box">
          <div className="section-kicker">06 / Contact</div>
          <h2>Let’s build something intelligent.</h2>
          <p className="muted" style={{ maxWidth: 620 }}>
            Have an idea, opportunity or collaboration in Data Science and AI? I’d be happy to connect.
          </p>
          <div className="contact-links">
            <a className="btn primary" href={`mailto:${profile.social.email}`}>
              <Mail size={17} />
              Email Me
            </a>
            <a className="btn" href={profile.social.linkedin} target="_blank" rel="noreferrer">
              <ExternalLink size={17} />
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
