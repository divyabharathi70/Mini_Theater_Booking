const MyBookings = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null')
  const bookings = JSON.parse(localStorage.getItem('bookings') || '[]')
  const myBookings = currentUser && Array.isArray(bookings)
    ? bookings.filter(
        (booking) => String(booking.user?.id) === String(currentUser.id)
      )
    : []

  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-purple-700">My Bookings</h1>
          <p className="mt-2 text-gray-600">
            Your theater reservations{currentUser?.name ? `, ${currentUser.name}` : ''}.
          </p>
        </header>

        {!currentUser ? (
          <p className="rounded-2xl bg-white p-8 text-center text-gray-600 shadow">
            Please log in to view your bookings.
          </p>
        ) : myBookings.length === 0 ? (
          <div className="rounded-2xl bg-white p-8 text-center shadow">
            <h2 className="text-xl font-semibold text-gray-800">No bookings found</h2>
            <p className="mt-2 text-gray-600">Your bookings will appear here.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {myBookings.map((booking, index) => (
              <article
                key={`${booking.bookingId ?? 'booking'}-${index}`}
                className="overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="grid gap-6 p-6 md:grid-cols-[240px_1fr]">
                  {booking.room?.image && (
                    <img
                      src={booking.room.image}
                      alt={booking.room.name || 'Booked theater'}
                      className="h-48 w-full rounded-xl object-cover md:h-full"
                    />
                  )}

                  <div className="space-y-5">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold uppercase text-purple-600">
                          Booking BK{booking.bookingId}
                        </p>
                        <h2 className="text-2xl font-bold text-gray-900">
                          {booking.room?.name || 'Theater booking'}
                        </h2>
                      </div>
                      <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-semibold text-green-700">
                        {booking.status || booking.paymentStatus || 'Confirmed'}
                      </span>
                    </div>

                    <div className="grid gap-3 text-gray-700 sm:grid-cols-2">
                      <p>
                        <strong>Date:</strong> {booking.date || 'Not specified'}
                      </p>
                      <p>
                        <strong>Time:</strong> {booking.startTime || '--'} - {booking.endTime || '--'}
                      </p>
                      <p>
                        <strong>Duration:</strong> {booking.duration ?? 0} hours
                      </p>
                      <p>
                        <strong>Capacity:</strong> {booking.room?.capacity ?? 'Not specified'} people
                      </p>
                      <p>
                        <strong>Room price/hour:</strong> ₹{booking.room?.price ?? 0}
                      </p>
                      <p>
                        <strong>Payment:</strong> {booking.paymentStatus || booking.status || 'Not specified'}
                      </p>
                    </div>

                    <div className="space-y-2 border-t pt-4 text-gray-700">
                      <h3 className="font-semibold text-gray-900">Selections</h3>
                      <p>Theme: {booking.theme?.name || 'None'}</p>
                      <p>
                        Customizations: {booking.customizations?.map((item) => item.name).join(', ') || 'None'}
                      </p>
                      <p>
                        Surprises: {booking.surprises?.map((item) => item.name).join(', ') || 'None'}
                      </p>
                    </div>

                    <p className="border-t pt-4 text-xl font-bold text-purple-700">
                      Total paid: ₹{booking.totalPrice ?? 0}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default MyBookings
