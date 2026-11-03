import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleRegister(e) {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];
    let exist = users.find((user) => user.email === email);

    if (exist) {
      alert("Email already registered");
      return;
    }

    let newUser = {
      id : Date.now(),
      name: name,
      email: email,
      password: password,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Registration Successful");
    navigate("/login");
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-purple-50 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl sm:p-10">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-purple-700">
            Create Account
          </h2>

          <p className="mt-2 text-gray-500">
            Join us for your special theater experience!
          </p>
        </div>

        <form onSubmit={handleRegister} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-gray-700">
              Password
            </label>

            <input
              type="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-gray-300 bg-gray-50 px-4 py-3 text-gray-800 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-purple-600 py-3 font-semibold text-white shadow-md transition hover:bg-purple-700 hover:shadow-lg active:scale-95"
          >
            Create Account
          </button>
        </form>

        <div className="mt-8 border-t border-gray-100 pt-6 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?
          </p>

          <button
            type="button"
            onClick={() => navigate("/login")}
            className="mt-2 font-semibold text-purple-600 transition hover:text-purple-800 hover:underline"
          >
            Login
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Your perfect theater experience starts here.
        </p>
      </div>
    </div>
  );
}

export default Register;