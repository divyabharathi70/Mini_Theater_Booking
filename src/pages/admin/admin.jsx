import { useState } from 'react'
import AdminBookingTable from './AdminBookingTable'
import BookingDetailsModal from './BookingDetailsModal'

const readBookings = () => {
  try {
    const savedBookings = JSON.parse(localStorage.getItem('bookings') || [])
    return Array.isArray(savedBookings) ? savedBookings : []
  } catch {
    return []
  }
}

const Admin = () => {
  const [bookings, setBookings] = useState(readBookings)
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [selectedBooking, setSelectedBooking] = useState(null)

  const getStatus = (booking) => {
    if (booking.status === 'Cancelled') return 'Cancelled'
    if (booking.status === 'Confirmed') return 'Confirmed'
    return 'Pending'
  }

  const pendingCount = bookings.filter((booking) => getStatus(booking) === 'Pending').length
  const confirmedCount = bookings.filter((booking) => getStatus(booking) === 'Confirmed').length
  const cancelledCount = bookings.filter((booking) => getStatus(booking) === 'Cancelled').length

  const totalRevenue = bookings.reduce((total, booking) => {
    if (
      booking.paymentStatus === 'Payment Successful' &&
      booking.status !== 'Cancelled'
    ) {
      return total + Number(booking.totalPrice || 0)
    }
    return total
  }, 0)

  const filteredBookings = bookings.filter((booking) => {
    const customerName = booking.user?.name || ''
    const customerEmail = booking.user?.email || ''
    const bookingId = String(booking.bookingId || '')

    const matchesSearch =
      customerName.toLowerCase().includes(search.toLowerCase()) ||
      customerEmail.toLowerCase().includes(search.toLowerCase()) ||
      bookingId.toLowerCase().includes(search.toLowerCase())

    const matchesStatus =
      filterStatus === 'All' || getStatus(booking) === filterStatus

    return matchesSearch && matchesStatus
  })

  const updateBookingStatus = (bookingIndex, newStatus) => {
    const updatedBookings = bookings.map((booking, index) => {
      if (index === bookingIndex) {
        return {
          ...booking,
          status: newStatus,
        }
      }
      return booking
    })

    localStorage.setItem('bookings', JSON.stringify(updatedBookings))
    setBookings(updatedBookings)

    if (selectedBooking) {
      setSelectedBooking({
        ...selectedBooking,
        status: newStatus,
      })
    }
  }

  const handleConfirm = (bookingIndex) => {
    const booking = bookings[bookingIndex]

    if (booking.status === 'Cancelled') {
      alert('A cancelled booking cannot be confirmed.')
      return
    }

    if (booking.status === 'Confirmed') {
      alert('This booking is already confirmed.')
      return
    }

    updateBookingStatus(bookingIndex, 'Confirmed')
    alert('Booking confirmed successfully.')
  }

  const handleCancel = (bookingIndex) => {
    const booking = bookings[bookingIndex]

    if (booking.status === 'Cancelled') {
      alert('This booking is already cancelled.')
      return
    }

    const confirmCancel = window.confirm(
      'Are you sure you want to cancel this booking?'
    )

    if (!confirmCancel) return

    updateBookingStatus(bookingIndex, 'Cancelled')
    alert('Booking cancelled successfully.')
  }

  const getOriginalIndex = (booking) => bookings.indexOf(booking)

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-purple-800 px-6 py-5 text-white shadow-md md:px-10">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-3">
          <div>
            <h1 className="text-2xl font-bold md:text-3xl">
              Mini Theater Admin
            </h1>
            <p className="mt-1 text-sm text-purple-100">
              Manage bookings and customer reservations
            </p>
          </div>

          <a
            href="/"
            className="rounded-lg border border-white/60 px-4 py-2 text-sm font-semibold transition hover:bg-white hover:text-purple-800"
          >
            Back to Home
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl space-y-8 p-5 md:p-8">
        <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Total Bookings</p>
            <h2 className="mt-3 text-3xl font-bold text-gray-900">
              {bookings.length}
            </h2>
            <p className="mt-2 text-sm text-gray-500">All customer reservations</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Pending Bookings</p>
            <h2 className="mt-3 text-3xl font-bold text-amber-600">
              {pendingCount}
            </h2>
            <p className="mt-2 text-sm text-gray-500">Waiting for confirmation</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Confirmed Bookings</p>
            <h2 className="mt-3 text-3xl font-bold text-green-600">
              {confirmedCount}
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              {cancelledCount} cancelled bookings
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-gray-500">Revenue</p>
            <h2 className="mt-3 text-3xl font-bold text-purple-700">
              ₹{totalRevenue.toLocaleString('en-IN')}
            </h2>
            <p className="mt-2 text-sm text-gray-500">
              Paid bookings excluding cancellations
            </p>
          </div>
        </section>

        <section className="overflow-hidden rounded-2xl bg-white shadow-sm">
          <div className="border-b border-gray-200 p-5 md:p-6">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Booking Management
                </h2>
                <p className="mt-1 text-sm text-gray-500">
                  View, confirm, or cancel customer bookings.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search name, email or booking ID"
                  className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-purple-500 sm:w-72"
                />

                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="rounded-lg border border-gray-300 px-4 py-2 text-sm outline-none focus:border-purple-500"
                >
                  <option value="All">All Bookings</option>
                  <option value="Pending">Pending</option>
                  <option value="Confirmed">Confirmed</option>
                  <option value="Cancelled">Cancelled</option>
                </select>
              </div>
            </div>
          </div>

          <AdminBookingTable
            bookings={filteredBookings}
            getOriginalIndex={getOriginalIndex}
            onView={(booking) => setSelectedBooking(booking)}
            onConfirm={handleConfirm}
            onCancel={handleCancel}
          />
        </section>
      </main>

      {selectedBooking && (
        <BookingDetailsModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
        />
      )}
    </div>
  )
}

export default Admin
