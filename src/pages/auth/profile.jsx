import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Profile() {

  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const [name, setName] = useState(user?.name || "");
  const [email, setEmail] = useState(user?.email || "");

  function handleUpdate(e) {

    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let exist = users.find(
      (u) => u.email === email && u.id !== user.id
    );

    if (exist) {
      alert("Email already exists");
      return;
    }

    let updatedUser = {
      ...user,
      name: name,
      email: email
    };

    let updatedUsers = users.map((u) =>
      u.id === user.id ? updatedUser : u
    );

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    localStorage.setItem(
      "currentUser",
      JSON.stringify(updatedUser)
    );

    alert("Profile Updated Successfully!");

    navigate("/");
  }

  function handleLogout() {

    localStorage.removeItem("currentUser");

    alert("Logout Successful");

    navigate("/");
  }

  if (!user) {
    navigate("/login");
    return null;
  }

  return (

    <div className="min-h-screen bg-purple-50 flex justify-center items-center p-5">

      <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-xl">

        {/* Profile Icon */}

        <div className="flex justify-center mb-4">

          <div className="w-24 h-24 rounded-full bg-purple-600 text-white flex justify-center items-center text-4xl font-bold">

            {name.charAt(0).toUpperCase()}

          </div>

        </div>

        <h2 className="text-3xl font-bold text-purple-700 text-center mb-2">
          My Profile
        </h2>

        <p className="text-gray-500 text-center mb-8">
          Manage Your Account Details
        </p>

        <form onSubmit={handleUpdate}>

          {/* Name */}

          <div className="mb-5">

            <label className="block font-semibold mb-2">
              Full Name
            </label>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-purple-500"
            />

          </div>

          {/* Email */}

          <div className="mb-6">

            <label className="block font-semibold mb-2">
              Email Address
            </label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-xl p-3 outline-none focus:border-purple-500"
            />

          </div>

          {/* Update Button */}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white p-3 rounded-xl font-semibold hover:bg-purple-700"
          >
            Save Changes
          </button>

        </form>

        {/* Back Button */}

        <button
          onClick={() => navigate("/")}
          className="w-full mt-3 bg-gray-200 p-3 rounded-xl font-semibold hover:bg-gray-300"
        >
          Back to Home
        </button>

        {/* Logout */}

        <button
          onClick={handleLogout}
          className="w-full mt-3 bg-black text-white p-3 rounded-xl font-semibold hover:bg-gray-800"
        >
          Logout
        </button>

      </div>

    </div>

  );

}

export default Profile;