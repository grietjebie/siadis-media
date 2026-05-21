import Link from 'next/link'
import { getPosts, urlFor } from '@/lib/sanity'

const fallbackPosts = [
  { _id: '1', slug: { current: '#' }, category: 'Paid Advertising', title: 'ROAS vs CPA: Which Metric Actually Matters for Your Campaign?', excerpt: "Everyone chases ROAS, but for many businesses it's the wrong number to optimize for. Here's how to pick the metric that actually aligns with your bottom line.", publishedAt: '2026-05-12', readTime: '5 min read' },
  { _id: '2', slug: { current: '#' }, category: 'Social Media', title: 'TikTok Ads in 2026: What Still Works and What to Stop Doing', excerpt: "The platform has matured. The spray-and-pray approach is dead. Here's the TikTok ads playbook that's actually moving the needle for e-commerce brands right now.", publishedAt: '2026-04-28', readTime: '7 min read' },
  { _id: '3', slug: { current: '#' }, category: 'Email Marketing', title: 'How to Build an Email List That Actually Converts (Not Just Grows)', excerpt: "A list of 10,000 unengaged subscribers is worth less than 1,000 people who actually open your emails. Here's how we build lists built for revenue, not vanity.", publishedAt: '2026-04-14', readTime: '6 min read' },
  { _id: '4', slug: { current: '#' }, category: 'Retargeting', title: 'The Retargeting Playbook: Bring Back Lost Visitors Without Being Creepy', excerpt: "Retargeting done wrong feels like being followed around the internet. Done right, it feels like a helpful reminder. We break down the difference.", publishedAt: '2026-03-30', readTime: '8 min read' },
  { _id: '5', slug: { current: '#' }, category: 'Web & CRO', title: '7 Landing Page Mistakes That Are Quietly Killing Your Conversions', excerpt: "You can have the best ad in the world, but if your landing page leaks, you're burning budget. These are the most common culprits we find when auditing client campaigns.", publishedAt: '2026-03-15', readTime: '6 min read' },
  { _id: '6', slug: { current: '#' }, category: 'Analytics', title: "First-Party Data Is Your Competitive Moat. Here's How to Build It.", excerpt: "Third-party cookies are on the way out. The brands that invest in first-party data now will have an enormous advantage in the cookieless future.", publishedAt: '2026-02-27', readTime: '9 min read' },
]

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default async function BlogPage() {
  const sanityPosts = await getPosts()
  const posts = sanityPosts.length > 0 ? sanityPosts : fallbackPosts

  const featured = posts[0]
  const rest = posts.slice(1)

  return (
    <>
      <section className="pt-32 pb-16 bg-[#111]">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-white/40 mb-4">Insights</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The <span className="teal-text">Blog</span>
          </h1>
          <p className="text-white/50 text-lg max-w-xl">
            No fluff. Just honest takes on digital marketing, paid advertising, and growing brands online.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured post */}
          <Link href={featured.slug?.current !== '#' ? `/blog/${featured.slug.current}` : '#'}>
            <div className="bg-[#111] border border-white/10 rounded-2xl p-8 md:p-10 hover:border-white/20 transition mb-6 group">
              <div className="grid md:grid-cols-5 gap-8 items-center">
                <div className="md:col-span-3">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs px-3 py-1 rounded-full teal-gradient text-[#0a0a0a] font-semibold">{featured.category}</span>
                    <span className="text-white/30 text-xs">Latest</span>
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-white/90 transition">{featured.title}</h2>
                  <p className="text-white/50 leading-relaxed mb-6">{featured.excerpt}</p>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full teal-gradient flex items-center justify-center text-[#0a0a0a] font-bold text-xs">DS</div>
                      <p className="text-white/30 text-xs">{featured.publishedAt ? formatDate(featured.publishedAt) : ''} · {featured.readTime}</p>
                    </div>
                    <span className="teal-text text-sm font-semibold ml-auto">Read →</span>
                  </div>
                </div>
                <div className="md:col-span-2 hidden md:flex items-center justify-center">
                  {featured.coverImage?.asset ? (
                    <div className="w-full h-48 rounded-2xl overflow-hidden relative">
                      <img src={urlFor(featured.coverImage).width(400).height(192).url()} alt={featured.title} className="w-full h-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-full h-48 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center">
                      <span className="text-6xl opacity-20">📊</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Link>

          {/* Rest of posts */}
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((post: any) => (
              <Link key={post._id} href={post.slug?.current !== '#' ? `/blog/${post.slug.current}` : '#'}>
                <div className="bg-[#111] border border-white/10 rounded-2xl p-7 hover:border-white/20 transition group flex flex-col h-full">
                  <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/40 self-start mb-4">{post.category}</span>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-white/90 transition leading-snug">{post.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <p className="text-white/30 text-xs">{post.publishedAt ? formatDate(post.publishedAt) : ''} · {post.readTime}</p>
                    <span className="teal-text text-xs font-semibold">Read →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Get insights in your inbox</h2>
          <p className="text-white/50 mb-8">No spam. Just actionable digital marketing takes — straight from the trenches.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input type="email" placeholder="your@email.com" className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition" />
            <button className="px-6 py-3 rounded-xl teal-gradient text-[#0a0a0a] font-semibold text-sm hover:opacity-90 transition whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  )
}
