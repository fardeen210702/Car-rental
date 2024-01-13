import React from 'react'
import Landing from '../Images/Landing.png'

function LandingPage() {
  return (
    <div className='landingpage'>
        <div className="leftlanding">
            <div className="innerlanding">
            <h4>Book your Preferred Car Now</h4>
            <h2><span>Best</span> in the Market with Cheap Cost</h2>
            <p>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
            <div className="btns">
                <button>Book Ride</button>
                <button className='btn2'>Learn More <span>→</span></button>
            </div>


            </div>
        </div>
        <div className="rightlanding">
            <div className="circle"></div>
            <img src={Landing} alt="" />

        </div>
             
    </div>
  )
}

export default LandingPage