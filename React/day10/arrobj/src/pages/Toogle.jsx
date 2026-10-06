import React, { useState } from 'react'

const Toogle = () => {
    
const[toogle,setToogle]=useState()

const hideshow=()=>{
  setToogle(!toogle)
}


  return (
    <>
    <div className='bg-amber-100  items-center gap-30 justify-center h-30 p-2 text-black  '>

      <button  className='bg-blue-50 rounded-2xl p-2 gap-30 items-center justify-center'onClick={hideshow}>click to change</button>
       
       {toogle && (<p className='bg-amber-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, obcaecati eaque.
         Dolorem molestias doloribus quaerat, architecto ipsam obcaecati repudiandae, </p>

)}
        
    </div>
    
    </>
  )
}

export default Toogle


