"use client";

import { useEffect, useState } from "react";

interface Metrics {

  cpu: number;

  memory: number;

  network: number;

  api: number;

  latency: number;

  updatedAt: string;

}

export default function SystemStatus() {

  const [metrics, setMetrics] =
    useState<Metrics | null>(null);

  const fetchMetrics = async () => {

    try {

      const response = await fetch(
        "https://grootai.onrender.com/api/metrices"
      );

      const data = await response.json();

      setMetrics(data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchMetrics();

    const interval = setInterval(() => {

      fetchMetrics();

    }, 2000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="
      bg-linear-to-br
      from-blue-900
      to-blue-700
      rounded-3xl
      p-8
      shadow-2xl
    ">

      <div className="
        flex justify-between
        items-center
        mb-8
      ">

        <h2 className="
          text-5xl
          font-bold
          text-white
        ">
          System Metrics
        </h2>

        <div className="text-right">

          <p className="
            text-blue-200
            text-sm
          ">
            Live Update
          </p>

          <p className="
            text-cyan-300
            font-bold
          ">
            {metrics?.updatedAt}
          </p>

        </div>

      </div>

      {/* CPU */}

      <div className="mb-8">

        <div className="
          flex justify-between
          mb-3
        ">

          <div>

            <p className="
              text-white
              text-2xl
              font-semibold
            ">
              CPU Usage
            </p>

            <h1 className="
              text-6xl
              font-bold
              text-white
              mt-2
            ">
              {metrics?.cpu ?? "--"}%
            </h1>

          </div>

        </div>

        <div className="
          w-full
          h-5
          bg-blue-950
          rounded-full
          overflow-hidden
        ">

          <div
            className="
              h-full
              bg-cyan-400
              transition-all
              duration-1000
            "
            style={{
              width: `${metrics?.cpu ?? 0}%`,
            }}
          />

        </div>

      </div>

      {/* MEMORY */}

      <div>

        <div className="
          flex justify-between
          mb-3
        ">

          <div>

            <p className="
              text-white
              text-2xl
              font-semibold
            ">
              Memory Usage
            </p>

            <h1 className="
              text-6xl
              font-bold
              text-white
              mt-2
            ">
              {metrics?.memory ?? "--"}%
            </h1>

          </div>

        </div>

        <div className="
          w-full
          h-5
          bg-blue-950
          rounded-full
          overflow-hidden
        ">

          <div
            className="
              h-full
              bg-green-400
              transition-all
              duration-1000
            "
            style={{
              width: `${metrics?.memory ?? 0}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}