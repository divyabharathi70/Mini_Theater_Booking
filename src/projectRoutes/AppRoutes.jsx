import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import Customization from "../components/booking/Customization"
import SurpriseSelection from "../components/booking/SurpriseSelection"
import ThemeSelection from "../components/booking/ThemeSelection"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import Home from "../pages/home/Home"
import Rooms from "../pages/home/Rooms"
import DateTime from "../components/booking/DateTime"
import BookingReview from "../components/booking/BookingReview"
import Feedback from "../components/feedback/FeedBack"
import About from "../components/about/About"
import Profile from "../pages/auth/profile"
import MyBookings from "../components/booking/MyBooking"
import Admin from "../pages/admin/Admin"
import SeatBookingPayment from "../components/booking/SeatBookingPayment"
import SeatSelection from "../components/booking/SeatSelection"
import CustomerNavbar from "../components/CustomerNavbar"

const AppRoutes = () => {
  const location = useLocation()
  const isPrivatePage = ['/login', '/signup', '/admin'].includes(location.pathname)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <div>
      {!isPrivatePage && <CustomerNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/rooms/whole" element={<Rooms />} />
        <Route path="/rooms/seats" element={<Rooms />} />
        <Route path="/rooms/seats/:roomId" element={<SeatSelection />} />
        <Route path="/booking" element={<DateTime />} />
        <Route path="/booking/theme" element={<ThemeSelection />} />
        <Route path="/booking/Customization" element={<Customization />} />
        <Route path="/booking/surprises" element={<SurpriseSelection />} />
        <Route path="/booking/review" element={<BookingReview />} />
        <Route path="/seat-booking/payment" element={<SeatBookingPayment />} />
        <Route path="/mybookings" element={<MyBookings/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default AppRoutes
