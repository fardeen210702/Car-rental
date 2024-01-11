import React from 'react'
import backgroundimg from '../Images/back2.jpg'
function AllInOneComp({data}) {
    const {name,mainName} = data
  return (
    <>
    <div className='allinonecomponent'>
        <img src={backgroundimg} alt="" />
        
        <div className="data">
            <div className="details">
                <h1>{name}</h1>
                <h3>{mainName}</h3>
            </div>
        </div>

        
    </div>
    </>
  )
}

export default AllInOneComp