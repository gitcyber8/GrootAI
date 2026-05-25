"use client";

import { useEffect, useState } from "react";

import io from "socket.io-client";

const socket = io("http://localhost:5000");

export default function LiveMetrics() {
  const [metrics, setMetrics] = useState({
    cpu: 0,
    memory: 0,
    network: 0,
    requests: 0,
    latency: 0,
  });

  useEffect(() => {
    socket.on("metricsUpdate", (data) => {
      setMetrics(data);
    });

    return () => {
      socket.off("metricsUpdate");
    };
  }, []);

  return (
    <div className="glass rounded-3xl p-6">
      <h2 className="text-2xl font-bold mb-6">
        Live Infrastructure Telemetry
      </h2>

      <div className="space-y-5">

        <MetricBar
          label="CPU Usage"
          value={metrics.cpu}
          color="bg-red-500"
        />

        <MetricBar
          label="Memory Usage"
          value={metrics.memory}
          color="bg-blue-500"
        />

        <MetricBar
          label="Network Traffic"
          value={metrics.network}
          color="bg-green-500"
        />

        <MetricBar
          label="API Requests"
          value={Math.floor(metrics.requests / 100)}
          color="bg-cyan-500"
        />

        <MetricBar
          label="Latency"
          value={Math.floor(metrics.latency / 4)}
          color="bg-yellow-500"
        />

      </div>
    </div>
  );
}

function MetricBar({
  label,
  value,
  color,
}: {
  label: string;
  value: number;
  color: string;
}) {
  return (
    <div>
      <div className="flex justify-between mb-2">
        <span>{label}</span>
        <span>{value}%</span>
      </div>

      <div className="w-full h-3 bg-black/30 rounded-full overflow-hidden">
        <div
          className={`${color} h-full rounded-full transition-all duration-1000`}
          style={{
            width: `${value}%`,
          }}
        />
      </div>
    </div>
  );
}