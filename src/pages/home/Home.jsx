import { useState } from 'react'
import { Link } from 'react-router-dom'
import room1Image from '../../asserts/images/Room1.jpeg'
import room2Image from '../../asserts/images/Room2.jpeg'
import room3Image from '../../asserts/images/Room3.jpeg'
import room4Image from '../../asserts/images/Room4.jpeg'
import room5Image from '../../asserts/images/Room5.jpeg'
import room6Image from '../../asserts/images/Room 6.jpeg'
import Logo from '../../asserts/images/Logo.jpeg'

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
const [rooms] = useState(() => {
  const savedRooms = localStorage.getItem('rooms')

  if (savedRooms) {
    return JSON.parse(savedRooms)
  }
    localStorage.setItem('rooms', JSON.stringify(initialRooms))
   console.log(JSON.parse(localStorage.getItem("rooms")));
    
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
          <div className='flex justify-between items-centern gap-6'>
            <Link to={"/"}className='hover:text-white'>Home</Link>
            <Link to={"/bookroom"}className='hover:text-white'>Book A Room</Link>
            <Link to={"/rooms"}className='hover:text-white'>Rooms</Link>
            <Link to={"/service"}className='hover:text-white'>Services</Link>
            <Link to={"/works"}className='hover:text-white'>How It Works</Link>
            <Link to={"/about"}className='hover:text-white'>About</Link>
            <Link to={"/contact"} className='hover:text-white'>Contact</Link>
            <Link to={"/login"} className=' bg-black text-white justify-between items-center p-2 hover:text-purple-400 rounded-2xl'>Login</Link>
            <Link to={"/signup"} className=' bg-black text-white justify-between items-center p-2 hover:text-purple-400 rounded-2xl'>SignUp</Link>
          </div>
          </div>
     </section>

      {/* cards */}
      <section>
        <div className='bg-gray-300 flex flex-col justify-between  p-10  '>
          <div className=' bg-gray-500 flex justify-center text-2xl font-family:"Oswald" p-20 text-wrap '>
            <p> YOUR PRIVATE CINIMA EXPERINCE STARTS HERE! </p>

          </div>
          <div>

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
                <Link
                  to={`/bookroom?roomId=${room.id}`}
                  className='bg-black rounded-2xl text-white p-2 text-center'
                >
                  Book Room
                </Link>
              ) : (
                <button
                  className='bg-black rounded-2xl text-white p-2 disabled:bg-gray-500'
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
      <footer>
        <div className='bg-black text-white flex p-2 gap-3 justify-center items-center'>
          <h1>Mini_Theater_Booking copy @ALL RIGHTS RESERVED </h1>
        </div>

      </footer>

    </>
  )
}

export default Home