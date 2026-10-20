import React, { useState } from 'react'

const useCounter = (initvalue=0,step=1) => {

    const [count,SetCount]=useState(initvalue)

const increment=()=>{
   SetCount((p)=>p+step)
}
const decrement=()=>{
       SetCount((p)=>p-step)

}
const reset=()=>{
       SetCount(initvalue)

}

return{count,increment,decrement,reset}
}

export default useCounter