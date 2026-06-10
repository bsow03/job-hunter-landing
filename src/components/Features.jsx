import { motion } from 'framer-motion'
import RevealOnScroll from './ui/RevealOnScroll'
import GradientText from './ui/GradientText'

const features = [
  {
    title: 'Auto-extract job details',
    desc: 'Works on Greenhouse, Lever, Workday, Ashby, and most other career sites.',
    icon: (
      <path
        d="M12 2l2.4 7.4H22l-6.2 4.5L18.2 22 12 17.5 5.8 22l2.4-8.1L2 9.4h7.6L12 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    title: 'Status tracking',
    desc: 'Move applications through Applied → Interview → Offered → Ghosted → Rejected.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path
          d="M12 7v5l3 3"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </>
    ),
  },
  {
    title: 'AI interview prep',
    desc: 'Tailored questions, prompts, and talking points for every saved job.',
    icon: (
      <path
        d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
    ),
  },
  {
    title: 'Local-first',
    desc: 'Your data stays on your device. No accounts, no tracking, no servers.',
    icon: (
      <>
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M8 12l3 3 5-7"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </>
    ),
  },
  {
    title: 'Search & filter',
    desc: 'Find any application by title, company, location, or status.',
    icon: (
      <>
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path
          d="M21 21l-4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
      </>
    ),
  },
  {
    title: 'Backup & export',
    desc: 'CSV or JSON anytime. Your data, your terms.',
    icon: (
      <>
        <path
          d="M12 15l4-4-4-4M8 11h8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          fill="none"
        />
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.5"
          fill="none"
        />
      </>
    ),
  },
]

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6">
        <RevealOnScroll>
          <div className="font-mono text-xs text-yume-pink uppercase tracking-[0.15em] mb-4 font-medium">
            Features
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] tracking-tight mb-4 max-w-[700px]">
            Everything you need, <GradientText>nothing you don't.</GradientText>
          </h2>
          <p className="text-[17px] text-text-secondary max-w-[560px] mb-16 leading-relaxed">
            Built for the messy, fast-moving reality of an active job search. No accounts, no servers, no upsells in the free tier.
          </p>
        </RevealOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/5 border border-white/5 rounded-2xl overflow-hidden">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="bg-bg-base p-9 hover:bg-bg-elevated transition-colors"
            >
              <svg className="w-8 h-8 mb-5 text-yume-pink" viewBox="0 0 24 24">
                {f.icon}
              </svg>
              <div className="text-base font-semibold tracking-tight mb-2">
                {f.title}
              </div>
              <div className="text-text-secondary text-sm leading-relaxed">
                {f.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
