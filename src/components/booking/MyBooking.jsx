const MyBookings = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentUser') || 'null')
  const bookings = JSON.parse(localStorage.getItem('bookings') || '[]')
  const seatBookings = JSON.parse(localStorage.getItem('seatBookings') || '[]')
  const roomBookings = Array.isArray(bookings) ? bookings : []
  const seatRoomBookings = Array.isArray(seatBookings) ? seatBookings.map((booking) => ({
    ...booking,
    isSeatBooking: true,
    room: { name: booking.roomName, capacity: booking.seats?.length || 0, price: booking.pricePerSeat || 0 },
    startTime: booking.showTime,
  })) : []
  const allBookings = [...roomBookings, ...seatRoomBookings]
  const myBookings = currentUser
    ? allBookings.filter(
        (booking) => String(booking.user?.id) === String(currentUser.id)
      )
    : []

  return (
    <div className="min-h-screen bg-[#F8FAFC] p-6 md:p-10">
      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-[#3D4F62]">My Bookings</h1>
          <p className="mt-2 text-[#3D4F62]">
            Your theater reservations{currentUser?.name ? `, ${currentUser.name}` : ''}.
          </p>
        </header>

        {!currentUser ? (
          <p className="rounded-2xl bg-[#F8FAFC] p-8 text-center text-[#3D4F62] shadow">
            Please log in to view your bookings.
          </p>
        ) : myBookings.length === 0 ? (
          <div className="rounded-2xl bg-[#F8FAFC] p-8 text-center shadow">
            <h2 className="text-xl font-semibold text-[#3D4F62]">No bookings found</h2>
            <p className="mt-2 text-[#3D4F62]">Your bookings will appear here.</p>
          </div>
        ) : (
          <div className="space-y-6">
            {myBookings.map((booking, index) => (
              <article
                key={`${booking.bookingId ?? 'booking'}-${index}`}
                className="overflow-hidden rounded-2xl bg-[#F8FAFC] shadow-lg"
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
                        <p className="text-sm font-semibold uppercase text-[#3D4F62]">
                          {booking.isSeatBooking ? 'Seat booking' : 'Whole room booking'} · BK{booking.bookingId}
                        </p>
                        <h2 className="text-2xl font-bold text-[#3D4F62]">
                          {booking.room?.name || 'Theater booking'}
                        </h2>
                      </div>
                      <span className="rounded-full bg-[#F8FAFC] px-3 py-1 text-sm font-semibold text-[#3D4F62]">
                        {booking.status || booking.paymentStatus || 'Confirmed'}
                      </span>
                    </div>

                    <div className="grid gap-3 text-[#3D4F62] sm:grid-cols-2">
                      <p>
                        <strong>Date:</strong> {booking.date || 'Not specified'}
                      </p>
                      <p>
                        <strong>{booking.isSeatBooking ? 'Show time:' : 'Time:'}</strong> {booking.startTime || '--'}{!booking.isSeatBooking && ` - ${booking.endTime || '--'}`}
                      </p>
                      {!booking.isSeatBooking && <p>
                        <strong>Duration:</strong> {booking.duration ?? 0} hours
                      </p>}
                      <p>
                        <strong>{booking.isSeatBooking ? 'Seats:' : 'Capacity:'}</strong> {booking.isSeatBooking ? (booking.seats?.join(', ') || 'Not specified') : `${booking.room?.capacity ?? 'Not specified'} people`}
                      </p>
                      <p>
                        <strong>{booking.isSeatBooking ? 'Price per seat:' : 'Room price/hour:'}</strong> ₹{booking.room?.price ?? 0}
                      </p>
                      <p>
                        <strong>Payment:</strong> {booking.paymentStatus || booking.status || 'Not specified'}
                      </p>
                    </div>

                    <div className="space-y-2 border-t pt-4 text-[#3D4F62]">
                      <h3 className="font-semibold text-[#3D4F62]">Selections</h3>
                      {booking.isSeatBooking ? <p>Booked seats: {booking.seats?.join(', ')}</p> : <>
                      <p>Theme: {booking.theme?.name || 'None'}</p>
                      <p>
                        Customizations: {booking.customizations?.map((item) => item.name).join(', ') || 'None'}
                      </p>
                      <p>
                        Surprises: {booking.surprises?.map((item) => item.name).join(', ') || 'None'}
                      </p>
                      </>}
                    </div>

                    <p className="border-t pt-4 text-xl font-bold text-[#3D4F62]">
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
