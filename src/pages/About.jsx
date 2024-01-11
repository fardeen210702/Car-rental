import React from 'react'
import AllInOneComp from '../components/AllInOneComp'
import AboutOurCompany from '../components/AboutOurCompany'
import AboutPlanning from '../components/AboutPlanning'

function About() {
  const data = {
    name: 'About',
    mainName: 'Rent US / About '

  }
  return (
    <>
      <AllInOneComp data={data}/>
      <AboutOurCompany/>
      <AboutPlanning/>
    </>
  )
}

export default About