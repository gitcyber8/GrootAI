"use client";

import { useEffect, useState } from "react";

interface Incident {
  id: number;
  title: string;
  severity: string;
  status: string;
  time: string;
  aiConfidence: number;
  affectedNodes: number;
  autoRemediation: string;
}

export default function IncidentsList() {

  const [incidents, setIncidents] =
    useState<Incident[]>([]);

  useEffect(() => {

    fetchIncidents();

    const interval = setInterval(() => {
      fetchIncidents();
    }, 4000);

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

    <div className="
      bg-white/5
      border border-white/10
      rounded-3xl
      p-6
      backdrop-blur-xl
    ">

      <div className="
        flex items-center justify-between mb-6
      ">

        <div>

          <p className="
            text-cyan-400
            text-sm
            tracking-widest
          ">
            LIVE INCIDENT STREAM
          </p>

          <h2 className="
            text-2xl font-bold text-white
          ">
            AI Autonomous Monitoring
          </h2>

        </div>

        <div className="
          h-3 w-3
          bg-green-400
          rounded-full
          animate-pulse
        " />

      </div>

      <div className="space-y-4">

        {incidents.map((incident) => (

          <div
            key={incident.id}
            className="
              bg-black/30
              border border-white/10
              rounded-2xl
              p-5
              transition-all
              hover:border-cyan-400/50
            "
          >

            <div className="
              flex items-center justify-between
            ">

              <div>

                <h3 className="
                  text-lg font-semibold text-white
                ">
                  {incident.title}
                </h3>

                <p className="
                  text-gray-400 text-sm mt-1
                ">
                  {incident.time}
                </p>

              </div>

              <span
                className={`
                  px-4 py-1 rounded-full text-sm

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

            </div>

            <div className="
              grid grid-cols-3 gap-4 mt-5
            ">

              <div>

                <p className="
                  text-gray-400 text-sm
                ">
                  Status
                </p>

                <p className="
                  text-cyan-400 font-medium
                ">
                  {incident.status}
                </p>

              </div>

              <div>

                <p className="
                  text-gray-400 text-sm
                ">
                  AI Confidence
                </p>

                <p className="
                  text-green-400 font-medium
                ">
                  {incident.aiConfidence}%
                </p>

              </div>

              <div>

                <p className="
                  text-gray-400 text-sm
                ">
                  Auto Remediation
                </p>

                <p className="
                  text-purple-400 font-medium
                ">
                  {incident.autoRemediation}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}