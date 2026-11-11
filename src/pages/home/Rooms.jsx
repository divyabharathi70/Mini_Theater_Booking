import { Link, useNavigate, useLocation } from 'react-router-dom'
import { initialRooms, roomImages } from '../../datas/TheaterDatas.js'

const initialSeatRooms = [
  { id: 'seat-1', name: 'Screen Room A', capacity: 20, price: 150, available: true },
  { id: 'seat-2', name: 'Screen Room B', capacity: 24, price: 180, available: true },
  { id: 'seat-3', name: 'Screen Room C', capacity: 30, price: 200, available: true },
  { id: 'seat-4', name: 'Screen Room D', capacity: 36, price: 220, available: true },
]

function readRooms(key, starter) {
  try {
    const rooms = JSON.parse(localStorage.getItem(key) || 'null')
    if (Array.isArray(rooms)) return rooms
  } catch {
    // Use the starter room list when saved data is unavailable.
  }
  localStorage.setItem(key, JSON.stringify(starter))
  return starter
}

function Rooms() {
  const navigate = useNavigate()
  const location = useLocation()
  const roomType = location.pathname.endsWith('/seats') ? 'seats' : 'whole'

  if (location.pathname === '/rooms') {
    return <main className="min-h-screen bg-[#F8FAFC] p-8">
      <header className="mb-12 flex items-center justify-between"><h1 className="text-3xl font-bold text-[#3D4F62]">Choose a booking type</h1><Link to="/" className="rounded-lg bg-[#F8FAFC] px-4 py-2 font-semibold text-[#3D4F62]">Home</Link></header>
      <section className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
        <button onClick={() => navigate('/rooms/whole')} className="rounded-2xl bg-[#F8FAFC] p-10 text-left shadow-lg hover:shadow-xl"><span className="text-sm font-bold text-[#3D4F62]">OPTION 1</span><h2 className="mt-3 text-2xl font-bold">Whole room booking</h2><p className="mt-3 text-[#3D4F62]">Book a private theater room for your group.</p><span className="mt-6 inline-block rounded-lg bg-[#3D4F62] px-5 py-3 font-semibold text-[#F8FAFC]">View rooms</span></button>
        <button onClick={() => navigate('/rooms/seats')} className="rounded-2xl bg-[#F8FAFC] p-10 text-left shadow-lg hover:shadow-xl"><span className="text-sm font-bold text-[#3D4F62]">OPTION 2</span><h2 className="mt-3 text-2xl font-bold">Seat booking</h2><p className="mt-3 text-[#3D4F62]">Choose a room, showtime, and individual seats.</p><span className="mt-6 inline-block rounded-lg bg-[#3D4F62] px-5 py-3 font-semibold text-[#F8FAFC]">View seat rooms</span></button>
      </section>
    </main>
  }

  const rooms = roomType === 'whole' ? readRooms('rooms', initialRooms) : readRooms('seatRooms', initialSeatRooms)

  function bookRoom(room) {
    if (!localStorage.getItem('currentUser')) {
      navigate('/signup')
      return
    }
    navigate('/booking', { state: { room } })
  }

  return <main className="min-h-screen bg-[#F8FAFC]">
    <header className="flex items-center justify-between bg-[#3D4F62] px-8 py-4"><h1 className="text-2xl font-bold text-[#F8FAFC]">{roomType === 'whole' ? 'Whole Room Booking' : 'Seat Booking Rooms'}</h1><Link to="/rooms" className="rounded-lg bg-[#F8FAFC] px-4 py-2 font-semibold text-[#3D4F62]">Booking options</Link></header>
    <section className="grid grid-cols-1 gap-8 p-10 md:grid-cols-2 lg:grid-cols-3">
      {rooms.map((room) => <article key={room.id} className="flex flex-col overflow-hidden rounded-xl bg-[#F8FAFC] shadow-md">
        {roomType === 'whole' && <img src={roomImages[room.id] || room.image || roomImages[1]} alt={room.name} className="h-48 w-full object-cover" />}
        <div className="flex flex-1 flex-col gap-3 p-5 text-[#3D4F62]"><h2 className="text-xl font-semibold text-[#3D4F62]">{room.name}</h2><p>Capacity: {room.capacity} {roomType === 'whole' ? 'people' : 'seats'}</p><p className="text-lg font-bold text-[#3D4F62]">₹{room.price} / {roomType === 'whole' ? 'hour' : 'seat'}</p>{roomType === 'whole' && <p className="text-sm text-[#3D4F62]">{room.amenities?.join(', ')}</p>}<button onClick={() => roomType === 'whole' ? bookRoom(room) : navigate(`/rooms/seats/${room.id}`)} className="mt-auto rounded-lg bg-[#3D4F62] py-2 font-semibold text-[#F8FAFC]">{roomType === 'whole' ? 'Book Room' : 'Choose Seats'}</button></div>
      </article>)}
    </section>
  </main>
}

export default Rooms
