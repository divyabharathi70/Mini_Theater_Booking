import room1Image from '../asserts/images/Room1.jpeg'
import room2Image from '../asserts/images/Room2.jpeg'
import room3Image from '../asserts/images/Room3.jpeg'
import room4Image from '../asserts/images/Room4.jpeg'
import room5Image from '../asserts/images/Room5.jpeg'
import room6Image from '../asserts/images/Room 6.jpeg'


export const roomImages = {
  1: room1Image,
  2: room2Image,
  3: room3Image,
  4: room4Image,
  5: room5Image,
  6: room6Image,
}

export const initialRooms = [
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