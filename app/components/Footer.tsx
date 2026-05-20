import Link from 'next/link'
import Image from 'next/image'

const services = [
  'Campaign Strategy', 'Social Media Advertising', 'Display Advertising',
  'Retargeting', 'Email Marketing', 'Analytics',
  'Content Marketing', 'Video Advertising', 'Web Development', 'Customer Service',
]

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image src="/logo.webp" alt="Siadis Media" width={170} height={52} className="object-contain h-11 w-auto mb-4" />
            <p className="text-white/50 text-sm leading-relaxed">
              Full-stack digital marketing agency. Every touchpoint covered.
            </p>
            <p className="text-white/40 text-sm mt-4">The Hague, Netherlands</p>
            <a href="mailto:siadismedia@gmail.com" className="text-sm mt-1 block" style={{ color: '#00C9B1' }}>
              siadismedia@gmail.com
            </a>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Services</p>
            <div className="grid grid-cols-2 gap-2">
              {services.map(s => (
                <Link key={s} href="/services" className="text-white/60 text-sm hover:text-white transition">
                  {s}
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/30 text-xs uppercase tracking-widest mb-4">Company</p>
            <div className="flex flex-col gap-2">
              {[
                { href: '/about', label: 'About' },
                { href: '/clients', label: 'Clients' },
                { href: '/testimonials', label: 'Testimonials' },
                { href: '/blog', label: 'Blog' },
                { href: '/contact', label: 'Contact' },
              ].map(l => (
                <Link key={l.href} href={l.href} className="text-white/60 text-sm hover:text-white transition">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/30 text-xs">© {new Date().getFullYear()} Siadis Media. KVK: 80147402</p>
          <p className="text-white/20 text-xs">Built with Next.js & Sanity</p>
        </div>
      </div>
    </footer>
  )
}
