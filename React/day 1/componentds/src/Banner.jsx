import { Component } from "react";

class Banner extends Component{

render(){
    return(
<>

  <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between">

        
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Build Your Future
            </h1>

            <p className="text-lg md:text-xl text-blue-100 mb-8">
              Learn React, Tailwind CSS and modern web development
              with practical projects.
            </p>

            <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get Started
            </button>
          </div>

          {/* Right Side */}
          <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
            <div className="bg-white/20 backdrop-blur-md p-10 rounded-3xl">
              <h2 className="text-3xl font-bold">
                React + Tailwind
              </h2>

              <p className="mt-3 text-blue-100">
                Create modern responsive websites
              </p>
            </div>
          </div>

        </div>
      </section>

</>

    )
}

}

export default Banner