import { Link } from 'react-router-dom'
import type { Post } from '../lib/posts'

export function PostTeaser({ post }: { post: Post }) {
  return (
    <Link
      to={`/post/${post.slug}`}
      style={{
        textDecoration: 'none',
        color: 'inherit',
        display: 'block',
      }}
    >
      <article
        className="card"
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '0.75rem', alignItems: 'center' }}>
          <span className={post.category === 'note' ? 'tag tag-note' : 'tag'}>
            {post.category === 'note' ? '笔记' : '博客'}
          </span>
          <time dateTime={post.date} style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
            {post.date}
          </time>
        </div>
        <h3 style={{ margin: 0, fontSize: '1.35rem', fontFamily: 'var(--font-display)' }}>{post.title}</h3>
        {post.excerpt ? <p style={{ margin: 0, color: 'var(--muted)', flex: 1 }}>{post.excerpt}</p> : null}
        <span style={{ color: 'var(--accent)', fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: '0.9rem' }}>
          阅读 →
        </span>
      </article>
    </Link>
  )
}
