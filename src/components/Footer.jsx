import React from 'react'

export default function Footer() {
  return (
    <footer className="py-12 md:py-16 px-4 md:px-12" style={{ background: '#2C0A12' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10 md:mb-12">
          <div>
            <h3 className="font-serif text-xl md:text-2xl text-cream mb-1">Sur Pravaah</h3>
            <p className="font-sans text-xs tracking-widest text-gold uppercase mb-4">Classical Music Academy · Jaipur</p>
            <div className="h-px w-8 bg-gold mb-4"/>
            <p className="font-body text-sm md:text-base text-cream/50 leading-relaxed mb-2">
              Preserving and teaching the timeless tradition of Indian Classical Music in the heart of Jaipur.
            </p>
            <p className="font-sans text-xs text-cream/30 leading-relaxed mt-2">
              Unique Emporia, NRI Colony Road<br/>Jagatpura, Jaipur – 302025
            </p>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest text-gold uppercase mb-5 md:mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:surpravaah@gmail.com" className="flex items-center gap-3 text-cream/60 hover:text-cream transition-colors font-body text-sm md:text-base group">
                  <svg className="w-4 h-4 text-gold/60 group-hover:text-gold transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span className="break-all">surpravaah@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+919936712665" className="flex items-center gap-3 text-cream/60 hover:text-cream transition-colors font-body text-sm md:text-base group">
                  <svg className="w-4 h-4 text-gold/60 group-hover:text-gold transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  +91 99367 12665
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs tracking-widest text-gold uppercase mb-5 md:mb-6">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://youtube.com/@surpravaah4029" target="_blank" rel="noopener noreferrer"
                 className="w-11 h-11 border border-cream/10 flex items-center justify-center text-cream/50 hover:text-cream hover:border-gold/50 transition-all duration-300" aria-label="YouTube">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="https://facebook.com/surpravaah" target="_blank" rel="noopener noreferrer"
                 className="w-11 h-11 border border-cream/10 flex items-center justify-center text-cream/50 hover:text-cream hover:border-gold/50 transition-all duration-300" aria-label="Facebook">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-cream/10 pt-6 md:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-sans text-xs tracking-wider text-cream/30 text-center sm:text-left">© 2026 Sur Pravaah. All Rights Reserved.</p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-gold/40"/>
            <span className="font-sans text-xs tracking-wider text-cream/20">Classical Music Academy – Jaipur</span>
            <div className="w-1.5 h-1.5 rounded-full bg-gold/40"/>
          </div>
        </div>
      </div>
    </footer>
  )
}
