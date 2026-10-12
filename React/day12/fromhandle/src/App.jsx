import React, { useState } from 'react'

const App = () => {
const [data,setData] =useState({username:"",userage:"",useremail:"",userpassword:""})
const [show,setShow] =useState([])




const handleChange =(e)=>{
// setData(e.target.name)
// const value =e.target.value
// const key =e.target.name

// const update ={...data,[key]:value}

setData((p)=>({...p,[e.target.name]:e.target.value}))

  
}
// on submit


const handleSubmit = (e) => {
  e.preventDefault();

  setShow((p) => [...p, data]);

  alert("Successfully done!");

  setData({
    username: "",
    userage: "",
    useremail: "",
    userpassword: ""
  });
};


  return (
    <>
    <div className='bg-white p-10 gap-10 flex justify-center items-center'> 
   
   <form  onSubmit={handleSubmit} className='bg-gray-300 p-6 flex flex-col gap-5 w-100 justify-center items-center text-center' >
    <input  onChange={handleChange} value={setData.username} name='username' type="text" placeholder='Enter the name'  className=' bg-white border-black p-2 rounded-2xl' />
    <input onChange={handleChange} value={setData.userage} name='userage' type="age"  placeholder='Enter the age' className=' bg-white border-black p-2 rounded-2xl'/>
    <input onChange={handleChange} value={setData.useremail} name='useremail' type="email" placeholder='Enter the email' className=' bg-white border-black p-2 rounded-2xl'  />
    <input  onChange={handleChange} value={setData.userpassword} name='userpassword' type="password" placeholder='Enter the password' className=' bg-white border-black p-2 rounded-2xl' />
  
    <input type="submit" value="Register"  className='bg-amber-300 text-center p-3 rounded-2xl'/>

   </form>

   <table className='border-gray-600 table-auto w-300  border-cokkapse border gap-3' >
    <thead>
      <tr>
            <th className='border border-gray-500'>S.no</th>
             <th className='border border-gray-500'>username</th>
            <th className='border border-gray-500'>userage</th>
            <th className='border border-gray-500'>useremail</th>

      </tr>
    </thead>
    <tbody>
          {show.map((e,i)=>(
               <tr key={i+1} className='text-center'>
                <td className='border border-gray-500'>{i+1}</td>
                  <td className='border border-gray-500'>{e.username}</td>
                 <td className='border border-gray-500'>{e.userage}</td>
                 <td className='border border-gray-500'>{e.useremail}</td>


               </tr>
          ))}   
    </tbody>
   </table>

    </div>
    </>
  
  )
}

export default App