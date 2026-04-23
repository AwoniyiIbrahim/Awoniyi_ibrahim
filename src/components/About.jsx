import { stats } from '../data/info'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section">

      <p className="section-tag"></p>

      <div className="about-grid">

        <div className="about-text-side">
          <h2 className="section-heading">About Me</h2>
          <p className="about-para">
            I'm Ibrahim — a fullstack developer who builds fast backends and clean
            frontends. My main stack is Python + FastAPI on the server side and
            React on the client.
          </p>
          <p className="about-para">
            I care about clean architecture, readable code, and shipping things
            that actually work. Not just aesthetics performance and reliability
            matter just as much.
          </p>
        </div>

        <div className="stats-side">
          {stats.map(stat => (
            <div key={stat.label} className="stat-box">
              <p className="stat-number">{stat.num}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

      </div>

    </section>
  )
}
