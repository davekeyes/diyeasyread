import { Link } from 'react-router-dom'
import { ArrowRight, Upload, Sparkles, Download, CheckCircle } from 'lucide-react'

const steps = [
  {
    icon: Upload,
    title: 'Upload your document',
    description: 'Paste text or upload a Word or PDF file. We support most common document formats.',
  },
  {
    icon: Sparkles,
    title: 'We translate it',
    description: 'Our tool rewrites your content in plain language with short sentences and clear structure.',
  },
  {
    icon: Download,
    title: 'Download Easy Read',
    description: 'Get a formatted Easy Read document ready to print or share digitally.',
  },
]

const benefits = [
  'Short, simple sentences',
  'Plain English — no jargon',
  'Clear headings and structure',
  'Designed for accessibility',
  'WCAG AA compliant output',
  'Works with Word and PDF',
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-20 pb-16 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs font-medium mb-6">
          <Sparkles size={12} />
          A Volition accessibility tool
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
          Make your documents<br />easy to read for everyone
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          DIY Easy Read translates complex documents into plain language — quickly, accessibly, and for free. Built for people who support others.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/create"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity"
          >
            Create a document <ArrowRight size={16} />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
          >
            What is Easy Read?
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-muted/40 border-y border-border py-16">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-center text-foreground mb-12">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map(({ icon: Icon, title, description }, i) => (
              <div key={i} className="flex flex-col items-center text-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Icon size={22} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground mb-1">Step {i + 1}</div>
                  <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-5xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-4">What makes a good Easy Read document?</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Easy Read is a specific way of presenting information that makes it easier to understand for people with learning disabilities, low literacy, or anyone who finds complex language difficult.
            </p>
            <Link to="/about" className="text-sm font-medium text-foreground underline underline-offset-4 hover:opacity-70 transition-opacity">
              Learn more about Easy Read →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-3">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                <CheckCircle size={16} className="text-primary shrink-0" />
                <span className="text-sm text-foreground">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-5xl mx-auto px-4 pb-16">
        <div className="rounded-2xl bg-primary text-primary-foreground p-10 text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to get started?</h2>
          <p className="text-primary-foreground/80 mb-8">
            Create your first Easy Read document in minutes — no account needed.
          </p>
          <Link
            to="/create"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary-foreground text-primary font-semibold hover:opacity-90 transition-opacity"
          >
            Create a document <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}
