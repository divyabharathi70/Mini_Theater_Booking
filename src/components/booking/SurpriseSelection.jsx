import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {surprises} from '../../datas/Surprises'

const SurpriseSelection = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const booking = location.state
  const [selectedSurprises, setSelectedSurprises] = useState([])
  const basePrice = booking?.totalPrice || 0
  let surprisePrice = 0

  for (let i = 0; i < selectedSurprises.length; i++) {
    surprisePrice += selectedSurprises[i].price
  }

  const totalPrice = basePrice + surprisePrice

  const handleSelect = (item) => {
    const alreadySelected = selectedSurprises.some(
      (selected) => selected.id === item.id
    )

    if (alreadySelected) {
      setSelectedSurprises(
        selectedSurprises.filter(
          (selected) => selected.id !== item.id
        )
      )
    } else {
      setSelectedSurprises([
        ...selectedSurprises,
        item,
      ])
    }
  }

  const handleNext = () => {
    navigate('/booking/review', {
      state: {
        ...booking,
        surprises: selectedSurprises,
        totalPrice: totalPrice,
      },
    })
  }

  const handleSkip = () => {
    navigate('/booking/review', {
      state: {
        ...booking,
        surprises: [],
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
          className="mt-4 rounded-lg bg-purple-600 px-6 py-2 text-white">
          Go to Home
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-purple-700">
          Add a Special Surprise
        </h1>

        <p className="mt-2 text-gray-600">
          Make your special moments unforgettable!
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
      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {surprises.map((item) => {
          const isSelected = selectedSurprises.some(
            (selected) => selected.id === item.id
          )

          return (
            <div
              key={item.id}
              className={`flex flex-col rounded-2xl border-2 bg-white p-6 shadow-md transition hover:shadow-xl ${
                isSelected
                  ? 'border-purple-600 bg-purple-50'
                  : 'border-gray-200'
              }`}
            >

              <div className="mb-4 text-center text-6xl">
                {item.emoji}
              </div>

              <h2 className="text-center text-xl font-bold">
                {item.name}
              </h2>

              <p className="mt-3 flex-grow text-center text-gray-600">
                {item.description}
              </p>

              <p className="mt-4 text-center text-xl font-bold text-purple-700">
                ₹{item.price}
              </p>

              <button
                onClick={() => handleSelect(item)}
                className={`mt-5 w-full rounded-xl p-3 font-semibold ${
                  isSelected
                    ? 'bg-purple-700 text-white'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                {isSelected ? '✓ Selected' : 'Add Surprise'}
              </button>

            </div>
          )
        })}

      </div>

      {/* Booking Summary */}
      <div className="mx-auto mt-8 max-w-5xl rounded-2xl bg-white p-6 shadow-lg">

        <h2 className="mb-4 text-xl font-bold">
          Booking Summary
        </h2>

        <div className="flex justify-between py-2">
          <span>Previous Booking Total</span>
          <span>₹{basePrice}</span>
        </div>

        {selectedSurprises.map((item) => (
          <div
            key={item.id}
            className="flex justify-between py-2 text-gray-600">
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))}

        <div className="flex justify-between border-t pt-4 text-xl font-bold text-purple-700">
          <span>Total Price</span>
          <span>₹{totalPrice}</span>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">

          <button
            onClick={handleSkip}
            className="w-full rounded-xl border-2 border-purple-600 p-3 font-semibold text-purple-700 hover:bg-purple-50">
            Skip Surprises
          </button>

          <button
            onClick={handleNext}
            className="w-full rounded-xl bg-purple-600 p-3 font-semibold text-white hover:bg-purple-700">
            Review Booking
          </button>
        </div>
      </div>
    </div>
  )
}

export default SurpriseSelection