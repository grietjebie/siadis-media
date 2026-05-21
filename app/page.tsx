import Link from 'next/link'
import Image from 'next/image'

const featuredServices = [
  {
    icon: '📊',
    title: 'Campaign Strategy',
    desc: 'No cookie-cutter campaigns. We dig into your goals and map out a strategy with the KPIs that actually matter.',
  },
  {
    icon: '📱',
    title: 'Social Media Advertising',
    desc: 'Facebook, Instagram, TikTok, Snapchat — paid social that actually converts, synced with your product feed.',
  },
  {
    icon: '🎯',
    title: 'Retargeting',
    desc: "Someone visited but didn't convert? We re-engage them with smart, targeted ads that nudge them toward buying.",
  },
]

const stats = [
  { value: '250+', label: 'Campaigns' },
  { value: '15M+', label: 'Impressions' },
  { value: '5-10x', label: 'ROAS' },
  { value: '6%', label: 'Avg CTR' },
]

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center pt-20">
        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center py-20">
            <div>
              <span className="inline-block text-xs tracking-widest uppercase mb-6 px-3 py-1 rounded-full border border-white/20 text-white/50">
                Digital Marketing Agency
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
                Bring your<br />
                brand <span className="teal-text">closer</span><br />
                <span className="teal-text">to real people.</span>
              </h1>
              <p className="text-white/60 text-lg leading-relaxed mb-8 max-w-md">
                10 years of expertise. Every digital touchpoint covered — from strategy and paid social to content, video, analytics and web development.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="px-7 py-3.5 rounded-full teal-gradient text-[#0a0a0a] font-semibold hover:opacity-90 transition">
                  Start a project
                </Link>
                <Link href="/services" className="px-7 py-3.5 rounded-full border border-white/20 text-white hover:border-white/50 transition">
                  Our services
                </Link>
              </div>
            </div>

            <div className="hidden md:flex justify-center items-center relative">
              <div className="w-80 h-80 rounded-3xl border border-white/10 relative overflow-hidden">
                <Image
                  src="/daniel-siadis.jpg"
                  alt="Daniel Siadis"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute top-4 -right-4 bg-[#111] border border-white/10 rounded-2xl px-4 py-3">
                <span className="teal-text font-bold text-lg">5-10x</span>
                <span className="text-white/50 ml-2 text-xs">ROAS</span>
              </div>
              <div className="absolute bottom-8 -left-4 bg-[#111] border border-white/10 rounded-2xl px-4 py-3">
                <span className="teal-text font-bold text-lg">15M+</span>
                <span className="text-white/50 ml-2 text-xs">Impressions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#111] border-y border-white/10 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(s => (
              <div key={s.label} className="text-center">
                <div className="text-4xl font-bold teal-text mb-1">{s.value}</div>
                <div className="text-white/40 text-xs uppercase tracking-widest">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED SERVICES */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40 mb-3">What we do</p>
              <h2 className="text-4xl font-bold">
                We&apos;re always ready<br />for <span className="teal-text">challenges</span>
              </h2>
            </div>
            <Link href="/services" className="text-sm text-white/50 hover:text-white transition underline underline-offset-4 self-start md:self-auto">
              View all 10 services →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {featuredServices.map((s, i) => (
              <div key={i} className="bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition group">
                <div className="w-14 h-14 rounded-2xl teal-gradient flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition">
                  {s.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{s.desc}</p>
                <Link href="/contact" className="text-xs font-semibold teal-text hover:opacity-80 transition">
                  Connect →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-24 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40 mb-3">About</p>
              <h2 className="text-4xl font-bold mb-6">
                The thing about us is<br />
                <span className="teal-text">we think big, huge</span>
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                I spent 10 years mastering the digital marketing game before launching Siadis Media in 2020 — built around one idea: your brand deserves a full-stack approach.
              </p>
              <ul className="space-y-3 mb-8">
                {['Every touchpoint covered', 'Consumer behavior is evolving fast', 'We keep you one step ahead'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-white/60 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 teal-gradient" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/about" className="px-7 py-3 rounded-full border border-white/20 text-sm hover:border-white/50 transition">
                Learn more
              </Link>
            </div>
            <div className="bg-[#0a0a0a] border border-white/10 rounded-3xl p-10">
              <div className="text-6xl mb-4 text-white/20">&ldquo;</div>
              <p className="text-white/70 text-lg leading-relaxed italic mb-8">
                Consumer behavior is evolving at lightning speed, and we&apos;re here to make sure your business is always one step ahead.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full teal-gradient flex items-center justify-center font-bold text-[#0a0a0a] text-sm">
                  DS
                </div>
                <div>
                  <p className="font-semibold text-sm">Daniel Siadis</p>
                  <p className="text-white/40 text-xs">Founder, Siadis Media</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="teal-text">level up?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Drop an email or jump on a video call. Let&apos;s build something great together.
          </p>
          <Link href="/contact" className="px-10 py-4 rounded-full teal-gradient text-[#0a0a0a] font-semibold text-lg hover:opacity-90 transition inline-block">
            Start a project
          </Link>
        </div>
      </section>
    </>
  )
}
