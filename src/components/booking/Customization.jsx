import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { readCatalog } from '../../datas/catalogStorage'

const Customization = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const booking = location.state
  const [selectedCustomizations, setSelectedCustomizations] = useState([])
  const [customizations] = useState(() => readCatalog('customizations'))

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
          className="mt-4 rounded-lg bg-[#3D4F62] px-6 py-2 text-[#F8FAFC]"
        >
          Go to Home
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 md:p-10">

      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold text-[#3D4F62]">
          Customize Your Theater
        </h1>

        <p className="mt-2 text-[#3D4F62]">
          Add special decorations to make your experience unforgettable.
        </p>
      </div>

      <div className="mx-auto mb-8 max-w-5xl rounded-xl bg-[#F8FAFC] p-5 shadow">

        <h2 className="text-xl font-bold">
          {booking.room.name}
        </h2>

        <div className="mt-3 flex flex-wrap gap-4 text-[#3D4F62]">
          <p>Date: {booking.date}</p>
          <p>Start: {booking.startTime}</p>
          <p>End: {booking.endTime}</p>
          <p>Duration: {booking.duration} hours</p>
        </div>

        {booking.theme && (
          <p className="mt-3">
            Selected Theme:{' '}
            <span className="font-semibold text-[#3D4F62]">
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
              className={`flex flex-col rounded-2xl border-2 bg-[#F8FAFC] p-6 shadow-md transition hover:shadow-xl ${
                isSelected
                  ? 'border-[#3D4F62] bg-[#F8FAFC]'
                  : 'border-[#3D4F62]'
              }`}
            >

              <div className="mb-4 text-center text-6xl">
                {item.emoji}
              </div>

              <h2 className="text-center text-xl font-bold">
                {item.name}
              </h2>

              <p className="mt-3 flex-grow text-center text-[#3D4F62]">
                {item.description}
              </p>

              <p className="mt-4 text-center text-xl font-bold text-[#3D4F62]">
                ₹{item.price}
              </p>

              <button
                onClick={() => handleSelect(item)}
                className={`mt-5 w-full rounded-xl p-3 font-semibold transition ${
                  isSelected
                    ? 'bg-[#3D4F62] text-[#F8FAFC]'
                    : 'bg-[#F8FAFC] text-[#3D4F62] hover:bg-[#F8FAFC]'
                }`}
              >
                {isSelected ? '✓ Selected' : 'Add Customization'}
              </button>

            </div>
          )
        })}

      </div>

      <div className="mx-auto mt-8 max-w-5xl rounded-2xl bg-[#F8FAFC] p-6 shadow-lg">

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
            className="flex justify-between py-2 text-[#3D4F62]"
          >
            <span>{item.name}</span>
            <span>₹{item.price}</span>
          </div>
        ))}

        <div className="flex justify-between border-t pt-4 text-xl font-bold text-[#3D4F62]">
          <span>Total Price</span>
          <span>₹{totalPrice}</span>
        </div>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row">

          <button
            onClick={handleSkip}
            className="w-full rounded-xl border-2 border-[#3D4F62] p-3 font-semibold text-[#3D4F62] hover:bg-[#F8FAFC]"
          >
            Skip Customization
          </button>

          <button
            onClick={handleNext}
            className="w-full rounded-xl bg-[#3D4F62] p-3 font-semibold text-[#F8FAFC] hover:bg-[#3D4F62]"
          >
            Next: Surprise Selection
          </button>

        </div>

      </div>

    </div>
  )
}

export default Customization
