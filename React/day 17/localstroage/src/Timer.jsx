
import React, { useEffect, useState } from 'react'

const Timer = () => {
    const [timer,setTimer]=useState(0)

useEffect(()=>{
   
    const timerr = setInterval(() => {

        setTimer((p)=>p+1)
         
    },1000);

    return ()=> clearInterval(timerr)

})

  return (
<>
 <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-purple-950 to-indigo-950 px-4">

   <div className="w-full max-w-md rounded-3xl border border-white/20 bg-white/10 p-10 text-center shadow-2xl backdrop-blur-lg transition duration-300 hover:scale-105">

      <div className="mb-5 text-5xl">⏱️</div>

      <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.3em] text-purple-300">
        Digital Timer
      </h2>

      <p className="mb-8 text-slate-400">
        Every second counts!
      </p>

      <div className="rounded-2xl border border-cyan-400/30 bg-slate-950/80 px-6 py-10 shadow-inner">
        <h1 className="font-mono text-7xl font-extrabold tracking-widest text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
          {timer}
        </h1>

        <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-500">
          Seconds
        </p>
      </div>

      <div className="mt-7 flex items-center justify-center gap-2">
        <span className="h-3 w-3 animate-pulse rounded-full bg-green-400"></span>

        <p className="text-sm font-medium text-green-300">
          Timer Running
        </p>
      </div>

      <p className="mt-8 text-xs text-slate-500">
        ✦ Stay Focused • Stay Productive
      </p>

   </div>

 </div>
</>
  )
}

export default Timer

