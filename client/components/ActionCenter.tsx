"use client";

import { useState } from "react";

const actions = [
  "Restart Service",
  "Scale Kubernetes Cluster",
  "Clear Redis Cache",
  "Rollback Deployment",
  "Trigger Database Failover",
];

export default function ActionCenter() {
  const [logs, setLogs] = useState<string[]>(
    []
  );

  const [loading, setLoading] =
    useState(false);

  const runAction = (action: string) => {
    setLoading(true);

    const timestamp =
      new Date().toLocaleTimeString();

    setLogs((prev) => [
      `[${timestamp}] Executing: ${action}`,
      ...prev,
    ]);

    setTimeout(() => {
      const successTime =
        new Date().toLocaleTimeString();

      setLogs((prev) => [
        `[${successTime}] AI Remediation Successful`,
        ...prev,
      ]);

      setLoading(false);
    }, 2500);
  };

  return (
    <div className="glass rounded-3xl p-6">
      <div className="flex items-center justify-between mb-8">

        <div>
          <p className="text-cyan-400 text-sm">
            AI REMEDIATION ENGINE
          </p>

          <h2 className="text-3xl font-bold">
            Autonomous Action Center
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

          <span className="text-green-400 text-sm">
            ACTIVE
          </span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">

        {actions.map((action, index) => (
          <button
            key={index}
            onClick={() =>
              runAction(action)
            }
            disabled={loading}
            className="
              p-4 rounded-2xl
              bg-cyan-500/10
              border border-cyan-500/20
              hover:bg-cyan-500/20
              transition-all duration-300
              text-left
            "
          >
            <p className="font-semibold">
              {action}
            </p>

            <p className="text-sm text-slate-400 mt-1">
              AI-triggered remediation
            </p>
          </button>
        ))}
      </div>

      <div className="mt-8">

        <h3 className="text-xl font-bold mb-4">
          Execution Logs
        </h3>

        <div className="bg-black/30 rounded-2xl p-4 h-64 overflow-y-auto space-y-3">

          {logs.map((log, index) => (
            <div
              key={index}
              className="
                border border-white/5
                bg-black/20
                rounded-xl
                p-3
              "
            >
              <p className="font-mono text-sm text-cyan-300">
                {log}
              </p>
            </div>
          ))}

          {logs.length === 0 && (
            <p className="text-slate-500">
              Awaiting AI remediation tasks...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}