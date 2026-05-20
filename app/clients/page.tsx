import Link from 'next/link'

const clients = [
  { name: 'Holland Watch Group', sector: 'Luxury Retail' },
  { name: 'MIT', sector: 'Education' },
  { name: 'Kaasfoord', sector: 'Food & Retail' },
  { name: 'PLNTY', sector: 'Hospitality' },
  { name: 'Marlies Dekkers', sector: 'Fashion' },
  { name: 'De Groene Boog', sector: 'Healthcare' },
  { name: 'Elixir Fields', sector: 'Health & Wellness' },
  { name: 'Bloomville', sector: 'E-commerce' },
  { name: 'ArchiStudio', sector: 'Architecture' },
  { name: 'Volta Energy', sector: 'Energy' },
  { name: 'NovaSpark', sector: 'Tech / SaaS' },
  { name: 'Maré Collection', sector: 'Fashion' },
]

const sectors = ['All', 'E-commerce', 'Fashion', 'Hospitality', 'Luxury Retail', 'Tech / SaaS', 'Healthcare']

export default function ClientsPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">Who we work with</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="teal-text">Clients</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            Brands that trusted us to grow their digital presence — and kept coming back.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section className="py-10 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: '250+', label: 'Campaigns run' },
              { value: '15M+', label: 'Impressions delivered' },
              { value: '8500%', label: 'Peak ROAS achieved' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold teal-text mb-1">{s.value}</div>
                <div className="text-white/40 text-xs uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((c, i) => (
              <div
                key={i}
                className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-white/25 transition group flex flex-col items-center justify-center text-center min-h-[120px]"
              >
                <div className="w-10 h-10 rounded-xl teal-gradient flex items-center justify-center text-[#0a0a0a] font-bold text-sm mb-3 group-hover:scale-110 transition">
                  {c.name.charAt(0)}
                </div>
                <p className="font-semibold text-sm leading-snug mb-1">{c.name}</p>
                <p className="text-white/30 text-xs">{c.sector}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust section */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40 mb-3">Why they stay</p>
              <h2 className="text-3xl font-bold mb-6">
                Long-term partnerships,<br />
                <span className="teal-text">not one-off projects</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Most of our clients have been with us for 2+ years. That doesn&apos;t happen by accident — it happens because we treat their business like our own. We celebrate their wins, take ownership of the misses, and never stop looking for the next lever to pull.
              </p>
              <Link href="/testimonials" className="text-sm teal-text font-semibold hover:opacity-80 transition">
                Read what they say →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Client retention', value: '90%+' },
                { label: 'Avg. engagement', value: '2+ yrs' },
                { label: 'Industries served', value: '12+' },
                { label: 'Countries reached', value: '8+' },
              ].map(s => (
                <div key={s.label} className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-6 text-center">
                  <div className="text-2xl font-bold teal-text mb-1">{s.value}</div>
                  <div className="text-white/40 text-xs">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Want to be on this list?
          </h2>
          <p className="text-white/50 mb-8">We take on a limited number of new clients per quarter. Let&apos;s talk.</p>
          <Link href="/contact" className="px-8 py-3.5 rounded-full teal-gradient text-[#0a0a0a] font-semibold hover:opacity-90 transition inline-block">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
