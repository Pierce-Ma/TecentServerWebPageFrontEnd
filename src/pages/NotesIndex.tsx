import { getPostsByCategory } from '../lib/posts'
import { PostTeaser } from '../components/PostTeaser'

export function NotesIndex() {
  const posts = getPostsByCategory('note')
  return (
    <main className="page">
      <h1 className="page-title">笔记</h1>
      <p className="page-lead">
        随手记录、学习要点与草稿。纯静态站点无法在浏览器里「永久上传」到服务器；推荐 workflow：在{' '}
        <code>src/content/notes/</code> 添加 Markdown → 本地 <code>npm run build</code> → 将 <code>dist/</code> 部署到 Nginx。
      </p>
      {posts.length === 0 ? (
        <p style={{ color: 'var(--muted)' }}>暂无笔记。</p>
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
