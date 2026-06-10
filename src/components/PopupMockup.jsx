import { motion } from 'framer-motion'
import { BsIncognito } from "react-icons/bs"

const popupCards = [
  {
    title: 'Senior Frontend Engineer',
    company: 'Stripe',
    location: 'San Francisco, CA',
    status: 'interview',
    statusLabel: 'Interview',
    date: '5/28/2026',
    showPrep: true,
  },
  {
    title: 'Product Engineer',
    company: 'Linear',
    location: 'Remote',
    status: 'applied',
    statusLabel: 'Applied',
    date: '5/26/2026',
    showPrep: true,
  },
  {
    title: 'Software Engineer',
    company: 'Vercel',
    location: 'New York, NY',
    status: 'rejected',
    statusLabel: 'Rejected',
    date: '5/22/2026',
    showPrep: false,
  },
]

const statusStyles = {
  applied: 'text-success bg-success/10 border-success/20',
  interview: 'text-warning bg-warning/10 border-warning/20',
  rejected: 'text-fail bg-fail/10 border-fail/20',
}

export default function PopupMockup() {
  return (
    <div className="relative">
      {/* Ambient glow behind the popup */}
      <div
        className="absolute -inset-10 blur-3xl opacity-60 -z-10"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(203, 108, 230, 0.4), transparent 70%)',
        }}
      />

      <div
        className="bg-bg-elevated border border-white/10 rounded-2xl overflow-hidden max-w-[380px] mx-auto text-[13px]"
        style={{
          boxShadow:
            '0 50px 100px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06), inset 0 1px 0 rgba(255,255,255,0.05)',
        }}
      >
        {/* Header */}
        <div className="flex justify-between items-center px-4 py-3.5 border-b border-white/5">
          <div className="flex items-center gap-1.5 font-semibold text-[13px]">
            Job Hunter <span className="text-text-tertiary font-light">v1</span> <BsIncognito />
          </div>
          <div className="flex gap-1.5 text-text-secondary text-sm">? ⚙</div>
        </div>

        {/* Body */}
        <div className="p-3">
          <div className="w-full p-3 bg-bg-card rounded-xl text-[13px] font-medium text-text-primary text-center border border-white/5 mb-3">
            ✦ Save current application ✦
          </div>

          {popupCards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
              className="bg-bg-card border border-white/5 rounded-xl p-3 mb-2 last:mb-0"
            >
              <div className="font-semibold text-[13px] mb-0.5">{card.title}</div>
              <div className="text-text-secondary text-[12px] mb-1.5">{card.company}</div>
              <div className="text-text-tertiary text-[11px] mb-2">📍 {card.location}</div>
              <div className="flex items-center gap-2 mb-2">
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-md border font-medium ${statusStyles[card.status]}`}
                >
                  {card.statusLabel}
                </span>
                <span className="text-text-tertiary text-[11px]">{card.date}</span>
              </div>
              {card.showPrep && (
                <span className="inline-block text-success bg-success/10 border border-success/20 px-2.5 py-1 rounded-md text-[11px] font-medium">
                  ✨ Get interview prep
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
