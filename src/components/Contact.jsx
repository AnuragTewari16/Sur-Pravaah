import React from 'react'

export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 md:px-12" style={{ background: '#6B1A2A' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">Get in Touch</p>
          <h2 className="font-serif text-5xl md:text-6xl text-cream mb-6">Contact Sur Pravaah</h2>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/50"/>
            <div className="w-1.5 h-1.5 rounded-full bg-gold"/>
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/50"/>
          </div>
          <p className="font-body text-xl text-cream/60 max-w-xl mx-auto">
            Reach out to enquire about classes, schedules, or any questions about our music programmes.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <a href="mailto:surpravaah@gmail.com" className="group relative bg-maroon-dark/40 border border-gold/20 p-10 text-center hover:border-gold/60 transition-all duration-300 hover:bg-maroon-dark/60 hover:-translate-y-1" style={{ background: 'rgba(44,10,18,0.4)' }}>
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"/>
            <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-4 group-hover:border-gold/70 transition-colors">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            <p className="font-sans text-xs tracking-widest text-gold uppercase mb-2">Email</p>
            <p className="font-body text-lg text-cream/80 group-hover:text-cream transition-colors">surpravaah@gmail.com</p>
          </a>

          <a href="tel:+919936712665" className="group relative bg-maroon-dark/40 border border-gold/20 p-10 text-center hover:border-gold/60 transition-all duration-300 hover:bg-maroon-dark/60 hover:-translate-y-1" style={{ background: 'rgba(44,10,18,0.4)' }}>
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"/>
            <div className="w-14 h-14 rounded-full border border-gold/30 flex items-center justify-center mx-auto mb-4 group-hover:border-gold/70 transition-colors">
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
            </div>
            <p className="font-sans text-xs tracking-widest text-gold uppercase mb-2">Phone</p>
            <p className="font-body text-lg text-cream/80 group-hover:text-cream transition-colors">+91 99367 12665</p>
          </a>
        </div>

        <div className="text-center mt-10">
          <p className="font-sans text-xs tracking-widest text-gold/60 uppercase mb-2">Location</p>
          <p className="font-serif text-xl text-cream/70 italic">Unique Emporia, NRI Colony Road, Jagatpura, Jaipur – 302025</p>
        </div>
      </div>
    </section>
  )
}
