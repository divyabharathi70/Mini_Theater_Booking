import React, { useState } from 'react'

const Count = () => {
        const[count,setCount]=useState(0)
    
    
const handleClike=()=>{

    setCount((p)=>p+1)
}
  return (

<>
<h1>{count}</h1>
      <button on onClick={handleClike}>click count</button>

</>)
}

export default Count