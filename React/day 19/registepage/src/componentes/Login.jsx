
// const Login = () => {
//   return (

//     <>
//     <form className='bg-gray-600 p-3   h-screen flex flex-col gap-6 items-center justify-center' >
//       <input className=' text-white border p-3 rounded-2xl' type="text" placeholder="Username" />
//       <input className=' text-white border p-3 rounded-2xl' type="password" placeholder="Password" />
//       <button type="submit" className='bg-blue-500  p-3 rounded-2xl'>
//         Login
//       </button>
//     </form>
//     </>
//   )
// }

// export default Login


import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 p-5">

      {/* Login Card */}
      <form className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl flex flex-col gap-6">

        {/* Heading */}
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white text-3xl shadow-lg">
            🔐
          </div>

          <h1 className="text-3xl font-bold text-white">
            Welcome Back!
          </h1>

          <p className="text-gray-300 mt-2">
            Login to continue your journey
          </p>
        </div>

        {/* Username */}
        <div>
          <label className="block text-sm text-gray-200 mb-2">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter your username"
            className="w-full bg-white/10 border border-gray-500 text-white placeholder-gray-400 p-3 rounded-xl outline-none transition duration-300 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/30"
          />
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm text-gray-200 mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full bg-white/10 border border-gray-500 text-white placeholder-gray-400 p-3 rounded-xl outline-none transition duration-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-400/30"
          />
        </div>

        {/* Remember & Forgot */}
        <div className="flex items-center justify-between text-sm text-gray-300">

          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-blue-500" />
            Remember me
          </label>

          <a href="#" className="text-blue-300 hover:text-white transition">
            Forgot password?
          </a>

        </div>

        {/* Login Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold p-3 rounded-xl shadow-lg transition duration-300 hover:scale-105 hover:shadow-purple-500/30 active:scale-95"
        >
          Login →
        </button>

        {/* Register Link */}
        <p className="text-center text-gray-300 text-sm">
          Don't have an account?
          <a href="#" className="text-blue-300 font-semibold ml-1 hover:text-white transition">
            Sign Up
          </a>
        </p>

      </form>

    </div>
  )
}

export default Login