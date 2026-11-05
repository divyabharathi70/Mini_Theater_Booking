import React, { useState } from 'react'

const Counter = () => {
const [count,setCount]=useState(0)

const handleClikc=()=>{

setCount(count+1)

}


  return (
<>
<h1>{count}</h1>
<button onClick={handleClikc}>click to add </button>

</>  )
}

export default Counter