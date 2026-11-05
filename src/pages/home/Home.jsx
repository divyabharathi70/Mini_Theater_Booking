import Logo from '../../asserts/images/Logo.jpeg'
import CinemaBanner from '../../asserts/images/CinemaBanner.png'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {initialRooms} from '../../datas/TheaterDatas.js'
import {roomImages} from '../../datas/TheaterDatas.js'

const Home = () => {
  const navigate = useNavigate() 
  // Current Logged-in User
  const currentUser = JSON.parse(localStorage.getItem("currentUser")) || null

  // Room Details
  const [rooms] = useState(() => {
    const savedRooms = localStorage.getItem('rooms')

    if (savedRooms) {
      return JSON.parse(savedRooms)
    }

    localStorage.setItem('rooms', JSON.stringify(initialRooms))

    return initialRooms
  })

  // Book Room Function
  const handleBookRoom = (room) => {

    if (!currentUser) {
      navigate('/signup')
      return
    }

    navigate('/booking', { state: { room } })
  }

  return (
    <>

      {/* Navbar */}
      <section>

        <div className='bg-purple-500 flex justify-between items-center px-8 py-4'>

          {/* Logo */}
          <div className='flex justify-center items-center'>

            <img
              src={Logo}
              alt="Mini Theater logo"
              className="h-12 w-auto rounded-2xl"
            />

          </div>

          {/* Navigation Links */}
          <div className='flex items-center gap-6'>

            <Link to={"/"} className='hover:text-white'>
              Home
            </Link>

            <Link to={"/bookroom"} className='hover:text-white'>
              Book A Room
            </Link>

            <Link to={"/rooms"} className='hover:text-white'>
              Rooms
            </Link>

            <Link to={"/service"} className='hover:text-white'>
              Services
            </Link>

            <Link to={"/works"} className='hover:text-white'>
              How It Works
            </Link>

            <Link to={"/mybookings"} className='hover:text-white'>
              My Bookings
            </Link>

            <Link to={"/about"} className='hover:text-white'>
              About
            </Link>

            <Link to={"/contact"} className='hover:text-white'>
              Contact
            </Link>


            {!currentUser ? (

              <>
                <Link
                  to="/login"
                  className="bg-black text-white px-4 py-2 rounded-lg"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="bg-black text-white px-4 py-2 rounded-lg"
                >
                  SignUp
                </Link>
              </>

            ) : (

              <Link to="/profile" className="flex flex-col items-center">

                {currentUser.profileImage ? (

                  <img
                    src={currentUser.profileImage}
                    alt="Profile"
                    className="w-10 h-10 rounded-full object-cover"
                  />

                ) : (

                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center text-xl font-bold">
                    {currentUser.name?.charAt(0).toUpperCase() || "U"}
                  </div>

                )}

                <span className="text-sm font-semibold text-black">
                  {currentUser.name}
                </span>

              </Link>

            )}

          </div>

        </div>

      </section>


      {/* Full Width Banner */}
      <section className="w-full">

        <div className="relative w-full h-screen overflow-hidden">

          <img
            src={CinemaBanner}
            alt="Mini Theater Cinema"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10"></div>

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

      </section>


      {/* Room Cards */}
      <section>

        <div className="bg-gray-100 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center p-10">

          {rooms.map((room) => (

            <div
              key={room.id}
              className="bg-white flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
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
                    onClick={() => handleBookRoom(room)}
                    className="mt-2 bg-purple-700 hover:bg-purple-800 transition-colors rounded-lg text-white py-2"
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
