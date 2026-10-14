import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [timer,setTimer]=useState(0)

useEffect(()=>{
  
    const timerr = setInterval(() => {

        setTimer((p)=>p)
        
    },1000);

    return ()=> clearInterval(timerr)

})

  return (
<>
 <div>
  
<h1>{timer}</h1>
 </div>

</>  )
}

export default Timer