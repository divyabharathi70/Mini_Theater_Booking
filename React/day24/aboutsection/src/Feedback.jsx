import React, { useState, useEffect } from "react";

const Feedback = () => {

  // Form State

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");



  // Feedback Storage State

  const [feedbacks, setFeedbacks] = useState(() => {

    const savedData = localStorage.getItem("minitheaterFeedback");

    return savedData ? JSON.parse(savedData) : [];

  });


  // Save Feedback Automatically

  useEffect(() => {

    localStorage.setItem(
      "minitheaterFeedback",
      JSON.stringify(feedbacks)
    );

  }, [feedbacks]);


  // Submit Feedback

  const handleSubmit = (e) => {

    e.preventDefault();

  


    const newFeedback = {  id: Date.now(),  name: name, email: email, message: message, date: new Date().toLocaleDateString(),

    };


    // Add Feedback

    setFeedbacks((prev) => [newFeedback, ...prev]);


    // Clear Form

    setName("");

    setEmail("");

    setMessage("");



    alert("Thank you for your feedback! 🎬");

  };


  // Delete Feedback

  const handleDelete = (id) => {

    const updatedFeedback = feedbacks.filter(
      (item) => item.id !== id
    );

    setFeedbacks(updatedFeedback);

  };


  return (

    <div className="min-h-screen bg-[#08080d] text-white">

   
      {/* FEEDBACK FORM */}

      <section className="px-6 md:px-16 py-16 bg-[#0d0d15]">


        <div className="max-w-4xl mx-auto">


          {/* FORM HEADING */}

          <div className="text-center mb-12">

            <p className="text-purple-400 tracking-[4px] text-sm">

              ✦ SHARE YOUR EXPERIENCE

            </p>


            <h2 className="text-4xl md:text-5xl font-bold mt-5">

              Tell Us

              <span className="text-purple-500">

                {" "}Everything.

              </span>

            </h2>


            <p className="text-gray-400 mt-5">

              Your thoughts help us create better movie moments.

            </p>

          </div>


          {/* FORM */}

          <form

            onSubmit={handleSubmit}

            className="bg-[#15151f] border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl"


          >


            {/* RATING */}

            <div className="text-center mb-10">


              <h3 className="text-xl font-semibold">

                How was your movie experience?

              </h3>


             


            </div>


            {/* NAME + EMAIL */}

            <div className="grid md:grid-cols-2 gap-6">


              {/* NAME */}

              <div>

                <label className="text-gray-300 text-sm">

                  Your Name

                </label>


                <input

                  type="text"

                  placeholder="Enter your name"

                  value={name}

                  onChange={(e) => setName(e.target.value)}

                  className="w-full mt-3 bg-[#0b0b12] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-purple-500 transition"

                  required

                />

              </div>


              {/* EMAIL */}

              <div>

                <label className="text-gray-300 text-sm">

                  Email Address

                </label>


                <input

                  type="email"

                  placeholder="Enter your email"

                  value={email}

                  onChange={(e) => setEmail(e.target.value)}

                  className="w-full mt-3 bg-[#0b0b12] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-purple-500 transition"

                  required

                />

              </div>


            </div>


            {/* MESSAGE */}

            <div className="mt-6">


              <label className="text-gray-300 text-sm">

                Your Feedback

              </label>


              <textarea

                rows="5"

                placeholder="Tell us about your movie experience..."

                value={message}

                onChange={(e) => setMessage(e.target.value)}

                className="w-full mt-3 bg-[#0b0b12] border border-white/10 rounded-xl px-5 py-4 outline-none focus:border-purple-500 transition resize-none"

                required

              />

            </div>


            {/* SUBMIT BUTTON */}

            <button

              type="submit"

              className="w-full mt-8 bg-gradient-to-r from-purple-600 to-purple-800 py-4 rounded-xl font-bold text-lg hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/20 transition duration-300"

            >

              Submit Feedback →

            </button>


            <p className="text-center text-gray-500 text-sm mt-5">

              🎬 Thank you for being part of Mini Theater.

            </p>


          </form>


        </div>


      </section>


      {/* CUSTOMER FEEDBACK */}

      <section className="px-6 md:px-16 py-20">


        <div className="flex flex-col md:flex-row justify-between gap-5 mb-12">


          <div>

            <p className="text-purple-400 tracking-widest text-sm">

              ✦ CUSTOMER STORIES

            </p>


            <h2 className="text-4xl font-bold mt-4">

              What People

              <span className="text-purple-500">

                {" "}Say.

              </span>

            </h2>

          </div>


         


        </div>


        {/* FEEDBACK CARDS */}

        {feedbacks.length === 0 ? (


          <div className="text-center bg-[#15151f] border border-white/10 rounded-3xl p-12">


            <div className="text-5xl">

              🍿

            </div>


            <h3 className="text-2xl font-bold mt-5">

              No Feedback Yet

            </h3>


            <p className="text-gray-400 mt-3">

              Be the first to share your Mini Theater experience!

            </p>


          </div>


        ) : (


          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">


            {feedbacks.map((item) => (


              <div

                key={item.id}

                className="bg-[#15151f] border border-white/10 rounded-3xl p-7 hover:border-purple-500/40 hover:-translate-y-2 transition duration-300"


              >


                {/* CARD HEADER */}

                <div className="flex justify-between items-start">


                  <div className="flex gap-4 items-center">


                    <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center text-xl font-bold text-purple-400">

                      {item.name.charAt(0).toUpperCase()}

                    </div>


                    <div>


                      <h3 className="font-bold">

                        {item.name}

                      </h3>


                      <p className="text-gray-500 text-xs">

                        {item.date}

                      </p>


                    </div>


                  </div>


                  {/* DELETE */}

                  <button

                    onClick={() => handleDelete(item.id)}

                    className="text-gray-500 hover:text-red-400 transition"

                    title="Delete feedback"

                  >

                    ✕

                  </button>


                </div>


              


                {/* MESSAGE */}

                <p className="text-gray-300 mt-5 leading-7 break-words">

                  "{item.message}"

                </p>


          


              </div>


            ))}


          </div>


        )}


      </section>


      {/* FOOTER */}

   

    </div>

  );

};


export default Feedback;