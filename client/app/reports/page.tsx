"use client";

import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/Navbar";
import IncidentReport from "@/components/IncidentReport";

export default function ReportsPage() {
  return (
    <main className="flex bg-[#050816] text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <NavBar />

        <div className="mt-6">
          <IncidentReport />
        </div>
      </div>
    </main>
  );
}