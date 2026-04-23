import { useState, useEffect, useRef } from 'react'
import { skills } from '../data/info'
import './Skills.css'

function SkillBar({ name, level, color, learning }) {
  const [filled, setFilled] = useState(false)
  const rowRef = useRef()

  // animate when scrolled into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setFilled(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (rowRef.current) observer.observe(rowRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="skill-row" ref={rowRef}>

      <div className="skill-top">
        <span className="skill-name">
          {name}
          {learning && <span className="skill-badge">learning</span>}
        </span>
        <span className="skill-percent" style={{ color }}>
          {level}%
        </span>
      </div>

      <div className="skill-track">
        <div
          className="skill-bar"
          style={{
            width: filled ? level + '%' : '0%',
            background: color,
            boxShadow: '0 0 12px ' + color + '88',
            transition: 'width 1.2s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        />
      </div>

    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section">

      <p className="section-tag"></p>
      <h2 className="section-heading">Tech Stack</h2>

      <div className="skills-list">
        {skills.map(skill => (
          <SkillBar key={skill.name} {...skill} />
        ))}
      </div>

      <p className="skills-note">
        * Express.js in progress — actively building with it.
      </p>

    </section>
  )
}
