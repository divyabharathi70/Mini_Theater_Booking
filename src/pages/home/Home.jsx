
import Logo from '../../asserts/images/Logo.jpeg'
import CinemaBanner from '../../asserts/images/CinemaBanner.png'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { initialRooms, roomImages } from '../../datas/TheaterDatas.js'
import About from '../../components/about/About'
import Feedback from '../../components/feedback/FeedBack'
import cakeBouquetImage from '../../asserts/images/service-cake-bouquet.jpg'
import decorImage from '../../asserts/images/service-personalized-decor.jpg'
import snacksImage from '../../asserts/images/service-snacks-beverages.jpg'
import photoPrintsImage from '../../asserts/images/service-photo-prints.jpg'

const Home = () => {
  const navigate = useNavigate()

  const [currentUser, setCurrentUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('currentUser')) || null
    } catch {
      return null
    }
  })

  const [showMenu, setShowMenu] = useState(false)
  const services = [
    { title: 'Cakes & Bouquets', description: 'Celebrate with a freshly arranged cake and a beautiful bouquet for your special moment.', image: cakeBouquetImage },
    { title: 'Personalized Décor', description: 'Set the scene with custom decorations made for birthdays, anniversaries, proposals, and more.', image: decorImage },
    { title: 'Snacks & Beverages', description: 'Make movie time even better with theater snacks and refreshing drinks.', image: snacksImage },
    { title: 'Instant Photo Prints', description: 'Take home a printed keepsake and remember your theater experience long after the show.', image: photoPrintsImage },
  ]

  const [rooms] = useState(() => {
    try {
      const savedRooms = localStorage.getItem('rooms')

      if (savedRooms) {
        return JSON.parse(savedRooms)
      }
    } catch {
      console.error('Error loading rooms from localStorage')
    }

    localStorage.setItem('rooms', JSON.stringify(initialRooms))
    return initialRooms
  })

  const handleBookRoom = (room) => {
    if (!currentUser) {
      navigate('/signup')
      return
    }

    navigate('/booking', { state: { room } })
  }

  const handleSignOut = () => {
    localStorage.removeItem('currentUser')
    setCurrentUser(null)
    setShowMenu(false)
    navigate('/')
  }

  return (
    <>
      {/* Navbar */}
      <section>
        <div className="bg-[#3D4F62] text-[#F8FAFC] flex flex-wrap justify-between items-center px-8 py-4">

          <div className="flex justify-center items-center">
            <img
              src={Logo}
              alt="Mini Theater logo"
              className="h-12 w-auto rounded-2xl"
            />
            <span className="ml-3 text-2xl font-bold text-[#F8FAFC]">Momentora</span>
          </div>

          <div className="flex flex-wrap items-center gap-6">

            <Link to="/" className="hover:text-[#F8FAFC]">
              Home
            </Link>

            <Link to="/rooms" className="hover:text-[#F8FAFC]">
              Rooms
            </Link>

            <a href="#services" className="hover:text-[#F8FAFC]">
              Services
            </a>

            <a href="#how-it-works" className="hover:text-[#F8FAFC]">
              How It Works
            </a>

            <Link to="/mybookings" className="hover:text-[#F8FAFC]">
              My Bookings
            </Link>

            <Link to="/about" className="hover:text-[#F8FAFC]">
              About
            </Link>

            <a href="#feedback" className="hover:text-[#F8FAFC]">Feedback</a>

            {!currentUser ? (
              <>
                <Link
                  to="/login"
                  className="bg-[#F8FAFC] text-[#3D4F62] p-2 rounded-2xl"
                >
                  Login
                </Link>

                <Link
                  to="/signup"
                  className="bg-[#F8FAFC] text-[#3D4F62] p-2 rounded-2xl"
                >
                  SignUp
                </Link>
              </>
            ) : (
              <div className="relative">

                {/* Profile Icon */}
                <button
                  onClick={() => setShowMenu(!showMenu)}
                  className="flex flex-col items-center"
                >
                  <div className="w-10 h-10 rounded-full bg-[#F8FAFC] text-[#3D4F62] flex items-center justify-center overflow-hidden text-xl font-bold">

                    {currentUser.name?.charAt(0).toUpperCase() || 'U'}

                  </div>
                </button>

                {/* Dropdown Menu */}
                {showMenu && (
                  <div className="absolute right-0 top-16 w-36 bg-[#F8FAFC] shadow-lg rounded-lg border z-50">

                    <Link
                      to="/profile"
                      onClick={() => setShowMenu(false)}
                      className="block px-4 py-3 hover:bg-[#F8FAFC] text-[#3D4F62]"
                    >
                      Profile
                    </Link>

                    <button
                      onClick={handleSignOut}
                      className="block w-full text-left px-4 py-3 hover:bg-[#F8FAFC] text-[#3D4F62]"
                    >
                      Sign Out
                    </button>

                  </div>
                )}

              </div>
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

          <div className="absolute inset-0 bg-[#3D4F62]/10"></div>

          <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 md:px-20 max-w-2xl">

            <p className="text-[#3D4F62] font-semibold text-lg mb-3">
              Your Moments, Your Theater
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-[#3D4F62] leading-tight">
              YOUR PRIVATE

              <span className="block text-[#3D4F62]">
                CINEMA EXPERIENCE
              </span>

              STARTS HERE!
            </h1>

            <p className="text-[#3D4F62] text-base md:text-lg mt-5 max-w-md">
              Enjoy your favorite movies and celebrate special moments
              in your own private theater.
            </p>

            <button
              onClick={() => navigate('/rooms')}
              className="mt-7 bg-[#3D4F62] hover:bg-[#3D4F62] text-[#F8FAFC] font-semibold px-8 py-3 rounded-lg shadow-md transition-all"
            >
              Explore Rooms →
            </button>

          </div>
        </div>
      </section>

      {/* Room Cards */}
      <section>

        <div className="bg-[#F8FAFC] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center p-10">

          {rooms.map((room) => (

            <div
              key={room.id}
              className="bg-[#F8FAFC] flex flex-col shadow-md rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
            >

              <img
                src={roomImages[room.id] || room.image}
                alt={room.name}
                className="w-full h-48 object-cover"
              />

              <div className="flex flex-col gap-2 p-5 w-full text-[#3D4F62]">

                <h2 className="text-xl font-semibold text-[#3D4F62]">
                  {room.name}
                </h2>

                <p className="text-sm">
                  Capacity: {room.capacity} people
                </p>

                <p className="text-lg font-bold text-[#3D4F62]">
                  ₹{room.price} / hour
                </p>

                <p className="text-sm text-[#3D4F62]">
                  {room.amenities?.join(', ')}
                </p>

                <p
                  className={`text-sm font-medium ${
                    room.available
                      ? 'text-[#3D4F62]'
                      : 'text-[#3D4F62]'
                  }`}
                >
                  {room.available ? 'Available' : 'Not available'}
                </p>

                {room.available ? (

                  <button
                    onClick={() => handleBookRoom(room)}
                    className="mt-2 bg-[#3D4F62] hover:bg-[#3D4F62] transition-colors rounded-lg text-[#F8FAFC] py-2"
                  >
                    Book Room
                  </button>

                ) : (

                  <button
                    className="mt-2 bg-[#F8FAFC] cursor-not-allowed rounded-lg text-[#3D4F62] py-2"
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

      <section id="how-it-works" className="bg-[#F8FAFC] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="font-semibold uppercase tracking-widest text-[#3D4F62]">Easy as 1, 2, 3</p>
            <h2 className="mt-2 text-3xl font-bold text-[#3D4F62] md:text-4xl">How It Works</h2>
            <p className="mt-3 text-[#3D4F62]">Plan your private cinema experience in a few simple steps.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[['01', 'Choose a room', 'Browse our private theaters and pick the room that suits your occasion.'], ['02', 'Set your time', 'Select a date and available time slot for your visit.'], ['03', 'Make it special', 'Add a theme, decorations, snacks, or a surprise, then review your booking.']].map(([number, title, description]) => (
              <article key={number} className="rounded-2xl bg-[#F8FAFC] p-7 shadow-sm">
                <span className="text-sm font-bold tracking-widest text-[#3D4F62]">STEP {number}</span>
                <h3 className="mt-3 text-xl font-bold text-[#3D4F62]">{title}</h3>
                <p className="mt-2 leading-7 text-[#3D4F62]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="bg-[#F8FAFC] px-6 py-16 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="font-semibold uppercase tracking-widest text-[#3D4F62]">Make it yours</p>
            <h2 className="mt-2 text-3xl font-bold text-[#3D4F62] md:text-4xl">Theater Services</h2>
            <p className="mt-3 text-[#3D4F62]">Choose a celebration theme, add decorations, or arrange a special surprise with your room booking.</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="overflow-hidden rounded-2xl border border-[#3D4F62] bg-[#F8FAFC] shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img src={service.image} alt={service.title} className="h-48 w-full object-cover" />
                <div className="p-5">
                <h3 className="text-xl font-bold text-[#3D4F62]">{service.title}</h3>
                <p className="mt-2 min-h-20 text-[#3D4F62]">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button onClick={() => navigate('/rooms')} className="rounded-lg bg-[#3D4F62] px-6 py-3 font-semibold text-[#F8FAFC] hover:bg-[#3D4F62]">Explore rooms and services</button>
          </div>
        </div>
      </section>

      <section id="about" className="scroll-mt-4">
        <About />
      </section>

      <section id="feedback" className="scroll-mt-4">
        <Feedback />
      </section>

      {/* Footer */}
      <footer>

        <div className="bg-[#3D4F62] text-[#F8FAFC] text-sm flex p-4 gap-3 justify-center items-center">

          <h1>
            Mini_Theater_Booking copy @ALL RIGHTS RESERVED
          </h1>

        </div>

      </footer>
    </>
  )
}

export default Home
