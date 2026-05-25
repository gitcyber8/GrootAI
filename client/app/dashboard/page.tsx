"use client";

import NavBar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import DashboardCard from "@/components/DashboardCard";
import IncidentCard from "@/components/IncidentCard";
import AIAnalysis from "@/components/AIAnalysis";
import MetricsChart from "@/components/MetricsChart";
import TimeLine from "@/components/timeline";
import IncidentsList from "@/components/IncidentsList";
import AILoader from "@/components/AILoader";
import LiveLogs from "@/components/LiveLogs";
import LiveMetrics from "@/components/LiveMetrices";
import IncidentReplay from "@/components/IncidentReplay";
import ActionCenter from "@/components/ActionCenter";
import IncidentReport from "@/components/IncidentReport";
import ServiceTopology from "@/components/ServiceTopology";
import SystemStatus from "@/components/SystemStatus";
export default function DashboardPage() {
  return (
    <main className="flex bg-[#050816] text-white min-h-screen">
      <Sidebar />

      <div className="flex-1 p-6 overflow-y-auto">
        <NavBar />

        {/* Top Cards */}
        <div className="grid grid-cols-4 gap-4 mt-6">
          <DashboardCard
            title="Critical Incidents"
            value="3"
            color="bg-red-500"
          />

          <DashboardCard
            title="High Incidents"
            value="5"
            color="bg-orange-500"
          />

          <DashboardCard
            title="Affected Services"
            value="7"
            color="bg-yellow-500"
          />

          <DashboardCard
            title="MTTR"
            value="12m"
            color="bg-blue-500"
          />
        </div>

        {/* AI Loader */}
        <div className="mt-6">
          <AILoader />
        </div>

        {/* Live Metrics */}
        <div className="mt-6">
          <SystemStatus />
        </div>

        {/* Replay */}
        <div className="mt-6">
          <IncidentReplay />
        </div>

        {/* Action Center */}
        <div className="mt-6">
          <ActionCenter />
        </div>

        {/* Reports */}
        <div className="mt-6">
          <IncidentReport />
        </div>

        {/* Main Section */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <IncidentCard
                      service="Kubernetes Cluster"
                      severity="Critical"
                      status="Active" title={""} confidence={0}          />

          <AIAnalysis />
        </div>

        {/* Incident List */}
        <div className="mt-6">
          <IncidentsList />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          <MetricsChart />

          <div className="space-y-6">
            <TimeLine />
            <LiveLogs />
            <ServiceTopology />
          </div>
        </div>
      </div>
    </main>
  );
}