import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    const navigate =useNavigate()

    const [login,setLogin]=useState({email:"",password:""})


const handleChange=(e)=>{
setLogin({...login,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
    e.preventDefault()

    const data = JSON.parse(localStorage.getItem("mydata"))
//  console.log(data);

const findData =data.find((e)=>e.email===login.email && e.password===login.password)

console.log(findData);

if(!findData){
    alert("your  not a vaild user")
    return
}

localStorage.setItem("isActive",JSON.stringify(findData))

navigate("/home")

setLogin({email:"",password:""})

 
}


  return (
   <>
<form  onSubmit={handleSubmit}  className='flex flex-col  items-center justify-center space-y-4 p-4 max-w-md mx-auto mt-8 bg-gray-100 rounded-lg shadow-md'>

<input type="email"   placeholder='Enter the gmail'  onChange={handleChange} value={login.email} name='email'/>
<input type="passsword" placeholder='Enter the password' onChange={handleChange} value={login.password} name='password' />
<input type="submit" value="login" className='bg-black p-3  text-white w-50 rounded-2xl' />

</form>



</>


  )
}

export default Login