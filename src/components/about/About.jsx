
import React from "react";

const About = () => {

  return (

    <div className="min-h-screen bg-gray-950 text-white">

      {/* Heading */}

      <section className="text-center py-16 px-5">

        <h1 className="text-4xl font-bold text-purple-500">
          About Mini Theater
        </h1>

        <p className="text-gray-400 mt-4">
          Your Movies, Your Moments, Your Theater.
        </p>

      </section>


      {/* About Content */}

      <section className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10 items-center">

        <div>

          <h2 className="text-3xl font-bold mb-5">
            Welcome to Mini Theater 🎬
          </h2>

          <p className="text-gray-400 leading-8">
            Mini Theater is a movie booking platform where users
            can explore movies, select their favorite seats and
            book tickets easily.
          </p>

          <p className="text-gray-400 leading-8 mt-4">
            Our goal is to make movie booking simple, fast and
            enjoyable for everyone.
          </p>

        </div>

        <div>

          <img
            src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
            alt="Cinema"
            className="w-full h-72 object-cover rounded-2xl"
          />

        </div>

      </section>


      {/* Features */}

      <section className="bg-gray-900 py-16 px-6">

        <h2 className="text-3xl font-bold text-center mb-10">
          What We Offer
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

          <div className="bg-gray-800 p-8 rounded-xl text-center">

            <h3 className="text-xl font-bold text-purple-400">
              🎥 Explore Movies
            </h3>

            <p className="text-gray-400 mt-4">
              Discover your favorite movies and new releases.
            </p>

          </div>


          <div className="bg-gray-800 p-8 rounded-xl text-center">

            <h3 className="text-xl font-bold text-purple-400">
              💺 Select Seats
            </h3>

            <p className="text-gray-400 mt-4">
              Choose your preferred seats before booking.
            </p>

          </div>


          <div className="bg-gray-800 p-8 rounded-xl text-center">

            <h3 className="text-xl font-bold text-purple-400">
              🎟️ Easy Booking
            </h3>

            <p className="text-gray-400 mt-4">
              Book your movie tickets with a simple process.
            </p>

          </div>

        </div>

      </section>
      
<section className="px-6 md:px-16 py-16">

  <div className="bg-gray-900 rounded-2xl p-8 md:p-12">

    <div className="grid md:grid-cols-2 gap-10 items-center">

      {/* Left Content */}

      <div>

        <h2 className="text-3xl font-bold">
          Enjoy Your Movie Experience 🎬
        </h2>

        <p className="text-gray-400 mt-5 leading-7">
          Watch your favorite movies, select comfortable seats
          and enjoy every moment with Mini Theater.
        </p>

        <button className="mt-6 bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700">
          Book Your Movie →
        </button>

      </div>

      {/* Right Content */}

      <div className="grid grid-cols-2 gap-4">

        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-purple-400">4K</h2>
          <p className="text-gray-400 mt-2">Visual Quality</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-purple-400">HD</h2>
          <p className="text-gray-400 mt-2">Sound Quality</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-purple-400">100%</h2>
          <p className="text-gray-400 mt-2">Comfort</p>
        </div>

        <div className="bg-gray-800 p-6 rounded-xl text-center">
          <h2 className="text-3xl font-bold text-purple-400">VIP</h2>
          <p className="text-gray-400 mt-2">Premium Seats</p>
        </div>

      </div>

    </div>

  </div>

</section>



      {/* Footer Text */}

      <section className="text-center py-12 px-5">

        <h2 className="text-2xl font-bold">
          Enjoy Your Movie Time! 🍿
        </h2>

        <p className="text-gray-400 mt-3">
          Thank you for choosing Mini Theater.
        </p>

      </section>

    </div>

  );

};

export default About;
