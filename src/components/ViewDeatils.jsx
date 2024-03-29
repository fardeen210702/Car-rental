import React, { useState } from 'react'
import Data from '../Data'
import { FaLocationDot } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import FormDetails from './FormDetails';

function ViewDeatils({ state, setCut }) {
    console.log(state, 'statedata');
    const { car, pick, drop, time, endtime } = state
    // console.log(car, 'car');
    // console.log(pick,'pick');


    return (
        <>
            <div className='viewdetails' >
                <div className="bookeddetails">
                    <h1>Successful Reservation!!</h1>
                    <button onClick={() => setCut(false)}><RxCross1/></button>
                </div>

                <div className="viewinnerdetails">
                    <div className="filleddetails">
                        <h2> Location and Date👉</h2>
                        <div className="innerfilleddetails">
                            <h1> <FaLocationDot/> Car Booked :- <span>{car =='' ? (<span className='span'>please fill out this section* </span>) : car}</span></h1>
                            <h1><FaLocationDot/> Pick Car at :- <span>{pick =='' ? (<span className='span'>please fill out this section* </span>) : pick}</span></h1>
                            <h1><FaLocationDot/> Destination :- <span>{drop =='' ? (<span className='span'>please fill out this section* </span>) : drop}</span></h1>
                            <h1><FaLocationDot/> Pick up Date :- <span>{time =='' ? (<span className='span'>please fill out this section* </span>) : time}</span></h1>
                            <h1><FaLocationDot/> Drop Date :- <span> {endtime =='' ? (<span className='span'>please fill out this section* </span>) : endtime}</span> </h1>
                        </div>
                    </div>

                    <div className="filledcarimg">
                        
                        {
                            Data.map((el, index) => {
                                return el.name == car &&<img key={index} src={el.img} alt="" />

                            })
                        }
                    </div>

                </div>
                <FormDetails setCut={setCut}/>

            </div>



        </>
    )
}

export default ViewDeatils