'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { Github, Linkedin, Twitter, Menu, X, Pizza } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const links = [
    { href: "https://coff.ee/nope.js", icon: <Pizza className="w-5 h-5" />, label: "Support Me" },
    { href: "https://github.com/Sabique-Islam", icon: <Github className="w-5 h-5" />, label: "GitHub" },
    { href: "https://x.com/Sabique_", icon: <Twitter className="w-5 h-5" />, label: "Twitter" },
    { href: "https://www.linkedin.com/in/sabique-islam/", icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn" },
  ]

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-5xl px-6 py-3 
      bg-black/10 backdrop-blur-lg border border-gray-400 
      shadow-md rounded-[2rem] flex items-center justify-between text-white">

      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition">
          <Image
            src="/favicon.svg"
            alt="Icon"
            width={30}
            height={30}
            className="rounded-md bg-black/20 p-1"
          />
          <span className="font-semibold tracking-tight text-sm sm:text-base">Pixify</span>
        </Link>
      </div>

      {/* Desktop Icons with Tooltip */}
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
            <div className="absolute top-7 left-1/2 -translate-x-1/2 text-[10px] bg-black text-white px-2 py-[2px] rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
              {label}
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden text-white"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {isOpen && (
        <div className="absolute top-[70px] left-1/2 -translate-x-1/2 w-[92vw] max-w-5xl px-4">
          <div className="flex flex-col gap-4 bg-white/10 backdrop-blur-lg border border-gray-400 shadow-md rounded-[1.5rem] p-4 text-white">
            <div className="flex gap-4 mt-2 justify-center">
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
                  <div className="absolute top-7 left-1/2 -translate-x-1/2 text-[10px] bg-black text-white px-2 py-[2px] rounded-md opacity-0 group-hover:opacity-100 transition whitespace-nowrap z-50">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}