import React, { useState } from 'react'

const Objupdate = () => {

  const [obj,setObj]=useState({name:"gokul",age:22})
   
const handelclick=()=>{
    
const copy={...obj,name:"paramesh",age:16}
setObj(copy)
}

  return (
    <>
 <div className='bg-olive-600 p-10 h-100 flex justify-center items-center'>
<div className='flex gap-5 flex-col text-center'>
  <h1>
    {obj.name}
 
  </h1>
  <h1>  {obj.age}</h1>

  <button  className='bg-black rounded-2xl p-2 text-white'onClick={handelclick}>click me</button>
</div>

 </div>
        

    </>
  )
}

export default Objupdate