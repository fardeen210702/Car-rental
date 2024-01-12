import React from 'react'


function SinglePage(state) {
  console.log(state,'state');
  return (
    <div>
      <h1>{state.car}</h1>
      {/* <h2>{pick}</h2>
      <h3>{drop}</h3> */}
    </div>
  )
}

export default SinglePage