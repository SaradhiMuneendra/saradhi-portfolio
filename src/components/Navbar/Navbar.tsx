import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false)
  }

  return (
    <nav className="navbar" aria-label="Main navigation">

      <a href='#home' className="logo" onClick={closeMenu}>
        Saradhi<span>.</span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        {menuOpen ? '×' : '☰'}
      </button>

      <ul id="primary-navigation" className={`nav-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home" onClick={closeMenu}>Home</a></li>
        <li><a href="#about" onClick={closeMenu}>About</a></li>
        <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
        <li><a href="#experience" onClick={closeMenu}>Experience</a></li>
        <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
        <li><a href="#contact" onClick={closeMenu}>Contact</a></li>
      </ul>

      <a href="#contact" className="hire-button" onClick={closeMenu}>
        Hire Me
      </a>
    </nav>
  )
}
