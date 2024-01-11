import React from 'react'
import AllInOneComp from '../components/AllInOneComp'
import Data from '../Data'
import Rating from '../components/Rating'

function VehicleModels() {
  const data = {
    name: 'Vehicle Models',
    mainName: 'Rent US / VehicleModels '

  }

  return (
    <>
    <AllInOneComp data={data}/>
    <div className="ModelData">

    {
      Data.map((el,index)=>{
        return <div className="fetchdeddata" key={index}>
          <div className="img">
            <img src={el.img}  alt="" />
          </div>
          <Rating rating={el.rating}/>
          <p>{el.name}</p>
          <p>Model : {el.model}</p>
          <p>Fuel : {el.fuel}</p>
          <hr />
     
          <button> Book Now</button>



        </div>
      })
    }
    </div>
    
    </>
  )
}

export default VehicleModels