"use client";

import { useEffect, useState } from "react";

interface Incident {

  id: number;

  title: string;

  severity: string;

  status: string;

  rootCause: string;

  aiConfidence: number;

  createdAt: string;

}

export default function IncidentsList() {

  const [incidents, setIncidents] =
    useState<Incident[]>([]);

  const [currentTime, setCurrentTime] =
    useState("");

  // LIVE SYSTEM CLOCK

  useEffect(() => {

    const updateClock = () => {

      const now = new Date();

      setCurrentTime(
        now.toLocaleTimeString()
      );

    };

    updateClock();

    const timer = setInterval(
      updateClock,
      1000
    );

    return () => clearInterval(timer);

  }, []);

  // FETCH INCIDENTS

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

      <div className="
        flex items-center
        justify-between
        mb-6
      ">

        <div>

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

        {/* LIVE SYSTEM TIME */}

        <div className="
          bg-[#0B1030]
          border border-cyan-500/30
          rounded-2xl
          px-6 py-4
        ">

          <p className="
            text-gray-400
            text-sm
          ">
            System Time
          </p>

          <h2 className="
            text-cyan-400
            text-3xl
            font-bold
          ">
            {currentTime}
          </h2>

        </div>

      </div>

      {/* INCIDENT FEED */}

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
              hover:border-cyan-400
              transition-all
            "
          >

            <div className="
              flex justify-between
            ">

              <div>

                <h2 className="
                  text-2xl
                  font-bold
                  text-white
                ">
                  {incident.title}
                </h2>

                <p className="
                  text-cyan-400
                  mt-2
                ">
                  {incident.status}
                </p>

              </div>

              <div className="text-right">

                <p className="
                  text-gray-400
                  text-sm
                ">
                  Detected At
                </p>

                <p className="
                  text-cyan-400
                  font-bold
                ">
                  {new Date(
                    incident.createdAt
                  ).toLocaleTimeString()}
                </p>

              </div>

            </div>

            <div className="mt-5">

              <p className="
                text-gray-400
                mb-2
              ">
                Root Cause Analysis
              </p>

              <p className="
                text-white
              ">
                {incident.rootCause}
              </p>

            </div>

            <div className="
              flex justify-between
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
                  font-bold
                  text-xl
                ">
                  {incident.aiConfidence}%
                </p>

              </div>

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

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}