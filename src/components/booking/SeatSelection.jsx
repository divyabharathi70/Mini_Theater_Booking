import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function SeatSelection() {
  const { roomId } = useParams()
  const navigate = useNavigate()
  const today = new Date().toISOString().slice(0, 10)
  const [showDate, setShowDate] = useState('')
  const [showTime, setShowTime] = useState('')
  const [selectedSeats, setSelectedSeats] = useState([])
  let rooms = []
  let bookings = []
  try {
    rooms = JSON.parse(localStorage.getItem('seatRooms') || '[]')
    bookings = JSON.parse(localStorage.getItem('seatBookings') || '[]')
  } catch {
    // Show an empty seat map if saved data cannot be read.
  }
  const room = rooms.find((item) => String(item.id) === roomId)

  if (!room) return <main className="p-10 text-center"><h1 className="text-2xl font-bold">Room not found.</h1><Link to="/rooms/seats" className="mt-5 inline-block text-[#3D4F62]">Back to seat rooms</Link></main>

  function continueToPayment() {
    if (!localStorage.getItem('currentUser')) {
      navigate('/signup')
      return
    }
    if (!showDate || !showTime || selectedSeats.length === 0) return
    navigate('/seat-booking/payment', { state: { room, seats: selectedSeats, showDate, showTime } })
  }

  return <main className="min-h-screen bg-[#F8FAFC] p-6 md:p-10">
    <div className="mx-auto max-w-4xl rounded-2xl bg-[#F8FAFC] p-6 shadow-lg">
      <Link to="/rooms/seats" className="font-semibold text-[#3D4F62]">← Seat rooms</Link>
      <h1 className="mt-4 text-3xl font-bold">{room.name}</h1>
      <p className="mt-2 text-[#3D4F62]">₹{room.price} per seat</p>
      <label className="mt-6 block font-semibold" htmlFor="show-date">Choose show date</label>
      <input id="show-date" type="date" min={today} value={showDate} onChange={(event) => { setShowDate(event.target.value); setSelectedSeats([]) }} className="mt-2 block rounded-lg border p-3" />
      <label className="mt-6 block font-semibold" htmlFor="show-time">Choose show time</label>
      <select id="show-time" value={showTime} onChange={(event) => { setShowTime(event.target.value); setSelectedSeats([]) }} className="mt-2 w-full rounded-lg border p-3 sm:w-72"><option value="">Select a time</option><option>10:00 AM</option><option>1:00 PM</option><option>4:00 PM</option><option>7:00 PM</option><option>10:00 PM</option></select>
      <div className="my-8 rounded-t-full bg-[#3D4F62] py-2 text-center font-semibold text-[#F8FAFC]">SCREEN</div>
      <div className="grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-8">
        {Array.from({ length: room.capacity }, (_, index) => {
          const seat = index + 1
          const occupied = bookings.some((item) => String(item.roomId) === String(room.id) && item.showDate === showDate && item.showTime === showTime && item.seats.includes(seat))
          const chosen = selectedSeats.includes(seat)
          return <button key={seat} disabled={!showDate || !showTime || occupied} onClick={() => setSelectedSeats(chosen ? selectedSeats.filter((value) => value !== seat) : [...selectedSeats, seat])} className={`rounded-lg p-3 text-sm font-semibold ${occupied ? 'bg-[#F8FAFC] text-[#3D4F62]' : chosen ? 'bg-[#3D4F62] text-[#F8FAFC]' : 'bg-[#F8FAFC] text-[#3D4F62]'}`}>Seat {seat}<br />₹{room.price}</button>
        })}
      </div>
      <div className="mt-8 rounded-xl bg-[#F8FAFC] p-5"><p><strong>Show date:</strong> {showDate || 'Choose a date'}</p><p className="mt-2"><strong>Show time:</strong> {showTime || 'Choose a time'}</p><p className="mt-2"><strong>Selected seats:</strong> {selectedSeats.length ? selectedSeats.join(', ') : 'None'}</p><p className="mt-2 text-xl font-bold text-[#3D4F62]">Total: ₹{selectedSeats.length * room.price}</p></div>
      <button disabled={!showDate || !showTime || selectedSeats.length === 0} onClick={continueToPayment} className="mt-5 rounded-lg bg-[#3D4F62] px-6 py-3 font-semibold text-[#F8FAFC] disabled:bg-[#F8FAFC]">Continue to payment</button>
    </div>
  </main>
}

export default SeatSelection
