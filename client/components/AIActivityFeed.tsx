"use client";

import { useEffect, useState } from "react";

const activities = [
  "AI scanning infrastructure metrics...",
  "AI correlating Kubernetes anomalies...",
  "AI analyzing Redis latency spike...",
  "AI generating remediation workflow...",
  "AI verifying cluster health...",
  "AI detecting infrastructure instability...",
];

export default function AIActivityFeed() {
  const [activity, setActivity] = useState(
    activities[0]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const random =
        activities[
          Math.floor(
            Math.random() * activities.length
          )
        ];

      setActivity(random);

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-3 h-3 rounded-full bg-cyan-400 animate-pulse" />

        <h2 className="text-2xl font-bold">
          AI Agent Activity
        </h2>
      </div>

      <div className="bg-black/30 rounded-2xl p-4 border border-cyan-500/20">
        <p className="text-cyan-300 animate-pulse">
          {activity}
        </p>
      </div>
    </div>
  );
}