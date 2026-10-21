import React, { useRef } from 'react'

const Timer = () => {

   const counter =useRef(0)
   let timeref = null
   const newValue =useRef(0)
   const handleStart =()=>{
     timeref =setInterval(()=>{

       const data = newValue.current +=1
       counter.current.innerHTML=data

     },1000)
    

     
   }

   const handleStop=()=>{

    clearInterval(timeref)

   }
  return (
<>
<h1 ref={counter}>0</h1>
<button onClick={handleStart}>Start</button>  
<button onClick={handleStop}>Stop</button>  


</>  )
}

export default Timer