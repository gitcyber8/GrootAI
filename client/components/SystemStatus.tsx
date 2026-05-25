"use client";

import { useEffect, useState } from "react";

export default function SystemStatus() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const current = new Date();

      setTime(
        current.toLocaleString()
      );

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="glass rounded-3xl p-6 border border-cyan-500/20">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-cyan-400 text-sm tracking-widest">
            SYSTEM STATUS
          </p>

          <h2 className="text-2xl font-bold mt-2">
            Autonomous AI Operations
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />

          <span className="text-green-400">
            ONLINE
          </span>
        </div>
      </div>

      <div className="mt-6">
        <p className="text-slate-400 text-sm">
          Current System Time
        </p>

        <h3 className="text-3xl font-bold mt-2 text-cyan-300">
          {time}
        </h3>
      </div>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-black/30 rounded-2xl p-4">
          <p className="text-slate-400 text-xs">
            AI AGENTS
          </p>

          <h3 className="text-2xl font-bold mt-2">
            12
          </h3>
        </div>

        <div className="bg-black/30 rounded-2xl p-4">
          <p className="text-slate-400 text-xs">
            ACTIVE MONITORS
          </p>

          <h3 className="text-2xl font-bold mt-2">
            48
          </h3>
        </div>

        <div className="bg-black/30 rounded-2xl p-4">
          <p className="text-slate-400 text-xs">
            SYSTEM UPTIME
          </p>

          <h3 className="text-2xl font-bold mt-2 text-green-400">
            99.9%
          </h3>
        </div>
      </div>
    </div>
  );
}