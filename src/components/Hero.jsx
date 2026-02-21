import React from 'react'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: 'radial-gradient(ellipse at 50% 0%, #EDE3D4 0%, #F8F3EA 60%)' }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-12 left-8 opacity-10 w-52 h-52 text-maroon" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1"/>
          <circle cx="100" cy="100" r="70" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="50" stroke="currentColor" strokeWidth="1"/>
          {[0,30,60,90,120,150].map(deg => (
            <line key={deg} x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.5" transform={`rotate(${deg} 100 100)`}/>
          ))}
          {[0,45,90,135].map(deg => (
            <ellipse key={deg} cx="100" cy="100" rx="90" ry="20" stroke="currentColor" strokeWidth="0.5" fill="none" transform={`rotate(${deg} 100 100)`}/>
          ))}
        </svg>
        <svg className="absolute bottom-12 right-8 opacity-10 w-72 h-72 text-gold" viewBox="0 0 200 200" fill="none">
          <circle cx="100" cy="100" r="90" stroke="currentColor" strokeWidth="1"/>
          <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="0.5"/>
          <circle cx="100" cy="100" r="30" stroke="currentColor" strokeWidth="1"/>
          {[0,30,60,90,120,150].map(deg => (
            <line key={deg} x1="100" y1="10" x2="100" y2="190" stroke="currentColor" strokeWidth="0.5" transform={`rotate(${deg} 100 100)`}/>
          ))}
        </svg>
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto" style={{ animation: 'fadeInUp 1s ease forwards' }}>
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold"/>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold">
            <path d="M12 2L13.5 8.5L20 7L15.5 12L20 17L13.5 15.5L12 22L10.5 15.5L4 17L8.5 12L4 7L10.5 8.5L12 2Z" fill="currentColor"/>
          </svg>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold"/>
        </div>

        <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">Classical Music Academy · Jaipur</p>
        <h1 className="font-serif text-6xl md:text-8xl text-maroon leading-tight mb-3">Sur Pravaah</h1>
        <p className="font-serif italic text-2xl md:text-3xl text-maroon/60 mb-8">
          Preserving the tradition of Indian Classical Music
        </p>

        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold/50"/>
          <div className="w-1.5 h-1.5 rounded-full bg-gold"/>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold/50"/>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#classes" className="inline-block px-12 py-4 bg-maroon text-cream font-sans text-sm tracking-widest uppercase hover:bg-maroon-light transition-all duration-300 hover:shadow-lg hover:shadow-maroon/20 hover:-translate-y-0.5">
            Explore Classes
          </a>
          <a href="#contact" className="inline-block px-12 py-4 border border-maroon text-maroon font-sans text-sm tracking-widest uppercase hover:bg-maroon hover:text-cream transition-all duration-300 hover:-translate-y-0.5">
            Contact Us
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-sans text-xs tracking-widest text-maroon uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-gold to-transparent animate-pulse"/>
      </div>
    </section>
  )
}
