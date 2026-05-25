"use client";

import { useEffect, useState } from "react";

const steps = [
  {
    title: "Traffic Spike Detected",
    time: "00:01",
    status: "warning",
  },

  {
    title: "CPU Usage Exceeded Threshold",
    time: "00:03",
    status: "critical",
  },

  {
    title: "Kubernetes Pod Restarted",
    time: "00:05",
    status: "critical",
  },

  {
    title: "AI Root Cause Analysis Generated",
    time: "00:07",
    status: "info",
  },

  {
    title: "Autonomous Remediation Triggered",
    time: "00:10",
    status: "success",
  },

  {
    title: "Infrastructure Stabilized",
    time: "00:15",
    status: "success",
  },
];

export default function IncidentReplay() {
  const [activeStep, setActiveStep] =
    useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-center justify-between mb-8">

        <div>
          <p className="text-cyan-400 text-sm">
            INCIDENT REPLAY ENGINE
          </p>

          <h2 className="text-3xl font-bold">
            Autonomous Failure Replay
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500 animate-pulse" />

          <span className="text-red-400 text-sm">
            LIVE REPLAY
          </span>
        </div>
      </div>

      <div className="space-y-5">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`
              p-4 rounded-2xl border transition-all duration-500

              ${
                activeStep === index
                  ? "border-cyan-500 bg-cyan-500/10 scale-[1.02]"
                  : "border-white/10 bg-black/20"
              }
            `}
          >
            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div
                  className={`
                    w-4 h-4 rounded-full

                    ${
                      step.status === "critical"
                        ? "bg-red-500"
                        : ""
                    }

                    ${
                      step.status === "warning"
                        ? "bg-yellow-500"
                        : ""
                    }

                    ${
                      step.status === "success"
                        ? "bg-green-500"
                        : ""
                    }

                    ${
                      step.status === "info"
                        ? "bg-cyan-500"
                        : ""
                    }
                  `}
                />

                <div>
                  <p className="font-semibold">
                    {step.title}
                  </p>

                  <p className="text-sm text-slate-400">
                    AI Infrastructure Event
                  </p>
                </div>
              </div>

              <div className="text-cyan-400 font-mono">
                {step.time}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}