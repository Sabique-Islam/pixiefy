'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Github, Linkedin, Twitter, Menu as MenuIcon, Coffee} from 'lucide-react'
import { MenuContainer, MenuItem } from '@/components/ui/fluid-menu'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      setIsScrolled(currentScrollY > 50)
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const links = [
    { href: "https://coff.ee/nope.js", icon: <Coffee className="w-5 h-5" />, label: "Buy Me Coffee" },
    { href: "https://github.com/Sabique-Islam", icon: <Github className="w-5 h-5" />, label: "GitHub" },
    { href: "https://x.com/Sabique_", icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
    { href: "https://www.linkedin.com/in/sabique-islam/", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
  ]

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-6xl px-6 sm:py-4 py-1
      ${isScrolled 
        ? 'bg-black/40 backdrop-blur-xl border-gray-300/30 shadow-lg' 
        : 'bg-black/10 backdrop-blur-lg border-gray-400 shadow-md'
      } 
      border rounded-[2rem] flex items-center justify-between text-white
      transition-all duration-300 ease-out
      ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}
      sm:h-auto h-[60px]`}>

      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <Image
            src="/favicon.svg"
            alt="Icon"
            width={30}
            height={30}
            className="rounded-md bg-black/20 p-1"
          />
          <span className="font-semibold tracking-tight text-sm sm:text-base">Pixiefie</span>
        </Link>
      </div>

      <div className="hidden sm:flex items-center gap-6">
        {links.map(({ href, icon, label }) => (
          <div key={label} className="relative group">
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-zinc-300 transition"
            >
              {icon}
            </a>
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-[10px] bg-black text-white px-2 py-[2px] rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
              {label}
            </div>
          </div>
        ))}
      </div>

      <div className="sm:hidden flex">
        <MenuContainer>
          <MenuItem icon={<MenuIcon className="w-5 h-5 text-white/80" />} />
          {links.map(({ href, icon, label }) => (
            <MenuItem
              key={label}
              icon={icon}
              onClick={() => window.open(href, '_blank')}
            />
          ))}
        </MenuContainer>
      </div>
    </nav>
  )
}