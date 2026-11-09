
const BookingDetailsModal = ({ booking, onClose }) => {

  const status =
    booking.status === 'Confirmed'
      ? 'Confirmed'
      : booking.status === 'Cancelled'
        ? 'Cancelled'
        : 'Pending'

  return (

    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >

      <div
        className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >

        {/* Header */}
        <div className="flex items-center justify-between rounded-t-2xl bg-purple-800 p-5 text-white">

          <div>

            <h2 className="text-xl font-bold">
              Booking Details
            </h2>

            <p className="mt-1 text-sm text-purple-200">
              Booking ID: BK{booking.bookingId}
            </p>

          </div>

          <button
            onClick={onClose}
            className="text-2xl font-bold hover:text-gray-300"
          >
            ×
          </button>

        </div>


        <div className="space-y-6 p-6">

          {/* Customer Information */}
          <section>

            <h3 className="mb-3 text-lg font-bold text-gray-800">
              Customer Information
            </h3>

            <div className="grid grid-cols-1 gap-3 rounded-xl bg-gray-50 p-4 sm:grid-cols-2">

              <p>
                <strong>Name:</strong> {booking.user?.name || 'Not available'}
              </p>

              <p>
                <strong>Email:</strong> {booking.user?.email || 'Not available'}
              </p>

              <p>
                <strong>Payment:</strong> {booking.paymentStatus || 'Not available'}
              </p>

              <p>
                <strong>Status:</strong> {status}
              </p>

            </div>

          </section>


          {/* Room Information */}
          <section>

            <h3 className="mb-3 text-lg font-bold text-gray-800">
              Theater Details
            </h3>

            <div className="grid grid-cols-1 gap-3 rounded-xl bg-gray-50 p-4 sm:grid-cols-2">

              <p>
                <strong>Room:</strong> {booking.room?.name || 'Not available'}
              </p>

              <p>
                <strong>Capacity:</strong> {booking.room?.capacity ?? 'Not available'}
              </p>

              <p>
                <strong>Date:</strong> {booking.date || 'Not specified'}
              </p>

              <p>
                <strong>Duration:</strong> {booking.duration || 0} hours
              </p>

              <p>
                <strong>Start Time:</strong> {booking.startTime || '--'}
              </p>

              <p>
                <strong>End Time:</strong> {booking.endTime || '--'}
              </p>

            </div>

          </section>


          {/* Theme */}
          <section>

            <h3 className="mb-3 text-lg font-bold text-gray-800">
              Selected Theme
            </h3>

            <div className="rounded-xl bg-gray-50 p-4">

              {booking.theme ? (

                <>
                  <p className="font-semibold">
                    {booking.theme.emoji} {booking.theme.name}
                  </p>

                  <p className="mt-1 text-purple-700">
                    ₹{booking.theme.price}
                  </p>
                </>

              ) : (

                <p className="text-gray-500">
                  No theme selected
                </p>

              )}

            </div>

          </section>


          {/* Customizations */}
          <section>

            <h3 className="mb-3 text-lg font-bold text-gray-800">
              Customizations
            </h3>

            <div className="rounded-xl bg-gray-50 p-4">

              {booking.customizations?.length > 0 ? (

                booking.customizations.map((item, index) => (

                  <div
                    key={item.id || index}
                    className="flex justify-between gap-3 border-b py-2 last:border-0"
                  >

                    <span>{item.name}</span>

                    <span className="font-semibold">
                      ₹{item.price}
                    </span>

                  </div>

                ))

              ) : (

                <p className="text-gray-500">
                  No customizations selected
                </p>

              )}

            </div>

          </section>


          <section>

            <h3 className="mb-3 text-lg font-bold text-gray-800">
              Surprises
            </h3>

            <div className="rounded-xl bg-gray-50 p-4">

              {booking.surprises?.length > 0 ? (

                booking.surprises.map((item, index) => (

                  <div
                    key={item.id || index}
                    className="flex justify-between gap-3 border-b py-2 last:border-0"
                  >

                    <span>{item.name}</span>

                    <span className="font-semibold">
                      ₹{item.price}
                    </span>

                  </div>

                ))

              ) : (

                <p className="text-gray-500">
                  No surprises selected
                </p>

              )}

            </div>

          </section>


]          <section className="flex justify-between border-t pt-5">

            <h3 className="text-lg font-bold text-gray-800">
              Total Amount
            </h3>

            <p className="text-2xl font-bold text-purple-700">
              ₹{Number(booking.totalPrice || 0).toLocaleString('en-IN')}
            </p>

          </section>


          <button
            onClick={onClose}
            className="w-full rounded-xl bg-purple-700 py-3 font-semibold text-white hover:bg-purple-800"
          >
            Close
          </button>

        </div>

      </div>

    </div>

  )
}

export default BookingDetailsModal
