import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { BlogIndex } from './pages/BlogIndex'
import { NotesIndex } from './pages/NotesIndex'
import { PostPage } from './pages/PostPage'

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/notes" element={<NotesIndex />} />
        <Route path="/post/:slug" element={<PostPage />} />
      </Routes>
    </Layout>
  )
}
