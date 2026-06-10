import { useState } from 'react'
import { motion } from 'framer-motion'
import PopupMockup from './PopupMockup'
import GradientText from './ui/GradientText'
import DemoModal from './DemoModal'

// Stagger config for the hero's child elements
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  const [isDemoOpen, setIsDemoOpen] = useState(false)

  return (
    <section className="relative overflow-hidden pt-40 pb-32 sm:pb-40">
      {/* Radial glow at top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-150 opacity-50 blur-3xl pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(203, 108, 230, 0.4), transparent 60%)',
        }}
      />

      <div className="relative max-w-300 mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-center"
        >
          <div>
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 border border-white/10 rounded-full text-[12px] font-medium uppercase tracking-wider text-text-secondary mb-8 backdrop-blur"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-linear-to-br from-yume-pink to-yume-magenta"
                style={{ boxShadow: '0 0 10px var(--color-yume-pink)' }}
              />
              Now in beta · A Yume product
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-[clamp(40px,5.5vw,64px)] font-semibold leading-[1.05] tracking-tighter mb-5"
            >
              Your job search,<br />
              <GradientText>finally organized.</GradientText>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-[17px] text-text-secondary leading-relaxed max-w-120 mb-8"
            >
              Save jobs in one click. Track every application's status. Get AI-powered interview prep tailored to each role — all from your browser.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex gap-3 items-center flex-wrap"
            >
              <motion.a
                href="https://chromewebstore.google.com/detail/job-hunter/jlnhedkbdmnnglfjihhhbahceodgnflp?authuser=0&hl=en"
                target='_blank'
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="bg-linear-to-br from-yume-pink to-yume-magenta text-white px-6 py-3.5 rounded-xl text-sm font-semibold inline-flex items-center gap-2 transition-shadow"
                style={{ boxShadow: '0 8px 30px rgba(203,108,230,0.3)' }}
              >
                Install for Chrome — Beta
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path
                    d="M3.5 7h7M7 3.5L10.5 7 7 10.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.a>
              <button
                type="button"
                onClick={() => setIsDemoOpen(true)}
                className="text-text-secondary text-sm font-medium inline-flex items-center gap-1.5 px-4 py-3.5 hover:text-text-primary transition-colors cursor-pointer"
              >
                Watch demo
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M4 3l5 3-5 3V3z" fill="currentColor" />
                </svg>
              </button>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mt-7 flex gap-5 text-[13px] text-text-tertiary font-medium"
            >
              <CheckItem>Local-first</CheckItem>
              <CheckItem>No tracking</CheckItem>
              <CheckItem>Free forever</CheckItem>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <PopupMockup />
          </motion.div>
        </motion.div>
      </div>

      <DemoModal isOpen={isDemoOpen} onClose={() => setIsDemoOpen(false)} />
    </section>
  )
}

function CheckItem({ children }) {
  return (
    <div className="flex items-center gap-1.5">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path
          d="M3 7l3 3 5-6"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </div>
  )
}
