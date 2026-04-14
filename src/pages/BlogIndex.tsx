import { getPostsByCategory } from '../lib/posts'
import { PostTeaser } from '../components/PostTeaser'

export function BlogIndex() {
  const posts = getPostsByCategory('blog')
  return (
    <main className="page">
      <h1 className="page-title">博客</h1>
      <p className="page-lead">较长文章、复盘与对外发布的内容。在 <code>src/content/blog/*.md</code> 新建文件，frontmatter 里写 <code>category: blog</code>。</p>
      {posts.length === 0 ? (
        <p style={{ color: 'var(--muted)' }}>暂无文章。</p>
      ) : (
        <div className="grid-2">
          {posts.map((post) => (
            <PostTeaser key={post.slug} post={post} />
          ))}
        </div>
      )}
    </main>
  )
}
