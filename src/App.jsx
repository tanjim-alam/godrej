import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import AboutUs from './components/AboutUs'
import HighLightSection from './components/HighLightSection'
import PriceSection from './components/PriceSection'
import AmenitiesSection from './components/AmenitiesSection'
import FloorPlanSection from './components/FloorPlanSection'

function App() {

  return (
    <>
      <HeroSection />
      <AboutUs />
      <HighLightSection />
      <PriceSection />
      <AmenitiesSection />
      <FloorPlanSection />
      {/* <PriceSection /> */}
    </>
  )
}

export default App
