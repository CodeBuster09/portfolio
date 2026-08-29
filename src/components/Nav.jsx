import { useState } from 'react'
import { useActiveSection } from '../hooks/useActiveSection'
import { useTheme } from '../hooks/useTheme'
import { profile } from '../data/content'
import { IconSun, IconMoon } from './Icons'

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const active = useActiveSection(['home', ...NAV_ITEMS.map((i) => i.id)])
  const [theme, toggleTheme] = useTheme()

  const handleNavClick = () => setOpen(false)

  return (
    <header className="nav">
      <div className="nav-inner">
        <a href="#home" className="nav-mark">
          SJ
        </a>

        <nav className={`nav-links${open ? ' nav-links--open' : ''}`}>
          {NAV_ITEMS.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={handleNavClick}
              className={active === item.id ? 'nav-link nav-link--active' : 'nav-link'}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <button
            className="theme-toggle"
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            onClick={toggleTheme}
          >
            {theme === 'dark' ? <IconSun /> : <IconMoon />}
          </button>
          <a className="nav-resume" href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
            Resume
          </a>
          <button
            className={`nav-burger${open ? ' nav-burger--open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
