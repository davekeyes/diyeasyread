import { Link } from 'react-router-dom'
import { FileText, Plus, TrendingUp, Clock, Download } from 'lucide-react'

const recent = [
  { title: 'Applying for support', date: '22 May 2025', sections: 4 },
  { title: 'Rights in care — plain language guide', date: '18 May 2025', sections: 6 },
  { title: 'Your support plan explained', date: '10 May 2025', sections: 3 },
]

const stats = [
  { label: 'Documents created', value: '12', icon: FileText },
  { label: 'This month', value: '4', icon: TrendingUp },
  { label: 'Downloads', value: '28', icon: Download },
]

export default function Dashboard() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground text-sm mt-1">Welcome back, Erika</p>
        </div>
        <Link
          to="/create"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <Plus size={15} /> New document
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-10">
        {stats.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-xl border border-border bg-card p-5">
            <div className="flex items-center gap-2 text-muted-foreground mb-2">
              <Icon size={15} />
              <span className="text-xs font-medium">{label}</span>
            </div>
            <p className="text-3xl font-bold text-foreground">{value}</p>
          </div>
        ))}
      </div>

      {/* Recent documents */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-foreground">Recent documents</h2>
          <Link to="/history" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            View all →
          </Link>
        </div>
        <div className="space-y-3">
          {recent.map((doc, i) => (
            <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-muted/40 transition-colors">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <FileText size={16} className="text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <Link to="/result" className="font-medium text-foreground hover:underline underline-offset-2 text-sm line-clamp-1">
                  {doc.title}
                </Link>
                <p className="text-xs text-muted-foreground mt-0.5">{doc.date} · {doc.sections} sections</p>
              </div>
              <div className="flex items-center gap-1">
                <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                  <Download size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Plan */}
      <div className="mt-10 p-5 rounded-xl border border-border bg-card flex items-center justify-between gap-4 flex-wrap">
        <div>
          <p className="text-sm font-medium text-foreground">Free plan</p>
          <p className="text-xs text-muted-foreground mt-0.5">12 of unlimited documents used</p>
        </div>
        <Link to="/pricing" className="text-sm font-medium text-foreground border border-border rounded-lg px-4 py-2 hover:bg-muted transition-colors">
          View plans
        </Link>
      </div>
    </div>
  )
}
