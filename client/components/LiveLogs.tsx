"use client";

import { useEffect, useState } from "react";

export default function LiveLogs() {
  const [logs, setLogs] = useState<string[]>([]);

  useEffect(() => {
    const services = [
      "Kubernetes",
      "Redis",
      "API Gateway",
      "MongoDB",
      "Auth Service",
      "Payment API",
    ];

    const events = [
      "latency spike detected",
      "pod restarted",
      "cache miss increased",
      "high memory usage",
      "traffic surge detected",
      "AI remediation triggered",
      "service recovered",
      "connection timeout",
    ];

    const interval = setInterval(() => {
      const time =
        new Date().toLocaleTimeString();

      const service =
        services[
          Math.floor(
            Math.random() * services.length
          )
        ];

      const event =
        events[
          Math.floor(
            Math.random() * events.length
          )
        ];

      const newLog = `[${time}] ${service}: ${event}`;

      setLogs((prev) => [
        newLog,
        ...prev.slice(0, 8),
      ]);

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="glass rounded-3xl p-5 h-105 overflow-hidden">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold">
          Live Infrastructure Logs
        </h2>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

          <span className="text-sm text-green-400">
            LIVE
          </span>
        </div>
      </div>

      <div className="space-y-3 overflow-y-auto h-80 pr-2">
        {logs.map((log, i) => (
          <div
            key={i}
            className="bg-black/30 rounded-xl p-3 border border-white/5"
          >
            <p className="font-mono text-sm text-cyan-300">
              {log}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}