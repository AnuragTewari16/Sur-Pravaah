import React from 'react'

export default function Performances() {
  return (
    <section id="performances" className="py-20 md:py-28 px-4 md:px-12" style={{ background: '#F2EBE0' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">Watch & Listen</p>
          <h2 className="font-serif text-4xl md:text-6xl text-maroon mb-6">Our Performances</h2>
          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold"/>
            <span className="font-sans text-xs tracking-widest text-maroon/40 uppercase whitespace-nowrap">Live on YouTube</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold"/>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-2 border border-gold/20"/>
            <div className="relative aspect-video bg-maroon/5 overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/P3E1MvQ0Vp0"
                title="Sur Pravaah Performance"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div>
            <div className="w-12 h-px bg-gold mb-5"/>
            <h3 className="font-serif text-2xl md:text-4xl text-maroon mb-4 leading-snug">
              Experience the Music of Sur Pravaah
            </h3>
            <p className="font-body text-base md:text-xl text-maroon/70 leading-relaxed mb-8">
              Watch our performances, student recitals, and classical music demonstrations on our YouTube channel. Subscribe to stay connected with the tradition of Indian classical music.
            </p>
            <div className="flex flex-col gap-4">
              <a href="https://youtube.com/@surpravaah4029" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 group px-5 py-4 bg-maroon text-cream hover:bg-maroon-light transition-all duration-300 hover:shadow-lg hover:shadow-maroon/20">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <div className="min-w-0">
                  <div className="font-sans text-xs md:text-sm tracking-widest uppercase">Visit Our YouTube Channel</div>
                  <div className="font-body text-xs text-cream/60 mt-0.5">@surpravaah4029</div>
                </div>
                <svg className="w-4 h-4 ml-auto flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="https://facebook.com/surpravaah" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-4 group px-5 py-4 border border-maroon/30 text-maroon hover:border-maroon hover:bg-maroon hover:text-cream transition-all duration-300">
                <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <div className="min-w-0">
                  <div className="font-sans text-xs md:text-sm tracking-widest uppercase">Follow on Facebook</div>
                  <div className="font-body text-xs opacity-60 mt-0.5">@surpravaah</div>
                </div>
                <svg className="w-4 h-4 ml-auto flex-shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
