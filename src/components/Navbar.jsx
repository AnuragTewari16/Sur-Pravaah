import React, { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '#about', label: 'About' },
    { href: '#teachers', label: 'Teachers' },
    { href: '#classes', label: 'Classes' },
    { href: '#performances', label: 'Performances' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm border-b border-gold/20' : 'bg-transparent'}`}>
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 py-5 flex items-center justify-between">
        <a href="#hero" className="group">
          <span className="font-serif text-2xl text-maroon font-semibold tracking-wide group-hover:text-gold transition-colors duration-300 block">Sur Pravaah</span>
          <div className="text-xs font-sans text-maroon/50 tracking-widest uppercase mt-0.5">Classical Music Academy</div>
        </a>
        <ul className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="font-sans text-sm tracking-wider text-maroon/70 hover:text-maroon transition-colors duration-300 relative group">
                {link.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full"/>
              </a>
            </li>
          ))}
        </ul>
        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`w-6 h-px bg-maroon transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}/>
          <span className={`w-6 h-px bg-maroon transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}/>
          <span className={`w-6 h-px bg-maroon transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}/>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-cream/98 backdrop-blur-sm border-t border-gold/20 px-6 py-4">
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="font-sans text-sm tracking-wider text-maroon/70 hover:text-maroon transition-colors" onClick={() => setMenuOpen(false)}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
