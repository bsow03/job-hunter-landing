export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-300 mx-auto px-6 flex justify-between items-center flex-wrap gap-6">
        <div className="flex gap-6 text-[13px] text-text-secondary font-medium">
          <a href="https://gist.github.com/bsow03/685d59f3afe3961dcaace0312fc6b960" className="hover:text-text-primary transition-colors">
            Privacy
          </a>
          <a href="mailto:yumewrks@gmail.com" className="hover:text-text-primary transition-colors">
            Contact
          </a>
        </div>
        <div className="text-[13px] text-text-secondary flex items-center gap-1.5">
          Made by{' '}
          <span className="font-semibold bg-linear-to-b from-yume-pink to-yume-magenta bg-clip-text text-transparent">
            Yume
          </span>
        </div>
      </div>
    </footer>
  )
}
