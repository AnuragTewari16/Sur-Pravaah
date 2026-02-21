import React from 'react'

export default function About() {
  return (
    <section id="about" className="py-28 px-6 md:px-12" style={{ background: '#F8F3EA' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <div className="relative flex items-center justify-center">
            <div className="relative w-80 h-80">
              <div className="absolute inset-0 rounded-full border border-gold/30"/>
              <div className="absolute inset-4 rounded-full border border-maroon/20"/>
              <div className="absolute inset-10 rounded-full bg-parchment border border-gold/40 flex items-center justify-center flex-col gap-2">
                <div className="font-serif text-7xl text-maroon">♪</div>
                <div className="font-sans text-xs tracking-widest text-maroon/50 uppercase">Sur Pravaah</div>
              </div>
              {[0,72,144,216,288].map((deg, i) => (
                <div key={i} className="absolute w-2.5 h-2.5 rounded-full bg-gold/60"
                  style={{
                    top: `${50 + 46 * Math.sin((deg * Math.PI) / 180)}%`,
                    left: `${50 + 46 * Math.cos((deg * Math.PI) / 180)}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                />
              ))}
            </div>
          </div>

          <div>
            <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">Our Story</p>
            <h2 className="font-serif text-5xl md:text-6xl text-maroon leading-tight mb-6">
              About<br/><span className="italic">Sur Pravaah</span>
            </h2>
            <div className="w-12 h-px bg-gold mb-8"/>
            <p className="font-body text-xl text-maroon/75 leading-relaxed mb-6">
              Sur Pravaah is a premier music coaching institute in Jaipur focused on nurturing talent in Indian classical music. With decades of experience in teaching and performance, the institute provides structured and traditional training in vocal and instrumental music.
            </p>
            <p className="font-body text-xl text-maroon/75 leading-relaxed mb-10">
              Teaching is available in both{' '}
              <span className="text-maroon font-semibold italic">English</span>{' '}
              and{' '}
              <span className="text-maroon font-semibold italic">Hindi</span>,
              ensuring that music education is accessible to all.
            </p>
            <div className="flex gap-10">
              <div className="text-center">
                <div className="font-serif text-4xl text-maroon mb-1">25+</div>
                <div className="font-sans text-xs tracking-wider text-maroon/50 uppercase">Years Teaching</div>
              </div>
              <div className="w-px bg-gold/30"/>
              <div className="text-center">
                <div className="font-serif text-4xl text-maroon mb-1">2</div>
                <div className="font-sans text-xs tracking-wider text-maroon/50 uppercase">Languages</div>
              </div>
              <div className="w-px bg-gold/30"/>
              <div className="text-center">
                <div className="font-serif text-4xl text-maroon mb-1">4+</div>
                <div className="font-sans text-xs tracking-wider text-maroon/50 uppercase">Specializations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
