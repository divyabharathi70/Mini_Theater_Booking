import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem("users")) || [];

    let validUser = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (validUser) {
      let activeUser = {
        ...validUser,
        isActive: true
      };

      localStorage.setItem(
        "currentUser",
        JSON.stringify(activeUser)
      );

      alert("Login Successful");

      navigate("/");
    } else {
      alert("Invalid Email or Password");
      navigate("/signup")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-purple-50 px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl sm:p-10">

        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-purple-700">
            Welcome Back!
          </h2>

          <p className="mt-2 text-gray-500">
            Sign in to your Mini Theater account
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">

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
              placeholder="Enter your password"
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
            Login
          </button>

        </form>

        <div className="mt-8 border-t border-gray-100 pt-6 text-center">
          <p className="text-sm text-gray-600">
            Don't have an account?
          </p>

          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="mt-2 font-semibold text-purple-600 transition hover:text-purple-800 hover:underline"
          >
            Create an Account
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-gray-400">
          Your private theater experience starts here.
        </p>

      </div>
    </div>
  );
}

export default Login;