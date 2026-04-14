import { profile } from '../data/profile'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        marginTop: '3rem',
        padding: '2rem 1.5rem 2.5rem',
        color: 'var(--muted)',
        fontSize: '0.95rem',
      }}
    >
      <div className="page" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>
          © {year} {profile.name} · 求职与创作合集
        </span>
        <a href={`mailto:${profile.email}`} style={{ color: 'var(--muted)' }}>
          {profile.email}
        </a>
      </div>
    </footer>
  )
}
