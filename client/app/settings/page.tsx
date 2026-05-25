"use client";

import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/Navbar";

export default function SettingsPage() {
  return (
    <main className="flex bg-[#050816] text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <NavBar />

        <div className="glass rounded-3xl p-8 mt-6">

          <h2 className="text-3xl font-bold mb-6">
            Platform Settings
          </h2>

          <div className="space-y-4">

            <div className="p-5 rounded-2xl bg-black/20 border border-white/5">
              AI Monitoring Engine: ACTIVE
            </div>

            <div className="p-5 rounded-2xl bg-black/20 border border-white/5">
              Autonomous Remediation: ENABLED
            </div>

            <div className="p-5 rounded-2xl bg-black/20 border border-white/5">
              Infrastructure Telemetry: STREAMING
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}