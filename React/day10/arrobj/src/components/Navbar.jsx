import React from 'react'
import { Link } from 'react-router-dom'
import Approutes from '../Approute/Approutes'

const Navbar = () => {
  return (
<>
 <div className='bg-gray-800 flex  p-3 gap-3  text-white items-center justify-evenly'>
    <div>
        REACT TASK
    </div>

    <div  className=' flex gap-10  text-white'>
        <Link to={"/"} >Array</Link>
         <Link to={"/obj"}>Object</Link>
         <Link to={"/toogle"}>Toogle</Link>

    </div>
 </div>
<Approutes/>
</>
  )
}

export default Navbar