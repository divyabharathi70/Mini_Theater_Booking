

import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#08080d] text-white">

    


      {/* HERO SECTION */}

      <section className="px-6 md:px-16 py-16">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}

          <div>

            <p className="text-purple-400 tracking-[5px] text-sm mb-5">
              ✦ OUR STORY
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight">

              A BIG SCREEN

              <span className="block text-purple-500">
                FEELING.
              </span>

            </h1>

            <p className="text-gray-400 mt-7 text-lg leading-8 max-w-lg">

              Welcome to Mini Theater.

              Experience your favorite movies with premium sound,
              comfortable seating and unforgettable cinematic moments.

            </p>



            <div className="flex gap-10 mt-12">

              <div>

                <h2 className="text-3xl font-bold text-purple-400">
                  4K
                </h2>

                <p className="text-gray-500 text-sm">
                  Visual Quality
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-purple-400">
                  HD
                </h2>

                <p className="text-gray-500 text-sm">
                  Premium Sound
                </p>

              </div>

              <div>

                <h2 className="text-3xl font-bold text-purple-400">
                  100%
                </h2>

                <p className="text-gray-500 text-sm">
                  Comfort
                </p>

              </div>

            </div>

          </div>


          {/* RIGHT IMAGE */}

          <div className="relative">

            <div className="absolute -inset-3 bg-purple-600/20 blur-3xl rounded-full"></div>

            <div className="relative overflow-hidden rounded-3xl border border-white/10">

              <img
                src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba"
                alt="Mini Theater Cinema"
                className="w-full h-[450px] object-cover"
              />

             

            </div>

          </div>

        </div>

      </section>


      {/* ABOUT SECTION */}

      <section className="px-6 md:px-16 py-24 bg-[#0d0d15]">

        <div className="text-center max-w-2xl mx-auto">

          <p className="text-purple-400 tracking-[4px] text-sm">
            ✦ ABOUT US
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">

            More Than Just

            <span className="text-purple-500">
              {" "}A Movie.
            </span>

          </h2>

          <p className="text-gray-400 mt-6 leading-8">

            We created Mini Theater to bring people together
            through movies.

            Enjoy a personal cinema experience where
            every seat feels special and every moment
            becomes unforgettable.

          </p>

        </div>


        {/* FEATURE CARDS */}

        <div className="grid md:grid-cols-3 gap-7 mt-16">

          {/* CARD 1 */}

          <div className="group bg-[#15151f] border border-white/5 p-8 rounded-3xl hover:border-purple-500/50 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-3xl">

              🎥

            </div>

            <h3 className="text-2xl font-bold mt-7">
              Private Screening
            </h3>

            <p className="text-gray-400 mt-4 leading-7">

              Enjoy your favorite movies in your own
              comfortable theater environment.

            </p>

         

          </div>


          {/* CARD 2 */}

          <div className="group bg-[#15151f] border border-white/5 p-8 rounded-3xl hover:border-purple-500/50 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-3xl">

              💺

            </div>

            <h3 className="text-2xl font-bold mt-7">
              Choose Your Seat
            </h3>

            <p className="text-gray-400 mt-4 leading-7">

              Select your favorite seat and enjoy
              a comfortable movie experience.

            </p>


          </div>


          {/* CARD 3 */}

          <div className="group bg-[#15151f] border border-white/5 p-8 rounded-3xl hover:border-purple-500/50 hover:-translate-y-2 transition duration-300">

            <div className="w-16 h-16 bg-purple-500/10 rounded-2xl flex items-center justify-center text-3xl">

              🍿

            </div>

            <h3 className="text-2xl font-bold mt-7">
              Movie Moments
            </h3>

            <p className="text-gray-400 mt-4 leading-7">

              Make every movie night memorable
              with your friends and family.

            </p>

           

          </div>

        </div>

      </section>


      {/* EXPERIENCE SECTION */}

      <section className="px-6 md:px-16 py-20">

        <div className="bg-gradient-to-r from-purple-950 via-[#171024] to-[#08080d] border border-purple-500/20 rounded-3xl p-10 md:p-16">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>

              <p className="text-purple-400 tracking-widest text-sm">
                ✦ THE EXPERIENCE
              </p>

              <h2 className="text-4xl md:text-5xl font-bold mt-5">

                Feel Every

                <span className="block text-purple-400">
                  Movie Moment.
                </span>

              </h2>

              <p className="text-gray-400 mt-6 leading-8">

                From the first scene to the final credits,
                enjoy a cinematic atmosphere designed
                for comfort, entertainment and unforgettable memories.

              </p>

              <button className="mt-8 bg-purple-600 px-7 py-4 rounded-xl hover:bg-purple-700 transition">

                Experience Cinema →

              </button>

            </div>


            <div className="grid grid-cols-2 gap-5">

              <div className="bg-black/30 p-7 rounded-2xl border border-white/10">

                <h2 className="text-4xl font-black text-purple-400">
                  4K
                </h2>

                <p className="text-gray-400 mt-3">
                  Visual Experience
                </p>

              </div>

              <div className="bg-black/30 p-7 rounded-2xl border border-white/10">

                <h2 className="text-4xl font-black text-purple-400">
                  HD
                </h2>

                <p className="text-gray-400 mt-3">
                  Premium Sound
                </p>

              </div>

              <div className="bg-black/30 p-7 rounded-2xl border border-white/10">

                <h2 className="text-4xl font-black text-purple-400">
                  100%
                </h2>

                <p className="text-gray-400 mt-3">
                  Movie Comfort
                </p>

              </div>

              <div className="bg-black/30 p-7 rounded-2xl border border-white/10">

                <h2 className="text-4xl font-black text-purple-400">
                  VIP
                </h2>

                <p className="text-gray-400 mt-3">
                  Private Theater
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>



    </div>
  );
};

export default About;