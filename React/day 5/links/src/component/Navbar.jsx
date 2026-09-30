import React from 'react'
import { Link } from 'react-router-dom'
import Approute from '../approutes/Approute'

const Navbar = () => {
  return (<>
  <div className='bg-gray-700 text-white flex p-5 justify-evenly items-center'>
    <div>
        LOGO
    </div>
    <div className='flex gap-10'>

<Link to="/">Home</Link>
<Link to="/about">About</Link>
<Link to="/help">Help</Link>
<Link to="/details">Details</Link>
<Link to="/login">Login</Link>
<Link to="/register">Register</Link>



    </div>
  </div>
  <Approute/>
  
  </>)
}

export default Navbar