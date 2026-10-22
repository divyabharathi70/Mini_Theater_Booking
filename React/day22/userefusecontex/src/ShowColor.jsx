import React, { useRef } from 'react'

const ShowColor = () => {

    const showref =useRef(null)


     const handleon=()=>{
       
       showref.current.style.backgroundColor = "yellow" 
     }
       const handeloff=()=>{

               showref.current.style.backgroundColor = "white" 

     }
  return (

<>
<h1 ref={showref}>color</h1>

 <button onClick={handleon}>On</button>
 <button onClick={handeloff}>off</button>
</>)
}

export default ShowColor