import { Route, Routes } from "react-router-dom"
import Booking from "./components/booking/Booking"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import Home from "./pages/home/Home"

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bookroom" element={<Booking />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
      {/* <Route path="*" element={<Home />} /> */}
    </Routes> 
  )
}

export default App