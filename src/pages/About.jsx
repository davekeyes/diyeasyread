import { Link } from 'react-router-dom'
import { Heart, Globe, Users } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Accessibility first',
    body: 'We build for the people who are most often forgotten — people with learning disabilities, low literacy, and anyone who finds complex language hard to navigate.',
  },
  {
    icon: Globe,
    title: 'Made in Aotearoa New Zealand',
    body: 'DIY Easy Read is a tool built by Volition — a New Zealand social enterprise dedicated to tools for self-determination.',
  },
  {
    icon: Users,
    title: 'For support workers and families',
    body: 'Anyone who supports someone should be able to create clear, accessible documents without needing specialist training.',
  },
]

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Intro */}
      <div className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold text-foreground mb-6">What is Easy Read?</h1>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Easy Read is a way of writing information so that more people can understand it. It uses plain language, short sentences, and images to make documents accessible for people with learning disabilities, low literacy, and others who find complex language difficult.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          Easy Read documents are used in healthcare, government, social services, and anywhere important information needs to reach everyone — not just those who find reading easy.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          DIY Easy Read lets you create these documents yourself, using AI to translate your existing documents into the Easy Read format.
        </p>
      </div>

      {/* What makes Easy Read */}
      <div className="mb-16">
        <h2 className="text-xl font-bold text-foreground mb-6">What makes a good Easy Read document?</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            'Short sentences — one idea at a time',
            'Plain English — no jargon or technical terms',
            'Active voice — "We will call you" not "You will be contacted"',
            'Clear, descriptive headings',
            'Supporting images on every page',
            'Plenty of white space',
            'Large text and good contrast',
            'No abbreviations or acronyms',
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-muted/40 border border-border">
              <div className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </div>
              <p className="text-sm text-foreground">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Values */}
      <div className="mb-16">
        <h2 className="text-xl font-bold text-foreground mb-8">About this tool</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map(({ icon: Icon, title, body }) => (
            <div key={title} className="space-y-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Icon size={18} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">{title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="rounded-2xl bg-muted/40 border border-border p-8 text-center">
        <h2 className="text-xl font-bold text-foreground mb-3">Ready to create your first document?</h2>
        <p className="text-muted-foreground text-sm mb-6">It's free, and no account is needed to get started.</p>
        <Link
          to="/create"
          className="inline-flex px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
        >
          Create a document
        </Link>
      </div>
    </div>
  )
}
