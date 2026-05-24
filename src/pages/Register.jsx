import { Link } from 'react-router-dom'
import { FileText, Check } from 'lucide-react'

const planPerks = [
  'Unlimited Easy Read documents',
  'Save and manage your documents',
  'Download as Word or PDF',
  'Share with colleagues',
]

export default function Register() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 font-semibold text-lg text-foreground">
            <span className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
              <FileText size={17} className="text-primary-foreground" />
            </span>
            DIY Easy Read
          </div>
          <h1 className="text-2xl font-bold text-foreground mt-4">Create your free account</h1>
          <p className="text-muted-foreground text-sm mt-1">No credit card required</p>
        </div>

        {/* Perks */}
        <div className="mb-6 rounded-xl bg-muted/50 p-4 space-y-2">
          {planPerks.map((p, i) => (
            <div key={i} className="flex items-center gap-2.5 text-sm text-foreground">
              <Check size={14} className="text-primary shrink-0" />
              {p}
            </div>
          ))}
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="first" className="block text-sm font-medium text-foreground mb-1.5">First name</label>
              <input
                id="first"
                type="text"
                placeholder="Erika"
                className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <div>
              <label htmlFor="last" className="block text-sm font-medium text-foreground mb-1.5">Last name</label>
              <input
                id="last"
                type="text"
                placeholder="Smith"
                className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-muted-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
          </div>
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
            <label htmlFor="password" className="block text-sm font-medium text-foreground mb-1.5">Password</label>
            <input
              id="password"
              type="password"
              placeholder="At least 8 characters"
              className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Create account
          </button>
        </form>

        <p className="text-center text-xs text-muted-foreground mt-4">
          By signing up you agree to our{' '}
          <a href="#" className="underline underline-offset-2 hover:text-foreground">Terms</a> and{' '}
          <a href="#" className="underline underline-offset-2 hover:text-foreground">Privacy policy</a>.
        </p>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Already have an account?{' '}
          <Link to="/login" className="text-foreground font-medium hover:underline underline-offset-2">Log in</Link>
        </p>

        <div className="mt-4 text-center">
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">← Back to home</Link>
        </div>
      </div>
    </div>
  )
}
