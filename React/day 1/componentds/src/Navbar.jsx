import { Component } from "react";



class Navbar extends Component {


    render(){
  return(
  <>
  <div>


      <nav className="bg-slate-900 text-white px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <h1 className="text-2xl font-bold text-cyan-400">
            MyWebsite
          </h1>

          
          <div className="flex gap-8">
            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              Home
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              About
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              Services
            </a>

            <a
              href="#"
              className="hover:text-cyan-400 transition"
            >
              Contact
            </a>
          </div>

          <button className="bg-cyan-500 px-5 py-2 rounded-lg hover:bg-cyan-600">
            Login
          </button>

        </div>
      </nav>
    
  </div>
  </>
  )


    }
}
export default Navbar




