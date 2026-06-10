import { BsIncognito } from "react-icons/bs"

export default function Nav() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-bg-base/70 border-b border-white/5">
      <div className="max-w-300 mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 font-semibold text-[15px] tracking-tight">
          <a 
            className="w-8 h-8 rounded-md bg-linear-to-br from-yume-pink to-yume-magenta flex items-center justify-center"
            href="#"
          >
            <BsIncognito size="1.7em"/>
          </a>
          Job Hunter
        </div>

        <div className="hidden md:flex gap-8 text-sm text-text-secondary font-medium">
          <a href="#how" className="hover:text-text-primary transition-colors">How it works</a>
          <a href="#features" className="hover:text-text-primary transition-colors">Features</a>
          <a href="#pro" className="hover:text-text-primary transition-colors">Pro</a>
          <a href="#faq" className="hover:text-text-primary transition-colors">FAQ</a>
        </div>

        <a
          href="#"
          className="bg-linear-to-br from-yume-pink to-yume-magenta hover:from-yume-magenta hover:to-yume-pink text-white px-4 py-2 rounded-lg text-[13px] font-semibold hover:scale-105 hover:shadow-lg hover:shadow-white/15 transition-all"
        >
          Try the beta
        </a>
      </div>
    </nav>
  )
}
