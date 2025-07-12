import ProfileForm from '@/components/ProfileForm'
import Navbar from '@/components/Navbar'
import { Hero } from '@/components/Hero'

export default function Home() {
  return (
      <div>
        <Navbar />
        <Hero/>
        <ProfileForm />
      </div>
  )
}
