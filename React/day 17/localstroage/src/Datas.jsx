import React, { useEffect, useState } from 'react'

const Datas = () => {

    const [data ,setData]=useState({username:"",useremail:"",userage:""})
    const [storedata,setStoredata]=useState([])

const handleChange=(e)=>{
    setData({...data,[e.target.name]:e.target.value})
}

const handleClick=(e)=>{
    e.preventDefault()
  const getData = JSON.parse(localStorage.getItem("demodata")) || []
    const obj ={userid:Date.now(),name:data.username,email:data.useremail,age:data.userage}
 
    getData.push(obj)

// console.log(obj);

const change = JSON.stringify(getData)

localStorage.setItem("demodata",change)
console.log(obj);
setData({username:"",useremail:"",userage:""})
alert("data stored successfully")
}

const getdat =()=>{

  const get =localStorage.getItem("demodata")

   const change = JSON.parse(get)
// console.log(change);
setStoredata(change)
}

useEffect(()=>{
  getdat()
},[data])


  return (
    <>
    <form >
    <input  type="text" placeholder='name' value={data.username} onChange={handleChange} name='username'/>
    <input type="email" placeholder='email' value={data.useremail} onChange={handleChange} name='useremail'/>
    <input type="age" placeholder='age' value={data.userage} onChange={handleChange} name='userage'/>
    <button onClick={handleClick}> Submit</button>
    </form>
    <div>
      {storedata.map((item)=>{
        return(
          <div className='bg-gray-200 p-4 m-2' key={item.userid}>
            <h1>{item.name}</h1>
            <h1>{item.email}</h1>
            <h1>{item.age}</h1>
          </div>
        )
      })}

    </div>
    </>
  )
}

export default Datas