"use client";

import Sidebar from "@/components/Sidebar";
import NavBar from "@/components/Navbar";
import CopilotChat from "@/components/CopilotChat";

export default function CopilotPage() {
  return (
    <main className="flex bg-[#050816] text-white min-h-screen">

      <Sidebar />

      <div className="flex-1 p-6">

        <NavBar />

        <div className="mt-6">
          <CopilotChat />
        </div>
      </div>
    </main>
  );
}