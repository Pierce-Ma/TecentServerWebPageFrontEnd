import { Link, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPostBySlug } from '../lib/posts'

export function PostPage() {
  const { slug } = useParams()
  const post = slug ? getPostBySlug(slug) : undefined

  if (!post) {
    return (
      <main className="page page-narrow">
        <h1 className="page-title">未找到</h1>
        <p className="page-lead">该文章不存在或 slug 不匹配。</p>
        <Link to="/">返回首页</Link>
      </main>
    )
  }

  return (
    <main className="page page-narrow">
      <p className="eyebrow">{post.category === 'note' ? '笔记' : '博客'}</p>
      <h1 className="page-title">{post.title}</h1>
      <p style={{ color: 'var(--muted)', marginTop: '-0.25rem' }}>
        <time dateTime={post.date}>{post.date}</time>
        {post.tags?.length ? (
          <>
            {' · '}
            {post.tags.join(' · ')}
          </>
        ) : null}
      </p>
      <article className="prose" style={{ marginTop: '2rem' }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.body}</ReactMarkdown>
      </article>
      <p style={{ marginTop: '2.5rem' }}>
        <Link to={post.category === 'note' ? '/notes' : '/blog'}>← 返回列表</Link>
      </p>
    </main>
  )
}
