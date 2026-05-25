"use client";

import { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:5000");

interface Incident {
  title?: string;
  severity?: string;
  status?: string;
  aiAnalysis?: string;
  solution?: string;
  createdAt?: string;
}

export default function IncidentsList() {
  const [incidents, setIncidents] = useState<
    Incident[]
  >([]);

  useEffect(() => {
    fetchIncidents();

    socket.on(
      "newIncident",
      (incident: Incident) => {
        setIncidents((prev) => [
          incident,
          ...prev,
        ]);
      }
    );

    socket.on(
      "incidentUpdated",
      (updatedIncident: Incident) => {
        setIncidents((prev) =>
          prev.map((incident, index) =>
            index === 0
              ? updatedIncident
              : incident
          )
        );
      }
    );

    return () => {
      socket.off("newIncident");
      socket.off("incidentUpdated");
    };
  }, []);

  async function fetchIncidents() {
    try {
      const response = await fetch(
        "http://localhost:5000/api/incidents"
      );

      const data = await response.json();

      if (Array.isArray(data)) {
        setIncidents(data.reverse());
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="glass rounded-3xl p-6 h-162.5 overflow-hidden">

      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-3xl font-bold">
            Live Incidents
          </h2>

          <p className="text-slate-400 mt-1">
            Autonomous AI Incident Feed
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />

          <span className="text-green-400 text-sm">
            LIVE
          </span>
        </div>
      </div>

      {/* Scrollable Area */}
      <div className="overflow-y-auto h-135 pr-2 space-y-4">

        {incidents.length === 0 && (
          <div className="text-slate-400">
            No incidents yet...
          </div>
        )}

        {incidents.map((incident, index) => (
          <div
            key={index}
            className="bg-black/30 border border-white/10 rounded-2xl p-5 hover:border-cyan-500/40 transition-all duration-300"
          >

            {/* Top */}
            <div className="flex items-center justify-between mb-4">

              <h3 className="text-xl font-semibold">
                {incident.title || "Unknown Incident"}
              </h3>

              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  incident.severity === "Critical"
                    ? "bg-red-500/20 text-red-400"
                    : incident.severity === "High"
                    ? "bg-orange-500/20 text-orange-400"
                    : "bg-yellow-500/20 text-yellow-400"
                }`}
              >
                {incident.severity || "Medium"}
              </span>
            </div>

            {/* Status */}
            <div className="mb-4">
              <span className="text-slate-400">
                Status:
              </span>

              <span className="ml-2 text-cyan-400">
                {incident.status || "Detected"}
              </span>
            </div>

            {/* AI Analysis */}
            <div className="bg-indigo-500/10 rounded-xl p-4 border border-indigo-500/20">

              <p className="text-sm text-cyan-300 mb-2">
                AI ANALYSIS
              </p>

              <p className="text-slate-300 whitespace-pre-line leading-7">
                {incident.aiAnalysis ||
                  "AI analysis pending..."}
              </p>
            </div>

            {/* Footer */}
            <div className="mt-4 flex items-center justify-between text-sm text-slate-500">

              <span>
                Autonomous remediation active
              </span>

              <span>
                {incident.createdAt
                  ? new Date(
                      incident.createdAt
                    ).toLocaleTimeString()
                  : "Now"}
              </span>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}