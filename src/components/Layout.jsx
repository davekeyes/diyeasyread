import { Outlet, Link, useLocation } from 'react-router-dom'
import { FileText, MessageSquare, X } from 'lucide-react'
import { useState } from 'react'

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/history', label: 'My documents' },
  { to: '/pricing', label: 'Pricing' },
  { to: '/about', label: 'About' },
  { to: '/login', label: 'Log in' },
  { to: '/register', label: 'Sign up' },
]

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Nav */}
      <header className="border-b border-border bg-background">
        <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <div className="flex items-center gap-2">
              {/* Custom logo icon */}
              <div className="w-10 h-10 relative">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <rect width="40" height="40" rx="8" fill="hsl(191 100% 14%)" fillOpacity="0.08"/>
                  <path d="M10 22l6 6 14-14" stroke="hsl(191 100% 14%)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M30 10l2 -2" stroke="hsl(191 100% 14%)" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <span className="font-bold text-sm text-foreground leading-tight">DIY Easy Read</span>
            </div>
            <span className="text-xs text-muted-foreground ml-12 -mt-1">from Volition</span>
          </Link>

          {/* Menu button */}
          <button
            onClick={() => setMenuOpen(o => !o)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border text-sm font-semibold text-foreground hover:bg-muted transition-colors"
            aria-label="Toggle menu"
          >
            Menu
            <div className="flex flex-col gap-1">
              <span className="block w-4 h-0.5 bg-foreground rounded" />
              <span className="block w-4 h-0.5 bg-foreground rounded" />
              <span className="block w-4 h-0.5 bg-foreground rounded" />
            </div>
          </button>
        </div>

        {/* Dropdown menu */}
        {menuOpen && (
          <div className="border-t border-border bg-background">
            <div className="max-w-4xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map(({ to, label }) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Page content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-8">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <p className="font-bold text-foreground text-sm">DIY Easy Read</p>
          <p className="text-sm text-muted-foreground">Making documents accessible to everyone with clear, simple Easy Read formats.</p>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-foreground transition-colors">Accessibility Statement</a>
            <a href="#" className="hover:text-foreground transition-colors">Contact Us</a>
          </nav>
          <p className="text-sm text-muted-foreground pt-2 border-t border-border">
            Brought to you by <strong className="text-foreground">Volition</strong>
          </p>
        </div>
      </footer>

      {/* Floating chat button */}
      <button
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-primary text-primary-foreground shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity z-50"
        aria-label="Open chat"
      >
        <MessageSquare size={22} />
      </button>
    </div>
  )
}
