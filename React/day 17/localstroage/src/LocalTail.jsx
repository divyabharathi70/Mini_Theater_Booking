
import React, { useEffect, useState } from "react";

const LocalTail = () => {
  const [data, setData] = useState({
    username: "",
    useremail: "",
    userage: "",
  });

  const [storedata, setStoredata] = useState([]);

  // Handle input changes
  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Store user data
  const handleClick = (e) => {
    e.preventDefault();

    if (!data.username || !data.useremail || !data.userage) {
      alert("Please fill in all fields!");
      return;
    }

    const getData = JSON.parse(localStorage.getItem("demodata")) || [];

    const obj = {
      userid: Date.now(),
      name: data.username,
      email: data.useremail,
      age: data.userage,
    };

    getData.push(obj);

    localStorage.setItem("demodata", JSON.stringify(getData));

    setStoredata(getData);

    setData({
      username: "",
      useremail: "",
      userage: "",
    });

    alert("User registered successfully!");
  };

  // Get stored data
  const getdat = () => {
    const get = JSON.parse(localStorage.getItem("demodata")) || [];
    setStoredata(get);
  };

  useEffect(() => {
    getdat();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 px-4 py-12 text-white">

      {/* Header */}
      <div className="mx-auto mb-10 max-w-5xl text-center">
        <p className="mb-3 inline-block rounded-full border border-indigo-400/30 bg-indigo-400/10 px-5 py-2 text-sm tracking-widest text-indigo-300">
          ✦ USER MANAGEMENT SYSTEM
        </p>

        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
          Create Your{" "}
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Account
          </span>
        </h1>

        <p className="mt-4 text-sm text-slate-400 sm:text-base">
          Register your details and manage your users in one place.
        </p>
      </div>

      {/* Registration Form */}
      <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-2">

        <div className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl sm:p-9">

          <div className="mb-7">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-2xl shadow-lg">
              👤
            </div>

            <h2 className="text-2xl font-bold">Registration Form</h2>

            <p className="mt-2 text-sm text-slate-400">
              Enter your information below.
            </p>
          </div>

          <form onSubmit={handleClick} className="space-y-5">

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Full Name
              </label>

              <input
                type="text"
                name="username"
                placeholder="Enter your name"
                value={data.username}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Email Address
              </label>

              <input
                type="email"
                name="useremail"
                placeholder="Enter your email"
                value={data.useremail}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-300">
                Age
              </label>

              <input
                type="number"
                name="userage"
                placeholder="Enter your age"
                min="1"
                value={data.userage}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-slate-900/70 px-4 py-3.5 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20"
              />
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-500 py-4 font-bold text-white shadow-lg shadow-indigo-500/20 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/20 active:scale-95"
            >
              Register Now
              <span className="transition-transform group-hover:translate-x-1">
                →
              </span>
            </button>

          </form>

          <p className="mt-6 text-center text-xs text-slate-500">
            ✦ Your details are stored in this browser.
          </p>
        </div>

        {/* User Information */}
        <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl sm:p-9">

          <div className="mb-7 flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-cyan-400">
                DASHBOARD
              </p>

              <h2 className="mt-2 text-2xl font-bold">
                Registered Users
              </h2>
            </div>

            <div className="flex h-14 min-w-14 items-center justify-center rounded-2xl bg-indigo-500/20 px-3 text-xl font-bold text-cyan-300">
              {storedata.length}
            </div>
          </div>

          <div className="mb-6 flex items-center justify-between rounded-2xl border border-white/10 bg-slate-900/60 p-4">
            <div>
              <p className="text-sm text-slate-400">Total Members</p>
              <p className="mt-1 text-xl font-bold">{storedata.length} Users</p>
            </div>

            <span className="text-3xl">👥</span>
          </div>

          <div className="max-h-[440px] space-y-4 overflow-y-auto pr-1">

            {storedata.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-slate-600 p-10 text-center">
                <div className="mb-4 text-5xl">📋</div>

                <h3 className="font-semibold text-slate-200">
                  No Users Yet
                </h3>

                <p className="mt-2 text-sm text-slate-400">
                  Register your first user to see the details here.
                </p>
              </div>
            ) : (
              storedata.map((item) => (
                <div
                  className="group rounded-2xl border border-white/10 bg-slate-900/70 p-5 transition duration-300 hover:border-cyan-400/50 hover:bg-slate-900"
                  key={item.userid}
                >
                  <div className="flex items-start gap-4">

                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-xl font-bold uppercase text-white">
                      {item.name.charAt(0)}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="truncate text-lg font-bold text-white">
                        {item.name}
                      </h3>

                      <p className="mt-1 break-all text-sm text-slate-400">
                        ✉ {item.email}
                      </p>

                      <div className="mt-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300">
                        Age: {item.age}
                      </div>
                    </div>

                    <span className="text-lg text-emerald-400">●</span>

                  </div>
                </div>
              ))
            )}

          </div>

        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 text-center text-sm text-slate-500">
        Built with <span className="text-cyan-400">React</span> &{" "}
        <span className="text-indigo-400">Tailwind CSS</span>
        <p className="mt-2">© 2026 User Management Dashboard</p>
      </footer>

    </div>
  );
};

export default LocalTail;

