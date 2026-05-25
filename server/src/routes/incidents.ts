import express from "express";

const router = express.Router();

let incidents: any[] = [];

const templates = [

  {
    title: "Container Memory Leak",
    severity: "Critical",
    status: "Detected",
    rootCause:
      "Redis memory overflow caused cache instability.",
  },

  {
    title: "Kubernetes Pod Crash",
    severity: "High",
    status: "Mitigating",
    rootCause:
      "Node pressure triggered pod eviction cascade.",
  },

  {
    title: "API Gateway Latency Spike",
    severity: "Medium",
    status: "Monitoring",
    rootCause:
      "Traffic surge overloaded edge gateway clusters.",
  },

  {
    title: "Database Replication Failure",
    severity: "Critical",
    status: "Escalated",
    rootCause:
      "Replication lag exceeded safe threshold limits.",
  },

  {
    title: "Authentication Service Timeout",
    severity: "High",
    status: "Analyzing",
    rootCause:
      "OAuth token validation service degraded.",
  },

  {
    title: "Redis Cache Eviction Storm",
    severity: "Critical",
    status: "Detected",
    rootCause:
      "Cache memory saturation exceeded threshold.",
  },

];

function addIncident() {

  const random =
    templates[
      Math.floor(
        Math.random() *
          templates.length
      )
    ];

  const incident = {

    id: Date.now(),

    title: random.title,

    severity: random.severity,

    status: random.status,

    rootCause: random.rootCause,

    aiConfidence:
      Math.floor(Math.random() * 10) + 90,

    time: new Date().toLocaleTimeString(),

  };

  // ADD NEW INCIDENT ON TOP

  incidents.unshift(incident);

  // KEEP LAST 25 INCIDENTS

  if (incidents.length > 25) {

    incidents.pop();

  }

}

// ADD FIRST INCIDENT

addIncident();

// AUTO ADD EVERY 5 SEC

setInterval(() => {

  addIncident();

}, 5000);

router.get("/", (req, res) => {

  res.json(incidents);

});

export default router;