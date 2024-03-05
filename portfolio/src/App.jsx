import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import PortfolioSection from './components/PortfolioSection'
import Experince from './components/Experince'
import Contact from './components/Contact'

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Home />
      <About />
      <PortfolioSection />
      <Experince />
      <SocialLinks />
      <Contact />
    </div>
  )
}

export default App