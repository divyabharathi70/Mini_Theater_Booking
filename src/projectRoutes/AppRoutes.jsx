import { Route, Routes } from "react-router-dom"
import Customization from "../components/booking/Customization"
import SurpriseSelection from "../components/booking/SurpriseSelection"
import ThemeSelection from "../components/booking/ThemeSelection"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import Home from "../pages/home/Home"
import DateTime from "../components/booking/DateTime"
import BookingReview from "../components/booking/BookingReview"

const AppRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booking" element={<DateTime />} />
        <Route path="/booking/theme" element={<ThemeSelection />} />
        <Route path="/booking/Customization" element={<Customization />} />
        <Route path="/booking/surprises" element={<SurpriseSelection />} />
        <Route path="/booking/review" element={<BookingReview />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
      </Routes>
    </div>
  )
}

export default AppRoutes