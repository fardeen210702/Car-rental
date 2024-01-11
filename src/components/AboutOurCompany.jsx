import React from 'react'
import aboutimg from '../Images/carcompany.jpg'
import AllData from '../AllData'
import { IoCarSharp } from "react-icons/io5";
import { FaWarehouse } from "react-icons/fa";
import { GiHomeGarage } from "react-icons/gi";
function AboutOurCompany() {
    return (
        <div className='aboutourcompany'>
            <div className="leftinfo">
                <img src={aboutimg} alt="" />

            </div>
            <div className="rightinfo">
                <div className="headings">

                    <h2>{AllData.aboutcompany}</h2>
                    <h1> {AllData.companyinfo}</h1>
                    <p>{AllData.companydetails}</p>
                </div>
                <div className="headingdetails">
                  <div className="firstcarinfo">
                  <li> <IoCarSharp/></li>
                  <p>20+ Branches</p>
                  </div>
                  <div className="firstcarinfo">
                <li><FaWarehouse/></li>
                  <p>10+ Service Points</p>
                  </div>
                  <div className="firstcarinfo">
                <li><GiHomeGarage/></li>
                  <p>100+ Car Types</p>
                  </div>
                </div>


            </div>


        </div>
    )
}

export default AboutOurCompany