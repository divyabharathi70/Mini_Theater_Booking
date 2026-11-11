
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { notify } from '../UiNotice'

const BookingReview = () => {

  const location = useLocation()
  const navigate = useNavigate()

  const booking = location.state

  const [paymentDone, setPaymentDone] = useState(false)
  const [savedBookingId, setSavedBookingId] = useState(null)

  const currentUser = JSON.parse(
    localStorage.getItem('currentUser')
  )

  if (!booking?.room) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold">
          Booking details not found.
        </h2>

        <button
          onClick={() => navigate('/')}
          className="mt-4 rounded-lg bg-[#3D4F62] px-6 py-2 text-[#F8FAFC]"
        >
          Go to Home
        </button>
      </div>
    )
  }

  const room = booking.room

  const roomPrice = Math.round(
    room.price * (booking.duration || 0)
  )

  const themePrice = booking.theme ? booking.theme.price : 0
  let customizationPrice = 0

  if (booking.customizations) {
    for (let i = 0; i < booking.customizations.length; i++) {
      customizationPrice += booking.customizations[i].price
    }
  }

  let surprisePrice = 0

  if (booking.surprises) {
    for (let i = 0; i < booking.surprises.length; i++) {
      surprisePrice += booking.surprises[i].price
    }
  }

  const totalPrice =
    roomPrice + themePrice + customizationPrice + surprisePrice


  const handlePayment = () => {
    if (!currentUser) {
      notify('Please login before making a payment.')
      navigate('/login')
      return
    }

    const savedBookings = JSON.parse(
      localStorage.getItem('bookings') || '[]'
    )

    const newBooking = {
      bookingId: currentUser.id,
      user: {
        id: currentUser.id,
        name: currentUser.name,
        email: currentUser.email
      },
      ...booking,
      totalPrice: totalPrice,
      status: 'Paid',
      paymentStatus: 'Payment Successful'
    }

    localStorage.setItem(
      'bookings',
      JSON.stringify([...savedBookings, newBooking])
    )

    setSavedBookingId(newBooking.bookingId)
    setPaymentDone(true)

  }

  if(paymentDone) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] p-6">
        <div className="w-full max-w-lg rounded-2xl bg-[#F8FAFC] p-10 text-center shadow-xl"> 
          <h1 className="text-3xl font-bold text-[#3D4F62]">
            Payment Successful!
          </h1>

          <p className="mt-4 text-[#3D4F62]">
            Your theater booking has been confirmed.
          </p>

          <div className="mt-6 rounded-xl bg-[#F8FAFC] p-5">
            <p className="text-[#3D4F62]">
              Booking ID
            </p>

            <p className="mt-1 text-xl font-bold">
              BK{savedBookingId}
            </p>

            <p className="mt-4 text-[#3D4F62]">
              Amount Paid
            </p>

            <p className="mt-1 text-2xl font-bold text-[#3D4F62]">
              ₹{totalPrice}
            </p>
          </div>

          <button
            onClick={() => navigate('/')}
            className="mt-6 w-full rounded-xl bg-[#3D4F62] p-3 font-semibold text-[#F8FAFC] hover:bg-[#3D4F62]"
          >
            Back to Home
          </button>

        </div>

      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 md:p-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#3D4F62]">
          Review Your Booking
        </h1>
        <p className="mt-2 text-[#3D4F62]">
          Check your selections before completing your booking.
        </p>
      </div>


      <div className="mx-auto max-w-4xl space-y-6">
        <div className="rounded-2xl bg-[#F8FAFC] p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-bold">
            Selected Theater
          </h2>

          <div className="grid gap-5 sm:grid-cols-2">
            <img
              src={room.image}
              alt={room.name}
              className="h-56 w-full rounded-xl object-cover"
            />

            <div className="space-y-3">
              <h3 className="text-2xl font-bold">
                {room.name}
              </h3>

              <p>Capacity: {room.capacity} people</p>
              <p>Price per hour: ₹{room.price}</p>
              <p>Booking date: {booking.date}</p>
              <p>Start time: {booking.startTime}</p>
              <p>End time: {booking.endTime}</p>
              <p>Duration: {booking.duration} hours</p>
            </div>
          </div>
        </div>


        <div className="rounded-2xl bg-[#F8FAFC] p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-bold">
            Selected Theme
          </h2>
          {booking.theme ? (
            <div className="flex justify-between gap-4">
              <span>{booking.theme.name}</span>
              <span className="font-semibold">
                ₹{themePrice}
              </span>
            </div>
          ) : (
            <p className="text-[#3D4F62]">
              No theme selected
            </p>
          )}

        </div>


        <div className="rounded-2xl bg-[#F8FAFC] p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-bold">
            Selected Customizations
          </h2>
          {booking.customizations?.length > 0 ? (
            booking.customizations.map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-4 py-2"
              >
                <span>{item.name}</span>
                <span className="font-semibold">
                  ₹{item.price}
                </span>
              </div>
            ))

          ) : (

            <p className="text-[#3D4F62]">
              No customizations selected
            </p>

          )}

        </div>


        <div className="rounded-2xl bg-[#F8FAFC] p-6 shadow-lg">
          <h2 className="mb-4 text-xl font-bold">
            Selected Surprises
          </h2>

          {booking.surprises?.length > 0 ? (
            booking.surprises.map((item) => (
              <div
                key={item.id}
                className="flex justify-between gap-4 py-2"
              >
                <span>{item.name}</span>
                <span className="font-semibold">
                  ₹{item.price}
                </span>
              </div>
            ))

          ) : (

            <p className="text-[#3D4F62]">
              No surprises selected
            </p>

          )}

        </div>


        <div className="rounded-2xl bg-[#F8FAFC] p-6 shadow-lg">

          <h2 className="mb-4 text-xl font-bold">
            Price Summary
          </h2>

          <div className="flex justify-between py-2">

            <span>
              Room Price ({booking.duration} hours)
            </span>
            <span>₹{roomPrice}</span>
          </div>

          <div className="flex justify-between py-2">
            <span>Theme Price</span>
            <span>₹{themePrice}</span>
          </div>

          <div className="flex justify-between py-2">
            <span>Customization Price</span>
            <span>₹{customizationPrice}</span>
          </div>

          <div className="flex justify-between py-2">
            <span>Surprise Price</span>
            <span>₹{surprisePrice}</span>
          </div>

          <div className="mt-4 flex justify-between border-t border-[#3D4F62] pt-4 text-2xl font-bold text-[#3D4F62]">
            <span>Total Amount</span>
            <span>₹{totalPrice}</span>
          </div>

          <button
            onClick={handlePayment}
            className="mt-6 w-full rounded-xl bg-[#3D4F62] p-4 text-lg font-bold text-[#F8FAFC] hover:bg-[#3D4F62]"
          >
            Pay Now — ₹{totalPrice}
          </button>

          <p className="mt-3 text-center text-sm text-[#3D4F62]">
            Demo payment for your frontend project.
          </p>
        </div>
      </div>
    </div>
  )
}

export default BookingReview
