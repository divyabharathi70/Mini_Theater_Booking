import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Register from './Register'
import Login from './Login'
import Home from './Home'


const Approutes = () => {
  return (
<>
  <Routes>

    

  <Route  path='/' element={<Register/>}/>
    <Route  path='/login' element={<Login/>}/>
    <Route  path='/home' element={<Home/>}/>





  </Routes>

</>  )
}

export default Approutes