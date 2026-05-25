"use client";

import {
  Database,
  Server,
  Shield,
  Cloud,
  Cpu,
} from "lucide-react";

const services = [
  {
    name: "API Gateway",
    status: "healthy",
    icon: Cloud,
  },

  {
    name: "Auth Service",
    status: "healthy",
    icon: Shield,
  },

  {
    name: "Redis Cache",
    status: "warning",
    icon: Cpu,
  },

  {
    name: "Primary Database",
    status: "critical",
    icon: Database,
  },

  {
    name: "Kubernetes Cluster",
    status: "healthy",
    icon: Server,
  },
];

export default function ServiceTopology() {
  return (
    <div className="glass rounded-3xl p-6">
      <h2 className="text-2xl font-bold mb-8">
        Infrastructure Topology
      </h2>

      <div className="flex flex-col items-center gap-8">

        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <div
              key={index}
              className="flex flex-col items-center"
            >

              <div
                className={`
                  relative w-52 p-5 rounded-2xl
                  border
                  ${
                    service.status === "healthy"
                      ? "border-green-500 bg-green-500/10"
                      : ""
                  }

                  ${
                    service.status === "warning"
                      ? "border-yellow-500 bg-yellow-500/10"
                      : ""
                  }

                  ${
                    service.status === "critical"
                      ? "border-red-500 bg-red-500/10 animate-pulse"
                      : ""
                  }
                `}
              >
                <div className="flex items-center gap-4">

                  <div
                    className={`
                      p-3 rounded-xl

                      ${
                        service.status === "healthy"
                          ? "bg-green-500/20"
                          : ""
                      }

                      ${
                        service.status === "warning"
                          ? "bg-yellow-500/20"
                          : ""
                      }

                      ${
                        service.status === "critical"
                          ? "bg-red-500/20"
                          : ""
                      }
                    `}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <p className="font-bold">
                      {service.name}
                    </p>

                    <p className="text-sm text-slate-400">
                      {service.status}
                    </p>
                  </div>

                </div>
              </div>

              {index !== services.length - 1 && (
                <div className="h-10 w-1 bg-cyan-500/40" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}