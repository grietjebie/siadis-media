import Link from 'next/link'
import Image from 'next/image'
import { getClients, urlFor } from '@/lib/sanity'

export const revalidate = 60

const fallbackClients = [
  { _id: '1', name: 'Holland Watch Group', sector: 'Luxury Retail' },
  { _id: '2', name: 'MIT', sector: 'Education' },
  { _id: '3', name: 'Kaasfoord', sector: 'Food & Retail' },
  { _id: '4', name: 'PLNTY', sector: 'Hospitality' },
  { _id: '5', name: 'Marlies Dekkers', sector: 'Fashion' },
  { _id: '6', name: 'De Groene Boog', sector: 'Healthcare' },
  { _id: '7', name: 'Elixir Fields', sector: 'Health & Wellness' },
  { _id: '8', name: 'Bloomville', sector: 'E-commerce' },
  { _id: '9', name: 'ArchiStudio', sector: 'Architecture' },
  { _id: '10', name: 'Volta Energy', sector: 'Energy' },
  { _id: '11', name: 'NovaSpark', sector: 'Tech / SaaS' },
  { _id: '12', name: 'Maré Collection', sector: 'Fashion' },
]

export default async function ClientsPage() {
  const sanityClients = await getClients()
  const clients = sanityClients.length > 0 ? sanityClients : fallbackClients

  return (
    <>
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

      <section className="py-10 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { value: '300+', label: 'Campaigns run' },
              { value: '25M+', label: 'Impressions delivered' },
              { value: '8+', label: 'Peak ROAS achieved' },
            ].map(s => (
              <div key={s.label}>
                <div className="text-3xl md:text-4xl font-bold teal-text mb-1">{s.value}</div>
                <div className="text-white/40 text-xs uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((c: any) => {
              const logoSrc = c.logo?.asset ? urlFor(c.logo).width(300).url() : null
              return (
                <div key={c._id} className="bg-[#111] border border-white/10 rounded-2xl p-6 hover:border-white/25 transition group flex flex-col items-center justify-center text-center min-h-[120px]">
                  {logoSrc ? (
                    <div className="w-full flex items-center justify-center mb-3 px-2">
                      <Image src={logoSrc} alt={c.name} width={160} height={80} className="object-contain max-h-16 w-auto" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-xl teal-gradient flex items-center justify-center text-[#0a0a0a] font-bold text-sm mb-3 group-hover:scale-110 transition">
                      {c.name.charAt(0)}
                    </div>
                  )}
                  {!logoSrc && <p className="font-semibold text-sm leading-snug mb-1">{c.name}</p>}
                  {!logoSrc && <p className="text-white/30 text-xs">{c.sector}</p>}
                </div>
              )
            })}
          </div>
        </div>
      </section>

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
                Most of our clients have been with us for 2+ years. That doesn&apos;t happen by accident — it happens because we treat their business like our own.
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

      <section className="py-20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to be on this list?</h2>
          <p className="text-white/50 mb-8">We take on a limited number of new clients per quarter. Let&apos;s talk.</p>
          <Link href="/contact" className="px-8 py-3.5 rounded-full teal-gradient text-[#0a0a0a] font-semibold hover:opacity-90 transition inline-block">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
