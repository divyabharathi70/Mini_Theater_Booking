import React, { useEffect, useRef, useState } from 'react'
import CreateContex from '../create/CreateContex'

const Provide = ({children}) => {
 const [count,setCount]=useState(0)

 const handleClick=()=>{
setCount((p)=>p+1)

 }

 const [counter,setCounter]=useState(0)

 useEffect(()=>{
   
    const counterr = setInterval(() => {

        setCounter((p)=>p+1)
         
    },1000);

    return ()=> clearInterval(counterr)

})
  
const startref =useRef("")
// const stoptref =useRef("")


const handleStart =()=>{
        startref.current.style.backgroundColor="blue"

    startref.current.innerHTML="hello world"

}
const handleStop =()=>{
     startref.current.innerHTML=""
}


 const data ={name:"GOKUL",age:21,subject:"react"}

 const isActive = "true"

  return (
<>

<CreateContex value={{count, handleClick,data,isActive ,counter ,handleStart,startref,handleStop}}>
    {children}
</CreateContex>



</>  )
}

export default Provide