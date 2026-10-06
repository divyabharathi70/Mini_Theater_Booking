import React, { useState } from 'react'

const Arrupdate = () => {
const[arr,setArr]=useState(["gokul","harish","lokesh"])

const update =(data)=>{

const copy=[...arr,data]
 setArr(copy)

}




// const updatearr=()=>{
//  const copy=[...arr]
//  copy[2]=100
//  setArr(copy)


// }

  return (
  
<>
 {/* <div className='bg-blue-400   p-3 gap-3  text-white flex flex-col justify-center items-center  '>
 {arr.map((e,i)=>(
  <h1 key={i+1}>{e}</h1>
 ))}
  <div>
    <button onClick={updatearr}>Click Me</button>
  </div>
 </div> */}

<div className='bg-blue-400   p-3 gap-3  text-white flex flex-col justify-center items-center'>

<div  className='flex  flex-col gap-3 justify-center items-center'>
  {arr.map((e,i)=>(
     <h1 className='bg-gray-600 text-center p-2 rounded-2xl'   key={i+1}>{e}</h1>
  ))}
   
   <button className='bg-black text-center text-white p-3 rounded-2xl' onClick={()=>update("paramesh")}  >UPDATE</button>

</div>

</div>



</>


  )
}

export default Arrupdate


