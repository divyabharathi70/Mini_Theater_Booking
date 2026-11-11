import { useState } from "react";
import { notify } from '../UiNotice'

const Feedback = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFeedback = {
      id: Date.now(),
      name,
      email,
      message
    };
    let savedFeedback = []
    try {
      savedFeedback = JSON.parse(localStorage.getItem("feedback") || "[]")
    } catch {
      savedFeedback = []
    }
    localStorage.setItem("feedback", JSON.stringify([...savedFeedback, newFeedback]));

    setName("");
    setEmail("");
    setMessage("");

    notify("Feedback submitted!");
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#3D4F62] p-10">

      <h1 className="text-4xl text-center font-bold mb-10">
        Mini Theater Feedback 🎬
      </h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-[#F8FAFC] text-[#3D4F62] border border-[#3D4F62]/10 p-8 rounded-2xl shadow-sm"
      >

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="w-full p-4 mb-5 bg-[#F8FAFC] text-[#3D4F62] border border-[#3D4F62]/20 rounded-lg"
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-4 mb-5 bg-[#F8FAFC] text-[#3D4F62] border border-[#3D4F62]/20 rounded-lg"
        />

        <textarea
          placeholder="Enter Feedback"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="w-full p-4 mb-5 bg-[#F8FAFC] text-[#3D4F62] border border-[#3D4F62]/20 rounded-lg"
        />

        <button className="w-full bg-[#3D4F62] text-[#F8FAFC] p-4 rounded-lg">
          Submit Feedback
        </button>

      </form>

    </div>
  );
};

export default Feedback;
