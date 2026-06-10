import RevealOnScroll from './ui/RevealOnScroll'

const problems = [
  {
    label: '01 / SCATTERED',
    title: 'Tabs everywhere',
    desc:
      'Greenhouse, Notion docs, that one Google sheet from February. None of them talk to each other.',
  },
  {
    label: '02 / FORGOTTEN',
    title: 'Mid-search amnesia',
    desc:
      'Did you hear back from Stripe? Was that the Senior or Staff role? Which interview is tomorrow?',
  },
  {
    label: '03 / SCRAMBLING',
    title: 'Hard to prep, harder to win',
    desc:
      "Preparing with generic interview questions can prove to be inefficient.",
  },
]

export default function Problem() {
  return (
    <section className="py-24 sm:py-32 border-t border-white/5">
      <div className="max-w-300 mx-auto px-6">
        <RevealOnScroll>
          <div className="font-mono text-xs text-yume-pink uppercase tracking-[0.15em] mb-4 font-medium">
            The Problem
          </div>
          <h2 className="text-[clamp(32px,4vw,48px)] font-semibold leading-[1.1] tracking-tight mb-14 max-w-200">
            You've applied to 50 jobs this month.<br />
            <span className="text-text-tertiary">Your spreadsheet only has 12 of them.</span>
          </h2>
        </RevealOnScroll>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
          {problems.map((p, i) => (
            <RevealOnScroll key={p.title} delay={i * 0.1}>
              <div className="pt-7 border-t border-white/5">
                <div className="font-mono text-xs text-yume-pink tracking-wider mb-4 font-medium">
                  {p.label}
                </div>
                <div className="text-lg font-semibold tracking-tight mb-2">
                  {p.title}
                </div>
                <div className="text-text-secondary text-[15px] leading-relaxed">
                  {p.desc}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  )
}
