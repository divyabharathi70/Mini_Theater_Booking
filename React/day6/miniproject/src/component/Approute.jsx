import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Allsport from '../pages/Allsport'
import Mens from '../pages/Mens'
import Women from '../pages/Women'
import Kids from '../pages/Kids'

const Approute = () => {
  return (
    <>
    <Routes>
    <Route path='/' element={<Allsport/>}/>
      <Route path='/men' element={<Mens/>}/>
        <Route path='/women' element={<Women/>}/>
          <Route path='/kids' element={<Kids/>}/>


    </Routes>
    
    </>
  )
}

export default Approute