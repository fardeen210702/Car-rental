import React, { useState } from 'react'
import Data from '../Data'

function ViewDeatils({state,setCut}) {
    console.log(state,'statedata');
    const {car, pick, drop, time, endtime} = state
    console.log(car,'car');

   
  return (
    <>
   <div className='viewdetails' >
  <div className="containerrr">

        <button onClick={()=>setCut(false)}>cut</button>

        <h1>{car}</h1>
        <h1>{pick}</h1>
        <h1>{drop}</h1>
        <h1>{time}</h1>
        <h1>{endtime}</h1>
        {
            Data.map((el,index)=>{
                return el.name == car && <img key={index} src={el.img} alt="" />
            })
        }
    
        </div>
    
    </div>
 
    

 </>
  )
}

export default ViewDeatils