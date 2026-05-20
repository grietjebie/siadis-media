import Link from 'next/link'

const posts = [
  {
    slug: 'roas-vs-cpa-which-metric-matters',
    category: 'Paid Advertising',
    title: 'ROAS vs CPA: Which Metric Actually Matters for Your Campaign?',
    excerpt: "Everyone chases ROAS, but for many businesses it's the wrong number to optimize for. Here's how to pick the metric that actually aligns with your bottom line.",
    date: 'May 12, 2026',
    readTime: '5 min read',
  },
  {
    slug: 'tiktok-ads-strategy-2026',
    category: 'Social Media',
    title: 'TikTok Ads in 2026: What Still Works and What to Stop Doing',
    excerpt: "The platform has matured. The spray-and-pray approach is dead. Here's the TikTok ads playbook that's actually moving the needle for e-commerce brands right now.",
    date: 'Apr 28, 2026',
    readTime: '7 min read',
  },
  {
    slug: 'email-list-that-actually-converts',
    category: 'Email Marketing',
    title: 'How to Build an Email List That Actually Converts (Not Just Grows)',
    excerpt: "A list of 10,000 unengaged subscribers is worth less than 1,000 people who actually open your emails. Here's how we build lists built for revenue, not vanity.",
    date: 'Apr 14, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'retargeting-campaigns-that-convert',
    category: 'Retargeting',
    title: 'The Retargeting Playbook: Bring Back Lost Visitors Without Being Creepy',
    excerpt: "Retargeting done wrong feels like being followed around the internet. Done right, it feels like a helpful reminder. We break down the difference — and show you how to execute.",
    date: 'Mar 30, 2026',
    readTime: '8 min read',
  },
  {
    slug: 'landing-page-mistakes-killing-conversions',
    category: 'Web & CRO',
    title: '7 Landing Page Mistakes That Are Quietly Killing Your Conversions',
    excerpt: "You can have the best ad in the world, but if your landing page leaks, you're burning budget. These are the most common culprits we find when auditing client campaigns.",
    date: 'Mar 15, 2026',
    readTime: '6 min read',
  },
  {
    slug: 'first-party-data-cookieless-future',
    category: 'Analytics',
    title: 'First-Party Data Is Your Competitive Moat. Here\'s How to Build It.',
    excerpt: "Third-party cookies are on the way out. The brands that invest in first-party data now will have an enormous advantage in the cookieless future. Here's where to start.",
    date: 'Feb 27, 2026',
    readTime: '9 min read',
  },
]

const categories = ['All', 'Paid Advertising', 'Social Media', 'Email Marketing', 'Retargeting', 'Analytics', 'Web & CRO']

export default function BlogPage() {
  return (
    <>
      {/* Header */}
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

      {/* Categories */}
      <section className="py-6 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((c, i) => (
              <span
                key={c}
                className={`text-xs px-4 py-2 rounded-full border transition cursor-pointer ${
                  i === 0
                    ? 'teal-gradient text-[#0a0a0a] font-semibold border-transparent'
                    : 'border-white/10 text-white/50 hover:border-white/30 hover:text-white'
                }`}
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Posts grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          {/* Featured post */}
          <div className="bg-[#111] border border-white/10 rounded-2xl p-8 md:p-10 hover:border-white/20 transition mb-6 group">
            <div className="grid md:grid-cols-5 gap-8 items-center">
              <div className="md:col-span-3">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xs px-3 py-1 rounded-full teal-gradient text-[#0a0a0a] font-semibold">
                    {posts[0].category}
                  </span>
                  <span className="text-white/30 text-xs">Latest</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-white/90 transition">
                  {posts[0].title}
                </h2>
                <p className="text-white/50 leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full teal-gradient flex items-center justify-center text-[#0a0a0a] font-bold text-xs">DS</div>
                    <div>
                      <p className="text-sm font-medium">Daniel Siadis</p>
                      <p className="text-white/30 text-xs">{posts[0].date} · {posts[0].readTime}</p>
                    </div>
                  </div>
                  <span className="teal-text text-sm font-semibold ml-auto">Read →</span>
                </div>
              </div>
              <div className="md:col-span-2 hidden md:flex items-center justify-center">
                <div className="w-full h-48 rounded-2xl bg-[#0a0a0a] border border-white/5 flex items-center justify-center">
                  <span className="text-6xl opacity-20">📊</span>
                </div>
              </div>
            </div>
          </div>

          {/* Rest of posts */}
          <div className="grid md:grid-cols-2 gap-6">
            {posts.slice(1).map((post, i) => (
              <div key={i} className="bg-[#111] border border-white/10 rounded-2xl p-7 hover:border-white/20 transition group flex flex-col">
                <span className="text-xs px-3 py-1 rounded-full border border-white/10 text-white/40 self-start mb-4">
                  {post.category}
                </span>
                <h3 className="text-lg font-bold mb-3 group-hover:text-white/90 transition leading-snug">
                  {post.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6 flex-1">{post.excerpt}</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full teal-gradient flex items-center justify-center text-[#0a0a0a] font-bold text-xs">DS</div>
                    <p className="text-white/30 text-xs">{post.date} · {post.readTime}</p>
                  </div>
                  <span className="teal-text text-xs font-semibold">Read →</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-[#111]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get insights in your inbox
          </h2>
          <p className="text-white/50 mb-8">No spam. Just actionable digital marketing takes — straight from the trenches.</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 bg-[#0a0a0a] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-white/30 transition"
            />
            <button className="px-6 py-3 rounded-xl teal-gradient text-[#0a0a0a] font-semibold text-sm hover:opacity-90 transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
