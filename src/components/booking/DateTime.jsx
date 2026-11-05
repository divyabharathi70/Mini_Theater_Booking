import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const DateTime = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const room = location.state?.room ?? location.state

  const [date, setDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')

  const today = new Date()
  const minDate = `${today.getFullYear()}-${String(
    today.getMonth() + 1
  ).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`

  let duration = 0

  if (startTime && endTime) {
    const start = startTime.split(':')
    const end = endTime.split(':')

    const startMinutes = Number(start[0]) * 60 + Number(start[1])
    const endMinutes = Number(end[0]) * 60 + Number(end[1])

    if (endMinutes > startMinutes) {
      duration = (endMinutes - startMinutes) / 60
    }
  }

  const totalPrice = Math.round(room ? room.price * duration : 0)

  const handleNext = () => {
    if (!date || !startTime || !endTime) {
      alert('Please select the date, start time and end time')
      return
    }

    if (date < minDate) {
      alert('Please select today or a future date')
      return
    }

    if (duration <= 0) {
      alert('End time must be later than start time')
      return
    }

    navigate('/booking/theme', {
      state: {
        room: room,
        date: date,
        startTime: startTime,
        endTime: endTime,
        duration: duration,
        totalPrice: totalPrice,
      },
    })
  }

  if (!room || !room.id || !room.price) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold">
          Please select a room first.
        </h2>

        <button
          onClick={() => navigate('/')}
          className="mt-4 rounded-lg bg-purple-600 px-6 py-2 text-white">
          Go to Home
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      <h1 className="mb-8 text-center text-3xl font-bold text-purple-700">
        Book Your Theater
      </h1>

      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">

        <div className="rounded-2xl bg-white p-6 shadow-lg">

          <img
            src={room.image}
            alt={room.name}
            className="h-64 w-full rounded-xl object-cover"
          />

          <h2 className="mt-4 text-2xl font-bold">
            {room.name}
          </h2>

          <p className="mt-2 text-gray-600">
            Capacity: {room.capacity} people
          </p>

          <p className="mt-2 text-gray-600">
            Amenities: {room.amenities.join(', ')}
          </p>

          <p className="mt-4 text-lg font-semibold text-purple-700">
            ₹{room.price} / hour
          </p>

        </div>

        <div className="rounded-2xl bg-white p-6 shadow-lg">

          <h2 className="mb-6 text-2xl font-bold">
            Select Date & Time
          </h2>

          <div className="mb-5">
            <label className="mb-2 block font-medium">
              Booking Date
            </label>

            <input
              type="date"
              min={minDate}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-medium">
              Start Time
            </label>

            <input
              type="time"
              value={startTime}
              onChange={(e) => setStartTime(e.target.value)}
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div className="mb-5">
            <label className="mb-2 block font-medium">
              End Time
            </label>

            <input
              type="time"
              value={endTime}
              onChange={(e) => setEndTime(e.target.value)}
              className="w-full rounded-lg border p-3"
            />
          </div>

          <div className="mt-6 rounded-xl bg-purple-50 p-5">

            <div className="mb-3 flex justify-between">
              <span>Price per hour</span>
              <span>₹{room.price}</span>
            </div>

            <div className="mb-3 flex justify-between">
              <span>Duration</span>
              <span>
                {duration > 0 ? `${duration} hours` : '0 hours'}
              </span>
            </div>

            <div className="flex justify-between border-t border-purple-200 pt-3 text-lg font-bold">
              <span>Total Price</span>
              <span>₹{totalPrice}</span>
            </div>

          </div>

          <button
            onClick={handleNext}
            className="mt-6 w-full rounded-xl bg-purple-600 p-3 font-semibold text-white hover:bg-purple-700"
          >
            Next: Theme Selection
          </button>

        </div>

      </div>
    </div>
  )
}

export default DateTime