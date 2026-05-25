import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import { createServer } from "http";
import { Server } from "socket.io";

import incidentRoutes from "./routes/incidents";
import chatRoutes from "./routes/chat";

import { connectDB, db } from "./db";
import { generateMetrics } from "./metrics";

dotenv.config();

const app = express();

const httpServer = createServer(app);

const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

app.use(cors());

app.use(express.json());

app.use("/api/incidents", incidentRoutes);

app.use("/api/chat", chatRoutes);

app.get("/", (_, res) => {
  res.send("Backend Running");
});

function generateAIResponse(title: string) {
  const rootCauses = [
    "Redis memory overflow caused cache instability.",
    "Kubernetes restart loop detected due to CPU throttling.",
    "Database replication lag exceeded safe thresholds.",
    "API gateway timeout triggered cascading failures.",
    "Container memory leak degraded service health.",
    "Service mesh communication failure detected.",
  ];

  const remediations = [
    "AI restarted affected services automatically.",
    "Autoscaling workflows were triggered.",
    "Cache cleanup and failover executed.",
    "Traffic rerouting initiated successfully.",
    "Faulty nodes isolated by remediation engine.",
    "Rollback deployment executed automatically.",
  ];

  return `
Root Cause Analysis:
${
  rootCauses[
    Math.floor(Math.random() * rootCauses.length)
  ]
}

Recommended Remediation:
${
  remediations[
    Math.floor(Math.random() * remediations.length)
  ]
}

AI Confidence Score:
${Math.floor(Math.random() * 20) + 80}%
  `;
}

async function startServer() {
  await connectDB();

  httpServer.listen(5000, () => {
    console.log(
      "Server running on port 5000"
    );
  });
}

function startAIAgent() {
  setInterval(async () => {
    const incidents = [
      "Redis Cache Failure",
      "Kubernetes Pod Crash",
      "Database Replication Failure",
      "High CPU Usage Detected",
      "API Gateway Timeout",
      "AI Infrastructure Anomaly",
      "Container Memory Leak",
      "Service Mesh Failure",
    ];

    const title =
      incidents[
        Math.floor(
          Math.random() * incidents.length
        )
      ];

    const aiResponse =
      generateAIResponse(title);

    const severities = [
      "Critical",
      "High",
      "Medium",
    ];

    const severity =
      severities[
        Math.floor(
          Math.random() *
          severities.length
        )
      ];

    const newIncident = {
      title,

      severity,

      status: "Detected",

      aiAnalysis: aiResponse,

      solution:
        "Autonomous remediation workflow initiated.",

      createdAt: new Date(),
    };

    db.data?.incidents.push(newIncident);

    await db.write();

    io.emit("newIncident", newIncident);

    console.log(
      "AI Agent Generated:",
      title
    );

    setTimeout(async () => {
      const latest =
        db.data?.incidents[
          db.data.incidents.length - 1
        ];

      if (latest) {
        latest.status =
          "Root Cause Identified";

        await db.write();

        io.emit(
          "incidentUpdated",
          latest
        );
      }
    }, 5000);

    setTimeout(async () => {
      const latest =
        db.data?.incidents[
          db.data.incidents.length - 1
        ];

      if (latest) {
        latest.status =
          "Auto Remediation Running";

        await db.write();

        io.emit(
          "incidentUpdated",
          latest
        );
      }
    }, 10000);

    setTimeout(async () => {
      const latest =
        db.data?.incidents[
          db.data.incidents.length - 1
        ];

      if (latest) {
        latest.status = "Resolved";

        await db.write();

        io.emit(
          "incidentUpdated",
          latest
        );
      }
    }, 15000);

  }, 30000);
}

io.on("connection", () => {
  console.log(
    "Frontend connected via WebSocket"
  );
});

startServer();

startAIAgent();
setInterval(() => {
  const metrics = generateMetrics();

  io.emit("metricsUpdate", metrics);

  console.log("Metrics Updated");
}, 3000);