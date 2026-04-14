export type Project = {
  id: string
  name: string
  description: string
  /** 展示用标签 */
  stack: string[]
  githubUrl: string
  demoUrl?: string
  /** 可选：高亮在首页 */
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'my-interface',
    name: '个人站点（本站）',
    description: '求职展示 + 博客 + Markdown 笔记，React 与静态部署。',
    stack: ['React', 'Vite', 'TypeScript'],
    githubUrl: 'https://github.com/',
    featured: true,
  },
  {
    id: 'sample-api',
    name: '示例后端服务',
    description: '替换为你的真实项目：说明业务场景、你的职责与结果指标。',
    stack: ['Node', 'REST'],
    githubUrl: 'https://github.com/',
    demoUrl: 'https://example.com',
    featured: true,
  },
  {
    id: 'placeholder',
    name: '第三个项目占位',
    description: '复制此对象并改写；建议每个项目 2~4 行，突出难点与成果。',
    stack: ['Python'],
    githubUrl: 'https://github.com/',
  },
]
