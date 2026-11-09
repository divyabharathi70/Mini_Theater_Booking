
const AdminBookingTable = ({
  bookings,
  getOriginalIndex,
  onView,
  onConfirm,
  onCancel,
}) => {

  const getStatus = (booking) => {
    if (booking.status === 'Cancelled') {
      return 'Cancelled'
    }

    if (booking.status === 'Confirmed') {
      return 'Confirmed'
    }

    return 'Pending'
  }

  if (bookings.length === 0) {
    return (
      <div className="p-10 text-center">
        <h2 className="text-xl font-bold text-gray-700">
          No Bookings Found
        </h2>

        <p className="mt-2 text-gray-500">
          Customer bookings will appear here.
        </p>
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">

      <table className="w-full min-w-[900px] text-left">
        <thead className="bg-gray-100 text-gray-600 text-sm">
          <tr>
            <th className="p-4">Booking ID</th>
            <th className="p-4">Customer</th>
            <th className="p-4">Room</th>
            <th className="p-4">Date</th>
            <th className="p-4">Time</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Status</th>
            <th className="p-4">Actions</th>
          </tr>
        </thead>
        <tbody>

          {bookings.map((booking) => {

            const bookingIndex = getOriginalIndex(booking)
            const status = getStatus(booking)

            return (

              <tr
                key={`${booking.bookingId}-${bookingIndex}`}
                className="border-b hover:bg-gray-50"
              >

                <td className="p-4 font-semibold text-purple-700">
                  BK{booking.bookingId || bookingIndex + 1}
                </td>

                <td className="p-4">

                  <p className="font-semibold text-gray-800">
                    {booking.user?.name || 'Unknown'}
                  </p>

                  <p className="text-xs text-gray-500">
                    {booking.user?.email || 'No email'}
                  </p>

                </td>

                <td className="p-4">
                  {booking.room?.name || 'Not available'}
                </td>

                <td className="p-4">
                  {booking.date || 'Not specified'}
                </td>

                <td className="p-4 text-sm">
                  {booking.startTime || '--'} - {booking.endTime || '--'}
                </td>

                <td className="p-4 font-semibold">
                  ₹{Number(booking.totalPrice || 0).toLocaleString('en-IN')}
                </td>

                {/* Status */}
                <td className="p-4">

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      status === 'Confirmed'
                        ? 'bg-green-100 text-green-700'
                        : status === 'Cancelled'
                          ? 'bg-red-100 text-red-700'
                          : 'bg-yellow-100 text-yellow-700'
                    }`}
                  >
                    {status}
                  </span>

                </td>

                {/* Actions */}
                <td className="p-4">

                  <div className="flex gap-2">

                    <button
                      onClick={() => onView(booking)}
                      className="rounded-lg bg-blue-100 px-3 py-2 text-xs font-semibold text-blue-700 hover:bg-blue-200"
                    >
                      View
                    </button>

                    {status === 'Pending' && (

                      <button
                        onClick={() => onConfirm(bookingIndex)}
                        className="rounded-lg bg-green-100 px-3 py-2 text-xs font-semibold text-green-700 hover:bg-green-200"
                      >
                        Confirm
                      </button>

                    )}

                    {status !== 'Cancelled' && (

                      <button
                        onClick={() => onCancel(bookingIndex)}
                        className="rounded-lg bg-red-100 px-3 py-2 text-xs font-semibold text-red-700 hover:bg-red-200"
                      >
                        Cancel
                      </button>

                    )}

                  </div>

                </td>

              </tr>

            )

          })}

        </tbody>

      </table>

    </div>
  )
}

export default AdminBookingTable
