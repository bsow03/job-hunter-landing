export default function GradientText({ children, className = '' }) {
  return (
    <span className={`bg-gradient-to-br from-yume-pink to-yume-magenta bg-clip-text text-transparent ${className}`}>
      {children}
    </span>
  )
}
