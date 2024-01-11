import React, { useState } from 'react'
import Data from '../Data'

function CarPick() {
  const [list, setList] = useState(Data[0])
  function handleAdd(el){
      setList(el)
    }
    // console.log(list,'item');
  return (
<>
<div className="upperdetailofcar">
    <h3>Vehicles Recommended!</h3>
    <h1> Rent us Brought you the <span>BEST</span> in the Market!!</h1>
    <p>Choose from a variety of our amazing vehicles to rent for your next adventure or business trip</p>
</div>
    <div className='carpick'>
        <div className="carcontainer">
        {
            
            Data.map((el,index)=>{
                return <div className="leftcontainer" key={index}>       
                                    <button onClick={()=>handleAdd(el)} >{el.name}</button>
                            </div>
            })
        }
        </div>
        { list && <div className="centercontainer">
            <img src={list.img} alt="" />
        </div> }


        {
            list && <div className="thirdcontainer">
                <h2>{list.price}$ / Per Day</h2>
               <div className="thirdinnercontainer">
                <p> <new>Model</new> <line>|</line> <span>{list.model}</span> </p>
                <p>  <new>Name</new> <line>|</line> <span>{list.name}</span> </p>
                <p>  <new>Seats</new>  <line>|</line> <span>{list.doors}</span> </p>
                <p>  <new>AC</new> <line>|</line> <span>{list.air}</span> </p>
                <p>  <new>Fuel</new>  <line>|</line> <span>{list.fuel}</span> </p>
                <p>  <new>Launch</new>  <line>|</line> <span>{list.year}</span> </p>
                <p>  <new>Techonology</new>  <line>|</line> <span>{list.transmission}</span> </p>

               </div>
               
            </div>
        }
       


    </div>
        </>
  )
}

export default CarPick