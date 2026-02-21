import React from 'react'

const classCategories = [
  {
    icon: '🎵',
    category: 'Vocal Music',
    classes: [
      { name: 'Classical Singing', desc: 'Rooted in the ancient traditions of Hindustani vocal music' },
      { name: 'Semi-Classical', desc: 'Bhajan, Ghazal, Folk & Filmy styles for all levels' },
    ],
    accent: '#6B1A2A',
  },
  {
    icon: '🪕',
    category: 'Instrumental Music',
    classes: [
      { name: 'Harmonium / Keyboard', desc: 'Foundation of Indian classical accompaniment' },
      { name: 'Sitar', desc: 'The jewel of Indian classical string instruments' },
    ],
    accent: '#C9922A',
  },
]

export default function Classes() {
  return (
    <section id="classes" className="py-20 md:py-28 px-4 md:px-12" style={{ background: '#F8F3EA' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">What We Teach</p>
          <h2 className="font-serif text-4xl md:text-6xl text-maroon mb-6">Classes Offered</h2>
          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold"/>
            <span className="font-sans text-xs tracking-widest text-maroon/40 uppercase whitespace-nowrap">Structured & Traditional Training</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold"/>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {classCategories.map((cat) => (
            <div key={cat.category} className="relative bg-parchment border border-gold/20 overflow-hidden group hover:border-gold/40 transition-all duration-500 hover:shadow-lg hover:shadow-maroon/5">
              <div className="h-1 w-full" style={{ background: cat.accent }} />
              <div className="p-6 md:p-10">
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <span className="text-3xl md:text-4xl">{cat.icon}</span>
                  <div>
                    <h3 className="font-serif text-xl md:text-2xl text-maroon">{cat.category}</h3>
                    <div className="h-px w-8 bg-gold mt-1" />
                  </div>
                </div>
                <div className="space-y-5 md:space-y-6">
                  {cat.classes.map((cls) => (
                    <div key={cls.name} className="flex gap-4">
                      <div className="mt-2 w-2 h-2 rounded-full bg-gold flex-shrink-0" />
                      <div>
                        <h4 className="font-serif text-lg md:text-xl text-maroon mb-1">{cls.name}</h4>
                        <p className="font-body text-sm md:text-base text-maroon/60 leading-relaxed">{cls.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <p className="font-body text-base md:text-lg text-maroon/60">
            Classes available in both English and Hindi. All skill levels welcome.
          </p>
        </div>
      </div>
    </section>
  )
}
