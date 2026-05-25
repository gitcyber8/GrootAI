"use client";

import { useEffect, useState } from "react";

export default function MetricsChart() {
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    async function fetchMetrics() {
      try {
        const res = await fetch("http://localhost:3000/api/metrics");
        const data = await res.json();

        setMetrics(data);
      } catch (error) {
        console.log("Error fetching metrics:", error);
      }
    }

    fetchMetrics();
  }, []);

  return (
    <div className="bg-[#0B1739] border border-[#1E293B] rounded-3xl p-6 h-55">
      <h2 className="text-white text-2xl font-semibold mb-6">
        System Metrics
      </h2>

      <div className="space-y-4">
        <div>
          <p className="text-gray-400 text-sm">CPU Usage</p>

          <div className="flex items-center justify-between">
            <p className="text-white text-3xl font-bold">
              {metrics?.cpu ?? "--"}%
            </p>

            <div className="w-32 bg-gray-800 rounded-full h-2">
              <div
                className="bg-green-400 h-2 rounded-full"
                style={{ width: `${metrics?.cpu || 0}%` }}
              />
            </div>
          </div>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Memory Usage</p>

          <div className="flex items-center justify-between">
            <p className="text-white text-3xl font-bold">
              {metrics?.memory ?? "--"}%
            </p>

            <div className="w-32 bg-gray-800 rounded-full h-2">
              <div
                className="bg-blue-400 h-2 rounded-full"
                style={{ width: `${metrics?.memory || 0}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )}