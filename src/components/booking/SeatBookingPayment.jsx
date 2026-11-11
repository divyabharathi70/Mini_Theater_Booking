import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

function SeatBookingPayment() {
  const location = useLocation()
  const navigate = useNavigate()
  const [paid, setPaid] = useState(false)
  const booking = location.state
  const user = JSON.parse(localStorage.getItem('currentUser') || 'null')

  if (!booking?.room || !booking?.seats?.length) {
    return <div className="p-10 text-center"><h1 className="text-2xl font-bold">Seat booking details not found.</h1><button onClick={() => navigate('/rooms')} className="mt-5 rounded-lg bg-[#3D4F62] px-5 py-3 text-[#F8FAFC]">Back to rooms</button></div>
  }

  const total = booking.seats.length * booking.room.price

  function payNow() {
    if (!user) {
      navigate('/login')
      return
    }
    const bookings = JSON.parse(localStorage.getItem('seatBookings') || '[]')
    const savedBooking = {
      id: Date.now(),
      roomId: booking.room.id,
      roomName: booking.room.name,
      seats: booking.seats,
      pricePerSeat: booking.room.price,
      showDate: booking.showDate,
      showTime: booking.showTime,
      user: { id: user.id, name: user.name, email: user.email },
      userName: user.name,
      userEmail: user.email,
      totalPrice: total,
      bookingId: Date.now(),
      date: booking.showDate,
      paidDate: new Date().toLocaleDateString(),
      status: 'Paid',
      paymentStatus: 'Payment Successful',
    }
    localStorage.setItem('seatBookings', JSON.stringify([...bookings, savedBooking]))
    setPaid(true)
  }

  return <main className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-6">
    <section className="w-full max-w-lg rounded-2xl bg-[#F8FAFC] p-8 shadow-lg">
      {paid ? <>
        <h1 className="text-3xl font-bold text-[#3D4F62]">Payment successful!</h1>
        <p className="mt-2 text-[#3D4F62]">Your booking receipt</p>
        <div className="my-6 space-y-3 rounded-xl bg-[#F8FAFC] p-5"><p><strong>Customer:</strong> {user?.name}</p><p><strong>Email:</strong> {user?.email}</p><p><strong>Room:</strong> {booking.room.name}</p><p><strong>Seats:</strong> {booking.seats.join(', ')}</p><p><strong>Show date:</strong> {booking.showDate}</p><p><strong>Show time:</strong> {booking.showTime}</p><p><strong>Paid on:</strong> {new Date().toLocaleDateString()}</p><p className="border-t border-[#3D4F62] pt-3 text-xl font-bold"><strong>Amount paid:</strong> ₹{total}</p></div>
        <button onClick={() => navigate('/mybookings')} className="w-full rounded-lg bg-[#3D4F62] p-3 font-semibold text-[#F8FAFC]">View my bookings</button>
      </> : <>
        <h1 className="text-3xl font-bold text-[#3D4F62]">Seat booking payment</h1>
        <div className="my-6 space-y-3 rounded-xl bg-[#F8FAFC] p-5">
          <p><strong>Room:</strong> {booking.room.name}</p>
          <p><strong>Seats:</strong> {booking.seats.join(', ')}</p>
          <p><strong>Show date:</strong> {booking.showDate}</p>
          <p><strong>Price per seat:</strong> ₹{booking.room.price}</p>
          <p className="border-t border-[#3D4F62] pt-3 text-xl font-bold"><strong>Total:</strong> ₹{total}</p>
        </div>
        <button onClick={payNow} className="w-full rounded-lg bg-[#3D4F62] p-3 font-semibold text-[#F8FAFC] hover:bg-[#3D4F62]">Pay now · ₹{total}</button>
        <button onClick={() => navigate('/rooms')} className="mt-3 w-full rounded-lg border p-3 font-semibold">Back to rooms</button>
      </>}
    </section>
  </main>
}

export default SeatBookingPayment
