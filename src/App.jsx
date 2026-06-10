import Nav from './components/Nav'
import Hero from './components/Hero'
import Problem from './components/Problem'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import ProTier from './components/ProTier'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="font-sans bg-bg-base text-text-primary min-h-screen overflow-x-hidden">
      <Nav />
      <Hero />
      <Problem />
      <HowItWorks />
      <Features />
      <ProTier />
      <FAQ />
      <Footer />
    </div>
  )
}
