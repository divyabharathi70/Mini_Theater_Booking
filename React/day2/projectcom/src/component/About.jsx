import { Component } from "react";

 const About=()=>{
  
    return (
        <>
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid md:grid-cols-2 gap-10 items-center">

            <div>
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2"
                alt="About"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>

            
            <div>
              {/* <p className="text-blue-600 font-semibold mb-2">
                ABOUT US
              </p> */}

              <h2 className="text-4xl font-bold text-gray-800 mb-5">
                We Build Modern Digital Solutions
              </h2>

              <p className="text-gray-600 leading-7 mb-5">
                We create modern and responsive websites using the latest
                technologies. Our goal is to provide simple, attractive,
                and user-friendly digital solutions.
              </p>

              <p className="text-gray-600 leading-7 mb-6">
                Our team focuses on quality, creativity, and customer
                satisfaction. We continuously learn new technologies to
                build better solutions.
              </p>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
                Read More
              </button>
            </div>

          </div>

        </div>
      </section>
      </>
    );
  }


export default About;