import React from 'react'
import Register from './Register'
import Login from './Login'
import { Route, Routes } from 'react-router-dom'

const Approutes = () => {
  return (
<>
   
   <Routes>

    <Route path='/' element={<Register/>}/>
    <Route path='/login' element={<Login/>}/>    


   </Routes>

</>  )
}

export default Approutes