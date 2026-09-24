import React from 'react'
import Senddata from './Senddata'

const Navbar = () => {
  return (
<>
<div className='bg-amber-200 flex justify-evenly p-3'>


<div>
    LOGO

</div>

<div className='flex gap-2'>

    <a href="http://">Home</a>
        <a href="http://">about</a>
    <a href="http://">help</a>

</div>

</div>

<Senddata/>
</>  )
}

export default Navbar