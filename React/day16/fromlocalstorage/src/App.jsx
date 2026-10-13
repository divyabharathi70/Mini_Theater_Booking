import React, { useState } from 'react'
import Register from './Register'

const App = () => {
 const [obj,setObj] = useState({name:"",email:"",age:""})
 const [show,setShow] = useState([])

const handleChange = (e) => {
  const {name,value} = e.target 
  const newObj = {...obj,[name]:value}
  setObj(newObj)                            
}

const handleSubmit = (e) => {
  e.preventDefault()
const takeobj = {...obj}
const addobj =[...show,takeobj]

setShow(addobj)
localStorage.setItem("data",JSON.stringify(addobj))

setObj({name:"",email:"",age:""})
}



  return (
    <>
    <form onSubmit={handleSubmit}>



  <input type ="text" name="name" placeholder="Enter the Name"  onChange={handleChange} value={obj.name}/>
    <input type ="email" name="email" placeholder="Enter the email" onChange={handleChange} value={obj.email} />
  <input type ="age" name="age" placeholder="Enter the age" onChange={handleChange} value={obj.age} />


  <input type ="submit" value="Register" /> 

  
  


  </form>

  <div>
    {show.map((e,i) => (
      <div key={i+1}>
        <p>Name: {e.name}</p>
        <p>Email: {e.email}</p>
        <p>Age: {e.age}</p>
      </div>
    ))}
  </div>
    
    </>
  )
}

export default App