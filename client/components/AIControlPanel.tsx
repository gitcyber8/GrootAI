"use client";

import axios from "axios";

export default function AIControlPanel() {
  async function simulateIncident() {
    try {
      await axios.post(
        "http://localhost:5000/api/incidents/simulate"
      );

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="glass rounded-3xl p-6">
      <h2 className="text-2xl font-bold mb-4">
        AI Automation Control
      </h2>

      <p className="text-slate-400 mb-6">
        Simulate autonomous AI infrastructure monitoring
        and incident detection.
      </p>

      <button
        onClick={simulateIncident}
        className="px-6 py-3 rounded-2xl bg-cyan-500 hover:bg-cyan-400 transition-all font-semibold"
      >
        Trigger AI Incident Simulation
      </button>
    </div>
  );
}