
import React, { useEffect, useState } from "react";

const Time = () => {
  const [timer, setTimer] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;

    const timerr = setInterval(() => {
      setTimer((p) => p + 1);
    }, 1000);

    return () => clearInterval(timerr);
  }, [running]);

  const formatTime = (seconds) => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;

    return `${String(min).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 p-5">

      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/10 p-8 text-center text-white shadow-2xl backdrop-blur-xl sm:p-10">

        {/* Icon */}
        <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-indigo-500 text-3xl shadow-lg shadow-cyan-500/20">
          ⏱️
        </div>

        {/* Heading */}
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Time Management
        </p>

        <h1 className="mt-3 text-3xl font-extrabold">
          Digital Timer
        </h1>

        <p className="mt-2 text-sm text-slate-400">
          Every second counts. Make it productive.
        </p>

        {/* Timer Display */}
        <div className="my-9 rounded-2xl border border-cyan-400/20 bg-slate-950/70 px-5 py-8 shadow-inner">
          <h2 className="font-mono text-6xl font-bold tracking-widest text-cyan-300 sm:text-7xl">
            {formatTime(timer)}
          </h2>

          <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-500">
            Minutes : Seconds
          </p>
        </div>

        {/* Status */}
        <div className="mb-7 flex items-center justify-center gap-2">
          <span
            className={`h-2.5 w-2.5 rounded-full ${
              running ? "animate-pulse bg-emerald-400" : "bg-slate-500"
            }`}
          ></span>

          <p className="text-sm text-slate-300">
            {running ? "Timer is running" : "Timer is paused"}
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4">

          <button
            onClick={() => setRunning(!running)}
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3.5 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-cyan-500/20 active:scale-95"
          >
            {running ? "⏸ Pause" : "▶ Start"}
          </button>

          <button
            onClick={() => {
              setTimer(0);
              setRunning(false);
            }}
            className="rounded-xl border border-white/10 bg-white/10 px-4 py-3.5 font-bold text-white transition duration-300 hover:-translate-y-1 hover:bg-white/20 active:scale-95"
          >
            ↻ Reset
          </button>

        </div>

        {/* Footer */}
        <p className="mt-8 text-xs text-slate-500">
          ✦ Stay focused • Stay consistent
        </p>

      </div>
    </div>
  );
};

export default Time;

