import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Arrupdate from '../pages/Arrupdate'
import Objupdate from '../pages/Objupdate'
import Toogle from '../pages/Toogle'

const Approutes = () => {
  return (
<>
    <Routes>

     <Route path="/" element={<Arrupdate/>}/>
       <Route path="/obj" element={<Objupdate/>}/>
         <Route path="/toogle" element={<Toogle/>}/>
         

    </Routes>
</>
  )
}

export default Approutes