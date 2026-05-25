"use client";

import { useEffect, useState } from "react";

interface Incident {

  id: number;

  title: string;

  severity: string;

  status: string;

  rootCause: string;

  aiConfidence: number;

  detectionTime: string;

  detectedAt: string;

}

export default function IncidentsList() {

  const [incidents, setIncidents] =
    useState<Incident[]>([]);

  const fetchIncidents = async () => {

    try {

      const response = await fetch(
        "https://grootai.onrender.com/api/incidents"
      );

      const data = await response.json();

      setIncidents(data);

    } catch (error) {

      console.log(error);

    }

  };

  useEffect(() => {

    fetchIncidents();

    const interval = setInterval(() => {

      fetchIncidents();

    }, 3000);

    return () => clearInterval(interval);

  }, []);

  return (

    <div className="mt-6">

      {/* HEADER */}

      <div className="mb-6">

        <h1 className="
          text-5xl
          font-bold
          text-white
        ">
          Live Incidents
        </h1>

        <p className="
          text-gray-400
          mt-2
          text-lg
        ">
          Autonomous AI Incident Feed
        </p>

      </div>

      {/* INCIDENT SCROLL WINDOW */}

      <div className="
        bg-[#070B1A]
        border border-[#1D2333]
        rounded-3xl
        p-6
        h-187.5
        overflow-y-auto
        space-y-5
      ">

        {incidents.map((incident) => (

          <div
            key={incident.id}
            className="
              bg-[#0B1030]
              border border-[#1F2A5C]
              rounded-3xl
              p-6
              transition-all
              hover:border-cyan-400
            "
          >

            {/* TOP SECTION */}

            <div className="
              flex items-start
              justify-between
            ">

              <div>

                <h2 className="
                  text-2xl
                  font-bold
                  text-white
                ">
                  {incident.title}
                </h2>

                <div className="
                  flex items-center
                  gap-3
                  mt-3
                ">

                  <span className="
                    text-gray-400
                  ">
                    Status:
                  </span>

                  <span className="
                    text-cyan-400
                    animate-pulse
                    font-semibold
                  ">
                    {incident.status}
                  </span>

                </div>

              </div>

              {/* LIVE DETECTION TIME */}

              <div className="
                text-right
              ">

                <div className="
                  h-4 w-4
                  bg-red-500
                  rounded-full
                  animate-ping
                  ml-auto
                " />

                <div className="mt-3">

                  <p className="
                    text-cyan-400
                    font-bold
                    text-lg
                  ">
                    {incident.detectionTime}
                  </p>

                  <p className="
                    text-gray-500
                    text-sm
                  ">
                    Detection Time
                  </p>

                </div>

              </div>

            </div>

            {/* ROOT CAUSE */}

            <div className="mt-6">

              <p className="
                text-gray-400
                mb-2
              ">
                Root Cause Analysis
              </p>

              <p className="
                text-white
                leading-relaxed
              ">
                {incident.rootCause}
              </p>

            </div>

            {/* FOOTER */}

            <div className="
              flex items-center
              justify-between
              mt-6
            ">

              <div>

                <p className="
                  text-gray-400
                  text-sm
                ">
                  AI Confidence
                </p>

                <p className="
                  text-green-400
                  text-xl
                  font-bold
                ">
                  {incident.aiConfidence}%
                </p>

              </div>

              <div className="text-right">

                <span
                  className={`
                    px-4 py-2 rounded-full

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

                <p className="
                  text-gray-500
                  text-sm
                  mt-3
                ">
                  {incident.detectedAt}
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}