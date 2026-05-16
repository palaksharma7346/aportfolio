import React from 'react'
import Hero from '../components/hero/Hero'
import About from '../components/about/About'
import Projects from '../components/projects/Projects'
import Contact from '../components/contact/Contact'


const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  )
}

export default Home