import { useState } from 'react'
import logoUrl from '../assets/IB.svg'
import { navItems } from '../data/info'
import './Navbar.css'

export default function Navbar({ activeSection }) {
  const [menuOpen, setMenuOpen] = useState(false)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav className="navbar">

      <div className="navbar-logo" onClick={() => scrollTo('home')}>
        <img src={logoUrl} alt="IB logo" className="logo-img" />
      </div>

      <div className={'navbar-links' + (menuOpen ? ' open' : '')}>
        {navItems.map(item => (
          <button
            key={item}
            className={'nav-btn' + (activeSection === item ? ' active' : '')}
            onClick={() => scrollTo(item)}
          >
            <span className="nav-slash"></span> {item}
          </button>
        ))}
      </div>

      <div className="nav-status">
        <span className="status-dot" />
        available
      </div>

      <button className="menu-toggle" onClick={() => setMenuOpen(m => !m)}>
        {menuOpen ? '✕' : '☰'}
      </button>

    </nav>
  )
}
