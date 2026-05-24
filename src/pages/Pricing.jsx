import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'

const plans = [
  {
    name: 'Free',
    price: 'Free',
    description: 'Get started with Easy Read — no account needed.',
    cta: 'Get started',
    ctaTo: '/create',
    features: [
      'Unlimited document translations',
      'Download as Word or PDF',
      'Plain language simplification',
      'Image placeholder layout',
    ],
    highlighted: false,
  },
  {
    name: 'Organisation',
    price: 'Contact us',
    description: 'For teams and organisations creating Easy Read at scale.',
    cta: 'Contact us',
    ctaTo: '/about',
    features: [
      'Everything in Free',
      'Shared document library',
      'Team management',
      'Custom branding',
      'Priority support',
      'Usage analytics',
    ],
    highlighted: true,
  },
]

export default function Pricing() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <h1 className="text-3xl font-bold text-foreground mb-4">Simple, honest pricing</h1>
        <p className="text-muted-foreground max-w-xl mx-auto">
          DIY Easy Read is free for everyone. We want making accessible documents to have no barrier — for support workers, families, and organisations alike.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {plans.map(({ name, price, description, cta, ctaTo, features, highlighted }) => (
          <div
            key={name}
            className={`rounded-2xl border p-8 flex flex-col ${
              highlighted
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-card text-foreground border-border'
            }`}
          >
            <div className="mb-6">
              <p className={`text-sm font-semibold mb-1 ${highlighted ? 'text-primary-foreground/70' : 'text-muted-foreground'}`}>
                {name}
              </p>
              <p className="text-3xl font-bold">{price}</p>
              <p className={`text-sm mt-2 leading-relaxed ${highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                {description}
              </p>
            </div>

            <ul className="space-y-3 mb-8 flex-1">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm">
                  <Check size={15} className={`shrink-0 mt-0.5 ${highlighted ? 'text-primary-foreground' : 'text-primary'}`} />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              to={ctaTo}
              className={`text-center py-3 rounded-xl font-semibold text-sm transition-opacity hover:opacity-90 ${
                highlighted
                  ? 'bg-primary-foreground text-primary'
                  : 'bg-primary text-primary-foreground'
              }`}
            >
              {cta}
            </Link>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-muted-foreground mt-10">
        Questions about pricing?{' '}
        <Link to="/about" className="text-foreground underline underline-offset-2 hover:opacity-70">Get in touch</Link>.
      </p>
    </div>
  )
}
