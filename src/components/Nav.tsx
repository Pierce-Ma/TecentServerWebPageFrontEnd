import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { profile } from '../data/profile'

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? 'var(--text)' : 'var(--muted)',
  textDecoration: 'none',
  fontFamily: 'var(--font-display)',
  fontWeight: 600,
  fontSize: '0.95rem',
  letterSpacing: '0.02em',
})

export function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backdropFilter: 'blur(16px)',
        background: 'rgba(5, 5, 8, 0.78)',
        borderBottom: '1px solid var(--border)',
        boxShadow: '0 0 40px rgba(94, 234, 212, 0.04)',
      }}
    >
      <div
        className="page"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          maxWidth: '68rem',
        }}
      >
        <NavLink
          to="/"
          className="nav-brand"
          style={{ textDecoration: 'none', color: 'var(--text)' }}
          onClick={() => setOpen(false)}
        >
          <span style={{ fontSize: '1.15rem', fontWeight: 700 }}>{profile.name}</span>
          <span
            style={{
              display: 'block',
              fontSize: '0.65rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 500,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              marginTop: '0.2rem',
            }}
          >
            portfolio / blog / notes
          </span>
        </NavLink>

        <button
          type="button"
          aria-expanded={open}
          aria-label="打开菜单"
          onClick={() => setOpen((v) => !v)}
          style={{
            display: 'inline-flex',
            flexDirection: 'column',
            gap: '6px',
            padding: '0.5rem',
            background: 'transparent',
            border: '1px solid var(--border)',
            borderRadius: '10px',
            cursor: 'pointer',
          }}
          className="nav-burger"
        >
          <span
            style={{
              width: 22,
              height: 2,
              background: 'var(--text)',
              borderRadius: 1,
            }}
          />
          <span style={{ width: 22, height: 2, background: 'var(--text)', borderRadius: 1 }} />
        </button>

        <nav
          className="nav-links"
          style={{
            display: open ? 'flex' : 'none',
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            flexDirection: 'column',
            gap: '0.25rem',
            padding: '1rem 1.25rem 1.25rem',
            background: 'rgba(5, 5, 8, 0.96)',
            borderBottom: '1px solid var(--border)',
          }}
        >
          <NavLink to="/" style={linkStyle} onClick={() => setOpen(false)}>
            首页
          </NavLink>
          <NavLink to="/projects" style={linkStyle} onClick={() => setOpen(false)}>
            项目
          </NavLink>
          <NavLink to="/blog" style={linkStyle} onClick={() => setOpen(false)}>
            博客
          </NavLink>
          <NavLink to="/notes" style={linkStyle} onClick={() => setOpen(false)}>
            笔记
          </NavLink>
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'var(--muted)', textDecoration: 'none', fontFamily: 'var(--font-display)', fontWeight: 600 }}
            onClick={() => setOpen(false)}
          >
            GitHub ↗
          </a>
        </nav>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .nav-burger {
            display: none !important;
          }
          .nav-links {
            display: flex !important;
            position: static !important;
            flex-direction: row !important;
            align-items: center;
            gap: 1.75rem !important;
            padding: 0 !important;
            background: transparent !important;
            border: none !important;
          }
        }
      `}</style>
    </header>
  )
}
