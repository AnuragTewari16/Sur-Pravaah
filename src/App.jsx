import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Teachers from './components/Teachers'
import Classes from './components/Classes'
import Performances from './components/Performances'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Teachers />
      <Classes />
      <Performances />
      <Contact />
      <Footer />
    </div>
  )
}
