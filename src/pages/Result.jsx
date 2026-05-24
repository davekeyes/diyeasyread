import { Link } from 'react-router-dom'
import { Download, Share2, RefreshCw, ChevronLeft, CheckCircle } from 'lucide-react'

const sections = [
  {
    heading: 'What this document is about',
    body: 'This document explains how to apply for support. It tells you what you need to do and what will happen.',
  },
  {
    heading: 'Who can apply',
    body: 'You can apply if you are 18 or older. You must live in New Zealand. You need to have a disability.',
  },
  {
    heading: 'How to apply',
    body: 'Fill in the form. Send the form to us. We will contact you within 10 working days.',
  },
  {
    heading: 'What happens next',
    body: 'We will read your form. Someone will call you to talk about your support needs. We will tell you what support you can get.',
  },
]

export default function Result() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-8 flex-wrap">
        <div>
          <Link to="/create" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-3 transition-colors">
            <ChevronLeft size={15} /> Back to create
          </Link>
          <h1 className="text-2xl font-bold text-foreground">Your Easy Read document</h1>
          <div className="flex items-center gap-2 mt-1">
            <CheckCircle size={15} className="text-green-600" />
            <span className="text-sm text-muted-foreground">Generated successfully</span>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap">
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">
            <RefreshCw size={15} /> Regenerate
          </button>
          <button className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border text-sm font-medium text-foreground hover:bg-muted transition-colors">
            <Share2 size={15} /> Share
          </button>
          <button className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity">
            <Download size={15} /> Download
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Document preview */}
        <div className="md:col-span-2">
          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm space-y-8">
            {/* Document title */}
            <div className="pb-6 border-b border-border">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <span className="text-3xl">📄</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground leading-snug">
                Applying for support
              </h2>
              <p className="text-muted-foreground mt-1 text-sm">Easy Read version</p>
            </div>

            {/* Sections */}
            {sections.map((s, i) => (
              <div key={i} className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center shrink-0">
                    {i + 1}
                  </div>
                  <h3 className="font-semibold text-foreground text-lg">{s.heading}</h3>
                </div>
                {/* Image placeholder */}
                <div className="rounded-xl bg-muted/60 border border-border h-24 flex items-center justify-center text-muted-foreground text-sm">
                  [Image placeholder]
                </div>
                <p className="text-foreground leading-relaxed text-lg">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* Document details */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-3">
            <h3 className="font-semibold text-foreground text-sm">Document details</h3>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Sections</dt>
                <dd className="font-medium text-foreground">{sections.length}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Reading age</dt>
                <dd className="font-medium text-foreground">8–10 years</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Format</dt>
                <dd className="font-medium text-foreground">.docx</dd>
              </div>
            </dl>
          </div>

          {/* Actions */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-3">
            <h3 className="font-semibold text-foreground text-sm">Actions</h3>
            <div className="space-y-2">
              <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                Edit document →
              </button>
              <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                Save to my documents →
              </button>
              <button className="w-full text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-1">
                Start again →
              </button>
            </div>
          </div>

          {/* Feedback */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-3">
            <h3 className="font-semibold text-foreground text-sm">How did we do?</h3>
            <p className="text-xs text-muted-foreground">Rate the quality of this Easy Read translation.</p>
            <div className="flex gap-2">
              {['👍', '👎'].map(emoji => (
                <button key={emoji} className="flex-1 py-2 rounded-lg border border-border text-lg hover:bg-muted transition-colors">
                  {emoji}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
