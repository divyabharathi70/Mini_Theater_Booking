import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import Details from '../Pages/Details'
import Help from '../Pages/Help'
import About from '../Pages/About'
import Login from '../Pages/Login'
import Resgiter from '../Pages/Resgiter'

const Approute = () => {
  return (
<>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/help" element={<Help/>}/>
<Route path="/details" element={<Details/>}/>
<Route path="/login" element={<Login/>}/>

<Route path="/register" element={<Resgiter/>}/>



</Routes>

</>  )
}

export default Approute