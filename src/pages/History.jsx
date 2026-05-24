import { Link } from 'react-router-dom'
import { FileText, Download, Trash2, Plus, Search } from 'lucide-react'

const docs = [
  { id: 1, title: 'Applying for support', date: '22 May 2025', pages: 4, format: 'docx' },
  { id: 2, title: 'Rights in care — plain language guide', date: '18 May 2025', pages: 6, format: 'pdf' },
  { id: 3, title: 'Your support plan explained', date: '10 May 2025', pages: 3, format: 'docx' },
  { id: 4, title: 'How to contact your support coordinator', date: '2 May 2025', pages: 2, format: 'docx' },
]

export default function History() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">My documents</h1>
          <p className="text-muted-foreground text-sm mt-1">{docs.length} documents</p>
        </div>
        <Link
          to="/create"
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <Plus size={15} /> New document
        </Link>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <input
          type="search"
          placeholder="Search your documents..."
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-input bg-background text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      {/* Document list */}
      <div className="space-y-3">
        {docs.map(doc => (
          <div
            key={doc.id}
            className="flex items-center gap-4 p-4 rounded-xl border border-border bg-card hover:bg-muted/40 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
              <FileText size={18} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <Link to="/result" className="font-medium text-foreground hover:underline underline-offset-2 line-clamp-1">
                {doc.title}
              </Link>
              <p className="text-xs text-muted-foreground mt-0.5">{doc.date} · {doc.pages} sections · .{doc.format}</p>
            </div>
            <div className="flex items-center gap-1 shrink-0">
              <button className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors" aria-label="Download">
                <Download size={15} />
              </button>
              <button className="p-2 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors" aria-label="Delete">
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Sign-up nudge */}
      <div className="mt-8 p-5 rounded-xl border border-border bg-muted/40 text-center">
        <p className="text-sm text-muted-foreground mb-3">
          <strong className="text-foreground">Create an account</strong> to save documents across devices and share them with others.
        </p>
        <Link to="/register" className="inline-flex px-4 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
          Sign up free
        </Link>
      </div>
    </div>
  )
}
