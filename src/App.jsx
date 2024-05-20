import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Banner from './components/Banner'
import Hero from './components/Hero'
import Process from './components/Process'
import Achievement from './components/Achievement'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <Hero/>
      <Process/>
      <Achievement/>
      <Footer/>
    </>
  )
}

export default App
