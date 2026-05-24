import { useState } from 'react'
import { User, Bell, Shield, Trash2 } from 'lucide-react'

const sections = [
  { id: 'profile', label: 'Profile', icon: User },
  { id: 'notifications', label: 'Notifications', icon: Bell },
  { id: 'security', label: 'Security', icon: Shield },
]

export default function Settings() {
  const [active, setActive] = useState('profile')

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-foreground mb-8">Settings</h1>

      <div className="grid md:grid-cols-4 gap-8">
        {/* Sidebar nav */}
        <nav className="space-y-1">
          {sections.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-left ${
                active === id
                  ? 'bg-muted text-foreground'
                  : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
              }`}
            >
              <Icon size={15} /> {label}
            </button>
          ))}
        </nav>

        {/* Content */}
        <div className="md:col-span-3 space-y-6">
          {active === 'profile' && (
            <div className="space-y-6">
              <div className="rounded-xl border border-border bg-card p-6 space-y-5">
                <h2 className="font-semibold text-foreground">Profile details</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'First name', value: 'Erika', id: 'first' },
                    { label: 'Last name', value: 'Smith', id: 'last' },
                  ].map(({ label, value, id }) => (
                    <div key={id}>
                      <label htmlFor={id} className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
                      <input
                        id={id}
                        type="text"
                        defaultValue={value}
                        className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                  <input
                    id="email"
                    type="email"
                    defaultValue="erika@example.com"
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
                <div className="flex justify-end">
                  <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                    Save changes
                  </button>
                </div>
              </div>

              {/* Danger zone */}
              <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
                <h2 className="font-semibold text-foreground mb-2">Danger zone</h2>
                <p className="text-sm text-muted-foreground mb-4">Deleting your account removes all your documents and cannot be undone.</p>
                <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-destructive text-destructive text-sm font-medium hover:bg-destructive hover:text-destructive-foreground transition-colors">
                  <Trash2 size={14} /> Delete account
                </button>
              </div>
            </div>
          )}

          {active === 'notifications' && (
            <div className="rounded-xl border border-border bg-card p-6 space-y-5">
              <h2 className="font-semibold text-foreground">Notifications</h2>
              {['Email me when a document is ready', 'Product updates and tips', 'Occasional newsletter'].map((label, i) => (
                <div key={i} className="flex items-center justify-between">
                  <span className="text-sm text-foreground">{label}</span>
                  <button
                    className="relative w-11 h-6 rounded-full bg-muted transition-colors"
                    role="switch"
                    aria-checked={i === 0}
                  >
                    <span className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${i === 0 ? 'left-5' : 'left-1'}`} />
                  </button>
                </div>
              ))}
            </div>
          )}

          {active === 'security' && (
            <div className="rounded-xl border border-border bg-card p-6 space-y-5">
              <h2 className="font-semibold text-foreground">Change password</h2>
              {['Current password', 'New password', 'Confirm new password'].map((label, i) => (
                <div key={i}>
                  <label className="block text-sm font-medium text-foreground mb-1.5">{label}</label>
                  <input
                    type="password"
                    placeholder="••••••••"
                    className="w-full px-4 py-2.5 rounded-xl border border-input bg-background text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                </div>
              ))}
              <div className="flex justify-end">
                <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
                  Update password
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
