import { motion } from 'framer-motion'
import RevealOnScroll from './ui/RevealOnScroll'
import GradientText from './ui/GradientText'

const steps = [
  {
    label: 'STEP 01',
    title: 'Save with one click',
    desc:
      'Open any job posting. Hit save. Job details auto-populate — and if the scraper misses anything, edit it inline before saving.',
  },
  {
    label: 'STEP 02',
    title: 'Track your pipeline',
    desc:
      'Update each application\'s status: Applied → Interview → Offered. Color-coded badges. Filter and search instantly.',
  },
  {
    label: 'STEP 03',
    title: 'Prep with AI',
    desc:
      'Generate tailored interview prep — likely questions, behavioral prompts, smart questions to ask back. Built from the actual job description.',
  },
]

export default function HowItWorks() {
  return (
    <section
      id="how"
      className="py-24 sm:py-32"
      style={{
        background: 'linear-gradient(180deg, transparent, rgba(203,108,230,0.03))',
      }}
    >
      <div className="max-w-300 mx-auto px-6">
        <RevealOnScroll>
          <div className="font-mono text-xs text-yume-pink uppercase tracking-[0.15em] mb-4 font-medium">
            How it works
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] tracking-tight mb-4 max-w-175">
            From job posting to interview prep, in <GradientText>under a minute.</GradientText>
          </h2>
          <p className="text-[17px] text-text-secondary max-w-140 mb-16 leading-relaxed">
            No copy-pasting. No spreadsheets. No friction. Job Hunter lives in your browser and saves jobs as you find them.
          </p>
        </RevealOnScroll>

        {/* Video demo — styled like the popup mockup in the hero */}
        <RevealOnScroll>
          <div className="relative mb-16 sm:mb-20">
            {/* Ambient glow behind the video */}
            <div
              className="absolute -inset-10 blur-3xl opacity-60 -z-10 pointer-events-none"
              style={{
                background:
                  'radial-gradient(ellipse at center, rgba(203, 108, 230, 0.4), transparent 70%)',
              }}
            />

            <div
              className="relative rounded-2xl overflow-hidden border border-white/10 max-w-215 mx-auto"
              style={{
                boxShadow:
                  '0 50px 100px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.05)',
              }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                poster="/video/how-it-works-poster.jpg"
                className="w-full block"
              >
                <source src="/video/how-it-works.mp4" type="video/mp4" />
                <source src="/video/how-it-works.webm" type="video/webm" />
                Your browser doesn't support video playback.
              </video>
            </div>
          </div>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((s, i) => (
            <RevealOnScroll key={s.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="p-8 border border-white/5 hover:border-white/10 rounded-2xl bg-white/2 h-full transition-colors"
              >
                <div className="font-mono text-xs text-yume-pink tracking-wider mb-8 font-medium">
                  {s.label}
                </div>
                <div className="text-xl font-semibold tracking-tight mb-2.5">
                  {s.title}
                </div>
                <div className="text-text-secondary text-[15px] leading-relaxed">
                  {s.desc}
                </div>
              </motion.div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}