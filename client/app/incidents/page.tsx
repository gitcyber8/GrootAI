"use client";

import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/Navbar";
import IncidentsList from "@/components/IncidentsList";

export default function IncidentsPage() {
  return (
    <main className="flex bg-[#050816] text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <NavBar />

        <div className="mt-6">
          <IncidentsList />
        </div>
      </div>
    </main>
  );
}