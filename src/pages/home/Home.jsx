
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import room1Image from '../../asserts/images/Room1.jpeg'
import room2Image from '../../asserts/images/Room2.jpeg'
import room3Image from '../../asserts/images/Room3.jpeg'
import room4Image from '../../asserts/images/Room4.jpeg'
import room5Image from '../../asserts/images/Room5.jpeg'
import room6Image from '../../asserts/images/Room 6.jpeg'
import Logo from '../../asserts/images/Logo.jpeg'
import CinemaBanner from '../../asserts/images/CinemaBanner.png'

const roomImages = {
  1: room1Image,
  2: room2Image,
  3: room3Image,
  4: room4Image,
  5: room5Image,
  6: room6Image,
}

const initialRooms = [
  {
    id: 1,
    name: 'Classic Theater',
    image: room1Image,
    capacity: 2,
    price: 999,
    amenities: ['4K Screen', 'Premium Seats', 'Sound System'],
    available: true,
  },
  {
    id: 2,
    name: 'Couple Theater',
    image: room2Image,
    capacity: 2,
    price: 1499,
    amenities: ['Recliner Seats', '4K Screen', 'Romantic Lighting'],
    available: true,
  },
  {
    id: 3,
    name: 'Friends Theater',
    image: room3Image,
    capacity: 6,
    price: 2499,
    amenities: ['Large Screen', 'Surround Sound', 'Snacks'],
    available: true,
  },
  {
    id: 4,
    name: 'Birthday Theater',
    image: room4Image,
    capacity: 8,
    price: 3499,
    amenities: ['Decorations', 'Large Screen', 'Sound System'],
    available: true,
  },
  {
    id: 5,
    name: 'Luxury Theater',
    image: room5Image,
    capacity: 4,
    price: 2999,
    amenities: ['Luxury Recliners', '4K Screen', 'Ambient Lighting'],
    available: true,
  },
  {
    id: 6,
    name: 'Celebration Theater',
    image: room6Image,
    capacity: 10,
    price: 4999,
    amenities: ['Party Decorations', 'Large Screen', 'Premium Sound'],
    available: true,
  },
]

