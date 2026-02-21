import React from 'react'

const teachers = [
  {
    name: 'Arun Kumar Tewari',
    image: '/teacher-arun.jpg',
    bio: 'Ex-radio artist of Mathura Radio Station. Performed on Lucknow Radio & Television. Retired as Manager from The New India Assurance Company.',
    qualifications: ['M.Com', 'M.A', 'FIII', 'Sangeet Prabhakar – Sitar'],
    specializations: ['Sitar', 'Indian Classical Instrumental Music'],
  },
  {
    name: 'Mamta Tewari',
    image: '/teacher-mamta.jpg',
    bio: 'Vocal music educator with 25 years of teaching experience in a college in Kanpur.',
    qualifications: ['M.A. (Vocal Music)', 'Sangeet Prabhakar'],
    specializations: ['Classical Singing', 'Semi-Classical (Bhajan, Ghazal, Folk, Filmy)', 'Harmonium', 'Keyboard (Casio)'],
  },
]

function TeacherCard({ teacher }) {
  return (
    <div className="relative group flex flex-col md:flex-row overflow-hidden border border-gold/20 hover:border-gold/50 transition-all duration-500 hover:shadow-2xl hover:shadow-maroon/10 hover:-translate-y-1" style={{ background: '#EDE3D4', minHeight: '420px' }}>
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gold via-maroon to-gold" />

      {/* Photo */}
      <div className="relative md:w-96 flex-shrink-0 overflow-hidden" style={{ minHeight: '340px' }}>
        <img
          src={teacher.image}
          alt={teacher.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          style={{ minHeight: '340px' }}
        />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, transparent 65%, #EDE3D4)' }} />
      </div>

      {/* Info */}
      <div className="flex-1 p-8 md:p-10 flex flex-col justify-center">
        <h3 className="font-serif text-3xl text-maroon mb-1">{teacher.name}</h3>
        <div className="h-px w-12 bg-gold mb-5" />
        <p className="font-body text-lg text-maroon/70 leading-relaxed mb-6">{teacher.bio}</p>

        <div className="mb-5">
          <h4 className="font-sans text-xs tracking-widest text-gold uppercase mb-3">Qualifications</h4>
          <div className="flex flex-wrap gap-2">
            {teacher.qualifications.map((q, i) => (
              <span key={i} className="px-3 py-1.5 bg-cream border border-maroon/15 text-maroon/70 font-sans text-xs tracking-wide">{q}</span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-sans text-xs tracking-widest text-gold uppercase mb-3">Specializations</h4>
          <ul className="space-y-1.5">
            {teacher.specializations.map((s, i) => (
              <li key={i} className="flex items-start gap-2 text-maroon/70 font-body text-base">
                <span className="text-gold mt-1 text-xs">◆</span>{s}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </div>
  )
}

export default function Teachers() {
  return (
    <section id="teachers" className="py-28 px-6 md:px-12" style={{ background: '#F2EBE0' }}>
      <div className="max-w-screen-xl mx-auto">
        <div className="text-center mb-16">
          <p className="font-sans text-xs tracking-[0.3em] text-gold uppercase mb-4">The Faculty</p>
          <h2 className="font-serif text-5xl md:text-6xl text-maroon mb-6">Our Teachers</h2>
          <div className="flex items-center justify-center gap-4 max-w-xs mx-auto">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-gold"/>
            <span className="font-sans text-xs tracking-widest text-maroon/40 uppercase whitespace-nowrap">Masters of their Craft</span>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-gold"/>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          {teachers.map((teacher) => (
            <TeacherCard key={teacher.name} teacher={teacher} />
          ))}
        </div>
      </div>
    </section>
  )
}
