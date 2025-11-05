import AnimatedHeroDemo from './components/AnimatedHeroDemo'
import Services from './components/Services'
import WhyChooseUs from './components/WhyChooseUs'
import Process from './components/Process'
import Gallery from './components/Gallery'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div className="min-h-screen">
      <AnimatedHeroDemo />
      <Services />
      <WhyChooseUs />
      <Process />
      <Gallery />
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
