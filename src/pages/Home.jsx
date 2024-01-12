import React from 'react'
import AboutPlanning from '../components/AboutPlanning'
import CarPick from '../components/CarPick'
import SelectCar from '../components/SelectCar'

function Home() {
  return (
    <>
      <SelectCar />
      <AboutPlanning />
      <CarPick />

    </>
  )
}

export default Home