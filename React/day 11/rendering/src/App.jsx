import React, { useState } from 'react'

const App = () => {
 const [arrobj,setArr]=useState([{name:"Yamaha",age:4},{name:"BMW",age:6}
  ,{name:"AUDI",age:7}
 ])

 const handleClick =()=>{

    const copy=[...arrobj,{name:"Benz",age:9}]
    setArr(copy)

 }

 const handleChange=()=>{

     setArr((prev)=>[...prev].map((e)=>e.name=="AUDI"?{...e,name:"Baleno",age:12}:e))


 }



  return (
  <>
  <div>
  {arrobj.map((e,i)=>(
    <div key={i+1}>
        <h2>{e.name}</h2>
        <p>{e.age}</p>
    </div>

  ))}

  <button onClick={handleClick}>Click to add</button>
  <button onClick={handleChange}>Click to update</button>

  </div>
  </>
  )
}

export default App