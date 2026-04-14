import type { Project } from '../data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.75rem' }}>
        <h3 style={{ margin: 0, fontSize: '1.28rem', fontFamily: 'var(--font-display)' }}>{project.name}</h3>
        {project.featured ? <span className="tag">精选</span> : null}
      </div>
      <p style={{ color: 'var(--muted)', flex: 1, margin: '0.75rem 0 1rem' }}>{project.description}</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginBottom: '1rem' }}>
        {project.stack.map((s) => (
          <span key={s} className="stack-pill">
            {s}
          </span>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        {project.demoUrl ? (
          <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
            演示
          </a>
        ) : null}
      </div>
    </article>
  )
}
