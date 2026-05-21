import Link from 'next/link'
import Image from 'next/image'

const services = [
  {
    icon: '/services-icons/campaign-strategy.webp',
    title: 'Campaign Strategy',
    tagline: "Let's build your game plan.",
    desc: "No cookie-cutter campaigns here. We dig into your goals — whether that's driving traffic, boosting conversions, or owning your niche — and map out a strategy with the KPIs that actually matter to your business.",
  },
  {
    icon: '/services-icons/social-media-advertising.webp',
    title: 'Social Media Advertising',
    tagline: 'Meet your audience where they scroll.',
    desc: "Facebook, Instagram, Snapchat, Pinterest, TikTok — we run paid social that actually converts. We'll sync your product feed with your campaigns so your ads are always fresh, relevant, and ready to sell.",
  },
  {
    icon: '/services-icons/display-advertising.webp',
    title: 'Display Advertising',
    tagline: 'Go beyond the feed.',
    desc: "Social media is just one piece of the puzzle. With display advertising, we put your brand in front of the right eyeballs across the web — reaching audiences you'd never catch with social alone.",
  },
  {
    icon: '/services-icons/retargeting.webp',
    title: 'Retargeting',
    tagline: 'Bring back the ones that got away.',
    desc: "Someone visited your site but didn't pull the trigger? We re-engage them with smart, targeted ads that remind them why they came in the first place — and nudge them toward converting.",
  },
  {
    icon: '/services-icons/email-marketing.webp',
    title: 'Email Marketing',
    tagline: 'Slide into inboxes that want to hear from you.',
    desc: 'Email still delivers the highest ROI in digital marketing — but only when done right. We help you grow a list of subscribers who actually care, and craft newsletters that people open, read, and click.',
  },
  {
    icon: '/services-icons/analytics.webp',
    title: 'Analytics',
    tagline: 'Data that actually tells you something.',
    desc: "No more flying blind. We set up tracking and dashboards tailored to your goals, run A/B tests that move the needle, and turn raw numbers into clear decisions you can act on.",
  },
  {
    icon: '/services-icons/content-marketing.webp',
    title: 'Content Marketing',
    tagline: 'Content that earns attention.',
    desc: "Great content doesn't just fill a page — it builds trust, drives organic traffic, and turns curious visitors into loyal customers. We create and publish content that speaks to your audience and keeps them coming back.",
  },
  {
    icon: '/services-icons/video-advertising.webp',
    title: 'Video Advertising',
    tagline: 'Stop the scroll with video that sticks.',
    desc: "From YouTube pre-rolls to Instagram Stories, we craft video ad campaigns that build brand awareness and drive action. Because in 2026, if you're not on video — you're invisible.",
  },
  {
    icon: '/services-icons/web-development.webp',
    title: 'Web Development',
    tagline: 'Your digital storefront, built to perform.',
    desc: "A great campaign deserves a great landing page. We build fast, clean, conversion-optimized websites that look sharp on every device — so when traffic lands, it actually sticks.",
  },
  {
    icon: '/services-icons/customer-service.webp',
    title: 'Customer Service',
    tagline: 'Real replies, real fast.',
    desc: "Inbox piling up? We handle your customer messages across email and social media — professionally, on-brand, and without the wait. Happy customers stick around, and we help you keep them that way.",
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">What we offer</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our <span className="teal-text">Services</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            Every digital touchpoint covered. From strategy to execution — we do it all.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <div key={i} className="bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition group relative">
                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl teal-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition overflow-hidden">
                    <Image src={s.icon} alt={s.title} width={56} height={56} className="object-contain" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                    <p className="text-white/40 text-sm italic mb-3">{s.tagline}</p>
                    <p className="text-white/60 text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
                <div className="mt-6 flex justify-end">
                  <Link href="/contact" className="text-xs font-semibold teal-text border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition">
                    Connect →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Not sure where to start?
          </h2>
          <p className="text-white/50 mb-8">Drop a message and we&apos;ll figure it out together.</p>
          <Link href="/contact" className="px-8 py-3.5 rounded-full teal-gradient text-[#0a0a0a] font-semibold hover:opacity-90 transition inline-block">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
