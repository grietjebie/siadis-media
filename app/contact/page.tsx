'use client'

import { useState } from 'react'

const services = [
  'Campaign Strategy',
  'Social Media Advertising',
  'Display Advertising',
  'Retargeting',
  'Email Marketing',
  'Analytics',
  'Content Marketing',
  'Video Advertising',
  'Web Development',
  'Customer Service',
  'Not sure yet',
]

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [form, setForm] = useState({ name: '', email: '', company: '', service: '', message: '' })

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('success')
      setForm({ name: '', email: '', company: '', service: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">Get in touch</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Let&apos;s <span className="teal-text">talk.</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            Tell us what you&apos;re working on. We&apos;ll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-5 gap-16">
            {/* Info */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <p className="text-xs tracking-widest uppercase text-white/40 mb-4">Contact details</p>
                <div className="space-y-4">
                  <div>
                    <p className="text-white/30 text-xs mb-1">Email</p>
                    <a href="mailto:siadismedia@gmail.com" className="teal-text text-sm font-medium hover:opacity-80 transition">
                      siadismedia@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="text-white/30 text-xs mb-1">Location</p>
                    <p className="text-white/60 text-sm">The Hague, Netherlands</p>
                  </div>
                  <div>
                    <p className="text-white/30 text-xs mb-1">Response time</p>
                    <p className="text-white/60 text-sm">Within 24 hours</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-white/10 pt-8">
                <p className="text-xs tracking-widest uppercase text-white/40 mb-4">What happens next</p>
                <div className="space-y-4">
                  {[
                    { step: '01', text: 'We review your message and your goals' },
                    { step: '02', text: 'We schedule a 30-min intro call' },
                    { step: '03', text: 'We send a tailored proposal' },
                  ].map(s => (
                    <div key={s.step} className="flex gap-4 items-start">
                      <span className="teal-text font-bold text-sm w-6 flex-shrink-0">{s.step}</span>
                      <p className="text-white/50 text-sm leading-relaxed">{s.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="md:col-span-3">
              {status === 'success' ? (
                <div className="bg-[#111] border border-white/10 rounded-2xl p-10 text-center">
                  <div className="w-16 h-16 rounded-full teal-gradient flex items-center justify-center text-2xl mx-auto mb-4">✓</div>
                  <h3 className="text-xl font-bold mb-2">Thank you for getting in touch.</h3>
                  <p className="text-white/50 text-sm">We&apos;ve received your message and will be in touch within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Name *</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Email *</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Company</label>
                    <input
                      type="text"
                      value={form.company}
                      onChange={e => setForm(f => ({ ...f, company: e.target.value }))}
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition"
                      placeholder="Your company (optional)"
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Service you&apos;re interested in</label>
                    <select
                      value={form.service}
                      onChange={e => setForm(f => ({ ...f, service: e.target.value }))}
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-white/30 transition appearance-none"
                    >
                      <option value="" className="bg-[#111]">Select a service</option>
                      {services.map(s => (
                        <option key={s} value={s} className="bg-[#111]">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs text-white/40 uppercase tracking-widest mb-2">Message *</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      className="w-full bg-[#111] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition resize-none"
                      placeholder="Tell us about your project, goals, and budget..."
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm">Something went wrong. Please try again or email us directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="w-full py-4 rounded-xl teal-gradient text-[#0a0a0a] font-semibold hover:opacity-90 transition disabled:opacity-50"
                  >
                    {status === 'loading' ? 'Sending...' : 'Send message →'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
