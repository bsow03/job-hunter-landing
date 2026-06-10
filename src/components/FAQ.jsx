import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RevealOnScroll from './ui/RevealOnScroll'
import GradientText from './ui/GradientText'

const faqs = [
  {
    q: 'Is it really free?',
    a: 'Yes. The Chrome extension is free forever. The optional Pro tier (cloud sync, integrations, AI included) will be paid when it launches — but the free tier stays free.',
  },
  {
    q: 'What\'s a Groq API key and why do I need one?',
    a: 'Groq powers the free AI interview prep. Grab a key at console.groq.com — it\'s free and takes 30 seconds. We use Groq because it\'s fast and generous on the free tier. When Pro launches, AI will be included without needing your own key.',
  },
  {
    q: 'Where\'s my data stored?',
    a: 'Locally on your device, via Chrome\'s built-in storage. Nothing leaves your computer unless you use the AI prep feature, which goes directly from your browser to Groq — never through any server we control.',
  },
  {
    q: 'Does it work on LinkedIn, Indeed, or Glassdoor?',
    a: 'Job Hunter has dedicated scrapers for Greenhouse, Lever, Workday, and Ashby — covering 90%+ of company career pages. For other sites, it falls back to a generic scraper. If something doesn\'t auto-populate, you can manually add it.',
  },
  {
    q: 'What about my privacy?',
    a: 'No accounts. No tracking. No analytics. Read the full privacy policy linked in the footer. Job Hunter is built by one person who hates data harvesting as much as you do.',
  },
  {
    q: 'What if I get hired and don\'t need it anymore?',
    a: 'Export your data anytime and uninstall. We\'ll be here if you ever start searching again — which, statistically, you probably will. Welcome back in advance.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  function toggleItem(i) {
    setOpenIndex(openIndex === i ? null : i)
  }

  return (
    <section id="faq" className="py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-300 mx-auto px-6">
        <RevealOnScroll>
          <div className="grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
            <div>
              <div className="font-mono text-xs text-yume-pink uppercase tracking-[0.15em] mb-4 font-medium">
                FAQ
              </div>
              <h2 className="text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] tracking-tight mb-3">
                Questions, <GradientText>answered.</GradientText>
              </h2>
              <p className="text-text-secondary text-[15px] mt-3">
                Can't find what you're looking for?{' '}
                <a href="mailto:yumewrks@gmail.com" className="text-yume-pink underline">
                  Reach out
                </a>
                .
              </p>
            </div>

            <div className="flex flex-col">
              {faqs.map((item, i) => (
                <FAQItem
                  key={item.q}
                  question={item.q}
                  answer={item.a}
                  isOpen={openIndex === i}
                  onToggle={() => toggleItem(i)}
                />
              ))}
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}

function FAQItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/5 py-5">
      <button
        onClick={onToggle}
        className="w-full text-left flex justify-between items-center gap-6 text-base font-medium text-text-primary"
      >
        {question}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className={`text-xl flex-shrink-0 font-light ${
            isOpen ? 'text-yume-pink' : 'text-text-tertiary'
          }`}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="pt-4 text-text-secondary text-[15px] leading-relaxed">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
