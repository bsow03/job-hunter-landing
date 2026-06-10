import { motion } from 'framer-motion'

/**
 * Wraps children in a scroll-triggered fade-up animation.
 * Triggers once when 10% of the element enters the viewport.
 *
 * @param {ReactNode} children - content to reveal
 * @param {number} delay - delay in seconds before animation starts
 * @param {string} className - optional tailwind classes for the wrapper div
 */
export default function RevealOnScroll({ children, delay = 0, className = '' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.16, 1, 0.3, 1] // custom ease-out curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
