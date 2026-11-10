import React, { useState, useEffect } from "react";

const Feedback = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [feedback, setFeedback] = useState(
    JSON.parse(localStorage.getItem("feedback")) || []
  );

  // Save data
  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  // Submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    const newFeedback = {
      id: Date.now(),
      name,
      email,
      message
    };

    setFeedback([...feedback, newFeedback]);

    setName("");
    setEmail("");
    setMessage("");

    alert("Feedback submitted!");
  };

  // Delete function
  const handleDelete = (id) => {
    const result = feedback.filter((item) => item.id !== id);
    setFeedback(result);
  };

  return (
    <div className="min-h-screen bg-[#08080d] text-white p-10">

      <h1 className="text-4xl text-center font-bold mb-10">
        Mini Theater Feedback 🎬
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-[#15151f] p-8 rounded-2xl"
      >

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-4 mb-5 bg-black rounded-lg"
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-4 mb-5 bg-black rounded-lg"
        />

        <textarea
          placeholder="Enter Feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-4 mb-5 bg-black rounded-lg"
        />

        <button className="w-full bg-purple-600 p-4 rounded-lg">
          Submit Feedback
        </button>

      </form>

      <div className="grid md:grid-cols-3 gap-5 mt-12">

        {feedback.map((item) => (

          <div key={item.id} className="bg-[#15151f] p-6 rounded-xl">

            <h2 className="text-xl font-bold text-purple-400">
              {item.name}
            </h2>

            <p className="text-gray-400">{item.email}</p>

            <p className="mt-4">{item.message}</p>

            <button
              onClick={() => handleDelete(item.id)}
              className="text-red-400 mt-5"
            >
               ✕
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Feedback;