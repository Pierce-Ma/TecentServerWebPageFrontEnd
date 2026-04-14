import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'

export function Projects() {
  return (
    <main className="page">
      <h1 className="page-title">项目</h1>
      <p className="page-lead">每个条目可在 <code>src/data/projects.ts</code> 中编辑；附上 GitHub 与可访问的演示链接会更利于求职。</p>
      <div className="grid-2">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </main>
  )
}
