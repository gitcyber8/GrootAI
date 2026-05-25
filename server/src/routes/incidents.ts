import express from "express";

const router = express.Router();

router.get("/", (req, res) => {

  const incidents = [
    {
      id: 1,
      title: "Kubernetes Pod Crash",
      severity: "Critical",
      status: "Investigating",
      time: new Date().toLocaleTimeString(),
    },

    {
      id: 2,
      title: "API Gateway Latency Spike",
      severity: "High",
      status: "Mitigated",
      time: new Date().toLocaleTimeString(),
    },

    {
      id: 3,
      title: "Database Connection Saturation",
      severity: "Medium",
      status: "Monitoring",
      time: new Date().toLocaleTimeString(),
    },
  ];

  res.json(incidents);
});

export default router;