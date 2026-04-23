import Terminal from './Terminal'
import { terminalLines } from '../data/info'
import './Hero.css'

function GlitchText({ text }) {
  return (
    <span className="glitch-text" data-text={text}>
      {text}
    </span>
  )
}

export default function Hero({ onViewWork, onContact }) {
  return (
    <section id="home" className="hero">

      <div className="hero-grid" />

      <div className="hero-left">

        <h1 className="hero-title">
          <GlitchText text="Ibrahim" />
          <br />
          <span className="hero-accent">builds things</span>
          <br />
          that work.
        </h1>

        <p className="hero-stack">Python · FastAPI · React · JavaScript</p>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={onViewWork}>
            view work <span>→</span>
          </button>
          <button className="btn-outline" onClick={onContact}>
            contact
          </button>
        </div>
      </div>

      <div className="hero-right">
        <Terminal lines={terminalLines} />
      </div>

    </section>
  )
}
