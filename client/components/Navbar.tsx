"use client";

import { Bell, Search, ChevronDown } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between">
      {/* Search Bar */}
      <div className="flex items-center bg-[#0B1120] border border-gray-800 rounded-2xl px-4 py-3 w-125">
        <Search size={18} className="text-gray-400" />

        <input
          type="text"
          placeholder="Search incidents, logs, services..."
          className="bg-transparent outline-none text-sm ml-3 w-full placeholder:text-gray-500"
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5">
        {/* Notifications */}
        <div className="relative">
          <Bell size={22} className="text-gray-300 cursor-pointer" />

          <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-red-500 flex items-center justify-center text-[10px]">
            3
          </div>
        </div>

        {/* Team Profile */}
        <div className="flex items-center gap-3 bg-[#0B1120] border border-gray-800 px-4 py-2 rounded-2xl cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-purple-500 flex items-center justify-center font-bold">
            S
          </div>

          <div>
            <p className="text-sm font-medium">
              SRE Team
            </p>

            <p className="text-xs text-gray-400">
              Monitoring Active
            </p>
          </div>

          <ChevronDown size={18} className="text-gray-400" />
        </div>
      </div>
    </nav>
  );
}