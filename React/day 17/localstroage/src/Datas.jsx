import React, { useState } from 'react'

const Datas = () => {

    const [data ,setData]=useState({name:"",email:"",age:""})

const handleChange=(e)=>{
    e.preventdefault()
    setData({...data,[e.target.name]:e.target.value})
}


  return (
    <>
    <form >
    <input type="text" placeholder='name' value={data.name} onChange={handleChange} name='name'/>
    <input type="text" placeholder='email' value={data.email} onChange={handleChange} name='email'/>
    <input type="text" placeholder='age' value={data.age} onChange={handleChange} name='age'/>

    </form>
    </>
  )
}

export default Datas