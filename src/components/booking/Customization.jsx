import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const customizations = [
  {
    id: 1,
    name: 'LED Name Display',
    price: 500,
    description: 'Display your loved one’s name with beautiful LED lights.',
    emoji: '💡',
  },
  {
    id: 2,
    name: 'Candlelight Pathway',
    price: 400,
    description: 'Create a romantic pathway with decorative candles.',
    emoji: '🕯️',
  },
  {
    id: 3,
    name: 'Balloon Decoration',
    price: 300,
    description: 'Decorate your theater with colorful balloons.',
    emoji: '🎈',
  },
  {
    id: 4,
    name: 'Fairy Lights',
    price: 200,
    description: 'Add a magical atmosphere with beautiful fairy lights.',
    emoji: '✨',
  },
  {
    id: 5,
    name: 'Flower Decoration',
    price: 500,
    description: 'Make your theater beautiful with flower decorations.',
    emoji: '🌹',
  },
  {
    id: 6,
    name: 'Photo Wall',
    price: 400,
    description: 'Create a photo wall to capture your special moments.',
    emoji: '📸',
  },
]

const Customization = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const booking = location.state

  const [selectedCustomizations, setSelectedCustomizations] = useState([])

  const basePrice = booking?.totalPrice || 0

  let customizationPrice = 0

  for (let i = 0; i < selectedCustomizations.length; i++) {
    customizationPrice += selectedCustomizations[i].price
  }

  const totalPrice = basePrice + customizationPrice

  const handleSelect = (item) => {
    const alreadySelected = selectedCustomizations.some(
      (selected) => selected.id === item.id
    )

    if (alreadySelected) {
      setSelectedCustomizations(
        selectedCustomizations.filter(
          (selected) => selected.id !== item.id
        )
      )
    } else {
      setSelectedCustomizations([
        ...selectedCustomizations,
        item,
      ])
    }
  }

  const handleNext = () => {
    navigate('/booking/surprises', {
      state: {
        ...booking,
        customizations: selectedCustomizations,
        totalPrice: totalPrice,
      },
    })
  }

  const handleSkip = () => {
    navigate('/booking/surprises', {
      state: {
        ...booking,
        customizations: [],
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
          Customize Your Theater
        </h1>

        <p className="mt-2 text-gray-600">
          Add special decorations to make your experience unforgettable.
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

        {booking.theme && (
          <p className="mt-3">
            Selected Theme:{' '}
            <span className="font-semibold text-purple-700">
              {booking.theme.name}
            </span>
          </p>
        )}

      </div>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {customizations.map((item) => {
          const isSelected = selectedCustomizations.some(
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
                className={`mt-5 w-full rounded-xl p-3 font-semibold transition ${
                  isSelected
                    ? 'bg-purple-700 text-white'
                    : 'bg-purple-100 text-purple-700 hover:bg-purple-200'
                }`}
              >
                {isSelected ? '✓ Selected' : 'Add Customization'}
              </button>

            </div>
          )
        })}

      </div>

      <div className="mx-auto mt-8 max-w-5xl rounded-2xl bg-white p-6 shadow-lg">

        <h2 className="mb-4 text-xl font-bold">
          Booking Summary
        </h2>

        <div className="flex justify-between py-2">
          <span>Previous Booking Total</span>
          <span>₹{basePrice}</span>
        </div>

        {selectedCustomizations.map((item) => (
          <div
            key={item.id}
            className="flex justify-between py-2 text-gray-600"
          >
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
            className="w-full rounded-xl border-2 border-purple-600 p-3 font-semibold text-purple-700 hover:bg-purple-50"
          >
            Skip Customization
          </button>

          <button
            onClick={handleNext}
            className="w-full rounded-xl bg-purple-600 p-3 font-semibold text-white hover:bg-purple-700"
          >
            Next: Surprise Selection
          </button>

        </div>

      </div>

    </div>
  )
}

export default Customization