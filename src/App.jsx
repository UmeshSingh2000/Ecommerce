import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'


import Toppick from './components/Toppick'
import Trust from './components/Trust'
import Footer from './components/Footer'



const App = () => {
  useEffect(()=>{
    window.scrollTo(0, 0);
  },[])
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Toppick />
      <Trust/>
      <Footer/>
    </div>
  )
}

export default App
