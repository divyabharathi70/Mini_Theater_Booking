// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';

// const Register = () => {

// const navigate = useNavigate();

// const [username,setUsername]=useState({name:"",email:"",password:""})



// const handleChange =(e)=>{
//  setUsername({...username,[e.target.name]:e.target.value})

// }



// const handleClick=(e)=>{
// e.preventDefault()


// const getData=JSON.parse(localStorage.getItem("user")) || []
// const obj ={userid:Date.now(),name:username.name,email:username.email,password:username.password}
// getData.push(obj)
// localStorage.setItem("user",JSON.stringify(getData))
// alert("Register Successfully")

// setUsername({name:"",email:"",password:""})
 
// setTimeout(()=>{
//   navigate("/login")},1000)




// }


//   return (
//    <>
   
//     <form  onSubmit={handleClick} className=' p-3  bg-amber-400 flex flex-col gap-2 items-center justify-center' >
//       <input className=' bg-black p-3 rounded-2xl text-white  ' type="text" placeholder="Username" value={username.name} onChange={handleChange} name="name" />      
//       <input className=' bg-black  p-3 rounded-2xl text-white  ' type="text" placeholder="Email" value={username.email} onChange={handleChange} name="email" />
//       <input className='  bg-black p-3 rounded-2xl text-white' type="password" placeholder="Password" value={username.password} onChange={handleChange} name="password" />
//       <button type="submit" className='bg-blue-500 rounded-2xl p-3 w-50 text-white ' > Register </button>
//     </form>
//    </>
//   )
// }

// export default Register




import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Register = () => {

  const navigate = useNavigate()

  const [username, setUsername] = useState({
    name: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    setUsername({ ...username, [e.target.name]: e.target.value })
  }

  const handleClick = (e) => {
    e.preventDefault()

    const getData = JSON.parse(localStorage.getItem("user")) || []

    const obj = {
      userid: Date.now(),
      name: username.name,
      email: username.email,
      password: username.password
    }

    getData.push(obj)

    localStorage.setItem("user", JSON.stringify(getData))

    alert("Register Successfully")

    setUsername({ name: "", email: "", password: "" })

    setTimeout(() => {
      navigate("/login")
    }, 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-purple-950 to-blue-950 p-5">

      {/* Register Card */}
      <form
        onSubmit={handleClick}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl flex flex-col gap-5"
      >

        {/* Heading */}
        <div className="text-center mb-3">

          <div className="w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center text-4xl shadow-lg">
            👤
          </div>

          <h1 className="text-3xl font-extrabold text-white">
            Create Account
          </h1>

          <p className="text-gray-300 mt-2">
            Register now and get started!
          </p>

        </div>

        {/* Username */}
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter your username"
            value={username.name}
            onChange={handleChange}
            name="name"
            required
            className="w-full p-3 rounded-xl bg-white/10 border border-gray-500 text-white placeholder-gray-400 outline-none transition duration-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            value={username.email}
            onChange={handleChange}
            name="email"
            required
            className="w-full p-3 rounded-xl bg-white/10 border border-gray-500 text-white placeholder-gray-400 outline-none transition duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Create a password"
            value={username.password}
            onChange={handleChange}
            name="password"
            required
            minLength={6}
            className="w-full p-3 rounded-xl bg-white/10 border border-gray-500 text-white placeholder-gray-400 outline-none transition duration-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30"
          />
        </div>

        {/* Register Button */}
        <button
          type="submit"
          className="w-full mt-2 p-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg shadow-lg transition duration-300 hover:scale-105 hover:shadow-purple-500/30 active:scale-95"
        >
          Register →
        </button>

        {/* Login Link */}
        <p className="text-center text-gray-300 text-sm">
          Already have an account?
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="ml-1 text-blue-300 font-bold hover:text-white transition"
          >
            Login
          </button>
        </p>

      </form>
    </div>
  )
}

export default Register