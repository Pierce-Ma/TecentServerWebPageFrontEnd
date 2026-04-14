import type { ReactNode } from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="bg-mesh" aria-hidden />
      <div className="tech-grid" aria-hidden />
      <div className="orb-wrap" aria-hidden>
        <div className="orb orb--1" />
        <div className="orb orb--2" />
      </div>
      <div className="grain" aria-hidden />
      <div className="scanlines" aria-hidden />
      <Nav />
      {children}
      <Footer />
    </>
  )
}
