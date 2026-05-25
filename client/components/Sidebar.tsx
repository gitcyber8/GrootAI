"use client";

import Link from "next/link";

import {
  LayoutDashboard,
  AlertTriangle,
  Bot,
  Network,
  FileText,
  Settings,
} from "lucide-react";

const items = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },

  {
    name: "Incidents",
    href: "/incidents",
    icon: AlertTriangle,
  },

  {
    name: "AI Copilot",
    href: "/copilot",
    icon: Bot,
  },

  {
    name: "Topology",
    href: "/topology",
    icon: Network,
  },

  {
    name: "Reports",
    href: "/reports",
    icon: FileText,
  },

  {
    name: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="w-72 min-h-screen border-r border-white/10 bg-black/20 backdrop-blur-xl p-6">

      <div className="mb-10">

        <h1 className="text-4xl font-bold bg-linear-to-r from-cyan-400 to-indigo-500 bg-clip-text text-transparent">
          Groot AI
        </h1>

        <p className="text-slate-400 mt-2">
          Autonomous AI Ops Platform
        </p>
      </div>

      <nav className="space-y-4">

        {items.map((item, index) => {
          const Icon = item.icon;

          return (
            <Link
              key={index}
              href={item.href}
              className="
                flex items-center gap-4
                p-4 rounded-2xl
                bg-white/5 hover:bg-cyan-500/10
                border border-white/5
                hover:border-cyan-500/30
                transition-all duration-300
              "
            >
              <Icon className="w-5 h-5 text-cyan-400" />

              <span className="font-medium">
                {item.name}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
