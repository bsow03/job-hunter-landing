import { useState } from 'react'
import { motion } from 'framer-motion'
import RevealOnScroll from './ui/RevealOnScroll'
import GradientText from './ui/GradientText'
import { supabase } from '../lib/supabase'

const proFeatures = [
  '☁️ Cloud sync',
  '📧 Gmail integration',
  '📅 Calendar sync',
  '⏰ Smart reminders',
  '📝 Resume tailoring',
  '✉️ Cover letter drafts',
  '📊 Analytics',
  '✨ AI included',
]

export default function ProTier() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // 'idle' | 'loading' | 'joined' | 'duplicate' | 'error'

  async function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return

    setStatus('loading')

    const { error } = await supabase
      .from('waitlist')
      .insert({ email: email.trim().toLowerCase(), source: 'landing' })

    if (error) {
      if (error.code === '23505') {
        setStatus('duplicate')
      } else {
        console.error('Waitlist signup error:', error)
        setStatus('error')
      }
      return
    }

    setStatus('joined')
  }

  const isDone = status === 'joined' || status === 'duplicate'
  const isWorking = status === 'loading'
  const buttonText = {
    idle: 'Join waitlist',
    loading: 'Joining...',
    joined: 'Joined ✓',
    duplicate: 'Already in ✓',
    error: 'Try again',
  }[status]

  return (
    <section id="pro" className="py-24 sm:py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(circle at 20% 50%, rgba(203,108,230,0.15), transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,102,196,0.1), transparent 50%)',
        }}
      />

      <div className="relative max-w-300 mx-auto px-6">
        <RevealOnScroll>
          <div
            className="border border-white/10 rounded-3xl px-6 sm:px-12 py-12 sm:py-16 text-center"
            style={{
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.02), transparent)',
            }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-linear-to-br from-yume-pink to-yume-magenta text-white text-[11px] font-semibold uppercase tracking-[0.1em] mb-7">
              Coming soon · Job Hunter Pro
            </div>

            <h2 className="text-[clamp(36px,4.5vw,52px)] font-semibold leading-[1.05] tracking-tighter mb-5 max-w-175 mx-auto">
              Automate your <GradientText>job hunt.</GradientText>
            </h2>

            <p className="text-text-secondary text-[17px] max-w-135 mx-auto mb-9 leading-relaxed">
              Cloud sync, calendar integrations, smart reminders, AI interview prep, and more. The whole job hunt, on autopilot.
            </p>

            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 max-w-175 mx-auto">
              {proFeatures.map((f) => (
                <div
                  key={f}
                  className="text-text-secondary text-[13px] font-medium px-3.5 py-1.5 border border-white/5 rounded-full bg-bg-elevated"
                >
                  {f}
                </div>
              ))}
            </div>

            <form
              onSubmit={handleSubmit}
              className="flex gap-2 max-w-115 mx-auto p-1.5 bg-bg-elevated border border-white/10 rounded-xl"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={isDone || isWorking}
                className="flex-1 bg-transparent border-none outline-none px-3.5 py-2.5 text-sm text-text-primary placeholder:text-text-tertiary disabled:opacity-60"
              />
              <motion.button
                type="submit"
                whileHover={!isDone && !isWorking ? { y: -1 } : {}}
                whileTap={!isDone && !isWorking ? { scale: 0.98 } : {}}
                disabled={isDone || isWorking}
                className={`px-4 sm:px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                  isDone
                    ? 'bg-success text-white'
                    : status === 'error'
                      ? 'bg-fail text-white'
                      : 'bg-linear-to-br from-yume-pink to-yume-magenta text-white hover:shadow-lg hover:shadow-yume-pink/30'
                }`}
              >
                {buttonText}
              </motion.button>
            </form>

            <div className="mt-3.5 text-xs text-text-tertiary">
              No spam. One email when Pro is ready. That's it.
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  )
}