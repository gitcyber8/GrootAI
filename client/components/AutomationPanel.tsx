"use client";

const automations = [
  "Restarted failing Kubernetes pod",
  "Scaled Redis cluster automatically",
  "Cleared API gateway cache",
  "Rebalanced infrastructure traffic",
];

export default function AutomationPanel() {
  return (
    <div className="glass rounded-3xl p-5">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-2xl font-bold">
          Autonomous Remediation
        </h2>

        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />

          <span className="text-green-400 text-sm">
            ACTIVE
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {automations.map((item, i) => (
          <div
            key={i}
            className="bg-black/30 rounded-2xl p-4 border border-white/5"
          >
            <p className="text-cyan-300">
              ✓ {item}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}