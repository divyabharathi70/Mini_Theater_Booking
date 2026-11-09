import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {themes} from '../../datas/Themes.js'

const ThemeSelection = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const booking = location.state
  const [selectedTheme, setSelectedTheme] = useState(null)
  const basePrice = booking?.totalPrice || 0
  const totalPrice = basePrice + (selectedTheme?.price || 0)

  const handleNext = () => {
    if (!selectedTheme) {
      alert('Please select a theme or skip this step')
      return
    }

    navigate('/booking/Customization', {
      state: {
        ...booking,
        theme: selectedTheme,
        totalPrice: totalPrice,
      },
    })
  }

  const handleSkip = () => {
    navigate('/booking/Customization', {
      state: {
        ...booking,
        theme: null,
        totalPrice: basePrice,
      },
    })
  }

  if (!booking?.room) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold">
          Please select a room and booking time first.
        </h2>

        <button
          onClick={() => navigate('/')}
          className="mt-4 rounded-lg bg-purple-600 px-6 py-2 text-white"
        >
          Go to Home
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-purple-700">
          Choose Your Theme
        </h1>

        <p className="mt-2 text-gray-600">
          Make your theater experience special with a perfect theme.
        </p>
      </div>

      <div className="mx-auto mb-8 max-w-5xl rounded-xl bg-white p-5 shadow">

        <h2 className="text-xl font-bold">
          {booking.room.name}
        </h2>

        <div className="mt-3 flex flex-wrap gap-4 text-gray-600">
          <p>Date: {booking.date}</p>

          <p>Start: {booking.startTime}</p>

          <p>End: {booking.endTime}</p>

          <p>Duration: {booking.duration} hours</p>
        </div>

        <p className="mt-3 font-semibold">
          Room Booking Price: ₹{basePrice}
        </p>

      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {themes.map((theme) => (
          <div
            key={theme.id}
            className={`flex flex-col rounded-2xl border-2 bg-white p-6 shadow-md transition hover:shadow-xl ${
              selectedTheme?.id === theme.id
                ? 'border-purple-600 bg-purple-50'
                : 'border-gray-200'
            }`}
          >

            <div className="mb-4 text-center text-6xl">
              {theme.emoji}
            </div>

            <h2 className="text-center text-xl font-bold">
              {theme.name}
            </h2>

            <p className="mt-3 flex-grow text-center text-gray-600">
              {theme.description}
            </p>

            <p className="mt-4 text-center text-xl font-bold text-purple-700">
              ₹{theme.price}
            </p>

            {/* Select Button */}
            <button
              onClick={() => setSelectedTheme(theme)}
              className={`mt-5 w-full rounded-xl p-3 font-semibold transition ${
                selectedTheme?.id === theme.id
                  ? 'bg-purple-700 text-white'
                  : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
              }`}
            >
              {selectedTheme?.id === theme.id
                ? '✓ Selected'
                : 'Select Theme'}
            </button>

          </div>
        ))}

      </div>

      <div className="mx-auto mt-8 max-w-5xl rounded-2xl bg-white p-6 shadow-lg">

        <h2 className="mb-4 text-xl font-bold">
          Booking Summary
        </h2>

        <div className="flex justify-between py-2">
          <span>Room Booking</span>
          <span>₹{basePrice}</span>
        </div>

        <div className="flex justify-between py-2">
          <span>
            Theme {selectedTheme ? `(${selectedTheme.name})` : ''}
          </span>

          <span>
            ₹{selectedTheme ? selectedTheme.price : 0}
          </span>
        </div>

        <div className="mt-3 flex justify-between border-t pt-4 text-xl font-bold text-purple-700">
          <span>Total Price</span>
          <span>₹{totalPrice}</span>
        </div>

        {/* Navigation Buttons */}
        <div className="mt-6 flex flex-col gap-4 sm:flex-row">

          <button
            onClick={handleSkip}
            className="w-full rounded-xl border-2 border-purple-600 p-3 font-semibold text-purple-700 hover:bg-purple-50"
          >
            Skip Theme
          </button>

          <button
            onClick={handleNext}
            disabled={!selectedTheme}
            className="w-full rounded-xl bg-purple-600 p-3 font-semibold text-white hover:bg-purple-700 disabled:cursor-not-allowed disabled:bg-gray-400"
          >
            Next: Customization
          </button>

        </div>

      </div>

    </div>
  )
}

export default ThemeSelection