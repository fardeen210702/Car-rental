import React from 'react'
import { FaRegStar, FaRegStarHalfStroke,FaStar  } from "react-icons/fa6";

function Rating({rating}) {
  const starRating = Array.from({length:5},(_,index)=>{
const num = index+0.5;
return <span className='rating'>
  {
    rating >= index+1 ? (<FaStar/>): rating>= num ? (<FaRegStarHalfStroke/>) :(<FaRegStar/>)
    
  }
</span>
  })


  return (
    <div className='star'>{starRating
      }</div>
  )
}

export default Rating