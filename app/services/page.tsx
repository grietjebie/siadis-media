import Link from 'next/link'
import Image from 'next/image'
import { getServices, urlFor } from '@/lib/sanity'

export const revalidate = 60

const fallbackServices = [
  { _id: '1', icon: '/services-icons/campaign-strategy.webp', title: 'Campaign Strategy', tagline: "Let's build your game plan.", description: "No cookie-cutter campaigns here. We dig into your goals — whether that's driving traffic, boosting conversions, or owning your niche — and map out a strategy with the KPIs that actually matter to your business." },
  { _id: '2', icon: '/services-icons/social-media-advertising.webp', title: 'Social Media Advertising', tagline: 'Meet your audience where they scroll.', description: "Facebook, Instagram, Snapchat, Pinterest, TikTok — we run paid social that actually converts. We'll sync your product feed with your campaigns so your ads are always fresh, relevant, and ready to sell." },
  { _id: '3', icon: '/services-icons/display-advertising.webp', title: 'Display Advertising', tagline: 'Go beyond the feed.', description: "Social media is just one piece of the puzzle. With display advertising, we put your brand in front of the right eyeballs across the web — reaching audiences you'd never catch with social alone." },
  { _id: '4', icon: '/services-icons/retargeting.webp', title: 'Retargeting', tagline: 'Bring back the ones that got away.', description: "Someone visited your site but didn't pull the trigger? We re-engage them with smart, targeted ads that remind them why they came in the first place — and nudge them toward converting." },
  { _id: '5', icon: '/services-icons/email-marketing.webp', title: 'Email Marketing', tagline: 'Slide into inboxes that want to hear from you.', description: 'Email still delivers the highest ROI in digital marketing — but only when done right. We help you grow a list of subscribers who actually care, and craft newsletters that people open, read, and click.' },
  { _id: '6', icon: '/services-icons/analytics.webp', title: 'Analytics', tagline: 'Data that actually tells you something.', description: "No more flying blind. We set up tracking and dashboards tailored to your goals, run A/B tests that move the needle, and turn raw numbers into clear decisions you can act on." },
  { _id: '7', icon: '/services-icons/content-marketing.webp', title: 'Content Marketing', tagline: 'Content that earns attention.', description: "Great content doesn't just fill a page — it builds trust, drives organic traffic, and turns curious visitors into loyal customers. We create and publish content that speaks to your audience and keeps them coming back." },
  { _id: '8', icon: '/services-icons/video-advertising.webp', title: 'Video Advertising', tagline: 'Stop the scroll with video that sticks.', description: "From YouTube pre-rolls to Instagram Stories, we craft video ad campaigns that build brand awareness and drive action. Because in 2026, if you're not on video — you're invisible." },
  { _id: '9', icon: '/services-icons/web-development.webp', title: 'Web Development', tagline: 'Your digital storefront, built to perform.', description: "A great campaign deserves a great landing page. We build fast, clean, conversion-optimized websites that look sharp on every device — so when traffic lands, it actually sticks." },
  { _id: '10', icon: '/services-icons/customer-service.webp', title: 'Customer Service', tagline: 'Real replies, real fast.', description: "Inbox piling up? We handle your customer messages across email and social media — professionally, on-brand, and without the wait. Happy customers stick around, and we help you keep them that way." },
]

export default async function ServicesPage() {
  const sanityServices = await getServices()
  const services = sanityServices.length > 0 ? sanityServices : fallbackServices

  return (
    <>
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

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {services.map((s: any) => {
              const iconSrc = s.icon?.asset ? urlFor(s.icon).width(56).height(56).url() : s.icon
              return (
                <div key={s._id} className="bg-[#111] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition group relative">
                  <div className="flex items-start gap-5">
                    <div className="w-16 h-16 rounded-2xl teal-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition overflow-hidden">
                      {iconSrc && <Image src={iconSrc} alt={s.title} width={56} height={56} className="object-contain" />}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1">{s.title}</h3>
                      <p className="text-white/40 text-sm italic mb-3">{s.tagline}</p>
                      <p className="text-white/60 text-sm leading-relaxed">{s.description || s.desc}</p>
                    </div>
                  </div>
                  <div className="mt-6 flex justify-end">
                    <Link href="/contact" className="text-xs font-semibold teal-text border border-white/10 hover:border-white/30 px-4 py-2 rounded-full transition">
                      Connect →
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Not sure where to start?</h2>
          <p className="text-white/50 mb-8">Drop a message and we&apos;ll figure it out together.</p>
          <Link href="/contact" className="px-8 py-3.5 rounded-full teal-gradient text-[#0a0a0a] font-semibold hover:opacity-90 transition inline-block">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  )
}