const Home = () => {
    const navigate = useNavigate()
    const handleBookRoom = (room) => {
      if (!localStorage.getItem('currentUser')) {
        navigate('/signup')
        return
      }

      navigate('/booking', { state: room })
    }

    const [rooms] = useState(() => {
  const navigate = useNavigate()

  const [rooms] = useState(() => {
    const savedRooms = localStorage.getItem('rooms')

    if (savedRooms) {
      return JSON.parse(savedRooms)
    }

    localStorage.setItem('rooms', JSON.stringify(initialRooms))

    return initialRooms
  })

  return (
    <>
    <section>
       {/* navbar */}
       
      <div className='bg-purple-500 flex justify-between items-center p-5 '>
        <div className='flex justify-center  items-center '>
           <img  src={Logo} alt="Mini Theater logo" className="h-12 w-auto  rounded-2xl justify-center" />
        </div>
          <div className='flex justify-between items-center gap-6'>
            <Link to={"/"}className='hover:text-white'>Home</Link>
            <Link to={"/bookroom"}className='hover:text-white'>Book A Room</Link>
            <Link to={"/rooms"}className='hover:text-white'>Rooms</Link>
            <Link to={"/service"}className='hover:text-white'>Services</Link>
            <Link to={"/works"}className='hover:text-white'>How It Works</Link>
            <Link to={"/mybookings"} className='hover:text-white'>My Bookings</Link>
            <Link to={"/about"}className='hover:text-white'>About</Link>
            <Link to={"/contact"} className='hover:text-white'>Contact</Link>
            <Link to={"/login"} className=' bg-black text-white justify-between items-center p-2 hover:text-purple-400 rounded-2xl'>Login</Link>
            <Link to={"/signup"} className=' bg-black text-white justify-between items-center p-2 hover:text-purple-400 rounded-2xl'>SignUp</Link>
          </div>
      {/* Navbar */}
      <section>
        <div className="bg-purple-700 flex flex-wrap justify-between items-center gap-4 px-8 py-4 shadow-md">

          <div className="flex justify-center items-center">
            <img
              src={Logo}
              alt="Mini Theater logo"
              className="h-12 w-auto rounded-lg"
            />
          </div>

          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">

            <Link
              to="/"
              className="text-purple-100 hover:text-white transition-colors"
            >
              Home
            </Link>

            <Link
              to="/rooms"
              className="text-purple-100 hover:text-white transition-colors"
            >
              Rooms
            </Link>

            <Link
              to="/service"
              className="text-purple-100 hover:text-white transition-colors"
            >
              Services
            </Link>

            <Link
              to="/works"
              className="text-purple-100 hover:text-white transition-colors"
            >
              How It Works
            </Link>

            <Link
              to="/about"
              className="text-purple-100 hover:text-white transition-colors"
            >
              About
            </Link>

            <Link
              to="/contact"
              className="text-purple-100 hover:text-white transition-colors"
            >
              Contact
            </Link>

            <Link
              to="/login"
              className="border border-white text-white px-4 py-2 rounded-lg hover:bg-white hover:text-purple-700 transition-colors"
            >
              Login
            </Link>

            <Link
              to="/signup"
              className="bg-white text-purple-700 px-4 py-2 rounded-lg hover:bg-purple-100 transition-colors"
            >
              SignUp
            </Link>

          </div>
        </div>
      </section>

      {/* Full Width Banner */}
      <section className="w-full h-screen">

        <div className="relative w-full h-full md:h-[570px] overflow-hidden">
          <img
            src={CinemaBanner}
            alt="Mini Theater Cinema"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-20 max-w-2xl">

            <p className="text-purple-700 font-semibold text-lg mb-3">
              Your Moments, Your Theater
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              YOUR PRIVATE

              <span className="block text-purple-700">
                CINEMA EXPERIENCE
              </span>

              STARTS HERE!
            </h1>

            <p className="text-gray-700 text-base md:text-lg mt-5 max-w-md">
              Enjoy your favorite movies and celebrate special moments
              in your own private theater.
            </p>

            <button
              onClick={() => navigate('/rooms')}
              className="mt-7 bg-purple-700 hover:bg-purple-800 text-white font-semibold px-8 py-3 rounded-lg shadow-md transition-all"
            >
              Explore Rooms →
            </button>

          </div>
        </div>
      <div className='bg-gray-200 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center p-20'>
        {rooms.map((room) => (
          <div
            key={room.id}
            className='bg-purple-400 p-8 flex flex-col justify-center items-center shadow-lg rounded-2xl'
          >
            <img
              src={roomImages[room.id] || room.image}
              alt={room.name}
              className='bg-purple-50 p-3 w-full h-48 object-cover rounded-xl'
            />
            <div className='flex flex-col gap-2 mt-4 w-full'>
              <h2 className='text-xl font-bold'>{room.name}</h2>
              <p>Capacity: {room.capacity} people</p>
              <p>₹{room.price} / hour</p>
              <p>{room.amenities.join(', ')}</p>
              <p>{room.available ? 'Available' : 'Not available'}</p>
              {room.available ? (
                <button
                    onClick={() => handleBookRoom(room)}
                    className='bg-black rounded-2xl text-white p-2 text-center'>

      </section>

      {/* Room Cards */}
      <section>

        <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center p-10">

          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white flex flex-col shadow-md rounded-xl overflow-hidden"
            >

              <img
                src={roomImages[room.id] || room.image}
                alt={room.name}
                className="w-full h-48 object-cover"
              />

              <div className="flex flex-col gap-2 p-5 w-full text-gray-700">

                <h2 className="text-xl font-semibold text-gray-900">
                  {room.name}
                </h2>

                <p className="text-sm">
                  Capacity: {room.capacity} people
                </p>

                <p className="text-lg font-bold text-purple-700">
                  ₹{room.price} / hour
                </p>

                <p className="text-sm text-gray-500">
                  {room.amenities.join(', ')}
                </p>

                <p
                  className={`text-sm font-medium ${
                    room.available
                      ? 'text-green-600'
                      : 'text-red-600'
                  }`}
                >
                  {room.available ? 'Available' : 'Not available'}
                </p>

                {room.available ? (

                  <button
                    onClick={() => navigate('/booking', { state: room })}
                    className="mt-2 bg-purple-700 hover:bg-purple-800 transition-colors rounded-lg text-white py-2 text-center"
                  >
                    Book Room
                  </button>

                ) : (

                  <button
                    className="mt-2 bg-gray-400 cursor-not-allowed rounded-lg text-white py-2"
                    disabled
                  >
                    Book Room
                  </button>

                )}

              </div>
            </div>
          ))}

        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="bg-gray-900 text-gray-300 text-sm flex p-4 gap-3 justify-center items-center">

          <h1>
            Mini_Theater_Booking copy @ALL RIGHTS RESERVED
          </h1>

        </div>
      </footer>
    </>
  )
}

export default Home
