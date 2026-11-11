import { useState } from 'react'
const initialSeatRooms = [
  { id: 'seat-1', name: 'Screen Room A', capacity: 20, price: 150, available: true },
  { id: 'seat-2', name: 'Screen Room B', capacity: 24, price: 180, available: true },
  { id: 'seat-3', name: 'Screen Room C', capacity: 30, price: 200, available: true },
  { id: 'seat-4', name: 'Screen Room D', capacity: 36, price: 220, available: true },
]

function readRooms() {
  try {
    const rooms = JSON.parse(localStorage.getItem('seatRooms') || 'null')
    return Array.isArray(rooms) ? rooms : initialSeatRooms
  } catch {
    return initialSeatRooms
  }
}

function readSeatBookings() {
  try {
    const bookings = JSON.parse(localStorage.getItem('seatBookings') || '[]')
    return Array.isArray(bookings) ? bookings : []
  } catch {
    return []
  }
}

function AdminSeatBooking() {
  const [rooms, setRooms] = useState(readRooms)
  const [bookings, setBookings] = useState(readSeatBookings)
  const [editingId, setEditingId] = useState(null)
  const [name, setName] = useState('')
  const [capacity, setCapacity] = useState('')
  const [price, setPrice] = useState('')

  function saveRooms(updatedRooms) {
    localStorage.setItem('seatRooms', JSON.stringify(updatedRooms))
    setRooms(updatedRooms)
  }

  function saveRoom(event) {
    event.preventDefault()
    if (!name.trim() || Number(capacity) < 1 || Number(price) < 0) return
    let updatedRooms
    if (editingId !== null) {
      updatedRooms = rooms.map((room) => room.id === editingId ? { ...room, name: name.trim(), capacity: Number(capacity), price: Number(price) } : room)
    } else {
      const id = `seat-${Date.now()}`
      updatedRooms = [...rooms, { id, name: name.trim(), capacity: Number(capacity), price: Number(price), amenities: [], available: true }]
    }
    saveRooms(updatedRooms)
    setEditingId(null)
    setName('')
    setCapacity('')
    setPrice('')
  }

  function editRoom(room) {
    setEditingId(room.id)
    setName(room.name)
    setCapacity(room.capacity)
    setPrice(room.price)
  }

  function deleteRoom(roomId) {
    const updatedRooms = rooms.filter((room) => room.id !== roomId)
    saveRooms(updatedRooms)
  }

  function deleteBooking(id) {
    const updatedBookings = bookings.filter((booking) => booking.id !== id)
    localStorage.setItem('seatBookings', JSON.stringify(updatedBookings))
    setBookings(updatedBookings)
  }

  return <div className="space-y-8">
    <section className="rounded-2xl bg-[#F8FAFC] p-6 shadow-sm">
      <h2 className="text-xl font-bold">Seat Bookings</h2>
      <p className="mt-1 text-sm text-[#3D4F62]">Seat bookings are stored separately from whole room bookings.</p>
      {bookings.length === 0 ? <p className="mt-5 text-[#3D4F62]">No seat bookings yet.</p> : <div className="mt-5 overflow-x-auto"><table className="w-full text-left text-sm"><thead><tr className="border-b text-[#3D4F62]"><th className="p-3">Customer</th><th className="p-3">Email</th><th className="p-3">Room</th><th className="p-3">Seats</th><th className="p-3">Show date</th><th className="p-3">Show time</th><th className="p-3">Total paid</th><th className="p-3">Action</th></tr></thead><tbody>{bookings.map((booking) => <tr key={booking.id} className="border-b"><td className="p-3">{booking.userName}</td><td className="p-3">{booking.userEmail}</td><td className="p-3">{booking.roomName}</td><td className="p-3">{booking.seats.join(', ')}</td><td className="p-3">{booking.showDate || booking.date}</td><td className="p-3">{booking.showTime}</td><td className="p-3">₹{booking.totalPrice}</td><td className="p-3"><button onClick={() => deleteBooking(booking.id)} className="font-semibold text-[#3D4F62]">Delete</button></td></tr>)}</tbody></table></div>}
    </section>

    <section className="rounded-2xl bg-[#F8FAFC] p-6 shadow-sm">
      <h2 className="text-xl font-bold">Manage Seat Booking Rooms</h2>
      <form onSubmit={saveRoom} className="mt-5 grid gap-3 sm:grid-cols-4">
        <input required value={name} onChange={(event) => setName(event.target.value)} placeholder="Room name" className="rounded-lg border p-3" />
        <input required type="number" min="1" value={capacity} onChange={(event) => setCapacity(event.target.value)} placeholder="Seat capacity" className="rounded-lg border p-3" />
        <input required type="number" min="0" value={price} onChange={(event) => setPrice(event.target.value)} placeholder="Price per seat" className="rounded-lg border p-3" />
        <button className="rounded-lg bg-[#3D4F62] p-3 font-semibold text-[#F8FAFC]">{editingId === null ? 'Add room' : 'Save room'}</button>
      </form>
      <div className="mt-5 divide-y">{rooms.map((room) => <div key={room.id} className="flex flex-wrap items-center justify-between gap-3 py-3"><span><strong>{room.name}</strong> · {room.capacity} seats · ₹{room.price}/seat</span><div className="flex gap-3"><button onClick={() => editRoom(room)} className="font-semibold text-[#3D4F62]">Edit</button><button onClick={() => deleteRoom(room.id)} className="font-semibold text-[#3D4F62]">Delete</button></div></div>)}</div>
    </section>
  </div>
}

export default AdminSeatBooking
