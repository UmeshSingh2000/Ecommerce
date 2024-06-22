import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Categories from './components/Categories'

import Toppick from './components/Toppick'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Categories/>
      <Toppick/>
    </div>
  )
}

export default App
