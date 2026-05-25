import express from "express";

const router = express.Router();

const incidentTemplates = [
  {
    title: "Kubernetes Pod Crash",
    severity: "Critical",
    status: "Investigating",
  },

  {
    title: "API Gateway Latency Spike",
    severity: "High",
    status: "Mitigated",
  },

  {
    title: "Database Connection Saturation",
    severity: "Medium",
    status: "Monitoring",
  },

  {
    title: "Redis Cache Eviction Storm",
    severity: "High",
    status: "Investigating",
  },

  {
    title: "Memory Leak Detected",
    severity: "Critical",
    status: "Escalated",
  },

  {
    title: "Authentication Service Timeout",
    severity: "High",
    status: "Mitigated",
  },

  {
    title: "Disk Usage Threshold Exceeded",
    severity: "Medium",
    status: "Monitoring",
  },
];

router.get("/", (req, res) => {

  const shuffled = incidentTemplates
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  const incidents = shuffled.map(
    (incident, index) => ({
      id: index + 1,

      title: incident.title,

      severity: incident.severity,

      status: incident.status,

      time: new Date().toLocaleTimeString(),

      aiConfidence:
        Math.floor(Math.random() * 15) + 85,

      affectedNodes:
        Math.floor(Math.random() * 12) + 2,

      autoRemediation:
        Math.random() > 0.5
          ? "Triggered"
          : "Pending",
    })
  );

  res.json(incidents);
});

export default router;