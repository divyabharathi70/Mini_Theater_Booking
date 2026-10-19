import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {

const navigate=useNavigate()
const [userdata,setUserdata]=useState({})


const get =()=>{

const data = JSON.parse(localStorage.getItem("isActive"))

if (!get) {

  alert("not valid user pls login")
  
}

setUserdata(data)


}

useEffect(()=>{
  get()
},[])


  return (
<>

 <div className='flex justify-between items-center p-4 bg-gray-800 text-white'>
 
 <div>
  logo
 </div>

 <div className='flex space-x-4'>
    
    < a href="/register">login</a>
        < a href="/register">Register</a>


  </div>


 </div>

<div>

<h1>{userdata.userid}</h1>
<h1>{userdata.email}</h1>

</div>


</>  )
}

export default Home