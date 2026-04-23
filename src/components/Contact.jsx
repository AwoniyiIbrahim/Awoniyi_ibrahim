import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact-wrap">
      <h2 className="section-heading">Let's Build Something</h2>

      <p className="contact-sub">
        Open to jobs, freelance work, and interesting collabs.
      </p>

      <a href="mailto:awoniyiibrahim02@gmail.com" className="contact-email">
        awoniyiibrahim02@gmail.com ↗
      </a>

      <div className="social-row">
        <a href="https://github.com/AwoniyiIbrahim/" className="social-btn">GitHub</a>
        <a href="https://www.linkedin.com/in/ibrahim-awoniyi-8a0808295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="social-btn">LinkedIn</a>
        <a href="https://x.com/iawoniyi40480?s=21" className="social-btn">Twitter</a>
      </div>

    </section>
  )
}
