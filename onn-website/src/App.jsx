import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Support from './components/Support'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      < NavBar />
      < Hero />
      <Services />
      <About />
      <Support />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App