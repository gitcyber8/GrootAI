import express from "express";
import { db } from "../db";

const router = express.Router();

function generateRandomIncident() {
  const incidents = [
    "Redis Cache Failure",
    "Kubernetes Pod Crash",
    "API Gateway Timeout",
    "Database Replication Failure",
    "High CPU Usage Detected",
    "AI Detected Infrastructure Anomaly",
  ];

  return incidents[
    Math.floor(Math.random() * incidents.length)
  ];
}

router.get("/", (_, res) => {
  res.json(db.data?.incidents || []);
});

router.post("/", async (req, res) => {
  const title = req.body.title || "";

  let aiAnalysis = "";
  let solution = "";
  let severity = req.body.severity || "Medium";

  if (title.toLowerCase().includes("redis")) {
    aiAnalysis =
      "AI detected abnormal Redis latency caused by cache saturation.";

    solution =
      "Recommended fix: restart Redis pods and clear stale cache.";

    severity = "Critical";
  }

  else if (
    title.toLowerCase().includes("kubernetes")
  ) {
    aiAnalysis =
      "AI detected Kubernetes pod instability due to memory pressure.";

    solution =
      "Recommended fix: scale cluster nodes and restart unhealthy pods.";

    severity = "High";
  }

  else if (
    title.toLowerCase().includes("database")
  ) {
    aiAnalysis =
      "AI detected database replication lag affecting read performance.";

    solution =
      "Recommended fix: restart replication service and verify database cluster health.";

    severity = "Critical";
  }

  else {
    aiAnalysis =
      "AI detected unusual infrastructure behavior.";

    solution =
      "Recommended fix: investigate infrastructure logs.";

    severity = "Medium";
  }

  const newIncident = {
    title,
    severity,
    status: "AI Investigating",
    aiAnalysis,
    solution,
    createdAt: new Date(),
  };

  db.data?.incidents.push(newIncident);

  await db.write();

  res.json(newIncident);
});

router.post("/simulate", async (_, res) => {
  const title = generateRandomIncident();

  let aiAnalysis = "";
  let solution = "";
  let severity = "Medium";

  if (title.toLowerCase().includes("redis")) {
    aiAnalysis =
      "AI detected abnormal Redis latency caused by cache saturation.";

    solution =
      "Recommended fix: restart Redis pods and clear stale cache.";

    severity = "Critical";
  }

  else if (
    title.toLowerCase().includes("kubernetes")
  ) {
    aiAnalysis =
      "AI detected Kubernetes pod instability due to memory pressure.";

    solution =
      "Recommended fix: scale cluster nodes and restart unhealthy pods.";

    severity = "High";
  }

  else if (
    title.toLowerCase().includes("database")
  ) {
    aiAnalysis =
      "AI detected replication instability in the primary database cluster.";

    solution =
      "Recommended fix: re-sync replicas and verify database node health.";

    severity = "Critical";
  }

  else {
    aiAnalysis =
      "AI detected unusual infrastructure behavior.";

    solution =
      "Recommended fix: investigate infrastructure logs.";

    severity = "Medium";
  }

  const newIncident = {
    title,
    severity,
    status: "AI Investigating",
    aiAnalysis,
    solution,
    createdAt: new Date(),
  };

  db.data?.incidents.push(newIncident);

  await db.write();

  res.json(newIncident);
});

export default router;