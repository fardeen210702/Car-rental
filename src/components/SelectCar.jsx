import React, { useEffect, useReducer } from 'react'
import { useState } from 'react'
import Data from '../Data'
import { Link } from 'react-router-dom'
import ViewDeatils from './ViewDeatils'

function SelectCar() {
    const [selectedItem, setselectedItem] = useState('')
    const [pickupPoint, setPickupPoint] = useState('')
    const [dropPoint, setDropPoint] = useState('')
    const [pickdate, setPickDate] = useState('')
    const [dropDate, setDropDate] = useState('')
    const [cut, setCut] = useState(false)
    const initialState = {
        carDetails: {
            car: '',
            pick: '',
            drop: '',
            time: '',
            endtime: '',

        },
        toggle: false,
        viewDetails: false,
        

    }
    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state, 'state');
    function reducer(state, action) {
        switch (action.type) {
            case 'UPDATEDETAILS':
                const { car, pick, drop, time, endtime } = action.payload;
                return {
                    ...state,
                    carDetails: {
                        car: car,
                        pick: pick,
                        drop: drop,
                        time: time,
                        endtime: endtime,
                    }
                }
            case 'updateToggle':
                return {
                    ...state,
                    toggle: true
                }
            case 'viewDetails':
                return {
                    ...state,
                    toggle: false,
                    viewDetails: true,
                }
           
          
           

            default:
                return state
        }
    }

    function handleCatchEntireDetails(car, pick, drop, time, endtime) {
        dispatch({ type: 'UPDATEDETAILS', payload: { car, pick, drop, time, endtime } })

        // setBookedData(
        //     {
        //         car: car,
        //         pick: pick,
        //         drop: drop,
        //         time: time,
        //         endtime: endtime,
        //     },
        // );
    }
    function updateFilter(e) {

        let value = e.target.value;
        setPickDate(value)

    }
    function updateFilter1(e) {

        let value = e.target.value;
        setDropDate(value)

    }

    return (
        <div className='selectcar'>
            <h1>Rent a Car</h1>
            <div className="selectingcarprocess">
                <form action="" onSubmit={(e) => e.preventDefault()}>
                    <div className="MAINOPTIONS">

                        <div className="options">

                            <label htmlFor="selectone">Select a Model*</label>
                            <select  name="selectone" id='selectone'>
                                {
                                    Data.map((el, index) => {
                                        return <option key={index} value={el.name} onClick={() => setselectedItem(el.name)}>{el.name}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="options">

                            <label htmlFor="selectsecond">Pick up Point*</label>
                            <select name="selectsecond" id='selectsecond'>
                               
                                {
                                    Data.map((el, index) => {
                                        return <option key={index} value={el.location} onClick={() => setPickupPoint(el.location)} >{el.location}</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="options">

                            <label htmlFor="selectsecond">Drop Point*</label>
                            <select name="selectsecond" id='selectsecond'>
                                {
                                    Data.map((el, index) => {
                                        return <option key={index} value={el.location} onClick={() => setDropPoint(el.location)}>{el.location}</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="time">
                        <div className="pickupdate">
                            <label htmlFor="pickup">Pickup Date</label>
                            <input type="date" name='text' value={pickdate} onChange={updateFilter} required/>
                        </div>
                        <div className="pickupdate">
                            <label htmlFor="pickup">Drop Date</label>
                            <input type="date" value={dropDate} onChange={updateFilter1} required />
                        </div>
                    {/* <Link to={`/singlepage/:id`}>
                    </Link> */}
                    <input type="submit" value={state.toggle ?'submitted' :'submit'} onClick={() => { handleCatchEntireDetails(selectedItem, pickupPoint, dropPoint, pickdate, dropDate); dispatch({ type: 'updateToggle' }) }} />
                    </div>
                </form>
                {
                    state.toggle && <div className="cont">

                        {
                            state.carDetails && <button onClick={() => {dispatch({ type: 'viewDetails' });setCut(true)}}>View Details</button>
                        }
                    </div>
                }

            </div>

            {
                state.viewDetails && <>
                    {
                        state.carDetails && <>{ cut &&<ViewDeatils state={state.carDetails} setCut={setCut} />

                        }
                        
                        
                        </> 
                    }
                </>
            }



        </div>
    )
}

export default SelectCar