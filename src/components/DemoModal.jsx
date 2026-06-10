import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/**
 * Full-screen modal that plays the extension demo video.
 * - Closes on Escape, click outside the video, or X button
 * - Locks body scroll while open
 * - Video has controls (user opted in to watching, give them playback control)
 */
export default function DemoModal({ isOpen, onClose }) {
  useEffect(() => {
    function handleEsc(e) {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8 backdrop-blur-md bg-bg-base/80"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[1200px]"
          >
            {/* Close button */}
            <button
              onClick={onClose}
              aria-label="Close demo"
              className="absolute -top-3 -right-3 sm:-top-12 sm:right-0 w-10 h-10 rounded-full bg-bg-elevated border border-white/10 text-text-primary flex items-center justify-center hover:bg-bg-card transition-colors z-10"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M4 4l8 8M12 4l-8 8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Video container — same visual treatment as PopupMockup */}
            <div
              className="relative rounded-2xl overflow-hidden border border-white/10"
              style={{
                boxShadow:
                  '0 50px 100px rgba(0,0,0,0.6), inset 0 0 0 1px rgba(255,255,255,0.06)',
              }}
            >
              <video
                autoPlay
                controls
                controlsList="nodownload" 
                oncontextmenu="return false;"
                playsInline
                poster="/video/full-demo-poster.jpg"
                className="w-full h-[90%] block"
              >
                <source src="/video/full-demo.mp4" type="video/mp4" />
                <source src="/video/full-demo.webm" type="video/webm" />
                Your browser doesn't support video playback.
              </video>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
