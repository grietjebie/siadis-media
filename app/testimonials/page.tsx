import Link from 'next/link'
import { getTestimonials } from '@/lib/sanity'

const fallbackTestimonials = [
  { _id: '1', quote: "Siadis Media transformed our Facebook and Instagram presence. Our ROAS went from 3x to over 12x in just four months. Daniel genuinely understands the fashion customer — and it shows in every ad.", name: 'Sophie van der Berg', role: 'CMO', company: 'Marlies Dekkers', sector: 'Fashion' },
  { _id: '2', quote: "We needed a team that could handle everything — strategy, paid ads, email, and analytics — without us having to babysit. Siadis Media delivered exactly that. Finally, an agency that feels like a real partner.", name: 'Thomas Groen', role: 'Head of Marketing', company: 'Holland Watch Group', sector: 'Luxury Retail' },
  { _id: '3', quote: "Our online reservations increased by 60% in the first three months. The retargeting campaigns are incredibly smart — guests who visited our site once are coming back and booking. Outstanding results.", name: 'Lena Hoffmann', role: 'Marketing Director', company: 'PLNTY', sector: 'Hospitality' },
  { _id: '4', quote: "Daniel built our entire content and email strategy from scratch. Open rates went from 18% to 41%, and our monthly recurring revenue from email alone now covers our full marketing budget. Worth every euro.", name: 'Jasper de Wit', role: 'Founder', company: 'Elixir Fields', sector: 'Health & Wellness' },
  { _id: '5', quote: "I was skeptical about digital advertising for a niche cheese retailer. Siadis Media proved me wrong — their display campaigns brought in customers from cities we'd never reached before. Sales up 45% year-over-year.", name: 'Pieter Bakker', role: 'Owner', company: 'Kaasfoord', sector: 'Food & Retail' },
  { _id: '6', quote: "The analytics setup alone was worth it. For the first time, we could actually see which campaigns drove conversions versus which just burned budget. Siadis Media brought clarity to our entire digital spend.", name: 'Anouk Smit', role: 'Digital Lead', company: 'De Groene Boog', sector: 'Healthcare' },
]

export default async function TestimonialsPage() {
  const sanityTestimonials = await getTestimonials()
  const testimonials = sanityTestimonials.length > 0 ? sanityTestimonials : fallbackTestimonials

  return (
    <>
      <section className="pt-32 pb-16 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">Social proof</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            What clients <span className="teal-text">say about us</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            Real results. Real feedback. From brands that trusted us with their growth.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t: any) => (
              <div key={t._id} className="bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition flex flex-col">
                <div className="text-4xl text-white/15 font-serif mb-4">&ldquo;</div>
                <p className="text-white/70 leading-relaxed text-sm flex-1 mb-6 italic">{t.quote}</p>
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <div className="w-10 h-10 rounded-full teal-gradient flex items-center justify-center text-[#0a0a0a] font-bold text-xs flex-shrink-0">
                    {t.name.split(' ').map((n: string) => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-white/40 text-xs">{t.role}, {t.company}</p>
                  </div>
                  {t.sector && (
                    <span className="ml-auto text-xs text-white/25 border border-white/10 px-3 py-1 rounded-full">{t.sector}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div className="text-5xl font-bold teal-text mb-2">5.0</div>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-2xl" style={{ color: '#00C9B1' }}>★</span>
            ))}
          </div>
          <p className="text-white/40 text-sm mb-8">Average client satisfaction across all engagements</p>
          <Link href="/contact" className="px-8 py-3.5 rounded-full teal-gradient text-[#0a0a0a] font-semibold hover:opacity-90 transition inline-block">
            Become our next success story
          </Link>
        </div>
      </section>
    </>
  )
}
