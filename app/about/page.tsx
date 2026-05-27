import Link from 'next/link'
import Image from 'next/image'
import { getAbout } from '@/lib/sanity'

export const revalidate = 60

const fallback = {
  bio1: "I spent 10 years mastering the digital marketing game before launching Siadis Media in 2020 — and I built it around one idea: your brand deserves a full-stack approach.",
  bio2: "From campaign strategy and paid social to retargeting, email, content, video ads, display advertising, analytics, web development, and customer service — we've got every touchpoint covered.",
  bio3: "Consumer behavior is evolving at lightning speed, and we're here to make sure your business is always one step ahead. Ready to level up? Drop me an email or let's jump on a video call.",
  values: [
    { title: 'Results over vanity', desc: "Impressions look great in a deck. We care about what actually moves your business forward — revenue, leads, retention." },
    { title: 'Full-stack thinking', desc: "Strategy, creative, tech, analytics — all in-house, all connected. No handoff gaps, no finger-pointing." },
    { title: 'Radical transparency', desc: "You'll always know what we're doing, why we're doing it, and what it's costing. No black boxes." },
  ],
  milestones: [
    { year: '2014', title: 'First campaigns', desc: 'Started running paid social for local businesses — discovered a passion for data-driven marketing.' },
    { year: '2017', title: 'Agency experience', desc: 'Worked in-house at a mid-size Amsterdam agency managing multi-channel campaigns for international brands.' },
    { year: '2019', title: 'Freelance leap', desc: 'Went independent, building a client portfolio across e-commerce, hospitality, and fashion.' },
    { year: '2020', title: 'Siadis Media founded', desc: 'Launched the agency with a full-stack approach — because piecemeal marketing leaves money on the table.' },
    { year: 'Now', title: '300+ campaigns later', desc: 'Trusted by brands across Europe and Asia. Still hungry, still learning, still delivering results.' },
  ],
}

export default async function AboutPage() {
  const sanityAbout = await getAbout()
  const data = sanityAbout || fallback
  const values = data.values?.length ? data.values : fallback.values
  const milestones = data.milestones?.length ? data.milestones : fallback.milestones

  return (
    <>
      <section className="pt-32 pb-16 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">The story</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About <span className="teal-text">Siadis Media</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            10 years of experience, one obsession: growing brands through smart, full-stack digital marketing.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-72 h-72 rounded-3xl border border-white/10 overflow-hidden relative">
                  <Image src="/daniel-siadis.jpg" alt="Daniel Siadis" fill className="object-cover" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#111] border border-white/10 rounded-2xl px-5 py-3 text-center">
                  <div className="teal-text font-bold text-xl">10+</div>
                  <div className="text-white/40 text-xs">Years XP</div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs tracking-widest uppercase text-white/40 mb-3">The founder</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Hi, I&apos;m Daniel.<br />
                <span className="teal-text">I live for this stuff.</span>
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                {[data.bio1 || fallback.bio1, data.bio2 || fallback.bio2, data.bio3 || fallback.bio3].map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="flex gap-4 mt-8">
                <Link href="/contact" className="px-7 py-3 rounded-full teal-gradient text-[#0a0a0a] font-semibold text-sm hover:opacity-90 transition">Work with me</Link>
                <Link href="/clients" className="px-7 py-3 rounded-full border border-white/20 text-sm hover:border-white/50 transition">See clients</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-3">How we operate</p>
          <h2 className="text-3xl font-bold mb-12">
            Three things we&apos;ll never <span className="teal-text">compromise on</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((v: any, i: number) => (
              <div key={i} className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition">
                <div className="w-10 h-10 rounded-xl teal-gradient flex items-center justify-center text-[#0a0a0a] font-bold text-lg mb-5">{i + 1}</div>
                <h3 className="font-bold text-lg mb-3">{v.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-3">The journey</p>
          <h2 className="text-3xl font-bold mb-12">How we got here</h2>
          <div className="space-y-0">
            {milestones.map((m: any, i: number) => (
              <div key={i} className="flex gap-8 group">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full teal-gradient flex items-center justify-center text-[#0a0a0a] font-bold text-xs flex-shrink-0">{m.year}</div>
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-white/10 my-2" />}
                </div>
                <div className="pb-10">
                  <h3 className="font-bold text-lg mb-1">{m.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to work together?</h2>
          <p className="text-white/50 mb-8">Let&apos;s build something worth talking about.</p>
          <Link href="/contact" className="px-8 py-3.5 rounded-full teal-gradient text-[#0a0a0a] font-semibold hover:opacity-90 transition inline-block">
            Start a conversation
          </Link>
        </div>
      </section>
    </>
  )
}
