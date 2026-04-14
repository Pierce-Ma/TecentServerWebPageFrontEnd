import { parse as parseYaml } from 'yaml'

export type PostCategory = 'blog' | 'note'

export type PostMeta = {
  title: string
  date: string
  excerpt?: string
  category: PostCategory
  tags?: string[]
}

export type Post = PostMeta & {
  slug: string
  body: string
}

const rawModules = import.meta.glob('../content/**/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

function splitFrontmatter(raw: string): { data: Record<string, unknown>; content: string } {
  const text = raw.replace(/^\uFEFF/, '')
  const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!m) {
    return { data: {}, content: text.trim() }
  }
  let data: Record<string, unknown> = {}
  try {
    const parsed = parseYaml(m[1])
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) {
      data = parsed as Record<string, unknown>
    }
  } catch {
    data = {}
  }
  return { data, content: m[2].trim() }
}

function pathToSlug(filePath: string): string {
  const base = filePath.split('/').pop() ?? ''
  return base.replace(/\.md$/, '')
}

function parsePost(filePath: string, raw: string): Post {
  const { data: d, content } = splitFrontmatter(raw)
  const category: PostCategory = d.category === 'note' ? 'note' : 'blog'
  const tagsRaw = d.tags
  const tags = Array.isArray(tagsRaw) ? tagsRaw.map(String) : undefined
  return {
    slug: pathToSlug(filePath),
    title: typeof d.title === 'string' ? d.title : 'Untitled',
    date: typeof d.date === 'string' ? d.date : '1970-01-01',
    excerpt: typeof d.excerpt === 'string' ? d.excerpt : undefined,
    category,
    tags,
    body: content,
  }
}

const allPosts: Post[] = Object.entries(rawModules).map(([path, raw]) => parsePost(path, raw))

function sortByDateDesc(a: Post, b: Post) {
  return b.date.localeCompare(a.date)
}

export function getPostsByCategory(category: PostCategory): Post[] {
  return allPosts.filter((p) => p.category === category).sort(sortByDateDesc)
}

export function getAllPostsSorted(): Post[] {
  return [...allPosts].sort(sortByDateDesc)
}

export function getPostBySlug(slug: string): Post | undefined {
  return allPosts.find((p) => p.slug === slug)
}
