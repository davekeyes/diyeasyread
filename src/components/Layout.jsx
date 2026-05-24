import { Outlet, Link, useLocation } from 'react-router-dom'
import { FileText, Clock, LayoutDashboard, LogIn, Menu, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { to: '/create', label: 'Create' },
  { to: '/history', label: 'My documents' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
]

export default function Layout() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Nav */}
      <header className="border-b border-border sticky top-0 z-40 bg-background/95 backdrop-blur">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 font-semibold text-lg text-foreground">
            <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <FileText size={16} className="text-primary-foreground" />
            </span>
            DIY Easy Read
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  pathname === to
                    ? 'bg-muted text-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Auth + mobile toggle */}
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="hidden md:flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <LogIn size={15} /> Log in
            </Link>
            <Link
              to="/register"
              className="hidden md:flex px-4 py-2 text-sm font-semibold rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Sign up free
            </Link>
            <button
              className="md:hidden p-2 rounded-md text-muted-foreground hover:text-foreground"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-border bg-background px-4 py-3 flex flex-col gap-1">
            {navLinks.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-sm font-medium text-foreground hover:bg-muted transition-colors"
              >
                {label}
              </Link>
            ))}
            <div className="border-t border-border mt-2 pt-2 flex flex-col gap-1">
              <Link to="/login" className="px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground">Log in</Link>
              <Link to="/register" className="px-3 py-2.5 text-sm font-semibold text-primary">Sign up free</Link>
            </div>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <span>© 2025 DIY Easy Read. A Volition tool.</span>
          <nav className="flex gap-6">
            <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
            <Link to="/pricing" className="hover:text-foreground transition-colors">Pricing</Link>
            <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact</a>
          </nav>
        </div>
      </footer>
    </div>
  )
}
