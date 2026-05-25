"use client";

import { useEffect, useState } from "react";

interface Incident {
  id: number;
  title: string;
  severity: string;
  status: string;
  time: string;
}

export default function IncidentsList() {
  const [incidents, setIncidents] =
    useState<Incident[]>([]);

  useEffect(() => {
    fetchIncidents();

    const interval = setInterval(() => {
      fetchIncidents();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const fetchIncidents = async () => {
    try {
      const response = await fetch(
        "https://grootai.onrender.com/api/incidents"
      );

      const data = await response.json();

      setIncidents(data);
    } catch (error) {
      console.log(
        "Failed to fetch incidents"
      );
    }
  };

  return (
    <div className="glass rounded-3xl p-6">

      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-cyan-400 text-sm">
            LIVE INCIDENTS
          </p>

          <h2 className="text-2xl font-bold">
            Active Infrastructure Events
          </h2>
        </div>

        <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse" />
      </div>

      <div className="space-y-4">

        {incidents.map((incident) => (
          <div
            key={incident.id}
            className="
              bg-black/30
              border border-white/10
              rounded-2xl
              p-4
              flex
              items-center
              justify-between
            "
          >
            <div>
              <h3 className="font-semibold">
                {incident.title}
              </h3>

              <p className="text-sm text-gray-400">
                {incident.time}
              </p>
            </div>

            <div className="flex items-center gap-3">

              <span
                className={`
                  px-3 py-1 rounded-full text-sm

                  ${
                    incident.severity ===
                    "Critical"
                      ? "bg-red-500/20 text-red-400"
                      : incident.severity ===
                        "High"
                      ? "bg-orange-500/20 text-orange-400"
                      : "bg-yellow-500/20 text-yellow-400"
                  }
                `}
              >
                {incident.severity}
              </span>

              <span className="text-cyan-400">
                {incident.status}
              </span>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}