import React from 'react'
import AboutPlanning from '../components/AboutPlanning'
import CarPick from '../components/CarPick'
import SelectCar from '../components/SelectCar'
import LandingPage from '../components/LandingPage'
import FrequentlyAsked from '../components/FrequentlyAsked'

function Home() {
  return (
    <>
    <LandingPage/>
      <SelectCar />
      <AboutPlanning />
      <CarPick />
    <FrequentlyAsked/>

    </>
  )
}

export default Home