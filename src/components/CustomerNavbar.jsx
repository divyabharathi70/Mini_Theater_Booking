import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../asserts/images/Logo.jpeg'

function CustomerNavbar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [currentUser, setCurrentUser] = useState(() => {
    try { return JSON.parse(localStorage.getItem('currentUser') || 'null') }
    catch { return null }
  })
  const [showMenu, setShowMenu] = useState(false)

  function signOut() {
    localStorage.removeItem('currentUser')
    setCurrentUser(null)
    setShowMenu(false)
    navigate('/')
  }

  function goToHomeSection(event, sectionId) {
    event.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')
      window.setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      }, 150)
      return
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
  }

  return <header className="sticky top-0 z-40 flex flex-wrap items-center justify-between gap-4 bg-[#3D4F62] px-6 py-3 text-[#F8FAFC] shadow-md md:px-8">
    <Link to="/" className="flex items-center gap-3"><img src={Logo} alt="Momentora" className="h-11 w-11 rounded-xl object-cover" /><span className="text-2xl font-bold text-[#F8FAFC]">Momentora</span></Link>
    <nav className="flex flex-wrap items-center gap-5 font-semibold">
      <Link to="/" className="hover:text-[#F8FAFC]">Home</Link>
      <Link to="/rooms" className="hover:text-[#F8FAFC]">Rooms</Link>
      <a href="/#services" onClick={(event) => goToHomeSection(event, 'services')} className="hover:text-[#F8FAFC]">Services</a>
      <a href="/#how-it-works" onClick={(event) => goToHomeSection(event, 'how-it-works')} className="hover:text-[#F8FAFC]">How It Works</a>
      <Link to="/mybookings" className="hover:text-[#F8FAFC]">My Bookings</Link>
      <Link to="/about" className="hover:text-[#F8FAFC]">About</Link>
      <a href="/#feedback" onClick={(event) => goToHomeSection(event, 'feedback')} className="hover:text-[#F8FAFC]">Feedback</a>
      {!currentUser ? <>
        <Link to="/login" className="rounded-2xl bg-[#F8FAFC] p-2 text-[#3D4F62]">Login</Link>
        <Link to="/signup" className="rounded-2xl bg-[#F8FAFC] p-2 text-[#3D4F62]">SignUp</Link>
      </> : <div className="relative">
        <button onClick={() => setShowMenu(!showMenu)} aria-label="Open profile menu" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F8FAFC] text-xl font-bold text-[#3D4F62]">{currentUser.name?.charAt(0).toUpperCase() || 'U'}</button>
        {showMenu && <div className="absolute right-0 top-12 z-50 w-36 rounded-lg border bg-[#F8FAFC] text-[#3D4F62] shadow-lg"><Link to="/profile" onClick={() => setShowMenu(false)} className="block px-4 py-3 hover:bg-[#F8FAFC]">Profile</Link><button onClick={signOut} className="block w-full px-4 py-3 text-left text-[#3D4F62] hover:bg-[#F8FAFC]">Sign Out</button></div>}
      </div>}
    </nav>
  </header>
}

export default CustomerNavbar
