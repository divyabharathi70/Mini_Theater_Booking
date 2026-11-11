import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notify } from '../../components/UiNotice'

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

      notify("Login Successful");

      navigate("/");
    } else {
      notify("Invalid Email or Password");
      navigate("/signup")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4 py-10">
      <div className="w-full max-w-md rounded-3xl bg-[#F8FAFC] p-8 shadow-xl sm:p-10">

        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-[#3D4F62]">
            Welcome Back!
          </h2>

          <p className="mt-2 text-[#3D4F62]">
            Sign in to your Mini Theater account
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#3D4F62]">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-[#3D4F62] bg-[#F8FAFC] px-4 py-3 text-[#3D4F62] outline-none transition focus:border-[#3D4F62] focus:ring-2 focus:ring-[#3D4F62]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-[#3D4F62]">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-xl border border-[#3D4F62] bg-[#F8FAFC] px-4 py-3 text-[#3D4F62] outline-none transition focus:border-[#3D4F62] focus:ring-2 focus:ring-[#3D4F62]"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-[#3D4F62] py-3 font-semibold text-[#F8FAFC] shadow-md transition hover:bg-[#3D4F62] hover:shadow-lg active:scale-95"
          >
            Login
          </button>

        </form>

        <div className="mt-8 border-t border-[#3D4F62] pt-6 text-center">
          <p className="text-sm text-[#3D4F62]">
            Don't have an account?
          </p>

          <button
            type="button"
            onClick={() => navigate("/signup")}
            className="mt-2 font-semibold text-[#3D4F62] transition hover:text-[#3D4F62] hover:underline"
          >
            Create an Account
          </button>
        </div>

        <p className="mt-6 text-center text-xs text-[#3D4F62]">
          Your private theater experience starts here.
        </p>

      </div>
    </div>
  );
}

export default Login;
