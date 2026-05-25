"use client";

import { useEffect, useState } from "react";

export default function SystemStatus() {

  const [cpu, setCpu] = useState(0);
  const [memory, setMemory] = useState(0);

  useEffect(() => {

    const updateMetrics = () => {

      setCpu(Math.floor(Math.random() * 40) + 50);

      setMemory(Math.floor(Math.random() * 30) + 60);

    };

    updateMetrics();

    const interval = setInterval(updateMetrics, 2000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div
      className="
        bg-linear-to-br
        from-blue-900
        via-blue-800
        to-blue-700
        rounded-[35px]
        p-10
        shadow-2xl
        border
        border-blue-500/20
      "
    >

      <div className="flex justify-between items-start mb-10">

        <div>

          <h1
            className="
              text-5xl
              font-extrabold
              text-white
            "
          >
            System Metrics
          </h1>

          <p className="text-blue-200 mt-2 text-lg">
            Real-time Infrastructure Monitoring
          </p>

        </div>

        <div className="text-right">

          <p className="text-blue-200 text-sm">
            LIVE SYSTEM TIME
          </p>

          <p className="text-cyan-300 font-bold text-xl">
            {new Date().toLocaleTimeString()}
          </p>

        </div>

      </div>

      {/* CPU */}

      <div className="mb-10">

        <div className="flex justify-between items-center mb-4">

          <div>

            <p className="text-white text-2xl font-semibold">
              CPU Usage
            </p>

            <h1
              className="
                text-7xl
                font-extrabold
                text-white
                mt-2
              "
            >
              {cpu}%
            </h1>

          </div>

        </div>

        <div
          className="
            w-full
            h-5
            bg-blue-950/70
            rounded-full
            overflow-hidden
          "
        >

          <div
            className="
              h-full
              bg-cyan-400
              rounded-full
              transition-all
              duration-1000
            "
            style={{
              width: `${cpu}%`,
            }}
          />

        </div>

      </div>

      {/* MEMORY */}

      <div>

        <div className="flex justify-between items-center mb-4">

          <div>

            <p className="text-white text-2xl font-semibold">
              Memory Usage
            </p>

            <h1
              className="
                text-7xl
                font-extrabold
                text-white
                mt-2
              "
            >
              {memory}%
            </h1>

          </div>

        </div>

        <div
          className="
            w-full
            h-5
            bg-blue-950/70
            rounded-full
            overflow-hidden
          "
        >

          <div
            className="
              h-full
              bg-green-400
              rounded-full
              transition-all
              duration-1000
            "
            style={{
              width: `${memory}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}
