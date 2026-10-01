import React from 'react'
import { Link, Links, Routes } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
   <div className='bg-gray-700 p-3 text-white flex justify-between items-center'>
      <div className=' flex gap-6'>
     <Link to={"/"}>All sports</Link>
     <Link to={"/men"}>Mens</Link>
      <Link to={"/women"}>Womens</Link>
       <Link to={"/kids"}>Kids</Link>

     </div>

   <div>
    <Link to={"/dev"}>Devivery to chennai</Link>
   </div>

   </div>

    </>
  )
}

export default Navbar