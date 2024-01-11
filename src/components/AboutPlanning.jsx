import React from 'react'
import AllData from '../AllData'
import { RiCustomerService2Fill } from "react-icons/ri";
import { TbCarSuv } from "react-icons/tb";
import { GiHomeGarage } from "react-icons/gi";


function AboutPlanning() {
  return (
    <div className='aboutplanning'>
        <div className="upperinfo">
            <h4>{AllData.guidance}</h4>
            <h1>{AllData.planTrip}</h1>

        </div>
        <div className="bottominfo">
            <div className="info1">
                <li> <GiHomeGarage/> </li>
                <h2>Select Car</h2>
                <p>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs</p>
            </div>
            <div className="info1">
                <li> <RiCustomerService2Fill/> </li>
                <h2>Contact Service</h2>
                <p>Our knowledgeable and friendly operators are always ready to help with any questions or concerns</p>
            </div>
            <div className="info1">
                <li> <TbCarSuv/> </li>
                <h2>Let's Drive</h2>
                <p>Whether you're hitting the open road, we've got you covered with our wide range of cars</p>
            </div>

        </div>
        
    </div>
  )
}

export default AboutPlanning