import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
];

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" />
    </svg>
  );
}

export default function Navbar() {
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-base/80 backdrop-blur border-b border-surface">
      <div className="max-w-[var(--width-content)] mx-auto px-6 h-14 flex items-center justify-between">
        <Link to="/" className="text-accent font-semibold tracking-wide text-nav-header">Dakshin</Link>
        <div className="flex items-center gap-6">
          {isHome && (
            <ul className="flex gap-6">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href} className="text-ui link-dim">{label}</a>
                </li>
              ))}
            </ul>
          )}
          <span className="w-px h-4 bg-line" aria-hidden="true" />
          <ul className="flex gap-6">
            <li>
              <Link to="/blog" className="text-ui link-dim">Blog</Link>
            </li>
            <li>
              <a href="/Portfolio/Dakshin_resume.pdf" target="_blank" rel="noopener noreferrer" className="text-ui link-dim">Resume</a>
            </li>
          </ul>
          <button
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            className="text-dim hover:text-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>
      </div>
    </nav>
  );
}
