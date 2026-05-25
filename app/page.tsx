import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import Values from '@/components/Values'
import About from '@/components/About'
import Services from '@/components/Services'
import Packages from '@/components/Packages'
import Gallery from '@/components/Gallery'
import WhyChoose from '@/components/WhyChoose'
import Testimonials from '@/components/Testimonials'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import ChatFab from '@/components/ChatFab'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Values />
        <About />
        <Services />
        <Packages />
        <Gallery />
        <WhyChoose />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <ChatFab />
    </>
  )
}
