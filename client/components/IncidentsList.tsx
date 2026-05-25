"use client";

import { useEffect, useState } from "react";

interface Incident {
  id: number;
  title: string;
  severity: string;
  status: string;
  rootCause: string;
  remediation: string;
  aiConfidence: number;
}

export default function IncidentsList() {

  const [incident, setIncident] =
    useState<Incident | null>(null);

  const [currentTime, setCurrentTime] =
    useState("");

  const incidentTemplates = [

    {
      title: "Container Memory Leak",
      severity: "Critical",
      status: "Detected",
      rootCause:
        "Redis memory overflow caused cache instability.",
      remediation:
        "Faulty nodes isolated by remediation engine.",
    },

    {
      title: "Kubernetes Pod Crash",
      severity: "High",
      status: "Mitigating",
      rootCause:
        "Node pressure triggered pod eviction cascade.",
      remediation:
        "AI scheduler redistributed workloads automatically.",
    },

    {
      title: "API Gateway Latency Spike",
      severity: "Medium",
      status: "Monitoring",
      rootCause:
        "Traffic surge overloaded edge gateway clusters.",
      remediation:
        "Dynamic load balancing activated successfully.",
    },

    {
      title: "Database Replication Failure",
      severity: "Critical",
      status: "Escalated",
      rootCause:
        "Replication lag exceeded safe threshold limits.",
      remediation:
        "Failover replica promoted automatically.",
    },

    {
      title: "Authentication Service Timeout",
      severity: "High",
      status: "Analyzing",
      rootCause:
        "OAuth token validation service degraded.",
      remediation:
        "Fallback authentication pipeline activated.",
    },

  ];

  useEffect(() => {

    generateIncident();

    // LIVE SYSTEM CLOCK

    const clockInterval = setInterval(() => {

      const now = new Date();

      setCurrentTime(
        now.toLocaleTimeString()
      );

    }, 1000);

    // AUTO INCIDENT CHANGER

    const incidentInterval = setInterval(() => {

      generateIncident();

    }, 8000);

    return () => {

      clearInterval(clockInterval);

      clearInterval(incidentInterval);

    };

  }, []);

  const generateIncident = () => {

    const random =
      incidentTemplates[
        Math.floor(
          Math.random() *
            incidentTemplates.length
        )
      ];

    setIncident({

      id: Math.random(),

      title: random.title,

      severity: random.severity,

      status: random.status,

      rootCause: random.rootCause,

      remediation: random.remediation,

      aiConfidence:
        Math.floor(Math.random() * 10) + 90,

    });

  };

  if (!incident) return null;

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

      {/* MAIN CARD */}

      <div className="
        bg-[#070B1A]
        border border-[#1D2333]
        rounded-3xl
        p-8
        shadow-2xl
        transition-all
      ">

        {/* TOP */}

        <div className="
          flex items-center
          justify-between
        ">

          <div>

            <h2 className="
              text-4xl
              font-bold
              text-white
              animate-pulse
            ">
              {incident.title}
            </h2>

            <div className="
              flex items-center
              gap-3
              mt-5
            ">

              <span className="
                text-gray-400
                text-2xl
              ">
                Status:
              </span>

              <span className="
                text-cyan-400
                text-2xl
                font-semibold
                animate-pulse
              ">
                {incident.status}
              </span>

            </div>

          </div>

          {/* LIVE DOT */}

          <div className="
            flex items-center gap-3
          ">

            <div className="
              h-5 w-5
              bg-red-500
              rounded-full
              animate-ping
            " />

            <span className="
              text-red-400
              text-lg
            ">
              LIVE
            </span>

          </div>

        </div>

        {/* AI ANALYSIS */}

        <div className="
          mt-8
          bg-[#0B1030]
          border border-[#1F2A5C]
          rounded-3xl
          p-8
        ">

          <h3 className="
            text-cyan-400
            font-bold
            text-2xl
            tracking-widest
          ">
            AI ANALYSIS
          </h3>

          <div className="
            mt-10
            space-y-10
          ">

            {/* ROOT CAUSE */}

            <div>

              <p className="
                text-gray-400
                text-2xl
                mb-3
              ">
                Root Cause Analysis:
              </p>

              <p className="
                text-white
                text-2xl
                leading-relaxed
              ">
                {incident.rootCause}
              </p>

            </div>

            {/* REMEDIATION */}

            <div>

              <p className="
                text-gray-400
                text-2xl
                mb-3
              ">
                Recommended Remediation:
              </p>

              <p className="
                text-white
                text-2xl
                leading-relaxed
              ">
                {incident.remediation}
              </p>

            </div>

            {/* CONFIDENCE */}

            <div>

              <p className="
                text-gray-400
                text-2xl
                mb-3
              ">
                AI Confidence Score:
              </p>

              <p className="
                text-green-400
                text-3xl
                font-bold
              ">
                {incident.aiConfidence}%
              </p>

            </div>

          </div>

        </div>

        {/* FOOTER */}

        <div className="
          flex items-center
          justify-between
          mt-8
        ">

          <div className="
            flex items-center gap-3
          ">

            <div className="
              h-3 w-3
              bg-green-400
              rounded-full
              animate-pulse
            " />

            <p className="
              text-gray-400
              text-xl
            ">
              Autonomous remediation active
            </p>

          </div>

          {/* REAL SYSTEM TIME */}

          <div className="
            text-right
          ">

            <p className="
              text-gray-500
              text-sm
            ">
              SYSTEM TIME
            </p>

            <p className="
              text-cyan-400
              text-2xl
              font-bold
              tracking-widest
            ">
              {currentTime}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}