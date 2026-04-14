import { profile } from '../data/profile'

const lines = [
  `> init portfolio --author="${profile.name}"`,
  '> load_route: /projects /blog /notes',
  '> stack_detect: react · vite · typescript',
  '> status: OPEN_TO_WORK',
  '> build: success ✓',
]

export function HeroPanel() {
  return (
    <aside className="hero-terminal reveal reveal-delay-2" aria-hidden>
      <div className="hero-terminal__chrome">
        <span className="hero-terminal__dots">
          <i className="hero-terminal__dot hero-terminal__dot--r" />
          <i className="hero-terminal__dot hero-terminal__dot--y" />
          <i className="hero-terminal__dot hero-terminal__dot--g" />
        </span>
        <span className="hero-terminal__title">sys.interface · v1</span>
      </div>
      <div className="hero-terminal__body">
        {lines.map((line) => (
          <p key={line} className="hero-terminal__line">
            {line}
          </p>
        ))}
        <p className="hero-terminal__line hero-terminal__line--cursor">
          <span className="hero-terminal__caret" />
        </p>
      </div>
      <div className="hero-terminal__glow" />
    </aside>
  )
}
