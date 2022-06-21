import React from 'react'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Experience from './components/experience/Experience'
import Footer from './components/footer/Footer'
import Header from './components/header/header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Testimonials from './components/testimonials/Testimonials'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <Contact/>
      <Experience/>
      <About/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App
