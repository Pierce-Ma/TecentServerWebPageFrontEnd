import { Link } from 'react-router-dom'
import { profile } from '../data/profile'
import { projects } from '../data/projects'
import { ProjectCard } from '../components/ProjectCard'
import { PostTeaser } from '../components/PostTeaser'
import { getAllPostsSorted } from '../lib/posts'
import { HeroPanel } from '../components/HeroPanel'

export function Home() {
  const featured = projects.filter((p) => p.featured).slice(0, 2)
  const latest = getAllPostsSorted().slice(0, 4)

  return (
    <main className="page">
      <section className="hero-shell">
        <div className="hero-main">
          <p className="eyebrow reveal">求职与个人品牌 · 数字名片</p>
          <h1 className="hero-title reveal reveal-delay-1">
            {profile.name}
            <span className="hero-title__sep"> — </span>
            <span className="hero-title__job">{profile.title}</span>
          </h1>
          <p className="hero-tagline reveal reveal-delay-2">{profile.tagline}</p>

          <div className="hero-chips reveal reveal-delay-2">
            {profile.techChips.map((chip) => (
              <span key={chip} className="hero-chip">
                {chip}
              </span>
            ))}
          </div>

          <div className="hero-actions reveal reveal-delay-3">
            <Link to="/projects" className="btn-tech">
              查看项目
            </Link>
            {profile.links.resumePdf ? (
              <a
                href={profile.links.resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-tech btn-tech--ghost"
              >
                下载简历 PDF
              </a>
            ) : null}
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-tech btn-tech--ghost"
            >
              GitHub
            </a>
            <a href={`mailto:${profile.email}`} className="btn-tech btn-tech--ghost">
              联系我
            </a>
          </div>
        </div>

        <HeroPanel />
      </section>

      <div className="bento reveal reveal-delay-4">
        {profile.stats.map((s) => (
          <div key={s.label} className="stat-card">
            <p className="stat-card__label">{s.label}</p>
            <p className="stat-card__value">{s.value}</p>
            <p className="stat-card__hint">{s.hint}</p>
          </div>
        ))}
      </div>

      <section className="section-block">
        <div className="section-head">
          <span className="section-head__accent" aria-hidden />
          <h2 className="section-head__title">关于我</h2>
        </div>
        <div className="about-panel">
          {profile.bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <p>
            写作入口：
            <Link to="/blog">博客</Link>
            {' · '}
            <Link to="/notes">笔记</Link>
            。笔记以仓库内 Markdown 维护，构建后随站点一起发布。
          </p>
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <span className="section-head__accent" aria-hidden />
          <h2 className="section-head__title">精选项目</h2>
          <Link to="/projects" className="section-head__aside">
            全部项目 →
          </Link>
        </div>
        <div className="grid-2">
          {featured.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      </section>

      <section className="section-block">
        <div className="section-head">
          <span className="section-head__accent" aria-hidden />
          <h2 className="section-head__title">最新写作</h2>
          <div className="section-head__aside" style={{ display: 'flex', gap: '1rem' }}>
            <Link to="/blog">博客</Link>
            <Link to="/notes">笔记</Link>
          </div>
        </div>
        <div className="grid-2">
          {latest.map((post) => (
            <PostTeaser key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  )
}
