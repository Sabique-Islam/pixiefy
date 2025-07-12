import Navbar from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import Footer from '@/components/Footer'
import HowToUse from '@/components/HowToUse'

export default function Home() {
  return (
      <div>
        <Navbar />
        <Hero/>
        <HowToUse/>
        <Footer/>
      </div>
  )
}
