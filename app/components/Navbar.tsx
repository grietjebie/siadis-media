'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

const links = [
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/clients', label: 'Clients' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-white rounded-xl px-3 py-1.5">
            <Image src="/logo.png" alt="Siadis Media" width={120} height={34} className="object-contain h-6 w-auto" />
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-sm text-white/70 hover:text-white transition">
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="text-sm font-semibold px-5 py-2 rounded-full teal-gradient text-[#0a0a0a] hover:opacity-90 transition">
            Let&apos;s Talk
          </Link>
        </div>

        {/* Hamburger */}
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setOpen(!open)} aria-label="Menu">
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#111] border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-white/80 hover:text-white text-base transition" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/contact" className="text-sm font-semibold px-5 py-2.5 rounded-full teal-gradient text-[#0a0a0a] text-center" onClick={() => setOpen(false)}>
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </nav>
  )
}
