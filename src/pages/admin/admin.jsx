import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AdminBookingTable from './AdminBookingTable'
import BookingDetailsModal from './BookingDetailsModal'
import AdminCustomization from './AdminCustomization'
import AdminThemes from './AdminThemes'
import AdminSurprises from './AdminSurprises'
import AdminFeedback from './AdminFeedback'
import AdminSeatBooking from './AdminSeatBooking'
import { initialRooms } from '../../datas/TheaterDatas'

const readRooms = () => {
  try {
    const savedRooms = JSON.parse(localStorage.getItem('rooms') || 'null')
    return Array.isArray(savedRooms) ? savedRooms : initialRooms
  } catch {
    return initialRooms
  }
}

const readBookings = () => {
  try {
    const savedBookings = JSON.parse(localStorage.getItem('bookings') || [])
    return Array.isArray(savedBookings) ? savedBookings : []
  } catch {
    return []
  }
}

const Admin = () => {
  const navigate = useNavigate()
  const [bookings, setBookings] = useState(readBookings)
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('All')
  const [selectedBooking, setSelectedBooking] = useState(null)
  const [activeSection, setActiveSection] = useState('bookings')
  const [notice, setNotice] = useState('')
  const [confirmCancel, setConfirmCancel] = useState(null)
  const [rooms, setRooms] = useState(readRooms)
  const [roomName, setRoomName] = useState('')
  const [roomCapacity, setRoomCapacity] = useState('')
  const [roomPrice, setRoomPrice] = useState('')
  const [roomAmenities, setRoomAmenities] = useState('')
  const [editingRoomId, setEditingRoomId] = useState(null)

  const handleSignOut = () => {
    localStorage.removeItem('currentUser')
    navigate('/login')
  }

  const saveRooms = (updatedRooms) => {
    localStorage.setItem('rooms', JSON.stringify(updatedRooms))
    setRooms(updatedRooms)
  }

  const saveRoom = (event) => {
    event.preventDefault()
    if (!roomName.trim() || Number(roomCapacity) < 1 || Number(roomPrice) < 0) return
    let updatedRooms
    if (editingRoomId !== null) {
      updatedRooms = rooms.map((room) => room.id === editingRoomId ? {
        ...room,
        name: roomName.trim(),
        capacity: Number(roomCapacity),
        price: Number(roomPrice),
        amenities: roomAmenities.split(',').map((item) => item.trim()).filter(Boolean),
      } : room)
    } else {
      const id = Math.max(0, ...rooms.map((room) => Number(room.id) || 0)) + 1
      updatedRooms = [...rooms, {
        id,
        name: roomName.trim(),
        capacity: Number(roomCapacity),
        price: Number(roomPrice),
        amenities: roomAmenities.split(',').map((item) => item.trim()).filter(Boolean),
        available: true,
      }]
    }
    saveRooms(updatedRooms)
    setEditingRoomId(null)
    setRoomName('')
    setRoomCapacity('')
    setRoomPrice('')
    setRoomAmenities('')
  }

  const startRoomEdit = (room) => {
    setEditingRoomId(room.id)
    setRoomName(room.name)
    setRoomCapacity(room.capacity)
    setRoomPrice(room.price)
    setRoomAmenities(room.amenities?.join(', ') || '')
  }

  const deleteRoom = (roomId) => {
    saveRooms(rooms.filter((room) => room.id !== roomId))
    if (editingRoomId === roomId) setEditingRoomId(null)
  }

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
      setNotice('A cancelled booking cannot be confirmed.')
      return
    }

    if (booking.status === 'Confirmed') {
      setNotice('This booking is already confirmed.')
      return
    }

    updateBookingStatus(bookingIndex, 'Confirmed')
    setNotice('Booking confirmed successfully.')
  }

  const handleCancel = (bookingIndex) => {
    const booking = bookings[bookingIndex]

    if (booking.status === 'Cancelled') {
      setNotice('This booking is already cancelled.')
      return
    }
    setConfirmCancel(bookingIndex)
  }

  const confirmBookingCancel = () => {
    if (confirmCancel === null) return
    
    updateBookingStatus(confirmCancel, 'Cancelled')
    setConfirmCancel(null)
    setNotice('Booking cancelled successfully.')
  }

  const getOriginalIndex = (booking) => bookings.indexOf(booking)

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <div className="min-h-screen md:flex">
      <aside className="bg-[#3D4F62] px-5 py-6 text-[#F8FAFC] shadow-md md:min-h-screen md:w-64 md:shrink-0">
          <div className="mb-8">
            <h1 className="text-2xl font-bold md:text-3xl">
              Mini Theater Admin
            </h1>
            <p className="mt-1 text-sm text-[#F8FAFC]">Manage bookings and customer reservations</p>
            <button onClick={handleSignOut} className="mt-5 w-full rounded-lg border border-[#F8FAFC]/50 px-4 py-3 text-left text-sm font-semibold hover:bg-[#F8FAFC] hover:text-[#3D4F62]">Sign Out</button>
          </div>

          <nav aria-label="Admin sections" className="flex gap-2 overflow-x-auto md:flex-col">
            {[['bookings', 'Bookings'], ['seatBookings', 'Seat Booking'], ['customizations', 'Customization'], ['themes', 'Themes'], ['surprises', 'Surprises'], ['feedback', 'Feedback']].map(([key, label]) => (
              <button key={key} onClick={() => setActiveSection(key)} className={`shrink-0 rounded-lg px-4 py-3 text-left text-sm font-semibold transition ${activeSection === key ? 'bg-[#F8FAFC] text-[#3D4F62]' : 'text-[#F8FAFC] hover:bg-[#F8FAFC] hover:text-[#3D4F62]'}`}>{label}</button>
            ))}
          </nav>
      </aside>

      <main className="min-w-0 flex-1 space-y-8 p-5 md:p-8">
        {notice && <div role="status" className="flex items-center justify-between rounded-xl border border-[#3D4F62] bg-[#F8FAFC] px-4 py-3 text-sm text-[#3D4F62]">{notice}<button onClick={() => setNotice('')} aria-label="Dismiss message" className="ml-4 font-bold">×</button></div>}
        {confirmCancel !== null && <div role="alertdialog" aria-modal="true" className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#3D4F62] bg-[#F8FAFC] p-4 text-[#3D4F62]"><span>Cancel this booking?</span><div className="flex gap-2"><button onClick={confirmBookingCancel} className="rounded-lg bg-[#3D4F62] px-4 py-2 font-semibold text-[#F8FAFC]">Cancel booking</button><button onClick={() => setConfirmCancel(null)} className="rounded-lg border border-[#3D4F62] px-4 py-2 font-semibold">Keep booking</button></div></div>}
        {activeSection === 'bookings' ? <>
        <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl bg-[#F8FAFC] p-6 shadow-sm">
            <p className="text-sm font-medium text-[#3D4F62]">Total Bookings</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3D4F62]">
              {bookings.length}
            </h2>
            <p className="mt-2 text-sm text-[#3D4F62]">All customer reservations</p>
          </div>

          <div className="rounded-2xl bg-[#F8FAFC] p-6 shadow-sm">
            <p className="text-sm font-medium text-[#3D4F62]">Pending Bookings</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3D4F62]">
              {pendingCount}
            </h2>
            <p className="mt-2 text-sm text-[#3D4F62]">Waiting for confirmation</p>
          </div>

          <div className="rounded-2xl bg-[#F8FAFC] p-6 shadow-sm">
            <p className="text-sm font-medium text-[#3D4F62]">Confirmed Bookings</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3D4F62]">
              {confirmedCount}
            </h2>
            <p className="mt-2 text-sm text-[#3D4F62]">
              {cancelledCount} cancelled bookings
            </p>
          </div>

          <div className="rounded-2xl bg-[#F8FAFC] p-6 shadow-sm">
            <p className="text-sm font-medium text-[#3D4F62]">Revenue</p>
            <h2 className="mt-3 text-3xl font-bold text-[#3D4F62]">
              ₹{totalRevenue.toLocaleString('en-IN')}
            </h2>
            <p className="mt-2 text-sm text-[#3D4F62]">
              Paid bookings excluding cancellations
            </p>
          </div>
        </section>
        </> : activeSection === 'seatBookings' ? <AdminSeatBooking /> : activeSection === 'customizations' ? <AdminCustomization /> : activeSection === 'themes' ? <AdminThemes /> : activeSection === 'surprises' ? <AdminSurprises /> : <AdminFeedback />}

        {activeSection === 'bookings' && <>
        <section className="rounded-2xl bg-[#F8FAFC] p-5 shadow-sm md:p-6">
          <h2 className="text-xl font-bold text-[#3D4F62]">Manage Whole Booking Rooms</h2>
          <p className="mt-1 text-sm text-[#3D4F62]">Room details are saved in local storage and shown in whole room booking.</p>
          <form onSubmit={saveRoom} className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
            <input required value={roomName} onChange={(event) => setRoomName(event.target.value)} placeholder="Room name" className="rounded-lg border p-3" />
            <input required type="number" min="1" value={roomCapacity} onChange={(event) => setRoomCapacity(event.target.value)} placeholder="Capacity" className="rounded-lg border p-3" />
            <input required type="number" min="0" value={roomPrice} onChange={(event) => setRoomPrice(event.target.value)} placeholder="Price per hour" className="rounded-lg border p-3" />
            <input value={roomAmenities} onChange={(event) => setRoomAmenities(event.target.value)} placeholder="Amenities, comma separated" className="rounded-lg border p-3" />
            <button className="rounded-lg bg-[#3D4F62] p-3 font-semibold text-[#F8FAFC]">{editingRoomId === null ? 'Add room' : 'Save room'}</button>
          </form>
          <div className="mt-5 divide-y">{rooms.map((room) => <div key={room.id} className="flex flex-wrap items-center justify-between gap-3 py-3"><span><strong>{room.name}</strong> · {room.capacity} people · ₹{room.price}/hour</span><div className="flex gap-3"><button onClick={() => startRoomEdit(room)} className="font-semibold text-[#3D4F62]">Edit</button><button onClick={() => deleteRoom(room.id)} className="font-semibold text-[#3D4F62]">Delete</button></div></div>)}</div>
        </section>
        <section className="overflow-hidden rounded-2xl bg-[#F8FAFC] shadow-sm">
          <div className="border-b border-[#3D4F62] p-5 md:p-6">
            <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
              <div>
                <h2 className="text-xl font-bold text-[#3D4F62]">
                  Booking Management
                </h2>
                <p className="mt-1 text-sm text-[#3D4F62]">
                  View, confirm, or cancel customer bookings.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search name, email or booking ID"
                  className="w-full rounded-lg border border-[#3D4F62] px-4 py-2 text-sm outline-none focus:border-[#3D4F62] sm:w-72"
                />

                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="rounded-lg border border-[#3D4F62] px-4 py-2 text-sm outline-none focus:border-[#3D4F62]"
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
        </>}
      </main>

      {selectedBooking && (
        <BookingDetailsModal
          booking={selectedBooking}
          onClose={() => setSelectedBooking(null)}
        />
      )}
      </div>
    </div>
  )
}

export default Admin
