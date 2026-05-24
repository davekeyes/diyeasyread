import { Link } from 'react-router-dom'
import { FileText } from 'lucide-react'

export default function Login() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 font-semibold text-lg text-foreground mb-2">
            <span className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <FileText size={17} className="text-primary-foreground" />
            </span>
            DIY Easy Read
          </div>
          <h1 className="text-2xl font-bold text-foreground mt-4">Welcome back</h1>
          <p className="text-muted-foreground text-sm mt-1">Log in to your account</p>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label htmlFor="password" className="block text-sm font-medium text-foreground">Password</label>
              <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">Forgot password?</a>
            </div>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Log in
          </button>
        </form>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Don't have an account?{' '}
          <Link to="/register" className="text-foreground font-medium hover:underline underline-offset-2">
            Sign up free
          </Link>
        </p>

        <div className="mt-4 text-center">
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  )
}
