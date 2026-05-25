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

export default function LiveMetrices() {

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

  const MetricBar = ({
    label,
    value,
    suffix = "%",
  }: {
    label: string;
    value: number;
    suffix?: string;
  }) => (

    <div className="mb-6">

      <div className="
        flex justify-between
        mb-2
      ">

        <span className="
          text-white
          font-medium
        ">
          {label}
        </span>

        <span className="
          text-cyan-400
          font-bold
        ">
          {value}{suffix}
        </span>

      </div>

      <div className="
        w-full
        bg-[#111827]
        rounded-full
        h-4
      ">

        <div
          className="
            bg-linear-to-r
            from-cyan-400
            to-blue-500
            h-4
            rounded-full
            transition-all
            duration-1000
          "
          style={{
            width: `${Math.min(value, 100)}%`,
          }}
        />

      </div>

    </div>

  );

  return (

    <div className="
      bg-[#070B1A]
      border border-[#1D2333]
      rounded-3xl
      p-6
    ">

      <div className="
        flex justify-between
        items-center
        mb-8
      ">

        <h1 className="
          text-3xl
          font-bold
          text-white
        ">
          Live Infrastructure Telemetry
        </h1>

        <div className="
          text-right
        ">

          <p className="
            text-gray-400
            text-sm
          ">
            Updated
          </p>

          <p className="
            text-cyan-400
            font-bold
          ">
            {new Date().toLocaleDateString()}
          </p>

        </div>

      </div>

      {metrics && (

        <>

          <MetricBar
            label="CPU Usage"
            value={metrics.cpu}
          />

          <MetricBar
            label="Memory Usage"
            value={metrics.memory}
          />

          <MetricBar
            label="Network Traffic"
            value={metrics.network}
            suffix=" MB/s"
          />

          <MetricBar
            label="API Requests"
            value={metrics.api}
            suffix=" req"
          />

          <MetricBar
            label="Latency"
            value={metrics.latency}
            suffix=" ms"
          />

        </>

      )}

    </div>

  );
}