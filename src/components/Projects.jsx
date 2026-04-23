import { useState } from 'react'
import { projects } from '../data/info'
import './Projects.css'

function ProjectCard({ project }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={'card' + (project.featured ? ' card-featured' : '') + (hovered ? ' card-hovered' : '')}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {project.featured && <span className="card-tag">featured</span>}

      <p className="card-id">_{project.id}</p>
      <h3 className="card-title">{project.name}</h3>
      <p className="card-desc">{project.desc}</p>

      <div className="card-stack">
        {project.stack.map(tech => (
          <span key={tech} className="tech-tag">{tech}</span>
        ))}
      </div>

      <div className="card-links">
        {project.live && (
          <a href={project.live} className="link-btn link-primary">live ↗</a>
        )}
        <a href={project.github} className="link-btn">github →</a>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section">
      <h2 className="section-heading">Selected Work</h2>

      <div className="cards-grid">
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

    </section>
  )
}
