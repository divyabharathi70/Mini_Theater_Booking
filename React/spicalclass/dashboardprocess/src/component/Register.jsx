import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Register = () => {

    const [registerData, setRegisterData] = useState({  username: '',email: '', password: '' });
 const navigate = useNavigate()

const handleChange = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
}

const handleSubmit = (e) => {
    e.preventDefault();

const getdata = JSON.parse(localStorage.getItem('mydata')) || [];
const obj = {userid:Date.now(),name:registerData.username,email:registerData.email,password:registerData.password}
getdata.push(obj)

localStorage.setItem("mydata", JSON.stringify(getdata))
alert("regiter sucessfully")
setRegisterData({  username: '',email: '', password: '' })
setTimeout(()=>{
    navigate('/login')
},2000)
}


  return (
<>

   <form  onSubmit={handleSubmit} className='flex flex-col space-y-4 p-4 max-w-md mx-auto mt-8 bg-gray-100 rounded-lg shadow-md'>
<input  type="text" placeholder="Username" name="username" value={registerData.username} onChange={handleChange}/>
<input type="email" placeholder="Email" name="email" value={registerData.email} onChange={handleChange}/>
<input type="password" placeholder="Password" name="password" value={registerData.password} onChange={handleChange}/>
<button type="submit">Register</button>

   </form>

</>  )
}

export default Register